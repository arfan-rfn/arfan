import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/config/site";
import { getSEOTags } from "@/lib/seo";
import { ProfileSection } from "@/components/sections/profile-section";
import { ContactSection } from "@/components/sections/contact-section";
import { TimelineSection } from "@/components/sections/timeline-section";

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

  return (
    <>
      <JsonLd data={jsonLd} />
      <main className="flex min-h-screen flex-col">
        {/* Two-column layout */}
        <div className="flex flex-1 flex-col md:flex-row">
          {/* Left column - sticky on desktop */}
          <div className="flex-1 p-6 md:p-8 md:border-b-0">
            <div className="md:sticky md:top-8">
              <ProfileSection />
            </div>
          </div>

          {/* Right column - scrollable */}
          <div className="flex-1 p-6 md:p-8">
            <TimelineSection />
          </div>
        </div>

        {/* Contact Section */}
        <ContactSection />
      </main>
    </>
  );
}
