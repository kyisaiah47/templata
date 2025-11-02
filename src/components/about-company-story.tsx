import { type SVGProps, useId } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const AboutCompanyStory = () => {
  return (
    <section className="py-32">
      {/* Hero Section */}
      <section className="lg:py-15 container relative max-w-5xl py-10 md:py-12">
        <div className="">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            A different
            <br />
            kind of bank.
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-2xl md:text-3xl">
            We&apos;re on a mission to transform financial services by
            harnessing vast amounts of untapped financial data.
          </p>
        </div>
        {/* Background decoration */}
        <>
          <div className="absolute inset-0 z-[-1] -translate-y-1/2 blur-[100px] will-change-transform">
            <div className="bg-gradient-1/25 -translate-x-1/5 absolute right-0 top-0 h-[400px] w-[800px] rounded-full" />
            <div className="bg-gradient-2/10 absolute right-0 top-0 size-[400px] rounded-full" />
          </div>
          <div className="absolute -inset-40 z-[-1] [mask-image:radial-gradient(circle_at_center,black_0%,black_20%,transparent_80%)]">
            <PlusSigns className="text-foreground/[0.05] h-full w-full" />
          </div>
        </>
      </section>

      {/* Stats Section */}
      <section className="container max-w-5xl border-y py-5">
        <h2 className="text-accent-foreground font-mono text-sm font-semibold tracking-widest">
          By the numbers
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              $150M
            </h3>
            <p className="text-muted-foreground mt-1 font-medium">Raised</p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              20K
            </h3>
            <p className="text-muted-foreground mt-1 font-medium">Companies</p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              1.3B
            </h3>
            <p className="text-muted-foreground mt-1 font-medium">
              Monthly transactions
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              1.5K
            </h3>
            <p className="text-muted-foreground mt-1 font-medium">
              Connections per minute
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="lg:py-15 container max-w-5xl py-10 md:py-12">
        <div className="max-w-2xl space-y-5 md:space-y-8 lg:space-y-10">
          <p className="text-lg">
            Financial services have changed, are changing, and will continue to
            change — for the better. Now is the time for finance to be
            developer-first and API-driven. But in order to do this — it needs a
            new foundation.
          </p>

          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
            We were always told that banks can&apos;t be platforms.
          </h2>
          <p className="text-lg">
            Everyone tried fixing the problem by layering APIs on legacy
            systems, creating abstractions and inefficiencies. We have spent
            years building and scaling companies like Plaid, Stripe, and Affirm,
            confronting these limitations firsthand. The current solutions
            aren&apos;t good enough. We believe that banking infrastructure must
            be reimagined as an API platform. But we had to start from ground
            zero.
          </p>
        </div>
      </section>
    </section>
  );
};

interface PlusSignsProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const PlusSigns = ({ className, ...props }: PlusSignsProps) => {
  const GAP = 16;
  const STROKE_WIDTH = 1;
  const PLUS_SIZE = 6;
  const id = useId();
  const patternId = `plus-pattern-${id}`;

  return (
    <svg width={GAP * 2} height={GAP * 2} className={className} {...props}>
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width={GAP}
          height={GAP}
          patternUnits="userSpaceOnUse"
        >
          <line
            x1={GAP / 2}
            y1={(GAP - PLUS_SIZE) / 2}
            x2={GAP / 2}
            y2={(GAP + PLUS_SIZE) / 2}
            stroke="currentColor"
            strokeWidth={STROKE_WIDTH}
          />
          <line
            x1={(GAP - PLUS_SIZE) / 2}
            y1={GAP / 2}
            x2={(GAP + PLUS_SIZE) / 2}
            y2={GAP / 2}
            stroke="currentColor"
            strokeWidth={STROKE_WIDTH}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};
