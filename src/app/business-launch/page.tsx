import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'Business Launch Template | Complete Startup Checklist & Guide | Save 100+ Hours | Templata',
  description: 'Complete business launch template with startup checklist, business plan, marketing strategy, and legal requirements. Used by 5,000+ entrepreneurs. Save 100+ hours of planning time.',
  keywords: 'business launch template, startup checklist, business plan template, entrepreneur guide, business startup, company formation, business planning, startup template, business launch guide',
  openGraph: {
    title: 'Business Launch Template - Complete Startup Guide & Checklist',
    description: 'Everything you need to launch your business successfully. Complete checklist, business plan template, and step-by-step guidance used by 5,000+ entrepreneurs.',
    type: 'website',
    images: ['/business-launch-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/business-launch',
  },
}

export default function BusinessLaunchPage() {
  const landingData = getLandingPageData('business-launch');
  
  if (!landingData) {
    return <div>Landing page data not found</div>;
  }
  
  return <TemplateLanding {...landingData} />;
}