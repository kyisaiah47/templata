'use client';

import { TemplateView } from '@/components/template/TemplateView';
import { freelanceGigEconomyTemplate } from '@/data/templates';
import { createTemplateWithSyncedResources } from '@/registry/templates';

export default function BusinessLaunchAppPage() {
  const syncedTemplate = createTemplateWithSyncedResources(freelanceGigEconomyTemplate);
  
  return <TemplateView template={syncedTemplate} />;
}