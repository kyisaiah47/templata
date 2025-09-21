"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	ArrowRight,
	Brain,
	Cog,
	Sparkles,
	Target,
	Zap,
	CheckCircle2,
	Layers,
	FileText,
	MessageSquare,
	Wand2,
	Lightbulb,
	Shield,
	RefreshCw,
} from "lucide-react";
import { PageLayout } from "@/components/layout";

export default function CodexEnginePage() {
	return (
		<PageLayout>

			{/* Hero Section */}
			<section className="py-24 md:py-32">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 max-w-4xl mx-auto">
						<Badge
							variant="outline"
							className="px-4 py-2"
						>
							<Brain className="mr-2 h-4 w-4" />
							Powering Templata
						</Badge>

						<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
							Meet the
							<br />
							<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
								Codex Engine
							</span>
						</h1>

						<p className="text-xl text-muted-foreground">
							Templata's specialized AI system, designed exclusively for life guidance.
							Every prompt, resource, and insight is generated through carefully crafted
							intelligence, refined specifically for helping you navigate life's biggest decisions.
						</p>
					</div>
				</div>
			</section>

			{/* What is the Codex Engine */}
			<section className="py-24 border-t">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="grid md:grid-cols-2 gap-16 items-center">
						<div className="space-y-6">
							<Badge
								variant="outline"
								className="w-fit"
							>
								<Cog className="mr-2 h-4 w-4" />
								What It Is
							</Badge>

							<h2 className="text-3xl md:text-4xl font-bold leading-tight">
								Purpose-built intelligence for life guidance
							</h2>

							<div className="space-y-4 text-muted-foreground">
								<p className="text-lg">
									The Codex Engine isn't generic AI - it's a specialized system
									designed exclusively for generating thoughtful, comprehensive
									guidance for life's biggest decisions.
								</p>
								<p className="text-lg">
									Every piece of content you see on Templata has been generated
									through carefully crafted prompts, multiple iterations, and
									human oversight to ensure quality and relevance.
								</p>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<Card className="p-6 border-2 border-primary/20 bg-primary/5">
								<div className="space-y-3">
									<Brain className="h-8 w-8 text-primary" />
									<div className="font-semibold text-primary">
										Specialized Training
									</div>
									<div className="text-sm text-muted-foreground">
										Optimized for life guidance, not general content
									</div>
								</div>
							</Card>

							<Card className="p-6 border-2 border-primary/20 bg-primary/5">
								<div className="space-y-3">
									<Wand2 className="h-8 w-8 text-primary" />
									<div className="font-semibold text-primary">
										Curated Prompts
									</div>
									<div className="text-sm text-muted-foreground">
										Every output refined through expert prompting
									</div>
								</div>
							</Card>

							<Card className="p-6 border-2 border-primary/20 bg-primary/5">
								<div className="space-y-3">
									<Target className="h-8 w-8 text-primary" />
									<div className="font-semibold text-primary">
										Decision-Focused
									</div>
									<div className="text-sm text-muted-foreground">
										Built for reflection and decision-making
									</div>
								</div>
							</Card>

							<Card className="p-6 border-2 border-primary/20 bg-primary/5">
								<div className="space-y-3">
									<Shield className="h-8 w-8 text-primary" />
									<div className="font-semibold text-primary">
										Human Oversight
									</div>
									<div className="text-sm text-muted-foreground">
										Reviewed and refined by domain experts
									</div>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section className="py-24 bg-muted/10">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 mb-16">
						<Badge
							variant="outline"
							className="px-4 py-2"
						>
							<Sparkles className="mr-2 h-4 w-4" />
							How It Works
						</Badge>

						<h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-3xl mx-auto">
							From prompt engineering to
							<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
								{" "}
								thoughtful guidance
							</span>
						</h2>

						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							The Codex Engine uses sophisticated prompt engineering and iterative
							refinement to generate comprehensive, thoughtful guidance for each life situation.
						</p>
					</div>

					<div className="grid md:grid-cols-4 gap-8">
						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
									1
								</div>
								<CardTitle className="text-xl">
									Specialized Prompting
								</CardTitle>
								<CardDescription className="text-base">
									Custom-crafted prompts designed specifically for life guidance
									scenarios, not generic content generation.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
									2
								</div>
								<CardTitle className="text-xl">Multiple Iterations</CardTitle>
								<CardDescription className="text-base">
									Each template goes through multiple refinement cycles to
									ensure comprehensive coverage and thoughtful insights.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
									3
								</div>
								<CardTitle className="text-xl">Quality Curation</CardTitle>
								<CardDescription className="text-base">
									Human oversight ensures every piece of content meets our
									standards for relevance and helpfulness.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
									4
								</div>
								<CardTitle className="text-xl">
									Thoughtful Output
								</CardTitle>
								<CardDescription className="text-base">
									48+ unique prompts and comprehensive resources that help you
									think through every aspect of your decision.
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</div>
			</section>

			{/* What Makes It Different */}
			<section className="py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 mb-16">
						<h2 className="text-3xl md:text-4xl font-bold">
							Why specialized AI matters
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							Generic AI gives generic answers. The Codex Engine is specifically
							designed for the unique challenges of life guidance.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
						<div className="space-y-6">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center">
									<MessageSquare className="h-6 w-6 text-red-600 dark:text-red-400" />
								</div>
								<div>
									<h3 className="text-xl font-semibold text-red-600 dark:text-red-400">
										Generic AI
									</h3>
									<p className="text-muted-foreground">
										Surface-level advice and generic templates
									</p>
								</div>
							</div>

							<div className="space-y-3 text-muted-foreground pl-16">
								<div className="flex items-center gap-2">
									<div className="w-2 h-2 bg-red-400 rounded-full"></div>
									<span>One-size-fits-all responses</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-2 h-2 bg-red-400 rounded-full"></div>
									<span>Lacks depth and nuance</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-2 h-2 bg-red-400 rounded-full"></div>
									<span>No consideration for complexity</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-2 h-2 bg-red-400 rounded-full"></div>
									<span>Missing real-world scenarios</span>
								</div>
							</div>
						</div>

						<div className="space-y-6">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
									<Brain className="h-6 w-6 text-primary" />
								</div>
								<div>
									<h3 className="text-xl font-semibold text-primary">
										Codex Engine
									</h3>
									<p className="text-muted-foreground">
										Deep, thoughtful guidance for complex decisions
									</p>
								</div>
							</div>

							<div className="space-y-3 text-muted-foreground pl-16">
								<div className="flex items-center gap-2">
									<CheckCircle2 className="w-4 h-4 text-primary"></CheckCircle2>
									<span>Considers multiple perspectives and edge cases</span>
								</div>
								<div className="flex items-center gap-2">
									<CheckCircle2 className="w-4 h-4 text-primary"></CheckCircle2>
									<span>48+ unique prompts per life situation</span>
								</div>
								<div className="flex items-center gap-2">
									<CheckCircle2 className="w-4 h-4 text-primary"></CheckCircle2>
									<span>Designed for reflection and deep thinking</span>
								</div>
								<div className="flex items-center gap-2">
									<CheckCircle2 className="w-4 h-4 text-primary"></CheckCircle2>
									<span>Comprehensive coverage of real scenarios</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Technical Excellence */}
			<section className="py-24 bg-muted/10">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 mb-16">
						<h2 className="text-3xl md:text-4xl font-bold">Built for excellence</h2>
						<p className="text-xl text-muted-foreground">
							The technical principles that make the Codex Engine effective
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<Target className="h-8 w-8 text-primary mx-auto mb-4" />
								<CardTitle className="text-lg">Domain-Specific</CardTitle>
								<CardDescription>
									Trained specifically for life guidance scenarios, not general content generation.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<Layers className="h-8 w-8 text-primary mx-auto mb-4" />
								<CardTitle className="text-lg">Multi-Layered</CardTitle>
								<CardDescription>
									Complex prompting strategies that consider context, nuance, and real-world complexity.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<RefreshCw className="h-8 w-8 text-primary mx-auto mb-4" />
								<CardTitle className="text-lg">Iteratively Refined</CardTitle>
								<CardDescription>
									Continuous improvement through feedback and refinement cycles.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<Lightbulb className="h-8 w-8 text-primary mx-auto mb-4" />
								<CardTitle className="text-lg">Context-Aware</CardTitle>
								<CardDescription>
									Understands the unique challenges and considerations of each life situation.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<Zap className="h-8 w-8 text-primary mx-auto mb-4" />
								<CardTitle className="text-lg">Comprehensive</CardTitle>
								<CardDescription>
									Generates complete ecosystems of prompts, resources, and guidance.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-none bg-background/50 text-center">
							<CardHeader>
								<Shield className="h-8 w-8 text-primary mx-auto mb-4" />
								<CardTitle className="text-lg">Quality Assured</CardTitle>
								<CardDescription>
									Human oversight ensures every output meets our standards for helpfulness.
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</div>
			</section>

			{/* Transparency */}
			<section className="py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<Card className="border-2 border-primary/20 bg-primary/5 p-8 text-center max-w-4xl mx-auto">
						<div className="space-y-6">
							<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
								<Shield className="h-8 w-8 text-primary" />
							</div>

							<h3 className="text-2xl font-bold">
								Transparency & Trust
							</h3>

							<div className="space-y-4 text-muted-foreground">
								<p className="text-lg">
									We believe in being transparent about our use of AI while emphasizing
									the specialized nature and quality of our approach.
								</p>
								<p className="text-lg">
									The Codex Engine represents thousands of hours of prompt engineering,
									testing, and refinement to create the most helpful life guidance system possible.
								</p>
							</div>
						</div>
					</Card>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 bg-muted/10">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-8 max-w-3xl mx-auto">
						<h2 className="text-3xl font-bold">
							Experience the Codex Engine in action
						</h2>
						<p className="text-xl text-muted-foreground">
							See how specialized AI can transform your approach to life's biggest decisions.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<Button
								size="lg"
								className="h-12 px-8 text-base"
								onClick={() => {
									const event = new KeyboardEvent('keydown', {
										key: 'k',
										metaKey: true,
										bubbles: true
									});
									document.dispatchEvent(event);
								}}
							>
								Try Templates
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="h-12 px-8 text-base"
								asChild
							>
								<Link href="/wedding-planning">See Example Template</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

		</PageLayout>
	);
}