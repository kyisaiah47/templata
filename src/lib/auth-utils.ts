import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export interface AuthSession {
  userId: string;
  email: string;
  name?: string;
  createdAt: number;
}

export async function getAuthenticatedUser(): Promise<AuthSession | null> {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('sb-access-token');

    if (!accessToken) {
      return null;
    }

    // Verify the token with Supabase
    const { data: { user }, error } = await supabase.auth.getUser(accessToken.value);

    if (error || !user) {
      return null;
    }

    // Get user profile - we need the users.id, not auth.users.id for foreign keys
    const { data: profile } = await supabase
      .from('users')
      .select('id, name')
      .eq('user_id', user.id)
      .single();

    if (!profile) {
      return null;
    }

    return {
      userId: profile.id, // Use users.id for foreign key relationships
      email: user.email!,
      name: profile.name || user.user_metadata?.name || undefined,
      createdAt: new Date(user.created_at).getTime(),
    };
  } catch (error) {
    console.error('Session error:', error);
    return null;
  }
}

export function unauthorizedResponse() {
  return NextResponse.json(
    { error: 'Unauthorized' },
    { status: 401 }
  );
}

export function errorResponse(message: string, status: number = 500) {
  return NextResponse.json(
    { error: message },
    { status }
  );
}

export function successResponse(data: any, status: number = 200) {
  return NextResponse.json(data, { status });
}
