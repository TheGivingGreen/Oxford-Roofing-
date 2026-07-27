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
    proofLabel: string;
  };
  decision: {
    eyebrow: string;
    title: string;
    lead: string;
    criteria: ServiceCriterion[];
    note: string;
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
    note: string;
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
    compact?: boolean;
    steps: ServiceProcessStep[];
  };
  proof:
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
        body: string;
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
  faq: {
    eyebrow: string;
    title: string;
    lead: string;
    items: ServiceFaq[];
  };
  cta: {
    eyebrow: string;
    title: string;
    body: string;
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
    title: "A clear path from worn roof to finished system.",
    lead: "A responsible replacement begins with understanding the roof that is already there. Oxford documents the visible condition, defines the proposed work, and gives you a clear basis for the next decision.",
    image: "/uploads/photography-residential-tearoff-kirkwood.png",
    alt: "Roofing crew removing the existing shingles from a Kirkwood home",
    caption: "Kirkwood Full Tear-Off",
    proofLabel: "View the Kirkwood Project",
  },
  decision: {
    eyebrow: "When to consider replacement",
    title: "When replacement may be the responsible answer.",
    lead: "Not every roof problem calls for a complete replacement. The condition, extent, and reliability of the existing system should determine whether continued repair remains a sound option.",
    criteria: [
      {
        title: "Widespread material deterioration",
        body: "When wear is distributed across the roof rather than limited to one repairable area, the system may warrant a broader evaluation.",
      },
      {
        title: "Recurring leaks in multiple areas",
        body: "Repeated water entry in different locations can indicate that isolated repairs are no longer addressing the roof as a complete system.",
      },
      {
        title: "Conditions beneath the visible surface",
        body: "The condition of the materials below the finished roof may affect which repair or replacement options remain appropriate.",
      },
      {
        title: "A system that cannot be repaired reliably",
        body: "Replacement may be considered when further localized work cannot reasonably restore dependable performance.",
      },
    ],
    note: "These conditions do not diagnose an individual roof. The appropriate recommendation depends on the documented condition of the property and the proposed written scope.",
  },
  principles: {
    eyebrow: "Why Oxford for roof replacement",
    title: "A replacement project should be defined before it is built.",
    items: [
      {
        title: "Document the condition",
        body: "Begin with a clear record of the roof’s visible condition and the areas that inform the recommendation.",
      },
      {
        title: "Define the complete scope",
        body: "Set out the proposed roof assembly, project sequence, and known conditions in a written scope for review.",
      },
      {
        title: "Control the execution",
        body: "Use the approved scope as the reference point from jobsite preparation through final project review.",
      },
    ],
  },
  scope: {
    eyebrow: "What the work includes",
    title: "The major parts of a professional replacement project.",
    lead: "The final work is established by the documented inspection and approved written proposal. A replacement scope may address the following project stages.",
    items: [
      "Property and jobsite preparation",
      "Removal of the existing roof system",
      "Review of the exposed roof deck",
      "Installation of the approved roof assembly",
      "Flashing and critical transition details",
      "Cleanup and final documentation",
    ],
    note: "Specific materials, repairs, transitions, and documentation remain subject to the property’s written proposal.",
    image: "/uploads/photography-residential-tearoff-kirkwood.png",
    alt: "Roofing crew working during removal of an existing residential roof system",
  },
  process: {
    eyebrow: "The Oxford process",
    title: "Four stages. One documented sequence.",
    steps: [
      {
        title: "Assess",
        body: "Document the existing roof and visible conditions.",
      },
      {
        title: "Define",
        body: "Prepare the proposed scope, materials, and project sequence.",
      },
      {
        title: "Replace",
        body: "Complete the approved work through a controlled installation process.",
      },
      {
        title: "Verify",
        body: "Review the completed work and applicable project documentation.",
      },
    ],
  },
  proof: {
    kind: "single",
    eyebrow: "Relevant proof of work",
    title: "Kirkwood Full Tear-Off",
    meta: "Residential · Before & after",
    body: "See the existing Oxford project entry and photography associated with this residential full tear-off.",
    image: "/uploads/photography-residential-tearoff-kirkwood.png",
    alt: "Roofing crew completing a residential full tear-off in Kirkwood",
    href: "/portfolio/kirkwood-tear-off",
  },
  faq: {
    eyebrow: "Roof replacement FAQ",
    title: "Clear questions before a scope is approved.",
    lead: "The answers below establish a conservative information structure for final operational review.",
    items: [
      {
        question: "How do I know whether the roof needs repair or replacement?",
        answer:
          "A repair may remain appropriate when the problem is isolated and the surrounding system can still perform reliably. Replacement may be considered when deterioration, water entry, or underlying conditions are more widespread. The appropriate next step depends on the documented roof condition.",
      },
      {
        question: "What does the roof assessment consider?",
        answer:
          "The assessment considers visible roof conditions that may inform the recommendation and identifies areas requiring closer review. The final proposal should define the conditions and work included in the proposed scope.",
      },
      {
        question: "What happens after the existing roof is removed?",
        answer:
          "The exposed roof deck can be reviewed for visible conditions that affect the approved roof assembly. Any condition requiring work outside the original proposal should be documented and addressed through the project’s agreed change process.",
      },
      {
        question: "How is the replacement scope established?",
        answer:
          "The proposed scope is based on documented conditions, the selected roof assembly, and property-specific details. It should identify the approved work, proposed materials, and project sequence before installation begins.",
      },
      {
        question: "What project documentation will I receive?",
        answer:
          "The final Oxford process should identify which inspection records, proposal documents, approved changes, and completion records are provided for a roof replacement project. Exact deliverables require operational confirmation.",
      },
    ],
  },
  cta: {
    eyebrow: "Begin with the condition",
    title: "Start with a documented roof assessment.",
    body: "Oxford will review the roof’s condition and define the appropriate next step. An assessment does not assume that complete replacement is required.",
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
    lead: "Residential roofing begins with the home itself—its architecture, roof geometry, visible condition, and approved project requirements. The proposed system should bring those factors into one clear scope.",
    image: "/uploads/hero-residential-luxury-roof.png",
    alt: "Aerial view of a finished roof on a large residential home",
    caption: "Residential roof system",
    proofLabel: "View Residential Work",
  },
  decision: {
    eyebrow: "When residential roofing is appropriate",
    title: "When the home and roof need to be considered together.",
    lead: "A residential roofing scope should respond to the property in front of it. These are decision points for evaluating the work—not a diagnosis of an individual home.",
    criteria: [
      {
        title: "A complete roof system is being evaluated",
        body: "The work extends beyond one isolated repair and requires a clearly defined residential roofing scope.",
      },
      {
        title: "The roof has multiple planes and transitions",
        body: "Valleys, ridges, walls, penetrations, and adjoining materials can affect how the proposed system is defined.",
      },
      {
        title: "The proposed system must fit the architecture",
        body: "The roof is a major part of the home’s exterior composition as well as a working building assembly.",
      },
      {
        title: "Property-specific conditions affect the scope",
        body: "The written proposal should reflect documented roof conditions and the work approved for that home.",
      },
    ],
    note: "Available materials, installation methods, schedules, and final deliverables remain subject to Oxford’s confirmed residential offering and the property’s written proposal.",
  },
  principles: {
    eyebrow: "Why Oxford for residential roofing",
    title: "The house sets the context. The scope defines the work.",
    items: [
      {
        title: "Read the architecture",
        body: "Begin with the roof geometry, exterior composition, and visible conditions that shape the project.",
      },
      {
        title: "Define the roof system",
        body: "Bring the approved assembly, project details, and known conditions into a written residential scope.",
      },
      {
        title: "Coordinate every transition",
        body: "Treat changes in plane, roof-to-wall conditions, and other critical junctions as part of the complete system.",
      },
    ],
  },
  scope: {
    eyebrow: "What the residential scope considers",
    title: "A complete view of the home, roof, and approved work.",
    lead: "The final scope depends on the documented inspection and written proposal. A residential roofing project may require the following categories to be defined.",
    items: [
      "Existing roof condition and geometry",
      "Proposed roof assembly",
      "Roof planes, edges, and transitions",
      "Property and jobsite considerations",
      "Approved roofing work",
      "Applicable project records",
    ],
    note: "Kirkwood photography is shown as residential active-work context only. It is not identified as Ladue or Webster Groves.",
    image: "/uploads/photography-residential-tearoff-kirkwood.png",
    alt: "Roofing crew removing the existing roof from a residential home",
  },
  process: {
    eyebrow: "The residential process",
    title: "Four stages from property context to finished system.",
    steps: [
      {
        title: "Assess the home and roof",
        body: "Review the property context and document visible roof conditions.",
      },
      {
        title: "Specify the proposed system",
        body: "Define the proposed assembly and work sequence for customer review.",
      },
      {
        title: "Complete the approved work",
        body: "Use the accepted written scope as the reference for the roofing project.",
      },
      {
        title: "Review the finished system",
        body: "Review the completed roof and any applicable project records.",
      },
    ],
  },
  proof: {
    kind: "grid",
    eyebrow: "Relevant proof of work",
    title: "Two residential systems. Two architectural contexts.",
    body: "These project titles, locations, photography, and system metadata are already verified in Oxford’s portfolio.",
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
  faq: {
    eyebrow: "Residential roofing FAQ",
    title: "Questions to resolve before the residential scope is approved.",
    lead: "These draft answers stay deliberately conservative pending operational review.",
    items: [
      {
        question: "What does a residential roofing scope address?",
        answer:
          "It can identify the documented roof condition, proposed roof assembly, project-specific transitions, and approved work. The property’s written proposal determines the actual scope.",
      },
      {
        question: "How is the proposed roof system selected?",
        answer:
          "The decision should account for documented roof conditions, roof geometry, the home’s architecture, and the options Oxford confirms for that project. Material availability requires final confirmation.",
      },
      {
        question: "Why do roof geometry and transitions matter?",
        answer:
          "Valleys, ridges, walls, edges, and penetrations are part of how the roof functions as a complete assembly. The proposal should identify the project details included in Oxford’s work.",
      },
      {
        question: "Is residential roofing the same as roof replacement?",
        answer:
          "The services overlap, but they answer different questions. Roof Replacement focuses on when and how an existing system is replaced. Residential Roofing is the broader architectural and property context for the approved roof system.",
      },
      {
        question: "What records are provided after the work?",
        answer:
          "The exact inspection, proposal, change, completion, and product records supplied by Oxford require operational confirmation and should be stated in the final written proposal.",
      },
    ],
  },
  cta: {
    eyebrow: "Begin with the home",
    title: "Start with the property, the roof, and the system they require.",
    body: "Oxford can review the visible residential roof condition and define the appropriate next step for the property. The recommendation depends on the documented assessment.",
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
    lead: "A low-slope or flat-roof project begins with the building, the visible roof condition, and the approved roofing scope. The system and work sequence should be defined for that property.",
    image: "/uploads/photography-commercial-flat-roof-downtown-stl.png",
    alt: "Roofing crew installing a commercial flat roof in downtown St. Louis",
    caption: "Commercial flat-roof installation",
    proofLabel: "View Commercial Work",
  },
  decision: {
    eyebrow: "When commercial roofing is appropriate",
    title: "When the roof must be defined as part of the building.",
    lead: "Commercial roofing decisions should reflect the roof asset, rooftop conditions, and the work the property has approved—not a generic system applied without context.",
    criteria: [
      {
        title: "A low-slope or flat-roof project is being evaluated",
        body: "The building requires a clearly defined commercial roofing scope rather than a residential roof approach.",
      },
      {
        title: "Rooftop conditions shape the proposed system",
        body: "Equipment, penetrations, edges, transitions, and existing conditions may affect how the work is defined.",
      },
      {
        title: "The project sequence requires written coordination",
        body: "The proposal should identify the approved roofing work and the sequence established for the property.",
      },
      {
        title: "The owner needs a documented roof decision",
        body: "The recommendation should be based on the roof’s visible condition and the commercial project requirements.",
      },
    ],
    note: "Building access, scheduling, occupied-property practices, safety procedures, available systems, and closeout deliverables require operational confirmation.",
  },
  principles: {
    eyebrow: "Why Oxford for commercial roofing",
    title: "The roof is one asset. The building is the complete context.",
    items: [
      {
        title: "Understand the building",
        body: "Begin with the visible roof conditions, property context, rooftop equipment, and known project constraints.",
      },
      {
        title: "Define the system",
        body: "Bring the proposed roof assembly, critical details, and approved work into one commercial roofing scope.",
      },
      {
        title: "Coordinate the work",
        body: "Use the written project sequence as the reference point for the commercial installation and review.",
      },
    ],
  },
  scope: {
    eyebrow: "What the commercial scope considers",
    title: "The roof asset, its details, and the approved project sequence.",
    lead: "The final scope depends on the documented roof condition and written proposal. A commercial roofing project may require the following categories to be addressed.",
    items: [
      "Existing commercial roof condition",
      "Proposed low-slope or flat-roof assembly",
      "Equipment, penetrations, and transitions",
      "Property-specific project constraints",
      "Approved installation sequence",
      "Applicable closeout information",
    ],
    note: "Exact systems, coordination practices, and closeout deliverables remain subject to Oxford’s confirmed commercial offering and written proposal.",
    image: "/uploads/photography-commercial-flat-roof-downtown-stl.png",
    alt: "Commercial roofing crew working around rooftop equipment on a low-slope roof",
    reverse: true,
  },
  process: {
    eyebrow: "The commercial process",
    title: "A deliberate sequence for the roof and property.",
    compact: true,
    steps: [
      {
        title: "Assess the roof asset",
        body: "Review the visible commercial roof condition and property context.",
      },
      {
        title: "Plan the system and sequence",
        body: "Define the proposed assembly and project sequence for review.",
      },
      {
        title: "Complete the approved installation",
        body: "Use the accepted scope as the reference for the commercial roofing work.",
      },
      {
        title: "Review the roof and closeout information",
        body: "Review the completed roof and the project information Oxford confirms as applicable.",
      },
    ],
  },
  proof: {
    kind: "grid",
    eyebrow: "Relevant commercial proof",
    title: "Verified low-slope work in two property contexts.",
    body: "These Oxford portfolio projects verify TPO and EPDM project examples. They do not establish additional commercial systems or maintenance services.",
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
  faq: {
    eyebrow: "Commercial roofing FAQ",
    title: "Questions to define before commercial work begins.",
    lead: "These answers describe a conservative decision framework. Operational details remain subject to confirmation.",
    items: [
      {
        question:
          "Which commercial roof systems are verified in Oxford’s portfolio?",
        answer:
          "Oxford’s current portfolio identifies TPO membrane at Clayton Office Park and EPDM membrane at Maplewood Retail Center. Additional systems and availability require confirmation.",
      },
      {
        question: "How is a commercial roofing scope established?",
        answer:
          "The proposed scope should reflect documented roof conditions, the building context, the approved assembly, and project-specific details. The written proposal determines the actual work.",
      },
      {
        question: "How are building operations considered?",
        answer:
          "Property-specific constraints should be identified while the project sequence is developed. Oxford’s exact occupied-building and scheduling practices require operational confirmation; no downtime guarantee is implied.",
      },
      {
        question: "How are rooftop equipment and penetrations addressed?",
        answer:
          "Equipment, curbs, penetrations, edges, and transitions may affect the proposed roof details. The written commercial proposal should identify which conditions and details are included.",
      },
      {
        question: "What closeout information is provided?",
        answer:
          "Oxford’s exact inspection, completion, product, and closeout deliverables require operational confirmation. Final requirements should be stated in the approved project documents.",
      },
    ],
  },
  cta: {
    eyebrow: "Begin with the building",
    title: "Start with a documented view of the commercial roof.",
    body: "Oxford can review the visible roof condition and property context before defining the proposed commercial roofing scope. No particular system or schedule is assumed in advance.",
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
    title: "Document the storm condition before deciding what comes next.",
    lead: "A storm-related roofing decision should begin with the visible condition of the roof, the areas affected, and a written scope based on what is documented—not assumptions about cause, coverage, or outcome.",
    image: "/uploads/chesterfield-hail-restoration-before.png",
    alt: "Residential roof before the Chesterfield hail restoration project",
    caption: "Chesterfield · Before restoration",
    proofLabel: "View Storm Restoration",
  },
  decision: {
    eyebrow: "When storm damage restoration is appropriate",
    title: "When a weather event is followed by a changed roof condition.",
    lead: "These conditions can justify a closer look. They do not, on their own, establish the cause of damage, the correct restoration method, or insurance coverage.",
    criteria: [
      {
        title: "Hail, wind, or debris may have affected the property",
        body: "A recent weather event creates a reason to document the roof’s visible condition.",
      },
      {
        title: "The roof looks different after the storm",
        body: "Visible changes at roof surfaces, edges, transitions, or adjoining components warrant a property-specific review.",
      },
      {
        title: "Water entry follows a weather event",
        body: "The observed interior or exterior condition should be documented before the proposed roofing work is defined.",
      },
      {
        title: "A documented restoration decision is needed",
        body: "The owner needs a written scope that connects visible roof conditions to the proposed work.",
      },
    ],
    note: "Oxford’s exact storm-assessment methods, emergency measures, documentation deliverables, and role in an insurance process require operational confirmation.",
  },
  principles: {
    eyebrow: "Oxford’s storm-restoration principles",
    title: "Observation first. Scope second. Restoration follows.",
    items: [
      {
        title: "Record the conditions",
        body: "Begin with the roof and property as they appear after the reported weather event.",
      },
      {
        title: "Define the affected areas",
        body: "Organize the visible findings by roof area, component, and relevant transition.",
      },
      {
        title: "Build the restoration scope",
        body: "Use the documented condition and approved work to establish the written project scope.",
      },
    ],
  },
  scope: {
    eyebrow: "What the storm scope considers",
    title: "Visible conditions, affected areas, and the approved path forward.",
    lead: "The final scope depends on Oxford’s documented assessment and the written proposal. A storm restoration project may require the following categories to be defined.",
    items: [
      "Visible post-storm roof condition",
      "Roof areas and components reviewed",
      "Applicable condition photography",
      "Proposed restoration scope",
      "Approved roofing work",
      "Applicable project records",
    ],
    note: "Oxford’s assessment method, documentation package, restoration criteria, and the separation between storm restoration and insurance claims assistance require operational confirmation.",
    placeholder: {
      kicker: "Photography needed",
      title: "Storm-condition assessment in progress",
      note: "Documentary image: a safely equipped roofing professional photographing visible hail or wind conditions on a Midwest residential roof.",
      ariaLabel:
        "Photography placeholder for a roofing professional documenting storm conditions",
    },
  },
  process: {
    eyebrow: "The storm restoration process",
    title: "Four stages from visible condition to approved restoration.",
    steps: [
      {
        title: "Assess",
        body: "Review the property context and the roof’s visible post-storm condition.",
      },
      {
        title: "Document",
        body: "Organize the observed conditions and affected roof areas for review.",
      },
      {
        title: "Define",
        body: "Build a written restoration scope based on the documented condition and approved work.",
      },
      {
        title: "Restore",
        body: "Complete and review the roofing work identified in the accepted proposal.",
      },
    ],
  },
  proof: {
    kind: "comparison",
    eyebrow: "Verified storm restoration",
    title: "Chesterfield Hail Restoration",
    meta: "Residential · Before and after · Storm",
    body: "Oxford’s existing portfolio identifies this Chesterfield project as hail restoration. The aligned before-and-after photography shows the verified visual record without adding an unconfirmed project scope.",
    beforeImage: "/uploads/chesterfield-hail-restoration-before.png",
    afterImage: "/uploads/chesterfield-hail-restoration-after.png",
    beforeAlt: "Chesterfield residential roof before hail restoration",
    afterAlt: "Chesterfield residential roof after hail restoration",
    href: "/portfolio/chesterfield-hail-restoration",
  },
  faq: {
    eyebrow: "Storm damage restoration FAQ",
    title:
      "Questions to separate visible conditions from unconfirmed outcomes.",
    lead: "These draft answers define a conservative boundary around storm restoration. Oxford’s exact practices remain subject to operational review.",
    items: [
      {
        question: "What visible roof conditions can follow a storm?",
        answer:
          "Hail, wind, and debris can be followed by visible changes to roof surfaces, edges, transitions, or adjoining components. An observation does not by itself certify the cause or establish the appropriate work.",
      },
      {
        question: "Does a storm assessment determine insurance coverage?",
        answer:
          "No. A roofing assessment can document visible roof conditions. Coverage decisions belong to the insurer under the applicable policy, and no coverage outcome is represented here.",
      },
      {
        question: "How is repair compared with a larger restoration scope?",
        answer:
          "The decision should follow the documented extent of the visible condition, the roof context, and the proposed written scope. Oxford’s specific restoration criteria require operational confirmation.",
      },
      {
        question: "Is insurance claims assistance part of storm restoration?",
        answer:
          "Oxford lists Insurance Claims Assistance as a separate service. The company’s exact role, boundaries, and documentation practices require confirmation; no insurer representation or claim outcome is implied.",
      },
      {
        question: "What documentation is provided?",
        answer:
          "The exact condition photography, assessment notes, proposal, change, completion, and product records supplied by Oxford require operational confirmation and should be identified in the written project documents.",
      },
    ],
  },
  cta: {
    eyebrow: "Begin with the visible condition",
    title: "Start with a documented view of the storm condition.",
    body: "Oxford can review the property and visible roof condition before the proposed restoration scope is defined. No cause, coverage decision, response time, or project outcome is assumed in advance.",
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
    title:
      "Resolve the affected area without losing sight of the roof around it.",
    lead: "A repair decision should begin with the visible condition, the surrounding roof system, and a written boundary for the proposed work. The right scope depends on what can be documented at the property.",
    image: "/uploads/hero-residential-luxury-roof.png",
    alt: "Aerial view of a finished residential roof used as general roof context",
    caption: "Residential roof context",
    proofLabel: "Review the Repair Framework",
  },
  decision: {
    eyebrow: "When roof repair may be appropriate",
    title: "When the visible condition appears limited enough to define.",
    lead: "A localized condition can justify a repair evaluation. It does not establish that repair is sufficient until the affected area and surrounding roof context have been reviewed.",
    criteria: [
      {
        title: "The concern appears limited to one roof area",
        body: "A visible condition at a defined location can be evaluated without assuming that the complete roof requires replacement.",
      },
      {
        title: "A transition or penetration requires review",
        body: "Roof-to-wall conditions, penetrations, edges, and flashing details can be considered as part of the affected area.",
      },
      {
        title: "The surrounding roof condition matters",
        body: "The proposed repair should account for the visible condition of the adjoining roof rather than treating one detail in isolation.",
      },
      {
        title: "A written repair boundary is needed",
        body: "The property owner needs a proposed scope that identifies the area and work being considered.",
      },
    ],
    note: "Oxford’s repair criteria, diagnostic methods, available repair systems, scheduling practices, and documentation deliverables require operational confirmation.",
  },
  principles: {
    eyebrow: "Oxford’s roof-repair principles",
    title:
      "Locate the condition. Define the boundary. Respect the surrounding system.",
    items: [
      {
        title: "Locate the concern",
        body: "Begin with the reported area and the visible roof conditions that may inform the repair decision.",
      },
      {
        title: "Define the repair boundary",
        body: "Identify the proposed work and the roof area included in the written repair scope.",
      },
      {
        title: "Review the context",
        body: "Consider how the affected area connects to adjoining materials, transitions, and the surrounding roof.",
      },
    ],
  },
  scope: {
    eyebrow: "What the repair scope considers",
    title: "The affected area, adjoining details, and the proposed work.",
    lead: "The final repair scope depends on the documented visible condition and written proposal. A repair evaluation may require the following categories to be defined.",
    items: [
      "Reported concern and visible roof condition",
      "Affected roof area",
      "Adjoining flashing, edges, or transitions",
      "Visible surrounding roof context",
      "Proposed repair work",
      "Applicable project records",
    ],
    note: "Exact repair methods, materials, limitations, and records remain subject to Oxford’s confirmed offering and the property’s written proposal.",
    placeholder: {
      kicker: "Photography needed",
      title: "Service-specific repair documentation",
      note: "Documentary image needed: a clearly bounded, safely accessed roof-repair condition with no visible third-party branding.",
      ariaLabel:
        "Photography placeholder for a documented roof-repair condition",
    },
  },
  process: {
    eyebrow: "The roof-repair process",
    title: "Four stages from reported concern to approved repair work.",
    steps: [
      {
        title: "Review",
        body: "Begin with the property context, reported concern, and visible roof condition.",
      },
      {
        title: "Document",
        body: "Organize the affected area and adjoining visible conditions for review.",
      },
      {
        title: "Define",
        body: "Prepare a proposed repair boundary and written scope for the property.",
      },
      {
        title: "Complete and review",
        body: "Complete the accepted repair work and review the area and applicable records.",
      },
    ],
  },
  proof: {
    kind: "placeholder",
    eyebrow: "Service-specific proof",
    title: "Verified roof-repair project photography is still needed.",
    body: "Oxford’s current portfolio does not identify a project specifically as Roof Repair. An unrelated replacement or restoration project is not being presented as repair proof.",
    kicker: "Photography gap",
    note: "Add a verified Oxford repair project only after its location, scope, and photography are confirmed for publication.",
  },
  faq: {
    eyebrow: "Roof repair FAQ",
    title: "Questions to define before a repair scope is approved.",
    lead: "These answers describe a conservative repair framework. Oxford’s exact methods and deliverables remain subject to operational confirmation.",
    items: [
      {
        question: "How is repair compared with roof replacement?",
        answer:
          "Repair may be considered when the visible condition can be addressed within a reliable, clearly defined area. Replacement may require consideration when conditions are more widespread. The recommendation depends on the documented roof condition.",
      },
      {
        question:
          "Can the reported leak location differ from the roof condition?",
        answer:
          "The location where water is observed may not, by itself, establish the roof condition or proposed work. The visible roof and property context should be reviewed before a repair scope is defined.",
      },
      {
        question: "What should a repair proposal identify?",
        answer:
          "A proposed repair scope should identify the affected area, the work being considered, relevant adjoining details, and any stated limitations. The written proposal determines the actual work.",
      },
      {
        question: "Does a repair guarantee the condition will not recur?",
        answer:
          "No performance or recurrence guarantee is stated here. Any applicable terms, limitations, or warranty language must be confirmed in Oxford’s written proposal.",
      },
      {
        question: "What repair records are provided?",
        answer:
          "Oxford’s exact condition photographs, repair notes, completion records, and other deliverables require operational confirmation and should be stated in the project documents.",
      },
    ],
  },
  cta: {
    eyebrow: "Begin with the affected area",
    title: "Start with the visible condition and the roof around it.",
    body: "Oxford can review the reported concern and visible roof context before a proposed repair scope is defined. A repair recommendation is not assumed in advance.",
  },
};

const insuranceClaims: ApprovedServicePageData = {
  slug: "insurance-claims",
  metadata: {
    title: "Insurance Claims Assistance | Oxford Roofing",
    description:
      "Contractor-focused roof condition documentation and proposed roofing scope support, kept separate from insurance coverage and claim decisions.",
  },
  hero: {
    variant: "light-split",
    eyebrow: "Insurance claims assistance · St. Louis",
    label: "Insurance Claims Assistance",
    title: "Keep the roofing record separate from the coverage decision.",
    lead: "Oxford’s defensible role is as a roofing contractor: documenting visible roof conditions and defining proposed roofing work. Coverage, policy interpretation, claim approval, and insurer decisions remain outside that contractor role.",
    image: "/uploads/chesterfield-hail-restoration-before.png",
    alt: "Residential roof with visible post-storm conditions in Chesterfield",
    caption: "Documented storm-condition context",
    proofLabel: "Review the Contractor Boundary",
  },
  decision: {
    eyebrow: "When contractor documentation may be relevant",
    title: "When the roof condition and proposed work need a clear record.",
    lead: "Roofing documentation can support an owner’s understanding of the contractor scope. It does not decide coverage, interpret a policy, or represent an insurance outcome.",
    criteria: [
      {
        title: "A reported event is followed by a changed roof condition",
        body: "Visible conditions can be organized without certifying cause or predicting a coverage decision.",
      },
      {
        title: "The owner needs a contractor view of the roof",
        body: "The roofing record can distinguish visible observations from the proposed work Oxford is prepared to quote.",
      },
      {
        title: "Roofing documents require a clear boundary",
        body: "Condition photographs, estimates, and project records should be described according to what Oxford actually provides.",
      },
      {
        title: "The contractor role must remain distinct",
        body: "Policy interpretation, claim advocacy, coverage negotiation, and approval authority are not represented as Oxford services here.",
      },
    ],
    note: "Oxford’s exact documentation package, communication practices, insurer or adjuster contact, and administrative boundaries require business and legal confirmation.",
  },
  principles: {
    eyebrow: "Oxford’s documentation principles",
    title: "Document the roof. Define the work. Preserve the boundary.",
    items: [
      {
        title: "Record visible conditions",
        body: "Organize the roof conditions Oxford can observe without making a coverage or policy determination.",
      },
      {
        title: "Define contractor work",
        body: "Describe the proposed roofing scope and project information Oxford confirms for the property.",
      },
      {
        title: "Separate insurance decisions",
        body: "Keep insurer, adjuster, policy, coverage, and claim-outcome decisions outside Oxford’s contractor role.",
      },
    ],
  },
  scope: {
    eyebrow: "What contractor assistance may consider",
    title: "Visible roof conditions and confirmed roofing documents.",
    lead: "The actual assistance Oxford provides must be confirmed. A contractor-focused scope may need the following categories to be defined without implying public-adjuster services.",
    items: [
      "Visible roof conditions",
      "Roof areas and components reviewed",
      "Condition photography Oxford confirms it supplies",
      "Proposed roofing work",
      "Written estimate or proposal information",
      "Applicable project records",
    ],
    note: "No coverage interpretation, claim negotiation, adjuster authority, public-adjuster service, insurer representation, or insurance outcome is included or implied.",
    placeholder: {
      kicker: "Photography needed",
      title: "Contractor documentation in context",
      note: "Documentary image needed: an Oxford roofing professional organizing visible roof-condition photographs or contractor records without insurer branding.",
      ariaLabel:
        "Photography placeholder for contractor roof-condition documentation",
    },
  },
  process: {
    eyebrow: "The contractor-documentation process",
    title: "Four stages with a clear boundary around Oxford’s role.",
    compact: true,
    steps: [
      {
        title: "Review the roof context",
        body: "Begin with the property and visible roof conditions Oxford is asked to review.",
      },
      {
        title: "Organize contractor findings",
        body: "Document the observations and roof areas Oxford confirms are part of its review.",
      },
      {
        title: "Define proposed roofing work",
        body: "Prepare the contractor scope, estimate, or project information Oxford confirms it provides.",
      },
      {
        title: "Maintain role boundaries",
        body: "Leave policy interpretation, coverage, negotiation, and claim decisions to the owner and insurer.",
      },
    ],
  },
  proof: {
    kind: "placeholder",
    eyebrow: "Service-specific proof",
    title: "No Oxford portfolio project is identified as an insurance claim.",
    body: "The Chesterfield photograph is used only as verified storm-condition context. It is not presented as evidence of insurance involvement, claim approval, coverage, or an outcome.",
    kicker: "Verification boundary",
    note: "Publish claims-assistance proof only after Oxford confirms the contractor activity, permissions, documentation, and legally appropriate wording.",
  },
  faq: {
    eyebrow: "Insurance claims assistance FAQ",
    title:
      "Questions that keep contractor work separate from coverage decisions.",
    lead: "These answers define a conservative boundary. Oxford’s exact assistance and communication practices require business and legal confirmation.",
    items: [
      {
        question: "Does Oxford decide whether roof damage is covered?",
        answer:
          "No. Coverage decisions belong to the insurer under the applicable policy. Oxford can describe visible roof conditions and proposed contractor work but does not control coverage or claim approval.",
      },
      {
        question: "Does Oxford act as a public adjuster?",
        answer:
          "No public-adjuster service, policy interpretation, coverage negotiation, or representation of the property owner is stated or implied on this page.",
      },
      {
        question: "What roofing documentation may be available?",
        answer:
          "Potential contractor records can include condition photographs, a written proposal, and applicable project information. Oxford’s exact deliverables require confirmation and should be identified in writing.",
      },
      {
        question: "Does Oxford communicate with an insurer or adjuster?",
        answer:
          "Oxford’s exact communication practices and limits require confirmation. This page does not promise direct insurer coordination, adjuster meetings, claim advocacy, or authority over any insurance decision.",
      },
      {
        question: "Is claims assistance the same as storm restoration?",
        answer:
          "No. Storm Damage Restoration addresses visible post-storm roof conditions and proposed roofing work. Insurance Claims Assistance is limited here to contractor documentation boundaries and does not determine coverage or outcomes.",
      },
    ],
  },
  cta: {
    eyebrow: "Begin with the contractor record",
    title: "Start with the roof condition—not a promised claim result.",
    body: "Oxford can review visible roof conditions and explain the proposed contractor scope it confirms for the property. No coverage, approval, negotiation, or insurance outcome is promised.",
  },
};

const roofInspections: ApprovedServicePageData = {
  slug: "roof-inspections",
  metadata: {
    title: "Roof Inspections | Oxford Roofing",
    description:
      "A conservative framework for reviewing visible roof conditions and defining the appropriate next roofing question for St. Louis-area properties.",
  },
  hero: {
    variant: "navy-split",
    eyebrow: "Roof inspections · St. Louis",
    label: "Roof Inspections",
    title:
      "A useful roof inspection should turn visible conditions into a clear next question.",
    lead: "An inspection begins with the property, accessible roof context, and visible conditions that can be organized for review. The result should distinguish observation from any proposed roofing work.",
    image: "/uploads/hero-residential-luxury-roof.png",
    alt: "Aerial view showing the complete roof geometry of a residential property",
    caption: "Residential roof context",
    proofLabel: "Review the Inspection Framework",
  },
  decision: {
    eyebrow: "When a roof inspection may be appropriate",
    title: "When the property owner needs a documented view of the roof.",
    lead: "An inspection can organize visible conditions and identify questions requiring a closer decision. It does not guarantee access to hidden conditions or predetermine repair or replacement.",
    criteria: [
      {
        title: "A visible roof condition has changed",
        body: "Wear, water entry, or another reported change can create a reason to review the roof context.",
      },
      {
        title: "Roofing work is being considered",
        body: "A documented view can help separate the observed condition from the work proposed afterward.",
      },
      {
        title: "Multiple roof areas require organization",
        body: "Planes, edges, transitions, penetrations, and adjoining components can be considered by visible area.",
      },
      {
        title: "The next roofing decision is unclear",
        body: "The owner needs a structured record before repair, replacement, monitoring, or another step is considered.",
      },
    ],
    note: "Oxford’s inspection access methods, diagnostic boundaries, report format, photographs, fees, scheduling, and final deliverables require operational confirmation.",
  },
  principles: {
    eyebrow: "Oxford’s inspection principles",
    title:
      "Observe the roof. Organize the conditions. Define the next question.",
    items: [
      {
        title: "Review the context",
        body: "Begin with the property, roof geometry, reported concerns, and visible conditions available for review.",
      },
      {
        title: "Organize observations",
        body: "Group visible conditions by roof area, component, transition, or other relevant context.",
      },
      {
        title: "Separate the recommendation",
        body: "Keep observed conditions distinct from any proposed repair, replacement, or monitoring scope.",
      },
    ],
  },
  scope: {
    eyebrow: "What an inspection may consider",
    title: "Accessible roof context and visible conditions.",
    lead: "The actual inspection scope must be confirmed for the property. A documented review may require the following categories to be defined.",
    items: [
      "Property context and reported concerns",
      "Accessible visible roof surfaces",
      "Edges, penetrations, and transitions",
      "Visible adjoining components",
      "Observed conditions organized by area",
      "Confirmed inspection records",
    ],
    note: "Access limitations, concealed conditions, testing, photographs, recommendations, and the format of any inspection record require confirmation.",
    placeholder: {
      kicker: "Photography needed",
      title: "Oxford inspection documentation",
      note: "Documentary image needed: a safely equipped Oxford professional recording visible roof conditions in a natural Midwest property context.",
      ariaLabel: "Photography placeholder for a professional roof inspection",
    },
  },
  process: {
    eyebrow: "The roof-inspection process",
    title: "Four stages from property context to the next roofing question.",
    steps: [
      {
        title: "Establish context",
        body: "Review the property, roof configuration, and reported reason for the inspection.",
      },
      {
        title: "Observe",
        body: "Review accessible visible roof conditions within the confirmed inspection scope.",
      },
      {
        title: "Organize",
        body: "Arrange visible observations by roof area, component, and relevant transition.",
      },
      {
        title: "Define the next question",
        body: "Separate the inspection record from any later proposed roofing work.",
      },
    ],
  },
  proof: {
    kind: "placeholder",
    eyebrow: "Service-specific proof",
    title: "Verified Oxford inspection photography is still needed.",
    body: "A finished roof photograph can show property context, but it does not verify Oxford’s inspection method, report, or deliverables. No unrelated project is being relabeled as an inspection.",
    kicker: "Photography gap",
    note: "Add a verified inspection example only after Oxford confirms the service scope, access method, records, and publication permissions.",
  },
  faq: {
    eyebrow: "Roof inspection FAQ",
    title: "Questions to define before an inspection is scheduled.",
    lead: "These answers describe a conservative inspection framework. Oxford’s exact offering, access, fees, timing, and records require operational confirmation.",
    items: [
      {
        question: "What does a roof inspection include?",
        answer:
          "The inspection scope should identify the property context, accessible visible roof areas, reported concerns, and the records Oxford confirms it provides. Exact methods and deliverables require confirmation.",
      },
      {
        question: "Can an inspection identify concealed conditions?",
        answer:
          "A visible inspection does not guarantee identification of concealed or inaccessible conditions. Any testing, opening, or additional evaluation must be separately confirmed in writing.",
      },
      {
        question: "Does an inspection mean the roof needs replacement?",
        answer:
          "No. An inspection should organize visible conditions before any repair, replacement, monitoring, or other recommendation is considered.",
      },
      {
        question: "Will photographs or a written report be provided?",
        answer:
          "Oxford’s exact photography, report format, findings, recommendations, and other inspection records require operational confirmation and should be stated before the inspection.",
      },
      {
        question: "How often should a roof be inspected?",
        answer:
          "No universal interval is stated here. Property conditions, reported changes, roof context, and Oxford’s confirmed inspection offering should inform the timing.",
      },
    ],
  },
  cta: {
    eyebrow: "Begin with the roof context",
    title:
      "Start with the visible condition and a clearly defined inspection scope.",
    body: "Oxford can confirm the inspection service it offers for the property before any roofing recommendation is assumed.",
  },
};

const preventativeMaintenance: ApprovedServicePageData = {
  slug: "preventative-maintenance",
  metadata: {
    title: "Preventative Maintenance | Oxford Roofing",
    description:
      "A conservative framework for observing roof conditions over time and defining approved maintenance-related work for St. Louis-area properties.",
  },
  hero: {
    variant: "commercial-panel",
    eyebrow: "Preventative maintenance · St. Louis",
    label: "Preventative Maintenance",
    title:
      "Planned roof care begins with the conditions that can actually be observed.",
    lead: "A maintenance approach should begin with a documented roof context, visible conditions, and a clear boundary around any proposed work. No schedule, program, or service interval is assumed in advance.",
    image: "/uploads/clayton-office-park-tpo-reroof.png",
    alt: "Aerial view of a completed commercial TPO roof used as roof-asset context",
    caption: "Commercial roof-asset context",
    proofLabel: "Review the Maintenance Framework",
  },
  decision: {
    eyebrow: "When preventative maintenance may be appropriate",
    title: "When the owner wants to observe roof conditions over time.",
    lead: "A maintenance framework can help organize visible change and proposed work. It does not guarantee roof performance, eliminate future repair, or establish a universal service interval.",
    criteria: [
      {
        title: "A roof condition baseline is needed",
        body: "The owner wants a documented reference point for visible roof surfaces, details, and known conditions.",
      },
      {
        title: "Visible conditions may need periodic review",
        body: "Changes at surfaces, edges, penetrations, transitions, or drainage areas can be organized over time.",
      },
      {
        title: "Maintenance-related work needs a boundary",
        body: "Observed conditions should remain separate from any repair or maintenance work later proposed.",
      },
      {
        title: "The owner needs an organized roof record",
        body: "Confirmed observations and approved work can be documented without promising a particular outcome.",
      },
    ],
    note: "Oxford’s maintenance program availability, roof types served, inspection intervals, included activities, pricing, scheduling, and records require operational confirmation.",
  },
  principles: {
    eyebrow: "Oxford’s maintenance principles",
    title:
      "Establish the baseline. Track visible change. Define approved work.",
    items: [
      {
        title: "Establish the roof context",
        body: "Begin with the roof asset, accessible visible conditions, and known property requirements.",
      },
      {
        title: "Track relevant change",
        body: "Organize visible conditions by roof area, detail, transition, or other confirmed maintenance context.",
      },
      {
        title: "Separate proposed work",
        body: "Define any repair or maintenance activity through a written scope rather than assuming it is included.",
      },
    ],
  },
  scope: {
    eyebrow: "What a maintenance scope may consider",
    title: "The roof baseline, visible change, and approved work.",
    lead: "The actual maintenance offering must be confirmed. A property-specific framework may require the following categories to be defined.",
    items: [
      "Roof asset and property context",
      "Accessible visible roof surfaces",
      "Edges, penetrations, and transitions",
      "Visible drainage-area conditions",
      "Documented changes since a prior review",
      "Separately approved roofing work",
    ],
    note: "No specific cleaning, repair, sealing, coating, drainage, schedule, inspection interval, or reporting deliverable is promised without Oxford’s written confirmation.",
    placeholder: {
      kicker: "Photography needed",
      title: "Verified maintenance activity",
      note: "Documentary image needed: an Oxford professional reviewing a commercial or residential roof asset during a confirmed maintenance visit.",
      ariaLabel:
        "Photography placeholder for verified preventative maintenance activity",
    },
  },
  process: {
    eyebrow: "The maintenance framework",
    title: "Four stages from roof baseline to the next confirmed review.",
    compact: true,
    steps: [
      {
        title: "Establish the baseline",
        body: "Organize the roof asset, property context, and accessible visible conditions.",
      },
      {
        title: "Review visible change",
        body: "Compare confirmed observations by roof area, detail, or relevant transition.",
      },
      {
        title: "Define approved work",
        body: "Separate any proposed roofing activity into its own written scope.",
      },
      {
        title: "Record the next checkpoint",
        body: "Document the information and future review Oxford confirms for the property.",
      },
    ],
  },
  proof: {
    kind: "placeholder",
    eyebrow: "Service-specific proof",
    title: "Verified Oxford maintenance photography is still needed.",
    body: "Clayton Office Park is shown only as a verified commercial TPO roof asset. The portfolio does not identify it as a maintenance project or confirm an Oxford maintenance program.",
    kicker: "Verification boundary",
    note: "Add maintenance proof only after the property, activities, interval, records, and publication permissions are confirmed.",
  },
  faq: {
    eyebrow: "Preventative maintenance FAQ",
    title: "Questions to define before a maintenance program is assumed.",
    lead: "These answers describe a conservative framework. Oxford’s actual maintenance offering and operating details require confirmation.",
    items: [
      {
        question: "What is included in preventative maintenance?",
        answer:
          "Oxford’s exact maintenance activities, roof types, intervals, and records require confirmation. The written scope should distinguish condition review from any separately approved roofing work.",
      },
      {
        question: "Which residential or commercial roofs are eligible?",
        answer:
          "No universal eligibility is stated here. Oxford must confirm the roof types, systems, property conditions, and locations included in its maintenance offering.",
      },
      {
        question: "How often should maintenance occur?",
        answer:
          "No fixed interval is promised. The property, roof asset, visible conditions, and Oxford’s confirmed program should determine any future review schedule.",
      },
      {
        question: "Does maintenance prevent every leak or repair?",
        answer:
          "No. A maintenance framework cannot guarantee future roof performance or eliminate every repair. Any applicable terms must be stated in Oxford’s written documents.",
      },
      {
        question: "Are repairs included in a maintenance visit?",
        answer:
          "No repair is assumed to be included. Any proposed repair or other roofing work should be documented and approved through a separate written scope unless Oxford confirms otherwise.",
      },
    ],
  },
  cta: {
    eyebrow: "Begin with the roof baseline",
    title:
      "Start by confirming the roof context and Oxford’s available maintenance scope.",
    body: "Oxford can confirm whether it offers an appropriate maintenance service for the property before any interval, activity, or outcome is assumed.",
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
