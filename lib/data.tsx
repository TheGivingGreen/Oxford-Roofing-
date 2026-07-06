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
  { slug: "insurance-claims", title: "Insurance Claims Assistance", description: "We document damage and work directly with your adjuster to keep the claim accurate.", short: "We work directly with your adjuster to keep the claim accurate.", icon: <DocumentIcon /> },
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
  { slug: "ladue-slate-restoration", title: "Ladue Slate Restoration", meta: "Residential · Synthetic slate", category: "Residential", caption: "Photography — synthetic slate, Ladue" },
  { slug: "clayton-office-park", title: "Clayton Office Park", meta: "Commercial · TPO membrane", category: "Commercial", caption: "Photography — TPO re-roof, Clayton" },
  { slug: "webster-groves-metal", title: "Webster Groves Residence", meta: "Residential · Standing-seam metal", category: "Residential", caption: "Photography — standing-seam metal, Webster Groves" },
  { slug: "chesterfield-hail-restoration", title: "Chesterfield Hail Restoration", meta: "Residential · Before & after · Storm", category: "Before & After", caption: "Photography — hail damage restoration, Chesterfield" },
  { slug: "maplewood-retail-center", title: "Maplewood Retail Center", meta: "Commercial · EPDM membrane", category: "Commercial", caption: "Photography — EPDM install, Maplewood" },
  { slug: "kirkwood-tear-off", title: "Kirkwood Full Tear-Off", meta: "Residential · Before & after", category: "Before & After", caption: "Photography — full tear-off before/after, Kirkwood" }
];

export const faqItems = [
  { question: "How long does a residential roof replacement take?", answer: "Most residential tear-offs and replacements are completed in one to three days, weather permitting. Larger or steeper roofs may take longer. Your estimate will include a firm timeline." },
  { question: "Do you help with insurance claims?", answer: "Yes. We document storm damage with photographs, meet your adjuster on-site if needed, and work directly with your insurer to keep the claim accurate and moving." },
  { question: "What warranty comes with a new roof?", answer: "Workmanship is covered for a minimum of 10 years. Manufacturer warranties run up to 25 years depending on the material and system installed." },
  { question: "Do you work on commercial low-slope roofs?", answer: "Yes. TPO, EPDM, and modified bitumen systems, scheduled around your business hours to minimize disruption to tenants or operations." },
  { question: "Is the inspection really free?", answer: "Yes, with no obligation. We document the roof's condition and give you a written assessment whether or not you move forward with us." }
];
