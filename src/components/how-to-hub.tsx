"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BookOpen, Search, ArrowRight, Heart, Briefcase, Activity, DollarSign, Home, Users, Rocket, Brain, TrendingUp, Wallet, Baby, Target, Pill, PiggyBank, Sparkles, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Particles } from "@/components/magicui/particles";
import { cn } from "@/lib/utils";

interface Guide {
  id: string;
  name: string;
  description: string;
  category: string;
  difficulty?: string;
  estimated_time?: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  display_order: number;
}

interface HowToHubProps {
  guidesByCategory: Record<string, Guide[]>;
  categories: Category[];
  totalGuides: number;
}

// Marquee components
function Marquee({
  className,
  reverse,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: any) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around ![animation-duration:12s] [animation-play-state:running] [gap:var(--gap)] group-hover:[animation-play-state:paused]",
              {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "[animation-direction:reverse]": reverse,
              },
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

interface SkiperUiMarqueeProps {
  showCard: number;
  reverse?: boolean;
  className?: string;
  icons: React.ComponentType<{ className?: string }>[];
  dimmed?: boolean;
  highlighted?: boolean;
}

function SkiperUiMarquee({
  showCard,
  reverse = false,
  className,
  icons,
  dimmed = false,
  highlighted = false,
}: SkiperUiMarqueeProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        height: showCard * 113,
      }}
    >
      <Marquee reverse={reverse} vertical={true}>
        {icons.map((Icon, idx) => (
          <Card key={idx} Icon={Icon} dimmed={dimmed} highlighted={highlighted} />
        ))}
      </Marquee>
      <div className="from-background absolute top-0 z-10 h-8 w-full bg-gradient-to-b to-transparent" />
      <div className="from-background absolute bottom-0 z-10 h-8 w-full bg-gradient-to-t to-transparent" />
    </div>
  );
}

function Card({
  Icon,
  dimmed = false,
  highlighted = false,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  dimmed?: boolean;
  highlighted?: boolean;
}) {
  return (
    <div
      className={cn(
        "border-muted relative flex size-24 items-center justify-center overflow-hidden rounded-3xl border p-4",
        "from-muted/50 to-background bg-gradient-to-b",
        "dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        dimmed && "opacity-30",
      )}
    >
      <Icon className={cn("size-8", highlighted && "text-foreground")} />
    </div>
  );
}

export const HowToHub: React.FC<HowToHubProps> = ({
  guidesByCategory,
  categories,
  totalGuides,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter categories based on search and selection
  const filteredCategories = categories.filter((category) => {
    const categoryGuides = guidesByCategory[category.id] || [];
    if (categoryGuides.length === 0) return false;

    if (selectedCategory && category.id !== selectedCategory) return false;

    if (searchQuery) {
      return categoryGuides.some((guide) =>
        guide.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return true;
  });

  const getFilteredGuides = (categoryId: string) => {
    const guides = guidesByCategory[categoryId] || [];
    if (!searchQuery) return guides;

    return guides.filter((guide) =>
      guide.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredGuidesCount = selectedCategory
    ? getFilteredGuides(selectedCategory).length
    : Object.values(guidesByCategory)
        .flat()
        .filter((guide) =>
          searchQuery
            ? guide.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              guide.description?.toLowerCase().includes(searchQuery.toLowerCase())
            : true
        ).length;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary" className="flex items-center gap-2">
            <BookOpen className="w-3 h-3" />
            {totalGuides} How-To Guides
          </Badge>

          <h1 className="relative z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"How-To Planning Guides".split(" ").map((word, i) => (
                <motion.span
                  className="relative inline-block px-[6px] leading-[none]"
                  key={i}
                  initial={{
                    opacity: 0,
                    y: "70%",
                    rotateX: "-28deg",
                  }}
                  animate={{
                    opacity: 1,
                    y: "0%",
                    rotateX: "0deg",
                  }}
                  transition={{
                    delay: i * 0.08 + 0.1,
                    duration: 0.8,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          <p className="text-muted-foreground max-w-2xl text-center text-lg mt-4">
            Step-by-step guidance for life's biggest decisions. Discover how to plan,
            prepare, and execute major life events with expert frameworks and actionable insights.
          </p>

          <Particles
            className="absolute inset-0 z-0"
            quantity={500}
            ease={80}
            refresh
          />

          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="relative z-20 mt-10 flex items-center justify-center gap-4"
          >
            <SkiperUiMarquee
              showCard={1}
              className=""
              reverse={true}
              icons={[Heart, Home, Users, Baby]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Briefcase, Rocket, Target, TrendingUp]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[Activity, Brain, Pill, Sparkles]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[BookOpen, BookOpen, BookOpen, BookOpen]}
              highlighted
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[Heart, Home, Briefcase, Activity]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Rocket, Brain, DollarSign, Users]}
              dimmed
            />
            <SkiperUiMarquee
              reverse={true}
              showCard={1}
              className=""
              icons={[Target, Pill, PiggyBank, Baby]}
              dimmed
            />
          </motion.div>

          <div className="h-92 bg-background absolute bottom-20 left-0 right-0 w-full blur-xl" />
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search how-to guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                All Categories
              </Button>
              {categories.slice(0, 6).map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredGuidesCount} of {totalGuides} how-to guides
          </div>
        </div>
      </section>

      {/* How-To Guides by Category */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col gap-12">
            {filteredCategories.map((category) => {
              const guides = getFilteredGuides(category.id);
              if (guides.length === 0) return null;

              return (
                <div key={category.id} className="flex flex-col gap-8">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-2xl font-semibold">
                        How to Plan {category.name}
                      </h2>
                      <Link
                        href={`/guides/categories/${category.id}`}
                        className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center gap-1"
                      >
                        View all <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {guides.map((guide) => (
                      <Link
                        key={guide.id}
                        href={`/guides/${guide.id}`}
                        className="border-border rounded-lg border p-6 hover:border-primary transition-colors group"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                            How to {guide.name}
                          </h3>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                          {guide.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          {guide.difficulty && (
                            <Badge variant="outline" className="text-xs">
                              {guide.difficulty}
                            </Badge>
                          )}
                          {guide.estimated_time && (
                            <span>{guide.estimated_time}</span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>

                  <Separator />
                </div>
              );
            })}

            {filteredCategories.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No how-to guides found matching your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
