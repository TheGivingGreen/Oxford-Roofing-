export type ServiceCriterion = {
  title: string;
  body: string;
};

export type ServicePrinciple = ServiceCriterion;
export type ServiceProcessStep = ServiceCriterion;

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceProject = {
  title: string;
  meta: string;
  image: string;
  alt: string;
  href: string;
};

export type ApprovedServicePageData = {
  slug: string;
  metadata: { title: string; description: string };
  hero: {
    variant: "navy-split" | "commercial-panel" | "light-split";
    eyebrow: string;
    label: string;
    title: string;
    lead: string;
    image: string;
    alt: string;
    caption: string;
    ctaLabel?: string;
    proofLabel: string;
    proofHref?: string;
  };
  decision: {
    eyebrow: string;
    title: string;
    lead: string;
    criteria: ServiceCriterion[];
    note?: string;
  };
  principles: {
    eyebrow: string;
    title: string;
    items: ServicePrinciple[];
  };
  scope: {
    eyebrow: string;
    title: string;
    lead: string;
    items: string[];
    note?: string;
    caption?: string;
    image?: string;
    alt?: string;
    reverse?: boolean;
    placeholder?: {
      kicker: string;
      title: string;
      note: string;
      ariaLabel: string;
    };
  };
  process: {
    eyebrow: string;
    title: string;
    lead?: string;
    compact?: boolean;
    steps: ServiceProcessStep[];
  };
  proof?:
    | {
        kind: "single";
        eyebrow: string;
        title: string;
        meta: string;
        body: string;
        image: string;
        alt: string;
        href: string;
      }
    | {
        kind: "grid";
        eyebrow: string;
        title: string;
        body?: string;
        projects: ServiceProject[];
      }
    | {
        kind: "comparison";
        eyebrow: string;
        title: string;
        meta: string;
        body: string;
        beforeImage: string;
        afterImage: string;
        beforeAlt: string;
        afterAlt: string;
        href: string;
      }
    | {
        kind: "placeholder";
        eyebrow: string;
        title: string;
        body: string;
        kicker: string;
        note: string;
      };
  territoryLead?: string;
  faq: {
    eyebrow: string;
    title: string;
    lead?: string;
    items: ServiceFaq[];
  };
  cta: {
    eyebrow: string;
    title: string;
    body: string;
    buttonLabel?: string;
  };
};

export const serviceTerritory = [
  {
    state: "Missouri",
    counties: [
      {
        county: "St. Louis County",
        communities: [
          "St. Louis",
          "Kirkwood",
          "Chesterfield",
          "Ballwin",
          "Florissant",
          "Webster Groves",
          "Clayton",
          "Creve Coeur",
          "Maryland Heights",
          "Hazelwood",
          "University City",
          "Overland",
          "Bridgeton",
          "Manchester",
          "Ladue",
          "Town and Country",
          "Des Peres",
          "Wildwood",
          "Ellisville",
          "Fenton",
          "Oakville",
          "Mehlville",
          "Affton",
          "Crestwood",
          "Sunset Hills",
          "Brentwood",
          "Richmond Heights",
          "Maplewood",
          "Ferguson",
        ],
      },
      {
        county: "St. Charles County",
        communities: [
          "St. Charles",
          "O'Fallon",
          "St. Peters",
          "Wentzville",
          "Lake Saint Louis",
          "Cottleville",
          "Dardenne Prairie",
          "Weldon Spring",
          "St. Paul",
          "Augusta",
          "New Melle",
          "Portage Des Sioux",
        ],
      },
      {
        county: "Jefferson County",
        communities: [
          "Arnold",
          "Festus",
          "Imperial",
          "Hillsboro",
          "De Soto",
          "Crystal City",
          "Herculaneum",
          "Pevely",
          "High Ridge",
          "House Springs",
          "Cedar Hill",
          "Barnhart",
        ],
      },
      {
        county: "Franklin County",
        communities: [
          "Washington",
          "Union",
          "Pacific",
          "Sullivan",
          "St. Clair",
          "New Haven",
          "Villa Ridge",
          "Gerald",
        ],
      },
      {
        county: "Lincoln County",
        communities: [
          "Troy",
          "Moscow Mills",
          "Elsberry",
          "Winfield",
          "Hawk Point",
          "Foley",
        ],
      },
      {
        county: "Warren County",
        communities: ["Warrenton", "Wright City", "Marthasville", "Truesdale"],
      },
    ],
  },
  {
    state: "Illinois",
    counties: [
      {
        county: "St. Clair County",
        communities: [
          "Belleville",
          "O'Fallon",
          "Fairview Heights",
          "Swansea",
          "Shiloh",
          "Mascoutah",
          "Millstadt",
          "Cahokia Heights",
        ],
      },
      {
        county: "Madison County",
        communities: [
          "Edwardsville",
          "Alton",
          "Granite City",
          "Collinsville",
          "Troy",
          "Glen Carbon",
          "Highland",
          "Wood River",
          "Bethalto",
          "Maryville",
        ],
      },
      {
        county: "Monroe County",
        communities: ["Columbia", "Waterloo", "Valmeyer"],
      },
    ],
  },
] as const;

const roofReplacement: ApprovedServicePageData = {
  slug: "roof-replacement",
  metadata: {
    title: "Roof Replacement | Oxford Roofing",
    description:
      "A documented approach to residential roof replacement for St. Louis properties, from existing condition through the approved finished system.",
  },
  hero: {
    variant: "navy-split",
    eyebrow: "Residential roofing · St. Louis",
    label: "Roof Replacement",
    title: "A big decision. A clear process. No surprises.",
    lead: "Replacing a roof is one of the larger investments a homeowner makes. Oxford approaches it the same way every time: document what's there, explain what it means, and build exactly what was agreed to. Nothing gets started until you understand what you're approving.",
    image: "/uploads/photography-residential-tearoff-kirkwood.png",
    alt: "Roofing crew removing the existing shingles from a Kirkwood home",
    caption: "Kirkwood Full Tear-Off",
    proofLabel: "View the Kirkwood Project",
  },
  decision: {
    eyebrow: "When to consider replacement",
    title: "Is It Time to Replace Your Roof?",
    lead: "Not every roof problem is a replacement. Repairs still make sense when the damage is isolated and the rest of the roof is solid. But there are conditions where continued patching stops being practical. At that point, a full replacement becomes the smarter long-term decision.",
    criteria: [
      {
        title: "Wear across the whole roof — not just one spot.",
        body: "When shingles are failing broadly rather than in one isolated area, patching becomes a temporary fix to a bigger problem.",
      },
      {
        title: "Leaks that keep coming back in different places.",
        body: "When water is finding multiple entry points, the roof isn't performing as a system anymore. No single repair will fix that.",
      },
      {
        title: "Damage below the surface.",
        body: "What's underneath your shingles — the decking, the underlayment — can be compromised without being visible from the outside. The inspection tells the full story.",
      },
      {
        title: "A roof that's simply run its course.",
        body: "Sometimes the honest answer is that a roof has given everything it can give, and another round of repairs won't change that math.",
      },
    ],
    note: "Every roof is different. Oxford won't recommend replacement until we've inspected yours and can back up that recommendation in writing.",
  },
  principles: {
    eyebrow: "Why Oxford",
    title: "We don't start swinging hammers until everyone agrees on what's getting built. Here's how we make sure that happens.",
    items: [
      {
        title: "We start with an honest inspection.",
        body: "Before anything else, we document the good and the bad of what your roof looks like right now. That gives our recommendation a real foundation.",
      },
      {
        title: "You see the full plan before we begin.",
        body: "Materials, sequence, and known conditions are all in writing before a single shingle comes off. No verbal agreements, no assumptions.",
      },
      {
        title: "We build what we said we'd build.",
        body: "The written plan follows the crew from the first day of tear-off through final cleanup. If something changes, we document it and talk to you first.",
      },
    ],
  },
  scope: {
    eyebrow: "What the work includes",
    title: "What Happens During Your Replacement",
    lead: "Every replacement follows a documented sequence. Here's what that looks like from start to finish:",
    items: [
      "Protecting your property before work begins, including landscaping, vehicles, and anything near the roofline",
      "Full tear-off of the existing roof, disposed of properly",
      "Inspection of the exposed roof deck for any damage that needs to be addressed before the new system goes on",
      "Installation of your approved roofing system, including every material, layer, and component exactly as outlined",
      "Flashing at chimneys, walls, valleys, and all critical transitions",
      "Full cleanup and a final walkthrough so you can see the finished work and ask any remaining questions",
    ],
    note: "Exact materials and project details are established in your written proposal before work begins.",
    image: "/uploads/photography-residential-tearoff-kirkwood.png",
    alt: "Roofing crew working during removal of an existing residential roof system",
  },
  process: {
    eyebrow: "How It Works",
    title: "Four steps. Everything in writing. No guesswork.",
    steps: [
      {
        title: "Inspect",
        body: "We come out, get on the roof, and document what we find. You'll know what we saw before we make any recommendation.",
      },
      {
        title: "Propose",
        body: "We put the materials, timeline, and everything included in writing. You know exactly what you're approving.",
      },
      {
        title: "Build",
        body: "Our crew completes the replacement according to the approved plan. Your property is protected throughout, and we document the work as it goes.",
      },
      {
        title: "Walk It",
        body: "We review the finished roof with you, answer any questions, and make sure you have everything you need, including your warranty documentation.",
      },
    ],
  },
  proof: {
    kind: "single",
    eyebrow: "From the Field",
    title: "Kirkwood Full Tear-Off",
    meta: "Residential · Before & after",
    body: "See the existing Oxford project entry and photography associated with this residential full tear-off.",
    image: "/uploads/photography-residential-tearoff-kirkwood.png",
    alt: "Roofing crew completing a residential full tear-off in Kirkwood",
    href: "/portfolio/kirkwood-tear-off",
  },
  faq: {
    eyebrow: "Roof replacement FAQ",
    title: "Common Questions About Roof Replacement",
    items: [
      {
        question: "How do I know if I need a repair or a full replacement?",
        answer:
          "Repairs make sense when the damage is in one place and the rest of the roof is solid. When wear is spread across the roof, leaks are recurring in multiple spots, or the deck itself is compromised, replacement is usually the more honest answer. We'll tell you which one applies to your roof and explain why.",
      },
      {
        question: "What do you actually look at during the inspection?",
        answer:
          "Shingle condition, surface wear, flashing integrity, visible deck issues, drainage, and anything around penetrations like chimneys or vents. We document what we find and explain what it means before we make any recommendation.",
      },
      {
        question: "What happens once the old roof comes off?",
        answer:
          "We inspect the exposed deck before anything new goes on. If we find damage that needs to be addressed, we document it, show you what we found, and talk through the options before any additional work is done.",
      },
      {
        question: "How does the written proposal get put together?",
        answer:
          "It starts with the inspection. Once we've documented your roof's condition and you've selected your materials, we put what's included, what it costs, and what the timeline looks like in writing. Nothing starts until you've reviewed and approved it.",
      },
      {
        question: "What paperwork do I get when the project is done?",
        answer:
          "At minimum: the original inspection record, your signed proposal, any documented changes made during the project, and your warranty information. We want you to have a complete file on your roof, not just a receipt.",
      },
    ],
  },
  cta: {
    eyebrow: "Begin with the condition",
    title: "Not Sure Where to Start? That's What the Inspection Is For.",
    body: "Oxford will come out, get on the roof, and give you an honest read on what's there. No commitment, no pressure toward replacement. Just a clear picture of what you're working with and what your options actually are.",
    buttonLabel: "Schedule Your Roof Inspection",
  },
};

const residentialRoofing: ApprovedServicePageData = {
  slug: "residential-roofing",
  metadata: {
    title: "Residential Roofing | Oxford Roofing",
    description:
      "Residential roofing for St. Louis homes, shaped by the property’s architecture, roof geometry, visible condition, and approved project scope.",
  },
  hero: {
    variant: "navy-split",
    eyebrow: "Residential roofing · St. Louis",
    label: "Residential Roofing",
    title: "A roof system that belongs to the home it protects.",
    lead: "Every home and roof is different. We begin with a close look at your roof's condition, layout, and architectural style. Then we recommend a roofing system that fits the home and the work it needs.",
    image: "/uploads/hero-residential-luxury-roof.png",
    alt: "Aerial view of a finished roof on a large residential home",
    caption: "Residential roof system",
    proofLabel: "View Residential Work",
  },
  decision: {
    eyebrow: "When residential roofing is appropriate",
    title: "WHEN YOUR HOME NEEDS A THOUGHTFUL ROOFING PLAN",
    lead: "Some projects require more than replacing shingles. Roof shape, material choices, flashing details, and the character of the home all play a role in determining the right approach.",
    criteria: [
      {
        title: "Your roof needs more than a small repair",
        body: "When the work involves a larger portion of the roof, replacement may be the more practical long-term solution.",
      },
      {
        title: "Your roof has detailed lines or transition areas",
        body: "Valleys, ridges, walls, chimneys, skylights, and adjoining materials all need careful planning before work begins.",
      },
      {
        title: "The new roof needs to complement your home",
        body: "The right roofing system should protect the home while fitting its architecture and exterior style.",
      },
      {
        title: "Your property requires special care",
        body: "Landscaping, access, drainage, and site conditions can all shape how the project is planned and completed.",
      },
    ],
    note: "Materials, installation methods, scheduling, and project details will be confirmed in your written proposal.",
  },
  principles: {
    eyebrow: "WHY HOMEOWNERS CHOOSE OXFORD",
    title: "THE RIGHT APPROACH STARTS WITH YOUR HOME.",
    items: [
      {
        title: "LOOK AT THE WHOLE ROOF",
        body: "We look beyond the obvious issue to understand the full condition of your roof and how it works with the rest of your home.",
      },
      {
        title: "BUILD THE RIGHT PLAN",
        body: "Once we understand your roof's condition, we walk you through the recommended materials, details, and work involved.",
      },
      {
        title: "GET THE DETAILS RIGHT",
        body: "Valleys, walls, chimneys, and changes in the roofline deserve extra attention. We address those details before the project begins, not after.",
      },
    ],
  },
  scope: {
    eyebrow: "WHAT TO EXPECT FOR YOUR RESIDENTIAL ROOFING PROJECT",
    title: "A clear plan for your home, roof, and recommended work.",
    lead: "Every home and roof is different. We begin with a detailed inspection, then provide a written proposal based on what we find. Depending on your home and the work recommended, your project plan may cover:",
    items: [
      "Your roof's current condition and layout",
      "Recommended roofing materials and system",
      "Roof lines, edges, flashing, and transition areas",
      "Your property and jobsite needs",
      "The roofing work included in your proposal",
      "Project documents and warranty information",
    ],
    caption: "Photography shown is for residential project context only and does not depict work completed in Ladue or Webster Groves.",
    image: "/uploads/photography-residential-tearoff-kirkwood.png",
    alt: "Roofing crew removing the existing roof from a residential home",
  },
  process: {
    eyebrow: "WHAT TO EXPECT FROM YOUR RESIDENTIAL ROOFING PROJECT",
    title: "From your first call to a finished roof.",
    steps: [
      {
        title: "Free Consultation",
        body: "Tell us what is happening with your roof. We'll answer your initial questions and schedule an inspection at a time that works for you. No pressure, just helpful information.",
      },
      {
        title: "A Thorough, Honest Inspection",
        body: "We get on the roof to document exactly what's happening. After our visit, we'll walk you through what we found and help you decide if a repair or full replacement is the right path forward.",
      },
      {
        title: "Careful, Professional Installation",
        body: "On project day, we treat your home like our own. We protect your landscaping, use quality materials, and won't leave until your yard is as clean as we found it.",
      },
      {
        title: "Final Walkthrough & Warranty",
        body: "We walk the finished roof with you to make sure everything meets our standards and yours. We'll go over your warranty so you know your home is protected for years to come.",
      },
    ],
  },
  proof: {
    kind: "grid",
    eyebrow: "Relevant proof of work",
    title: "Two residential systems. Two architectural contexts.",
    projects: [
      {
        title: "Ladue Slate Restoration",
        meta: "Residential · Synthetic slate",
        image: "/uploads/ladue-synthetic-slate-restoration.png",
        alt: "Aerial view of a residential synthetic slate roof in Ladue",
        href: "/portfolio/ladue-slate-restoration",
      },
      {
        title: "Webster Groves Residence",
        meta: "Residential · Standing-seam metal",
        image: "/uploads/webster-groves-standing-seam-metal.png",
        alt: "Aerial view of a standing-seam metal residential roof in Webster Groves",
        href: "/portfolio/webster-groves-metal",
      },
    ],
  },
  territoryLead: "Oxford serves homeowners across the greater St. Louis region, including the following Missouri and Illinois communities.",
  faq: {
    eyebrow: "Residential roofing FAQ",
    title: "Common questions from St. Louis homeowners.",
    items: [
      {
        question: "What is included in my written proposal?",
        answer:
          "Your proposal will outline the recommended work, materials, project details, and applicable warranty information for your home. Every proposal is based on our documented inspection of your specific roof and property.",
      },
      {
        question: "How do you determine which roofing system is right for my home?",
        answer:
          "We consider your roof's current condition, its geometry and layout, your home's architectural style, and the materials best suited for the project. We'll walk you through the options and explain our recommendation before any work is approved.",
      },
      {
        question: "Why do roof details like valleys, chimneys, and transitions matter?",
        answer:
          "These are the areas where most roofing problems start. Valleys, ridges, walls, chimneys, and edges all need to be properly addressed for the roof to function as a complete, watertight system. We account for every detail before work begins.",
      },
      {
        question: "How do I know if I need a repair or a full roof replacement?",
        answer:
          "That depends on the age of your roof, the extent of the damage, and the condition of the underlying structure. Our inspection is designed to give you an honest answer, not just the most expensive one.",
      },
      {
        question: "What documentation do I receive after the project is complete?",
        answer:
          "You'll receive the relevant project documents and warranty information for your roof. The specifics will be outlined in your written proposal prior to the start of work.",
      },
    ],
  },
  cta: {
    eyebrow: "Begin with the home",
    title: "Start with the property, the roof, and the system they require.",
    body: "Oxford will inspect your roof, document what we find, and give you a clear recommendation for your home. No pressure. Just an honest assessment from a St. Louis roofing team that knows what it's doing.",
  },
};

const commercialRoofing: ApprovedServicePageData = {
  slug: "commercial-roofing",
  metadata: {
    title: "Commercial Roofing | Oxford Roofing",
    description:
      "Commercial low-slope and flat-roof planning for St. Louis properties, based on visible roof conditions, building context, and the approved scope.",
  },
  hero: {
    variant: "commercial-panel",
    eyebrow: "Commercial roofing · St. Louis",
    label: "Commercial Roofing",
    title:
      "A commercial roof should be planned around the property beneath it.",
    lead: "Every commercial roof has its own conditions, details, and operational considerations. We begin with the building, the visible condition of the roof, and the work it needs. Then we develop a clear plan for the recommended roofing system and project.",
    image: "/uploads/photography-commercial-flat-roof-downtown-stl.png",
    alt: "Roofing crew installing a commercial flat roof in downtown St. Louis",
    caption: "Commercial flat-roof installation",
    proofLabel: "View Commercial Work",
  },
  decision: {
    eyebrow: "When commercial roofing is appropriate",
    title: "WHEN YOUR BUILDING NEEDS A THOUGHTFUL ROOFING PLAN",
    lead: "Commercial roofing is not one-size-fits-all. The condition of the roof, its layout, rooftop equipment, building access, and the needs of the property all help determine the right approach.",
    criteria: [
      {
        title: "Your low-slope or flat roof needs attention",
        body: "When a commercial roof shows signs of wear, leaks, age, or ongoing issues, a detailed evaluation can help determine the right next step.",
      },
      {
        title: "Rooftop details affect the work",
        body: "Equipment, penetrations, drains, edges, and transitions all influence how a roofing system should be planned and installed.",
      },
      {
        title: "The project needs a clear plan",
        body: "Your written proposal should outline the recommended work, materials, and project details so everyone involved knows what to expect before work begins.",
      },
      {
        title: "You need a practical recommendation",
        body: "We document what we find and give you a clear recommendation based on the visible condition of your roof and the needs of your property.",
      },
    ],
    note: "Building access, scheduling, available materials, and project coordination will be discussed and confirmed in your written proposal.",
  },
  principles: {
    eyebrow: "Why Oxford for commercial roofing",
    title: "THE ROOF MATTERS. SO DOES EVERYTHING AROUND IT.",
    items: [
      {
        title: "Understand the building",
        body: "We start with the visible condition of the roof, the building it protects, and the rooftop details that may affect the project.",
      },
      {
        title: "Define the system",
        body: "We recommend a roofing system and project approach based on what we find, then clearly outline the details in your written proposal.",
      },
      {
        title: "Coordinate the work",
        body: "Before work begins, we review the project plan, site considerations, and the work included so your team knows what to expect.",
      },
    ],
  },
  scope: {
    eyebrow: "WHAT WE CONSIDER WHEN PLANNING A COMMERCIAL ROOFING PROJECT",
    title: "A clear plan for your roof, building, and recommended work.",
    lead: "Every commercial property is different. After evaluating the visible condition of your roof, we provide a written proposal based on the work your building needs. Depending on the property and project, that plan may address:",
    items: [
      "Current roof condition and visible concerns",
      "Recommended low-slope or flat-roof system",
      "Rooftop equipment, penetrations, drains, and transitions",
      "Building access and property-specific needs",
      "Project planning and work sequence",
      "Project documents and warranty information",
    ],
    note: "Final materials, scheduling, project coordination, and documentation will be confirmed in your written proposal.",
    image: "/uploads/photography-commercial-flat-roof-downtown-stl.png",
    alt: "Commercial roofing crew working around rooftop equipment on a low-slope roof",
    reverse: true,
  },
  process: {
    eyebrow: "WHAT TO EXPECT FROM YOUR COMMERCIAL ROOFING PROJECT",
    title: "A clear process from inspection to completed work.",
    compact: true,
    steps: [
      {
        title: "Initial Consultation",
        body: "Tell us what is happening with your roof and property. We’ll discuss the concern, answer your initial questions, and schedule a time to inspect the building.",
      },
      {
        title: "Detailed Roof Evaluation",
        body: "We assess the visible roof condition, rooftop details, and areas that may affect the project. Then we provide a clear recommendation and written proposal for your review.",
      },
      {
        title: "Project Planning & Installation",
        body: "Once the work is approved, we coordinate the project details with your team and complete the roofing work according to the written proposal.",
      },
      {
        title: "Final Review & Project Documents",
        body: "Once the work is complete, we review the finished roof with you and provide the applicable project and warranty information outlined in your proposal.",
      },
    ],
  },
  proof: {
    kind: "grid",
    eyebrow: "Relevant commercial proof",
    title: "COMMERCIAL ROOFING WORK FOR ST. LOUIS PROPERTIES",
    body: "Explore examples of Oxford’s commercial roofing work in the St. Louis area.",
    projects: [
      {
        title: "Clayton Office Park",
        meta: "Commercial · TPO membrane",
        image: "/uploads/clayton-office-park-tpo-reroof.png",
        alt: "Aerial view of the white TPO roof at Clayton Office Park",
        href: "/portfolio/clayton-office-park",
      },
      {
        title: "Maplewood Retail Center",
        meta: "Commercial · EPDM membrane",
        image: "/uploads/maplewood-retail-center-epdm-install.png",
        alt: "Aerial view of the black EPDM roof at Maplewood Retail Center",
        href: "/portfolio/maplewood-retail-center",
      },
    ],
  },
  territoryLead: "Oxford serves commercial properties across the greater St. Louis region, including the following Missouri and Illinois communities.",
  faq: {
    eyebrow: "Commercial roofing FAQ",
    title: "COMMON QUESTIONS FROM COMMERCIAL PROPERTY OWNERS",
    items: [
      {
        question: "What types of commercial roofing projects does Oxford handle?",
        answer:
          "Oxford’s commercial portfolio includes TPO membrane roofing at Clayton Office Park and EPDM membrane roofing at Maplewood Retail Center. The best system for your property depends on the condition of the roof, building details, and project requirements. We’ll discuss the options available for your project during the evaluation and proposal process.",
      },
      {
        question: "How do you determine the right commercial roofing system for a building?",
        answer:
          "We begin by evaluating the visible condition of the roof, its layout, rooftop details, and the needs of the property. From there, we recommend an approach and provide a written proposal that outlines the work, materials, and project details.",
      },
      {
        question: "How do you plan around building access and day-to-day operations?",
        answer:
          "Every commercial property has different access, scheduling, and operational needs. Before work begins, we discuss those site considerations with your team and outline the relevant project details in the written proposal.",
      },
      {
        question: "Why do rooftop equipment, drains, and penetrations matter?",
        answer:
          "Rooftop equipment, curbs, penetrations, drains, edges, and transitions are all important parts of a commercial roofing system. These details affect how water moves across the roof and how the system needs to be planned and installed.",
      },
      {
        question: "What information do I receive when the project is complete?",
        answer:
          "You’ll receive the applicable project documents and warranty information outlined in your written proposal. The exact documentation will depend on the work completed for your property.",
      },
    ],
  },
  cta: {
    eyebrow: "Begin with the building",
    title: "START WITH A CLEAR VIEW OF YOUR ROOF",
    body: "Oxford will inspect the visible condition of your commercial roof, document what we find, and provide a clear recommendation for your property. The right next step starts with understanding the building and the roof that protects it.",
  },
};

const stormDamageRestoration: ApprovedServicePageData = {
  slug: "storm-damage-restoration",
  metadata: {
    title: "Storm Damage Restoration | Oxford Roofing",
    description:
      "A documented approach to visible post-storm roof conditions and an approved restoration scope for St. Louis-area properties.",
  },
  hero: {
    variant: "light-split",
    eyebrow: "Storm damage restoration · St. Louis",
    label: "Storm Damage Restoration",
    title: "After the storm, the first question is simple: what did it do to your roof?",
    lead: "Hail, wind, and storm debris can leave damage that isn't obvious from the ground. Some of it doesn't show up inside your home until weeks later. Oxford comes out, gets on the roof, and documents exactly what the storm left behind. That record protects you whether you're filing an insurance claim or just deciding what comes next.",
    image: "/uploads/chesterfield-hail-restoration-before.png",
    alt: "Residential roof before the Chesterfield hail restoration project",
    caption: "Chesterfield · Before restoration",
    ctaLabel: "Schedule a Storm Assessment",
    proofLabel: "See How It Works",
    proofHref: "#storm-damage-restoration-process-title",
  },
  decision: {
    eyebrow: "When storm damage restoration is appropriate",
    title: "Signs It's Time to Get Your Roof Looked At",
    lead: "You don't have to be certain there's damage to call. If any of these apply after a storm, it's worth getting eyes on the roof before assuming everything is fine or assuming the worst.",
    criteria: [
      {
        title: "There was a significant hail or wind event in your area.",
        body: "Even if you can't see obvious damage from the ground, hail impact and high winds can compromise roofing materials in ways that only show up on a close inspection.",
      },
      {
        title: "Something looks different.",
        body: "Missing shingles, bent flashing, visible granule loss, and damaged vents or gutters are all worth documenting after a storm.",
      },
      {
        title: "You're seeing water intrusion that wasn't there before.",
        body: "If a leak or water stain appeared after a storm, the storm is the likely starting point. The roof needs to be reviewed before the connection can be confirmed.",
      },
      {
        title: "You need documentation before anything else.",
        body: "Whether you're filing an insurance claim or simply deciding how to respond, a written record of the roof's post-storm condition is the right first step.",
      },
    ],
  },
  principles: {
    eyebrow: "How Oxford Handles Storm Work",
    title: "The same documented process. Applied to a situation where the stakes are higher and the timeline is tighter.",
    items: [
      {
        title: "We document the roof as it is right now.",
        body: "Before any decisions are made, we record the post-storm condition with photographs, affected areas, and visible findings. That creates a clear, dated record of what the storm left behind.",
      },
      {
        title: "We define what's damaged and where.",
        body: "Not every part of a roof takes impact the same way. We identify which areas, components, and transitions were affected and document each one clearly.",
      },
      {
        title: "We build a written restoration plan from what we found.",
        body: "The documented condition drives the proposal. Not assumptions. Not pressure. Not what a contractor thinks your insurance will cover.",
      },
    ],
  },
  scope: {
    eyebrow: "Storm restoration details",
    title: "What Oxford Documents and Addresses",
    lead: "Every storm restoration project is documented in the same thorough sequence. Here's what that includes:",
    items: [
      "The roof's full visible condition after the storm, documented with photography",
      "Every roof area and component inspected, identified by location",
      "Dated condition photography for each affected area",
      "A written restoration plan tied directly to documented findings",
      "The approved restoration work, confirmed before anything begins",
      "Completion documentation when the work is done",
    ],
    note: "Storm restoration and insurance claims assistance are separate services at Oxford. The assessment documents visible roof conditions. Coverage decisions belong to your insurer.",
    image: "/uploads/chesterfield-hail-restoration-before.png",
    alt: "Chesterfield residential roof before hail restoration",
  },
  process: {
    eyebrow: "How It Works",
    title: "Four steps. Documented at every stage.",
    steps: [
      {
        title: "Assess",
        body: "We get on your roof and look at everything, starting with the areas most likely to show impact and working through the full system. You'll know what we found.",
      },
      {
        title: "Document",
        body: "We photograph and record every affected area, component by component. This record follows the project and can be used if you're working with an insurance adjuster.",
      },
      {
        title: "Propose",
        body: "We put together a written restoration plan based entirely on what we documented. Materials, affected areas, and the project sequence are in writing before any work is approved.",
      },
      {
        title: "Restore",
        body: "We complete the approved restoration work, clean up the property, and walk through the finished result with you. Documentation is provided when the project closes.",
      },
    ],
  },
  proof: {
    kind: "comparison",
    eyebrow: "From the Field",
    title: "Chesterfield Hail Restoration",
    meta: "Residential · Storm Damage Restoration",
    body: "A hail event left visible impact across the roof surface. Oxford documented the post-storm condition, defined the restoration work, and completed the project in Chesterfield. Before and after photography on file.",
    beforeImage: "/uploads/chesterfield-hail-restoration-before.png",
    afterImage: "/uploads/chesterfield-hail-restoration-after.png",
    beforeAlt: "Chesterfield residential roof before hail restoration",
    afterAlt: "Chesterfield residential roof after hail restoration",
    href: "/portfolio/chesterfield-hail-restoration",
  },
  faq: {
    eyebrow: "Storm damage restoration FAQ",
    title: "Common Questions About Storm Damage",
    items: [
      {
        question: "What kinds of damage does a storm typically leave behind?",
        answer:
          "Hail impact shows up as granule loss, bruising or cracking on shingles, and dents on metal components such as vents, gutters, and flashing. Wind damage often means lifted, creased, or missing shingles, especially at ridges and edges. Debris damage depends on what hit and where. Not all of it is visible from the ground, which is why a proper inspection matters.",
      },
      {
        question: "Will the inspection tell me what my insurance will cover?",
        answer:
          "No. Any contractor who tells you otherwise is overpromising. Oxford documents the visible post-storm condition of your roof. What your policy covers is your insurer's call, not ours. We give you a thorough, accurate record of what we found. That is the most useful thing you can bring to the conversation.",
      },
      {
        question: "How do I know if I need a repair or a full restoration?",
        answer:
          "It depends on how widespread the damage is. Isolated impact in one or two areas may call for a targeted repair. When damage is distributed across multiple roof planes, the ridge, flashing, and penetrations, a full restoration is usually the more honest answer. Oxford will tell you which one fits after we've inspected your roof and documented what's there.",
      },
      {
        question: "Does Oxford help with the insurance claim?",
        answer:
          "Oxford offers Insurance Claims Assistance as a separate service. That process involves working alongside you and your insurer, but it is distinct from the storm assessment and restoration work itself. If you're filing a claim, ask us about it when you schedule your inspection.",
      },
      {
        question: "What documentation do I receive?",
        answer:
          "At minimum: dated condition photography from the inspection, a written restoration proposal tied to the documented findings, and completion records when the project closes. If you're working with an insurance adjuster, the inspection documentation is what you'll want to have in hand.",
      },
    ],
  },
  cta: {
    eyebrow: "Begin with the visible condition",
    title: "Get Your Roof Documented Before Anything Else.",
    body: "After a storm, the worst thing you can do is wait and hope nothing comes of it. Oxford will come out, inspect the full roof, and give you a clear picture of what the storm actually did. No assumptions. No pressure. Just an honest assessment you can act on.",
    buttonLabel: "Schedule a Storm Assessment",
  },
};

const roofRepair: ApprovedServicePageData = {
  slug: "roof-repair",
  metadata: {
    title: "Roof Repair | Oxford Roofing",
    description:
      "A documented approach to visible, localized roof conditions and a clearly bounded proposed repair scope for St. Louis-area properties.",
  },
  hero: {
    variant: "light-split",
    eyebrow: "Roof repair · St. Louis",
    label: "Roof Repair",
    title: "Something's wrong with your roof. Let's figure out exactly what — and fix it.",
    lead: "Not every roof problem calls for a full replacement. When the damage is contained, a well-defined repair is usually the smarter, faster, and more cost-effective answer. Oxford starts by looking at the whole roof, not just the spot you called about.",
    image: "/uploads/hero-residential-luxury-roof.png",
    alt: "Aerial view of a finished residential roof used as general roof context",
    caption: "Residential roof context",
    ctaLabel: "Schedule an Inspection",
    proofLabel: "See How Repairs Work",
    proofHref: "#roof-repair-process-title",
  },
  decision: {
    eyebrow: "When roof repair may be appropriate",
    title: "When a Repair Makes Sense",
    lead: "Repair is often the right call. It can also be the faster, less disruptive option. Here's when it's worth exploring before anything more involved.",
    criteria: [
      {
        title: "The problem is in one place.",
        body: "When damage is isolated — one section, one detail, one point of failure — there's no reason to treat the whole roof.",
      },
      {
        title: "It's a flashing, edge, or penetration issue.",
        body: "Chimneys, vents, skylights, and roof-to-wall connections are common repair candidates. They do not require a full tear-off to address properly.",
      },
      {
        title: "The rest of the roof is in good shape.",
        body: "A repair only makes sense if the surrounding system can support it. We look at what's around the problem, not just the problem itself.",
      },
      {
        title: "You want to know exactly what's getting fixed.",
        body: "Before any work starts, Oxford defines the repair area and puts the plan in writing so there are no surprises.",
      },
    ],
  },
  principles: {
    eyebrow: "How Oxford Approaches Repairs",
    title: "The same discipline we bring to a full replacement. Applied to the smallest repair job.",
    items: [
      {
        title: "We start where you're seeing the problem. Then we look around it.",
        body: "The reported area is the starting point, not the conclusion.",
      },
      {
        title: "We define exactly what's getting fixed.",
        body: "The repair area, materials, and work involved are all in writing before anything gets touched.",
      },
      {
        title: "We look at the whole picture.",
        body: "A repair done in isolation can fail because of something just outside it. We account for what's adjacent before we define what's included.",
      },
    ],
  },
  scope: {
    eyebrow: "Roof repair details",
    title: "What Your Repair Covers",
    lead: "Every repair is different, but the same categories get defined every time. Here's what Oxford documents and addresses for each repair project:",
    items: [
      "What you reported and what we find on the roof",
      "The specific area being repaired, clearly defined",
      "Any flashing, edges, or transitions connected to the affected area",
      "Condition of the surrounding roof, to make sure the repair will hold",
      "The approved repair work, in writing, before we start",
      "Documentation when the job is done",
    ],
    note: "Exact materials and methods are established in your written proposal before work begins.",
  },
  process: {
    eyebrow: "How It Works",
    title: "Four steps. Everything defined before anything gets started.",
    steps: [
      {
        title: "Inspect",
        body: "We come out and look at the roof, starting where you're seeing the problem and working outward from there.",
      },
      {
        title: "Document",
        body: "We record the affected area, surrounding conditions, and anything else that factors into the repair plan.",
      },
      {
        title: "Propose",
        body: "We put what's included, the materials being used, and the cost of the work in writing. You review it before we schedule anything.",
      },
      {
        title: "Fix It",
        body: "We complete the repair, clean up the work area, and review the finished result with you. You get a record of what was done.",
      },
    ],
  },
  faq: {
    eyebrow: "Roof repair FAQ",
    title: "Common Questions About Roof Repair",
    items: [
      {
        question: "How do I know if I need a repair or a full replacement?",
        answer:
          "Repair makes sense when the damage is isolated and the rest of the roof can still perform reliably around it. Replacement becomes the better answer when deterioration is widespread, leaks are recurring in multiple spots, or the underlying deck is compromised. Oxford will tell you which one applies after we've seen your roof, not before.",
      },
      {
        question: "The leak is in one spot — does that mean the repair is in the same spot?",
        answer:
          "Not always. Water travels before it shows up inside your home, which means the entry point on the roof can be several feet away from where you're seeing the damage. That's why we look at the whole roof, not just the obvious spot.",
      },
      {
        question: "What does the written repair proposal include?",
        answer:
          "The affected area, the specific work being done, materials being used, any adjoining details being addressed, and the cost. Everything that gets touched should be in the proposal before we start.",
      },
      {
        question: "Will the repair hold? What kind of warranty is there?",
        answer:
          "Warranty terms vary depending on the materials and the nature of the repair. Oxford will outline what's covered in your written proposal. If there's any condition that could affect the repair's performance over time, we'll tell you before we start, not after.",
      },
      {
        question: "What documentation do I receive after the repair is done?",
        answer:
          "At minimum: photos of the condition before and after the repair, a record of the work completed, and any applicable warranty documentation. The specifics are outlined in your proposal.",
      },
    ],
  },
  cta: {
    eyebrow: "Begin with the affected area",
    title: "See Something That Doesn't Look Right? Start Here.",
    body: "Oxford will come out, look at your roof, and give you a straight answer on what needs to happen. We don't assume a repair or a replacement until we've documented what's actually there.",
    buttonLabel: "Schedule Your Inspection",
  },
};

const insuranceClaims: ApprovedServicePageData = {
  slug: "insurance-claims",
  metadata: {
    title: "Insurance Claims Assistance | Oxford Roofing",
    description:
      "Roof condition documentation and written roofing estimates for St. Louis property owners navigating an insurance claim.",
  },
  hero: {
    variant: "light-split",
    eyebrow: "Insurance claims assistance · St. Louis",
    label: "Insurance Claims Assistance",
    title: "Filing a claim for storm damage is complicated. Having the right roofing documentation doesn't have to be.",
    lead: "When your insurer sends an adjuster to inspect your roof, what's in Oxford's documentation file matters. We come out before that conversation happens to document visible conditions, produce an accurate written estimate, and make sure the roofing picture is clear and complete. What your policy covers is between you and your insurer. What your roof actually looks like after a storm is something we can document thoroughly.",
    image: "/uploads/chesterfield-hail-restoration-before.png",
    alt: "Residential roof with visible post-storm conditions in Chesterfield",
    caption: "Chesterfield · Documented storm condition",
    ctaLabel: "Schedule a Storm Assessment",
    proofLabel: "See How It Works",
    proofHref: "#insurance-claims-process-title",
  },
  decision: {
    eyebrow: "When this service applies",
    title: "When to Bring Oxford In",
    lead: "The sooner you get a documented roofing record, the better positioned you are. Here's when it makes sense to have Oxford involved before your claim moves forward.",
    criteria: [
      {
        title: "A storm affected your property and you're planning to file a claim.",
        body: "Oxford can document the roof's post-storm condition before your adjuster visit, so the roofing picture is already on record.",
      },
      {
        title: "You want an independent contractor assessment before the insurer's adjuster arrives.",
        body: "Oxford's inspection and estimate are based on what we actually find on your roof, not on what a claim might cover.",
      },
      {
        title: "Your adjuster is coming and you want to be prepared.",
        body: "Having thorough condition photography, a written estimate, and a clear record of the affected areas before the adjuster visit puts you in a better position going into that conversation.",
      },
      {
        title: "You need roofing documentation, not policy interpretation.",
        body: "Oxford's role is clear: we document the roof and define the roofing work. Coverage decisions belong to your insurer. We stay in our lane so the record we produce is credible and defensible.",
      },
    ],
    note: "",
  },
  principles: {
    eyebrow: "Oxford's approach",
    title: "What Oxford Does in This Process",
    items: [
      {
        title: "We document what the storm left behind.",
        body: "We provide thorough condition photography, identify affected areas by location, and create a written record tied to the specific property and date.",
      },
      {
        title: "We produce an accurate written estimate for the roofing work.",
        body: "Based on documented conditions, not on what we think a policy might pay. An honest estimate is the most useful document you can bring into a claims conversation.",
      },
      {
        title: "We're roofing contractors, not public adjusters.",
        body: "Coverage decisions, policy interpretation, and claim outcomes belong to you and your insurer. Oxford doesn't cross that line. That's exactly why our documentation carries weight when it counts.",
      },
    ],
  },
  scope: {
    eyebrow: "What the service covers",
    title: "What Oxford Provides",
    lead: "Here's the documentation Oxford produces as part of the claims assistance process:",
    items: [
      "A thorough record of visible post-storm conditions across the full roof",
      "Each affected area and component, identified by location",
      "Dated condition photography for every documented finding",
      "A written estimate for the proposed restoration or repair work",
      "A complete proposal you can share with your insurer or adjuster",
      "Project records when the roofing work is complete",
    ],
    note: "Oxford does not act as a public adjuster and does not interpret insurance policies or negotiate coverage on your behalf. Those decisions belong to you and your insurer.",
  },
  process: {
    eyebrow: "The process",
    title: "How It Works",
    lead: "Four steps from the storm inspection through the completed roofing work.",
    compact: true,
    steps: [
      {
        title: "Inspect",
        body: "We come out and inspect the full roof. We document post-storm conditions with photographs and a written record of every affected area, ideally before the adjuster visit.",
      },
      {
        title: "Document",
        body: "We organize everything we found by roof area and component. The result is a clear, dated record you can put in front of your adjuster and know it reflects what's actually on your roof.",
      },
      {
        title: "Estimate",
        body: "We prepare a written estimate for the roofing work based on documented conditions. It is accurate, specific, and tied to what we found, not to what we think the claim should pay.",
      },
      {
        title: "Complete",
        body: "Once the claim process has run its course and work is approved, we complete the roofing project according to the written proposal. Final documentation is provided at close.",
      },
    ],
  },
  proof: {
    kind: "comparison",
    eyebrow: "From the Field",
    title: "Chesterfield Hail Restoration",
    meta: "Residential · Storm condition documentation",
    body: "A hail event left visible impact across the roof surface. Oxford documented the post-storm condition, defined the restoration work, and completed the project in Chesterfield. Before and after photography on file.",
    beforeImage: "/uploads/chesterfield-hail-restoration-before.png",
    afterImage: "/uploads/chesterfield-hail-restoration-after.png",
    beforeAlt: "Chesterfield roof before hail restoration",
    afterAlt: "Chesterfield roof after hail restoration",
    href: "/portfolio/chesterfield-hail-restoration",
  },
  faq: {
    eyebrow: "Insurance claims assistance FAQ",
    title: "Common Questions About the Claims Process",
    items: [
      {
        question: "Does Oxford decide what my insurance will cover?",
        answer:
          "No. You should be cautious of any contractor who implies they can. Coverage is your insurer's call under your policy. What Oxford controls is the accuracy and completeness of the roofing documentation. That's what we focus on.",
      },
      {
        question: "Is this the same as hiring a public adjuster?",
        answer:
          "No. A public adjuster represents you in the claims process and negotiates on your behalf. That's a licensed role Oxford does not fill. Oxford's role is as your roofing contractor: documenting the damage, producing an accurate estimate, and completing the approved work. Those are different functions, and keeping them separate is important.",
      },
      {
        question: "What documentation does Oxford actually provide?",
        answer:
          "Oxford inspects your roof, photographs visible damage, and provides a written estimate you can share with your insurance company. Project records are provided when Oxford completes the approved roofing work.",
      },
      {
        question: "Will Oxford be there when the adjuster comes out?",
        answer:
          "Yes. Oxford can meet your adjuster on site when needed. We document visible roof damage and provide a written estimate tied to what we found. Coverage decisions remain with your insurer.",
      },
      {
        question: "What's the difference between storm restoration and claims assistance?",
        answer:
          "Storm Damage Restoration is the roofing service: the inspection, approved repair or replacement work, and finished project. Insurance Claims Assistance is the documentation that supports your conversation with the insurer while that work is being considered. Coverage decisions remain with your insurer.",
      },
    ],
  },
  cta: {
    eyebrow: "Begin with the roofing record",
    title: "Get the Roofing Documentation Right Before the Adjuster Arrives.",
    body: "The most useful thing you can do before your insurer sends someone out is have a thorough, independent roofing record already in hand. Oxford will come out, document the condition, and put together a written estimate. You'll walk into that conversation prepared.",
    buttonLabel: "Schedule Your Storm Assessment",
  },
};

const roofInspections: ApprovedServicePageData = {
  slug: "roof-inspections",
  metadata: {
    title: "Roof Inspections | Oxford Roofing",
    description:
      "Documented roof inspections for St. Louis-area properties, with condition photography and clear written findings.",
  },
  hero: {
    variant: "navy-split",
    eyebrow: "Roof inspections · St. Louis",
    label: "Roof Inspections",
    title: "Not sure what's going on with your roof? That's exactly what an inspection is for.",
    lead: "Oxford inspects your full roof, documents what we find, and gives you a clear picture of its condition, so the next decision, whatever it is, is based on something real. Whether you're seeing a problem, preparing for a sale, or just haven't had the roof looked at in a few years, the inspection is where it starts.",
    image: "/uploads/hero-residential-luxury-roof.png",
    alt: "Aerial view showing the complete roof geometry of a residential property",
    caption: "Residential roof context",
    ctaLabel: "Schedule Your Inspection",
    proofLabel: "See What We Look At",
    proofHref: "#roof-inspections-scope-title",
  },
  decision: {
    eyebrow: "When a roof inspection may be appropriate",
    title: "When to Get Your Roof Inspected",
    lead: "You don't need to see obvious damage to schedule an inspection. Here are the most common reasons Oxford gets called out.",
    criteria: [
      {
        title: "Something looks or feels different.",
        body: "A stain on the ceiling, a shingle that caught your eye, or a gutter full of granules. Anything that makes you think you should probably get that looked at is reason enough.",
      },
      {
        title: "You're thinking about repair or replacement and want an honest starting point.",
        body: "An inspection gives you a documented picture of the roof before any work is proposed, so you know the recommendation is based on what's actually there.",
      },
      {
        title: "You're buying or selling a home.",
        body: "A roofing inspection is one of the most useful due-diligence steps in a real estate transaction for both sides. Oxford documents the current condition so there are no surprises after closing.",
      },
      {
        title: "You just want to know where you stand.",
        body: "A lot of homeowners schedule an inspection simply because the roof is getting older and they'd rather know what's coming than be caught off guard by it.",
      },
    ],
  },
  principles: {
    eyebrow: "Oxford's inspection approach",
    title: "How Oxford Conducts an Inspection",
    items: [
      {
        title: "We start with the full picture.",
        body: "Roof geometry, reported concerns, and visible conditions from every accessible angle. We look at the whole system before focusing on specific areas.",
      },
      {
        title: "We document what we find, organized by area.",
        body: "Every surface, edge, transition, penetration, and adjoining component gets reviewed and recorded. You get a clear picture of where your roof stands, section by section.",
      },
      {
        title: "We tell you what we found before we tell you what to do about it.",
        body: "The inspection record and any proposed work are kept separate, so you can see what the roof actually looks like and make a decision from there, not from a contractor's recommendation alone.",
      },
    ],
  },
  scope: {
    eyebrow: "What the inspection covers",
    title: "What Oxford Looks At",
    lead: "A standard Oxford inspection covers the following, documented in writing with photographs for each area:",
    items: [
      "Your property context and anything specific you've noticed or reported",
      "All accessible roof surfaces, including every plane, slope, and visible section",
      "Edges, penetrations, and transitions, including gutters, drip edge, chimneys, vents, skylights, and roof-to-wall connections",
      "Adjoining components that affect the roof's overall performance",
      "Observed conditions documented by location, so the record is specific, not general",
      "A written inspection record with condition photography",
    ],
  },
  process: {
    eyebrow: "The inspection process",
    title: "How It Works",
    lead: "A straightforward four-step process from the initial call to a clear picture of your roof's condition.",
    steps: [
      {
        title: "Schedule",
        body: "Call or request an inspection online. We'll confirm a time that works for you and explain anything we need before the visit.",
      },
      {
        title: "Inspect",
        body: "Oxford gets on the roof and goes through it systematically, including every accessible section, transition, and detail that could affect how the roof is performing.",
      },
      {
        title: "Document",
        body: "We photograph and record what we find, organized by area. You get a clear written record of the roof's condition, not a verbal summary you have to remember.",
      },
      {
        title: "Review Together",
        body: "We go through what we found with you. If something needs attention, we'll explain what and why. If the roof is in good shape, we'll tell you that too. No pressure either way.",
      },
    ],
  },
  faq: {
    eyebrow: "Roof inspection FAQ",
    title: "Common Questions About Roof Inspections",
    items: [
      {
        question: "What does a roof inspection include?",
        answer:
          "Oxford inspects all accessible roof surfaces, including every slope, edge, penetration, transition, and adjoining component. We document what we find with photographs and a written record organized by area. You get a clear picture of your roof's current condition, with everything in writing.",
      },
      {
        question: "Can an inspection find problems that aren't visible from the surface?",
        answer:
          "A standard inspection covers everything accessible and visible. Conditions that are fully concealed beneath the decking or inside the structure can't always be confirmed without additional evaluation. If Oxford sees anything during the inspection that suggests a hidden issue, we'll flag it and explain what a closer look would involve.",
      },
      {
        question: "Does an inspection mean the roof needs replacement?",
        answer:
          "No. The inspection tells you what's there. It doesn't assume what needs to happen next. Some roofs we inspect are in great shape. Some need a repair. Some have reached a point where replacement makes more sense than continued patching. Oxford will tell you which one applies and back it up with what we documented.",
      },
      {
        question: "What do I actually receive after the inspection?",
        answer:
          "Condition photography and a written record of the findings, organized by area. If a repair or replacement is the right next step, we'll follow up with a written proposal based on what the inspection documented. You'll have something in hand, not just a conversation.",
      },
      {
        question: "How often should a roof be inspected?",
        answer:
          "Inspection timing depends on the roof's age, materials, condition, and recent weather. If you notice a change or the property has been through a significant storm, schedule an inspection. After reviewing the roof, Oxford can recommend a practical interval based on the property in front of us.",
      },
    ],
  },
  cta: {
    eyebrow: "Begin with an inspection",
    title: "Start With What You Know. Schedule an Inspection.",
    body: "An Oxford inspection gives you a documented, honest picture of your roof's condition. No assumptions about what comes next. No pressure toward a specific outcome. Just a clear starting point, so whatever decision you're facing, you're making it with real information.",
    buttonLabel: "Schedule Your Inspection",
  },
};

const preventativeMaintenance: ApprovedServicePageData = {
  slug: "preventative-maintenance",
  metadata: {
    title: "Preventative Maintenance | Oxford Roofing",
    description:
      "Property-specific roof maintenance planning for residential and commercial properties across the St. Louis area.",
  },
  hero: {
    variant: "commercial-panel",
    eyebrow: "Preventative maintenance · St. Louis",
    label: "Preventative Maintenance",
    title: "The best roofing call you'll ever make is the one before something goes wrong.",
    lead: "Regular attention gives property owners a chance to identify changes before they become larger roofing problems. Oxford works with owners who want to understand the condition of their roof and define a practical maintenance plan for the property in front of us.",
    image: "/uploads/clayton-office-park-tpo-reroof.png",
    alt: "Aerial view of the completed Clayton Office Park commercial TPO roof",
    caption: "Clayton Office Park · Commercial roofing context",
    ctaLabel: "Talk to Oxford About Maintenance",
    proofLabel: "Start With an Inspection",
    proofHref: "/contact",
  },
  decision: {
    eyebrow: "When preventative maintenance may be appropriate",
    title: "Who This Is For",
    lead: "Maintenance isn't for every roofing situation. But if any of these sound familiar, it's worth having the conversation.",
    criteria: [
      {
        title: "You've had roofing work done and want to protect that investment.",
        body: "A documented baseline after replacement, repair, or restoration gives you a useful reference point for future roof reviews.",
      },
      {
        title: "Your roof is aging and you'd rather catch changes early.",
        body: "Shingles, flashing, drainage areas, and penetrations all change over time. Periodic review can identify concerns before they become larger problems.",
      },
      {
        title: "You manage a commercial property and need an organized roof record.",
        body: "A property-specific maintenance conversation can establish the condition records and review schedule that make sense for the building.",
      },
      {
        title: "You simply want to stay on top of the roof.",
        body: "Some owners want their roof reviewed periodically by someone who knows what to look for. That's a reasonable place to begin.",
      },
    ],
  },
  principles: {
    eyebrow: "Oxford's maintenance approach",
    title: "How Oxford Approaches Maintenance",
    items: [
      {
        title: "We start by documenting the roof as it is right now.",
        body: "A baseline inspection creates a written reference point for the roof's current visible condition and the areas that deserve attention over time.",
      },
      {
        title: "We compare future findings against the documented baseline.",
        body: "When a visible condition changes, you hear about it with documentation that shows what changed and where it occurred.",
      },
      {
        title: "We keep maintenance reviews and repair proposals separate.",
        body: "If a review identifies work that needs attention, Oxford documents it and presents it separately. You know what is proposed and what it will cost before anything is approved.",
      },
    ],
  },
  scope: {
    eyebrow: "What Oxford documents",
    title: "What a Maintenance Plan Can Document",
    lead: "The written plan for each property defines what Oxford reviews and records. Depending on the roof, that may include:",
    items: [
      "The roof's current visible condition compared with the documented baseline",
      "Accessible roof surfaces reviewed and photographed",
      "Edges, penetrations, and transitions where early changes may appear",
      "Visible conditions at drainage areas and gutters",
      "Changes since the previous documented review",
      "Findings that warrant follow-up, presented as a separate written proposal",
    ],
    note: "Oxford's maintenance plans are tailored to the property. What's included, how often reviews occur, and what the records look like are defined in the written plan for that roof.",
  },
  process: {
    eyebrow: "The maintenance process",
    title: "How It Works",
    lead: "A simple, documented cycle built around the needs of one property.",
    compact: true,
    steps: [
      {
        title: "Start With a Baseline",
        body: "The first step is an inspection that documents the roof's current visible condition. This becomes the reference point for future reviews.",
      },
      {
        title: "Agree on the Review Plan",
        body: "Oxford discusses what the property needs and defines the review timing and documented activities before the maintenance relationship begins.",
      },
      {
        title: "Flag What Needs Attention",
        body: "If a review identifies something worth addressing, we document it and present it as a separate proposal. Nothing gets done without your approval.",
      },
      {
        title: "Keep the Record Current",
        body: "Each confirmed review updates the property's roof record with what Oxford observed, what changed, and the next step discussed with the owner.",
      },
    ],
  },
  faq: {
    eyebrow: "Preventative maintenance FAQ",
    title: "Common Questions About Roof Maintenance",
    items: [
      {
        question: "What is included in preventative maintenance?",
        answer:
          "It depends on the property. Oxford defines the plan in writing before committing to a review schedule. The plan identifies the accessible roof areas Oxford will review, the records to be provided, and how any separately proposed repairs will be handled.",
      },
      {
        question: "Does Oxford discuss maintenance for both homes and commercial properties?",
        answer:
          "Yes. Residential and commercial roofs have different systems and maintenance needs, so Oxford begins with the specific property before recommending an approach or review schedule.",
      },
      {
        question: "How often should maintenance occur?",
        answer:
          "The right interval depends on the roof's age, materials, current condition, property use, and recent weather. Oxford recommends timing after reviewing the roof and records the agreed review plan for that property.",
      },
      {
        question: "Does maintenance prevent every leak or repair?",
        answer:
          "No. Maintenance cannot guarantee that a roof will never leak or require repair. Its purpose is to document visible change and give property owners an opportunity to address concerns before they become larger problems.",
      },
      {
        question: "Are repairs included in a maintenance visit?",
        answer:
          "Not automatically. The written maintenance plan explains what is included. If a review identifies repair work outside that plan, Oxford documents it and presents a separate proposal before any additional work begins.",
      },
    ],
  },
  cta: {
    eyebrow: "Begin with a conversation",
    title: "The Best Time to Start Maintaining a Roof Is Before It Needs It.",
    body: "Oxford works with homeowners and property owners who want a documented, consistent approach to their roof, not a reactive one. Start with a conversation. We'll look at the property, explain what a reasonable maintenance plan could include, and let you decide if it makes sense.",
    buttonLabel: "Talk to Oxford About Maintenance",
  },
};

export const approvedServicePages: Record<string, ApprovedServicePageData> = {
  [roofReplacement.slug]: roofReplacement,
  [residentialRoofing.slug]: residentialRoofing,
  [commercialRoofing.slug]: commercialRoofing,
  [stormDamageRestoration.slug]: stormDamageRestoration,
  [roofRepair.slug]: roofRepair,
  [insuranceClaims.slug]: insuranceClaims,
  [roofInspections.slug]: roofInspections,
  [preventativeMaintenance.slug]: preventativeMaintenance,
};
