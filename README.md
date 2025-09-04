# Templata

> Skip the blank page. Start with proven templates for life's biggest moments.

Templata is a free platform that provides expertly crafted templates for organizing life's most important moments. Just like Notion revolutionized note-taking and Canva transformed design, Templata is reimagining how we organize major life events.

## 🌟 Philosophy

Life shouldn't start with a blank page. When you're planning a wedding, buying a home, or starting a business, you deserve more than empty spreadsheets and scattered notes. Templata provides structure, expert guidance, and proven frameworks for life's biggest moments.

## ✨ Features

- **100+ Expert Templates** - Created by domain experts across Personal Life, Career & Work, Property & Moving, and Business & Finance
- **Guided Setup Wizards** - Intelligent setup that asks the right questions and builds your personalized workspace
- **Always Free** - No subscriptions, no hidden fees, no limitations
- **Beautiful & Functional** - Clean, professional design that works on all devices
- **Instant Setup** - Get organized in 3-5 minutes with step-by-step guidance

## 🎯 Use Cases

### Personal Life (25+ Templates)
- Wedding Planning - Complete organization system
- Baby Planning - Prepare for your new arrival
- Moving & Relocation - Organize your move
- And many more...

### Career & Work (30+ Templates)  
- Job Search - Track applications & interviews
- Career Change - Navigate transitions
- Professional Development - Plan your growth
- And many more...

### Property & Moving (20+ Templates)
- Home Buying - Navigate the buying process
- Home Selling - Manage your sale
- Rental Management - Organize properties
- And many more...

### Business & Finance (25+ Templates)
- Business Launch - Start your business right
- Investment Tracking - Manage your portfolio
- Financial Planning - Organize your finances
- And many more...

## 🚀 Getting Started

1. **Browse Templates** - Explore our collection of 100+ templates
2. **Choose Your Template** - Select the one that fits your needs
3. **Guided Setup** - Answer a few questions to personalize your workspace
4. **Start Organizing** - Jump in and manage your project with expert guidance

### Development Setup

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Icons**: Lucide React
- **Theme System**: CSS custom properties with OKLCH color space
- **State Management**: React Context API with localStorage persistence
- **Forms**: react-hook-form with Zod validation

## 🏗 Architecture

```
src/
├── app/                    # Next.js app router
│   ├── page.tsx           # Landing page
│   ├── about/             # About page
│   ├── faq/               # FAQ page  
│   └── templates/         # Template routes
│       ├── page.tsx       # Template gallery
│       └── wedding-planning/ # Specific templates
├── components/
│   ├── ui/                # shadcn/ui components
│   └── wedding-setup-wizard.tsx # Setup wizards
├── contexts/              # React Context providers
├── lib/                   # Utilities and configurations
└── styles/               # Global styles
```

## 🎨 Design System

Templata uses the Vercel theme from [tweakcn.com](https://tweakcn.com) featuring:
- **Colors**: Clean black/white OKLCH color space
- **Typography**: Clean, readable font hierarchy
- **Components**: Exclusively shadcn/ui components
- **Theme**: Programmatic theme switching per template

## 🧩 Key Components

### Guided Setup Wizards
Multi-step forms that personalize each template based on user responses:
- **Step-by-step guidance** with progress indication
- **Smart question flow** that adapts to user answers
- **Instant workspace creation** with pre-filled content
- **Built with shadcn Form components** and react-hook-form

### Template System
Expert-crafted templates with:
- **Domain expert creation** by professionals in each field
- **Structured organization** with proven frameworks
- **Customizable sections** that adapt to user needs
- **Export capabilities** for offline access

### Theme System
Programmatic theme switching:
- **CSS custom properties** for dynamic color changes
- **Per-template theming** capability
- **OKLCH color space** for better color manipulation
- **Accessible color contrast** maintained across themes

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Template Ideas** - Suggest new templates for life moments we haven't covered
2. **User Experience** - Report bugs or suggest UI/UX improvements
3. **Expert Knowledge** - Share domain expertise for template creation
4. **Code Contributions** - Submit PRs for features or fixes

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Inspiration

Templata draws inspiration from:
- **Notion** - For democratizing knowledge organization
- **Canva** - For making design accessible to everyone
- **Linear** - For clean, functional design patterns

We're doing for life organization what these tools did for their respective domains - making the complex simple and the overwhelming manageable.

## 📞 Support

- **FAQ**: [templata.com/faq](https://templata.com/faq)
- **Community**: Join our forum for user discussions
- **Email**: support@templata.com
- **Response Time**: Within 24 hours

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

Built with ❤️ for people organizing life's biggest moments.