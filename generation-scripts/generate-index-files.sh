#!/bin/bash

# Generate index.ts files for all data directories

echo "🔄 Generating index files..."

# Generate articles index
echo "// Auto-generated index file for all articles" > ../src/data/articles/index.ts
echo "" >> ../src/data/articles/index.ts
for file in ../src/data/articles/*-article-*.ts; do
  if [ -f "$file" ]; then
    basename=$(basename "$file" .ts)
    echo "export * from \"./$basename\";" >> ../src/data/articles/index.ts
  fi
done
echo "✅ Articles index generated"

# Generate prompts index
echo "// Auto-generated index file for all prompts" > ../src/data/prompts/index.ts
echo "" >> ../src/data/prompts/index.ts
for file in ../src/data/prompts/*-prompts-*.ts; do
  if [ -f "$file" ]; then
    basename=$(basename "$file" .ts)
    echo "export * from \"./$basename\";" >> ../src/data/prompts/index.ts
  fi
done
echo "✅ Prompts index generated"

# Generate marketing index
echo "// Auto-generated index file for all marketing" > ../src/data/marketing/index.ts
echo "" >> ../src/data/marketing/index.ts
for file in ../src/data/marketing/*-marketing.ts; do
  if [ -f "$file" ]; then
    basename=$(basename "$file" .ts)
    echo "export * from \"./$basename\";" >> ../src/data/marketing/index.ts
  fi
done
echo "✅ Marketing index generated"

# Generate templates index
echo "// Auto-generated index file for all templates" > ../src/data/templates/index.ts
echo "" >> ../src/data/templates/index.ts
for file in ../src/data/templates/*-template.ts; do
  if [ -f "$file" ]; then
    basename=$(basename "$file" .ts)
    echo "export * from \"./$basename\";" >> ../src/data/templates/index.ts
  fi
done
echo "✅ Templates index generated"

echo "🎉 All index files generated!"
