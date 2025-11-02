"use client";

import { HeroAnimatedText } from "@/components/hero-animated-text";
import { AboutCompanyStory } from "@/components/about-company-story";
import { PageLayout } from "@/components/layout";

export default function BlocksDemoPage() {
	return (
		<PageLayout>
			<HeroAnimatedText />
			<AboutCompanyStory />

			{/* More blocks will be added here */}
		</PageLayout>
	);
}
