import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/config/site";
import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: siteConfig.name,
  description: siteConfig.description,
  relativeUrl: "/",
}
);


export default function IndexPage() {

  const jsonLd = {
    name: siteConfig.name,
    description: siteConfig.description,
    relativeUrl: "/",
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <main>
      </main>
    </>
  )
}
