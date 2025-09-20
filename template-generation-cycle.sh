#!/bin/bash

# Template Generation Cycle Script
# Generates individual template-*.ts files and template registry automatically

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TEMPLATE_LIST_FILE="$SCRIPT_DIR/template-list.txt"
DATA_DIR="$SCRIPT_DIR/src/data"
REGISTRY_DIR="$SCRIPT_DIR/src/registry"
LOGFILE="$SCRIPT_DIR/template-generation-cycle.log"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOGFILE"
}

log_colored() {
    local color=$1
    local message=$2
    echo -e "${color}$(date '+%Y-%m-%d %H:%M:%S') - $message${NC}" | tee -a "$LOGFILE"
}

# Get category for template
get_template_category() {
    local template="$1"
    case "$template" in
        *"wedding"*|*"baby"*|*"home"*|*"retirement"*|*"elder-care"*|*"grandparent"*)
            echo "Personal Life"
            ;;
        *"business"*|*"freelance"*|*"career"*|*"job"*|*"affiliate"*|*"startup"*)
            echo "Business & Career"
            ;;
        *"fitness"*|*"health"*|*"medical"*|*"weight"*|*"yoga"*|*"marathon"*)
            echo "Health & Wellness"
            ;;
        *"learning"*|*"education"*|*"college"*|*"skill"*|*"book"*|*"course"*)
            echo "Education & Learning"
            ;;
        *"finance"*|*"budget"*|*"investment"*|*"money"*|*"crypto"*)
            echo "Finance & Investment"
            ;;
        *"creative"*|*"art"*|*"music"*|*"photography"*|*"writing"*|*"design"*)
            echo "Creative & Arts"
            ;;
        *"tech"*|*"app"*|*"coding"*|*"development"*|*"digital"*)
            echo "Technology & Development"
            ;;
        *)
            echo "Lifestyle & Planning"
            ;;
    esac
}

# Get icon for template
get_template_icon() {
    local template="$1"
    case "$template" in
        *"wedding"*) echo "💒" ;;
        *"baby"*|*"parenting"*) echo "👶" ;;
        *"home"*|*"house"*) echo "🏠" ;;
        *"fitness"*|*"gym"*) echo "💪" ;;
        *"business"*|*"startup"*) echo "🚀" ;;
        *"career"*|*"job"*) echo "💼" ;;
        *"education"*|*"learning"*) echo "📚" ;;
        *"finance"*|*"money"*|*"budget"*) echo "💰" ;;
        *"travel"*) echo "✈️" ;;
        *"health"*|*"medical"*) echo "🏥" ;;
        *"food"*|*"meal"*) echo "🍽️" ;;
        *"garden"*) echo "🌱" ;;
        *"art"*|*"creative"*) echo "🎨" ;;
        *"music"*) echo "🎵" ;;
        *"photography"*) echo "📸" ;;
        *"writing"*|*"book"*) echo "✍️" ;;
        *"tech"*|*"app"*|*"development"*) echo "💻" ;;
        *"retirement"*) echo "🏖️" ;;
        *"car"*|*"vehicle"*) echo "🚗" ;;
        *) echo "📋" ;;
    esac
}

# Get template color scheme
get_template_color() {
    local template="$1"
    case "$template" in
        *"wedding"*) echo "bg-pink-50 dark:bg-pink-950/20 border-pink-200 dark:border-pink-800|text-pink-600 dark:text-pink-400" ;;
        *"baby"*|*"parenting"*) echo "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800|text-blue-600 dark:text-blue-400" ;;
        *"business"*|*"startup"*) echo "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800|text-purple-600 dark:text-purple-400" ;;
        *"finance"*|*"money"*) echo "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800|text-green-600 dark:text-green-400" ;;
        *"health"*|*"fitness"*) echo "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800|text-red-600 dark:text-red-400" ;;
        *"education"*|*"learning"*) echo "bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800|text-indigo-600 dark:text-indigo-400" ;;
        *"creative"*|*"art"*) echo "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800|text-orange-600 dark:text-orange-400" ;;
        *) echo "bg-gray-50 dark:bg-gray-950/20 border-gray-200 dark:border-gray-800|text-gray-600 dark:text-gray-400" ;;
    esac
}

# Create individual template-*.ts file
create_template_file() {
    local template="$1"
    local template_file="$DATA_DIR/template-${template}.ts"
    local template_name=$(echo "$template" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
    local category=$(get_template_category "$template")

    log_colored "$YELLOW" "Creating template file: template-${template}.ts"

    cat > "$template_file" << EOF
import { GuidanceTemplate } from '@/types/template';

export const ${template//-/}Template: GuidanceTemplate = {
  id: "${template}",
  name: "${template_name}",
  description: "Comprehensive guidance and tools for ${template_name,,}.",
  category: "${category}",
  difficulty: "intermediate",
  estimatedTime: "2-4 weeks",

  sections: [
    {
      id: "foundation-understanding",
      title: "Foundation and Understanding",
      description: "Build your knowledge base and understand the fundamentals",
      estimatedTime: "3-5 days",
      difficulty: "beginner",
      order: 1,
      isRequired: true,

      subsections: [
        {
          id: "basics",
          title: "Getting Started",
          description: "Essential concepts and initial steps",
          estimatedTime: "1-2 days",
          order: 1,
          resources: []
        },
        {
          id: "planning",
          title: "Initial Planning",
          description: "Set your goals and create your roadmap",
          estimatedTime: "1-2 days",
          order: 2,
          resources: []
        }
      ]
    },
    {
      id: "planning-preparation",
      title: "Planning and Preparation",
      description: "Detailed planning and preparation phase",
      estimatedTime: "5-7 days",
      difficulty: "beginner",
      order: 2,
      isRequired: true,

      subsections: [
        {
          id: "research",
          title: "Research and Analysis",
          description: "Gather information and analyze your options",
          estimatedTime: "2-3 days",
          order: 1,
          resources: []
        },
        {
          id: "strategy",
          title: "Strategy Development",
          description: "Create your detailed action plan",
          estimatedTime: "2-3 days",
          order: 2,
          resources: []
        }
      ]
    },
    {
      id: "implementation-action",
      title: "Implementation and Action",
      description: "Execute your plan and take concrete steps",
      estimatedTime: "1-2 weeks",
      difficulty: "intermediate",
      order: 3,
      isRequired: true,

      subsections: [
        {
          id: "execution",
          title: "Taking Action",
          description: "Implement your strategy step by step",
          estimatedTime: "1 week",
          order: 1,
          resources: []
        },
        {
          id: "monitoring",
          title: "Progress Monitoring",
          description: "Track progress and make adjustments",
          estimatedTime: "3-4 days",
          order: 2,
          resources: []
        }
      ]
    },
    {
      id: "relationships-communication",
      title: "Relationships and Communication",
      description: "Navigate relationships and communication challenges",
      estimatedTime: "3-5 days",
      difficulty: "intermediate",
      order: 4,
      isRequired: false,

      subsections: [
        {
          id: "stakeholders",
          title: "Key Relationships",
          description: "Manage important relationships throughout the process",
          estimatedTime: "2-3 days",
          order: 1,
          resources: []
        }
      ]
    },
    {
      id: "challenges-solutions",
      title: "Challenges and Solutions",
      description: "Address common challenges and obstacles",
      estimatedTime: "3-5 days",
      difficulty: "intermediate",
      order: 5,
      isRequired: false,

      subsections: [
        {
          id: "problem-solving",
          title: "Problem Resolution",
          description: "Handle setbacks and find solutions",
          estimatedTime: "2-3 days",
          order: 1,
          resources: []
        }
      ]
    },
    {
      id: "growth-future-vision",
      title: "Growth and Future Vision",
      description: "Plan for long-term success and continuous improvement",
      estimatedTime: "2-3 days",
      difficulty: "advanced",
      order: 6,
      isRequired: false,

      subsections: [
        {
          id: "optimization",
          title: "Optimization and Growth",
          description: "Optimize your approach and plan for the future",
          estimatedTime: "2-3 days",
          order: 1,
          resources: []
        }
      ]
    }
  ],

  tools: [],
  experts: [],
  faqs: [],
  resources: [],

  tags: ["${category,,}", "${template}"],
  lastUpdated: new Date().toISOString(),
  version: "1.0.0"
};
EOF

    log_colored "$GREEN" "Created template file: $template_file"
}

# Generate template registry
generate_template_registry() {
    local registry_file="$REGISTRY_DIR/templates.ts"

    log_colored "$YELLOW" "Generating template registry..."

    # Start the registry file
    cat > "$registry_file" << 'EOF'
import { GuidanceTemplate } from '@/types/template';
import { getTemplateExperts } from '@/lib/expert-badges';

EOF

    # Add imports for all templates
    while IFS= read -r template; do
        [[ "$template" =~ ^#.*$ ]] && continue
        [[ -z "$template" ]] && continue

        local camelCase=$(echo "$template" | sed 's/-\([a-z]\)/\U\1/g')
        echo "import { ${camelCase}Template } from '@/data/template-${template}';" >> "$registry_file"
    done < "$TEMPLATE_LIST_FILE"

    # Add interface and helper function
    cat >> "$registry_file" << 'EOF'

export interface TemplateRegistryEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  url: string;
  popular?: boolean;
  featured?: boolean;
  expertVerified?: boolean;
  color: string;
  iconColor: string;
  template: GuidanceTemplate;
}

export function getTemplate(baseTemplate: GuidanceTemplate): GuidanceTemplate {
  return baseTemplate;
}

export const templateRegistry: TemplateRegistryEntry[] = [
EOF

    # Add all template entries
    while IFS= read -r template; do
        [[ "$template" =~ ^#.*$ ]] && continue
        [[ -z "$template" ]] && continue

        local template_name=$(echo "$template" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
        local category=$(get_template_category "$template")
        local icon=$(get_template_icon "$template")
        local colors=$(get_template_color "$template")
        local color_bg=$(echo "$colors" | cut -d'|' -f1)
        local color_icon=$(echo "$colors" | cut -d'|' -f2)
        local camelCase=$(echo "$template" | sed 's/-\([a-z]\)/\U\1/g')

        # Set popular flag for first 10 templates
        local popular="false"
        local featured="false"
        local expert_verified="false"

        cat >> "$registry_file" << EOF
  {
    id: "${template}",
    name: "${template_name}",
    description: "Comprehensive guidance and tools for ${template_name,,}.",
    category: "${category}",
    icon: "${icon}",
    url: "/${template}/app",
    popular: ${popular},
    featured: ${featured},
    expertVerified: ${expert_verified},
    color: "${color_bg}",
    iconColor: "${color_icon}",
    template: getTemplate(${camelCase}Template)
  },
EOF
    done < "$TEMPLATE_LIST_FILE"

    # Close the array and add helper functions
    cat >> "$registry_file" << 'EOF'
];

// Helper functions
export const getTemplateById = (id: string): TemplateRegistryEntry | undefined => {
  return templateRegistry.find(template => template.id === id);
};

export const getTemplatesByCategory = (category: string): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => template.category === category);
};

export const getFeaturedTemplates = (): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => template.featured);
};

export const getPopularTemplates = (): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => template.popular);
};
EOF

    log_colored "$GREEN" "Generated template registry: $registry_file"
}

# Main function
main() {
    log_colored "$BLUE" "Starting Template Generation Cycle"

    # Setup directories
    mkdir -p "$DATA_DIR"
    mkdir -p "$REGISTRY_DIR"
    mkdir -p "$(dirname "$LOGFILE")"

    # Count templates
    local template_count=$(grep -v "^#" "$TEMPLATE_LIST_FILE" | grep -v "^$" | wc -l)
    log_colored "$BLUE" "Found $template_count templates to process"

    # Generate individual template files
    log_colored "$YELLOW" "Generating individual template-*.ts files..."
    while IFS= read -r template; do
        [[ "$template" =~ ^#.*$ ]] && continue
        [[ -z "$template" ]] && continue

        create_template_file "$template"
        sleep 1  # Brief pause
    done < "$TEMPLATE_LIST_FILE"

    # Generate template registry
    generate_template_registry

    log_colored "$GREEN" "Template generation cycle complete!"
    log_colored "$GREEN" "Generated $template_count template files and updated registry"
}

# Show usage
show_usage() {
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "COMMANDS:"
    echo "  (no command)    - Generate all template files and registry"
    echo "  registry-only   - Generate only the template registry"
    echo "  status         - Show current status"
    echo "  help           - Show this help"
    echo ""
    echo "Examples:"
    echo "  $0              # Generate everything"
    echo "  $0 registry-only # Only update registry"
    echo "  $0 status       # Check current status"
}

# Handle arguments
COMMAND="${1:-main}"

case "$COMMAND" in
    "status")
        template_count=$(grep -v "^#" "$TEMPLATE_LIST_FILE" | grep -v "^$" | wc -l)
        existing_files=$(find "$DATA_DIR" -name "template-*.ts" 2>/dev/null | wc -l)
        echo "Total templates: $template_count"
        echo "Existing template files: $existing_files"
        echo "Registry file: $([ -f "$REGISTRY_DIR/templates.ts" ] && echo "exists" || echo "missing")"
        ;;
    "registry-only")
        mkdir -p "$REGISTRY_DIR"
        generate_template_registry
        ;;
    "help")
        show_usage
        ;;
    *)
        main
        ;;
esac