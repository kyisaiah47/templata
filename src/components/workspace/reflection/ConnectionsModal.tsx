'use client';

import { motion } from 'framer-motion';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Network, Sparkles } from 'lucide-react';

interface ConnectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewConnections: () => void;
}

export function ConnectionsModal({ isOpen, onClose, onViewConnections }: ConnectionsModalProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader>
          <div className="flex items-center justify-center mb-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="relative"
            >
              <Network className="h-12 w-12 text-primary" />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1"
              >
                <Sparkles className="h-5 w-5 text-yellow-500" />
              </motion.div>
            </motion.div>
          </div>
          <AlertDialogTitle className="text-center text-xl">
            See how this connects?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-base">
            Your reflection is now part of your journey. Would you like to explore how it connects to your other templates and reflections in Life OS?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col sm:flex-row gap-2">
          <AlertDialogCancel onClick={onClose} className="w-full sm:w-auto">
            Not now
          </AlertDialogCancel>
          <AlertDialogAction onClick={onViewConnections} className="w-full sm:w-auto">
            <Network className="h-4 w-4 mr-2" />
            View Connections
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
