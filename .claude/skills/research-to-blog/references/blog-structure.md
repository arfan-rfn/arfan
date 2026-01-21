# Blog Post Structure Reference

Detailed guidance for structuring research-to-blog conversions.

## Section Templates

### 1. Opening Hook (Required)

**Purpose**: Capture attention, establish relevance

**Template**:
```markdown
I'm excited to share that our research paper **"[Paper Title]"** has been
accepted at **[Venue]**—[brief venue description]. This post summarizes
[what the post covers].

📄 **Preprint**: <StyledLink href="[URL]">[Link text]</StyledLink>
📦 **Code/Data**: <StyledLink href="[URL]">[Link text]</StyledLink>
```

**Alternative hooks**:
- Problem-first: "Modern [systems] generate [scale of problem]..."
- Question-first: "How do you [solve X] when [challenge Y]?"
- Statistic-first: "[Surprising stat] — that's why we studied..."

### 2. Research Overview (Required)

**Purpose**: Scope and credibility at a glance

**Template** - Use table format:
```markdown
## Research Overview

| Metric | Value |
|--------|-------|
| [Scope metric 1] | [Value] |
| [Scope metric 2] | [Value] |
| Publication period | [Years] |
| [Domain-specific metric] | [Value] |
```

**Place methodology figure here** (if applicable):
```typescript
<MaskedImage
  src={workflowImg}
  alt="Methodology workflow describing [process]"
  width={800}
  height={450}
  variant="shape6"
  className="w-[70%] rounded-lg mx-auto"
/>

<div className="flex justify-center">
  <div className="leading-snug mt-2 text-sm">
    Figure 1: [Caption describing the process]
  </div>
</div>
```

### 3. Key Findings (3-5 sections)

**Purpose**: Core contributions in digestible chunks

**Template per finding**:
```markdown
## Key Finding #N: [Descriptive Title]

[1-2 paragraph explanation in plain language]

[Supporting table or figure]

[Blockquote for important insight]:
> **[Label]**: [Key takeaway or implication]
```

**Data presentation priority**:
1. Tables for comparisons and distributions
2. Figures for trends and relationships
3. Inline stats for single metrics
4. Blockquotes for key insights

### 4. Synthesis Section (For complex papers)

**Purpose**: Connect findings holistically

**Template**:
```markdown
## The Big Picture

<MaskedImage
  src={synthesisImg}
  alt="[Descriptive alt text showing relationships]"
  width={800}
  height={450}
  variant="shape3"
  className="w-[70%] rounded-lg mx-auto"
/>

**Key insights from this visualization:**
- [Insight 1]
- [Insight 2]
- [Insight 3]
```

### 5. Practical Tools/Resources (If applicable)

**Purpose**: Actionable value for readers

**Template**:
```markdown
## [N] Tools/Datasets/Resources for [Domain]

[Brief intro]

| Name | Description | Link |
|------|-------------|------|
| **[Tool 1]** | [One-line description] | <StyledLink href="[URL]">GitHub</StyledLink> |
```

### 6. Benefits vs Challenges (Optional)

**Purpose**: Balanced perspective

**Template**:
```markdown
## Benefits vs. Challenges

### Top [N] Benefits
1. **[Benefit]**: [Explanation with data]

### Top [N] Challenges
| Challenge | Studies/Evidence | Percentage |
|-----------|------------------|------------|
| [Challenge 1] | [N] | [X]% |
```

### 7. Recommendations (Required for SLR/Survey papers)

**Purpose**: Actionable guidance

**Template**:
```markdown
## Recommendations

### For Researchers
1. **[Action]**: [Why and how]

### For Practitioners
1. **[Action]**: [Why and how]
```

### 8. Future Directions (Optional)

**Purpose**: Forward-looking perspective

**Template**:
```markdown
## The Future: Where [Field] is Heading

Based on our analysis, several trends are emerging:
1. **[Trend]**: [Explanation]
```

### 9. Citation Block (Required)

**Purpose**: Enable proper attribution

**Template**:
```markdown
## Citation

If you find this work useful, please cite:

\`\`\`bibtex
@article{author2024title,
  title={Full Paper Title},
  author={Last, First and Last, First},
  journal={Journal Name},
  year={2024},
  publisher={Publisher}
}
\`\`\`
```

### 10. About Section (Required)

**Purpose**: Author credibility and contact

**Template**:
```markdown
## About

This research was conducted at **[Institution]**, with support from
**[Funding source]**.

[Call to action]: Feel free to <StyledLink href="mailto:email@domain.com">reach out</StyledLink>!
```

## Word Count Guidelines

| Section | Target Words |
|---------|--------------|
| Hook | 100-200 |
| Overview | 100-150 |
| Each Key Finding | 200-400 |
| Tools/Resources | 100-300 |
| Recommendations | 200-400 |
| Future/Conclusion | 100-200 |
| **Total** | **1,500-3,000** |

## Formatting Rules

- **Headers**: Use `##` for main sections, `###` for subsections
- **Bold**: Use for tool names, key terms on first use, emphasis
- **Tables**: Prefer over bullet lists for structured data
- **Blockquotes**: Use sparingly for key insights (1-2 per post)
- **Code blocks**: Only for citations, commands, or actual code
- **Emojis**: Maximum 2-3, only in links section (📄, 📦)
- **Links**: Use StyledLink component for external URLs
- **Images**: Use MaskedImage component with appropriate variant

## StyledLink Usage

Always use the exported StyledLink component for links:

```typescript
<StyledLink href="https://example.com">Link text</StyledLink>
```

This provides consistent hover animations across the blog.

## Image Captions

Place captions below MaskedImage using this pattern:

```typescript
<MaskedImage
  src={figureImg}
  alt="[Alt text]"
  width={800}
  height={450}
  variant="shape6"
  className="w-[70%] rounded-lg mx-auto"
/>

<div className="flex justify-center">
  <div className="leading-snug mt-2 text-sm">
    Figure N: [Caption text with key takeaway]
  </div>
</div>
```
