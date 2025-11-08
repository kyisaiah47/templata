import type { Metadata } from 'next';
import ReadingPageClient from './reading-page-client';

async function getReading(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/readings/${id}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const reading = await getReading(slug);

  if (!reading) {
    return {
      title: 'Reading Not Found - Templata',
      description: 'The requested reading could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const guideName = reading.guide
    ? reading.guide.split('-').map((word: string) =>
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    : 'Library';

  const title = `${reading.title} | ${guideName} Guide - Templata`;
  const description = reading.excerpt || `${reading.title}. Expert insights for ${guideName.toLowerCase()}. ${reading.read_time || 'Essential reading'} to help you succeed.`;

  // Extract keyword patterns from title
  const titleLower = reading.title.toLowerCase();
  const hasPattern = (pattern: string) => titleLower.includes(pattern);

  // Build comprehensive keywords
  const baseKeywords = [
    reading.title.toLowerCase(),
    guideName.toLowerCase(),
    `${guideName.toLowerCase()} tips`,
    `${guideName.toLowerCase()} advice`,
    `${guideName.toLowerCase()} guide`,
  ];

  // Add pattern-based keywords
  if (hasPattern('mistake') || hasPattern('error') || hasPattern('avoid')) {
    baseKeywords.push(
      `${guideName.toLowerCase()} mistakes`,
      `${guideName.toLowerCase()} mistakes to avoid`,
      `common ${guideName.toLowerCase()} mistakes`
    );
  }
  if (hasPattern('how to') || hasPattern('guide to')) {
    baseKeywords.push(
      `how to ${guideName.toLowerCase()}`,
      `${guideName.toLowerCase()} step by step`
    );
  }
  if (hasPattern('tips') || hasPattern('advice')) {
    baseKeywords.push(
      `${guideName.toLowerCase()} tips`,
      `best ${guideName.toLowerCase()} tips`
    );
  }
  if (hasPattern('checklist')) {
    baseKeywords.push(
      `${guideName.toLowerCase()} checklist`,
      `${guideName.toLowerCase()} planning checklist`
    );
  }

  // Add tags from database
  if (reading.tags && Array.isArray(reading.tags)) {
    baseKeywords.push(...reading.tags.map((tag: string) => tag.toLowerCase()));
  }

  // Add author if available
  if (reading.author) {
    baseKeywords.push(reading.author.toLowerCase());
  }

  return {
    title,
    description,
    keywords: baseKeywords,
    authors: reading.author ? [{ name: reading.author }] : [{ name: 'Templata' }],
    creator: reading.author || 'Templata',
    publisher: 'Templata',
    openGraph: {
      title,
      description,
      url: `https://templata.org/library/${slug}`,
      siteName: 'Templata',
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: reading.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      ...(reading.author && { authors: [reading.author] }),
      ...(reading.updated_at && { modifiedTime: reading.updated_at }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.svg'],
      ...(reading.author && { creator: `@${reading.author.replace(/\s+/g, '')}` }),
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
      canonical: `https://templata.org/library/${slug}`,
    },
  };
}

export default function ReadingPage({ params }: { params: Promise<{ slug: string }> }) {
  return <ReadingPageClient params={params} />;
}
