# Agentic AI Portfolio Website Redesign Spec

## Goal

Redesign Davin Harding's professional portfolio so the experience itself demonstrates agentic AI product judgment. The site should remain a fast, crawlable, recruiter-friendly portfolio while adding an optional agentic front door that can tailor a grounded brief for each visitor.

The agentic layer must prove skill through the interface: intake, persona routing, retrieval over approved materials, structured generation, citations, and clear next actions. It should never hide basic professional information behind a chat gate.

## Approved Public And Professional Knowledge Sources

Only these source classes are approved for the public agentic portfolio knowledge base:

- Public website copy from Harding Labs, Davin's portfolio, StageSnap, and other shipped product pages.
- Public project descriptions, case studies, screenshots, demo videos, and launch notes approved for external use.
- Resume content, professional bio, role positioning, skills, work history, education, and public contact links.
- Public writing, posts, interviews, talks, GitHub profiles, product documentation, and other externally published material.
- Curated professional summaries written specifically for this portfolio, including verified project outcomes and constraints.
- Approved media assets, such as product screenshots, before/after examples, headshots, logos, and diagrams with rights to publish.

Excluded by default:

- Raw personal notes, private voice note transcripts, private Telegram/Discord/Slack messages, internal Mission Control tasks, and internal KB material.
- Customer, partner, investor, or user data unless already public and explicitly approved for reuse.
- Credentials, tokens, private repository contents, private product roadmaps, unpublished financial data, legal documents, and operational incident notes.
- Any generated claim that cannot be traced to an approved source.

Every generated brief should retain source pointers at the block level, such as "Resume", "StageSnap public page", "Case study: StageSnap launch", or "Public writing".

## Static Recruiter-Friendly Fallback

The default site must work without JavaScript personalization, model access, cookies, or visitor input. It should be usable in under one minute by a recruiter or hiring manager.

Required static sections:

- Hero: Davin Harding as an AI product engineer and agentic systems builder, with a direct professional positioning statement.
- Snapshot: current role, focus areas, strongest skills, and contact links.
- Work: selected projects and products, led by StageSnap and Harding Labs.
- Case studies: short, scannable project cards with problem, role, stack, outcome, and link.
- Resume: downloadable or web-readable professional history.
- Contact: email or public contact path, LinkedIn/GitHub where appropriate.

Static fallback rules:

- No chatbot wall before core content.
- No unverified superlatives or inflated metrics.
- No dependency on an LLM for navigation.
- Clear distinction between shipped work, prototypes, concepts, and work in progress.

## Agentic Experience

The agentic front door starts with a lightweight intake:

> Tell me who you are and what you are trying to evaluate.

Example visitor intents:

- Recruiter evaluating fit for an AI engineering role.
- Hiring manager assessing full-stack and product execution.
- Founder looking for an AI product collaborator.
- Marketing partner reviewing product taste and launch ability.
- Investor/customer exploring Harding Labs products.

### Persona Routing

The router should classify the visitor into one primary persona and optional secondary intents:

- `recruiter`: wants quick proof of role fit, resume, skills, recent work, and contact.
- `hiring_manager`: wants architecture judgment, implementation depth, tradeoffs, and delivery evidence.
- `founder_partner`: wants product thinking, collaboration fit, speed, scope, and examples of launch execution.
- `product_customer`: wants Harding Labs and StageSnap context, value proposition, and links to product pages.
- `technical_peer`: wants systems design, agent workflows, retrieval, tooling, and code-facing evidence.

Routing output should include:

- Persona label.
- Confidence.
- Visitor goal summary.
- Retrieval query plan.
- Brief template selection.
- Privacy mode and source limits.

### Generated Canvas And Report

The first generated artifact should be a structured canvas, not an open-ended chat answer. Recommended blocks:

- Visitor goal.
- Davin fit summary.
- Most relevant proof points.
- Featured projects or case studies.
- Technical depth notes.
- Product and UX judgment notes.
- Suggested next steps.
- Sources used.
- Boundaries and unknowns.

Each block should be grounded in approved source snippets. If the source set cannot support a claim, the canvas should say what is unknown instead of filling the gap.

Follow-up Q&A can sit beside the canvas, but it should answer from the same approved knowledge base and cite source labels.

## Privacy Boundaries

The public portfolio agent must treat the approved knowledge base as a publication boundary.

Hard rules:

- Do not expose private KB files, raw personal notes, private messages, internal tasks, or internal product strategy.
- Do not reveal unpublished product plans, customer details, financials, access tokens, internal URLs, or private operational details.
- Do not infer sensitive personal attributes or personalize based on visitor identity beyond the text the visitor voluntarily provides.
- Do not store visitor messages unless the site presents an explicit retention notice.
- Do not use visitor input to enrich Davin's public knowledge base without review.
- Do not make factual career, revenue, customer, or performance claims without approved source support.

Recommended implementation controls:

- Build an allowlisted content index rather than crawling personal storage.
- Store source metadata with each chunk.
- Add generation instructions that require source labels and uncertainty language.
- Log only minimal operational telemetry by default.
- Add a review workflow before new sources become public-agent accessible.

## Build Plan And Prototype Scope

### Phase 1: Static Spec Prototype

- Add this spec to the repository.
- Add a homepage section that previews the agentic portfolio concept without requiring live AI.
- Show static persona chips, source policy, canvas blocks, and privacy boundaries.
- Keep the existing Harding Labs landing page buildable.

### Phase 2: Content Model

- Create an `approved-sources` content directory or CMS collection.
- Define source metadata: title, source type, visibility, owner, approved date, citation label, URL/path.
- Draft the first recruiter-facing and hiring-manager-facing fallback briefs.

### Phase 3: Agent Harness

- Add intake form and deterministic persona routing.
- Retrieve from the approved source index.
- Generate a structured canvas with source labels.
- Provide a static fallback canvas if model calls fail.

### Phase 4: Review And Launch

- Review all indexed sources for privacy and factual accuracy.
- Run accessibility, mobile layout, and performance checks.
- Add a visible "generated from approved portfolio sources" note.
- Launch behind a feature flag or prototype route before making it the default front door.

Prototype non-goals:

- No private KB ingestion.
- No autonomous outreach.
- No unverifiable career claims.
- No visitor account system.
- No persistent personalization until retention and privacy language are ready.
