"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Heart, Share, Bookmark } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { PageLayout } from "@/components/layout";

// Mock blog post data - this would come from CMS/API
const blogPost = {
  id: "top-10-wedding-mistakes",
  title: "Top 10 Wedding Planning Mistakes That Could Ruin Your Big Day",
  excerpt: "Avoid these common wedding planning pitfalls with expert insights on budgeting, vendor selection, and timeline management for a stress-free celebration.",
  content: `
Planning a wedding should be one of the most exciting times in your life, but it's easy to get overwhelmed and make costly mistakes. After helping thousands of couples plan their perfect day, we've identified the most common pitfalls that can turn your dream wedding into a nightmare.

Here are the top 10 wedding planning mistakes to avoid, plus practical solutions to keep your big day on track.

## 1. Not Setting (or Sticking to) Your Budget

**The Mistake:** Many couples either skip creating a detailed budget or abandon it midway through planning when they fall in love with expensive options.

**The Impact:** Wedding costs can spiral out of control, leading to debt, stress, and difficult family conversations.

**The Solution:** Create a realistic budget before you start planning and track every expense. Use our wedding budget tracker to monitor spending across all categories. Build in a 10-15% buffer for unexpected costs.

**Pro Tip:** Prioritize your "must-haves" and be willing to compromise on less important elements.

## 2. Booking Your Venue Too Late

**The Mistake:** Waiting to book your venue while you "shop around" or hope for better deals.

**The Impact:** Your preferred venues may be unavailable, forcing you to settle for second choices or pay premium rates.

**The Solution:** Book your venue 12-18 months ahead for peak season dates. Popular venues fill up quickly, especially for Saturday weddings.

**Pro Tip:** Consider Friday or Sunday weddings for better availability and pricing.

## 3. Underestimating Your Guest Count

**The Mistake:** Creating an unrealistic guest list that keeps growing, or failing to account for plus-ones and children.

**The Impact:** Unexpected costs for catering, seating, and favors. Venue capacity issues.

**The Solution:** Create your guest list early and be realistic about who you truly want to celebrate with. Account for a 15-20% decline rate when finalizing numbers.

## 4. Skipping Wedding Insurance

**The Mistake:** Assuming nothing will go wrong and skipping wedding insurance to save money.

**The Impact:** No protection against vendor bankruptcy, extreme weather, illness, or other unforeseen circumstances.

**The Solution:** Purchase wedding insurance that covers vendor issues, postponement, and liability. It typically costs $100-300 and can save thousands.

## 5. Not Reading Vendor Contracts Carefully

**The Mistake:** Signing contracts without understanding cancellation policies, payment schedules, or what's included.

**The Impact:** Hidden fees, poor service, or being stuck with underperforming vendors.

**The Solution:** Read every contract thoroughly. Understand payment schedules, cancellation policies, and exactly what services are included.

**Pro Tip:** Don't be afraid to negotiate terms or ask for clarifications in writing.

## 6. Leaving Everything Until the Last Minute

**The Mistake:** Procrastinating on key decisions and tasks, thinking you have more time than you do.

**The Impact:** Limited vendor availability, rushed decisions, increased stress, and higher costs.

**The Solution:** Create a detailed timeline and stick to it. Book major vendors 6-12 months ahead. Use our wedding planning timeline to stay on track.

## 7. Not Having a Day-of Coordinator

**The Mistake:** Assuming you or family members can manage wedding day logistics while enjoying the celebration.

**The Impact:** Stress, forgotten details, timeline issues, and family members working instead of celebrating.

**The Solution:** Hire a day-of coordinator or designate a non-family friend to handle logistics. This person should have a detailed timeline and vendor contact list.

## 8. Ignoring the Weather

**The Mistake:** Not having backup plans for outdoor ceremonies or seasonal weather issues.

**The Impact:** Ruined ceremonies, uncomfortable guests, and scrambling for last-minute solutions.

**The Solution:** Always have a weather backup plan. Consider seasonal factors when choosing your date. Rent heaters, fans, or tents as needed.

## 9. Forgetting About Photography Timeline

**The Mistake:** Not planning enough time for photos or scheduling them during harsh lighting.

**The Impact:** Rushed photos, missed shots, or unflattering lighting in your forever memories.

**The Solution:** Work with your photographer to create a detailed timeline. Consider a "first look" to maximize photo time. Schedule key photos during golden hour when possible.

## 10. Trying to Please Everyone

**The Mistake:** Making decisions based on what others want instead of what you and your partner actually prefer.

**The Impact:** A wedding that doesn't reflect your personality, inflated costs, and unnecessary stress.

**The Solution:** Remember this is YOUR day. Listen to input gracefully but make decisions that feel authentic to your relationship.

## Your Wedding Planning Roadmap

Avoiding these mistakes starts with having the right tools and timeline. Our comprehensive wedding planning template helps you:

- Track your budget across all categories
- Manage vendor contracts and payments
- Stay on top of your timeline
- Coordinate with all your vendors
- Plan for contingencies

Don't let these common mistakes derail your perfect day. With proper planning and the right resources, you can have the wedding of your dreams without the stress and budget overruns.

Ready to start planning? Download our free wedding planning guide and take the first step toward your stress-free celebration.
  `,
  author: "Sarah Johnson",
  publishedAt: "2024-03-15",
  readTime: "8 min read",
  category: "Wedding Planning",
  featured: true,
  tags: ["wedding planning", "wedding mistakes", "wedding budget", "wedding tips"]
};

const relatedPosts = [
  {
    id: "wedding-planning-timeline",
    title: "The Complete Wedding Planning Timeline: 12 Months to Your Perfect Day",
    category: "Wedding Planning",
    readTime: "10 min read"
  },
  {
    id: "wedding-budget-guide",
    title: "Wedding Budget Breakdown: How to Allocate Your Funds",
    category: "Wedding Planning", 
    readTime: "6 min read"
  },
  {
    id: "vendor-selection-guide",
    title: "How to Choose Wedding Vendors That Won't Let You Down",
    category: "Wedding Planning",
    readTime: "7 min read"
  }
];

export default function BlogPostPage() {
  return (
    <PageLayout>
      <article className="py-24 md:py-32">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <header className="mb-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge variant="secondary">
                <Heart className="w-3 h-3 mr-1" />
                {blogPost.category}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {blogPost.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {blogPost.excerpt}
            </p>
            
            {/* Article Meta */}
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {blogPost.author}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(blogPost.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long', 
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {blogPost.readTime}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-3">
              <Button variant="outline" size="sm">
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </header>

          <Separator className="mb-12" />

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-muted-foreground leading-relaxed space-y-6">
              {blogPost.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('##')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-foreground mt-12 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('**The Mistake:**')) {
                  return (
                    <div key={index} className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-4 my-6">
                      <p className="text-foreground">
                        <strong className="text-red-600 dark:text-red-400">The Mistake:</strong> {paragraph.replace('**The Mistake:**', '').trim()}
                      </p>
                    </div>
                  );
                }
                if (paragraph.startsWith('**The Impact:**')) {
                  return (
                    <div key={index} className="bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500 p-4 my-4">
                      <p className="text-foreground">
                        <strong className="text-orange-600 dark:text-orange-400">The Impact:</strong> {paragraph.replace('**The Impact:**', '').trim()}
                      </p>
                    </div>
                  );
                }
                if (paragraph.startsWith('**The Solution:**')) {
                  return (
                    <div key={index} className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-4 my-4">
                      <p className="text-foreground">
                        <strong className="text-green-600 dark:text-green-400">The Solution:</strong> {paragraph.replace('**The Solution:**', '').trim()}
                      </p>
                    </div>
                  );
                }
                if (paragraph.startsWith('**Pro Tip:**')) {
                  return (
                    <div key={index} className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4 my-4">
                      <p className="text-foreground">
                        <strong className="text-blue-600 dark:text-blue-400">Pro Tip:</strong> {paragraph.replace('**Pro Tip:**', '').trim()}
                      </p>
                    </div>
                  );
                }
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-base leading-7">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>

          <Separator className="my-12" />

          {/* Tags */}
          <div className="mb-12">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="mb-12 bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Plan Your Perfect Wedding?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Get our comprehensive wedding planning template with budget trackers, 
                vendor checklists, and timeline guides to avoid these common mistakes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild>
                  <Link href="/templates/wedding-planning">
                    Get Wedding Template
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/templates">
                    Browse All Templates
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          <section>
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit text-xs mb-2">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-lg">
                      <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1 text-xs">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </article>
    </PageLayout>
  );
}