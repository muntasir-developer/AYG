/** Metadata for each "after 10th" track. Shared by list + detail routes. */
export type After10Track = {
  stream: string;
  title: string;
  subtitle: string;
  basePath: string;
  itemNoun: string;
  searchPlaceholder: string;
  backLabel: string;
};

export const AFTER10_TRACKS = {
  streams: {
    stream: "stream1112",
    title: "Streams After 10th (11th–12th)",
    subtitle: "Choose Science, Commerce or Arts and see where each leads.",
    basePath: "/quest10/streams",
    itemNoun: "stream",
    searchPlaceholder: "Search: Science, Commerce, Arts...",
    backLabel: "Streams",
  },
  diploma: {
    stream: "diploma",
    title: "Diploma & Polytechnic Courses",
    subtitle: "3-year job-ready diplomas you can join right after Class 10.",
    basePath: "/quest10/diploma",
    itemNoun: "course",
    searchPlaceholder: "Search: Civil, Mechanical, Pharmacy...",
    backLabel: "Diploma Courses",
  },
  iti: {
    stream: "iti",
    title: "ITI Trades",
    subtitle: "Short, hands-on trades that lead straight to employment.",
    basePath: "/quest10/iti",
    itemNoun: "trade",
    searchPlaceholder: "Search: Electrician, Fitter, COPA...",
    backLabel: "ITI Trades",
  },
  paravoc: {
    stream: "paravoc",
    title: "Paramedical & Vocational Courses",
    subtitle: "Healthcare diplomas and practical skill courses after 10th.",
    basePath: "/quest10/paravoc",
    itemNoun: "course",
    searchPlaceholder: "Search: Lab Tech, Radiology, Beauty...",
    backLabel: "Paramedical & Vocational",
  },
} satisfies Record<string, After10Track>;
