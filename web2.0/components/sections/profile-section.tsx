import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { birthstone } from "@/lib/fonts";

interface SocialLink {
  name: string;
  url: string;
  icon: keyof typeof Icons;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "GitHub",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "LinkedIn",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "TwitterX",
  },
];

export function ProfileSection() {
  return (
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
      <div className="text-center space-y-2">
        <h1 className={cn("text-4xl font-bold")}>
          <span className="font-extrabold">Arfan</span> Uddin
        </h1>
        <p className="text-muted-foreground">
          Founder of <Link href="https://connecto.now" target="_blank" rel="noopener noreferrer" className="underline">Connecto</Link> |
          Pursuing PhD in Software Engineering |
          Full Stack Developer
        </p>
      </div>


      {/* Social Links */}
      <div className="flex space-x-4">
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
            >
              <Icon className="h-5 w-5" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}