import type { Metadata } from 'next';
import { getTemplateById } from '@/registry/guides';
import GuideDetail from './guide-detail';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const template = await getTemplateById(slug);

  if (!template?.template) {
    return {
      title: 'Guide Not Found - Templata',
      description: 'The requested guide could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const templateData = template.template;
  const title = `${templateData.title} Template, Checklist & Guide | Templata`;
  const description = `Complete ${templateData.title.toLowerCase()} template and step-by-step checklist. ${templateData.description} Expert guide with 90+ planning questions, curated readings, and proven frameworks. Start planning today.`;

  // Generate comprehensive SEO keywords
  const baseKeywords = [
    templateData.title.toLowerCase(),
    `${templateData.title.toLowerCase()} template`,
    `${templateData.title.toLowerCase()} checklist`,
    `${templateData.title.toLowerCase()} guide`,
    `${templateData.title.toLowerCase()} planning`,
    `how to plan ${templateData.title.toLowerCase()}`,
    `${templateData.title.toLowerCase()} step by step`,
    `${templateData.title.toLowerCase()} tips`,
    `${templateData.title.toLowerCase()} mistakes to avoid`,
    `best ${templateData.title.toLowerCase()} guide`,
    `${templateData.title.toLowerCase()} planning template`,
    `${templateData.category.toLowerCase()} planning`,
    `${templateData.category.toLowerCase()} guide`,
    'planning template',
    'step-by-step guide',
    'comprehensive checklist',
    'expert planning guide',
  ];

  return {
    title,
    description,
    keywords: baseKeywords,
    authors: [{ name: 'Templata' }],
    creator: 'Templata',
    publisher: 'Templata',
    openGraph: {
      title,
      description,
      url: `https://templata.org/guides/${slug}`,
      siteName: 'Templata',
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: `${templateData.title} Guide`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.svg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://templata.org/guides/${slug}`,
    },
  };
}

export default function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  return <GuideDetail params={params} />;
}
