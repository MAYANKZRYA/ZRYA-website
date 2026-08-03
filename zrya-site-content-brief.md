# ZRYA — Website Content & Design Brief

For handoff to code. Contains all copy, section structure, and a design/motion spec based on **sageeast.com** (overall layout, pacing, scroll behavior) and **nickdimatteo.com** (work-section pattern: list + overlaying video preview).

---

## 1. Brand Snapshot (source of truth for tone)

- **Artist:** ZRYA (Mayank Choudhary)
- **Archetype:** The Experimentalist / The Transcendent
- **Sound:** Earthy, electronic, intense
- **Core message:** *"Music that bends reality — an experience that makes you question what is real and what is imagined."*
- **Personality:** Elusive but intelligent. Deep thinker, existential, artistically adventurous. Prefers mystery over oversharing. Lets the art speak for itself.
- **Visual language:** Cinematic, immersive, slightly surreal — earthy and warm as much as it's cyberpunk and cold. Deep greys and muted purples sit alongside dark moss green and burnt orange; glitchy neons and distorted textures, but grounded in organic texture (soil, grain, analog warmth) rather than pure sterile dystopia. Fragmented faces, motion blur, minimal-but-experimental composition.
- **Audience:** Late-night thinkers, introverts, abstract/cinematic-storytelling listeners, experimental music and tech-forward fans.

**Copy voice rules:** short, declarative, a little cryptic. No exclamation points. No hustle-culture language ("check out," "don't miss"). Prefer sentence fragments and white space over full explanation. Let silence do work — this is a site for someone who "prefers mystery over oversharing."

---

## 2. Reference Pattern Notes

**sageeast.com** — full-bleed, single-scroll narrative site. Large-scale type as the primary visual element, generous negative space, sections reveal on scroll (fade/rise-in rather than hard cuts), muted restrained palette, minimal persistent nav, unhurried pacing — copy is sparse per section, letting scroll rhythm and typography carry the mood rather than dense text blocks.

**nickdimatteo.com — work section pattern (the one to replicate):**
- A numbered section label (`1_SELECTED_WORK` style — monospace, small, uppercase, muted accent color)
- A vertical list of entries, each row: **Title** (large) + one-line description (small, muted) on the left; **year** + **credit line** ("w/ ...") right-aligned; a hairline divider between rows
- On hover/focus of a row, a **video/media preview overlays the list** — floats above it, positioned near cursor or centered over the list column, swaps instantly as you move between rows, autoplays muted/looped
- Rows are plain until hovered — no thumbnails visible by default, the list reads as clean text until activated
- Small live-status ticker in the nav/header area (they use "currently watching," "on rotation" — playful real-time flavor text)

**How this maps to ZRYA:** the work list becomes ZRYA's **Discography / Releases** or **Visual Work** section — track/video title, one-line description, year, collaborator/credit — hover reveals the music video or visualizer looping over the list.

---

## 3. Site Structure & Copy

### Nav (persistent, minimal)
```
ZRYA
WORK   SOUND   INFO   CONTACT
```
Optional live ticker in header (Sage-East-restrained, not gimmicky):
`NOW MAKING — [current project status]` or leave blank/omit if it reads as too cute for this artist's "elusive" tone.

---

### 0_INTRO / Hero

Full-bleed. Glitch/distortion-in on load. Minimal text over a moody, motion-blurred visual (or looping abstract/cyberpunk cityscape footage).

```
ZRYA
```
(large, glitch-treated wordmark)

Subline (small, appears after a beat):
```
Music that bends reality.
```

Scroll cue: minimal down-arrow or "scroll" in monospace micro-type, bottom of viewport.

---

### 1_INTRO — Statement

Sparse, large type, Sage-East pacing — one to two short lines reveal per scroll step rather than a paragraph block.

```
1_ABOUT

ZRYA makes music at the edge of what's real —
earthy textures pulled into electronic disorder.

Sound as a way to document the inside of a
thought. Discipline, then instinct.

He's not trying to explain it.
He wants you to feel disoriented, then found.
```

(Shorter alt, if the site wants even less text:)
```
1_ABOUT

Music as a tool to simplify what can't be said.
Raw sources, unfiltered, made beautiful.

An exploration of philosophy through sound —
built to unify mind, body, breath.
```

---

### 2_SELECTED_WORK — Discography / Visual Work
**(Direct structural port of nickdimatteo.com's work list + hover-video pattern)**

```
2_SELECTED_WORK
```

List rows — title / one-line description / year / credit, hover triggers looping video/visualizer overlay:

| Title | Description | Year | Credit |
|---|---|---|---|
| Cutputli | Earthy percussion collapsing into distortion | 2025 | w/ Prabhanjan, DOST |
| Boonden | A slow unraveling, built with Varun Dagar | 2024 | w/ Varun Dagar |
| [Add unreleased/next ZRYA original tracks here as they exist] | | | |

> Note: ZRYA's discography as an independent artist is still emerging per the source material — Cutputli and Boonden are the two named ZRYA-credited works found in the resume. Populate additional rows as more ZRYA originals are released. Until then this section can be titled **"Latest"** rather than implying a large back catalog, to stay honest and keep the mystique intact (an Experimentalist archetype benefits from "less, but real" rather than padded).

Each row on hover: video/visualizer loops muted, autoplay, overlaying the list column — matches nickdimatteo.com behavior exactly (swap on row change, no thumbnail state at rest).

---

### 3_SCORE — Film / OTT / Composer Work

Separate from ZRYA's artist releases — this is Mayank's film/TV scoring and production credit list. Same list+hover pattern, or a slightly quieter variant (static year-sorted list, optional trailer embed on hover) so it doesn't visually compete with the ZRYA originals section above it.

```
3_SCORE & PRODUCTION
```

| Project | Role | Year | Studio |
|---|---|---|---|
| The Great Indian Family | Music Producer, BGM | 2023 | YRF |
| Action Hero | Music Producer, Songs | 2022 | T-Series |
| Looop Lapeta | Music Production, Song | 2022 | Zee |
| The Investigator | Music Director | 2022 | Indie |
| Oonch Neech | Music Director | 2021 | Indie |
| Bhram | Music Producer, BGM | 2019 | Zee5 |
| The Zoya Factor | Music Producer, BGM | 2019 | Fox Star |
| Suraj Pe Mangal Bhari | Audio Engineer & Producer, BGM | 2020 | Zee |
| Cheesecake | Music Producer, Songs | 2019 | TVF |

Ad/brand work (optional secondary row group, smaller type):
```
Vicks Anthem (2023) — Ad Jingle
Volkswagen Taigun (2022) — Ad Audio Production
```

---

### 4_PHILOSOPHY (optional deeper section — Sage-East style long-scroll moment)

A slow-reveal, one-line-at-a-time passage — this is the section that carries the "Transcendent" half of the archetype. Use generous vertical space, large type, one line visible/emphasized at a time as user scrolls.

```
4_PHILOSOPHY

Music unifies mind, body, and breath.

Discipline builds the frame.
Intuition finds the shape inside it.

Success isn't the sound of an audience.
It's the quiet after — insecurities removed,
one recording at a time.

This is not performance.
It's liberation, documented.
```

---

### 5_INFO / Credits strip

Understated, monospace, functional — a quiet contrast to the emotional sections around it.

```
5_INFO

ZRYA is the recording name of Mayank Choudhary,
founder of TheM — a music and MusicTech studio
based in Delhi.

Composer & producer for film, OTT, and
independent artists since 2018.
Trained at Berklee College of Music, Boston.

WORKED WITH
Yash Raj Films · T-Series · Zee Studios · ZEE5 ·
MX Player · Hotstar Originals · TVF · Sony Music ·
Vivo · Volkswagen India
```

---

### 6_CONTACT

Minimal, mysterious, no form-heavy UI — matches "elusive but intelligent" personality.

```
6_CONTACT

Reach out.

[email]
[Instagram]
[SoundCloud / streaming link]
```

Footer line (small, bottom):
```
ZRYA © [year] — Delhi
```

---

## 4. Visual & Motion Spec (for the coding handoff)

**Palette**
- Base: near-black / deep charcoal (`#0a0a0c`–`#111114`)
- Secondary (cool): muted purple-grey (`#3a3244`, `#4b3f57`)
- Secondary (warm): dark moss green (`#2b3327`, `#3d4a35`) and burnt orange (`#a8492f`, `#c56a3e`) — used for texture, imagery grading, and select accent moments so the site doesn't read as purely cold/dystopian
- Accent: one glitch-neon pop color used sparingly — magenta or cyan (`#ff2ec4` or `#00e5ff`) — for hover states, dividers-on-hover, the numbered section labels
- Text: off-white (`#e8e6ea`), muted grey for secondary copy (`#8a8790`)

**Typography**
- Display: sleek minimal sans-serif, large scale for hero/section openers (à la Sage East's oversized type-as-visual approach)
- Monospace/mono-condensed for section labels (`0_INTRO`, `2_SELECTED_WORK`), metadata (years, credits) — directly mirrors nickdimatteo.com's mono treatment
- Occasional glitch/distortion text-overlay effect reserved for the hero wordmark only — don't overuse or it cheapens the effect

**Motion**
- Scroll-triggered fade + slight rise-in per section (Sage East pacing — unhurried, generous easing, ~600–900ms, ease-out)
- Work-list rows: instant swap of video preview on hover change (no crossfade delay — matches nickdimatteo.com's snappy responsiveness), video autoplay/muted/loop
- Hover states on list rows: text brightens, hairline divider glows in accent color
- No heavy parallax or 3D — restraint over spectacle, in keeping with "elusive, lets the art speak"

**Layout**
- Full-bleed single-column scroll narrative, generous margins (Sage East)
- Work section breaks the single-column rhythm with a two-zone layout: list left/center, floating preview overlay — exact nickdimatteo.com pattern
- Minimal persistent header/nav, no sticky heavy chrome

**Imagery**
- Moody urban textures balanced with organic/earthy ones — motion blur, fragmented/abstract faces, grain, soil and analog texture alongside the cyberpunk elements, for section backgrounds
- Avoid literal stock-photo "musician in studio" imagery — stays abstract per brand pillars

---

## 5. Open Items / Things to Confirm Before Build

1. **Discography depth:** Only two ZRYA-credited original works are documented (Cutputli, Boonden). Confirm whether more unreleased tracks/visuals exist to populate the work-list section, or whether it should launch smaller ("Latest" framing) and grow.
2. **Video assets:** The hover-preview pattern needs a looping video/visualizer file per work-list row. Confirm what's available (music videos, visualizers, BTS reels) for both the ZRYA section and the Score/Production section.
3. **Live ticker in nav:** Sage East doesn't have one; nickdimatteo.com does (playful, personal). Decide if this fits ZRYA's more "elusive" tone or should be cut.
4. **Contact channels:** confirm which links go in Contact/Info (email, Instagram, SoundCloud/Spotify, etc.) — resume only lists an email.
