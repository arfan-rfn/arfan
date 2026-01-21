# Figure Selection and Naming Guidelines

## Figure Selection Criteria

### Must-Include Figures (Priority 1)

| Figure Type | Why Essential | Example Papers |
|-------------|---------------|----------------|
| **Taxonomy/Hierarchy** | Visual anchor for categorization | SLR, survey papers |
| **Architecture diagram** | Shows system design | Tool/framework papers |
| **PRISMA flowchart** | Demonstrates rigor | Systematic reviews |
| **Main results chart** | Proves key claims | Experimental papers |
| **Benchmark comparison** | Shows performance vs baselines | ML/AI papers |

### High-Value Figures (Priority 2)

| Figure Type | When to Include |
|-------------|-----------------|
| **Sankey/Flow diagram** | Multi-dimensional relationships |
| **Comparison bar chart** | Method/tool comparisons |
| **Timeline/Trend graph** | Temporal patterns |
| **Heatmap** | Correlation or coverage data |
| **Ablation study table** | Shows component contributions |
| **Performance curves** | Training/validation trends |

### Data & Tables to Request

When analyzing a paper, identify these data elements:

| Data Type | Request As | When to Include |
|-----------|------------|-----------------|
| **Main benchmark results** | Image of table | Always - core contribution |
| **Comparison with baselines** | Chart or table image | When showing improvement |
| **Ablation study results** | Table image | When methodology is key |
| **Statistical significance** | Inline text | Include numbers in text |
| **Dataset statistics** | Markdown table | Convert to text table |
| **Hyperparameters** | Skip | Too technical for blog |

### Skip These Figures

- Dense mathematical notation
- Raw experimental plots without context
- Figures requiring domain expertise to interpret
- Low-resolution or hard-to-read figures
- Figures that duplicate table data
- Hyperparameter tables (mention key ones in text instead)
- Intermediate training curves (unless showing key insight)

## Directory Structure

All images are stored locally in the same directory as the blog post:

```
/web2.0/app/(app)/blog/[post-slug]/
├── page.mdx              # Blog post
├── featured-image.png    # Hero image (required for OG)
├── [figure-name].png     # Additional figures
└── ...
```

## Naming Conventions

### Filename Rules

| Rule | Good | Bad |
|------|------|-----|
| Lowercase | `workflow.png` | `Workflow.PNG` |
| Hyphens for spaces | `sankey-diagram.png` | `sankey_diagram.png` |
| Descriptive | `ai-taxonomy.png` | `fig3.png` |
| No special chars | `results-f1.png` | `results_(f1).png` |

### Standard Filenames by Type

| Figure Type | Filename |
|-------------|----------|
| Main taxonomy/hierarchy | `taxonomy.png` |
| Workflow/methodology | `workflow.png`, `methodology.png` |
| PRISMA/selection process | `slr-workflow.png`, `prisma-flow.png` |
| Architecture | `architecture.png`, `system-design.png` |
| Sankey diagram | `sankey-diagram.png` |
| Results comparison | `results-comparison.png` |
| Performance chart | `performance-[metric].png` |
| Timeline | `timeline.png`, `trends.png` |
| Distribution | `distribution-[variable].png` |
| Featured/Hero | `featured-image.png` |

## Alt Text Guidelines

Alt text is critical for SEO and accessibility.

### Formula

```
[Figure type] showing [what it depicts] with [key elements highlighted]
```

### Examples

```markdown
Taxonomy of AI techniques for log analysis showing a sunburst diagram with Machine Learning, Deep Learning, GNN, and LLM categories

Sankey diagram showing the flow from use cases through AI techniques to dataset types across 82 studies

PRISMA flowchart depicting study selection from 2,208 initial papers to 82 final primary studies through screening and eligibility phases
```

### Alt Text Checklist

- [ ] Describes figure type (diagram, chart, flowchart)
- [ ] States what data/concept is shown
- [ ] Includes key numbers if relevant
- [ ] Under 125 characters for most screen readers
- [ ] No "Figure showing..." or "Image of..." prefix

## Figure Captions

### Format in MDX

```typescript
<MaskedImage
  src={figureImg}
  alt="[Alt text - descriptive for screen readers]"
  width={800}
  height={450}
  variant="shape6"
  className="w-[70%] rounded-lg mx-auto"
/>

<div className="flex justify-center">
  <div className="leading-snug mt-2 text-sm">
    Figure N: [Caption providing context and key takeaway]
  </div>
</div>
```

### Caption Formula

```
Figure N: [What it shows]. [Key insight or how to read it].
```

### Examples

```markdown
Figure 1: Study selection workflow following PRISMA guidelines. Starting from 2,208 papers, we identified 82 primary studies.

Figure 2: Distribution of AI techniques. Machine Learning dominates at 34.5%, followed by Deep Learning at 27.6%.

Figure 3: Relationship between use cases, techniques, and datasets. The flow reveals anomaly detection dominates research focus.
```

## Image Optimization

### Recommended Specifications

| Property | Recommendation |
|----------|----------------|
| Format | PNG (diagrams), JPG (photos) |
| Width | 1200-2000px for full-width |
| DPI | 150-300 for print-quality |
| File size | < 500KB after optimization |
| Color space | sRGB |

### PDF to PNG Conversion

```bash
# High-quality conversion
pdftoppm -png -r 300 input.pdf output-name
mv output-name-1.png final-name.png

# Batch conversion
for f in *.pdf; do
  pdftoppm -png -r 300 "$f" "${f%.pdf}"
  mv "${f%.pdf}-1.png" "${f%.pdf}.png"
done
```

## MaskedImage Component Usage

### Import Pattern

```typescript
import featuredImg from "./featured-image.png";
import workflowImg from "./workflow.png";
import resultsImg from "./results-comparison.png";
```

### Component Usage

```typescript
<MaskedImage
  src={featuredImg}
  alt="[Descriptive alt text]"
  width={800}
  height={450}
  variant="shape6"
  className="w-[70%] rounded-lg mx-auto"
/>
```

### Available Variants

- `shape1` - Decorative mask style 1
- `shape2` - Decorative mask style 2
- `shape3` - Decorative mask style 3
- `shape4` - Decorative mask style 4
- `shape5` - Decorative mask style 5
- `shape6` - Most commonly used decorative mask

### Common className Patterns

```typescript
// Standard centered image (70% width)
className="w-[70%] rounded-lg mx-auto"

// Full width image
className="w-full rounded-lg"

// Smaller inline image
className="w-[50%] rounded-lg mx-auto"
```

## Benchmark & Results Data Guidelines

### When to Request as Image vs Text

| Data Type | Format | Reasoning |
|-----------|--------|-----------|
| Simple comparison (2-3 rows) | Markdown table | Easy to read inline |
| Complex benchmark (4+ methods) | Image | Preserves formatting |
| Multi-metric results | Image | Shows relationships |
| Single key metric | Inline text | "achieved 94.5% accuracy" |
| Ablation with many rows | Image | Too complex for markdown |

### How to Reference Data in Blog

For results you request as images:
```markdown
Our method achieves state-of-the-art performance across all benchmarks:

<MaskedImage
  src={benchmarkImg}
  alt="Benchmark comparison showing our method outperforms baselines on F1, Precision, and Recall metrics"
  width={800}
  height={400}
  variant="shape3"
  className="w-[80%] rounded-lg mx-auto"
/>

<div className="flex justify-center">
  <div className="leading-snug mt-2 text-sm">
    Table 1: Performance comparison on the XYZ benchmark. Our method (bold) achieves the highest scores.
  </div>
</div>
```

For simple results, use markdown tables:
```markdown
| Method | Accuracy | F1 Score |
|--------|----------|----------|
| Baseline | 85.2% | 0.83 |
| **Ours** | **94.5%** | **0.92** |
```

### Key Numbers to Highlight

Always extract and mention in text:
- **Primary metric improvement**: "11% improvement over the previous state-of-the-art"
- **Scale/scope**: "evaluated on 10,000 samples across 5 datasets"
- **Statistical significance**: "p < 0.001" (if reported)
- **Efficiency gains**: "3x faster inference time"

## User Prompt Template

Use this to request figures from the user:

```markdown
## Figure Request

To complete your blog post, please provide these figures:

### Required
| # | Description | Save as | Place in |
|---|-------------|---------|----------|
| 1 | [Description] | `featured-image.png` | `/web2.0/app/(app)/blog/[slug]/` |
| 2 | [Description] | `[name].png` | `/web2.0/app/(app)/blog/[slug]/` |

### Optional (Recommended)
| # | Description | Save as | Purpose |
|---|-------------|---------|---------|
| 3 | [Description] | `[name].png` | [Why helpful] |

**Accepted formats**: PNG, JPG, SVG, PDF
**If PDF**: I'll convert to PNG at 300 DPI

Once you provide these, I'll:
1. Convert any PDFs to web-ready PNGs
2. Update the MDX with proper image imports
3. Add SEO-optimized alt text
```

## OG Image Requirements

The `featured-image.png` serves as the Open Graph image:

- **Size**: 1200x630 pixels (1.91:1 ratio) recommended
- **Format**: PNG or JPG
- **Content**: Should work as a social media preview
- **Path in metadata**: `ogImage: "/blog/[slug]/featured-image.png"`

The `ogImage` field in metadata references this file for social sharing.
