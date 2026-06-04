/**
 * Pure helpers for the torn-paper / washi-tape aesthetic. Kept framework-free
 * (no "use client") so both server and client components can import them.
 */

/** Deterministic gentle tilt (~[-2deg, +2deg]) from a stable seed string. */
export function tiltFromString(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return (h % 161) / 40 - 2;
}

/**
 * Translucent washi-tape fill from a raw color. Pulled partly toward the olive
 * primary so every tape reads as one set of tape rather than raw web colors.
 */
export function washiTapeColor(color: string): string {
  return `color-mix(in oklab, color-mix(in oklab, ${color} 88%, var(--primary)) 62%, transparent)`;
}

/** Muted washi-tape palette, used to vary tape color deterministically by slug. */
const TAPE_PALETTE = [
  "green",
  "teal",
  "blue",
  "indigo",
  "purple",
  "pink",
  "orange",
  "red",
  "yellow",
];

/** Pick a stable washi-tape color for a string key (e.g. a post slug). */
export function washiTapeFor(key: string): string {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return washiTapeColor(TAPE_PALETTE[h % TAPE_PALETTE.length]);
}
