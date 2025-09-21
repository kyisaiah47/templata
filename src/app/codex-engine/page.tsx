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
	Cpu,
	Network,
	GitBranch,
} from "lucide-react";
import { PageLayout } from "@/components/layout";
import { useState, useEffect } from "react";

export default function CodexEnginePage() {
	const [isVisible, setIsVisible] = useState(false);
	const [activeFeature, setActiveFeature] = useState(0);

	useEffect(() => {
		setIsVisible(true);
		const interval = setInterval(() => {
			setActiveFeature((prev) => (prev + 1) % 4);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<PageLayout>

			{/* Hero Section */}
			<section className="relative py-24 md:py-32 overflow-hidden">
				{/* Animated Background Elements */}
				<div className="absolute inset-0 -z-10">
					<div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
					<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
				</div>

				<div className="container mx-auto max-w-7xl px-4">
					<div className={`text-center space-y-8 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
						<Badge
							variant="outline"
							className="px-6 py-3 text-sm font-medium border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
						>
							<Brain className="mr-2 h-4 w-4 animate-pulse" />
							Powering Templata
						</Badge>

						<div className="space-y-4">
							<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
								Meet the
								<br />
								<span className="relative inline-block">
									<span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x bg-300% bg-left">
										Codex Engine
									</span>
									<div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-blue-500/50 to-purple-500/50 rounded-full animate-pulse"></div>
								</span>
							</h1>
						</div>

						<p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
							Templata's specialized AI system, designed exclusively for life guidance.
							Every prompt, resource, and insight is generated through carefully crafted
							intelligence, refined specifically for helping you navigate life's biggest decisions.
						</p>

						{/* Floating Elements */}
						<div className="relative pt-8">
							<div className="flex justify-center items-center space-x-8 opacity-60">
								<div className="animate-bounce delay-100">
									<Cpu className="h-6 w-6 text-primary/60" />
								</div>
								<div className="animate-bounce delay-300">
									<Network className="h-6 w-6 text-blue-500/60" />
								</div>
								<div className="animate-bounce delay-500">
									<GitBranch className="h-6 w-6 text-purple-500/60" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<style jsx>{`
					@keyframes gradient-x {
						0%, 100% { background-position: 0% 50%; }
						50% { background-position: 100% 50%; }
					}
					.animate-gradient-x {
						animation: gradient-x 3s ease infinite;
					}
					.bg-300% {
						background-size: 300% 300%;
					}
				`}</style>
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

						<div className="grid grid-cols-2 gap-6">
							{[
								{
									icon: Brain,
									title: "Specialized Training",
									description: "Optimized for life guidance, not general content",
									gradient: "from-blue-500 to-purple-600"
								},
								{
									icon: Wand2,
									title: "Curated Prompts",
									description: "Every output refined through expert prompting",
									gradient: "from-purple-500 to-pink-600"
								},
								{
									icon: Target,
									title: "Decision-Focused",
									description: "Built for reflection and decision-making",
									gradient: "from-green-500 to-teal-600"
								},
								{
									icon: Shield,
									title: "Human Oversight",
									description: "Reviewed and refined by domain experts",
									gradient: "from-orange-500 to-red-600"
								}
							].map((feature, index) => {
								const Icon = feature.icon;
								return (
									<Card
										key={index}
										className={`group relative p-6 border-0 bg-gradient-to-br from-background to-muted/20 hover:from-background hover:to-muted/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 overflow-hidden ${activeFeature === index ? 'ring-2 ring-primary/30' : ''}`}
									>
										{/* Background Glow Effect */}
										<div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

										{/* Content */}
										<div className="relative space-y-4">
											<div className="relative">
												<div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
													<div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
														<Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
													</div>
												</div>
											</div>
											<div className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
												{feature.title}
											</div>
											<div className="text-sm text-muted-foreground leading-relaxed">
												{feature.description}
											</div>
										</div>
									</Card>
								);
							})}
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

					<div className="relative">
						{/* Connection Lines */}
						<div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

						<div className="grid md:grid-cols-4 gap-8 relative">
							{[
								{
									step: "1",
									title: "Specialized Prompting",
									description: "Custom-crafted prompts designed specifically for life guidance scenarios, not generic content generation.",
									icon: Cog,
									delay: "delay-100"
								},
								{
									step: "2",
									title: "Multiple Iterations",
									description: "Each template goes through multiple refinement cycles to ensure comprehensive coverage and thoughtful insights.",
									icon: RefreshCw,
									delay: "delay-200"
								},
								{
									step: "3",
									title: "Quality Curation",
									description: "Human oversight ensures every piece of content meets our standards for relevance and helpfulness.",
									icon: Shield,
									delay: "delay-300"
								},
								{
									step: "4",
									title: "Thoughtful Output",
									description: "48+ unique prompts and comprehensive resources that help you think through every aspect of your decision.",
									icon: Sparkles,
									delay: "delay-400"
								}
							].map((step, index) => {
								const Icon = step.icon;
								return (
									<div key={index} className={`group text-center animate-in fade-in slide-in-from-bottom-8 ${step.delay}`}>
										{/* Step Indicator */}
										<div className="relative mb-8">
											<div className="w-20 h-20 mx-auto relative">
												{/* Outer Ring */}
												<div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 animate-spin-slow"></div>
												{/* Inner Circle */}
												<div className="absolute inset-2 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center group-hover:border-primary transition-all duration-300">
													<span className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
														{step.step}
													</span>
												</div>
												{/* Icon Overlay */}
												<div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
													<Icon className="h-4 w-4 text-primary-foreground" />
												</div>
											</div>
										</div>

										{/* Content */}
										<div className="space-y-4">
											<h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
												{step.title}
											</h3>
											<p className="text-muted-foreground leading-relaxed">
												{step.description}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					<style jsx>{`
						@keyframes spin-slow {
							from { transform: rotate(0deg); }
							to { transform: rotate(360deg); }
						}
						.animate-spin-slow {
							animation: spin-slow 8s linear infinite;
						}
					`}</style>
				</div>
			</section>

			{/* What Makes It Different */}
			<section className="py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-6 mb-12">
						<h2 className="text-3xl md:text-4xl font-bold">
							Why specialized AI matters
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							Generic AI gives generic answers. The Codex Engine is specifically
							designed for the unique challenges of life guidance.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
						{/* Generic AI Side */}
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
									<MessageSquare className="h-5 w-5 text-red-600 dark:text-red-400" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-red-600 dark:text-red-400">
										Generic AI
									</h3>
									<p className="text-sm text-muted-foreground">
										Surface-level advice and generic templates
									</p>
								</div>
							</div>

							<div className="space-y-2 pl-13">
								{[
									"One-size-fits-all responses",
									"Lacks depth and nuance",
									"No consideration for complexity",
									"Missing real-world scenarios"
								].map((item, index) => (
									<div key={index} className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
										<span className="text-sm text-muted-foreground">{item}</span>
									</div>
								))}
							</div>
						</div>

						{/* Codex Engine Side */}
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
									<Brain className="h-5 w-5 text-primary" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-primary">
										Codex Engine
									</h3>
									<p className="text-sm text-muted-foreground">
										Deep, thoughtful guidance for complex decisions
									</p>
								</div>
							</div>

							<div className="space-y-2 pl-13">
								{[
									"Considers multiple perspectives and edge cases",
									"48+ unique prompts per life situation",
									"Designed for reflection and deep thinking",
									"Comprehensive coverage of real scenarios"
								].map((item, index) => (
									<div key={index} className="flex items-center gap-2">
										<CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
										<span className="text-sm text-muted-foreground">{item}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Technical Excellence */}
			<section className="py-24 bg-muted/10">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center space-y-6 mb-12">
						<h2 className="text-3xl md:text-4xl font-bold">Built for excellence</h2>
						<p className="text-xl text-muted-foreground">
							The technical principles that make the Codex Engine effective
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
						{[
							{
								icon: Target,
								title: "Domain-Specific",
								description: "Trained specifically for life guidance scenarios, not general content generation."
							},
							{
								icon: Layers,
								title: "Multi-Layered",
								description: "Complex prompting strategies that consider context, nuance, and real-world complexity."
							},
							{
								icon: RefreshCw,
								title: "Iteratively Refined",
								description: "Continuous improvement through feedback and refinement cycles."
							},
							{
								icon: Lightbulb,
								title: "Context-Aware",
								description: "Understands the unique challenges and considerations of each life situation."
							},
							{
								icon: Zap,
								title: "Comprehensive",
								description: "Generates complete ecosystems of prompts, resources, and guidance."
							},
							{
								icon: Shield,
								title: "Quality Assured",
								description: "Human oversight ensures every output meets our standards for helpfulness."
							}
						].map((principle, index) => {
							const Icon = principle.icon;
							return (
								<div key={index} className="flex items-start gap-3 p-4 rounded-lg border bg-background/50 hover:bg-background transition-colors duration-200">
									<div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
										<Icon className="h-4 w-4 text-primary" />
									</div>
									<div className="space-y-1">
										<h3 className="text-sm font-semibold">{principle.title}</h3>
										<p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Transparency */}
			<section className="py-24">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="max-w-4xl mx-auto">
						<div className="flex items-start gap-4 p-6 rounded-lg border-2 border-primary/20 bg-primary/5">
							<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
								<Shield className="h-5 w-5 text-primary" />
							</div>
							<div className="space-y-4">
								<h3 className="text-xl font-bold">
									Transparency & Trust
								</h3>
								<div className="space-y-3 text-muted-foreground">
									<p>
										We believe in being transparent about our use of AI while emphasizing
										the specialized nature and quality of our approach.
									</p>
									<p>
										The Codex Engine represents thousands of hours of prompt engineering,
										testing, and refinement to create the most helpful life guidance system possible.
									</p>
								</div>
								<div className="flex items-center gap-6 pt-2">
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
										<span>AI-Powered</span>
									</div>
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
										<span>Human-Curated</span>
									</div>
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
										<span>Specialized</span>
									</div>
								</div>
							</div>
						</div>
					</div>
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

						{/* Bottom Indicators */}
						<div className="pt-6">
							<div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
								<div className="flex items-center gap-2">
									<CheckCircle2 className="w-4 h-4 text-primary" />
									<span>Free to start</span>
								</div>
								<div className="flex items-center gap-2">
									<CheckCircle2 className="w-4 h-4 text-primary" />
									<span>48+ prompts per template</span>
								</div>
								<div className="flex items-center gap-2">
									<CheckCircle2 className="w-4 h-4 text-primary" />
									<span>AI-powered guidance</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</PageLayout>
	);
}