import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser, unauthorizedResponse, errorResponse, successResponse } from '@/lib/auth-utils';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const track_id = searchParams.get('track_id');

    const user = await getAuthenticatedUser();
    if (!user) {
      return unauthorizedResponse();
    }

    if (!track_id) {
      return errorResponse('track_id is required', 400);
    }

    // Verify track ownership
    const { data: track, error: trackError } = await supabase
      .from('tracks')
      .select('id')
      .eq('id', track_id)
      .eq('user_id', user.userId)
      .single();

    if (trackError || !track) {
      return errorResponse('Track not found', 404);
    }

    // Get all notes for this track, ordered by creation date
    const { data: notes, error: noteError } = await supabase
      .from('notes')
      .select('*')
      .eq('track_id', track_id)
      .order('created_at', { ascending: true });

    if (noteError) {
      console.error('Error fetching notes:', noteError);
      return errorResponse('Failed to fetch notes');
    }

    return successResponse({ notes: notes || [] });
  } catch (error) {
    console.error('Error in GET /api/notes:', error);
    return errorResponse('Internal server error');
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthenticatedUser();
    if (!user) {
      return unauthorizedResponse();
    }

    const body = await request.json();
    const { track_id, content, title, note_id } = body;

    if (!track_id) {
      return errorResponse('track_id is required', 400);
    }

    // Verify track ownership
    const { data: track, error: trackError } = await supabase
      .from('tracks')
      .select('id')
      .eq('id', track_id)
      .eq('user_id', user.userId)
      .single();

    if (trackError || !track) {
      return errorResponse('Track not found', 404);
    }

    if (note_id) {
      // Update existing note
      const { data: updatedNote, error: updateError } = await supabase
        .from('notes')
        .update({
          content,
          ...(title !== undefined && { title }),
          updated_at: new Date().toISOString()
        })
        .eq('id', note_id)
        .eq('track_id', track_id)
        .select()
        .single();

      if (updateError) {
        console.error('Error updating note:', updateError);
        return errorResponse('Failed to update note');
      }

      return successResponse({ note: updatedNote });
    } else {
      // Create new note
      const { data: newNote, error: insertError } = await supabase
        .from('notes')
        .insert({
          track_id,
          title: title || 'Untitled Note',
          content: content || '',
        })
        .select()
        .single();

      if (insertError) {
        console.error('Error creating note:', insertError);
        return errorResponse('Failed to create note');
      }

      return successResponse({ note: newNote });
    }
  } catch (error) {
    console.error('Error in POST /api/notes:', error);
    return errorResponse('Internal server error');
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const user = await getAuthenticatedUser();
    if (!user) {
      return unauthorizedResponse();
    }

    const { searchParams } = new URL(request.url);
    const note_id = searchParams.get('note_id');
    const track_id = searchParams.get('track_id');

    if (!note_id || !track_id) {
      return errorResponse('note_id and track_id are required', 400);
    }

    // Verify track ownership
    const { data: track, error: trackError } = await supabase
      .from('tracks')
      .select('id')
      .eq('id', track_id)
      .eq('user_id', user.userId)
      .single();

    if (trackError || !track) {
      return errorResponse('Track not found', 404);
    }

    // Delete the note
    const { error: deleteError } = await supabase
      .from('notes')
      .delete()
      .eq('id', note_id)
      .eq('track_id', track_id);

    if (deleteError) {
      console.error('Error deleting note:', deleteError);
      return errorResponse('Failed to delete note');
    }

    return successResponse({ success: true });
  } catch (error) {
    console.error('Error in DELETE /api/notes:', error);
    return errorResponse('Internal server error');
  }
}
