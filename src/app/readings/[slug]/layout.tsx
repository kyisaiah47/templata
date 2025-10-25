import type { Metadata } from 'next';
import { getReadingBySlug } from '@/registry/readings';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const reading = await getReadingBySlug(slug);

  if (!reading) {
    return {
      title: 'Reading Not Found | Templata',
      description: 'The requested reading could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${reading.title} | Templata`;
  const description = (reading as any).description || `${reading.excerpt} Expert guidance and insights for ${reading.category?.toLowerCase() || 'life planning'}.`;

  return {
    title,
    description,
    keywords: `${reading.title?.toLowerCase() || 'reading'}, ${reading.category?.toLowerCase() || 'planning'}, life planning, ${reading.tags?.join(', ') || ''}, templata readings, expert guidance`,
    authors: [{ name: 'Templata Team' }],
    creator: 'Templata',
    publisher: 'Templata',
    metadataBase: new URL('https://templata.org'),
    alternates: {
      canonical: `/readings/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://templata.org/readings/${slug}`,
      siteName: 'Templata',
      images: [
        {
          url: `/readings/${slug}-preview.jpg`,
          width: 1200,
          height: 630,
          alt: `${reading.title} - Expert Guidance Reading`,
        },
      ],
      locale: 'en_US',
      type: 'reading',
      publishedTime: reading.publishedAt,
      modifiedTime: reading.updatedAt || reading.publishedAt,
      section: reading.category,
      tags: reading.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/readings/${slug}-twitter.jpg`],
      creator: '@templata',
      site: '@templata',
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
  };
}

export default function ReadingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Reading structured data is handled dynamically in the page component */}
      {children}
    </>
  );
}