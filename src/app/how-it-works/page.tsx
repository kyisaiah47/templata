import { PageLayout } from '@/components/layout';
import { Metadata } from 'next';
import { FileText, Lightbulb, BarChart3, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works | Templata',
  description: 'Learn how to use Templata to organize your thoughts and navigate life transitions with guided prompts and curated articles.',
  openGraph: {
    title: 'How It Works | Templata',
    description: 'Learn how to use Templata to organize your thoughts during major life transitions.',
    url: 'https://templata.com/how-it-works',
    siteName: 'Templata',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://templata.com/how-it-works',
  },
};

export default function HowItWorksPage() {
  return (
    <PageLayout>
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">How It Works</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Templata helps you organize your thoughts during major life transitions.
            Here's how to use it.
          </p>

          {/* Step 1 */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                1
              </div>
              <h2 className="text-2xl font-semibold mb-0">Pick a Template</h2>
            </div>
            <p className="mb-4 text-lg">
              Choose a template that matches your current situation. We have 1,298 templates covering everything from buying your first home to planning a wedding to starting a business.
            </p>
            <p className="mb-4">
              <strong>Don't worry about choosing the "right" one.</strong> Just pick whatever feels closest to what you're going through. You can always switch to a different template later.
            </p>
            <p className="text-muted-foreground italic">
              Try starting with one of our featured templates in the General, Gen Z, or Health & Wellness sections if you're not sure where to begin.
            </p>
          </section>

          {/* Step 2 */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                2
              </div>
              <h2 className="text-2xl font-semibold mb-0">Answer Prompts</h2>
            </div>
            <p className="mb-4 text-lg">
              Each template has thoughtful prompts designed to help you think through different aspects of your situation.
            </p>

            <div className="bg-muted/30 border-l-4 border-primary p-4 my-6">
              <h3 className="text-lg font-semibold mb-2">What are prompts for?</h3>
              <p className="mb-2">
                Prompts are questions to help you reflect and organize your thoughts. They're <strong>not graded or judged</strong> - they're just for you.
              </p>
              <p className="mb-0">
                Think of them like a conversation with yourself about what matters most.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-3">How to use prompts:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Go at your own pace.</strong> Answer one prompt or answer twenty. There's no rush.</li>
              <li><strong>Your answers are automatically saved.</strong> You can come back anytime and keep writing.</li>
              <li><strong>You don't have to answer everything.</strong> Skip prompts that don't feel relevant to you.</li>
              <li><strong>Write as much or as little as you want.</strong> A few sentences or a few paragraphs - whatever helps you think.</li>
            </ul>
          </section>

          {/* Step 3 */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                3
              </div>
              <h2 className="text-2xl font-semibold mb-0">Read Articles</h2>
            </div>
            <p className="mb-4 text-lg">
              Every template includes curated articles with practical information about your situation.
            </p>
            <p className="mb-4">
              These aren't generic blog posts - they're focused guides that help you understand what you need to know. Use the search feature to find specific information within articles.
            </p>
            <p className="text-muted-foreground italic">
              Think of articles as your research assistant. They save you hours of Googling by putting all the important information in one place.
            </p>
          </section>

          {/* Step 4 */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                4
              </div>
              <h2 className="text-2xl font-semibold mb-0">See Everything in Overview</h2>
            </div>
            <p className="mb-4 text-lg">
              The Overview tab shows you all your progress in one place.
            </p>

            <h3 className="text-xl font-semibold mb-3">What you'll find in Overview:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Responses:</strong> All your answers to prompts organized by template</li>
              <li><strong>Reflections:</strong> Your personal journal entries (if you use the Reflection tab)</li>
              <li><strong>Timeline:</strong> A visual calendar of your activity over the past 30 days</li>
              <li><strong>Insights:</strong> Stats about your usage and patterns</li>
            </ul>

            <div className="bg-muted/30 border-l-4 border-primary p-4 my-6">
              <h3 className="text-lg font-semibold mb-2">Export your work</h3>
              <p className="mb-0">
                You can download your responses and reflections as PDF files. This is great for printing, sharing with a partner or advisor, or just keeping a record of your thinking.
              </p>
            </div>
          </section>

          {/* Common Questions */}
          <section className="mb-12 pt-8 border-t">
            <h2 className="text-2xl font-semibold mb-6">Common Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Do I need an account?</h3>
                <p className="mb-0">
                  No! You can try Templata without an account in demo mode. Your work is saved locally in your browser.
                  If you want to access your work across devices or keep it permanently, create a free account.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Is my information private?</h3>
                <p className="mb-0">
                  Yes. Your responses and reflections are private and only visible to you. We never share your personal writing with anyone.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">How much does it cost?</h3>
                <p className="mb-0">
                  Templata is completely free. All 1,298 templates, 104K+ prompts, and 25K+ articles are available to everyone at no cost.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Can I use multiple templates?</h3>
                <p className="mb-0">
                  Absolutely! Many life situations overlap. Use as many templates as you want. Your Overview will keep everything organized for you.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">What if I get stuck?</h3>
                <p className="mb-0">
                  That's normal! Skip prompts that don't resonate and come back to them later. Or switch to a different template.
                  There's no wrong way to use Templata - it's your personal workspace.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 pt-8 border-t text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
            <p className="mb-6 text-lg">
              Try Templata now - no account required.
            </p>
            <a
              href="/app"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-md transition-colors"
            >
              Open Templata
            </a>
          </section>

          <section className="mt-12 pt-8 border-t">
            <p className="text-muted-foreground">
              Have more questions? Contact us at templata.app@gmail.com
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
