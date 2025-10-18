'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lock, Sparkles, Check, Zap } from 'lucide-react';
import { useUserUnlocks } from '@/contexts/UserUnlockContext';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  trigger?: 'unlock-limit' | 'locked-content';
  templateName?: string;
}

export function PaywallModal({ isOpen, onClose, trigger = 'unlock-limit', templateName }: PaywallModalProps) {
  const { unlockData } = useUserUnlocks();

  const handleUpgrade = () => {
    // TODO: Integrate Stripe checkout
    console.log('Upgrade to Pro clicked');
    alert('Stripe integration coming soon!');
  };

  const title = trigger === 'unlock-limit'
    ? 'You've used all 3 free template unlocks'
    : `Unlock "${templateName}" to access this content`;

  const description = trigger === 'unlock-limit'
    ? 'Upgrade to Pro for unlimited access to all 1,300+ templates, prompts, and articles.'
    : 'This content is locked. Unlock this template or upgrade to Pro for unlimited access.';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Lock className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-center">{title}</DialogTitle>
          <DialogDescription className="text-center">
            {description}
          </DialogDescription>
        </DialogHeader>

        {/* Current Status */}
        {unlockData && !unlockData.hasUnlimitedAccess && (
          <div className="border rounded-lg p-4 bg-muted/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Free Tier</span>
              <Badge variant="outline">
                {unlockData.unlockedTemplates.length}/3 unlocked
              </Badge>
            </div>
            {unlockData.unlockedTemplates.length > 0 && (
              <div className="text-xs text-muted-foreground">
                Your unlocked templates: {unlockData.unlockedTemplates.slice(0, 3).join(', ')}
                {unlockData.unlockedTemplates.length > 3 && ` +${unlockData.unlockedTemplates.length - 3} more`}
              </div>
            )}
          </div>
        )}

        {/* Pro Features */}
        <div className="space-y-3 py-4">
          <h4 className="font-semibold text-sm flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            Pro Plan Includes:
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-primary mt-0.5" />
              <span>Unlimited access to all 1,300+ templates</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-primary mt-0.5" />
              <span>104,000+ expertly crafted prompts</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-primary mt-0.5" />
              <span>25,000+ curated articles and guides</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-primary mt-0.5" />
              <span>Life OS workspace with AI-powered tools</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-primary mt-0.5" />
              <span>Priority support and early access</span>
            </li>
          </ul>
        </div>

        {/* Pricing */}
        <div className="border rounded-lg p-4 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-3xl font-bold">$15</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Cancel anytime. No commitment required.
          </p>
        </div>

        <DialogFooter className="flex-col sm:flex-col gap-2">
          <Button onClick={handleUpgrade} className="w-full flex items-center gap-2" size="lg">
            <Zap className="h-4 w-4" />
            Upgrade to Pro
          </Button>
          <Button onClick={onClose} variant="ghost" className="w-full">
            Maybe later
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
