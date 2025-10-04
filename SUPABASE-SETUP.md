# Supabase Setup Instructions

## Step 1: Create the Database Tables

1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/uvcstcajctqbxddosdbf
2. Click **"SQL Editor"** in the left sidebar
3. Click **"New Query"**
4. Copy and paste the entire contents of `supabase-schema.sql`
5. Click **"Run"** to execute the query
6. You should see "Success. No rows returned" - this means the tables were created

## Step 2: Seed the Database

Run this command to upload all your content to Supabase:

```bash
node scripts/seed-database.js
```

This will:
- Upload all 25,960 articles
- Upload all 10,382 prompts
- Upload all 1,298 marketing pages
- Upload all 1,298 templates

**Note:** This will take a while (maybe 10-15 minutes) since we're uploading 38,938 items.

## Step 3: Verify the Data

1. Go back to Supabase dashboard
2. Click **"Table Editor"** in the left sidebar
3. Click on `templata_articles` table
4. You should see all your articles loaded

## Step 4: Update the App to Use Supabase

Once the data is seeded, I'll update the registries to fetch from Supabase instead of the TypeScript files.

## Troubleshooting

**If you get "relation does not exist" error:**
- You need to run Step 1 first to create the tables

**If you get authentication errors:**
- Check that `.env.local` has the correct keys
- Make sure you're using the service_role key, not the anon key for seeding
