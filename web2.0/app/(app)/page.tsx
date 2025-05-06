import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/config/site";
import { getSEOTags } from "@/lib/seo";
import { ProfileSection } from "@/components/sections/profile-section";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata = getSEOTags({
  title: siteConfig.name,
  description: siteConfig.description,
  relativeUrl: "/",
});

export default function IndexPage() {
  const jsonLd = {
    name: siteConfig.name,
    description: siteConfig.description,
    relativeUrl: "/",
  };

  // Helper function to generate multiple paragraphs
  const generateParagraphs = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <p key={i} className="text-muted-foreground mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    ));
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <main className="flex min-h-screen flex-col">
        {/* Two-column layout */}
        <div className="flex flex-1 flex-col md:flex-row">
          {/* Left column - sticky on desktop */}
          <div className="flex-1 p-6 md:p-8 border-b md:border-b-0">
            <div className="md:sticky md:top-8">
              <ProfileSection />
            </div>
          </div>

          {/* Right column - scrollable */}
          <div className="flex-1 p-6 md:p-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Right Column</h2>
              {generateParagraphs(200)}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <ContactSection />
      </main>
    </>
  );
}
