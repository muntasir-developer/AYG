/**
 * Builds an organized library of FREE learning resources for a given skill.
 *
 * Every link is real and stable — either a well-known free platform or a search
 * link (YouTube / Google / `filetype:pdf` / site-search) for the exact skill —
 * so nothing here can become a dead link. Grouped by how people actually learn:
 * watch -> take a course -> read notes/PDFs -> reference docs -> practise -> ask.
 */
export type LearnItem = { label: string; url: string; note?: string };
export type LearnGroup = { key: string; title: string; emoji: string; items: LearnItem[] };

const enc = encodeURIComponent;
const yt = (q: string) => `https://www.youtube.com/results?search_query=${enc(q)}`;
const ggl = (q: string) => `https://www.google.com/search?q=${enc(q)}`;
const gPdf = (q: string) => `https://www.google.com/search?q=${enc(q + " filetype:pdf")}`;
const gSite = (site: string, q: string) => `https://www.google.com/search?q=${enc(`site:${site} ${q}`)}`;

// Which "family" a category belongs to — drives the extra platform links.
type Family = "tech" | "design" | "business" | "academic" | "vocational" | "language" | "soft";

const FAMILY_BY_KEY: Record<string, Family> = {
  technology: "tech",
  web_and_product: "tech",
  future_emerging: "tech",
  creative_design: "design",
  digital_marketing: "business",
  smallbiz: "business",
  finance_business: "business",
  science_research: "academic",
  education_teaching: "academic",
  law_government: "academic",
  social_community: "academic",
  health_wellness: "vocational",
  vocational_trades: "vocational",
  hospitality_travel: "vocational",
  sports_lifestyle: "vocational",
  agriculture_nature: "vocational",
  languages_writing: "language",
  soft_skills: "soft",
  // after-10th tracks
  "hs-streams": "academic",
  engineering: "tech",
  "computer-electronics": "tech",
  "applied-science": "academic",
  "design-management": "design",
  agriculture: "vocational",
  "engineering-trades": "vocational",
  "non-engineering-trades": "vocational",
  paramedical: "vocational",
  vocational: "vocational",
};

export function learnResources(name: string, categoryKey: string): LearnGroup[] {
  const fam = FAMILY_BY_KEY[categoryKey] ?? "academic";

  // 1) Video tutorials
  const videos: LearnItem[] = [
    { label: `Full course on YouTube`, url: yt(`${name} full course`), note: "Long, free, start-to-finish videos" },
    { label: `Beginner tutorials on YouTube`, url: yt(`${name} tutorial for beginners`), note: "Short, easy lessons" },
  ];
  if (fam === "tech") videos.push({ label: "freeCodeCamp on YouTube", url: yt(`freeCodeCamp ${name}`), note: "Full free coding courses" });

  // 2) Free online courses
  const courses: LearnItem[] = [
    { label: "SWAYAM (Govt. of India)", url: `https://swayam.gov.in/explorer?searchText=${enc(name)}`, note: "Free certified courses" },
    { label: "Coursera (audit for free)", url: `https://www.coursera.org/search?query=${enc(name)}`, note: "Watch lectures free; pay only for the certificate" },
    { label: "edX (free to learn)", url: `https://www.edx.org/search?q=${enc(name)}` },
  ];
  if (fam === "tech") courses.push({ label: "freeCodeCamp", url: `https://www.freecodecamp.org/news/search/?query=${enc(name)}`, note: "100% free, hands-on" });
  if (fam === "academic") courses.push({ label: "Khan Academy", url: `https://www.khanacademy.org/search?page_search_query=${enc(name)}` });
  if (fam === "academic") courses.push({ label: "NPTEL", url: gSite("nptel.ac.in", name), note: "IIT/IISc free lectures" });
  if (fam === "business") courses.push({ label: "Google Digital Garage", url: "https://learndigital.withgoogle.com/digitalgarage/courses", note: "Free certified courses" });
  if (fam === "business") courses.push({ label: "HubSpot Academy", url: "https://academy.hubspot.com/courses" });
  if (fam === "design") courses.push({ label: "Canva Design School", url: "https://www.canva.com/designschool/" });
  if (fam === "language") courses.push({ label: "Duolingo", url: "https://www.duolingo.com/" });
  if (fam === "vocational") courses.push({ label: "Skill India Digital", url: "https://www.skillindiadigital.gov.in/", note: "Govt. free skilling" });

  // 3) Notes, PDFs & e-books (real free PDFs via filetype:pdf search)
  const pdfs: LearnItem[] = [
    { label: `${name} notes (free PDF)`, url: gPdf(`${name} notes`), note: "Downloadable PDF notes" },
    { label: `${name} complete guide (PDF)`, url: gPdf(`${name} tutorial guide`) },
    { label: `Free e-books`, url: gPdf(`${name} book`), note: "Free PDF e-books" },
  ];
  if (fam === "academic" || fam === "tech")
    pdfs.push({ label: "NPTEL lecture notes (PDF)", url: gPdf(`${name} site:nptel.ac.in`) });

  // 4) Documentation & reference
  const docs: LearnItem[] = [];
  if (fam === "tech") {
    docs.push({ label: "MDN Web Docs", url: `https://developer.mozilla.org/en-US/search?q=${enc(name)}` });
    docs.push({ label: "W3Schools", url: gSite("w3schools.com", name) });
    docs.push({ label: "GeeksforGeeks", url: gSite("geeksforgeeks.org", name) });
  } else {
    docs.push({ label: `Official documentation / reference`, url: ggl(`${name} official documentation`) });
    docs.push({ label: "Wikipedia overview", url: `https://en.wikipedia.org/w/index.php?search=${enc(name)}` });
  }

  // 5) Practice & projects
  const practice: LearnItem[] = [];
  if (fam === "tech") {
    practice.push({ label: "Exercism (free practice)", url: `https://exercism.org/tracks` });
    practice.push({ label: "HackerRank", url: `https://www.hackerrank.com/` });
    practice.push({ label: "Awesome list on GitHub", url: `https://github.com/search?q=${enc(`awesome ${name}`)}&type=repositories`, note: "Curated free resource collections" });
  } else if (fam === "design") {
    practice.push({ label: "Behance (inspiration)", url: `https://www.behance.net/search/projects?search=${enc(name)}` });
    practice.push({ label: "Practice ideas & briefs", url: ggl(`${name} practice projects ideas`) });
  } else {
    practice.push({ label: "Practice exercises & projects", url: ggl(`${name} practice exercises and projects`) });
    practice.push({ label: "Awesome list on GitHub", url: `https://github.com/search?q=${enc(`awesome ${name}`)}&type=repositories` });
  }

  // 6) Community & help
  const community: LearnItem[] = [
    { label: "Ask on Stack Overflow / Exchange", url: `https://stackoverflow.com/search?q=${enc(name)}` },
    { label: "Discuss on Reddit", url: `https://www.reddit.com/search/?q=${enc(name)}` },
    { label: "Find more free resources", url: ggl(`best free resources to learn ${name}`) },
  ];

  return [
    { key: "videos", title: "Video Tutorials", emoji: "🎥", items: videos },
    { key: "courses", title: "Free Online Courses", emoji: "🎓", items: courses },
    { key: "pdfs", title: "Notes, PDFs & E-books", emoji: "📄", items: pdfs },
    { key: "docs", title: "Documentation & Reference", emoji: "📚", items: docs },
    { key: "practice", title: "Practice & Projects", emoji: "🧪", items: practice },
    { key: "community", title: "Community & Help", emoji: "💬", items: community },
  ];
}
