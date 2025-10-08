# Workspace Sidebar Views Documentation

## Overview

The workspace page provides a comprehensive interface for managing templates, prompts, articles, and workspaces. The sidebar is the primary navigation hub with collapsible sections and multiple view modes.

## Architecture

```
WorkspaceSidebar
├── Header (Logo)
├── NavMain (Primary Navigation)
├── NavViewMode (View Mode Selector)
├── Workspace Section
│   ├── NavTemplateSelector
│   ├── NavPromptsList
│   └── NavArticlesList
├── NavSecondary (Settings, Help, Search)
└── Footer (User Profile)
```

## 1. Main Navigation Views

**File:** `src/components/nav-main.tsx`

The primary navigation provides access to five main views:

| View | Icon | Hash URL | Description |
|------|------|----------|-------------|
| Dashboard | `IconDashboard` | `#dashboard` | Overview with stats, charts, and quick access tables |
| Templates | `IconFileDescription` | `#templates` | Searchable list of all available templates |
| Prompts | `IconFileAi` | `#prompts` | Searchable list of all prompts across templates |
| Articles | `IconReport` | `#articles` | Searchable list of all articles |
| Workspaces | `IconFolder` | `#workspaces` | Active workspace with view modes |

### Quick Create Button
- Primary action button in the navigation
- Intended for rapid template/workspace creation
- Positioned prominently with `IconCirclePlusFilled`

### Navigation Behavior
- Hash-based routing (`window.location.hash`)
- Updates `currentView` state on hash changes
- Default view: `dashboard`

---

## 2. View Modes (Workspaces View Only)

**File:** `src/components/nav-view-mode.tsx`

Three distinct view modes available when in the Workspaces view:

### Chat View
- **Icon:** `IconMessageCircle`
- **Component:** `src/components/workspace-views/chat-view.tsx`
- **Description:** Conversational interface for interacting with templates
- **Usage:** Best for guided prompts and interactive content creation

### Split View
- **Icon:** `IconColumns`
- **Component:** `src/components/workspace-views/split-view.tsx`
- **Description:** Side-by-side editor and preview
- **Usage:** Simultaneous editing and preview

### Board View
- **Icon:** `IconLayoutKanban`
- **Component:** `src/components/workspace-views/board-view.tsx`
- **Description:** Kanban-style drag-and-drop board
- **Usage:** Visual organization of workspace items

**State Management:**
```typescript
const [viewMode, setViewMode] = useState<ViewMode>('chat');
```

---

## 3. Workspace Section

The workspace section is a collapsible group containing three dynamic components:

### 3.1 Templates Selector

**File:** `src/components/nav-template-selector.tsx`

**Features:**
- Collapsible section with +/- icons
- Lists all templates from `templateRegistry`
- Shows active selection state
- Default: First template in registry

**Props:**
```typescript
interface NavTemplateSelectorProps {
  selectedTemplateId: string | null;
  onTemplateChange: (templateId: string) => void;
}
```

**Visual:**
- Maximum height: 200px with overflow scroll
- Uses `SidebarMenuSub` components
- Highlights selected template with `isActive` prop

---

### 3.2 Prompts List

**File:** `src/components/nav-prompts-list.tsx`

**Features:**
- Dynamically loads prompts based on selected template
- Collapsible section (default: open)
- Shows loading state
- Empty state when no prompts available

**Props:**
```typescript
interface NavPromptsListProps {
  templateId: string | null;
  onPromptSelect?: (prompt: any) => void;
}
```

**Data Flow:**
1. Watches `templateId` via `useEffect`
2. Fetches from `/api/prompts?templateId=${templateId}`
3. Updates local state with prompts array
4. Handles loading and error states

**States:**
- Loading: "Loading..."
- Empty: "No prompts"
- Populated: List of clickable prompts

**Behavior:**
- Returns `null` if no template selected
- Clears old prompts before loading new ones
- Maximum height: 200px with overflow scroll

---

### 3.3 Articles List

**File:** `src/components/nav-articles-list.tsx`

**Features:**
- Dynamically loads articles based on selected template
- Collapsible section (default: open)
- Shows loading state
- Empty state when no articles available

**Props:**
```typescript
interface NavArticlesListProps {
  templateId: string | null;
  onArticleSelect?: (article: any) => void;
}
```

**Data Flow:**
1. Watches `templateId` via `useEffect`
2. Fetches from `/api/articles?templateId=${templateId}`
3. Updates local state with articles array
4. Handles loading and error states

**States:**
- Loading: "Loading..."
- Empty: "No articles"
- Populated: List of clickable articles

**Behavior:**
- Returns `null` if no template selected
- Clears old articles before loading new ones
- Maximum height: 200px with overflow scroll

---

## 4. Dashboard View

**Main Features:**

### Stats Cards (4 columns on large screens)
1. **All Templates** - Total templates available
2. **Active Workspaces** - Current workspaces in progress
3. **Words This Month** - Total word count with trend badge
4. **Templates Used** - Monthly usage count

### Activity Chart
- Interactive area chart
- Component: `ChartAreaInteractive`

### Tabbed Tables
Four tabs with pagination:

#### All Templates Tab
- Full template list (10 per page)
- Columns: Template, Category, Description, Actions
- Pagination controls

#### Recent Tab
- Last 5 used templates
- Columns: Template, Category, Last Used, Actions
- Mock "2 days ago" timestamps

#### Favorites Tab
- User-favorited templates
- Empty state: "Star templates to add them here"
- Stored in `favorites` state array

#### Workspaces Tab
- Active workspace list
- Columns: Workspace, Template, Last Edited, Word Count, Actions
- Mock data (3 workspaces)

---

## 5. Templates View

**Features:**
- Search bar with live filtering
- Paginated table (20 per page)
- Columns: Template, Category, Description, Actions
- Filter by: name, category, description

**Search Implementation:**
```typescript
const filteredTemplates = useMemo(() => {
  if (!searchQuery.trim()) return templateRegistry;
  return templateRegistry.filter(t =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
}, [searchQuery]);
```

**Navigation:**
- "View" button links to `/${template.id}/template`

---

## 6. Prompts View

**Features:**
- Lazy loading (loads when view is accessed)
- Search functionality
- Paginated table (20 per page)
- Batch loading for performance (10 templates at a time)

**Columns:**
- Prompt (truncated at 500px)
- Template
- Category
- Type
- Actions

**Data Loading Strategy:**
```typescript
// Loads prompts for all templates in batches
const batchSize = 10;
for (let i = 0; i < templateRegistry.length; i += batchSize) {
  // Process batch in parallel
}
```

**Navigation:**
- "View" button links to `/${prompt.templateId}/template`

---

## 7. Articles View

**Features:**
- Lazy loading from Supabase
- Search functionality
- Paginated table (20 per page)

**Columns:**
- Title
- Template
- Excerpt (truncated at 400px)
- Read Time
- Type
- Actions

**Data Source:**
```typescript
supabase
  .from('templata_articles')
  .select('id, title, excerpt, template, read_time, type, published_at, slug')
  .order('published_at', { ascending: false })
```

**Navigation:**
- "Read" button links to `/articles/${article.slug || article.id}`

---

## 8. Workspaces View

**Layout:**
```
Header (Template name)
└── Dynamic View Content
    ├── Chat View
    ├── Split View
    └── Board View
```

**Header Shows:**
- "My Workspace" title
- Current template name

**View Switching:**
Controlled by `viewMode` state and `NavViewMode` component in sidebar.

---

## 9. Component File Structure

```
src/
├── app/
│   └── workspace/
│       └── page.tsx                          # Main workspace page
├── components/
│   ├── workspace-sidebar.tsx                 # Main sidebar component
│   ├── nav-main.tsx                          # Primary navigation
│   ├── nav-view-mode.tsx                     # View mode selector
│   ├── nav-template-selector.tsx             # Template selector (collapsible)
│   ├── nav-prompts-list.tsx                  # Prompts list (collapsible)
│   ├── nav-articles-list.tsx                 # Articles list (collapsible)
│   ├── nav-secondary.tsx                     # Settings, Help, Search
│   ├── nav-user.tsx                          # User profile in footer
│   └── workspace-views/
│       ├── chat-view.tsx                     # Chat interface
│       ├── split-view.tsx                    # Split editor/preview
│       └── board-view.tsx                    # Kanban board
└── registry/
    └── templates.ts                          # Template registry
```

---

## 10. State Management

### Page-level State

```typescript
// Current view (dashboard, templates, prompts, articles, workspaces)
const [currentView, setCurrentView] = useState('dashboard');

// Active view mode (chat, split, board) - for workspaces view only
const [viewMode, setViewMode] = useState<ViewMode>('chat');

// Selected template in workspace section
const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(
  templateRegistry[0]?.id || null
);

// Search queries for each view
const [searchQuery, setSearchQuery] = useState('');
const [promptsSearchQuery, setPromptsSearchQuery] = useState('');
const [articlesSearchQuery, setArticlesSearchQuery] = useState('');
const [workspacesSearchQuery, setWorkspacesSearchQuery] = useState('');

// Data stores
const [allPrompts, setAllPrompts] = useState<any[]>([]);
const [allArticles, setAllArticles] = useState<any[]>([]);
const [favorites, setFavorites] = useState<string[]>([]);

// Loading states
const [promptsLoading, setPromptsLoading] = useState(false);
const [articlesLoading, setArticlesLoading] = useState(false);

// Pagination (separate for each view/tab)
const [allPage, setAllPage] = useState(0);
const [recentPage, setRecentPage] = useState(0);
const [favoritesPage, setFavoritesPage] = useState(0);
const [workspacesPage, setWorkspacesPage] = useState(0);
const [templatesPage, setTemplatesPage] = useState(0);
const [promptsPage, setPromptsPage] = useState(0);
const [articlesPage, setArticlesPage] = useState(0);
```

---

## 11. Collapsible Behavior

All workspace section components use the same collapsible pattern:

```typescript
<Collapsible defaultOpen className="group/collapsible">
  <SidebarMenuItem>
    <CollapsibleTrigger asChild>
      <SidebarMenuButton>
        {Title}{" "}
        <IconPlus className="ml-auto group-data-[state=open]/collapsible:hidden" />
        <IconMinus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
      </SidebarMenuButton>
    </CollapsibleTrigger>
    <CollapsibleContent>
      {/* Content */}
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible>
```

**Icons:**
- Plus (+): Section is collapsed
- Minus (-): Section is expanded
- Auto-toggle based on `data-[state]` attribute

---

## 12. API Endpoints

| Endpoint | Method | Query Params | Returns |
|----------|--------|--------------|---------|
| `/api/prompts` | GET | `templateId` | `{ prompts: [] }` |
| `/api/articles` | GET | `templateId` | `{ articles: [] }` |

**Supabase Queries:**
- Articles: `templata_articles` table

---

## 13. Design Patterns

### Lazy Loading
- Prompts and articles only load when their respective views are accessed
- Prevents unnecessary API calls on page load
- Stores data in state to avoid reloading

### Progressive Enhancement
- Empty states for all lists
- Loading states during data fetching
- Graceful error handling (catch blocks set empty arrays)

### Responsive Design
- Tables with minimum widths and truncation
- Horizontal scroll for overflow
- Grid layouts adjust with container queries (`@xl/main`, `@5xl/main`)

### Pagination
- Configurable page sizes (10, 20 per page)
- Separate pagination state for each view
- "Showing X to Y of Z" counters
- Previous/Next buttons with disabled states

---

## 14. Future Enhancements

Based on the code structure:

1. **Workspace Switcher** (exists but not integrated)
   - File: `src/components/tiptap-templates/simple/workspace-switcher.tsx`
   - Modes: template, reflection, master (Life OS - coming soon)

2. **Favorites System**
   - State exists but no toggle implementation
   - Would need star/unstar buttons in tables

3. **Recent Templates Tracking**
   - Currently showing static data
   - Would need localStorage or database tracking

4. **Workspaces CRUD**
   - Currently using mock data
   - Needs backend integration

5. **Prompt/Article Selection Handlers**
   - Optional callbacks defined but not fully implemented
   - Could trigger workspace actions or navigation

---

## 15. Key Dependencies

- `@tabler/icons-react` - Icon library
- `shadcn/ui` components:
  - Sidebar components
  - Collapsible
  - Table
  - Tabs
  - Card
  - Badge
  - Button
  - Input
- Supabase client for articles
- Template registry for template data

---

## 16. CSS Variables

```css
--sidebar-width: calc(var(--spacing) * 72)
--header-height: calc(var(--spacing) * 12)
```

Applied via inline styles on `SidebarProvider`.
