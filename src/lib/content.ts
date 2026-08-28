/**
 * Bilingual site content.
 *
 * `en` is the source of truth, transcribed verbatim from the original pages.
 * `fr` is its translation and must mirror the shape exactly — the `satisfies`
 * check below fails the build if a key is missing or misspelled on either side.
 *
 * Brand and technical terms (ADNC Group, DevOps, SRE, CI/CD, React, iOS…) are
 * deliberately left untranslated: they are the established usage in French
 * professional writing.
 */

const en = {
  nav: {
    services: "Services",
    process: "Process",
    about: "About",
    contact: "Contact",
    ctaDev: "Start a project",
    ctaConsulting: "Book consultation",
    menu: "Menu",
  },
  modeSwitch: {
    label: "Site mode",
    dev: "Development",
    consulting: "Consulting",
  },
  whatsapp: {
    label: "Chat on WhatsApp",
    aria: "Chat with ADNC Group on WhatsApp",
    message: "Hi ADNC Group, I have a project we need to discuss.",
  },
  footer: {
    blurb:
      "We specialize in complex systems and complex applications. We build them, bring you the business, and support them for the long run. We may even invest in you.",
    studio: "Studio",
    contact: "Contact",
    availability: "Available worldwide · HQ Casablanca, Morocco",
    cta: "Start a project →",
    rights: "All rights reserved.",
  },
  home: {
    seoTitle: "ADNC Group | Engineering & Consulting for complex digital systems",
    seoDescription:
      "ADNC Group designs, engineers, and scales complex web and mobile applications — and provides strategic consulting in digital transformation, infrastructure, BI and finance.",
    ogTitle: "ADNC Group — Engineering & Consulting",
    ogDescription: "Two pillars, one partner: product engineering and strategic consulting.",
    dev: {
      hero1: "We build.",
      hero2: "We operate.",
      heroPrefix: "We",
      heroWords: ["scale.", "deploy.", "engineer."],
      intro:
        "ADNC Group is an engineering partner for complex software. We architect, engineer, harden, and deploy production-grade web and mobile platforms across the full stack: distributed backends, native iOS and Android, real-time infrastructure, applied AI, cloud DevOps, and security at every layer.",
      ctaPrimary: "Start a project →",
      ctaSecondary: "See what we build",
      splitTitle: "One partner.",
      splitTitleAccent: "Full stack.",
      buildTitle: "Engineer.",
      buildBody:
        "We design, architect and ship complex web and mobile applications — across the full stack. Native iOS & Android, distributed backends, real-time systems and applied AI, all the way to production.",
      buildItems: [
        "Product strategy & discovery",
        "Web platforms (React, Next, TanStack)",
        "Native iOS & Android",
        "Realtime backends & APIs",
        "Applied AI & data",
      ],
      opsTitle: "Operate.",
      opsBody:
        "Then we run them. DevOps and scaling, cloud infrastructure, SRE and on-call engineering. We keep your platform fast, resilient and secure at every scale.",
      opsItems: [
        "DevOps, SRE & cloud operations",
        "CI/CD pipelines",
        "Observability & monitoring",
        "Auto-scaling & cost optimization",
        "Security & compliance",
      ],
      capabilitiesTitle: "Engineering & cloud operations —",
      capabilitiesAccent: "under one roof.",
      methodTitle: "From a first call to a platform in production — and beyond.",
      ctaTitle: "Got something",
      ctaAccent: "complex?",
      ctaBody:
        "Share your objectives with our team. We respond with a senior point of view, a clear path forward and the team that would build it.",
      ctaButton: "Start a project →",
      manifesto: [
        "We design",
        "We engineer",
        "We deploy",
        "We scale",
        "We optimize",
        "We secure",
        "We own the outcome",
      ],
      ticker: [
        "Web apps",
        "iOS",
        "Android",
        "DevOps & scaling",
        "Cloud ops",
        "Applied AI",
        "Full stack",
        "Real-time",
      ],
      services: [
        {
          n: "01",
          t: "Web & mobile product engineering",
          d: "From architecture to App Store. We build production-grade web platforms and native iOS & Android apps — full stack, with distributed backends, real-time infrastructure and applied AI.",
        },
        {
          n: "02",
          t: "DevOps, scaling & cloud operations",
          d: "Production infrastructure, CI/CD, observability and on-call engineering. We keep your platform fast, resilient and ready for the next order of magnitude.",
        },
      ],
      method: [
        {
          n: "01",
          t: "Discover",
          d: "We map your business, your users and the technical constraints. We come back with a sharp brief, a senior team and a clear path to production.",
        },
        {
          n: "02",
          t: "Design & engineer",
          d: "Senior product, design and engineering teams ship in tight loops. Real software, in real environments, every week.",
        },
        {
          n: "03",
          t: "Launch & scale",
          d: "We harden the platform, set up DevOps, monitoring and on-call. The product goes live ready for the next order of magnitude.",
        },
        {
          n: "04",
          t: "Iterate & evolve",
          d: "Continuous product evolution — performance optimization, feature expansion, and platform modernization driven by real usage data.",
        },
      ],
    },
    consulting: {
      hero1: "We advise.",
      hero2: "We transform.",
      heroPrefix: "We",
      heroWords: ["strategize.", "optimize.", "deliver."],
      intro:
        "ADNC Group is a strategic consulting partner for ambitious organizations. We guide digital transformation, architect cloud infrastructure, build data-driven decision systems, and provide financial and technology advisory that turns complexity into competitive advantage.",
      ctaPrimary: "Request a consultation →",
      ctaSecondary: "See our expertise",
      splitTitle: "One partner.",
      splitTitleAccent: "Complete clarity.",
      strategyTitle: "Strategy.",
      strategyBody:
        "We assess, strategize, and design transformation roadmaps — digital strategy, technology advisory, and organizational change management.",
      strategyItems: [
        "Digital transformation strategy",
        "Technology audit & advisory",
        "Change management",
        "Cloud migration planning",
        "Data strategy",
      ],
      executionTitle: "Execution.",
      executionBody:
        "Then we deliver. BI dashboards, financial models, infrastructure roadmaps, and measurable outcomes. Advisory that translates into real results.",
      executionItems: [
        "Business intelligence & dashboards",
        "Financial modeling & audits",
        "Infrastructure architecture",
        "Performance tracking & KPIs",
        "ROI-driven recommendations",
      ],
      capabilitiesTitle: "Strategy, data & transformation —",
      capabilitiesAccent: "end to end.",
      methodTitle: "From diagnostic to measurable transformation — and beyond.",
      ctaTitle: "Need strategic",
      ctaAccent: "clarity?",
      ctaBody:
        "Share your challenges with our team. We respond with a senior diagnostic, a strategic roadmap, and the expertise to make it happen.",
      ctaButton: "Book a consultation →",
      manifesto: [
        "We advise",
        "We strategize",
        "We transform",
        "We optimize",
        "We audit",
        "We plan",
        "We deliver clarity",
      ],
      ticker: [
        "Digital transformation",
        "Tech advisory",
        "Cloud strategy",
        "BI & Data",
        "Financial counsel",
        "Change management",
        "Architecture",
        "Roadmapping",
      ],
      services: [
        {
          n: "01",
          t: "Digital transformation",
          d: "End-to-end digital strategy: we audit your current systems, design the target architecture, and lead the organizational change management that makes transformation stick.",
        },
        {
          n: "02",
          t: "Technology advisory",
          d: "Independent technology audits, architecture reviews, and strategic roadmapping. We help you make the right technology bets — from stack selection to build-vs-buy decisions.",
        },
        {
          n: "03",
          t: "Infrastructure & cloud",
          d: "Cloud migration strategy, hybrid architecture design, and infrastructure modernization. We plan and oversee the transition to scalable, secure, cost-efficient environments.",
        },
        {
          n: "04",
          t: "Business intelligence & data",
          d: "Data strategy, BI architecture, dashboards and analytics. We help you build the decision-making infrastructure that turns raw data into competitive advantage.",
        },
        {
          n: "05",
          t: "Financial advisory",
          d: "Financial modeling, business plans, fundraising strategy, and operational audits. Strategic financial counsel for tech-driven businesses at every stage.",
        },
      ],
      method: [
        {
          n: "01",
          t: "Assess",
          d: "Deep dive into your organization, systems, and objectives. We deliver a comprehensive diagnostic with clear findings and prioritized opportunities.",
        },
        {
          n: "02",
          t: "Strategize",
          d: "We design a tailored roadmap — technology choices, organizational changes, timelines, and investment priorities aligned with your business goals.",
        },
        {
          n: "03",
          t: "Execute",
          d: "Hands-on advisory through implementation. We embed with your teams to ensure the strategy translates into measurable outcomes.",
        },
        {
          n: "04",
          t: "Measure & refine",
          d: "Continuous performance tracking, KPI monitoring, and strategic refinement. We ensure every initiative delivers tangible ROI.",
        },
      ],
    },
    viewAllServices: "View all services →",
  },
  services: {
    seoTitle: "Services | ADNC Group",
    seoDescription:
      "Web & mobile engineering, DevOps & scaling — production-grade software engineering and cloud operations.",
    ogTitle: "Services — ADNC Group",
    ogDescription: "Engineering and cloud operations for complex web and mobile applications.",
    title: "Engineering & cloud operations,",
    titleAccent: "under one roof.",
    intro:
      "ADNC Group delivers senior product engineering and cloud operations — from complex web and mobile platforms to production-grade DevOps, scaling, and infrastructure management.",
    serviceLabel: "Service",
    groups: [
      {
        n: "01",
        title: "Web & Mobile Engineering",
        items: [
          "Complex web platforms (React, Next, TanStack)",
          "Native iOS (Swift, SwiftUI)",
          "Native Android (Kotlin, Compose)",
          "React Native & Flutter",
          "Performance, security & release engineering",
        ],
      },
      {
        n: "02",
        title: "DevOps, Scaling & Cloud Ops",
        items: [
          "Production infrastructure & CI/CD",
          "Observability & SRE practices",
          "Auto-scaling & cost optimization",
          "Incident response & on-call",
          "Security & compliance",
        ],
      },
    ],
    engagementTitle: "Engagement models built for ambition.",
    engagementModels: ["Build with us", "Build & operate", "Operate & grow existing apps"],
    cta: "Discuss your project →",
  },
  portfolio: {
    seoTitle: "How we work | ADNC Group",
    seoDescription:
      "Two paths into the studio: founders building from an idea, and established companies shipping something serious. Clarity from day one, signed scope, real work on schedule.",
    ogTitle: "How we work — ADNC Group",
    ogDescription: "Two engagement tracks. One studio. One standard.",
    title: "Two paths",
    titleAccent: "into the studio.",
    intro:
      "ADNC Group works with two distinct kinds of partners: independent founders building from an idea, and established companies looking to ship or operate something serious. The engagement model is different for each, by design. Both are built around the same principle: clarity from day one, signed scope, and real work delivered on schedule.",
    trackATitle: "Founders & independent operators.",
    trackASubtitle: "For individuals bringing an idea to the studio.",
    phaseLabel: "Phase",
    phases: [
      {
        n: "01",
        t: "Idea submission",
        meta: "",
        d: "You bring the idea. No NDA theatre, no pitch deck requirement. A working session, a whiteboard, and an honest conversation about what you want to build and why it matters.",
      },
      {
        n: "02",
        t: "Feasibility study",
        meta: "One month · MAD 21,500 (excl. VAT)",
        d: "We commit one full month to a structured feasibility study. Market sizing, technical scoping, regulatory and compliance review, cost modeling, competitive landscape, and risk assessment. At the end of the month, you receive a written report and a clear recommendation: green light, amber with conditions, or red. The entry fee covers the senior engineering and strategy time required, and is non-refundable.",
      },
      {
        n: "03",
        t: "Terms and scope",
        meta: "",
        d: "If the project is greenlit on both sides, we negotiate the engagement: scope, fee or equity structure, milestones, IP terms, and exit clauses. Nothing moves into build until the contract is signed.",
      },
      {
        n: "04",
        t: "Roadmap and prototyping",
        meta: "One month",
        d: "We take one additional month to deliver the technical roadmap, a working prototype, and the dedicated team. Targeted hiring, if the role profile requires it, happens here against specifications defined jointly.",
      },
      {
        n: "05",
        t: "Production",
        meta: "",
        d: "The product enters active development. From this point forward, you work alongside the team allocated to your project, with full operational support from the studio.",
      },
    ],
    founderTitle: "A real seat inside the studio.",
    founderGets: [
      {
        t: "Dedicated resources",
        d: "A defined allocation of human and technical resources ringfenced for your project: engineers, designers, support staff, and infrastructure. The allocation is contractual, not best-effort.",
      },
      {
        t: "Daily access to the team",
        d: "Two fixed meeting windows every working day, 08:00 to 09:00 and 17:00 to 18:00. You can request a session with any team member assigned to your project: lead engineer, designer, support manager, growth lead. Availability is guaranteed inside these windows.",
      },
      {
        t: "Strategic authority",
        d: "You retain full authority to propose new directions and set the product vision. ADNC Group operates as the execution partner, not the decision-maker.",
      },
      {
        t: "Scope evolution",
        d: "The base engagement covers the scope defined at signature. Any new feature, redirection, or marketing-driven addition that materially extends the timeline or workload is costed and quoted separately, with a transparent change order before any work begins.",
      },
    ],
    trackBTitle: "Established",
    trackBTitleAccent: "companies.",
    trackBSubtitle:
      "For organizations with an existing structure, internal teams, and a formal decision-making process.",
    trackBPoints: [
      {
        t: "Engagement model",
        d: "We integrate directly with your existing stakeholders. No private offices, no founder-style onboarding. The studio plugs into your organization and executes against a defined brief, with senior project leadership on our side and a clear single point of contact on yours.",
      },
      {
        t: "Meeting cadence",
        d: "Working sessions are conducted in person, either at your offices or at ours, within two fixed daily windows: 08:00 to 09:00 and 17:00 to 18:00. This rhythm enforces fast decisions and eliminates the meeting drift that delays most enterprise projects.",
      },
      {
        t: "Process",
        d: "Feasibility, roadmap, production, and operations follow the same standards as Track A, adapted to your governance, procurement, and compliance requirements. Pricing, timelines, and team composition are negotiated against your specific brief.",
      },
    ],
    closingTitle: "One studio,",
    closingAccent: "one standard.",
    closingBody:
      "Whichever track applies to you, the underlying engineering, operations, and quality standards do not change. The framework adapts. The work does not.",
    cta: "Start a project →",
  },
  about: {
    seoTitle: "About | ADNC Group",
    seoDescription:
      "ADNC Group is a senior mobile product studio. Meet the team and our principles.",
    ogTitle: "About — ADNC Group",
    ogDescription: "Senior mobile product studio.",
    title: "Two sides of the same business: we build apps, and we run them.",
    intro:
      "ADNC Group was founded to be the partner we always wanted: one team that designs and engineers complex web & mobile applications, and that operates them in production — DevOps, scaling, an internalized customer support and call center, and a B2B growth arm to bring in clients.",
    principlesTitle: "Principles",
    principles: [
      {
        t: "Build & operate",
        d: "We don't just ship code — we run the platforms we build, with our own DevOps, support and growth teams.",
      },
      {
        t: "Senior by default",
        d: "Every engagement staffed with senior engineers, operators and account leads. No bait-and-switch.",
      },
      {
        t: "Internalized, not outsourced",
        d: "Our customer support and call center are in-house — directly wired into the product team.",
      },
      {
        t: "Own the outcome",
        d: "We measure ourselves on uptime, NPS, retention and B2B pipeline — not just shipped features.",
      },
    ],
    ctaTitle: "Want to know if we're the right partner?",
    cta: "Get in touch →",
  },
  contact: {
    seoTitle: "Contact | ADNC Group",
    seoDescription: "Tell us about your mobile project. We reply within one business day.",
    ogTitle: "Contact — ADNC Group",
    ogDescription: "Talk to our team.",
    title: "Let's build something worth opening every day.",
    intro:
      "Share a few details and the right person on our team will reply within one business day.",
    availability: "Available worldwide · HQ Casablanca, Morocco",
    fieldName: "Your name",
    fieldEmail: "Email",
    fieldPhone: "Phone (optional)",
    fieldCompany: "Company (optional)",
    fieldProject: "Project",
    submit: "Send message →",
    sending: "Sending…",
    sentTitle: "Message received.",
    sentBody: "We'll be in touch shortly.",
    errorGeneric: "We couldn't send your message. Please try again in a moment.",
  },
  errors: {
    notFoundTitle: "Page not found",
    notFoundBody: "The page you're looking for doesn't exist or has been moved.",
    goHome: "Go home",
    errorTitle: "This page didn't load",
    errorBody: "Something went wrong on our end. You can try refreshing or head back home.",
    tryAgain: "Try again",
  },
};

export type Dictionary = typeof en;

const fr = {
  nav: {
    services: "Services",
    process: "Méthode",
    about: "À propos",
    contact: "Contact",
    ctaDev: "Démarrer un projet",
    ctaConsulting: "Prendre rendez-vous",
    menu: "Menu",
  },
  modeSwitch: {
    label: "Mode du site",
    dev: "Développement",
    consulting: "Conseil",
  },
  whatsapp: {
    label: "Discuter sur WhatsApp",
    aria: "Discuter avec ADNC Group sur WhatsApp",
    message: "Bonjour ADNC Group, j'ai un projet dont j'aimerais discuter avec vous.",
  },
  footer: {
    blurb:
      "Nous sommes spécialisés dans les systèmes et les applications complexes. Nous les construisons, nous vous apportons les clients, et nous les exploitons sur la durée. Il nous arrive même d'investir à vos côtés.",
    studio: "Studio",
    contact: "Contact",
    availability: "Disponibles dans le monde entier · Siège à Casablanca, Maroc",
    cta: "Démarrer un projet →",
    rights: "Tous droits réservés.",
  },
  home: {
    seoTitle: "ADNC Group | Ingénierie et conseil pour systèmes numériques complexes",
    seoDescription:
      "ADNC Group conçoit, développe et fait passer à l'échelle des applications web et mobiles complexes — et accompagne la transformation digitale, l'infrastructure, la BI et la finance.",
    ogTitle: "ADNC Group — Ingénierie et conseil",
    ogDescription: "Deux piliers, un seul partenaire : ingénierie produit et conseil stratégique.",
    dev: {
      hero1: "Nous construisons.",
      hero2: "Nous exploitons.",
      heroPrefix: "Nous",
      heroWords: ["passons à l'échelle.", "déployons.", "concevons."],
      intro:
        "ADNC Group est un partenaire d'ingénierie pour les logiciels complexes. Nous architecturons, développons, sécurisons et déployons des plateformes web et mobiles de niveau production sur l'ensemble de la chaîne : back-ends distribués, applications natives iOS et Android, infrastructure temps réel, IA appliquée, DevOps cloud et sécurité à chaque couche.",
      ctaPrimary: "Démarrer un projet →",
      ctaSecondary: "Voir ce que nous construisons",
      splitTitle: "Un seul partenaire.",
      splitTitleAccent: "Toute la chaîne.",
      buildTitle: "Concevoir.",
      buildBody:
        "Nous concevons, architecturons et livrons des applications web et mobiles complexes — sur toute la chaîne. Applications natives iOS et Android, back-ends distribués, systèmes temps réel et IA appliquée, jusqu'à la mise en production.",
      buildItems: [
        "Stratégie produit et cadrage",
        "Plateformes web (React, Next, TanStack)",
        "Applications natives iOS et Android",
        "Back-ends temps réel et API",
        "IA appliquée et data",
      ],
      opsTitle: "Exploiter.",
      opsBody:
        "Ensuite, nous les faisons tourner. DevOps et montée en charge, infrastructure cloud, SRE et astreinte technique. Nous gardons votre plateforme rapide, résiliente et sécurisée à toutes les échelles.",
      opsItems: [
        "DevOps, SRE et exploitation cloud",
        "Pipelines CI/CD",
        "Observabilité et supervision",
        "Mise à l'échelle automatique et optimisation des coûts",
        "Sécurité et conformité",
      ],
      capabilitiesTitle: "Ingénierie et exploitation cloud —",
      capabilitiesAccent: "sous un même toit.",
      methodTitle: "Du premier échange à une plateforme en production — et bien après.",
      ctaTitle: "Un sujet",
      ctaAccent: "complexe ?",
      ctaBody:
        "Exposez vos objectifs à notre équipe. Nous répondons avec un point de vue senior, une trajectoire claire et l'équipe qui la mettra en œuvre.",
      ctaButton: "Démarrer un projet →",
      manifesto: [
        "Nous concevons",
        "Nous développons",
        "Nous déployons",
        "Nous passons à l'échelle",
        "Nous optimisons",
        "Nous sécurisons",
        "Nous assumons le résultat",
      ],
      ticker: [
        "Applications web",
        "iOS",
        "Android",
        "DevOps et scalabilité",
        "Exploitation cloud",
        "IA appliquée",
        "Full stack",
        "Temps réel",
      ],
      services: [
        {
          n: "01",
          t: "Ingénierie produit web et mobile",
          d: "De l'architecture à l'App Store. Nous construisons des plateformes web de niveau production et des applications natives iOS et Android — sur toute la chaîne, avec des back-ends distribués, une infrastructure temps réel et de l'IA appliquée.",
        },
        {
          n: "02",
          t: "DevOps, scalabilité et exploitation cloud",
          d: "Infrastructure de production, CI/CD, observabilité et astreinte technique. Nous gardons votre plateforme rapide, résiliente et prête pour le prochain ordre de grandeur.",
        },
      ],
      method: [
        {
          n: "01",
          t: "Comprendre",
          d: "Nous cartographions votre activité, vos utilisateurs et les contraintes techniques. Nous revenons avec un cadrage précis, une équipe senior et une trajectoire claire vers la production.",
        },
        {
          n: "02",
          t: "Concevoir et développer",
          d: "Des équipes senior en produit, design et ingénierie livrent en cycles courts. Du logiciel réel, dans des environnements réels, chaque semaine.",
        },
        {
          n: "03",
          t: "Lancer et faire grandir",
          d: "Nous durcissons la plateforme, mettons en place le DevOps, la supervision et l'astreinte. Le produit part en production prêt pour le prochain ordre de grandeur.",
        },
        {
          n: "04",
          t: "Itérer et faire évoluer",
          d: "Évolution continue du produit — optimisation des performances, enrichissement fonctionnel et modernisation de la plateforme, pilotés par les données d'usage réelles.",
        },
      ],
    },
    consulting: {
      hero1: "Nous conseillons.",
      hero2: "Nous transformons.",
      heroPrefix: "Nous",
      heroWords: ["élaborons la stratégie.", "optimisons.", "livrons."],
      intro:
        "ADNC Group est un partenaire de conseil stratégique pour les organisations ambitieuses. Nous pilotons la transformation digitale, architecturons l'infrastructure cloud, bâtissons des systèmes de décision fondés sur la donnée, et apportons un conseil financier et technologique qui transforme la complexité en avantage concurrentiel.",
      ctaPrimary: "Demander une consultation →",
      ctaSecondary: "Voir notre expertise",
      splitTitle: "Un seul partenaire.",
      splitTitleAccent: "Une clarté totale.",
      strategyTitle: "Stratégie.",
      strategyBody:
        "Nous évaluons, élaborons la stratégie et concevons les feuilles de route de transformation — stratégie digitale, conseil technologique et conduite du changement.",
      strategyItems: [
        "Stratégie de transformation digitale",
        "Audit et conseil technologique",
        "Conduite du changement",
        "Planification de la migration cloud",
        "Stratégie data",
      ],
      executionTitle: "Exécution.",
      executionBody:
        "Ensuite, nous livrons. Tableaux de bord BI, modèles financiers, feuilles de route d'infrastructure et résultats mesurables. Un conseil qui se traduit en résultats concrets.",
      executionItems: [
        "Business intelligence et tableaux de bord",
        "Modélisation financière et audits",
        "Architecture d'infrastructure",
        "Suivi de la performance et KPI",
        "Recommandations orientées ROI",
      ],
      capabilitiesTitle: "Stratégie, data et transformation —",
      capabilitiesAccent: "de bout en bout.",
      methodTitle: "Du diagnostic à une transformation mesurable — et bien après.",
      ctaTitle: "Besoin de clarté",
      ctaAccent: "stratégique ?",
      ctaBody:
        "Exposez vos enjeux à notre équipe. Nous répondons avec un diagnostic senior, une feuille de route stratégique et l'expertise pour la concrétiser.",
      ctaButton: "Réserver une consultation →",
      manifesto: [
        "Nous conseillons",
        "Nous élaborons la stratégie",
        "Nous transformons",
        "Nous optimisons",
        "Nous auditons",
        "Nous planifions",
        "Nous apportons la clarté",
      ],
      ticker: [
        "Transformation digitale",
        "Conseil technologique",
        "Stratégie cloud",
        "BI et data",
        "Conseil financier",
        "Conduite du changement",
        "Architecture",
        "Feuilles de route",
      ],
      services: [
        {
          n: "01",
          t: "Transformation digitale",
          d: "Stratégie digitale de bout en bout : nous auditons vos systèmes actuels, concevons l'architecture cible et pilotons la conduite du changement qui ancre durablement la transformation.",
        },
        {
          n: "02",
          t: "Conseil technologique",
          d: "Audits technologiques indépendants, revues d'architecture et feuilles de route stratégiques. Nous vous aidons à faire les bons paris technologiques — du choix de la stack aux arbitrages entre développement et achat.",
        },
        {
          n: "03",
          t: "Infrastructure et cloud",
          d: "Stratégie de migration cloud, conception d'architecture hybride et modernisation de l'infrastructure. Nous planifions et supervisons la transition vers des environnements scalables, sécurisés et économiquement maîtrisés.",
        },
        {
          n: "04",
          t: "Business intelligence et data",
          d: "Stratégie data, architecture BI, tableaux de bord et analytique. Nous vous aidons à bâtir l'infrastructure de décision qui transforme la donnée brute en avantage concurrentiel.",
        },
        {
          n: "05",
          t: "Conseil financier",
          d: "Modélisation financière, business plans, stratégie de levée de fonds et audits opérationnels. Un conseil financier stratégique pour les entreprises technologiques, à chaque étape.",
        },
      ],
      method: [
        {
          n: "01",
          t: "Évaluer",
          d: "Immersion approfondie dans votre organisation, vos systèmes et vos objectifs. Nous livrons un diagnostic complet, avec des constats clairs et des opportunités hiérarchisées.",
        },
        {
          n: "02",
          t: "Élaborer la stratégie",
          d: "Nous concevons une feuille de route sur mesure — choix technologiques, évolutions organisationnelles, calendrier et priorités d'investissement, alignés sur vos objectifs d'entreprise.",
        },
        {
          n: "03",
          t: "Exécuter",
          d: "Un conseil opérationnel tout au long de la mise en œuvre. Nous nous intégrons à vos équipes pour que la stratégie se traduise en résultats mesurables.",
        },
        {
          n: "04",
          t: "Mesurer et affiner",
          d: "Suivi continu de la performance, pilotage des KPI et ajustement stratégique. Nous nous assurons que chaque initiative dégage un ROI tangible.",
        },
      ],
    },
    viewAllServices: "Voir tous les services →",
  },
  services: {
    seoTitle: "Services | ADNC Group",
    seoDescription:
      "Ingénierie web et mobile, DevOps et scalabilité — ingénierie logicielle de niveau production et exploitation cloud.",
    ogTitle: "Services — ADNC Group",
    ogDescription: "Ingénierie et exploitation cloud pour applications web et mobiles complexes.",
    title: "Ingénierie et exploitation cloud,",
    titleAccent: "sous un même toit.",
    intro:
      "ADNC Group délivre une ingénierie produit senior et une exploitation cloud — des plateformes web et mobiles complexes jusqu'au DevOps de niveau production, à la montée en charge et à la gestion d'infrastructure.",
    serviceLabel: "Service",
    groups: [
      {
        n: "01",
        title: "Ingénierie web et mobile",
        items: [
          "Plateformes web complexes (React, Next, TanStack)",
          "iOS natif (Swift, SwiftUI)",
          "Android natif (Kotlin, Compose)",
          "React Native et Flutter",
          "Performance, sécurité et industrialisation des livraisons",
        ],
      },
      {
        n: "02",
        title: "DevOps, scalabilité et exploitation cloud",
        items: [
          "Infrastructure de production et CI/CD",
          "Observabilité et pratiques SRE",
          "Mise à l'échelle automatique et optimisation des coûts",
          "Gestion des incidents et astreinte",
          "Sécurité et conformité",
        ],
      },
    ],
    engagementTitle: "Des modèles de collaboration à la hauteur de vos ambitions.",
    engagementModels: [
      "Construire avec nous",
      "Construire et exploiter",
      "Exploiter et développer l'existant",
    ],
    cta: "Parlons de votre projet →",
  },
  portfolio: {
    seoTitle: "Notre méthode | ADNC Group",
    seoDescription:
      "Deux façons de travailler avec le studio : les fondateurs qui partent d'une idée, et les entreprises établies qui veulent livrer sérieusement. De la clarté dès le premier jour, un périmètre signé, du travail livré dans les délais.",
    ogTitle: "Notre méthode — ADNC Group",
    ogDescription: "Deux parcours. Un studio. Un seul standard.",
    title: "Deux parcours",
    titleAccent: "vers le studio.",
    intro:
      "ADNC Group travaille avec deux types de partenaires bien distincts : des fondateurs indépendants qui partent d'une idée, et des entreprises établies qui veulent livrer ou exploiter un projet sérieux. Le mode de collaboration diffère pour chacun, délibérément. Les deux reposent sur le même principe : de la clarté dès le premier jour, un périmètre signé, et du travail réel livré dans les délais.",
    trackATitle: "Fondateurs et porteurs de projet indépendants.",
    trackASubtitle: "Pour les personnes qui apportent une idée au studio.",
    phaseLabel: "Phase",
    phases: [
      {
        n: "01",
        t: "Soumission de l'idée",
        meta: "",
        d: "Vous apportez l'idée. Pas de mise en scène autour du NDA, pas de pitch deck exigé. Une séance de travail, un tableau blanc, et une conversation honnête sur ce que vous voulez construire et pourquoi cela compte.",
      },
      {
        n: "02",
        t: "Étude de faisabilité",
        meta: "Un mois · 21 500 MAD (HT)",
        d: "Nous consacrons un mois complet à une étude de faisabilité structurée. Dimensionnement du marché, cadrage technique, revue réglementaire et de conformité, modélisation des coûts, paysage concurrentiel et évaluation des risques. À la fin du mois, vous recevez un rapport écrit et une recommandation claire : feu vert, feu orange sous conditions, ou feu rouge. Les frais d'entrée couvrent le temps d'ingénierie et de stratégie senior mobilisé, et ne sont pas remboursables.",
      },
      {
        n: "03",
        t: "Conditions et périmètre",
        meta: "",
        d: "Si le projet reçoit le feu vert des deux côtés, nous négocions la collaboration : périmètre, honoraires ou structure en capital, jalons, propriété intellectuelle et clauses de sortie. Rien ne passe en développement tant que le contrat n'est pas signé.",
      },
      {
        n: "04",
        t: "Feuille de route et prototypage",
        meta: "Un mois",
        d: "Nous prenons un mois supplémentaire pour livrer la feuille de route technique, un prototype fonctionnel et l'équipe dédiée. Les recrutements ciblés, si le profil du poste l'exige, interviennent à ce moment, sur la base de spécifications définies conjointement.",
      },
      {
        n: "05",
        t: "Production",
        meta: "",
        d: "Le produit entre en développement actif. À partir de là, vous travaillez aux côtés de l'équipe allouée à votre projet, avec le soutien opérationnel complet du studio.",
      },
    ],
    founderTitle: "Une vraie place au sein du studio.",
    founderGets: [
      {
        t: "Ressources dédiées",
        d: "Une allocation définie de ressources humaines et techniques réservées à votre projet : ingénieurs, designers, équipe de support et infrastructure. Cette allocation est contractuelle, pas indicative.",
      },
      {
        t: "Accès quotidien à l'équipe",
        d: "Deux créneaux de rendez-vous fixes chaque jour ouvré, de 08h00 à 09h00 et de 17h00 à 18h00. Vous pouvez demander un échange avec n'importe quel membre affecté à votre projet : ingénieur référent, designer, responsable support, responsable croissance. La disponibilité est garantie dans ces créneaux.",
      },
      {
        t: "Autorité stratégique",
        d: "Vous conservez toute latitude pour proposer de nouvelles orientations et définir la vision produit. ADNC Group intervient comme partenaire d'exécution, pas comme décideur.",
      },
      {
        t: "Évolution du périmètre",
        d: "La collaboration de base couvre le périmètre défini à la signature. Toute nouvelle fonctionnalité, réorientation ou ajout d'ordre marketing qui allonge sensiblement le calendrier ou la charge fait l'objet d'un chiffrage et d'un devis distincts, avec un avenant transparent avant tout démarrage.",
      },
    ],
    trackBTitle: "Entreprises",
    trackBTitleAccent: "établies.",
    trackBSubtitle:
      "Pour les organisations dotées d'une structure existante, d'équipes internes et d'un processus de décision formalisé.",
    trackBPoints: [
      {
        t: "Mode de collaboration",
        d: "Nous nous intégrons directement à vos interlocuteurs existants. Pas de bureaux privatifs, pas d'accueil à la façon d'un fondateur. Le studio se branche sur votre organisation et exécute sur la base d'un cahier des charges défini, avec une direction de projet senior de notre côté et un interlocuteur unique clairement identifié du vôtre.",
      },
      {
        t: "Rythme des réunions",
        d: "Les séances de travail se tiennent en présentiel, dans vos locaux ou dans les nôtres, dans deux créneaux quotidiens fixes : de 08h00 à 09h00 et de 17h00 à 18h00. Ce rythme impose des décisions rapides et supprime la dérive des réunions qui retarde la plupart des projets en entreprise.",
      },
      {
        t: "Processus",
        d: "Faisabilité, feuille de route, production et exploitation suivent les mêmes standards que le Parcours A, adaptés à vos exigences de gouvernance, d'achats et de conformité. Tarification, calendrier et composition de l'équipe se négocient sur la base de votre cahier des charges.",
      },
    ],
    closingTitle: "Un seul studio,",
    closingAccent: "un seul standard.",
    closingBody:
      "Quel que soit le parcours qui vous concerne, les standards d'ingénierie, d'exploitation et de qualité ne changent pas. Le cadre s'adapte. Le travail, non.",
    cta: "Démarrer un projet →",
  },
  about: {
    seoTitle: "À propos | ADNC Group",
    seoDescription:
      "ADNC Group est un studio produit mobile senior. Découvrez l'équipe et nos principes.",
    ogTitle: "À propos — ADNC Group",
    ogDescription: "Studio produit mobile senior.",
    title:
      "Deux facettes d'un même métier : nous construisons les applications, et nous les exploitons.",
    intro:
      "ADNC Group a été fondé pour être le partenaire que nous aurions toujours voulu avoir : une équipe unique qui conçoit et développe des applications web et mobiles complexes, et qui les exploite en production — DevOps, montée en charge, un support client et un centre d'appels internalisés, et une force commerciale B2B pour vous apporter des clients.",
    principlesTitle: "Principes",
    principles: [
      {
        t: "Construire et exploiter",
        d: "Nous ne livrons pas seulement du code — nous faisons tourner les plateformes que nous construisons, avec nos propres équipes DevOps, support et croissance.",
      },
      {
        t: "Senior par défaut",
        d: "Chaque mission est staffée avec des ingénieurs, des exploitants et des responsables de compte senior. Aucune substitution en cours de route.",
      },
      {
        t: "Internalisé, pas sous-traité",
        d: "Notre support client et notre centre d'appels sont internes — directement branchés sur l'équipe produit.",
      },
      {
        t: "Assumer le résultat",
        d: "Nous nous mesurons à la disponibilité, au NPS, à la rétention et au pipeline B2B — pas seulement aux fonctionnalités livrées.",
      },
    ],
    ctaTitle: "Vous voulez savoir si nous sommes le bon partenaire ?",
    cta: "Nous contacter →",
  },
  contact: {
    seoTitle: "Contact | ADNC Group",
    seoDescription: "Parlez-nous de votre projet mobile. Nous répondons sous un jour ouvré.",
    ogTitle: "Contact — ADNC Group",
    ogDescription: "Échangez avec notre équipe.",
    title: "Construisons quelque chose qui mérite d'être ouvert chaque jour.",
    intro:
      "Donnez-nous quelques éléments et la bonne personne de notre équipe vous répondra sous un jour ouvré.",
    availability: "Disponibles dans le monde entier · Siège à Casablanca, Maroc",
    fieldName: "Votre nom",
    fieldEmail: "E-mail",
    fieldPhone: "Téléphone (facultatif)",
    fieldCompany: "Société (facultatif)",
    fieldProject: "Projet",
    submit: "Envoyer le message →",
    sending: "Envoi en cours…",
    sentTitle: "Message bien reçu.",
    sentBody: "Nous revenons vers vous très vite.",
    errorGeneric: "Nous n'avons pas pu envoyer votre message. Merci de réessayer dans un instant.",
  },
  errors: {
    notFoundTitle: "Page introuvable",
    notFoundBody: "La page que vous cherchez n'existe pas ou a été déplacée.",
    goHome: "Retour à l'accueil",
    errorTitle: "Cette page n'a pas pu se charger",
    errorBody:
      "Un problème est survenu de notre côté. Vous pouvez actualiser ou revenir à l'accueil.",
    tryAgain: "Réessayer",
  },
} satisfies Dictionary;

export const content = { en, fr } as const;
