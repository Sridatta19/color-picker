export type COLORS = "blue" | "rose" | "lime" | "fuchsia" | "default";

interface VALUES {
  bg: string;
  label?: string;
  colorCode?: string;
  lightBg: string;
  ring?: string;
}

export const MAPPINGS: Record<COLORS, VALUES> = {
  default: {
    bg: "bg-white",
    lightBg: "bg-gray-100",
  },
  blue: {
    bg: "bg-blue-500",
    label: "Blue",
    colorCode: "#0EA5E9",
    lightBg: "bg-blue-100",
    ring: "hover:ring-blue-500",
  },
  rose: {
    bg: "bg-rose-500",
    label: "Rose",
    colorCode: "#F43F5E",
    lightBg: "bg-rose-100",
    ring: "hover:ring-rose-500",
  },
  lime: {
    bg: "bg-lime-500",
    label: "Lime",
    colorCode: "#14B8A6",
    lightBg: "bg-lime-100",
    ring: "hover:ring-lime-500",
  },
  fuchsia: {
    bg: "bg-fuchsia-500",
    label: "Fuchsia",
    colorCode: "#D946EF",
    lightBg: "bg-fuchsia-100",
    ring: "hover:ring-fuchsia-500",
  },
};
