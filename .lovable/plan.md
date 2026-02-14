

# Portfolio Redesign — zunedaalim.com Style

Based on the reference screenshots from zunedaalim.com, here is the plan to redesign your portfolio with the new style, fix mobile nav, enlarge your photo, and add an accordion-style skills section.

## Summary of Changes

1. **Redesign "What I Do" section** to match the reference: large bold heading "WHAT I DO /", a "(SERVICES)" label with description text, then numbered accordion items (01, 02, 03) that expand on scroll/click to reveal details and sub-skills.

2. **Replace the Tech Stack section** with a new "Skills" section matching the reference: left side shows large text "DEVELOPER / DESIGNER / CREATOR /", right side shows categorized skill lists (Languages and Tools, Frameworks and Libraries, Core CS Concepts) -- adapted to your actual skills.

3. **Make the hero photo bigger** (increase from w-64/w-80 to w-80/w-96 or larger).

4. **Fix mobile navigation** so tapping links actually works.

5. **Redesign Contact section** with a large bold "LET'S MAKE IT HAPPEN" heading to match the reference style.

---

## Technical Details

### 1. Redesign WhatIDoSection.tsx

Replace the current three-card grid with the zunedaalim-style layout:
- Large "WHAT I DO /" heading (very large, bold, uppercase)
- "(SERVICES)" label with a paragraph description on the right
- Horizontal divider
- Three numbered accordion items that expand when scrolled into view:
  - **(01) Full-Stack Development** -- with description and numbered sub-skills (C#, .NET, ASP.NET / Angular, TypeScript / SQL Server, T-SQL)
  - **(02) Web and WordPress Solutions** -- with description and sub-skills (WordPress, WooCommerce / Custom Themes, PHP / Responsive Design)
  - **(03) Problem-Solving and Architecture** -- with description and sub-skills (Clean Architecture, SOLID / Database Design, REST APIs / Git, Azure DevOps)
- Use framer-motion `AnimatePresence` and scroll-triggered state to auto-expand each item as user scrolls to it
- Items are also clickable to toggle open/close

### 2. Replace TechStackSection.tsx with SkillsSection.tsx

New layout matching the reference:
- Left side: large stacked uppercase text "DEVELOPER", "ENGINEER", "CREATOR/"
- Right side: "Skills" heading with three columns:
  - **Languages and Tools**: C#, TypeScript, JavaScript, HTML5, CSS3, PHP, SQL, Git, Postman
  - **Frameworks and Libraries**: .NET, ASP.NET, Angular, Entity Framework, Bootstrap, WordPress, WooCommerce
  - **Core Concepts**: REST APIs, Database Design, Clean Architecture, OOP, Agile, Azure DevOps
- Skills animate in (staggered fade) when section scrolls into view

### 3. HeroSection.tsx -- Bigger Photo

Change the photo container classes:
- From: `w-64 h-64 md:w-80 md:h-80`
- To: `w-72 h-72 md:w-96 md:h-96`

### 4. Fix Mobile Navigation (Navbar.tsx)

The mobile menu links use `handleClick` which calls `scrollIntoView`, but the `AnimatePresence` exit animation with `height: 0` may cause issues. Fix by:
- Adding a small delay before scrolling so the menu closes first
- Ensuring the mobile menu overlay has proper `pointer-events` and `z-index`
- Using `setTimeout` in `handleClick` to allow the close animation to start before scrolling

### 5. Redesign ContactSection.tsx

- Add a large bold "LET'S MAKE IT HAPPEN" heading (matching reference style)
- Keep email, LinkedIn, and CV download links below
- Maintain the existing closing tagline

### 6. Update Index.tsx

- Replace `TechStackSection` import with the new `SkillsSection`
- Keep all other sections in their current order

### Files to Create
- `src/components/SkillsSection.tsx` (new, replaces TechStackSection)

### Files to Modify
- `src/components/WhatIDoSection.tsx` (full redesign)
- `src/components/HeroSection.tsx` (bigger photo)
- `src/components/Navbar.tsx` (fix mobile nav)
- `src/components/ContactSection.tsx` (redesign heading)
- `src/pages/Index.tsx` (swap TechStackSection for SkillsSection)

