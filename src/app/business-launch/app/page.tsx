'use client';

import { TemplateView } from '@/components/template/TemplateView';
import { businessLaunchTemplate } from '@/data/templates';
import { createTemplateWithSyncedResources } from '@/registry/templates';

export default function BusinessLaunchAppPage() {
  const syncedTemplate = createTemplateWithSyncedResources(businessLaunchTemplate);
  
  return <TemplateView template={syncedTemplate} />;
}