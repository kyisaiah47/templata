# Templata

**Templata** is an AI-powered playbook platform for life's biggest moments. Describe what you're planning in plain language — a wedding, a career change, buying a home — and Claude generates a personalized, structured playbook tailored to your specific situation. Not a generic template. Yours.

Live at **[templata.org](https://templata.org)**

---

## The Idea

Notion is a blank canvas — powerful but overwhelming. Generic templates are too rigid. ChatGPT gives you a wall of text with no structure.

Templata sits in the middle: **opinionated by default, tailored to you specifically.**

> Notion is for organizing your life. Templata is for executing the big moments in it.

The AI touches your experience in two ways:
1. **Generation** — one Claude API call produces your full playbook (tasks, questions, resources) from your natural language description
2. **Inline feedback** — answer a question and Claude responds with contextual insight specific to what you wrote

---

## How It Works

1. Describe your situation: *"I'm planning a wedding in NYC next October, $50k budget, 80 guests, intimate but elegant"*
2. Claude generates a personalized Playbook — tasks to complete, questions to think through, resources relevant to your context
3. Work through it: check off tasks, answer questions, get AI feedback inline on each answer
4. Share your playbook with the community or fork someone else's

---

## Data Model

### Playbook
The core entity. AI-generated for your specific situation. Replaces the old Guide + Track split — since the AI generates it for you, there's no need to separate the template from your instance.

### Item (3 types)

| Type | Purpose |
|---|---|
| **Task** | Actionable, checkable — "do this" |
| **Question** | Answerable, triggers inline AI feedback — "think about this" |
| **Resource** | Upfront context — venues, books, tools, people relevant to your situation |

Items are ordered and grouped into phases by the AI (e.g. "Before You Start", "6 Months Out", "Final Month").

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) + React 19 |
| Language | TypeScript |
| AI | Claude API (`claude-sonnet-4-6`) via `@anthropic-ai/sdk` |
| Auth & Database | Supabase (`@supabase/ssr`) |
| Styling | Tailwind CSS v4, shadcn/ui |
| Animations | Framer Motion |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                      # Landing page
│   ├── app/
│   │   ├── page.tsx                  # Playbook list + generation form
│   │   ├── [playbookId]/page.tsx     # Playbook workspace
│   │   └── settings/                 # User settings
│   └── api/
│       ├── auth/                     # Login, signup, logout, me, reset
│       ├── playbooks/
│       │   ├── route.ts              # GET — list user's playbooks
│       │   ├── generate/route.ts     # POST — generate playbook via Claude
│       │   └── [id]/
│       │       ├── route.ts          # GET / DELETE
│       │       ├── feedback/route.ts # POST — submit answer, get AI insight
│       │       └── items/[itemId]/   # PATCH — toggle tasks, save answers
│       ├── feedback/                 # User feedback
│       ├── og/                       # OG image generation
│       └── user/                     # User profile
├── components/
│   ├── ui/                           # shadcn/ui base components
│   ├── providers/                    # Query, session, UI providers
│   ├── marketing-header.tsx
│   ├── marketing-footer.tsx
│   └── login-dialog.tsx
├── lib/
│   ├── playbook-prompt.ts            # Claude generation prompt
│   ├── feedback-prompt.ts            # Claude inline feedback prompt
│   ├── auth-utils.ts                 # Server-side auth helpers
│   ├── rate-limit.ts                 # In-memory rate limiter
│   └── supabase.ts                   # Supabase client
├── types/
│   ├── playbook.ts                   # Playbook, PlaybookItem types
│   └── task.ts
└── middleware.ts                     # Protects /app/* routes
```

---

## Getting Started Locally

### Prerequisites
- Node.js 18+
- A [Supabase](https://supabase.com) project
- An [Anthropic](https://console.anthropic.com) API key

### 1. Clone & install

```bash
git clone https://github.com/kyisaiah47/templata.git
cd templata
npm install
```

### 2. Environment variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_publishable_key
SUPABASE_SERVICE_ROLE_KEY=your_secret_key
ANTHROPIC_API_KEY=your_anthropic_key
```

### 3. Run the migration

Go to **Supabase → SQL Editor** and run `supabase/migrations/new_playbook_schema.sql`.

### 4. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Roadmap

### Now (core loop)
- [x] AI playbook generation (Claude one-shot)
- [x] Playbook workspace (tasks, questions, resources grouped by phase)
- [x] Inline AI feedback on question answers
- [x] Auth (Supabase email/password)
- [x] Playbook list + delete

### Next
- [ ] Community / Explore page — browse public playbooks
- [ ] Fork a playbook — re-tailor someone else's to your context
- [ ] Pre-generated seed playbooks at launch (5-10 polished examples)
- [ ] Landing page redesign

### Later
- [ ] Playbook sharing / public URLs
- [ ] Likes and community engagement
- [ ] Mobile experience
- [ ] Pricing / monetization

---

## Branches

| Branch | Purpose |
|---|---|
| `main` | Previous version (static guide library) |
| `playbook-v2` | Current — AI playbook platform (active development) |
