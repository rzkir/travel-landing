"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  animate,
} from "motion/react";
import { useLenis } from "lenis/react";
import data from "@/constant/data.json";
import { useIntro } from "@/components/providers/intro-context";

const LOAD_MS = 2200;
const HOLD_MS = 400;
const EXIT_MS = 1100;
const ease = [0.76, 0, 0.24, 1] as const;

export default function PageLoader() {
  const { finishIntro } = useIntro();
  const [phase, setPhase] = useState<"loading" | "exit" | "done">("loading");
  const [percentLabel, setPercentLabel] = useState("0");
  const progress = useMotionValue(0);
  const progressWidth = useTransform(progress, [0, 100], ["0%", "100%"]);
  const lenis = useLenis();

  useMotionValueEvent(progress, "change", (value) => {
    setPercentLabel(String(Math.round(value)));
  });

  useEffect(() => {
    lenis?.stop();
    document.documentElement.classList.add("loader-active");

    const controls = animate(progress, 100, {
      duration: LOAD_MS / 1000,
      ease: [0.45, 0, 0.2, 1],
    });

    const exitTimer = window.setTimeout(() => {
      setPhase("exit");
    }, LOAD_MS + HOLD_MS);

    const doneTimer = window.setTimeout(() => {
      setPhase("done");
      finishIntro();
      requestAnimationFrame(() => {
        lenis?.start();
        document.documentElement.classList.remove("loader-active");
      });
    }, LOAD_MS + HOLD_MS + EXIT_MS);

    return () => {
      controls.stop();
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
      lenis?.start();
      document.documentElement.classList.remove("loader-active");
    };
  }, [finishIntro, lenis, progress]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#fafafa]"
          initial={{ y: "0%" }}
          animate={{ y: phase === "exit" ? "-100%" : "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: EXIT_MS / 1000, ease }}
          aria-busy="true"
          aria-label="Loading"
        >
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `url(${data.images.hero})`,
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
            }}
            initial={{ scale: 1.12, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.22 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#fafafa] via-[#fafafa]/88 to-[#fafafa]" />

          <motion.div
            className="relative z-10 flex w-full max-w-md flex-col items-center px-8"
            animate={{
              opacity: phase === "exit" ? 0 : 1,
              y: phase === "exit" ? -24 : 0,
            }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              className="mb-3 text-[0.7rem] tracking-[0.35em] text-foreground/45 uppercase"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Welcome to
            </motion.p>

            <motion.h1
              className="font-serif text-5xl tracking-tight text-foreground md:text-6xl"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              {data.brand}
            </motion.h1>

            <motion.p
              className="mt-3 font-serif text-lg italic text-foreground/55"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              Essence of Indonesia
            </motion.p>

            <div className="mt-12 w-full max-w-[220px]">
              <div className="h-px w-full overflow-hidden bg-foreground/10">
                <motion.div
                  className="h-full origin-left bg-brand"
                  style={{ width: progressWidth }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-[0.65rem] tracking-[0.2em] text-foreground/40 uppercase">
                <span>Loading</span>
                <span>{percentLabel}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
