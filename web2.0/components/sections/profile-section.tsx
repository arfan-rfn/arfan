import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { birthstone } from "@/lib/fonts";
import { siteConfig } from "@/config/site";

const navItems = [
  { label: "About", href: "/blog/about-me" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export function ProfileSection() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col items-center space-y-6 my-8">
        {/* Profile Image — a sketched portrait taped into the journal as a polaroid */}
        <div
          className="relative -rotate-2 rounded-[3px] p-3 pb-10 w-full max-w-[300px] md:max-w-[380px]"
          style={{
            backgroundColor: "color-mix(in oklab, var(--card) 42%, white)",
            boxShadow: "0 8px 22px rgba(60,42,20,0.30)",
          }}
        >
          {/* Washi tape pinning the photo */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-4 left-1/2 z-20 h-8 w-32 -translate-x-1/2 -rotate-2 rounded-[2px]"
            style={{
              background:
                "repeating-linear-gradient(45deg, rgba(255,255,255,0.16) 0 6px, rgba(255,255,255,0) 6px 12px), color-mix(in oklab, var(--primary) 52%, transparent)",
              boxShadow:
                "0 2px 5px rgba(60,42,20,0.28), inset 0 0 0 1px rgba(255,255,255,0.18)",
            }}
          />
          <div
            className="relative aspect-square w-full overflow-hidden"
            style={{ backgroundColor: "color-mix(in oklab, var(--card) 72%, white)" }}
          >
            <Image
              src="/assets/arfan.svg"
              alt="Arfan Uddin"
              fill
              className="object-contain p-1"
              priority
              sizes="(max-width: 768px) 300px, 380px"
            />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className={cn(birthstone.className, "text-7xl font-bold text-center")}>
          Arfan Uddin
        </h1>
        <p className="text-center text-muted-foreground text-pretty tracking-tight">
          A random human of planet Earth who accidentally
          founded <Link href="https://getconnecto.app" target="_blank" rel="noopener noreferrer" aria-label="Connecto: Real-Time Networking App" title="Connecto: Real-Time Networking App" className={cn("mx-0 px-0 text-muted-foreground underline underline-offset-3 hover:underline-offset-2")}>Connecto</Link>,
          built <Link href="https://bdstudents.org" target="_blank" rel="noopener noreferrer" aria-label="BDStudents" title="BDStudents" className={cn("mx-0 px-0 text-muted-foreground underline underline-offset-3 hover:underline-offset-2")}>BDStudents</Link>,
          and stumbled into a Software Engineering PhD. Now shipping full-stack products with a mission to create real value in people’s lives.
        </p>

        {/* Navigation — handwritten index, matching the journal language */}
        <nav aria-label="Site" className="w-full pt-2">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-label={item.label}
                  title={item.label}
                  className="group/nav inline-flex items-center gap-1.5 text-sm sm:text-base text-foreground/80 transition-colors hover:text-primary"
                >
                  <span className="size-1 rotate-45 bg-primary/50 transition-colors group-hover/nav:bg-primary" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social links */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 pt-1">
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
                <SocialIcon className="size-5" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}