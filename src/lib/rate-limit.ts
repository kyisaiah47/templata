import { NextRequest } from 'next/server';

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

// Clean up expired entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  Object.keys(store).forEach(key => {
    if (store[key].resetTime < now) {
      delete store[key];
    }
  });
}, 5 * 60 * 1000);

export interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

/**
 * Simple in-memory rate limiter
 * For production with multiple instances, use Upstash Redis
 */
export function rateLimit(config: RateLimitConfig) {
  return async (request: NextRequest): Promise<{ success: boolean; remaining: number }> => {
    // Get client identifier (IP address or forwarded IP)
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    const key = `${ip}:${request.nextUrl.pathname}`;
    const now = Date.now();

    // Initialize or get existing entry
    if (!store[key] || store[key].resetTime < now) {
      store[key] = {
        count: 1,
        resetTime: now + config.windowMs,
      };
      return { success: true, remaining: config.maxRequests - 1 };
    }

    // Increment count
    store[key].count++;

    // Check if rate limit exceeded
    if (store[key].count > config.maxRequests) {
      return { success: false, remaining: 0 };
    }

    return {
      success: true,
      remaining: config.maxRequests - store[key].count
    };
  };
}

// Pre-configured rate limiters for different endpoints
export const authLimiter = rateLimit({
  maxRequests: 5,
  windowMs: 60 * 1000, // 1 minute
});

export const signupLimiter = rateLimit({
  maxRequests: 2,
  windowMs: 60 * 1000, // 1 minute
});

export const apiLimiter = rateLimit({
  maxRequests: 100,
  windowMs: 60 * 1000, // 1 minute
});
