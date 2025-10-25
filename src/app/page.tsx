"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	ArrowRight,
	FileText,
	BookOpen,
	Check,
} from "lucide-react";
import { PageLayout } from "@/components/layout";
import { HeroWorkspace } from "@/components/landing/HeroWorkspace";
import { BrowseGuides } from "@/components/landing/BrowseGuides";
import { SplitScreenOpen } from "@/components/landing/SplitScreenOpen";
import { WorkspaceActive } from "@/components/landing/WorkspaceActive";
import { ExportOverview } from "@/components/landing/ExportOverview";
import { CategorySelection } from "@/components/landing/CategorySelection";
import { StructuredGuide } from "@/components/landing/StructuredGuide";
import { PopularGuides } from "@/components/landing/PopularGuides";
import { CommunityHub } from "@/components/landing/CommunityHub";
import { ExpertProfile } from "@/components/landing/ExpertProfile";
import { SubmitGuide } from "@/components/landing/SubmitGuide";
import { CommunityActivity } from "@/components/landing/CommunityActivity";
import { motion } from "framer-motion";

export default function LandingPage() {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'Templata',
		description: 'Wikipedia × Notion for life planning. Expert-curated guides for life\'s biggest decisions.',
		url: 'https://templata.org',
		applicationCategory: 'ProductivityApplication',
		operatingSystem: 'Web',
		featureList: [
			'1,200+ Life Planning Guides',
			'Guided Questions',
			'Curated Reading',
			'Split-Screen Workspace',
		],
	};

	return (
		<PageLayout includeHeaderPadding={false}>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			{/* Hero Section - 3-line layout with CTA on right */}
			<section className="relative px-6 pt-32 pb-20 md:pt-40 md:pb-24">
				<div className="mx-auto max-w-7xl">
					<div className="flex items-end justify-between gap-12">
						<div className="max-w-3xl">
							<motion.h1
								className="text-6xl font-semibold tracking-tight md:text-8xl leading-[0.95]"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0 }}
							>
								Wikipedia
							</motion.h1>
							<motion.h2
								className="text-6xl font-semibold tracking-tight md:text-8xl leading-[0.95]"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								×
							</motion.h2>
							<motion.h3
								className="text-6xl font-semibold tracking-tight md:text-8xl leading-[0.95]"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								Notion
							</motion.h3>
						</div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<Button size="lg" asChild>
								<Link href="/docs">
									Learn More
									<ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Hero Screenshot - Wider layout */}
			<section className="px-6 pb-32">
				<div className="mx-auto max-w-[1400px]">
					<HeroWorkspace />
				</div>
			</section>

			{/* How It Works - 2x2 grid */}
			<section className="px-6 py-24 border-t border-border/40">
				<div className="mx-auto max-w-5xl">
					<div className="mb-12">
						<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
							How it works
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-12">
						<div className="space-y-2">
							<h3 className="text-lg font-semibold">Pick a guide</h3>
							<p className="text-sm text-muted-foreground">
								1,200+ guides for life decisions
							</p>
							<BrowseGuides />
						</div>

						<div className="space-y-2">
							<h3 className="text-lg font-semibold">Work through it</h3>
							<p className="text-sm text-muted-foreground">
								Answer questions, add notes
							</p>
							<SplitScreenOpen />
						</div>

						<div className="space-y-2">
							<h3 className="text-lg font-semibold">Read curated resources</h3>
							<p className="text-sm text-muted-foreground">
								Expert-selected readings
							</p>
							<WorkspaceActive />
						</div>

						<div className="space-y-2">
							<h3 className="text-lg font-semibold">Export when done</h3>
							<p className="text-sm text-muted-foreground">
								PDF export, auto-save
							</p>
							<ExportOverview />
						</div>
					</div>
				</div>
			</section>

			{/* Categories */}
			<section className="px-6 py-24 border-t border-border/40">
				<div className="mx-auto max-w-6xl">
					<div className="mb-12">
						<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
							Browse by category
						</h2>
					</div>
					<CategorySelection />
				</div>
			</section>

			{/* Featured Guides */}
			<section className="px-6 py-24 border-t border-border/40">
				<div className="mx-auto max-w-6xl">
					<div className="mb-12">
						<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
							Popular guides
						</h2>
					</div>
					<PopularGuides />
				</div>
			</section>

			{/* Simple footer */}
			<section className="px-6 py-16 border-t border-border/40">
				<div className="mx-auto max-w-6xl">
					<Link href="/guides" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
						Browse all guides →
					</Link>
				</div>
			</section>
		</PageLayout>
	);
}
