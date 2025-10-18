import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up | Templata',
  description: 'Create a free Templata account to access 1,298 templates, 15,000+ prompts, and 25,936 articles for life planning.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
