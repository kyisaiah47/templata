#!/bin/bash

echo "🧹 Cleaning template directories with duplicated project files..."

count=0
total=$(find ../templata-* -maxdepth 1 -name "package.json" | wc -l | tr -d ' ')

echo "Found $total directories to clean"

for dir in $(find ../templata-* -maxdepth 1 -name "package.json" -exec dirname {} \;); do
  template_name=$(basename "$dir" | sed 's/templata-//')

  cd "$dir"

  # Keep only template-specific files and .git/.gitignore
  rm -rf backup-* src/ public/ node_modules/ generation-scripts/ knowledge-graph/ \
         package.json package-lock.json next.config.ts tsconfig.json components.json \
         eslint.config.mjs postcss.config.mjs README.md design-system.md \
         templata_product_spec.md landing-page-structure.json .claude/ \
         claude-instructions/ claude-resource-generation-master-prompt.md .DS_Store

  cd - >/dev/null
  count=$((count + 1))

  if [ $((count % 50)) -eq 0 ]; then
    echo "✅ Cleaned $count/$total directories..."
  fi
done

echo "🎉 Cleaned $count template directories!"
echo "Template directories now contain only template-specific files."