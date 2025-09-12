'use client';

import { TemplateLanding } from '@/components/template/TemplateLanding';
import { getLandingPageById } from '@/registry/landing-pages';

export default function AcademicResearchLandingPage() {
  const landingPage = getLandingPageById('academic-research');
  
  if (!landingPage) {
    return <div>Landing page not found</div>;
  }
  
  return <TemplateLanding landingPage={landingPage} />;
}