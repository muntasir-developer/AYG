/**
 * An organized library of FREE learning resources for a skill/course.
 *
 * Every link is a DIRECT, real, stable destination — an actual free course,
 * video channel, free e-book/PDF library, docs site, practice platform or
 * community. No search-results pages. Links are curated per subject "family"
 * (derived from the catalog category) so they are always real and relevant.
 */
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

type Lib = {
  videos: LearnItem[];
  courses: LearnItem[];
  pdfs: LearnItem[];
  docs: LearnItem[];
  practice: LearnItem[];
  community: LearnItem[];
};

// Resources shared by every family.
const SWAYAM: LearnItem = { label: "SWAYAM (Govt. of India)", url: "https://swayam.gov.in/", note: "Free certified courses from top institutes" };
const NPTEL: LearnItem = { label: "NPTEL Courses", url: "https://nptel.ac.in/courses", note: "Free IIT/IISc video courses" };
const KHAN: LearnItem = { label: "Khan Academy", url: "https://www.khanacademy.org/", note: "Free lessons & practice" };
const YT_CRASHCOURSE: LearnItem = { label: "CrashCourse (YouTube)", url: "https://www.youtube.com/@crashcourse", note: "Free crash courses on many subjects" };
const NCERT: LearnItem = { label: "NCERT Textbooks (free PDF)", url: "https://ncert.nic.in/textbook.php" };
const OPENSTAX: LearnItem = { label: "OpenStax (free PDF textbooks)", url: "https://openstax.org/subjects" };
const MIT_OCW: LearnItem = { label: "MIT OpenCourseWare", url: "https://ocw.mit.edu/", note: "Free MIT course materials" };

const LIB: Record<Family, Lib> = {
  tech: {
    videos: [
      { label: "freeCodeCamp (YouTube)", url: "https://www.youtube.com/@freecodecamp", note: "Full-length free coding courses" },
      { label: "Programming with Mosh (YouTube)", url: "https://www.youtube.com/@programmingwithmosh" },
    ],
    courses: [
      { label: "freeCodeCamp — full curriculum", url: "https://www.freecodecamp.org/learn", note: "100% free + free certifications" },
      { label: "Harvard CS50 (free)", url: "https://cs50.harvard.edu/x/", note: "World-famous intro to computer science" },
      { label: "The Odin Project", url: "https://www.theodinproject.com/", note: "Free full-stack path" },
      SWAYAM,
    ],
    pdfs: [
      { label: "Free Programming Books (GitHub)", url: "https://github.com/EbookFoundation/free-programming-books", note: "Huge free e-book/PDF list" },
      { label: "Eloquent JavaScript (free book)", url: "https://eloquentjavascript.net/" },
    ],
    docs: [
      { label: "MDN Web Docs — Learn", url: "https://developer.mozilla.org/en-US/docs/Learn" },
      { label: "W3Schools", url: "https://www.w3schools.com/" },
      { label: "DevDocs (all docs in one place)", url: "https://devdocs.io/" },
    ],
    practice: [
      { label: "Exercism (free, with mentoring)", url: "https://exercism.org/tracks" },
      { label: "HackerRank", url: "https://www.hackerrank.com/" },
      { label: "Codewars", url: "https://www.codewars.com/" },
    ],
    community: [
      { label: "Stack Overflow", url: "https://stackoverflow.com/" },
      { label: "r/learnprogramming", url: "https://www.reddit.com/r/learnprogramming/" },
    ],
  },
  design: {
    videos: [
      { label: "The Futur (YouTube)", url: "https://www.youtube.com/@thefutur", note: "Design & creative business" },
      { label: "Adobe (YouTube)", url: "https://www.youtube.com/@adobe" },
    ],
    courses: [
      { label: "Canva Design School", url: "https://www.canva.com/designschool/", note: "Free design courses" },
      { label: "Adobe — Learn & Support", url: "https://helpx.adobe.com/learn.html", note: "Free official tutorials" },
      SWAYAM,
    ],
    pdfs: [
      { label: "Design resources (GitHub)", url: "https://github.com/bradtraversy/design-resources-for-developers", note: "Free assets, fonts, books" },
      OPENSTAX,
    ],
    docs: [
      { label: "Figma — Help Center", url: "https://help.figma.com/hc/en-us" },
      { label: "Material Design guidelines", url: "https://m3.material.io/" },
    ],
    practice: [
      { label: "Behance (real projects)", url: "https://www.behance.net/" },
      { label: "Dribbble (inspiration)", url: "https://dribbble.com/" },
    ],
    community: [
      { label: "r/graphic_design", url: "https://www.reddit.com/r/graphic_design/" },
      { label: "r/Design", url: "https://www.reddit.com/r/Design/" },
    ],
  },
  business: {
    videos: [
      { label: "HubSpot (YouTube)", url: "https://www.youtube.com/@HubSpot" },
      { label: "Google Digital Garage", url: "https://learndigital.withgoogle.com/digitalgarage", note: "Free certified courses" },
    ],
    courses: [
      { label: "HubSpot Academy", url: "https://academy.hubspot.com/courses", note: "Free marketing/sales certs" },
      { label: "Google Skillshop", url: "https://skillshop.withgoogle.com/", note: "Free Google Ads/Analytics certs" },
      KHAN,
    ],
    pdfs: [
      { label: "OpenStax — Business (free PDF)", url: "https://openstax.org/subjects/business" },
      { label: "Startup India — resources", url: "https://www.startupindia.gov.in/" },
    ],
    docs: [
      { label: "Google Analytics Help", url: "https://support.google.com/analytics" },
      { label: "Meta Business Help Center", url: "https://www.facebook.com/business/help" },
    ],
    practice: [
      { label: "Google Skillshop labs", url: "https://skillshop.withgoogle.com/" },
      { label: "HubSpot Academy projects", url: "https://academy.hubspot.com/courses" },
    ],
    community: [
      { label: "r/marketing", url: "https://www.reddit.com/r/marketing/" },
      { label: "r/Entrepreneur", url: "https://www.reddit.com/r/Entrepreneur/" },
    ],
  },
  academic: {
    videos: [
      { label: "Khan Academy (YouTube)", url: "https://www.youtube.com/@khanacademy" },
      YT_CRASHCOURSE,
    ],
    courses: [NPTEL, SWAYAM, KHAN, MIT_OCW],
    pdfs: [NCERT, OPENSTAX],
    docs: [
      { label: "MIT OpenCourseWare", url: "https://ocw.mit.edu/" },
      { label: "Wikibooks (free books)", url: "https://en.wikibooks.org/" },
    ],
    practice: [
      { label: "Khan Academy — practice", url: "https://www.khanacademy.org/" },
      { label: "NPTEL assignments", url: "https://nptel.ac.in/courses" },
    ],
    community: [
      { label: "r/learnmath", url: "https://www.reddit.com/r/learnmath/" },
      { label: "r/AskAcademia", url: "https://www.reddit.com/r/AskAcademia/" },
    ],
  },
  vocational: {
    videos: [
      { label: "Skill India (YouTube)", url: "https://www.youtube.com/@SkillIndiaOfficial" },
      YT_CRASHCOURSE,
    ],
    courses: [
      { label: "Skill India Digital", url: "https://www.skillindiadigital.gov.in/", note: "Free govt. skilling courses" },
      { label: "PMKVY (Skill India)", url: "https://www.pmkvyofficial.org/", note: "Free vocational training" },
      SWAYAM,
    ],
    pdfs: [
      { label: "NIMI / DGT trade materials", url: "https://www.nimi.gov.in/", note: "Official ITI/trade study material" },
      NPTEL,
    ],
    docs: [
      { label: "Skill India Digital", url: "https://www.skillindiadigital.gov.in/" },
      { label: "National Career Service", url: "https://www.ncs.gov.in/" },
    ],
    practice: [
      { label: "Apprenticeship (apprenticeshipindia)", url: "https://www.apprenticeshipindia.gov.in/", note: "Earn while you learn" },
      { label: "Skill India Digital", url: "https://www.skillindiadigital.gov.in/" },
    ],
    community: [
      { label: "r/skilledtrades", url: "https://www.reddit.com/r/skilledtrades/" },
      { label: "National Career Service", url: "https://www.ncs.gov.in/" },
    ],
  },
  language: {
    videos: [
      { label: "BBC Learning English (YouTube)", url: "https://www.youtube.com/@bbclearningenglish" },
      { label: "Khan Academy (YouTube)", url: "https://www.youtube.com/@khanacademy" },
    ],
    courses: [
      { label: "Duolingo (free app)", url: "https://www.duolingo.com/" },
      { label: "British Council — LearnEnglish", url: "https://learnenglish.britishcouncil.org/" },
      { label: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish" },
    ],
    pdfs: [
      { label: "British Council resources", url: "https://learnenglish.britishcouncil.org/" },
      { label: "Project Gutenberg (free books)", url: "https://www.gutenberg.org/" },
    ],
    docs: [
      { label: "Cambridge Dictionary", url: "https://dictionary.cambridge.org/" },
      { label: "Grammarly Handbook", url: "https://www.grammarly.com/blog/" },
    ],
    practice: [
      { label: "Duolingo", url: "https://www.duolingo.com/" },
      { label: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish" },
    ],
    community: [
      { label: "r/languagelearning", url: "https://www.reddit.com/r/languagelearning/" },
      { label: "r/EnglishLearning", url: "https://www.reddit.com/r/EnglishLearning/" },
    ],
  },
  soft: {
    videos: [
      { label: "TED Talks (YouTube)", url: "https://www.youtube.com/@TED" },
      { label: "TED-Ed (YouTube)", url: "https://www.youtube.com/@TEDEd" },
    ],
    courses: [
      { label: "MindTools", url: "https://www.mindtools.com/", note: "Communication & leadership skills" },
      { label: "Toastmasters International", url: "https://www.toastmasters.org/", note: "Public speaking practice" },
      SWAYAM,
    ],
    pdfs: [
      { label: "MindTools articles & worksheets", url: "https://www.mindtools.com/" },
      OPENSTAX,
    ],
    docs: [
      { label: "Harvard Business Review", url: "https://hbr.org/" },
      { label: "MindTools", url: "https://www.mindtools.com/" },
    ],
    practice: [
      { label: "Toastmasters (find a club)", url: "https://www.toastmasters.org/find-a-club" },
      { label: "TED Talks", url: "https://www.ted.com/talks" },
    ],
    community: [
      { label: "r/socialskills", url: "https://www.reddit.com/r/socialskills/" },
      { label: "r/publicspeaking", url: "https://www.reddit.com/r/publicspeaking/" },
    ],
  },
};

export function familyFor(categoryKey: string): Family {
  return FAMILY_BY_KEY[categoryKey] ?? "academic";
}

export function learnResources(_name: string, categoryKey: string): LearnGroup[] {
  const lib = LIB[familyFor(categoryKey)];
  return [
    { key: "videos", title: "Video Tutorials", emoji: "🎥", items: lib.videos },
    { key: "courses", title: "Free Online Courses", emoji: "🎓", items: lib.courses },
    { key: "pdfs", title: "Notes, PDFs & E-books", emoji: "📄", items: lib.pdfs },
    { key: "docs", title: "Documentation & Reference", emoji: "📚", items: lib.docs },
    { key: "practice", title: "Practice & Projects", emoji: "🧪", items: lib.practice },
    { key: "community", title: "Community & Help", emoji: "💬", items: lib.community },
  ];
}

/** A short flat list of direct resources for the landing-page teaser section. */
export function topFreeResources(categoryKey: string): { label: string; url: string; type?: string }[] {
  const lib = LIB[familyFor(categoryKey)];
  return [
    { ...lib.courses[0], type: "Free Course" },
    { ...lib.videos[0], type: "Video" },
    { ...lib.pdfs[0], type: "Notes / PDF" },
    { ...lib.practice[0], type: "Practice" },
  ].map(({ label, url, type }) => ({ label, url, type }));
}
