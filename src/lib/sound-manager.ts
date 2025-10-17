/**
 * Sound Manager - Web Audio API-based sound system
 *
 * Provides three types of sounds:
 * - Ambient hush: Soft background tone for Reflection mode
 * - Harmonic swell: Completion/transition sound
 * - Activation click: UI interaction feedback
 */

class SoundManager {
  private audioContext: AudioContext | null = null;
  private ambientNode: OscillatorNode | null = null;
  private ambientGain: GainNode | null = null;
  private masterGain: GainNode | null = null;
  private isEnabled: boolean = true;

  constructor() {
    if (typeof window !== 'undefined') {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.masterGain = this.audioContext.createGain();
      this.masterGain.gain.value = 0.3; // Master volume
      this.masterGain.connect(this.audioContext.destination);
    }
  }

  /**
   * Enable or disable all sounds
   */
  setEnabled(enabled: boolean) {
    this.isEnabled = enabled;
    if (!enabled && this.ambientNode) {
      this.stopAmbient();
    }
  }

  /**
   * Ambient hush - Soft continuous tone for Reflection mode
   * Uses a low-frequency oscillator with gentle modulation
   */
  startAmbient() {
    if (!this.isEnabled || !this.audioContext || !this.masterGain || this.ambientNode) {
      return;
    }

    try {
      // Create oscillator for ambient tone
      this.ambientNode = this.audioContext.createOscillator();
      this.ambientGain = this.audioContext.createGain();

      // Very low frequency, subtle sine wave
      this.ambientNode.type = 'sine';
      this.ambientNode.frequency.value = 55; // A1 note, very low

      // Very quiet, just barely audible
      this.ambientGain.gain.value = 0;

      // Connect nodes
      this.ambientNode.connect(this.ambientGain);
      this.ambientGain.connect(this.masterGain);

      // Start oscillator
      this.ambientNode.start();

      // Fade in over 3 seconds
      this.ambientGain.gain.linearRampToValueAtTime(
        0.05,
        this.audioContext.currentTime + 3
      );

      // Add subtle frequency modulation for organic feel
      const lfo = this.audioContext.createOscillator();
      const lfoGain = this.audioContext.createGain();
      lfo.frequency.value = 0.2; // Very slow modulation
      lfoGain.gain.value = 2; // Small frequency variation
      lfo.connect(lfoGain);
      lfoGain.connect(this.ambientNode.frequency);
      lfo.start();
    } catch (error) {
      console.warn('Failed to start ambient sound:', error);
    }
  }

  /**
   * Stop ambient sound with fade out
   */
  stopAmbient() {
    if (!this.ambientNode || !this.ambientGain || !this.audioContext) {
      return;
    }

    try {
      // Fade out over 2 seconds
      this.ambientGain.gain.linearRampToValueAtTime(
        0,
        this.audioContext.currentTime + 2
      );

      // Stop and cleanup after fade
      setTimeout(() => {
        this.ambientNode?.stop();
        this.ambientNode = null;
        this.ambientGain = null;
      }, 2100);
    } catch (error) {
      console.warn('Failed to stop ambient sound:', error);
    }
  }

  /**
   * Harmonic swell - Uplifting sound for completions/transitions
   * Creates a rising chord with reverb-like effect
   */
  playHarmonicSwell() {
    if (!this.isEnabled || !this.audioContext || !this.masterGain) {
      return;
    }

    try {
      const now = this.audioContext.currentTime;
      const duration = 1.2;

      // Create a major chord (C-E-G)
      const frequencies = [261.63, 329.63, 392.00]; // C4, E4, G4

      frequencies.forEach((freq, index) => {
        const osc = this.audioContext!.createOscillator();
        const gain = this.audioContext!.createGain();

        osc.type = 'sine';
        osc.frequency.value = freq;

        // Stagger the chord notes slightly
        const startTime = now + (index * 0.05);

        // Envelope: quick attack, sustained, slow release
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.15, startTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

        osc.connect(gain);
        gain.connect(this.masterGain!);

        osc.start(startTime);
        osc.stop(startTime + duration);
      });
    } catch (error) {
      console.warn('Failed to play harmonic swell:', error);
    }
  }

  /**
   * Activation click - Subtle UI feedback sound
   * Quick, high-pitched click for interactions
   */
  playActivationClick() {
    if (!this.isEnabled || !this.audioContext || !this.masterGain) {
      return;
    }

    try {
      const now = this.audioContext.currentTime;
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();

      // High frequency, very short duration
      osc.type = 'sine';
      osc.frequency.value = 800;

      // Very brief envelope
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch (error) {
      console.warn('Failed to play activation click:', error);
    }
  }

  /**
   * Resume audio context if suspended (required for some browsers)
   */
  async resume() {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }
  }
}

// Singleton instance
export const soundManager = new SoundManager();
