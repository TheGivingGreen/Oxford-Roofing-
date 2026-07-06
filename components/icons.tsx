import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round"
} satisfies IconProps;

export function HomeIcon(props: IconProps) {
  return <svg {...iconProps} {...props}><path d="M3 11.5 12 4l9 7.5" /><path d="M5.5 9.8V20h13V9.8" /></svg>;
}

export function BuildingIcon(props: IconProps) {
  return <svg {...iconProps} {...props}><rect x="4" y="3" width="16" height="18" /><path d="M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1" /></svg>;
}

export function StormIcon(props: IconProps) {
  return <svg {...iconProps} {...props}><path d="M7 15a5 5 0 1 1 1-9.9A6 6 0 0 1 19 8a4 4 0 0 1-1 7.9" /><path d="M13 15l-2 4h3l-2 4" /></svg>;
}

export function SearchIcon(props: IconProps) {
  return <svg {...iconProps} {...props}><circle cx="10.5" cy="10.5" r="6.5" /><path d="M20 20l-4.6-4.6" /></svg>;
}

export function ShieldIcon(props: IconProps) {
  return <svg {...iconProps} {...props}><path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" /></svg>;
}

export function AwardIcon(props: IconProps) {
  return <svg {...iconProps} {...props}><circle cx="12" cy="9" r="5" /><path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5" /></svg>;
}

export function HonestIcon(props: IconProps) {
  return <svg {...iconProps} {...props}><path d="M2 12l4-3 4 3 3-3 2 2" /><path d="M13 13l2 2 5-5" /></svg>;
}

export function WrenchIcon(props: IconProps) {
  return <svg {...iconProps} {...props}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6z" /></svg>;
}

export function RepairIcon(props: IconProps) {
  return <svg {...iconProps} {...props}><path d="M9 3v6l-4 4 4 4v4" /><path d="M15 3v6l4 4-4 4v4" /></svg>;
}

export function DocumentIcon(props: IconProps) {
  return <svg {...iconProps} {...props}><path d="M7 4h10v17H7z" /><path d="M9 8h6M9 12h6M9 16h3" /></svg>;
}

export function CalendarIcon(props: IconProps) {
  return <svg {...iconProps} {...props}><rect x="4" y="5" width="16" height="15" rx="1" /><path d="M4 9h16M8 3v4M16 3v4" /></svg>;
}

export function MenuIcon(props: IconProps) {
  return <svg {...iconProps} {...props}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

export function CloseIcon(props: IconProps) {
  return <svg {...iconProps} {...props}><path d="M6 6l12 12M18 6 6 18" /></svg>;
}
