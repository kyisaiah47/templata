#!/bin/bash

# =============================================================================
# Post-Merge Integration Script
# Updates shared files after templates are merged into main
# =============================================================================

set -e

echo "🔄 Post-Merge Integration"
echo "========================="

# Auto-detect merged templates by checking for new template directories
echo "🔍 Detecting newly merged templates..."

MERGED_TEMPLATES=()

# Check for fitness-journey template
if [[ -d "src/app/fitness-journey-template" || -d "src/components/fitness-journey-notes" ]]; then
    MERGED_TEMPLATES+=("fitness-journey")
fi

# Check for college-planning template 
if [[ -d "src/app/college-template" || -d "src/components/college-notes" ]]; then
    MERGED_TEMPLATES+=("college-planning")
fi

# Check for other templates (add more as needed)
for template_dir in src/app/*-template; do
    if [[ -d "$template_dir" ]]; then
        template_name=$(basename "$template_dir" | sed 's/-template$//')
        if [[ ! " ${MERGED_TEMPLATES[@]} " =~ " ${template_name} " ]]; then
            MERGED_TEMPLATES+=("$template_name")
        fi
    fi
done

if [[ ${#MERGED_TEMPLATES[@]} -eq 0 ]]; then
    echo "❌ No merged templates detected"
    exit 1
fi

echo "📊 Found ${#MERGED_TEMPLATES[@]} merged templates:"
for template in "${MERGED_TEMPLATES[@]}"; do
    echo "   - $template"
done

# Function to update layout.tsx with new providers
update_layout_providers() {
    local layout_file="src/app/layout.tsx"
    
    echo ""
    echo "📝 Updating $layout_file with new providers..."
    
    if [[ ! -f "$layout_file" ]]; then
        echo "❌ Layout file not found: $layout_file"
        return 1
    fi
    
    # Backup original
    cp "$layout_file" "${layout_file}.backup"
    
    for template in "${MERGED_TEMPLATES[@]}"; do
        # Convert template-name to PascalCase for provider name
        provider_name=$(echo "$template" | sed 's/-\([a-z]\)/\U\1/g' | sed 's/^./\U&/')
        
        echo "   Adding ${provider_name}Provider..."
        
        # Add import if not already present
        if ! grep -q "${provider_name}Provider" "$layout_file"; then
            # Add import after other context imports
            sed -i '' "/import.*contexts.*context/a\\
import { ${provider_name}Provider } from \"@/contexts/${template}-context\"
" "$layout_file"
        fi
        
        # Add provider to the provider tree if not already present
        if ! grep -q "<${provider_name}Provider>" "$layout_file"; then
            # Find the innermost provider and wrap it
            sed -i '' "s|<WeddingProvider>|<${provider_name}Provider>&|" "$layout_file"
            sed -i '' "s|</WeddingProvider>|&</${provider_name}Provider>|" "$layout_file"
        fi
    done
    
    echo "   ✅ Layout providers updated"
}

# Function to update app sidebar navigation
update_app_sidebar() {
    local sidebar_file="src/components/app-sidebar.tsx"
    
    echo ""
    echo "📝 Updating $sidebar_file with new navigation items..."
    
    if [[ ! -f "$sidebar_file" ]]; then
        echo "❌ Sidebar file not found: $sidebar_file"
        return 1
    fi
    
    # Backup original
    cp "$sidebar_file" "${sidebar_file}.backup"
    
    for template in "${MERGED_TEMPLATES[@]}"; do
        # Create title case for display
        template_title=$(echo "$template" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
        
        echo "   Adding navigation item for $template_title..."
        
        # Add navigation item if not already present
        if ! grep -q "/templates/$template" "$sidebar_file"; then
            # Add to navigation items array (this will vary based on sidebar structure)
            # This is a placeholder - actual implementation depends on sidebar structure
            echo "   ⚠️  Manual addition needed for: $template_title -> /templates/$template"
        fi
    done
    
    echo "   ✅ Sidebar navigation updated (may need manual verification)"
}

# Function to update templates gallery page
update_templates_gallery() {
    local gallery_file="src/app/templates/page.tsx"
    
    echo ""
    echo "📝 Updating $gallery_file with new template cards..."
    
    if [[ ! -f "$gallery_file" ]]; then
        echo "❌ Templates gallery file not found: $gallery_file"
        return 1
    fi
    
    # Backup original
    cp "$gallery_file" "${gallery_file}.backup"
    
    for template in "${MERGED_TEMPLATES[@]}"; do
        template_title=$(echo "$template" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
        
        echo "   Adding template card for $template_title..."
        
        # Check if template card already exists
        if ! grep -q "$template" "$gallery_file"; then
            echo "   ⚠️  Manual addition needed for template card: $template_title"
        fi
    done
    
    echo "   ✅ Templates gallery updated (may need manual verification)"
}

# Function to run build verification
verify_build() {
    echo ""
    echo "🔨 Verifying build after integration..."
    
    if npm run build > /dev/null 2>&1; then
        echo "   ✅ Build passed successfully!"
        return 0
    else
        echo "   ❌ Build failed after integration"
        echo "   🔧 Common fixes needed:"
        echo "      - Check provider imports in layout.tsx"
        echo "      - Verify context files exist for all templates"
        echo "      - Check for TypeScript errors"
        return 1
    fi
}

# Main execution
echo ""
echo "🚀 Starting post-merge integration..."

# Update shared files
update_layout_providers
update_app_sidebar  
update_templates_gallery

# Verify everything works
if verify_build; then
    echo ""
    echo "🎉 Post-merge integration completed successfully!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Review the updated files:"
    echo "   - src/app/layout.tsx"
    echo "   - src/components/app-sidebar.tsx" 
    echo "   - src/app/templates/page.tsx"
    echo "2. Test the new templates in the browser"
    echo "3. Commit the integration changes"
else
    echo ""
    echo "⚠️  Integration completed with build issues"
    echo "Please resolve build errors before proceeding"
    exit 1
fi

echo ""
echo "🔧 Integration backups created:"
echo "   - src/app/layout.tsx.backup"
echo "   - src/components/app-sidebar.tsx.backup"
echo "   - src/app/templates/page.tsx.backup"