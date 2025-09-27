#!/bin/bash

# Convert all article txt files to TypeScript format
set -e

echo "🔄 Converting article txt files to TypeScript..."

converted=0
skipped=0

for dir in ../../templata-*; do
    if [ ! -d "$dir" ]; then
        continue
    fi

    template=$(basename "$dir" | sed 's/templata-//')
    txt_file="$dir/${template}-articles.txt"
    ts_file="../src/data/articles/articles-${template}.ts"

    if [ -f "$txt_file" ]; then
        echo "Converting $template..."
        python3 convert-articles.py "$txt_file" > "$ts_file"
        echo "✅ Created articles-${template}.ts"
        ((converted++))
    else
        echo "⚠️  No articles file found for $template"
        ((skipped++))
    fi
done

echo ""
echo "📊 Conversion complete!"
echo "✅ Converted: $converted files"
echo "⚠️  Skipped: $skipped files"