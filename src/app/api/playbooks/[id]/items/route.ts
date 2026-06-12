import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser } from '@/lib/auth-utils';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// POST /api/playbooks/[id]/items — add an item to a phase
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: playbookId } = await params;
  const user = await getAuthenticatedUser();

  const { data: playbook } = await supabase
    .from('playbooks')
    .select('user_id')
    .eq('id', playbookId)
    .single();

  if (!playbook || playbook.user_id !== user?.userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { type, content, phase } = await request.json();

  if (!['task', 'question'].includes(type)) {
    return NextResponse.json({ error: 'Invalid item type.' }, { status: 400 });
  }
  if (typeof content !== 'string' || !content.trim() || content.length > 1000) {
    return NextResponse.json({ error: 'Invalid content.' }, { status: 400 });
  }

  const { data: maxRow } = await supabase
    .from('items')
    .select('position')
    .eq('playbook_id', playbookId)
    .order('position', { ascending: false })
    .limit(1)
    .single();

  const { data: item, error } = await supabase
    .from('items')
    .insert({
      playbook_id: playbookId,
      type,
      content: content.trim(),
      phase: phase ?? null,
      position: (maxRow?.position ?? 0) + 1,
      completed: false,
      resource_type: null,
      url: null,
    })
    .select('*')
    .single();

  if (error || !item) {
    return NextResponse.json({ error: 'Failed to add item.' }, { status: 500 });
  }

  return NextResponse.json({ item }, { status: 201 });
}
