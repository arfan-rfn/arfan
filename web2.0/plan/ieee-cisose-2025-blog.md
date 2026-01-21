# Blog Post Plan: IEEE CISOSE 2025 Award-Winning Research

## Overview

Create a blog post for Arfan's award-winning research paper "Graph-Based LLM Prompting for Scalable Microservice API Testing" which won **2nd Place** at the IEEE CISOSE 2025 Student Research Competition.

## Paper Summary

- **Title**: Graph-Based LLM Prompting for Scalable Microservice API Testing
- **Author**: Md Arfan Uddin (University of Arizona)
- **Award**: 2nd Place, IEEE CISOSE 2025 Student Research Competition (July 23, 2025)
- **DOI**: https://doi.org/10.1109/SOSE67019.2025.00034
- **GitHub**: https://github.com/arfan-rfn/ms-testing-llm-icfg (public)

**Core Innovation**: Uses Interprocedural Control Flow Graphs (ICFGs) to guide LLMs in generating targeted API endpoint tests, instead of feeding full source code which exceeds context limits and introduces noise.

## Files Created/Modified

### Blog Post (New)

**MDX Content Directory** (`/app/(app)/blog/graph-based-llm-microservice-testing/`):
- `page.mdx` - Main blog post content with full metadata, OG/Twitter tags, and JSON-LD structured data

**Public Assets Directory** (`/public/blog/graph-based-llm-microservice-testing/`):
- Directory created for OG image and PDF

### Skill Update (Edit)

- `/Users/rfnmac/.claude/skills/research-to-blog/SKILL.md`
  - Added clarification about two-directory structure (app vs public)
  - Updated metadata template with full `openGraph` and `twitter` objects
  - Documented that OG images and PDFs go in `/public/blog/[slug]/`

## Required Files from User

| File | Location | Source | Notes |
|------|----------|--------|-------|
| `architecture.png` | `/app/(app)/blog/graph-based-llm-microservice-testing/` | Export Figure 1 from paper | Main technical diagram for inline use |
| `award-certificate.png` | `/app/(app)/blog/graph-based-llm-microservice-testing/` | Convert award PDF to PNG | IEEE CISOSE certificate |
| `og-image.png` | `/public/blog/graph-based-llm-microservice-testing/` | Create from architecture diagram | **1200x630px** for social sharing |
| `paper.pdf` | `/public/blog/graph-based-llm-microservice-testing/` | Copy research paper | For download link |

## Implementation Status

- [x] Review existing blog post pattern
- [x] Create directory structure for new blog post
- [x] Write page.mdx with full metadata and content
- [x] Update skill file with clarifications
- [x] Save plan to /plan directory

## Verification Steps

1. Run `npm run dev`
2. Navigate to `/blog/graph-based-llm-microservice-testing`
3. Verify all images load correctly (after user provides them)
4. Check page source for OG meta tags
5. Test OG image preview with https://www.opengraph.xyz/
