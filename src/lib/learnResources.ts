/**
 * An organized library of FREE learning resources for a skill/course.
 *
 * Goal: links that are RELEVANT to the exact skill and land on real content.
 * - "Videos" and the lead "Courses" are scoped to the skill name *inside* a
 *   trusted platform (YouTube, SWAYAM, Coursera, freeCodeCamp, Khan) so they
 *   open content about THIS skill — not a generic channel/home page, and not a
 *   Google web-search page.
 * - "Notes/PDFs", "Docs", "Practice" and "Community" are direct links to real,
 *   free libraries/platforms chosen by subject family.
 */
import { curatedVideoUrl } from "./videoCourses";

export type LearnItem = { label: string; url: string; note?: string };
export type LearnGroup = { key: string; title: string; emoji: string; items: LearnItem[] };

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

export function familyFor(categoryKey: string): Family {
  return FAMILY_BY_KEY[categoryKey] ?? "academic";
}

const enc = encodeURIComponent;
// Skill-scoped, platform-native links (land on content about the exact skill).
const ytSearch = (q: string) => `https://www.youtube.com/results?search_query=${enc(q)}`;
const swayamSearch = (q: string) => `https://swayam.gov.in/explorer?searchText=${enc(q)}`;
const courseraSearch = (q: string) => `https://www.coursera.org/search?query=${enc(q)}`;
const fccSearch = (q: string) => `https://www.freecodecamp.org/news/search/?query=${enc(q)}`;
const khanSearch = (q: string) => `https://www.khanacademy.org/search?page_search_query=${enc(q)}`;
const mdnSearch = (q: string) => `https://developer.mozilla.org/en-US/search?q=${enc(q)}`;

// Direct, real free libraries (subject-level, no per-skill scope needed).
const NCERT: LearnItem = { label: "NCERT Textbooks (free PDF)", url: "https://ncert.nic.in/textbook.php" };
const OPENSTAX: LearnItem = { label: "OpenStax — free PDF textbooks", url: "https://openstax.org/subjects" };
const MIT_OCW: LearnItem = { label: "MIT OpenCourseWare", url: "https://ocw.mit.edu/", note: "Free MIT course materials" };
const FREE_BOOKS: LearnItem = { label: "Free Programming Books (GitHub)", url: "https://github.com/EbookFoundation/free-programming-books", note: "Huge free e-book/PDF list" };

/** Family-specific *extra* courses (beyond SWAYAM + Coursera, which all get). */
function familyCourses(fam: Family, name: string): LearnItem[] {
  switch (fam) {
    case "tech":
      return [
        { label: `${name} — articles & courses (freeCodeCamp)`, url: fccSearch(name), note: "Free, hands-on" },
        { label: "Harvard CS50 (free)", url: "https://cs50.harvard.edu/x/", note: "Great if this is a CS topic" },
      ];
    case "design":
      return [
        { label: "Canva Design School", url: "https://www.canva.com/designschool/", note: "Free design courses" },
        { label: "Adobe — Learn & Support", url: "https://helpx.adobe.com/learn.html", note: "Free official tutorials" },
      ];
    case "business":
      return [
        { label: "Google Digital Garage", url: "https://learndigital.withgoogle.com/digitalgarage", note: "Free certified courses" },
        { label: "HubSpot Academy", url: "https://academy.hubspot.com/courses", note: "Free marketing/sales certs" },
      ];
    case "academic":
      return [
        { label: `${name} on Khan Academy`, url: khanSearch(name) },
        { label: "NPTEL Courses", url: "https://nptel.ac.in/courses", note: "Free IIT/IISc courses" },
      ];
    case "vocational":
      return [
        { label: "Skill India Digital", url: "https://www.skillindiadigital.gov.in/", note: "Free govt. skilling" },
        { label: "PMKVY (Skill India)", url: "https://www.pmkvyofficial.org/", note: "Free vocational training" },
      ];
    case "language":
      return [
        { label: "Duolingo (free app)", url: "https://www.duolingo.com/" },
        { label: "British Council — LearnEnglish", url: "https://learnenglish.britishcouncil.org/" },
      ];
    case "soft":
      return [
        { label: "MindTools", url: "https://www.mindtools.com/", note: "Communication & leadership" },
        { label: "Toastmasters International", url: "https://www.toastmasters.org/", note: "Public-speaking practice" },
      ];
  }
}

function familyPdfs(fam: Family): LearnItem[] {
  switch (fam) {
    case "tech":
      return [FREE_BOOKS, { label: "Eloquent JavaScript (free book)", url: "https://eloquentjavascript.net/" }];
    case "design":
      return [{ label: "Design resources (GitHub)", url: "https://github.com/bradtraversy/design-resources-for-developers" }, OPENSTAX];
    case "business":
      return [{ label: "OpenStax — Business (free PDF)", url: "https://openstax.org/subjects/business" }, { label: "Startup India resources", url: "https://www.startupindia.gov.in/" }];
    case "academic":
      return [NCERT, OPENSTAX, MIT_OCW];
    case "vocational":
      return [{ label: "NIMI / DGT trade material", url: "https://www.nimi.gov.in/", note: "Official ITI/trade study material" }, NCERT];
    case "language":
      return [{ label: "Project Gutenberg (free books)", url: "https://www.gutenberg.org/" }, { label: "British Council resources", url: "https://learnenglish.britishcouncil.org/" }];
    case "soft":
      return [{ label: "MindTools articles & worksheets", url: "https://www.mindtools.com/" }, OPENSTAX];
  }
}

function familyDocs(fam: Family, name: string): LearnItem[] {
  if (fam === "tech")
    return [
      { label: `${name} on MDN Web Docs`, url: mdnSearch(name) },
      { label: "W3Schools", url: "https://www.w3schools.com/" },
      { label: "DevDocs (all docs in one place)", url: "https://devdocs.io/" },
    ];
  return [
    { label: "MIT OpenCourseWare", url: "https://ocw.mit.edu/" },
    { label: "Wikibooks (free books)", url: "https://en.wikibooks.org/" },
  ];
}

function familyPractice(fam: Family, name: string): LearnItem[] {
  switch (fam) {
    case "tech":
      return [
        { label: "Exercism (free, with mentoring)", url: "https://exercism.org/tracks" },
        { label: "HackerRank", url: "https://www.hackerrank.com/" },
        { label: "Codewars", url: "https://www.codewars.com/" },
      ];
    case "design":
      return [
        { label: `${name} projects on Behance`, url: `https://www.behance.net/search/projects?search=${enc(name)}` },
        { label: "Dribbble (inspiration)", url: "https://dribbble.com/" },
      ];
    case "vocational":
      return [
        { label: "Apprenticeship India (earn while you learn)", url: "https://www.apprenticeshipindia.gov.in/" },
        { label: "Skill India Digital", url: "https://www.skillindiadigital.gov.in/" },
      ];
    case "language":
      return [
        { label: "Duolingo", url: "https://www.duolingo.com/" },
        { label: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish" },
      ];
    default:
      return [
        { label: "Khan Academy — practice", url: "https://www.khanacademy.org/" },
        { label: "NPTEL assignments", url: "https://nptel.ac.in/courses" },
      ];
  }
}

function familyCommunity(fam: Family): LearnItem[] {
  const map: Record<Family, LearnItem[]> = {
    tech: [
      { label: "Stack Overflow", url: "https://stackoverflow.com/" },
      { label: "r/learnprogramming", url: "https://www.reddit.com/r/learnprogramming/" },
    ],
    design: [
      { label: "r/graphic_design", url: "https://www.reddit.com/r/graphic_design/" },
      { label: "Behance", url: "https://www.behance.net/" },
    ],
    business: [
      { label: "r/marketing", url: "https://www.reddit.com/r/marketing/" },
      { label: "r/Entrepreneur", url: "https://www.reddit.com/r/Entrepreneur/" },
    ],
    academic: [
      { label: "r/learnmath", url: "https://www.reddit.com/r/learnmath/" },
      { label: "r/AskAcademia", url: "https://www.reddit.com/r/AskAcademia/" },
    ],
    vocational: [
      { label: "r/skilledtrades", url: "https://www.reddit.com/r/skilledtrades/" },
      { label: "National Career Service", url: "https://www.ncs.gov.in/" },
    ],
    language: [
      { label: "r/languagelearning", url: "https://www.reddit.com/r/languagelearning/" },
      { label: "r/EnglishLearning", url: "https://www.reddit.com/r/EnglishLearning/" },
    ],
    soft: [
      { label: "r/socialskills", url: "https://www.reddit.com/r/socialskills/" },
      { label: "r/publicspeaking", url: "https://www.reddit.com/r/publicspeaking/" },
    ],
  };
  return map[fam];
}

export function learnResources(
  name: string,
  categoryKey: string,
  slug?: string
): LearnGroup[] {
  const fam = familyFor(categoryKey);
  const curated = curatedVideoUrl(slug);
  const videos: LearnItem[] = curated
    ? [
        { label: `${name} — full course (YouTube playlist)`, url: curated, note: "Recommended free course" },
        { label: `More ${name} videos (YouTube)`, url: ytSearch(`${name} tutorial`) },
      ]
    : [
        { label: `${name} — full video courses (YouTube)`, url: ytSearch(`${name} full course`), note: "Free, full-length courses on this topic" },
        { label: `${name} — beginner tutorials (YouTube)`, url: ytSearch(`${name} tutorial for beginners`) },
      ];
  const courses: LearnItem[] = [
    { label: `${name} on SWAYAM`, url: swayamSearch(name), note: "Free certified Govt. courses on this topic" },
    { label: `${name} on Coursera (audit free)`, url: courseraSearch(name), note: "Watch lectures free" },
    ...familyCourses(fam, name),
  ];
  return [
    { key: "videos", title: "Video Tutorials", emoji: "🎥", items: videos },
    { key: "courses", title: "Free Online Courses", emoji: "🎓", items: courses },
    { key: "pdfs", title: "Notes, PDFs & E-books", emoji: "📄", items: familyPdfs(fam) },
    { key: "docs", title: "Documentation & Reference", emoji: "📚", items: familyDocs(fam, name) },
    { key: "practice", title: "Practice & Projects", emoji: "🧪", items: familyPractice(fam, name) },
    { key: "community", title: "Community & Help", emoji: "💬", items: familyCommunity(fam) },
  ];
}

/** A short flat list for the landing-page teaser section. */
export function topFreeResources(name: string, categoryKey: string): { label: string; url: string; type?: string }[] {
  const groups = learnResources(name, categoryKey);
  const byKey = (k: string) => groups.find((g) => g.key === k)!.items[0];
  return [
    { ...byKey("courses"), type: "Free Course" },
    { ...byKey("videos"), type: "Video" },
    { ...byKey("pdfs"), type: "Notes / PDF" },
    { ...byKey("practice"), type: "Practice" },
  ].map(({ label, url, type }) => ({ label, url, type }));
}
