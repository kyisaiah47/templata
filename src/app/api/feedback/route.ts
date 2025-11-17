import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser } from '@/lib/auth-utils';
import { apiLimiter } from '@/lib/rate-limit';
import { sanitizeErrorMessage } from '@/lib/validation-utils';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// POST - Submit feedback
export async function POST(request: NextRequest) {
  // Apply rate limiting
  const rateLimitResult = await apiLimiter(request);
  if (!rateLimitResult.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  // Get user if authenticated (but don't require it)
  const user = await getAuthenticatedUser();
  const userId = user?.userId || null;

  const { message, type } = await request.json();

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

  // Get user email if authenticated
  let userEmail = null;
  if (userId) {
    const { data: userData } = await supabase.auth.admin.getUserById(userId);
    userEmail = userData?.user?.email || null;
  }

  // Insert feedback
  const { data, error } = await supabase
    .from('feedback')
    .insert({
      user_id: userId,
      message: message.trim(),
      email: userEmail,
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
