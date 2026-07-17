<script setup lang="ts">
import { AkCard } from '@akoma'

const pillars = [
  {
    title: 'Human first',
    body:
      'Interfaces should feel like they were made for people, not for demos. Calm, proximity, clarity, and trust come before visual novelty.',
  },
  {
    title: 'Rhythm over decoration',
    body:
      'Hierarchy is built with spacing, type scale, and surface tone — not with heavy borders, dense grids, or loud contrast for its own sake.',
  },
  {
    title: 'Warm, never cold',
    body:
      'Neutrals stay mineral and natural. Accents are botanical, not neon. Even serious products should feel approachable, not clinical.',
  },
  {
    title: 'One family, two expressions',
    body:
      'App and Site moods share components and anatomy. Only tokens change — so teams do not maintain two design systems.',
  },
]

const avoid = [
  'Engineering-first aesthetics (Linear, Vercel, Cursor, OpenAI-style cold UI)',
  'Hard borders as the primary way to separate content',
  'Decorative motion without purpose',
  'Hardcoded hex values when a token exists',
  'Childish or overly playful UI in finance and operations contexts',
  'Replacing business logic during visual refactors',
]

const decisions = [
  {
    topic: 'Typography',
    choice: 'DM Sans as the primary voice; Lora optional for editorial moments',
    why: 'Readable, humanist sans with quiet personality. Avoids both corporate stiffness and overly rounded “cute” type.',
    rejected: 'Display serifs everywhere; geometric sans that feels technical',
  },
  {
    topic: 'Color',
    choice: 'App → soft violet accent on warm stone; Site → evergreen on mineral white',
    why: 'App feels tactile and optimistic. Site feels composed and trustworthy for finance and B2B.',
    rejected: 'Single coral/orange accent for everything; cold blue-gray SaaS palette',
  },
  {
    topic: 'Surfaces',
    choice: 'Elevation through background steps + soft shadow; borders only when they clarify behavior',
    why: 'Creates breathable layouts. Site mood uses subtle borders on inputs and cards for precision.',
    rejected: 'Flat UI with 1px borders everywhere; glassmorphism as default',
  },
  {
    topic: 'Radius',
    choice: 'App: generous pills and cards; Site: controlled 8–16px radii',
    why: 'Shape communicates mood without changing component APIs.',
    rejected: 'Identical radius in both moods; sharp 0px “enterprise” corners',
  },
  {
    topic: 'Motion',
    choice: 'Short, purposeful transitions; reveal on entry; tap-scale on controls',
    why: 'Feedback should feel tactile, not theatrical. Always respect prefers-reduced-motion.',
    rejected: 'Bouncy animations on every element; parallax and heavy page transitions',
  },
  {
    topic: 'Forms',
    choice: 'Sentence-case labels; filled fields in App; bordered fields in Site',
    why: 'Friendly in consumer apps, precise in data-heavy flows. Errors stay soft but visible.',
    rejected: 'Uppercase micro-labels; borderless inputs with no focus ring',
  },
  {
    topic: 'API surface',
    choice: 'Vue 3 Composition API + TypeScript; props in English; CSS variables, no Tailwind',
    why: 'Portable across apps, easy to theme via tokens, predictable for npm consumers.',
    rejected: 'Utility-class coupling; prop names mixed with product copy language',
  },
]

const moodGuide = [
  {
    mood: 'App',
    activate: 'Default — no attribute needed',
    useWhen: 'Daily-use products, personal tools, creative apps, mobile-first PWAs',
    character: 'Tactile, optimistic, relaxed',
    accent: 'Soft violet',
    shape: 'Pill buttons, round chips, 24px cards',
  },
  {
    mood: 'Site',
    activate: '<html data-mood="site">',
    useWhen: 'Finance, operations, dashboards, marketing sites that must feel credible',
    character: 'Composed, precise, trustworthy',
    accent: 'Evergreen',
    shape: '10px controls, bordered fields, structured cards',
  },
]

const implementationChecklist = [
  'Install @rafael_dias/akoma and import style.css once at the app entry',
  'Pick mood at the root: App for products, Site for finance/B2B',
  'Map existing buttons, inputs, cards, badges, and chips to Akoma components',
  'Replace loose hex/radius/shadow with tokens (--bg, --accent, --space-*, etc.)',
  'Use AkEmptyState and AkShimmer instead of one-off empty/loading UI',
  'Use .numeric (tabular-nums) for financial figures',
  'Keep domain colors as --cat-1 … --cat-6 aliases in the app :root if needed',
  'Do not refactor stores, routes, or API calls during a UI-only migration',
]
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Foundation</span>
    <h1 class="page-title">Philosophy</h1>
    <p class="docs-lead">
      Why Akoma looks the way it does — and how to apply it consistently when
      refactoring or building new screens. Share this page with anyone implementing
      the system in a product.
    </p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">North star</h2>
    <AkCard padding="lg" class="docs-philosophy-quote">
      <p>
        Software for real life should feel <strong>clear enough to trust</strong> and
        <strong>warm enough to return to</strong>. Akoma exists so product teams can
        ship both — without choosing between “friendly” and “professional.”
      </p>
    </AkCard>
  </section>

  <section class="docs-section reveal reveal-d2">
    <h2 class="docs-section__title">Pillars</h2>
    <div class="docs-principle-grid">
      <AkCard v-for="item in pillars" :key="item.title" padding="lg">
        <h3>{{ item.title }}</h3>
        <p>{{ item.body }}</p>
      </AkCard>
    </div>
  </section>

  <section class="docs-section reveal reveal-d3">
    <h2 class="docs-section__title">What we avoid</h2>
    <p class="docs-section__desc">
      Useful when reviewing PRs or deciding whether a screen still belongs to the family.
    </p>
    <ul class="docs-avoid-list">
      <li v-for="item in avoid" :key="item">{{ item }}</li>
    </ul>
  </section>

  <section class="docs-section reveal reveal-d4">
    <h2 class="docs-section__title">App vs Site</h2>
    <p class="docs-section__desc">
      Same components. Different tokens. Choose once per product (or per section via
      <code>data-mood</code> on a wrapper).
    </p>
    <div class="docs-table-wrap">
      <table class="docs-table docs-table--philosophy">
        <thead>
          <tr>
            <th>Mood</th>
            <th>Activate</th>
            <th>Use when</th>
            <th>Character</th>
            <th>Accent</th>
            <th>Shape</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in moodGuide" :key="row.mood">
            <td><strong>{{ row.mood }}</strong></td>
            <td><code>{{ row.activate }}</code></td>
            <td>{{ row.useWhen }}</td>
            <td>{{ row.character }}</td>
            <td>{{ row.accent }}</td>
            <td>{{ row.shape }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="docs-section reveal reveal-d5">
    <h2 class="docs-section__title">Design decisions</h2>
    <p class="docs-section__desc">
      Record of intentional choices. When in doubt, prefer the decision and rationale
      below over improvising new patterns.
    </p>
    <div class="docs-decision-list">
      <AkCard
        v-for="item in decisions"
        :key="item.topic"
        padding="lg"
        class="docs-decision"
      >
        <span class="docs-decision__topic">{{ item.topic }}</span>
        <h3>{{ item.choice }}</h3>
        <dl class="docs-decision__meta">
          <div>
            <dt>Why</dt>
            <dd>{{ item.why }}</dd>
          </div>
          <div>
            <dt>We rejected</dt>
            <dd>{{ item.rejected }}</dd>
          </div>
        </dl>
      </AkCard>
    </div>
  </section>

  <section class="docs-section reveal reveal-d6">
    <h2 class="docs-section__title">Implementation checklist</h2>
    <p class="docs-section__desc">
      Copy into PR descriptions or agent prompts when migrating an existing app to Akoma.
    </p>
    <ol class="docs-checklist">
      <li v-for="(step, index) in implementationChecklist" :key="step">
        <span class="docs-checklist__num">{{ index + 1 }}</span>
        <span>{{ step }}</span>
      </li>
    </ol>
    <pre class="docs-code">// Root setup (example: finance app)
document.documentElement.dataset.mood = 'site'

import { createApp } from 'vue'
import { Akoma } from '@rafael_dias/akoma'
import '@rafael_dias/akoma/style.css'

createApp(App).use(Akoma).mount('#app')</pre>
  </section>

  <section class="docs-section reveal reveal-d7">
    <h2 class="docs-section__title">References (inspiration, not imitation)</h2>
    <p class="docs-section__desc">
      Akoma draws from products that balance warmth and professionalism. We take
      principles — not pixels — from:
    </p>
    <div class="docs-reference-grid">
      <AkCard padding="md">
        <h3>Warm &amp; human</h3>
        <p>Headspace, old Dovetail, Canva, Mailchimp, Zendesk Garden</p>
      </AkCard>
      <AkCard padding="md">
        <h3>Trust &amp; clarity</h3>
        <p>Asana, old Help Scout, finance-friendly B2B surfaces</p>
      </AkCard>
    </div>
  </section>
</template>

<style scoped>
.docs-philosophy-quote p {
  font-size: 17px;
  line-height: 1.65;
  color: var(--text-secondary);
}

.docs-philosophy-quote strong {
  color: var(--text);
  font-weight: 650;
}

.docs-principle-grid h3,
.docs-decision h3,
.docs-reference-grid h3 {
  margin-bottom: var(--space-2);
  font-size: 17px;
  font-weight: 650;
  letter-spacing: -0.02em;
}

.docs-principle-grid p,
.docs-reference-grid p {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-secondary);
}

.docs-avoid-list {
  display: grid;
  gap: var(--space-2);
  padding: var(--space-5);
  list-style: none;
  background: var(--bg-soft);
  border-radius: var(--card-radius);
}

.docs-avoid-list li {
  position: relative;
  padding-left: 18px;
  font-size: 14px;
  line-height: 1.55;
  color: var(--text-secondary);
}

.docs-avoid-list li::before {
  content: '×';
  position: absolute;
  left: 0;
  color: var(--danger);
  font-weight: 700;
}

.docs-table-wrap {
  overflow-x: auto;
}

.docs-table--philosophy code {
  font-size: 11px;
  white-space: nowrap;
}

.docs-decision-list {
  display: grid;
  gap: var(--space-4);
}

.docs-decision__topic {
  display: block;
  margin-bottom: var(--space-2);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
}

.docs-decision__meta {
  display: grid;
  gap: var(--space-3);
  margin-top: var(--space-4);
}

.docs-decision__meta dt {
  margin-bottom: 4px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-tertiary);
}

.docs-decision__meta dd {
  font-size: 14px;
  line-height: 1.55;
  color: var(--text-secondary);
}

.docs-checklist {
  display: grid;
  gap: var(--space-3);
  margin-bottom: var(--space-5);
  padding: 0;
  list-style: none;
}

.docs-checklist li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: 14px;
  line-height: 1.55;
  color: var(--text-secondary);
}

.docs-checklist__num {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  border-radius: var(--radius-full);
  background: var(--accent-soft);
  color: var(--accent);
  font-size: 12px;
  font-weight: 700;
}

.docs-reference-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-4);
}

@media (max-width: 720px) {
  .docs-reference-grid {
    grid-template-columns: 1fr;
  }
}
</style>
