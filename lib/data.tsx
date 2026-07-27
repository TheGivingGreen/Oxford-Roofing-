import { AwardIcon, BuildingIcon, CalendarIcon, DocumentIcon, HomeIcon, RepairIcon, SearchIcon, StormIcon, WrenchIcon } from "@/components/icons";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Financing", href: "/financing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

export const services = [
  { slug: "residential-roofing", title: "Residential Roofing", description: "Full roof systems for St. Louis homes, matched to your architecture and built for the long haul.", short: "Full roof systems for homes, matched to your architecture.", icon: <HomeIcon /> },
  { slug: "commercial-roofing", title: "Commercial Roofing", description: "Low-slope and flat-roof systems for property managers and owners who cannot afford downtime.", short: "Low-slope systems built around your operating hours.", icon: <BuildingIcon /> },
  { slug: "roof-replacement", title: "Roof Replacement", description: "Full tear-off and replacement with manufacturer-backed warranties.", short: "Full tear-off and replacement with manufacturer-backed warranties.", icon: <WrenchIcon /> },
  { slug: "roof-repair", title: "Roof Repair", description: "Targeted repairs for leaks, flashing, and isolated damage.", short: "Targeted repairs for leaks, flashing, and isolated damage.", icon: <RepairIcon /> },
  { slug: "storm-damage-restoration", title: "Storm Damage Restoration", description: "Rapid assessment and repair after hail or wind, plus direct help with your insurance claim.", short: "Rapid response after hail or wind, insurance-ready documentation.", icon: <StormIcon /> },
  { slug: "insurance-claims", title: "Insurance Claims Assistance", description: "We document damage and work directly with your adjuster to keep the claim accurate.", short: "We inspect your roof, photograph any visible damage, and provide a written estimate you can share with your insurance company.", icon: <DocumentIcon /> },
  { slug: "roof-inspections", title: "Roof Inspections", description: "A documented, photograph-backed assessment of your roof's condition, no pressure, no upsell.", short: "A documented condition assessment, no pressure, no upsell.", icon: <SearchIcon /> },
  { slug: "preventative-maintenance", title: "Preventative Maintenance", description: "Scheduled upkeep plans that extend your roof's service life.", short: "Scheduled upkeep plans that extend your roof's service life.", icon: <CalendarIcon /> }
];

export const whyCards = [
  { title: "Reliability focused", description: "We show up when we say we will, and we finish when we say we will.", icon: <AwardIcon /> },
  { title: "Experience focused", description: "Forty-plus years in the field means we have seen the problem before we start.", icon: <AwardIcon /> },
  { title: "Honest approach", description: "We tell you what needs doing, and just as often, what does not.", icon: <DocumentIcon /> },
  { title: "Craft focused", description: "Every fastener, flashing detail, and seam matters to the roof's lifespan.", icon: <WrenchIcon /> }
];

export const projects = [
  { slug: "ladue-slate-restoration", title: "Ladue Slate Restoration", meta: "Residential · Synthetic slate", category: "Residential", image: "/uploads/ladue-synthetic-slate-restoration.png", alt: "Aerial view of a residential synthetic slate roof", objectPosition: "center" },
  { slug: "clayton-office-park", title: "Clayton Office Park", meta: "Commercial · TPO membrane", category: "Commercial", image: "/uploads/clayton-office-park-tpo-reroof.png", alt: "Aerial view of a white commercial roof system", objectPosition: "center" },
  { slug: "webster-groves-metal", title: "Webster Groves Residence", meta: "Residential · Standing-seam metal", category: "Residential", image: "/uploads/webster-groves-standing-seam-metal.png", alt: "Aerial view of a standing-seam metal residential roof", objectPosition: "center" },
  { slug: "chesterfield-hail-restoration", title: "Chesterfield Hail Restoration", meta: "Residential · Before & after · Storm", category: "Before & After", image: "/uploads/chesterfield-hail-restoration-before-after.png", alt: "Side-by-side before and after views of a residential roof restoration", objectPosition: "center" },
  { slug: "maplewood-retail-center", title: "Maplewood Retail Center", meta: "Commercial · EPDM membrane", category: "Commercial", image: "/uploads/maplewood-retail-center-epdm-install.png", alt: "Aerial view of a commercial retail center roof", objectPosition: "center" },
  { slug: "kirkwood-tear-off", title: "Kirkwood Full Tear-Off", meta: "Residential · Before & after", category: "Before & After", image: "/uploads/photography-residential-tearoff-kirkwood.png", alt: "Roofing crew removing shingles from a residential roof", objectPosition: "center" }
];

export const faqSections = [
  {
    title: "Project Basics",
    items: [
      {
        question: "How long does a residential roof replacement take?",
        answer: "Every roof is different. The size, pitch, materials, and weather can all affect the schedule. We'll review the expected timeline with you before work begins.",
      },
      {
        question: "What's the difference between repair and replacement?",
        answer: "Repair makes sense when the damage is isolated and the surrounding roof is still performing reliably. Replacement becomes the better answer when wear is widespread, leaks are recurring in multiple areas, or the roof has reached the end of its useful life. Oxford will tell you which one applies after we inspect your roof, not before.",
        link: { href: "/services/roof-repair", label: "Learn more about roof repair and replacement." },
      },
      {
        question: "What happens if Oxford finds something unexpected once the old roof is removed?",
        answer: "We document it, show you what we found, and talk through the options before any additional work is done. Nothing outside the original written proposal gets touched without your approval. If the project changes, the change is documented in writing.",
      },
    ],
  },
  {
    title: "Working With Oxford",
    items: [
      {
        question: "Is the inspection really free?",
        answer: "Yes, with no obligation. We document the roof's condition and give you a written assessment whether or not you move forward with us.",
      },
      {
        question: "Do you use your own crew or subcontractors?",
        answer: "Oxford uses its own crew for residential, commercial, repair, and replacement work. We do not use subcontracted crews, which keeps responsibility for the work inside one accountable company.",
      },
      {
        question: "Does Oxford offer financing?",
        answer: "Yes. Oxford can connect qualified clients with financing options for replacement, restoration, and storm-related projects. Ask about financing when you request your project proposal.",
        link: { href: "/financing", label: "Learn more about financing." },
      },
    ],
  },
  {
    title: "Insurance and Storm",
    items: [
      {
        question: "Do you help with insurance claims?",
        answer: "Yes. We document storm damage with photographs, can meet your adjuster on site when needed, and provide an accurate written estimate. Coverage decisions remain with your insurer.",
        link: { href: "/services/insurance-claims", label: "Learn more about Insurance Claims Assistance." },
      },
      {
        question: "How do I know if my roof has hail damage?",
        answer: "Hail damage isn't always visible from the ground. On the roof, it can appear as granule loss, bruising or soft spots on shingles, and dents on metal components such as vents, gutters, and flashing. If there was a significant hail event in your area, schedule a free inspection so Oxford can document what is actually there.",
        link: { href: "/services/roof-inspections", label: "Schedule or learn more about roof inspections." },
      },
    ],
  },
  {
    title: "Warranties and Coverage",
    items: [
      {
        question: "What warranty comes with a new roof?",
        answer: "Workmanship is covered for a minimum of 10 years. Manufacturer warranties run up to 25 years depending on the material and system installed.",
      },
    ],
  },
  {
    title: "Services and Area",
    items: [
      {
        question: "Do you work on commercial low-slope roofs?",
        answer: "Yes. Oxford's verified commercial portfolio includes a TPO membrane project at Clayton Office Park and an EPDM membrane project at Maplewood Retail Center. The right system for your property is addressed during the roof evaluation and written proposal.",
        link: { href: "/services/commercial-roofing", label: "Learn more about Commercial Roofing." },
      },
      {
        question: "What areas do you serve?",
        answer: "Oxford serves the greater St. Louis metro on both sides of the river. Our approved territory includes St. Louis, St. Charles, Jefferson, Franklin, Lincoln, and Warren Counties in Missouri, plus St. Clair, Madison, and Monroe Counties in Illinois. If you're unsure whether your property is included, contact us and we'll confirm.",
      },
    ],
  },
];
