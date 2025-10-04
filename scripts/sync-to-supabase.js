#!/usr/bin/env node
/**
 * Sync new/updated content from TypeScript files to Supabase
 * This script only uploads files that are newer than the last sync
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const LAST_SYNC_FILE = '.last-supabase-sync';

async function getLastSyncTime() {
  try {
    const timestamp = fs.readFileSync(LAST_SYNC_FILE, 'utf-8');
    return new Date(timestamp);
  } catch {
    return new Date(0); // Beginning of time if no sync file exists
  }
}

async function saveLastSyncTime() {
  fs.writeFileSync(LAST_SYNC_FILE, new Date().toISOString());
}

async function syncArticles() {
  console.log('\n📝 Syncing articles...');

  const lastSync = await getLastSyncTime();
  const manifestPath = path.join(__dirname, '..', 'src', 'data', 'articles', 'manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

  let updated = 0;
  let skipped = 0;

  for (const item of manifest) {
    const filePath = path.join(__dirname, '..', 'src', 'data', 'articles', `${item.filename}.ts`);
    const stats = fs.statSync(filePath);

    // Only process files modified since last sync
    if (stats.mtime <= lastSync) {
      skipped++;
      continue;
    }

    try {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const match = fileContent.match(/export const articles: Article\[\] = \[([\s\S]*?)\];/);

      if (!match) {
        console.warn(`  ⚠️  Could not parse ${item.filename}`);
        continue;
      }

      const articleData = eval(`[${match[1]}]`)[0];

      if (articleData) {
        const { error } = await supabase
          .from('templata_articles')
          .upsert({
            id: articleData.id,
            title: articleData.title,
            excerpt: articleData.excerpt,
            content: articleData.content,
            author: articleData.author,
            published_at: articleData.publishedAt,
            updated_at: new Date().toISOString(),
            read_time: articleData.readTime,
            category: articleData.category,
            featured: articleData.featured || false,
            tags: articleData.tags,
            slug: articleData.slug,
            type: articleData.type,
            difficulty: articleData.difficulty,
            meta_title: articleData.seo?.metaTitle,
            meta_description: articleData.seo?.metaDescription,
            og_image: articleData.seo?.ogImage,
            related_templates: articleData.relatedTemplates || [],
            related_posts: articleData.relatedPosts || []
          });

        if (error) {
          console.error(`  ✗ Error: ${item.filename}:`, error.message);
        } else {
          updated++;
          if (updated % 100 === 0) {
            console.log(`  ✓ Updated ${updated} articles...`);
          }
        }
      }
    } catch (error) {
      console.error(`  ✗ Error processing ${item.filename}:`, error.message);
    }
  }

  console.log(`  ✓ Updated ${updated} articles, skipped ${skipped} unchanged`);
  return updated;
}

async function main() {
  console.log('='.repeat(60));
  console.log('🔄 Templata Supabase Sync');
  console.log('='.repeat(60));
  console.log(`Last sync: ${(await getLastSyncTime()).toISOString()}`);

  const updated = await syncArticles();

  if (updated > 0) {
    await saveLastSyncTime();
    console.log('\n✅ Sync complete! Last sync time saved.');
  } else {
    console.log('\n✅ Everything up to date!');
  }

  console.log('='.repeat(60));
}

main().catch(console.error);
