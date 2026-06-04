import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { birthstone } from "@/lib/fonts";
import { TornPaper } from "@/components/ui/torn-paper";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export function ProfileSectionCompact() {
  return (
    <div className="w-full md:max-w-[230px] mx-auto">
      <TornPaper
        tilt={-1.5}
        tapeColor="color-mix(in oklab, var(--primary) 52%, transparent)"
        contentClassName="px-4 pt-7 pb-5"
      >
        <div className="flex flex-row md:flex-col items-center gap-4 md:text-center">
          {/* Taped polaroid portrait */}
          <Link
            href="/"
            aria-label="Home"
            className="group/photo shrink-0 -rotate-3 rounded-[2px] p-1.5 pb-4 w-20 md:w-36"
            style={{
              backgroundColor: "color-mix(in oklab, var(--card) 42%, white)",
              boxShadow: "0 2px 7px rgba(60,42,20,0.28)",
            }}
          >
            <div className="relative aspect-square w-full overflow-hidden bg-muted">
              <Image
                src="/assets/arfan.svg"
                alt="Arfan Uddin"
                fill
                className="object-cover transition-transform duration-300 group-hover/photo:scale-105"
                priority
                sizes="144px"
              />
            </div>
          </Link>

          <div className="flex-1 min-w-0 md:w-full">
            {/* Name */}
            <Link href="/" className="group/name inline-block">
              <h1
                className={cn(
                  birthstone.className,
                  "text-3xl md:text-4xl font-bold transition-colors group-hover/name:text-primary"
                )}
              >
                Arfan Uddin
              </h1>
            </Link>

            {/* Blurb — desktop only, to keep the mobile bar slim */}
            <p className="hidden md:block text-muted-foreground text-xs text-pretty leading-snug mt-1 line-clamp-3">
              Founder at{" "}
              <Link
                href="https://getconnecto.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-primary"
              >
                Connecto
              </Link>{" "}
              · Pursuing a PhD in Software Engineering · Full-Stack Developer
            </p>

            {/* Handwritten index / nav */}
            <nav
              aria-label="Site"
              className="mt-2 md:mt-3 w-full md:border-t md:border-dashed md:border-border md:pt-3"
            >
              <ul className="flex flex-wrap md:flex-col items-center md:items-start gap-x-3 gap-y-1 md:gap-y-1.5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group/nav inline-flex items-center gap-1.5 text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      <span className="size-1 rotate-45 bg-primary/50 transition-colors group-hover/nav:bg-primary" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social links — desktop rail only, to keep the mobile bar slim */}
            <div className="hidden md:flex flex-wrap items-center gap-3.5 mt-4 pt-3 border-t border-dashed border-border">
              {siteConfig.socials.map(({ name, url, icon }) => {
                const SocialIcon = Icons[icon as keyof typeof Icons];
                if (!SocialIcon) return null;
                return (
                  <Link
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <SocialIcon className="size-[18px]" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </TornPaper>
    </div>
  );
}
