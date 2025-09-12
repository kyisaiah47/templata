"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
	Search,
	Grid3X3,
	List,
	Heart,
	Zap,
} from "lucide-react";
import { PageLayout } from "@/components/layout";
import { templates } from "@/data/templates";

// Generate categories dynamically from templates
const allCategories = templates.reduce((acc, template) => {
	if (!acc.find(cat => cat.id === template.category)) {
		acc.push({
			id: template.category,
			name: template.category === 'life-events' ? 'Life Events' : 
				  template.category.charAt(0).toUpperCase() + template.category.slice(1),
			count: templates.filter(t => t.category === template.category).length
		});
	}
	return acc;
}, [] as Array<{ id: string, name: string, count: number }>);

const categories = [
	{ id: "all", name: "All Templates", count: templates.length },
	...allCategories
];

// Transform template data for display
const displayTemplates = templates.map(template => ({
	id: template.id,
	title: template.title,
	description: template.description,
	category: template.category,
	icon: Heart, // Default icon for now, could be mapped later
	color: "bg-muted/50 border-border text-foreground",
	popular: template.id === "wedding-planning", // Mark wedding as popular
	features: [
		`${template.sections.length} Planning Sections`,
		`${template.sections.reduce((acc, s) => acc + s.reflectionPrompts.length, 0)} Reflection Prompts`,
		`${template.resources.length} Expert Resources`,
		"Guided Templates"
	],
	setupTime: "5 min",
}));

export default function TemplatesPage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

	const filteredTemplates = displayTemplates.filter((template) => {
		const matchesSearch =
			template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			template.description.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory =
			selectedCategory === "all" || template.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	return (
		<PageLayout>
			<div className="container mx-auto max-w-7xl px-4 py-8">
				{/* Page Header */}
				<div className="mb-8">
					<h1 className="text-3xl font-bold mb-2">Choose Your Template</h1>
					<p className="text-muted-foreground">
						Get started instantly with expertly designed templates for
						life&apos;s biggest moments.
					</p>
				</div>

				{/* Search and Filters */}
				<div className="flex flex-col lg:flex-row gap-4 mb-8">
					<div className="relative flex-1">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
						<Input
							placeholder="Search templates..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="pl-10"
						/>
					</div>

					<div className="flex items-center gap-2">
						<div className="flex items-center border rounded-md">
							{categories.map((category) => (
								<button
									key={category.id}
									onClick={() => setSelectedCategory(category.id)}
									className={`px-3 py-2 text-sm font-medium transition-colors ${
										selectedCategory === category.id
											? "bg-primary text-primary-foreground"
											: "hover:bg-muted"
									} ${category.id === categories[0].id ? "rounded-l-md" : ""} ${
										category.id === categories[categories.length - 1].id
											? "rounded-r-md"
											: ""
									}`}
								>
									{category.name}
									<span className="ml-1 text-xs opacity-70">
										({category.count})
									</span>
								</button>
							))}
						</div>

						<div className="flex items-center border rounded-md">
							<button
								onClick={() => setViewMode("grid")}
								className={`p-2 ${
									viewMode === "grid"
										? "bg-primary text-primary-foreground"
										: "hover:bg-muted"
								} rounded-l-md`}
							>
								<Grid3X3 className="h-4 w-4" />
							</button>
							<button
								onClick={() => setViewMode("list")}
								className={`p-2 ${
									viewMode === "list"
										? "bg-primary text-primary-foreground"
										: "hover:bg-muted"
								} rounded-r-md`}
							>
								<List className="h-4 w-4" />
							</button>
						</div>
					</div>
				</div>

				{/* Results count */}
				<div className="mb-6">
					<p className="text-sm text-muted-foreground">
						Showing {filteredTemplates.length} template
						{filteredTemplates.length !== 1 ? "s" : ""}
						{selectedCategory !== "all" &&
							` in ${categories.find((c) => c.id === selectedCategory)?.name}`}
					</p>
				</div>

				{/* Templates Grid/List */}
				<div
					className={
						viewMode === "grid"
							? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
							: "space-y-4"
					}
				>
					{filteredTemplates.map((template) => {
						const Icon = template.icon;

						if (viewMode === "list") {
							return (
								<Card
									key={template.id}
									className="group hover:shadow-md transition-all duration-200"
								>
									<Link href={`/${template.id}/app`}>
										<CardContent className="p-6">
											<div className="flex items-start gap-4">
												<div
													className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${template.color}`}
												>
													<Icon className="h-6 w-6" />
												</div>

												<div className="flex-1 min-w-0">
													<div className="flex items-center gap-2 mb-2">
														<h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
															{template.title}
														</h3>
														{template.popular && (
															<Badge
																variant="secondary"
																className="text-xs"
															>
																Popular
															</Badge>
														)}
													</div>

													<p className="text-muted-foreground mb-3 line-clamp-2">
														{template.description}
													</p>

													<div className="flex items-center justify-between">
														<div className="flex flex-wrap gap-2">
															{template.features.slice(0, 2).map((feature) => (
																<Badge
																	key={feature}
																	variant="outline"
																	className="text-xs"
																>
																	{feature}
																</Badge>
															))}
															{template.features.length > 2 && (
																<span className="text-xs text-muted-foreground">
																	+{template.features.length - 2} more
																</span>
															)}
														</div>

														<div className="flex items-center text-sm text-muted-foreground">
															<Zap className="mr-1 h-3 w-3" />
															{template.setupTime} setup
														</div>
													</div>
												</div>
											</div>
										</CardContent>
									</Link>
								</Card>
							);
						}

						return (
							<Card
								key={template.id}
								className="group hover:shadow-md transition-all duration-200"
							>
								<Link href={`/${template.id}/app`}>
									<CardHeader>
										<div className="flex items-center justify-between mb-2">
											<div
												className={`w-10 h-10 rounded-lg flex items-center justify-center ${template.color}`}
											>
												<Icon className="h-5 w-5" />
											</div>
											{template.popular && (
												<Badge
													variant="secondary"
													className="text-xs"
												>
													Popular
												</Badge>
											)}
										</div>
										<CardTitle className="group-hover:text-primary transition-colors">
											{template.title}
										</CardTitle>
										<CardDescription className="line-clamp-3">
											{template.description}
										</CardDescription>
									</CardHeader>

									<CardContent>
										<div className="space-y-3">
											<div className="flex flex-wrap gap-1">
												{template.features.slice(0, 2).map((feature) => (
													<Badge
														key={feature}
														variant="outline"
														className="text-xs"
													>
														{feature}
													</Badge>
												))}
												{template.features.length > 2 && (
													<span className="text-xs text-muted-foreground">
														+{template.features.length - 2} more
													</span>
												)}
											</div>

											<div className="flex items-center text-sm text-muted-foreground">
												<Zap className="mr-1 h-3 w-3" />
												{template.setupTime} setup time
											</div>
										</div>
									</CardContent>
								</Link>
							</Card>
						);
					})}
				</div>

				{/* Empty State */}
				{filteredTemplates.length === 0 && (
					<div className="text-center py-12">
						<div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
							<Search className="h-6 w-6 text-muted-foreground" />
						</div>
						<h3 className="text-lg font-semibold mb-2">No templates found</h3>
						<p className="text-muted-foreground mb-4">
							Try adjusting your search or browse different categories.
						</p>
						<Button
							variant="outline"
							onClick={() => {
								setSearchTerm("");
								setSelectedCategory("all");
							}}
						>
							Clear filters
						</Button>
					</div>
				)}
			</div>
		</PageLayout>
	);
}
