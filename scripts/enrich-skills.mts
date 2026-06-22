/**
 * Enrich every skill (stream='skill') with rich landing-page content:
 * free resources, learning roadmap, tools, certifications, recruiters, salary
 * range and FAQs.
 *
 * Run with:  npx tsx scripts/enrich-skills.mts
 * Idempotent: recomputes and overwrites these fields each run.
 *
 * Free-resource links are REAL, DIRECT links to free learning platforms (via
 * topFreeResources in lib/learnResources) — no search-results pages. Salary/
 * recruiters/certifications are realistic India-specific values by category;
 * FAQs are generated from each skill's data. Edit any specific skill afterwards
 * with `npm run catalog edit-program ...`.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { createAdminClient } from "@insforge/sdk";
import { topFreeResources } from "../src/lib/learnResources";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const proj = JSON.parse(readFileSync(path.join(root, ".insforge/project.json"), "utf8"));
const admin = createAdminClient({ baseUrl: proj.oss_host, apiKey: proj.api_key });

const enc = encodeURIComponent;
const yt = (q: string) => `https://www.youtube.com/results?search_query=${enc(q + " tutorial for beginners")}`;
const swayam = (q: string) => `https://swayam.gov.in/explorer?searchText=${enc(q)}`;
const google = (q: string) => `https://www.google.com/search?q=${enc("free " + q + " course")}`;

type Resource = { label: string; url: string; type: string };
type Profile = {
  salary: string;
  recruiters: string[];
  certifications: string[];
  tools: string[];
  /** Extra real platform links (besides YouTube/SWAYAM/Google added to all). */
  platforms: (name: string) => Resource[];
};

const P_TECH = (name: string): Resource[] => [
  { label: "freeCodeCamp", url: `https://www.freecodecamp.org/news/search/?query=${enc(name)}`, type: "Free Course" },
  { label: "MDN / Web Docs", url: `https://developer.mozilla.org/en-US/search?q=${enc(name)}`, type: "Docs" },
];
const P_DESIGN = (): Resource[] => [
  { label: "Canva Design School", url: "https://www.canva.com/designschool/", type: "Free Course" },
];
const P_MARKETING = (): Resource[] => [
  { label: "Google Digital Garage", url: "https://learndigital.withgoogle.com/digitalgarage/courses", type: "Free Course" },
  { label: "HubSpot Academy", url: "https://academy.hubspot.com/courses", type: "Free Course" },
];
const P_KHAN = (name: string): Resource[] => [
  { label: "Khan Academy", url: `https://www.khanacademy.org/search?page_search_query=${enc(name)}`, type: "Free Course" },
];
const P_COURSERA = (name: string): Resource[] => [
  { label: "Coursera (audit free)", url: `https://www.coursera.org/search?query=${enc(name)}`, type: "Free Course" },
];
const P_SKILLINDIA = (): Resource[] => [
  { label: "Skill India Digital", url: "https://www.skillindiadigital.gov.in/", type: "Govt. Skilling" },
];

const PROFILES: Record<string, Profile> = {
  technology: {
    salary: "₹3–12 LPA (entry to mid-level); ₹15 LPA+ with experience.",
    recruiters: ["TCS", "Infosys", "Wipro", "Accenture", "Cognizant", "Startups", "Amazon", "Google"],
    certifications: ["freeCodeCamp Certifications (free)", "Google IT/Cloud certificates", "Microsoft & Oracle certifications", "NPTEL / SWAYAM certificate"],
    tools: ["VS Code", "Git & GitHub", "Linux / Terminal", "Stack Overflow"],
    platforms: P_TECH,
  },
  web_and_product: {
    salary: "₹3–15 LPA; strong freelance potential.",
    recruiters: ["Startups", "IT service companies", "Product companies", "Design agencies", "Freelance"],
    certifications: ["freeCodeCamp (free)", "Meta Front-End (Coursera)", "Google UX (Coursera)", "NPTEL certificate"],
    tools: ["VS Code", "Figma", "Git / GitHub", "Chrome DevTools"],
    platforms: P_TECH,
  },
  digital_marketing: {
    salary: "₹2.5–10 LPA; higher with freelance/clients.",
    recruiters: ["Digital agencies", "Startups", "E-commerce brands", "Corporates", "Freelance"],
    certifications: ["Google Digital Garage (free)", "Google Ads & Analytics (free)", "HubSpot Academy (free)", "Meta Blueprint"],
    tools: ["Google Analytics", "Meta Ads Manager", "Canva", "SEO tools (Ubersuggest)"],
    platforms: P_MARKETING,
  },
  creative_design: {
    salary: "₹2.5–9 LPA; strong freelance income.",
    recruiters: ["Design studios", "Ad agencies", "Startups", "Media houses", "Freelance"],
    certifications: ["Adobe certifications", "Google UX Design (Coursera)", "Canva Design School (free)"],
    tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva"],
    platforms: P_DESIGN,
  },
  finance_business: {
    salary: "₹3–12 LPA depending on role and firm.",
    recruiters: ["Banks", "NBFCs", "Consulting firms", "Startups", "Corporates"],
    certifications: ["NISM / NSE certifications", "Coursera Finance (audit free)", "NPTEL certificate"],
    tools: ["MS Excel", "Tally", "Power BI"],
    platforms: P_KHAN,
  },
  science_research: {
    salary: "₹3–10 LPA (varies by field and qualification).",
    recruiters: ["Research labs", "Universities", "R&D firms", "EdTech", "Pharma & biotech"],
    certifications: ["NPTEL / SWAYAM certificate", "Coursera (audit free)"],
    tools: ["Python", "MATLAB / Octave", "Lab instruments"],
    platforms: P_KHAN,
  },
  health_wellness: {
    salary: "₹2–8 LPA; private practice can earn more.",
    recruiters: ["Hospitals", "Clinics", "Gyms & studios", "Wellness centres", "Self-practice"],
    certifications: ["Recognised health/fitness certifications", "SWAYAM certificate"],
    tools: [],
    platforms: P_COURSERA,
  },
  soft_skills: {
    salary: "Improves pay and promotions in almost any role.",
    recruiters: ["Valued by all employers across industries"],
    certifications: ["Coursera Soft Skills (audit free)", "edX certificate"],
    tools: [],
    platforms: P_COURSERA,
  },
  languages_writing: {
    salary: "₹2–8 LPA; freelance paid per project/word.",
    recruiters: ["Content agencies", "Media & publishing", "BPO/KPO", "EdTech", "Freelance"],
    certifications: ["Language proficiency certificates", "Coursera Writing (audit free)"],
    tools: ["Grammarly", "Google Docs"],
    platforms: (name) => [
      { label: "Duolingo", url: "https://www.duolingo.com/", type: "Free App" },
      ...P_COURSERA(name),
    ],
  },
  vocational_trades: {
    salary: "₹1.8–6 LPA; good self-employment income.",
    recruiters: ["Local businesses", "Contractors", "Service companies", "Self-employment"],
    certifications: ["NSDC / Skill India certificate", "ITI / NSQF certification"],
    tools: [],
    platforms: P_SKILLINDIA,
  },
  hospitality_travel: {
    salary: "₹2–7 LPA plus tips/incentives.",
    recruiters: ["Hotels", "Restaurants", "Travel agencies", "Airlines", "Cruise lines"],
    certifications: ["NSDC Hospitality certificate", "IATA (for travel/airlines)"],
    tools: [],
    platforms: P_SKILLINDIA,
  },
  sports_lifestyle: {
    salary: "₹2–8 LPA; personal training/coaching adds income.",
    recruiters: ["Gyms", "Sports academies", "Clubs", "Wellness brands", "Self-employment"],
    certifications: ["Recognised fitness/coaching certifications"],
    tools: [],
    platforms: P_COURSERA,
  },
  future_emerging: {
    salary: "₹5–20 LPA — among the highest-demand skills.",
    recruiters: ["Tech companies", "Startups", "R&D labs", "Global firms"],
    certifications: ["Google / AWS / Microsoft AI certs", "DeepLearning.AI (Coursera)", "NPTEL certificate"],
    tools: ["Python", "Jupyter Notebook", "Cloud (AWS/GCP)", "GitHub"],
    platforms: (name) => [...P_TECH(name), ...P_COURSERA(name)],
  },
  education_teaching: {
    salary: "₹2.5–8 LPA; online tutoring adds income.",
    recruiters: ["Schools", "Coaching institutes", "EdTech companies", "Universities", "Online tutoring"],
    certifications: ["B.Ed / CTET (for school teaching)", "Coursera Teaching (audit free)"],
    tools: ["Google Classroom", "Zoom", "Canva"],
    platforms: P_COURSERA,
  },
  law_government: {
    salary: "₹3–10 LPA; varies widely by role.",
    recruiters: ["Law firms", "Courts", "Government departments", "Corporates", "NGOs"],
    certifications: ["SWAYAM Law courses", "Coursera Law (audit free)"],
    tools: [],
    platforms: P_COURSERA,
  },
  agriculture_nature: {
    salary: "₹2–7 LPA; agri-business income varies.",
    recruiters: ["Agri companies", "Government agencies", "NGOs", "Self / family farming"],
    certifications: ["ICAR / KVK programs", "SWAYAM certificate"],
    tools: [],
    platforms: P_SKILLINDIA,
  },
  social_community: {
    salary: "₹2–6 LPA in the development sector.",
    recruiters: ["NGOs", "CSR teams", "Government schemes", "Foundations"],
    certifications: ["Coursera Social Work (audit free)", "SWAYAM certificate"],
    tools: [],
    platforms: P_COURSERA,
  },
  smallbiz: {
    salary: "Income depends on your business — no upper limit.",
    recruiters: ["Self-employment / your own venture"],
    certifications: ["MSME / Startup India resources", "Google for Startups"],
    tools: ["MS Excel", "Canva", "WhatsApp Business"],
    platforms: P_MARKETING,
  },
  miscellaneous: {
    salary: "Varies by the specific skill and industry.",
    recruiters: ["Varies by skill and industry"],
    certifications: ["Relevant online certifications", "SWAYAM certificate"],
    tools: [],
    platforms: (name) => P_COURSERA(name),
  },
};

const FALLBACK = PROFILES.miscellaneous;

function buildResources(name: string, profile: Profile): Resource[] {
  return [
    { label: `YouTube: ${name}`, url: yt(name), type: "Video" },
    { label: "SWAYAM (Govt. free courses)", url: swayam(name), type: "Free Course" },
    ...profile.platforms(name),
    { label: "More free courses (search)", url: google(name), type: "Web Search" },
  ];
}

function buildRoadmap(name: string, key: string): string[] {
  const last =
    key === "smallbiz"
      ? `Launch your own ${name} service or small business and find your first customers.`
      : `Earn a certificate and start applying for internships, freelance gigs or jobs in ${name}.`;
  return [
    `Build a strong foundation — understand what ${name} is and the core concepts behind it.`,
    `Follow a free beginner course from the Free Resources above and take simple notes.`,
    `Practise hands-on every week — do small exercises or mini-projects in ${name}.`,
    `Build a portfolio of your best ${name} work to show employers or clients.`,
    last,
  ];
}

function buildFaqs(name: string, duration: string, fees: string, careers: string[]) {
  const roles = careers.slice(0, 3).join(", ") || "several entry-level roles";
  const feeNote = fees ? ` Paid courses (around ${fees}) add structure and a certificate.` : "";
  const durNote = duration || "a few months of regular practice";
  return [
    {
      q: `Can I learn ${name} for free?`,
      a: `Yes. The Free Resources section above links to free courses and tutorials (YouTube, SWAYAM and more) so you can learn ${name} without paying.${feeNote}`,
    },
    {
      q: `How long does it take to learn ${name}?`,
      a: `Most learners reach a usable level in ${durNote}. Daily practice speeds up the basics; real mastery comes from building actual projects.`,
    },
    {
      q: `Do I need a degree to start ${name}?`,
      a: `No. ${name} is skill-first — what you can actually do matters most. You can start right after Class 10 or 12, then prove your ability with projects and a portfolio.`,
    },
    {
      q: `What jobs can I get after learning ${name}?`,
      a: `Common options include ${roles}. You can also freelance or start your own work once you are confident.`,
    },
  ];
}

async function main() {
  // category id -> key
  const { data: cats, error: cErr } = await admin.database
    .from("categories")
    .select("id, key")
    .eq("stream", "skill");
  if (cErr) throw new Error(`categories: ${JSON.stringify(cErr)}`);
  const keyById = new Map((cats ?? []).map((c: { id: string; key: string }) => [c.id, c.key]));

  const { data: programs, error: pErr } = await admin.database
    .from("programs")
    .select("id, name, category_id, duration, fees, career_opportunities")
    .eq("stream", "skill");
  if (pErr) throw new Error(`programs: ${JSON.stringify(pErr)}`);

  let n = 0;
  for (const p of programs ?? []) {
    const key = keyById.get(p.category_id) ?? "miscellaneous";
    const profile = PROFILES[key] ?? FALLBACK;
    const patch = {
      free_resources: topFreeResources(key),
      roadmap: buildRoadmap(p.name, key),
      tools: profile.tools,
      certifications: profile.certifications,
      recruiters: profile.recruiters,
      salary_range: profile.salary,
      faqs: buildFaqs(p.name, p.duration ?? "", p.fees ?? "", p.career_opportunities ?? []),
    };
    const { error } = await admin.database.from("programs").update(patch).eq("id", p.id);
    if (error) throw new Error(`update ${p.name}: ${JSON.stringify(error)}`);
    n++;
  }
  console.log(`✓ Enriched ${n} skills with resources, roadmap, tools, certs, recruiters, salary & FAQs.`);
}

main().catch((e) => {
  console.error("Enrich failed:", e);
  process.exit(1);
});
