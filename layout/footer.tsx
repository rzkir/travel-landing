import Link from "next/link";
import data from "@/constant/data.json";
import { Reveal } from "@/components/motion/reveal";

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-5xl px-6 pb-10 pt-2 md:px-8">
        <Reveal
          className="flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground md:flex-row"
          y={16}
        >
          <p>
            © {new Date().getFullYear()} {data.brand}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {data.footer.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
