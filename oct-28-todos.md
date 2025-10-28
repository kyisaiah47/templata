# October 28 TODOs

## High Priority

### Blank Note Views
- [ ] Blank note views don't work/need to be finalized
- [ ] Need actual editor implementation for blank notes (not just placeholder)

### Create Note UX
- [ ] Create note needs to be simplified - use dual button or small menu instead of whole modal
- [ ] Consider inline creation flow vs modal

### Notes View Architecture
- [ ] Get rid of the "notes" list view and just show the selected note on load
- [ ] Determine default behavior when no note is selected

### Note-Specific Views (CRITICAL DECISION NEEDED)
- [ ] Need to design note-specific view system alongside global views
- [ ] Current idea: Drag note into sidebar to transform sidebar icons to be NOTE-specific instead of global
- [ ] This prevents packing all views into singular note view (too much bulk + more work)
- [ ] **DISCUSS**: How exactly to implement this transformation?
  - Sidebar state management
  - Visual indicators for note-scoped vs global mode
  - User mental model and discoverability

### Performance & Loading
- [ ] Fix delay when switching between views (currently makes API call each time)
- [ ] Implement caching strategy - cache everything on login/first load
- [ ] Research how Notion loads so fast - what caching/prefetching strategies do they use?
- [ ] Reduce API calls - only refetch on mutations/stale data

## Medium Priority

### Timeline View
- [ ] Remove "Timeline View 4 items" header text
- [ ] Make graph full height of view
- [ ] Change detail view to modal form (consistent with rest of app)

### Analytics View
- [ ] Rethink analytics view - currently too jumbled and overwhelming
- [ ] Simplify metrics and layout
- [ ] Better visual hierarchy

### Archive Functionality
- [ ] Test archived view by creating archived notes in DB
- [ ] Add archive button to note (determine placement - menu? toolbar?)
- [ ] Implement unarchive functionality
- [ ] Test archived notes filtering and display

### Daily View
- [ ] Daily view layout is off-center and not full width
- [ ] Redesign daily view for better use of space
- [ ] Improve visual layout and alignment

## Architecture Decisions (RESOLVED)

1. **Note-scoped vs Global views**: ✅ DECISION MADE
   - **Solution**: Toggle/drag mode switch
   - Click toggle or drag note → entire dashboard changes color to indicate "note-scoped mode"
   - All views (Calendar, Timeline, Tasks, etc.) filter to ONLY that note's data
   - Same views, just filtered - not separate views
   - User can toggle back to global mode
   - Visual indicator: Dashboard color shift when in note-scoped mode

2. **Caching strategy**: 🔄 TO BE IMPLEMENTED
   - Cache everything on login/first load
   - Only refetch on mutations/stale data
   - Research Notion's patterns for instant loading
   - Implement SWR (stale-while-revalidate) pattern
   - Optimistic UI updates for mutations

3. **Create note flow**: ✅ DECISION MADE
   - **Solution**: Popover menu
   - Single "+ New Note" button
   - Opens popover with 2 options: "Blank Note" | "Guided Note"

4. **Blank note editor**: ✅ DECISION MADE
   - **Solution**: Tiptap editor (same as existing)
   - Add nice accessories/features
   - Keep simple for now, skip block-based
   - Can evolve to block-based later if needed

5. **Notes view default behavior**: ✅ DECISION MADE
   - Default to last selected note (localStorage cache)
   - Fallback to first note if no cache exists
   - No empty list view - always show a note
