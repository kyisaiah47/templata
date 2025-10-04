#!/usr/bin/env node
/**
 * Seed Supabase database with all content
 * This script reads the manifests and imports each TS file to seed the database
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function readManifest(type) {
  const manifestPath = path.join(__dirname, '..', 'src', 'data', type, 'manifest.json');
  return JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
}

async function seedArticles() {
  console.log('\n📝 Seeding articles...');

  const manifest = await readManifest('articles');
  let count = 0;
  let errors = 0;

  for (const item of manifest) {
    try {
      const filePath = path.join(__dirname, '..', 'src', 'data', 'articles', `${item.filename}.ts`);
      const fileContent = fs.readFileSync(filePath, 'utf-8');

      // Extract the article data using regex
      const match = fileContent.match(/export const articles: Article\[\] = \[([\s\S]*?)\];/);
      if (!match) {
        console.warn(`  ⚠️  Could not parse ${item.filename}`);
        errors++;
        continue;
      }

      // Use eval to parse the object (safe in this controlled environment)
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
            updated_at: articleData.updatedAt,
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
          console.error(`  ✗ Error inserting ${item.filename}:`, error.message);
          errors++;
        } else {
          count++;
          if (count % 100 == 0) {
            console.log(`  ✓ Inserted ${count} articles...`);
          }
        }
      }
    } catch (error) {
      console.error(`  ✗ Error processing ${item.filename}:`, error.message);
      errors++;
    }
  }

  console.log(`  ✓ Seeded ${count} articles (${errors} errors)`);
  return count;
}

async function main() {
  console.log('='.repeat(60));
  console.log('🌱 Templata Supabase Seeder');
  console.log('='.repeat(60));

  // Test connection
  try {
    const { data, error } = await supabase
      .from('templata_articles')
      .select('count')
      .limit(1);

    if (error) throw error;
    console.log('✓ Connected to Supabase successfully\n');
  } catch (error) {
    console.error('✗ Failed to connect to Supabase:', error.message);
    console.log('\n📋 Steps to fix:');
    console.log('  1. Go to https://supabase.com/dashboard/project/uvcstcajctqbxddosdbf/editor');
    console.log('  2. Click "SQL Editor" in the left sidebar');
    console.log('  3. Click "New Query"');
    console.log('  4. Paste the contents of supabase-schema.sql');
    console.log('  5. Click "Run" to create the tables\n');
    process.exit(1);
  }

  const articles = await seedArticles();

  console.log('\n' + '='.repeat(60));
  console.log(`✅ Summary: ${articles} total items seeded`);
  console.log('='.repeat(60));
}

main().catch(console.error);
