"use client";

import { PageLayout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Home, DollarSign, FileText, Search, Calendar, Key } from "lucide-react";
import Link from "next/link";
import { templateRegistry } from "@/registry/templates";

export default function HomeBuyingPage() {
  const homeBuyingTemplate = templateRegistry.find(t => t.id === "home-buying");

  return (
    <PageLayout>
      <div className="py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full">
                <Home className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Your Complete Home Buying Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Navigate the complex home buying process with confidence. From credit preparation to closing day, we&apos;ll guide you through every step of purchasing your dream home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" asChild>
                <Link href="/home-buying/app">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/blog/first-time-home-buyer-guide">
                  Read the Guide
                </Link>
              </Button>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <DollarSign className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <CardTitle>Financial Planning</CardTitle>
                <CardDescription>
                  Budget preparation, credit optimization, and mortgage pre-approval guidance
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Search className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <CardTitle>Smart House Hunting</CardTitle>
                <CardDescription>
                  Strategic search methods, property evaluation, and market analysis tools
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <CardTitle>Closing Success</CardTitle>
                <CardDescription>
                  Contract navigation, inspection checklists, and closing day preparation
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Process Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Your Home Buying Journey</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Financial Prep",
                  description: "Credit scores, budgeting, and mortgage pre-approval",
                  icon: DollarSign
                },
                {
                  step: "2", 
                  title: "House Hunting",
                  description: "Location research, property viewings, and market analysis",
                  icon: Search
                },
                {
                  step: "3",
                  title: "Making Offers",
                  description: "Competitive offers, negotiations, and contract terms",
                  icon: FileText
                },
                {
                  step: "4",
                  title: "Closing Process",
                  description: "Inspections, appraisals, and final walkthrough",
                  icon: Key
                }
              ].map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <Card key={index} className="relative">
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-2">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                      <Badge variant="secondary" className="w-fit mx-auto mb-2">
                        Step {phase.step}
                      </Badge>
                      <CardTitle className="text-lg">{phase.title}</CardTitle>
                      <CardDescription>{phase.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Everything You Need to Buy with Confidence</h2>
              <div className="space-y-4">
                {[
                  "Credit improvement strategies and timeline",
                  "Budget calculators and expense planning",
                  "Mortgage comparison and pre-approval checklists",
                  "House hunting strategy and evaluation tools",
                  "Offer negotiation templates and tactics", 
                  "Inspection checklists and red flag guides",
                  "Closing timeline and document preparation",
                  "Post-purchase tasks and maintenance planning"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50">
              <CardHeader>
                <CardTitle>Why This Matters</CardTitle>
                <CardDescription>
                  Home buying is likely the largest financial decision you&apos;ll ever make. Poor preparation can cost you:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Higher interest rates (poor credit)</span>
                  <Badge variant="destructive">$50,000+</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Inspection surprises</span>
                  <Badge variant="destructive">$15,000+</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Bad neighborhood choice</span>
                  <Badge variant="destructive">$100,000+</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Overpaying in hot market</span>
                  <Badge variant="destructive">$25,000+</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="text-center bg-primary/5 border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                Join thousands of successful home buyers who used our comprehensive guidance system to navigate the complex process with confidence and save money.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/home-buying/app">
                    Start Your Home Buying Journey
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/blog">
                    Read Expert Guides
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}