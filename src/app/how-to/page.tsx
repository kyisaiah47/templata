import type { Metadata } from 'next';
import Script from 'next/script';
import { createClient } from '@supabase/supabase-js';
import { PageLayout } from '@/components/layout';
import { HowToHub } from '@/components/how-to-hub';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export const metadata: Metadata = {
  title: 'How-To Planning Guides | Step-by-Step Life Planning | Templata',
  description: 'Comprehensive how-to guides for life\'s biggest decisions. Learn how to plan a wedding, change careers, buy a home, start a business, and more with expert step-by-step guidance.',
  keywords: 'how to plan, how to guides, life planning how-to, how to change careers, how to plan a wedding, how to buy a house, how to start a business, step by step planning guides',
  openGraph: {
    title: 'How-To Planning Guides | Templata',
    description: 'Step-by-step guides for life\'s biggest decisions and events.',
    url: 'https://templata.org/how-to',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Templata How-To Guides',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How-To Planning Guides | Templata',
    description: 'Step-by-step guides for life\'s biggest decisions and events.',
    images: ['https://templata.org/og-image.png'],
  },
};

async function getGuidesWithCategories() {
  try {
    const { data, error } = await supabase
      .from('guides')
      .select(`
        id,
        name,
        description,
        category,
        difficulty,
        estimated_time,
        categories (
          id,
          name,
          description
        )
      `)
      .order('name');

    if (error) return [];
    return data || [];
  } catch {
    return [];
  }
}

async function getCategories() {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('display_order');

    if (error) return [];
    return data || [];
  } catch {
    return [];
  }
}

// Map guides to common "how to" questions
const guideToHowTo: Record<string, string[]> = {
  // These would be dynamically generated based on actual guide content
  // For now, we'll create these programmatically in the component
};

export default async function HowToPage() {
  const [guides, categories] = await Promise.all([
    getGuidesWithCategories(),
    getCategories(),
  ]);

  // Group guides by category
  const guidesByCategory = guides.reduce((acc: any, guide: any) => {
    const categoryId = guide.category;
    if (!acc[categoryId]) {
      acc[categoryId] = [];
    }
    acc[categoryId].push(guide);
    return acc;
  }, {});

  // Generate how-to variations for each guide
  const howToItems = guides.map((guide: any) => {
    const guideName = guide.name.toLowerCase();
    return {
      guideId: guide.id,
      guideName: guide.name,
      category: guide.category,
      categoryName: guide.categories?.name || '',
      howToQuestions: [
        `How to ${guideName}`,
        `How to plan ${guideName}`,
        `How to prepare for ${guideName}`,
        `Step-by-step guide to ${guideName}`,
      ],
    };
  });

  // HowTo schema for structured data
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'How-To Planning Guides',
    description: 'Comprehensive collection of step-by-step planning guides for life\'s biggest moments',
    numberOfItems: guides.length,
    itemListElement: guides.slice(0, 50).map((guide: any, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'HowTo',
        name: `How to ${guide.name}`,
        description: guide.description,
        url: `https://templata.org/guides/${guide.id}`,
        step: [
          {
            '@type': 'HowToStep',
            name: 'Review planning questions',
            text: 'Start by reviewing the comprehensive planning questions to understand all aspects of your decision.',
          },
          {
            '@type': 'HowToStep',
            name: 'Read expert guidance',
            text: 'Read curated expert articles and insights to gain knowledge and best practices.',
          },
          {
            '@type': 'HowToStep',
            name: 'Create your plan',
            text: 'Use the integrated planning tools to organize your thoughts and create actionable steps.',
          },
        ],
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://templata.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'How-To Guides',
        item: 'https://templata.org/how-to',
      },
    ],
  };

  return (
    <>
      <Script
        id="how-to-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Script
        id="how-to-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageLayout>
        <HowToHub
          guidesByCategory={guidesByCategory}
          categories={categories}
          totalGuides={guides.length}
        />
      </PageLayout>

      {/* Hidden SEO content - all how-to variations for search engines */}
      <div className="sr-only" aria-hidden="true">
        <h2>Complete How-To Planning Guide Collection</h2>
        <p>
          Comprehensive collection of {guides.length} step-by-step how-to guides for life planning across {categories.length} categories.
        </p>

        <h3>All How-To Planning Guides</h3>
        {categories.map((category: any) => {
          const categoryGuides = guidesByCategory[category.id] || [];
          if (categoryGuides.length === 0) return null;

          return (
            <div key={category.id}>
              <h4>How to Plan {category.name}</h4>
              <p>{category.description}</p>
              <ul>
                {categoryGuides.map((guide: any) => (
                  <li key={guide.id}>
                    <strong>How to {guide.name}</strong>
                    <p>{guide.description}</p>
                    <p>Difficulty: {guide.difficulty || 'All levels'}</p>
                    {guide.estimated_time && <p>Estimated time: {guide.estimated_time}</p>}
                    <p>Guide link: /guides/{guide.id}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        <h3>Common How-To Planning Questions</h3>
        <ul>
          {howToItems.map((item) => (
            <li key={item.guideId}>
              {item.howToQuestions.map((question, idx) => (
                <div key={idx}>
                  <strong>{question}</strong>
                  <p>Answer: Use the {item.guideName} planning guide on Templata to get comprehensive questions, expert readings, and structured planning tools.</p>
                  <p>Category: {item.categoryName}</p>
                </div>
              ))}
            </li>
          ))}
        </ul>

        <h3>Popular How-To Searches</h3>
        <dl>
          <dt>How to plan a wedding step by step?</dt>
          <dd>Use Templata's wedding planning guide with 100+ planning questions, expert readings on venue selection, budget management, vendor coordination, and timeline creation. Get a comprehensive wedding planning checklist and integrated planning tools.</dd>

          <dt>How to change careers successfully?</dt>
          <dd>Follow Templata's career change planning guide with expert questions on skill assessment, industry research, networking strategies, resume building, and interview preparation. Access curated articles from career coaches and successful career changers.</dd>

          <dt>How to buy your first home?</dt>
          <dd>Navigate home buying with Templata's comprehensive guide covering financial readiness, mortgage pre-approval, location research, home inspection, negotiation, and closing. Get expert insights from real estate professionals.</dd>

          <dt>How to start a business from scratch?</dt>
          <dd>Build your business foundation with Templata's startup planning guide featuring questions on business model validation, market analysis, financial planning, legal requirements, and growth strategies.</dd>

          <dt>How to plan for retirement?</dt>
          <dd>Prepare for retirement with expert guidance on savings goals, investment strategies, healthcare planning, lifestyle design, and estate planning. Access comprehensive retirement calculators and planning tools.</dd>

          <dt>How to move to a new city?</dt>
          <dd>Plan your relocation with Templata's moving guide covering housing search, job market research, cost of living analysis, community integration, and logistics coordination.</dd>

          <dt>How to plan a major life event?</dt>
          <dd>Get structured planning guidance for any major life transition with Templata's comprehensive planning frameworks, expert questions, and actionable resources.</dd>
        </dl>

        <h3>Step-by-Step Planning Process</h3>
        <ol>
          <li><strong>Step 1: Choose your planning guide</strong> - Select the guide that matches your life event or decision</li>
          <li><strong>Step 2: Review planning questions</strong> - Work through comprehensive questions to understand all aspects</li>
          <li><strong>Step 3: Read expert guidance</strong> - Learn from curated expert articles and best practices</li>
          <li><strong>Step 4: Create your action plan</strong> - Use integrated tools to organize thoughts and create steps</li>
          <li><strong>Step 5: Track progress</strong> - Monitor your planning progress and adjust as needed</li>
        </ol>
      </div>
    </>
  );
}
