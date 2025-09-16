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

let allIds = [];
let totalCount = 0;

// Simple extraction using grep-like approach
for (const file of sourceFiles) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const idMatches = content.match(/id:\s*"([^"]+)"/g);

    if (idMatches) {
      const ids = idMatches.map(match => match.match(/id:\s*"([^"]+)"/)[1]);
      console.log(`${file}: ${ids.length} articles`);
      totalCount += ids.length;
      allIds.push(...ids);

      // Show first few IDs from each file for verification
      console.log(`  Sample IDs: ${ids.slice(0, 3).join(', ')}`);
    }
  } catch (error) {
    console.error(`Error reading ${file}:`, error.message);
  }
}

console.log(`\nTotal articles across all files: ${totalCount}`);

// Check for duplicates
const uniqueIds = new Set(allIds);
console.log(`Unique article IDs: ${uniqueIds.size}`);

if (allIds.length !== uniqueIds.size) {
  console.log(`\n❌ Found ${allIds.length - uniqueIds.size} duplicate articles!`);

  // Find duplicates
  const duplicates = allIds.filter((id, index) => allIds.indexOf(id) !== index);
  const uniqueDuplicates = [...new Set(duplicates)];

  console.log('Duplicate IDs:');
  uniqueDuplicates.forEach(id => {
    const count = allIds.filter(i => i === id).length;
    console.log(`  - "${id}" appears ${count} times`);
  });
} else {
  console.log('✅ No duplicates found!');
}