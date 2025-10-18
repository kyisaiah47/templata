import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reset Password | Templata',
  description: 'Reset your Templata account password. Enter your email to receive a password reset link.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
