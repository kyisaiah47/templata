-- Add support for multiple notes per track with titles
-- Add new columns if they don't exist
ALTER TABLE notes ADD COLUMN IF NOT EXISTS title TEXT;
ALTER TABLE notes ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW();
ALTER TABLE notes ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

-- Set default title for existing notes
UPDATE notes SET title = 'Untitled Note' WHERE title IS NULL;

-- Make title NOT NULL after setting defaults
ALTER TABLE notes ALTER COLUMN title SET NOT NULL;

-- Create index on track_id for faster queries
CREATE INDEX IF NOT EXISTS idx_notes_track_id ON notes(track_id);

-- Create index on created_at for ordering
CREATE INDEX IF NOT EXISTS idx_notes_created_at ON notes(created_at);
