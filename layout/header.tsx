"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLenis } from "lenis/react";
import { Button } from "@/components/ui/button";
import data from "@/constant/data.json";
import { cn } from "cn";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useLenis((lenis) => {
    setScrolled(lenis.scroll > 24);
  });

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter,border-color] duration-300",
        scrolled
          ? "border-b border-black/5 bg-white/85 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
        <Link
          href="/"
          className="font-serif text-2xl font-medium tracking-[-0.03em] text-foreground"
        >
          {data.brand}
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {data.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.8125rem] font-medium tracking-wide text-foreground/65 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          nativeButton={false}
          render={<Link href={data.cta.href} />}
          className="h-11 rounded-full bg-white px-5 text-foreground shadow-sm ring-1 ring-black/5 hover:bg-white/90"
        >
          {data.cta.label}
          <span className="ml-2 flex size-6 items-center justify-center rounded-full bg-foreground text-background">
            <ArrowRight className="size-3.5" />
          </span>
        </Button>
      </div>
    </header>
  );
}
