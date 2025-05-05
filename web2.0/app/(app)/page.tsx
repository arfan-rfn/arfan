import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { JsonLd } from "@/components/json-ld";
import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "NextJS Template",
  description: "A NextJS template with Tailwind CSS and TypeScript.",
  relativeUrl: "/",
}
);


export default function IndexPage() {

  const jsonLd = {
    name: "NextJS Template",
    description: "A NextJS template with Tailwind CSS and TypeScript.",
    relativeUrl: "/",
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <main>
        <Hero />
      </main>
    </>
  )
}
