/**
 * Simple sentiment detection using keyword-based analysis
 * In production, this could use a more sophisticated NLP library or API
 */

export type Sentiment = 'positive' | 'neutral' | 'negative';

const positiveKeywords = [
  'happy', 'grateful', 'thankful', 'blessed', 'joy', 'love', 'excited', 'amazing',
  'wonderful', 'great', 'excellent', 'good', 'proud', 'accomplished', 'success',
  'beautiful', 'fun', 'enjoy', 'smile', 'laugh', 'celebrate', 'win', 'better',
];

const negativeKeywords = [
  'sad', 'angry', 'frustrated', 'upset', 'disappointed', 'anxious', 'worried',
  'stressed', 'tired', 'exhausted', 'pain', 'hurt', 'difficult', 'hard', 'bad',
  'terrible', 'awful', 'hate', 'fail', 'loss', 'wrong', 'problem', 'issue',
];

export function detectSentiment(text: string): { sentiment: Sentiment; score: number } {
  if (!text || text.trim().length === 0) {
    return { sentiment: 'neutral', score: 0 };
  }

  const lowercaseText = text.toLowerCase();
  const words = lowercaseText.split(/\s+/);

  let positiveCount = 0;
  let negativeCount = 0;

  // Count positive and negative keywords
  words.forEach((word) => {
    if (positiveKeywords.some((keyword) => word.includes(keyword))) {
      positiveCount++;
    }
    if (negativeKeywords.some((keyword) => word.includes(keyword))) {
      negativeCount++;
    }
  });

  // Calculate sentiment score (-1 to 1)
  const totalSentimentWords = positiveCount + negativeCount;
  if (totalSentimentWords === 0) {
    return { sentiment: 'neutral', score: 0 };
  }

  const score = (positiveCount - negativeCount) / totalSentimentWords;

  // Determine sentiment category
  let sentiment: Sentiment = 'neutral';
  if (score > 0.2) {
    sentiment = 'positive';
  } else if (score < -0.2) {
    sentiment = 'negative';
  }

  return { sentiment, score };
}

// Get color gradient based on sentiment
export function getSentimentGradient(sentiment: Sentiment, intensity: number = 0.5): string {
  const intensityFactor = Math.max(0.3, Math.min(1, intensity));

  switch (sentiment) {
    case 'positive':
      return `from-green-950/${Math.round(intensityFactor * 100)} to-emerald-950/${Math.round(intensityFactor * 100)}`;
    case 'negative':
      return `from-blue-950/${Math.round(intensityFactor * 100)} to-indigo-950/${Math.round(intensityFactor * 100)}`;
    default:
      return 'from-slate-950 to-slate-900';
  }
}
