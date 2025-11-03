import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings | Templata',
  description: 'Manage your Templata account settings, privacy preferences, and data export options.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
