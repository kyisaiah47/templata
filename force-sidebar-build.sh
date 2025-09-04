#!/bin/bash

# =============================================================================
# Force Sidebar Build - Make all Claude instances build out sidebar pages
# =============================================================================

set -e  # Exit on any error

echo "📋 Force Sidebar Build - All Claude Instances"
echo "============================================="

# Show usage if help requested
if [[ "$1" == "-h" ]] || [[ "$1" == "--help" ]]; then
    echo ""
    echo "Usage: $0 [template_filter]"
    echo ""
    echo "Arguments:"
    echo "  template_filter  - Optional: Only build sidebars for specific templates (e.g., 'baby' for baby-planning)"
    echo ""
    echo "Examples:"
    echo "  $0              # Build sidebars in all template worktrees"
    echo "  $0 baby         # Only build templates containing 'baby'"
    echo "  $0 college      # Only build templates containing 'college'"
    echo ""
    echo "This script will:"
    echo "1. Find all active template worktrees"
    echo "2. Open terminal in each VS Code window"
    echo "3. Force Claude to build out all sidebar navigation pages"
    echo "4. Each Claude will create functional sidebar components with real content"
    echo ""
    exit 0
fi

MAIN_REPO="/Users/ikim1/Downloads/templata"
WORKTREES_DIR="/Users/ikim1/Downloads/templata-worktrees"
TEMPLATE_FILTER="${1:-}"

# Check if worktrees directory exists
if [[ ! -d "$WORKTREES_DIR" ]]; then
    echo "❌ Worktrees directory not found: $WORKTREES_DIR"
    echo "   No parallel development sessions to check"
    exit 1
fi

# Get list of available template worktrees
available_templates=()
for dir in "$WORKTREES_DIR"/*; do
    if [[ -d "$dir" ]]; then
        template_name=$(basename "$dir")
        # Apply filter if provided
        if [[ -z "$TEMPLATE_FILTER" ]] || [[ "$template_name" == *"$TEMPLATE_FILTER"* ]]; then
            available_templates+=("$template_name")
        fi
    fi
done

if [[ ${#available_templates[@]} -eq 0 ]]; then
    if [[ -n "$TEMPLATE_FILTER" ]]; then
        echo "❌ No template worktrees found matching filter: $TEMPLATE_FILTER"
    else
        echo "❌ No template worktrees found in $WORKTREES_DIR"
    fi
    exit 1
fi

echo "🎯 Found ${#available_templates[@]} template worktree(s) to build sidebars for:"
for template in "${available_templates[@]}"; do
    echo "   - $template"
done

# Function to send sidebar build command to a VS Code window
force_sidebar_build() {
    local template_id="$1"
    local worktree_path="$WORKTREES_DIR/$template_id"
    
    if [[ ! -d "$worktree_path" ]]; then
        echo "⚠️  Worktree not found for template: $template_id"
        return 1
    fi
    
    echo ""
    echo "📋 Forcing sidebar build for: $template_id"
    echo "   Path: $worktree_path"
    
    # The sidebar build command for Claude
    local sidebar_command="Build out all the sidebar navigation pages for the $template_id template. The sidebar component exists but the individual pages it links to are not built. Look at the sidebar component to see what pages need to be created, then build each page with proper content, components, and functionality. Make sure each sidebar page is a complete, functional component that matches the template's purpose. Commit your work when done."
    
    # Send command to Claude via AppleScript
    osascript << EOF
-- Find VS Code windows with this worktree path
tell application "System Events"
    set vscodeWindows to every window of application process "Code"
    repeat with vsWindow in vscodeWindows
        set windowTitle to title of vsWindow
        if windowTitle contains "$template_id" then
            -- Found the right window, activate it
            tell application "Visual Studio Code" to activate
            delay 1
            
            -- Bring this specific window to front
            set frontmost of vsWindow to true
            delay 1
            
            -- Open terminal (Ctrl + \`)
            keystroke "\`" using {control down}
            delay 3
            
            -- Clear terminal and start fresh Claude session
            keystroke "c" using {control down}
            delay 1
            keystroke "clear && claude"
            delay 1
            keystroke return
            delay 8
            
            -- Send the sidebar build command
            keystroke "$sidebar_command"
            delay 1
            keystroke return
            
            exit repeat
        end if
    end repeat
end tell
EOF
    
    local exit_code=$?
    if [[ $exit_code -eq 0 ]]; then
        echo "   ✅ Sidebar build command sent to $template_id"
    else
        echo "   ⚠️  Failed to send command to $template_id (window may not be open)"
    fi
    
    return $exit_code
}

echo ""
echo "🚀 Sending sidebar build commands to all template windows..."

successful_commands=0
failed_commands=0

for template_id in "${available_templates[@]}"; do
    if force_sidebar_build "$template_id"; then
        ((successful_commands++))
    else
        ((failed_commands++))
    fi
    
    # Small delay between commands to avoid overwhelming the system
    sleep 2
done

echo ""
echo "📊 Sidebar Build Command Summary:"
echo "   ✅ Successful: $successful_commands templates"
echo "   ⚠️  Failed: $failed_commands templates"
echo ""

if [[ $successful_commands -gt 0 ]]; then
    echo "🎯 Next Steps:"
    echo "1. Monitor each VS Code window as Claude builds sidebar pages"
    echo "2. Claude will analyze the sidebar component to see what pages are needed"
    echo "3. Each Claude will create functional page components with proper content"
    echo "4. All work will be committed when complete"
    echo "5. Use merge-completed-templates.sh when all sidebars are built"
    echo ""
    echo "⏰ Estimated time: 10-15 minutes per template"
    echo "   You can continue working while Claude instances build sidebars in parallel"
else
    echo "❌ No commands were sent successfully"
    echo "   Make sure VS Code windows are open for the templates you want to update"
fi

echo ""
echo "💡 Pro Tips:"
echo "   - Each Claude will examine the sidebar component to understand what pages are needed"
echo "   - All sidebar pages will be built with proper functionality and content"
echo "   - Components will match the template's specific purpose and theme"  
echo "   - All changes will be committed with descriptive messages"
echo "   - Run this script anytime you need sidebar pages built out"