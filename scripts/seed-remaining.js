#!/usr/bin/env node
/**
 * Seed prompts, marketing, and templates to Supabase
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function seedPrompts() {
  console.log('\n📝 Seeding prompts...');

  const manifestPath = path.join(__dirname, '..', 'src', 'data', 'prompts', 'manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

  let count = 0;
  let batch = [];
  const BATCH_SIZE = 500;

  for (const item of manifest) {
    try {
      const filePath = path.join(__dirname, '..', 'src', 'data', 'prompts', `${item.filename}.ts`);
      const fileContent = fs.readFileSync(filePath, 'utf-8');

      const match = fileContent.match(/export const prompts: PromptEntry\[\] = \[([\s\S]*?)\];/);
      if (!match) continue;

      const promptsData = eval(`[${match[1]}]`);

      for (const prompt of promptsData) {
        batch.push({
          id: prompt.id,
          prompt: prompt.prompt,
          category: prompt.category,
          type: prompt.type,
          template_id: item.template
        });

        count++;

        if (batch.length >= BATCH_SIZE) {
          await supabase.from('templata_prompts').upsert(batch);
          console.log(`  ✓ Inserted ${count} prompts...`);
          batch = [];
        }
      }
    } catch (error) {
      console.error(`  ✗ Error processing ${item.filename}:`, error.message);
    }
  }

  if (batch.length > 0) {
    await supabase.from('templata_prompts').upsert(batch);
  }

  console.log(`  ✓ Seeded ${count} prompts`);
  return count;
}

async function seedMarketing() {
  console.log('\n📄 Seeding marketing pages...');

  const manifestPath = path.join(__dirname, '..', 'src', 'data', 'marketing', 'manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

  let count = 0;

  for (const item of manifest) {
    try {
      const filePath = path.join(__dirname, '..', 'src', 'data', 'marketing', `${item.filename}.ts`);
      const fileContent = fs.readFileSync(filePath, 'utf-8');

      const match = fileContent.match(/export const marketing = ({[\s\S]*?});/);
      if (!match) continue;

      const marketing = eval(`(${match[1]})`);

      await supabase.from('templata_marketing_pages').upsert({
        template_id: marketing.templateId,
        hero_title: marketing.hero.title,
        hero_subtitle: marketing.hero.subtitle,
        hero_description: marketing.hero.description,
        features: JSON.stringify(marketing.features),
        steps: JSON.stringify(marketing.steps),
        prompts: JSON.stringify(marketing.prompts),
        articles: JSON.stringify(marketing.articles),
        cta_title: marketing.cta.title,
        cta_description: marketing.cta.description
      }, { onConflict: 'template_id' });

      count++;
      if (count % 100 === 0) {
        console.log(`  ✓ Inserted ${count} marketing pages...`);
      }
    } catch (error) {
      console.error(`  ✗ Error processing ${item.filename}:`, error.message);
    }
  }

  console.log(`  ✓ Seeded ${count} marketing pages`);
  return count;
}

async function seedTemplates() {
  console.log('\n📋 Seeding templates...');

  const manifestPath = path.join(__dirname, '..', 'src', 'data', 'templates', 'manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

  let count = 0;

  for (const item of manifest) {
    try {
      const filePath = path.join(__dirname, '..', 'src', 'data', 'templates', `${item.filename}.ts`);
      const fileContent = fs.readFileSync(filePath, 'utf-8');

      const match = fileContent.match(/export const template: GuidanceTemplate = ({[\s\S]*?});/);
      if (!match) continue;

      const template = eval(`(${match[1]})`);

      await supabase.from('templata_templates').upsert({
        id: template.id,
        name: template.name,
        description: template.description,
        category: template.category,
        sections: JSON.stringify(template.sections)
      });

      count++;
      if (count % 100 === 0) {
        console.log(`  ✓ Inserted ${count} templates...`);
      }
    } catch (error) {
      console.error(`  ✗ Error processing ${item.filename}:`, error.message);
    }
  }

  console.log(`  ✓ Seeded ${count} templates`);
  return count;
}

async function main() {
  console.log('='.repeat(60));
  console.log('🌱 Seeding Remaining Content to Supabase');
  console.log('='.repeat(60));

  const prompts = await seedPrompts();
  const marketing = await seedMarketing();
  const templates = await seedTemplates();

  console.log('\n' + '='.repeat(60));
  console.log(`✅ Summary: ${prompts + marketing + templates} total items seeded`);
  console.log('='.repeat(60));
}

main().catch(console.error);
