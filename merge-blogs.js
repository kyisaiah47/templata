const fs = require('fs');
const path = require('path');

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

// Function to extract manualBlogPosts array from a TypeScript file
function extractBlogPosts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Find the start of the manualBlogPosts array
    const arrayStart = content.indexOf('export const manualBlogPosts: BlogPost[] = [');
    if (arrayStart === -1) {
      console.log(`No manualBlogPosts found in ${filePath}`);
      return '';
    }

    // Find the semicolon that ends the array declaration
    const endPattern = '];';
    const endIndex = content.indexOf(endPattern, arrayStart);
    if (endIndex === -1) {
      console.log(`Could not find end of array in ${filePath}`);
      return '';
    }

    // Extract everything between the [ and ];
    const startIndex = content.indexOf('[', arrayStart);
    const arrayContent = content.substring(startIndex + 1, endIndex).trim();

    if (arrayContent.trim() === '') {
      console.log(`Empty array in ${filePath}`);
      return '';
    }

    return arrayContent;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return '';
  }
}

// Function to count objects in the extracted content
function countObjects(content) {
  if (!content || typeof content !== 'string' || content.trim() === '') return 0;

  // Count opening braces that start objects (at the root level of the array)
  let count = 0;
  let braceDepth = 0;
  let inString = false;
  let escapeNext = false;
  let stringChar = null;

  for (let i = 0; i < content.length; i++) {
    const char = content[i];

    if (escapeNext) {
      escapeNext = false;
      continue;
    }

    if (char === '\\') {
      escapeNext = true;
      continue;
    }

    if (!inString && (char === '"' || char === "'" || char === '`')) {
      inString = true;
      stringChar = char;
      continue;
    }

    if (inString && char === stringChar) {
      inString = false;
      stringChar = null;
      continue;
    }

    if (!inString) {
      if (char === '{') {
        if (braceDepth === 0) count++;
        braceDepth++;
      } else if (char === '}') {
        braceDepth--;
      }
    }
  }

  return count;
}

// Main execution
console.log('Starting blog merge process...\n');

let allBlogPosts = [];
let totalArticles = 0;
const fileStats = {};

// Extract from each source file
for (const file of sourceFiles) {
  console.log(`Processing ${file}...`);
  const content = extractBlogPosts(file);
  const articleCount = countObjects(content);

  fileStats[file] = articleCount;
  totalArticles += articleCount;

  console.log(`  Found ${articleCount} articles`);

  if (content) {
    allBlogPosts.push(content);
  }
}

console.log(`\nTotal articles found: ${totalArticles}`);
console.log('\nBreakdown by file:');
for (const [file, count] of Object.entries(fileStats)) {
  console.log(`  ${file}: ${count} articles`);
}

// Read the current blogs.ts file to preserve its structure
const currentBlogsPath = 'src/registry/blogs.ts';
const currentContent = fs.readFileSync(currentBlogsPath, 'utf8');

// Find the interface and imports section (everything before the manualBlogPosts array)
const arrayStart = currentContent.indexOf('export const manualBlogPosts: BlogPost[] = [');
const beforeArray = currentContent.substring(0, arrayStart);

// Find everything after the manualBlogPosts array
const arrayEnd = currentContent.indexOf('];', arrayStart) + 2;
const afterArray = currentContent.substring(arrayEnd);

// Combine all blog posts
const combinedBlogPosts = allBlogPosts.filter(content => content.trim() !== '').join(',\n  ');

// Create the new file content
const newContent = `${beforeArray}export const manualBlogPosts: BlogPost[] = [
  ${combinedBlogPosts}
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

// Write the merged content back to blogs.ts
fs.writeFileSync(currentBlogsPath, newContent, 'utf8');

console.log(`\n✅ Successfully merged ${totalArticles} articles into ${currentBlogsPath}`);
console.log('Merge complete!');