import type { Metadata } from 'next';
import { getTemplateById } from '@/registry/templates';
import MarketingClient from './marketing-client';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateById(slug);

  if (!template?.template) {
    return {
      title: 'Template Not Found | Templata',
      description: 'The requested template could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const templateData = template.template;
  const title = `${templateData.title} - AI-Powered Template | Templata`;
  const description = `${templateData.description} Get expert guidance with 15,000+ prompts and 26,000+ articles. Transform how you plan your ${templateData.title.toLowerCase()} with Templata's AI-powered workspace.`;

  return {
    title,
    description,
    keywords: `${templateData.title.toLowerCase()}, ${templateData.title.toLowerCase()} template, ${templateData.category.toLowerCase()}, life planning, templata, ai planning tool, life organization`,
    authors: [{ name: 'Templata' }],
    creator: 'Templata',
    publisher: 'Templata',
    metadataBase: new URL('https://templata.com'),
    alternates: {
      canonical: `/${slug}/marketing`,
    },
    openGraph: {
      title,
      description,
      url: `https://templata.com/${slug}/marketing`,
      siteName: 'Templata',
      images: [
        {
          url: `/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${templateData.title} Template - Templata`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/og-image.jpg`],
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

export default function TemplateMarketingPage({ params }: { params: Promise<{ slug: string }> }) {
  return <MarketingClient params={params} />;
}