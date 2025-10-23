"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout";
import {
	MessageSquare,
	TrendingUp,
	Clock,
	User,
} from "lucide-react";

export default function CommunityPage() {
	// Mock discussions data
	const discussions = [
		{
			id: 1,
			title: "Career Transition: Finance → Tech",
			guide: "Career Change Guide",
			author: "Sarah M.",
			comments: 23,
			upvotes: 45,
			lastActivity: "2h ago",
			preview: "Used this guide for my transition last year. The networking section was invaluable, but I'd add more about salary negotiations..."
		},
		{
			id: 2,
			title: "Wedding planning timeline - what I'd change",
			guide: "Wedding Planning",
			author: "Mike K.",
			comments: 18,
			upvotes: 32,
			lastActivity: "5h ago",
			preview: "Just finished planning our wedding. The 12-month timeline is great, but start vendor negotiations even earlier if you're in a major city..."
		},
		{
			id: 3,
			title: "Managing chronic illness with a full-time job",
			guide: "Chronic Illness Management",
			author: "Jamie L.",
			comments: 31,
			upvotes: 67,
			lastActivity: "1d ago",
			preview: "As someone with lupus, the medical decision prompts were life-changing. I'd add: track your symptoms in a spreadsheet for doctor visits..."
		},
		{
			id: 4,
			title: "First-time home buying in 2024",
			guide: "Home Buying Guide",
			author: "Alex P.",
			comments: 12,
			upvotes: 28,
			lastActivity: "1d ago",
			preview: "The inspection checklist saved us from a disaster. One thing missing: how to evaluate schools if you don't have kids yet..."
		},
		{
			id: 5,
			title: "Side business while working full-time",
			guide: "Starting a Business",
			author: "Taylor R.",
			comments: 45,
			upvotes: 89,
			lastActivity: "2d ago",
			preview: "Built my consulting practice using this framework. The time management section is gold. Added my own twist: automate everything from day 1..."
		},
	];

	return (
		<PageLayout>
			<div className="max-w-7xl mx-auto px-6 py-8">
				<div className="flex gap-8">
					{/* Main content - Discussions */}
					<div className="flex-1 min-w-0">
						{/* Header */}
						<div className="mb-6">
							<h1 className="text-2xl font-semibold tracking-tight mb-2">
								Community Discussions
							</h1>
							<p className="text-sm text-muted-foreground">
								Real experiences from people using the guides
							</p>
						</div>

						{/* Discussions list */}
						<div className="space-y-2">
							{discussions.map((discussion) => (
								<Link
									key={discussion.id}
									href={`/community/discussions/${discussion.id}`}
									className="block group"
								>
									<div className="border-b border-border py-3 hover:bg-muted/30 -mx-4 px-4 transition-colors">
										<div className="flex items-start gap-3">
											{/* Upvote column */}
											<div className="flex flex-col items-center gap-0.5 min-w-[40px] pt-1">
												<button className="p-0.5 hover:bg-muted rounded" onClick={(e) => e.preventDefault()}>
													<TrendingUp className="h-4 w-4 text-muted-foreground" />
												</button>
												<span className="text-xs font-medium text-muted-foreground">{discussion.upvotes}</span>
											</div>

											{/* Content */}
											<div className="flex-1 min-w-0">
												<h3 className="text-sm font-semibold mb-1 group-hover:text-primary transition-colors">
													{discussion.title}
												</h3>
												<p className="text-xs text-muted-foreground mb-2 line-clamp-1">
													{discussion.preview}
												</p>
												<div className="flex items-center gap-3 text-xs text-muted-foreground">
													<span className="flex items-center gap-1">
														<User className="h-3 w-3" />
														{discussion.author}
													</span>
													<span className="flex items-center gap-1">
														<MessageSquare className="h-3 w-3" />
														{discussion.comments}
													</span>
													<span className="flex items-center gap-1">
														<Clock className="h-3 w-3" />
														{discussion.lastActivity}
													</span>
													<span className="text-primary font-medium">
														{discussion.guide}
													</span>
												</div>
											</div>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>

					{/* Sidebar */}
					<div className="w-80 flex-shrink-0 space-y-6">
						{/* CTA */}
						<div className="border border-border rounded-lg p-4 bg-muted/20">
							<h3 className="font-semibold mb-3">Start a Discussion</h3>
							<p className="text-sm text-muted-foreground mb-4">
								Share your experience or ask the community
							</p>
							<Button className="w-full" size="sm">
								<MessageSquare className="mr-2 h-3 w-3" />
								New Discussion
							</Button>
						</div>

						{/* Quick Links */}
						<div className="border border-border rounded-lg p-4">
							<h3 className="font-semibold mb-3 text-sm">Community</h3>
							<div className="space-y-2">
								<Link href="/community/requests" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
									→ Request a Guide
								</Link>
								<Link href="/community/feedback" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
									→ Give Feedback
								</Link>
								<Link href="/community/experts" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
									→ Expert Contributors
								</Link>
							</div>
						</div>

						{/* Guidelines */}
						<div className="border border-border rounded-lg p-4 bg-muted/20">
							<h3 className="font-semibold mb-3 text-sm">Guidelines</h3>
							<ul className="space-y-2 text-xs text-muted-foreground">
								<li>• Be kind and constructive</li>
								<li>• Share specific experiences</li>
								<li>• No medical/legal advice</li>
								<li>• Respect privacy</li>
							</ul>
						</div>

						{/* About */}
						<div className="border border-border rounded-lg p-4">
							<h3 className="font-semibold mb-2 text-sm">About Community</h3>
							<p className="text-xs text-muted-foreground leading-relaxed">
								Share what worked, learn from others, and help improve guides for everyone.
							</p>
						</div>
					</div>
				</div>
			</div>
		</PageLayout>
	);
}
