"use client";

import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Map, Heart, Briefcase, Activity, DollarSign, Home, Users, Rocket, Brain, TrendingUp, Wallet, Baby, Target, Pill, PiggyBank, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";

interface Guide {
  id: string;
  name: string;
  category: string;
}

interface Category {
  id: string;
  name: string;
}

interface Reading {
  id: string;
  title: string;
  guide: string;
}

interface SitemapContentProps {
  guides: Guide[];
  categories: Category[];
  readings: Reading[];
  guidesByCategory: Record<string, Guide[]>;
}

const mainPages = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Planning Guides" },
  { href: "/library", label: "Expert Reading Library" },
  { href: "/questions", label: "Planning Questions Database" },
  { href: "/glossary", label: "Planning Glossary" },
  { href: "/tags", label: "Browse by Tag" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About Templata" },
  { href: "/changelog", label: "Changelog" },
];

export const SitemapContent: React.FC<SitemapContentProps> = ({
  guides,
  categories,
  readings,
  guidesByCategory,
}) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-32">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Map className="w-3 h-3" />
            Complete Directory
          </Badge>

          <h1 className="relative z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"Sitemap".split(" ").map((word, i) => (
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
            Complete directory of all planning resources on Templata - guides, categories, readings, and tools
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
              icons={[Map, Map, Map, Map]}
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

      {/* Content Sections */}
      <section className="py-16">
        <div className="container max-w-4xl">
          {/* Main Pages */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Main Pages</h2>
            <Separator className="mb-4" />
            <ul className="space-y-2">
              {mainPages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="text-primary hover:underline">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Categories ({categories.length})
            </h2>
            <Separator className="mb-4" />
            <div className="grid gap-6 sm:grid-cols-2">
              {categories.map((category) => {
                const categoryGuides = guidesByCategory[category.id] || [];
                return (
                  <div key={category.id}>
                    <Link
                      href={`/guides/categories/${category.id}`}
                      className="text-lg font-semibold text-primary hover:underline"
                    >
                      {category.name}
                    </Link>
                    <p className="text-sm text-muted-foreground mb-2">
                      {categoryGuides.length} guides
                    </p>
                    {categoryGuides.length > 0 && (
                      <ul className="ml-4 space-y-1">
                        {categoryGuides.map((guide) => (
                          <li key={guide.id}>
                            <Link
                              href={`/guides/${guide.id}`}
                              className="text-sm text-primary hover:underline"
                            >
                              {guide.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* All Guides */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              All Guides ({guides.length})
            </h2>
            <Separator className="mb-4" />
            <ul className="grid gap-2 sm:grid-cols-2">
              {guides.map((guide) => (
                <li key={guide.id}>
                  <Link
                    href={`/guides/${guide.id}`}
                    className="text-primary hover:underline"
                  >
                    {guide.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sample Readings */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Expert Readings (Showing 100)
            </h2>
            <Separator className="mb-4" />
            <ul className="grid gap-2 sm:grid-cols-2">
              {readings.map((reading) => (
                <li key={reading.id}>
                  <Link
                    href={`/library/${reading.id}`}
                    className="text-primary hover:underline text-sm"
                  >
                    {reading.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
