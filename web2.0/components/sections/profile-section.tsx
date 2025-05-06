import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { birthstone } from "@/lib/fonts";
import { buttonVariants } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "/blog/about-me" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export function ProfileSection() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col items-center space-y-6">
        {/* Profile Image */}
        <div className="relative aspect-square w-full max-w-[300px] md:max-w-[400px] rounded-full overflow-hidden">
          <Image
            src="/assets/arfan.svg"
            alt="Profile Picture"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 300px, 400px"
          />
        </div>

        {/* Name and Title */}
        {/* <div className="text-center space-y-2"> */}
        <h1 className={cn(birthstone.className, "text-7xl font-bold text-center")}>
          Arfan Uddin
        </h1>
        <p className="text-center text-muted-foreground text-pretty tracking-tight">
          Founder at <Link href="https://connecto.now" target="_blank" rel="noopener noreferrer" aria-label="Connecto: Real-Time Networking App" title="Connecto: Real-Time Networking App" className={cn( "mx-0 px-0 text-muted-foreground underline underline-offset-3 hover:underline-offset-2")}>Connecto</Link> |
          Pursuing PhD in Software Engineering |
          Full Stack Developer
        </p>
        {/* </div> */}

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-2 w-full max-w-sm mt-auto py-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              title={item.label}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "text-sm"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Social Links - Fixed to bottom */}
      {/* <div className="mt-auto pt-6">
        <div className="flex justify-center space-x-4">
          {socialLinks.map((link) => {
            const Icon = Icons[link.icon];
            return (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-colors",
                  "rounded-full p-2 hover:bg-muted"
                )}
                aria-label={link.name}
                title={link.name}
              >
                <Icon className="h-5 w-5" />
              </Link>
            );
          })}
        </div>
      </div> */}
    </div>
  );
}