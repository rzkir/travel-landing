"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";
import { IntroProvider } from "@/components/providers/intro-context";
import IntroGate from "@/components/providers/intro-gate";
import PageLoader from "@/components/providers/page-loader";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="never">
      <IntroProvider>
        <ReactLenis
          root
          options={{
            lerp: 0.075,
            duration: 1.25,
            smoothWheel: true,
            syncTouch: false,
          }}
        >
          <PageLoader />
          <IntroGate>{children}</IntroGate>
        </ReactLenis>
      </IntroProvider>
    </MotionConfig>
  );
}
