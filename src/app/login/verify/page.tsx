import { GalleryVerticalEnd } from "lucide-react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Check Your Email - Templata',
  description: 'We sent you a magic link to sign in to your Templata account.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function VerifyRequestPage() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a
              href="/"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Templata</span>
            </a>
            <h1 className="text-xl font-bold">Check your email</h1>
            <div className="text-center text-sm text-muted-foreground">
              A sign in link has been sent to your email address.
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                  <svg
                    className="size-5 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold">Magic link sent</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Click the link in your email to sign in to Templata.
                  </p>
                </div>
              </div>
              <div className="rounded-md bg-muted p-3 text-xs text-muted-foreground">
                <p className="font-medium mb-1">Didn&apos;t receive the email?</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Check your spam folder</li>
                  <li>Make sure you entered the correct email</li>
                  <li>Wait a few minutes and try again</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="/login"
              className="text-sm text-primary hover:underline"
            >
              ← Back to login
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
