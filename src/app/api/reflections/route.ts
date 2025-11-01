import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser, unauthorizedResponse, errorResponse, successResponse } from '@/lib/auth-utils';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// GET - Fetch user's reflections
export async function GET(request: NextRequest) {
  const user = await getAuthenticatedUser();

  if (!user) {
    return unauthorizedResponse();
  }

  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');
  const limit = searchParams.get('limit');

  let query = supabase
    .from('reflections')
    .select('*')
    .eq('user_id', user.userId)
    .order('date', { ascending: false });

  if (date) {
    query = query.eq('date', date);
  }

  if (limit) {
    query = query.limit(parseInt(limit));
  }

  const { data, error } = await query;

  if (error) {
    return errorResponse(error.message);
  }

  return successResponse({ reflections: data });
}

// POST - Save/update reflection
export async function POST(request: NextRequest) {
  const user = await getAuthenticatedUser();

  if (!user) {
    return unauthorizedResponse();
  }

  const { date, prompt, content, mood, tags } = await request.json();

  if (!date) {
    return errorResponse('date is required', 400);
  }

  // Upsert (insert or update)
  const { data, error } = await supabase
    .from('reflections')
    .upsert(
      {
        user_id: user.userId,
        date,
        prompt: prompt || '',
        content: content || '',
        mood: mood || '',
        tags: tags || [],
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: 'user_id,date',
      }
    )
    .select()
    .single();

  if (error) {
    return errorResponse(error.message);
  }

  return successResponse({ success: true, data });
}
