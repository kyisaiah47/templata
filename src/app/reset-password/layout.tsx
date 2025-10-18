import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Set New Password | Templata',
  description: 'Create a new password for your Templata account.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ResetPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
