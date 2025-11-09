"use client";

import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { BookOpen, Search, Heart, Briefcase, Activity, DollarSign, Home, Users, Rocket, Brain, TrendingUp, Wallet, Baby, Target, Pill, PiggyBank, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";
import { Badge } from "@/components/ui/badge";

interface GlossaryTerm {
  term: string;
  definition: string;
  relatedTerms?: string[];
  category: string;
}

interface GlossaryContentProps {
  glossaryTerms: Record<string, Array<{ term: string; definition: string; relatedTerms?: string[] }>>;
  totalTerms: number;
}

export const GlossaryContent: React.FC<GlossaryContentProps> = ({ glossaryTerms, totalTerms }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Flatten terms for search
  const allTermsFlat = Object.entries(glossaryTerms).flatMap(([category, terms]) =>
    terms.map(term => ({ ...term, category }))
  );

  const filteredTerms = allTermsFlat.filter((term) =>
    term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    term.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group filtered terms by category
  const filteredByCategory = filteredTerms.reduce((acc: any, term) => {
    if (!acc[term.category]) {
      acc[term.category] = [];
    }
    acc[term.category].push(term);
    return acc;
  }, {});

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary" className="flex items-center gap-2">
            <BookOpen className="w-3 h-3" />
            {totalTerms} Planning Terms
          </Badge>

          <h1 className="relative z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"Planning Glossary".split(" ").map((word, i) => (
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
            Comprehensive definitions of planning terms, concepts, and methodologies used throughout Templata
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

      {/* Search */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="mt-4 text-sm text-muted-foreground text-center">
            Showing {filteredTerms.length} of {totalTerms} terms
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-16">
        <div className="container max-w-4xl">
          {Object.entries(filteredByCategory).map(([category, terms]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">{category}</h2>
              <Separator className="mb-6" />
              <div className="space-y-6">
                {(terms as GlossaryTerm[]).map((item) => (
                  <div key={item.term} className="border-l-2 border-primary pl-4">
                    <h3 className="text-lg font-semibold mb-2">{item.term}</h3>
                    <p className="text-muted-foreground mb-2">{item.definition}</p>
                    {item.relatedTerms && item.relatedTerms.length > 0 && (
                      <div className="text-sm">
                        <span className="font-medium">Related terms: </span>
                        <span className="text-muted-foreground">
                          {item.relatedTerms.join(', ')}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredTerms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No terms found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
