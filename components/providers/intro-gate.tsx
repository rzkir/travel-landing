"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useIntro } from "@/components/providers/intro-context";

const ease = [0.22, 1, 0.36, 1] as const;

/** Keeps the landing page hidden until the intro loader finishes. */
export default function IntroGate({ children }: { children: ReactNode }) {
  const { ready } = useIntro();

  return (
    <motion.div
      initial={false}
      animate={{
        opacity: ready ? 1 : 0,
        y: ready ? 0 : 12,
      }}
      transition={{ duration: 0.75, ease, delay: ready ? 0.05 : 0 }}
      className={ready ? undefined : "pointer-events-none select-none"}
      aria-hidden={!ready}
    >
      {children}
    </motion.div>
  );
}
