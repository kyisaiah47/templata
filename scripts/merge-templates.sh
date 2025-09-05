#!/bin/bash

# Merge templates one by one, rejecting changes to forbidden files
set -e

# FORBIDDEN_FILES - always keep main's version of these
FORBIDDEN_FILES=(
  "src/app/layout.tsx"
  "src/app/page.tsx"
  "src/components/app-sidebar.tsx"
  "src/app/templates/page.tsx"
  "src/app/about/page.tsx"
  "src/app/faq/page.tsx"
  "src/components/sidebar-left.tsx"
  "src/components/theme-provider.tsx"
  "src/components/wedding-setup-wizard.tsx"
  "package.json"
  "next.config.js"
  "tailwind.config.js"
)

TEMPLATES_TO_MERGE=(
  "feature/template-car-buying"
  "feature/template-coaching-business"
  "feature/template-consulting-business"
  "feature/template-content-creation"
  "feature/template-crypto-portfolio"
)

echo "🔀 Starting template merge process..."
echo "📋 Templates to merge: ${TEMPLATES_TO_MERGE[*]}"
echo "🚫 Forbidden files (will keep main's version): ${#FORBIDDEN_FILES[@]} files"
echo ""

for template in "${TEMPLATES_TO_MERGE[@]}"; do
  echo "🎯 Merging template: $template"
  echo "================================="
  
  # Start the merge
  echo "📥 Starting merge with $template branch..."
  git merge "$template" --no-commit --no-ff || true
  
  # Check if there are conflicts
  if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
    echo "⚔️  Merge conflicts detected, resolving..."
    
    # For each forbidden file, if it has conflicts, use main's version
    for forbidden_file in "${FORBIDDEN_FILES[@]}"; do
      if [ -f "$forbidden_file" ] && git status --porcelain | grep -q "^UU.*$forbidden_file\|^AA.*$forbidden_file"; then
        echo "   🚫 Rejecting changes to $forbidden_file (using main's version)"
        git checkout --ours "$forbidden_file"
        git add "$forbidden_file"
      fi
    done
    
    # Check for remaining conflicts
    remaining_conflicts=$(git status --porcelain | grep "^UU\|^AA\|^DD" || true)
    if [ -n "$remaining_conflicts" ]; then
      echo "⚠️  Remaining conflicts in template-specific files:"
      echo "$remaining_conflicts"
      echo ""
      echo "Please resolve these manually and run:"
      echo "  git add <resolved-files>"
      echo "  git commit -m 'Merge $template template'"
      echo ""
      echo "Then continue with the next template."
      exit 1
    fi
  fi
  
  # Commit the merge
  echo "✅ Committing merge for $template..."
  git commit -m "Merge $template template

🤖 Generated with Claude Code
- Kept main's version of shared/forbidden files
- Integrated $template template functionality

Co-Authored-By: Claude <noreply@anthropic.com>"
  
  echo "🎉 Successfully merged $template!"
  echo ""
done

echo "🏁 All templates merged successfully!"
echo ""
echo "🔄 Next steps:"
echo "1. Run post-merge integration script to update shared files"
echo "2. Test build: npm run build"
echo "3. Run linter on final result"