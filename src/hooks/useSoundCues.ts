'use client';

import { useEffect, useCallback } from 'react';
import { soundManager } from '@/lib/sound-manager';
import { useWorkspaceStore } from '@/stores/workspace-store';

/**
 * Hook for using sound cues in workspace components
 *
 * Provides methods to play sounds and automatically manages
 * ambient sound based on workspace stage
 */
export function useSoundCues() {
  const { soundEnabled } = useWorkspaceStore();

  useEffect(() => {
    soundManager.setEnabled(soundEnabled);
  }, [soundEnabled]);

  const playActivationClick = useCallback(() => {
    if (soundEnabled) {
      soundManager.playActivationClick();
    }
  }, [soundEnabled]);

  const playHarmonicSwell = useCallback(() => {
    if (soundEnabled) {
      soundManager.playHarmonicSwell();
    }
  }, [soundEnabled]);

  const startAmbient = useCallback(() => {
    if (soundEnabled) {
      soundManager.startAmbient();
    }
  }, [soundEnabled]);

  const stopAmbient = useCallback(() => {
    soundManager.stopAmbient();
  }, []);

  // Resume audio context on user interaction (required by browsers)
  const resumeAudio = useCallback(async () => {
    await soundManager.resume();
  }, []);

  return {
    playActivationClick,
    playHarmonicSwell,
    startAmbient,
    stopAmbient,
    resumeAudio,
  };
}

/**
 * Hook to automatically manage ambient sound for Reflection mode
 */
export function useReflectionAmbient() {
  const { startAmbient, stopAmbient } = useSoundCues();

  useEffect(() => {
    // Start ambient sound when component mounts (Reflection mode)
    startAmbient();

    // Stop when component unmounts
    return () => {
      stopAmbient();
    };
  }, [startAmbient, stopAmbient]);
}
