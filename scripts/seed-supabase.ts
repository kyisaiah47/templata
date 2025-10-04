#!/usr/bin/env tsx
/**
 * Seed Supabase database with all Templata content
 * Run with: npx tsx scripts/seed-supabase.ts
 */

import { createClient } from '@supabase/supabase-js';
import { readdir } from 'fs/promises';
import { join } from 'path';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function seedArticles() {
  console.log('Seeding articles...');

  const manifestPath = join(process.cwd(), 'src/data/articles/manifest.json');
  const manifest = await import(manifestPath);

  let count = 0;
  let batch: any[] = [];
  const BATCH_SIZE = 100;

  for (const item of manifest.default) {
    try {
      const modulePath = `../src/data/articles/${item.filename}`;
      const module = await import(modulePath);

      if (module.articles && module.articles.length > 0) {
        for (const article of module.articles) {
          batch.push({
            id: article.id,
            title: article.title,
            excerpt: article.excerpt,
            content: article.content,
            author: article.author,
            published_at: article.publishedAt,
            updated_at: article.updatedAt,
            read_time: article.readTime,
            category: article.category,
            featured: article.featured || false,
            tags: article.tags,
            slug: article.slug,
            type: article.type,
            difficulty: article.difficulty,
            meta_title: article.seo?.metaTitle,
            meta_description: article.seo?.metaDescription,
            og_image: article.seo?.ogImage,
            related_templates: article.relatedTemplates || [],
            related_posts: article.relatedPosts || []
          });

          count++;

          if (batch.length >= BATCH_SIZE) {
            const { error } = await supabase
              .from('templata_articles')
              .upsert(batch);

            if (error) {
              console.error('Error inserting batch:', error);
            } else {
              console.log(`  Inserted ${count} articles...`);
            }

            batch = [];
          }
        }
      }
    } catch (error) {
      console.error(`Error processing ${item.filename}:`, error);
    }
  }

  // Insert remaining batch
  if (batch.length > 0) {
    const { error } = await supabase
      .from('templata_articles')
      .upsert(batch);

    if (error) {
      console.error('Error inserting final batch:', error);
    }
  }

  console.log(`✓ Seeded ${count} articles`);
  return count;
}

async function seedPrompts() {
  console.log('Seeding prompts...');

  const manifestPath = join(process.cwd(), 'src/data/prompts/manifest.json');
  const manifest = await import(manifestPath);

  let count = 0;
  let batch: any[] = [];
  const BATCH_SIZE = 500;

  for (const item of manifest.default) {
    try {
      const modulePath = `../src/data/prompts/${item.filename}`;
      const module = await import(modulePath);

      if (module.prompts && module.prompts.length > 0) {
        for (const prompt of module.prompts) {
          batch.push({
            id: prompt.id,
            prompt: prompt.prompt,
            category: prompt.category,
            type: prompt.type,
            template_id: item.template
          });

          count++;

          if (batch.length >= BATCH_SIZE) {
            const { error } = await supabase
              .from('templata_prompts')
              .upsert(batch);

            if (error) {
              console.error('Error inserting batch:', error);
            } else {
              console.log(`  Inserted ${count} prompts...`);
            }

            batch = [];
          }
        }
      }
    } catch (error) {
      console.error(`Error processing ${item.filename}:`, error);
    }
  }

  // Insert remaining batch
  if (batch.length > 0) {
    const { error} = await supabase
      .from('templata_prompts')
      .upsert(batch);

    if (error) {
      console.error('Error inserting final batch:', error);
    }
  }

  console.log(`✓ Seeded ${count} prompts`);
  return count;
}

async function main() {
  console.log('='.repeat(60));
  console.log('Templata Supabase Seeder');
  console.log('='.repeat(60));
  console.log('');

  // Test connection
  try {
    const { data, error } = await supabase
      .from('templata_articles')
      .select('count')
      .limit(1);

    if (error) throw error;
    console.log('✓ Connected to Supabase successfully');
    console.log('');
  } catch (error) {
    console.error('✗ Failed to connect to Supabase:', error);
    console.log('  Make sure you have run the schema.sql file first!');
    process.exit(1);
  }

  const articles = await seedArticles();
  const prompts = await seedPrompts();

  console.log('');
  console.log('='.repeat(60));
  console.log(`Summary: ${articles + prompts} total items seeded`);
  console.log('='.repeat(60));
}

main().catch(console.error);
