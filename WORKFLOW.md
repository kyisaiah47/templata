# Content Generation & Database Workflow

## How It Works Now

1. **TypeScript files** in `src/data/` are your **source of truth**
2. **Supabase database** is where the app fetches content from
3. **Sync script** keeps them in sync

## Daily Workflow

### 1. Generate New Content

```bash
cd generation-scripts

# Generate articles (auto-syncs to Supabase when complete)
./article-generation-cycle.sh 0

# Generate prompts
./prompt-generation-cycle.sh

# Generate marketing pages
./marketing-generation-cycle.sh

# Generate templates
./template-generation-cycle.sh
```

### 2. Manual Sync (if needed)

If you manually edit any `.ts` files:

```bash
node scripts/sync-to-supabase.js
```

This only uploads **changed files** (faster than re-seeding everything).

### 3. Full Re-Seed (rarely needed)

If you need to completely rebuild the database:

```bash
# Delete all data
psql -h db.uvcstcajctqbxddosdbf.supabase.co -U postgres -d postgres -c "TRUNCATE templata_articles CASCADE;"

# Re-seed everything
node scripts/seed-database.js
```

## File Structure

```
src/data/
├── articles/           ← TypeScript source files (25,960 files)
│   ├── manifest.json   ← Index of all articles
│   └── *.ts           ← Individual article files
├── prompts/           ← Prompt source files
├── marketing/         ← Marketing page files
└── templates/         ← Template files

scripts/
├── seed-database.js       ← Initial full seed (slow, one-time)
└── sync-to-supabase.js   ← Fast incremental sync (use this!)
```

## What Changed

**Before:**
- All 25,960 articles loaded at build time → Turbopack crash

**After:**
- Articles stored in Supabase
- App fetches on-demand
- Build succeeds ✅

## Cleanup (Optional)

You can delete the TypeScript files to save space:

```bash
# BE CAREFUL - only do this if you're 100% sure the DB has everything
rm -rf src/data/articles/*.ts
rm -rf src/data/prompts/*.ts
```

**But I recommend keeping them** as your source of truth for now.
