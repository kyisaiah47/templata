const fs = require('fs');

// Define the source files to merge
const sourceFiles = [
  'src/registry/blogs-home-buying.ts',
  'src/registry/blogs-wedding-planning.ts',
  'src/registry/blogs-baby-planning.ts',
  'src/registry/blogs-job-search.ts',
  'src/registry/blogs-college-planning.ts',
  'src/registry/blogs-budget-planning.ts',
  'src/registry/blogs-fitness-journey.ts',
  'src/registry/blogs-travel-planning.ts',
  'src/registry/blogs-moving-relocation.ts',
  'src/registry/blogs-retirement-planning.ts',
  'src/registry/blogs-small-business.ts'
];

// Function to extract articles with their full data
function extractArticles(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Find the array boundaries more carefully
    const arrayStart = content.indexOf('export const manualBlogPosts: BlogPost[] = [');
    if (arrayStart === -1) {
      console.log(`No manualBlogPosts found in ${filePath}`);
      return [];
    }

    const startBracket = content.indexOf('[', arrayStart);
    const endBracket = content.lastIndexOf('];');

    if (startBracket === -1 || endBracket === -1) {
      console.log(`Could not parse array in ${filePath}`);
      return [];
    }

    const arrayContent = content.substring(startBracket + 1, endBracket).trim();

    if (!arrayContent) {
      console.log(`Empty array in ${filePath}`);
      return [];
    }

    // Parse individual article objects
    const articles = [];
    let depth = 0;
    let currentArticle = '';
    let inString = false;
    let stringChar = null;
    let escapeNext = false;

    for (let i = 0; i < arrayContent.length; i++) {
      const char = arrayContent[i];

      if (escapeNext) {
        escapeNext = false;
        currentArticle += char;
        continue;
      }

      if (char === '\\') {
        escapeNext = true;
        currentArticle += char;
        continue;
      }

      if (!inString && (char === '"' || char === "'" || char === '`')) {
        inString = true;
        stringChar = char;
      } else if (inString && char === stringChar) {
        inString = false;
        stringChar = null;
      }

      if (!inString) {
        if (char === '{') {
          if (depth === 0) {
            currentArticle = char; // Start new article
          } else {
            currentArticle += char;
          }
          depth++;
        } else if (char === '}') {
          currentArticle += char;
          depth--;
          if (depth === 0) {
            // End of article object
            articles.push(currentArticle.trim());
            currentArticle = '';
          }
        } else {
          currentArticle += char;
        }
      } else {
        currentArticle += char;
      }
    }

    return articles;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return [];
  }
}

// Extract ID from an article object string
function extractId(articleStr) {
  const idMatch = articleStr.match(/id:\s*["']([^"']+)["']/);
  return idMatch ? idMatch[1] : null;
}

// Main execution
console.log('Starting unique blog merge process...\n');

const uniqueArticles = new Map(); // Using Map to preserve insertion order and avoid duplicates
let totalProcessed = 0;
const fileStats = {};

// Process each source file
for (const file of sourceFiles) {
  console.log(`Processing ${file}...`);
  const articles = extractArticles(file);

  let newArticles = 0;
  let duplicates = 0;

  for (const article of articles) {
    const id = extractId(article);
    if (id) {
      if (uniqueArticles.has(id)) {
        duplicates++;
        console.log(`  Skipping duplicate: ${id}`);
      } else {
        uniqueArticles.set(id, article);
        newArticles++;
      }
    }
  }

  fileStats[file] = { total: articles.length, new: newArticles, duplicates };
  totalProcessed += articles.length;

  console.log(`  Found ${articles.length} articles (${newArticles} new, ${duplicates} duplicates)`);
}

console.log(`\nTotal articles processed: ${totalProcessed}`);
console.log(`Unique articles retained: ${uniqueArticles.size}`);

console.log('\nBreakdown by file:');
for (const [file, stats] of Object.entries(fileStats)) {
  console.log(`  ${file}: ${stats.total} total (${stats.new} new, ${stats.duplicates} duplicates)`);
}

// Combine all unique articles
const combinedArticles = Array.from(uniqueArticles.values()).join(',\n  ');

// Create the complete new file content
const newContent = `export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  category: string;
  featured?: boolean;
  tags: string[];
  slug: string;
  type?: 'guide' | 'article' | 'checklist' | 'tool'; // Resource type
  difficulty?: 'beginner' | 'intermediate' | 'expert'; // Difficulty level
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
  };
  relatedTemplates?: string[]; // IDs of related templates
  relatedPosts?: string[]; // IDs of related blog posts
}

// Blog registry - will be populated by unified content system
export const manualBlogPosts: BlogPost[] = [
  ${combinedArticles}
];

// Create unified blog registry from template resources + manual posts
import { getResourcesAsBlogPosts } from './templates';

export const blogRegistry: BlogPost[] = [
  ...manualBlogPosts,
  ...getResourcesAsBlogPosts()
];

// Helper functions
export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogRegistry.find(post => post.id === id);
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogRegistry.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogRegistry.filter(post => post.category === category);
};

export const getFeaturedBlogPosts = (): BlogPost[] => {
  return blogRegistry.filter(post => post.featured);
};

export const getRelatedBlogPosts = (postId: string, limit: number = 3): BlogPost[] => {
  const post = getBlogPostById(postId);
  if (!post) return [];

  return blogRegistry.filter(p =>
    p.id !== postId &&
    (p.category === post.category || p.tags.some(tag => post.tags.includes(tag)))
  ).slice(0, limit);
};

export const getAllBlogCategories = (): string[] => {
  return Array.from(new Set(blogRegistry.map(post => post.category)));
};

export const getAllBlogTags = (): string[] => {
  const allTags = blogRegistry.flatMap(post => post.tags);
  return Array.from(new Set(allTags));
};

// Search functionality
export const searchBlogPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return blogRegistry.filter(post =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    post.category.toLowerCase().includes(lowercaseQuery)
  );
};

// Get recent posts
export const getRecentBlogPosts = (limit: number = 5): BlogPost[] => {
  return blogRegistry
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

// Get posts by type
export const getBlogPostsByType = (type: 'guide' | 'article' | 'checklist' | 'tool'): BlogPost[] => {
  return blogRegistry.filter(post => post.type === type);
};

// Get posts by difficulty
export const getBlogPostsByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'expert'): BlogPost[] => {
  return blogRegistry.filter(post => post.difficulty === difficulty);
};

// Get posts by type and difficulty
export const getBlogPostsByTypeAndDifficulty = (
  type: 'guide' | 'article' | 'checklist' | 'tool',
  difficulty: 'beginner' | 'intermediate' | 'expert'
): BlogPost[] => {
  return blogRegistry.filter(post => post.type === type && post.difficulty === difficulty);
};

// Get resource-style posts (guides, checklists, tools) vs articles
export const getResourcePosts = (): BlogPost[] => {
  return blogRegistry.filter(post => ['guide', 'checklist', 'tool'].includes(post.type || ''));
};

export const getArticlePosts = (): BlogPost[] => {
  return blogRegistry.filter(post => post.type === 'article' || !post.type);
};

// Get posts by template ID
export const getBlogPostsByTemplate = (templateId: string): BlogPost[] => {
  return blogRegistry.filter(post =>
    post.relatedTemplates && post.relatedTemplates.includes(templateId)
  );
};`;

// Write the merged content to blogs.ts
const outputPath = 'src/registry/blogs.ts';
fs.writeFileSync(outputPath, newContent, 'utf8');

console.log(`\n✅ Successfully merged ${uniqueArticles.size} unique articles into ${outputPath}`);
console.log('Merge complete!');