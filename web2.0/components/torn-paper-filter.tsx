/**
 * SVG turbulence filter that frays the edges of any element referencing
 * `filter: url(#torn-paper)`. Rendered once at the app root so every
 * TornPaper instance (timeline, blog cards, blog posts) can share it.
 */
export function TornPaperFilter() {
  return (
    <svg className="absolute size-0" aria-hidden focusable="false">
      <defs>
        <filter id="torn-paper" x="-8%" y="-12%" width="116%" height="124%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.014 0.036"
            numOctaves={4}
            seed={7}
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={12}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
