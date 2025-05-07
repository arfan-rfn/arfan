import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { birthstone } from "@/lib/fonts";
import { buttonVariants } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export function ProfileSectionCompact() {
  return (
    <div className="flex flex-col h-full w-full max-w-[200px]">
      <div className="flex flex-col items-center space-y-4">
        {/* Profile Image */}
        <Link href="/" className="group relative aspect-square w-full rounded-full overflow-hidden">
          <Image
            src="/assets/arfan.svg"
            alt="Profile Picture"
            fill
            className="object-cover transition-transform group-hover:scale-105"
            priority
            sizes="200px"
          />
        </Link>

        {/* Name and Title */}
        <Link href="/" className="group">
          <h1 className={cn(
            birthstone.className,
            "text-3xl font-bold text-center transition-colors group-hover:text-primary"
          )}>
            Arfan Uddin
          </h1>
        </Link>
        <p className="text-center text-muted-foreground text-xs text-pretty tracking-tight line-clamp-3">
          Founder at <Link href="https://getconnecto.app" target="_blank" rel="noopener noreferrer" aria-label="Connecto: Real-Time Networking App" title="Connecto: Real-Time Networking App" className="text-muted-foreground underline underline-offset-3 hover:underline-offset-2">Connecto</Link> | Pursuing PhD in Software Engineering | Full Stack Developer
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-1.5 w-full mt-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              title={item.label}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "text-xs px-2 py-1 h-auto"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}