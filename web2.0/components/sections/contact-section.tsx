import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
          <p className="text-muted-foreground text-center max-w-2xl">
            {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."}
          </p>

          <div className="flex flex-wrap justify-center gap-4 w-full max-w-2xl">
            {siteConfig.socials.map((social) => {
              const Icon = Icons[social.icon as keyof typeof Icons];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full",
                    "border border-border hover:border-foreground/20",
                    "transition-all duration-200",
                    "hover:bg-muted/50 hover:scale-105",
                    "group"
                  )}
                >
                  <Icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                  <span className="font-medium text-sm">{social.name}</span>
                </a>
              );
            })}
          </div>

          <div className="flex flex-col items-center space-y-4">
            <p className="text-muted-foreground">Or send me an email at</p>
            <a
              href="mailto:arfan@ibyo.com"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "text-lg hover:bg-muted/50 hover:scale-105 transition-transform duration-200"
              )}
            >
              arfan@ibyo.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}