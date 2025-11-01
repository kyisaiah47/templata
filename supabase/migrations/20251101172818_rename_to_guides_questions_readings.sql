-- Phase 2: Complete terminology migration
-- templates → guides, prompts → questions, articles → readings

-- Rename tables
ALTER TABLE templata_templates RENAME TO guides;
ALTER TABLE templata_prompts RENAME TO questions;
ALTER TABLE templata_articles RENAME TO readings;

-- Update column names in guides table
ALTER TABLE guides RENAME COLUMN template_id TO guide_id;

-- Update column names in questions table
ALTER TABLE questions RENAME COLUMN prompt_id TO question_id;
ALTER TABLE questions RENAME COLUMN template_id TO guide_id;

-- Update column names in readings table
ALTER TABLE readings RENAME COLUMN article_id TO reading_id;

-- Update foreign key references in tracks table
ALTER TABLE tracks RENAME COLUMN guide_id TO guide_id; -- already correct

-- Update foreign key references in answers table
ALTER TABLE answers RENAME COLUMN template_id TO guide_id;
ALTER TABLE answers RENAME COLUMN prompt_id TO question_id;

-- Drop and recreate foreign key constraints with new names
ALTER TABLE questions DROP CONSTRAINT IF EXISTS templata_prompts_template_id_fkey;
ALTER TABLE questions ADD CONSTRAINT questions_guide_id_fkey
  FOREIGN KEY (guide_id) REFERENCES guides(guide_id) ON DELETE CASCADE;

ALTER TABLE tracks DROP CONSTRAINT IF EXISTS tracks_guide_id_fkey;
ALTER TABLE tracks ADD CONSTRAINT tracks_guide_id_fkey
  FOREIGN KEY (guide_id) REFERENCES guides(guide_id) ON DELETE CASCADE;

-- Rename indexes to match new table names
ALTER INDEX IF EXISTS templata_templates_pkey RENAME TO guides_pkey;
ALTER INDEX IF EXISTS templata_prompts_pkey RENAME TO questions_pkey;
ALTER INDEX IF EXISTS templata_articles_pkey RENAME TO readings_pkey;

ALTER INDEX IF EXISTS idx_templata_templates_tags RENAME TO idx_guides_tags;
ALTER INDEX IF EXISTS idx_templata_templates_difficulty RENAME TO idx_guides_difficulty;
ALTER INDEX IF EXISTS idx_templata_templates_category RENAME TO idx_guides_category;

-- Update any existing check constraints
ALTER TABLE questions DROP CONSTRAINT IF EXISTS templata_prompts_type_check;
ALTER TABLE questions ADD CONSTRAINT questions_type_check
  CHECK (type IN ('research', 'planning', 'reflection', 'action', 'decision'));
