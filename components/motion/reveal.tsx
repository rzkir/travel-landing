"use client";

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
  type HTMLMotionProps,
  type MotionValue,
} from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "cn";
import { useIntro } from "@/components/providers/intro-context";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "className" | "animate">;

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 36,
  once = true,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { ready } = useIntro();
  const inView = useInView(ref, { once, margin: "-12% 0px" });
  const show = ready && inView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.85, delay: show ? delay : 0, ease }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealImage({
  children,
  className,
  delay = 0,
  scale = 1.06,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  scale?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { ready } = useIntro();
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const show = ready && inView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale }}
      transition={{ duration: 1, delay: show ? delay : 0, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { ready } = useIntro();
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const show = ready && inView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={show ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  offset?: number;
  scale?: number;
};

export function Parallax({
  children,
  className,
  offset = 80,
  scale = 1.15,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { ready } = useIntro();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  const y = useSpring(rawY, { stiffness: 100, damping: 32, mass: 0.45 });

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        style={{ y: ready ? y : 0, scale }}
        className="absolute inset-0 will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}

type ParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  speed?: number;
  scrollYProgress?: MotionValue<number>;
};

export function ParallaxLayer({
  children,
  className,
  speed = 0.2,
  scrollYProgress,
}: ParallaxLayerProps) {
  const localRef = useRef<HTMLDivElement>(null);
  const { ready } = useIntro();
  const local = useScroll({
    target: localRef,
    offset: ["start end", "end start"],
  });
  const progress = scrollYProgress ?? local.scrollYProgress;
  const y = useTransform(progress, [0, 1], [`${-speed * 100}%`, `${speed * 100}%`]);

  return (
    <motion.div
      ref={localRef}
      style={{ y: ready ? y : 0 }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

export function useSectionParallax() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  return { ref, scrollYProgress };
}
