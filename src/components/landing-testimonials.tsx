"use client";

import { BadgeCheck, Home, Briefcase, Heart } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CardStack } from "@/components/aceternity/card-stack";

const LandingTestimonials = () => {
  const features = [
    "90%+ Coverage",
    "AI-Refined Questions",
    "Expert Readings",
    "Per-Guide Planning",
    "Calendar Integration",
    "Task Management",
    "Progress Tracking",
    "Split-Screen View",
  ];

  return (
    <section className="h-full w-screen overflow-hidden py-32">
      <div className="container flex w-full max-w-6xl flex-col items-center justify-between lg:flex-row">
        <div className="gap-15 relative flex h-full flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <h1 className="w-full max-w-md text-5xl font-medium font-semibold tracking-tighter lg:text-6xl">
            Questions. Answers. One View.
          </h1>

          <div className="flex w-full max-w-lg items-center gap-4 px-5">
            <span className="bg-muted-foreground/20 h-px w-full" />
            <p className="text-muted-foreground/50 text-sm">FEATURES</p>
            <span className="bg-muted-foreground/20 h-px w-full" />
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {features.map((feature) => (
              <li key={feature} className="flex gap-2 lg:items-center">
                <BadgeCheck className="text-muted-foreground/80 size-4" />
                <p className="text-muted-foreground/80 tracking-tight">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <Tabs defaultValue="home" className="mt-24 flex flex-col items-center justify-center lg:mt-0">
          <TabsList className="mb-8">
            <TabsTrigger value="home" className="gap-2">
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">First Home</span>
            </TabsTrigger>
            <TabsTrigger value="career" className="gap-2">
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Career</span>
            </TabsTrigger>
            <TabsTrigger value="wedding" className="gap-2">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Wedding</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="home">
            <CardStack items={HOME_CARDS} />
          </TabsContent>
          <TabsContent value="career">
            <CardStack items={CAREER_CARDS} />
          </TabsContent>
          <TabsContent value="wedding">
            <CardStack items={WEDDING_CARDS} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export { LandingTestimonials };

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500",
        className,
      )}
    >
      {children}
    </span>
  );
};

const HOME_CARDS = [
  {
    id: 0,
    name: "Location & Lifestyle",
    designation: "Reflect on your social life over the past 3 months. Where do you actually spend time?",
    icon: <Home className="h-8 w-8" />,
    content: (
      <p>
        Most weekends I'm in the arts district - within 2 miles of my favorite coffee shop, climbing gym, and where 4 of my closest friends live. I rarely go more than 15 minutes from this area. This tells me proximity to this neighborhood matters more than I thought.
      </p>
    ),
  },
  {
    id: 1,
    name: "Financial Reality",
    designation: "Create a spending snapshot: Track every dollar you spend for the next 2 weeks.",
    icon: <Home className="h-8 w-8" />,
    content: (
      <p>
        Tracked $3,200 total. 65% must-have, 20% should-have, 10% nice-to-have, 5% regret. Currently spending $320/week on dining out - if I cut that by half, that's an extra $640/month toward mortgage. With current $1,800 rent, could realistically afford $2,200-2,400/month.
      </p>
    ),
  },
  {
    id: 2,
    name: "Long-term Planning",
    designation: "Think about your career trajectory over the next 5 years. What are the 3 most likely scenarios?",
    icon: <Home className="h-8 w-8" />,
    content: (
      <p>
        Scenario 1 (60%): Stay in current role, steady income. Scenario 2 (30%): Promotion requiring office 4x/week. Scenario 3 (10%): Career pivot to remote work. This means I should prioritize proximity to current office over remote-friendly neighborhoods.
      </p>
    ),
  },
];

const CAREER_CARDS = [
  {
    id: 0,
    name: "Energy Audit",
    designation: "Write about 3 specific moments in the past year when you felt energized at work.",
    icon: <Briefcase className="h-8 w-8" />,
    content: (
      <p>
        1) Leading the product redesign workshop - I was facilitating, synthesizing ideas, helping the team think bigger. 2) Mentoring the new hire through their first project. 3) Presenting our quarterly results to leadership. Pattern: I'm energized when teaching, leading, and communicating, not when heads-down coding.
      </p>
    ),
  },
  {
    id: 1,
    name: "Pain Points",
    designation: "Document the last time you dreaded going to work. What specific situation triggered it?",
    icon: <Briefcase className="h-8 w-8" />,
    content: (
      <p>
        Last Monday. Another sprint planning meeting where my ideas were dismissed. This started 8 months ago when new leadership came in. Before that, I loved my work. It's not the job itself - it's the culture shift. Maybe I don't need to change careers, just companies.
      </p>
    ),
  },
  {
    id: 2,
    name: "Future Vision",
    designation: "Reflect on the last 5 times you said 'I wish I could...' about work.",
    icon: <Briefcase className="h-8 w-8" />,
    content: (
      <p>
        1) "I wish I could work with clients directly" 2) "I wish I could set strategy" 3) "I wish I could mentor juniors" 4) "I wish I could work on products that help people" 5) "I wish I could have more autonomy". Pattern: I want more client-facing, strategic, people-focused work.
      </p>
    ),
  },
];

const WEDDING_CARDS = [
  {
    id: 0,
    name: "Authentic Moments",
    designation: "Describe 3 moments in your relationship where you felt most 'us'.",
    icon: <Heart className="h-8 w-8" />,
    content: (
      <p>
        1) Sunday morning farmers market runs - no agenda, just wandering. 2) That random Tuesday when we stayed up til 2am talking about our future. 3) Cooking dinner together when my mom visited. All quiet, intimate, just us being ourselves. This wedding should feel like those moments, not a performance.
      </p>
    ),
  },
  {
    id: 1,
    name: "Decision Dynamics",
    designation: "Document how you and your partner handle big decisions together.",
    icon: <Heart className="h-8 w-8" />,
    content: (
      <p>
        Moving apartments: I cared about neighborhood, they cared about layout. Buying a car: They researched safety, I wanted aesthetics. Pattern emerging: I'm emotional/aesthetic-driven, they're practical/logical. For wedding: I'll probably care more about vibe/photos, they'll care about budget/logistics. We balance each other.
      </p>
    ),
  },
  {
    id: 2,
    name: "Family Expectations",
    designation: "Think about weddings in your family. What messages did you absorb?",
    icon: <Heart className="h-8 w-8" />,
    content: (
      <p>
        Mom's wedding was huge (300 people) but she says she barely remembers it, was too stressed. Dad's side had simple backyard gatherings that felt warm. I absorbed: "bigger = better" but also saw that intimacy matters more. Don't want to repeat Mom's stress. Want Dad's warmth at whatever size.
      </p>
    ),
  },
];
