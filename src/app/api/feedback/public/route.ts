import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { apiLimiter } from '@/lib/rate-limit';
import { sanitizeErrorMessage } from '@/lib/validation-utils';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// POST - Submit public feedback (no auth required)
export async function POST(request: NextRequest) {
  // Apply rate limiting
  const rateLimitResult = await apiLimiter(request);
  if (!rateLimitResult.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  const { message, email, type } = await request.json();

  // Validate required fields
  if (!message || typeof message !== 'string' || !message.trim()) {
    return NextResponse.json(
      { error: 'Message is required' },
      { status: 400 }
    );
  }

  // Validate type if provided
  const validTypes = ['general', 'bug', 'feature'];
  const feedbackType = type && validTypes.includes(type) ? type : 'general';

  // Validate email format if provided
  let validatedEmail = null;
  if (email && typeof email === 'string' && email.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    validatedEmail = email.trim();
  }

  // Insert feedback (no user_id for public feedback)
  const { data, error } = await supabase
    .from('feedback')
    .insert({
      user_id: null,
      message: message.trim(),
      email: validatedEmail,
      type: feedbackType,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json(
      { error: sanitizeErrorMessage(error) },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, data });
}
