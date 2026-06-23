/** Indian school boards + after-10th guidance, used to tailor the quest10 flow. */
export type Board = {
  key: string;
  label: string;
  full: string;
  /** What the board is. */
  blurb: string;
  /** How 11–12 streams / subjects work in this board. */
  streamTip: string;
};

export const BOARDS: Board[] = [
  {
    key: "cbse",
    label: "CBSE",
    full: "Central Board of Secondary Education",
    blurb:
      "India's most common national board — NCERT-based and well aligned with national entrance exams (JEE, NEET, CUET).",
    streamTip:
      "In Class 11–12 you pick Science (PCM / PCB / PCMB), Commerce (with or without Maths) or Humanities, plus optional subjects like Computer Science, Physical Education or a language. Changing stream after 10th is allowed, subject to school seats and marks.",
  },
  {
    key: "cisce",
    label: "CISCE (ICSE / ISC)",
    full: "Council for the Indian School Certificate Examinations",
    blurb:
      "Known for a rigorous, English-rich curriculum and a very broad choice of subjects. Class 11–12 is the ISC programme.",
    streamTip:
      "ISC offers Science, Commerce and Arts with a wide elective basket — you choose a core group plus electives. Especially strong for English, languages, arts and humanities alongside the usual science/commerce options.",
  },
  {
    key: "state",
    label: "State Boards",
    full: "State Boards (Maharashtra, UP, Tamil Nadu, etc.)",
    blurb:
      "Run by each state — usually the most affordable, often available in regional languages, with a syllabus aligned to state colleges and entrance tests.",
    streamTip:
      "All state boards offer Science, Commerce and Arts in 11–12, but the exact subject combinations, medium of instruction and electives vary by state. Check your own state board's Class 11 subject list before choosing.",
  },
  {
    key: "nios",
    label: "NIOS",
    full: "National Institute of Open Schooling",
    blurb:
      "Open schooling — flexible and self-paced with on-demand exams. Fully recognized as equivalent to other boards for college and most government jobs.",
    streamTip:
      "NIOS lets you build your OWN subject combination (mix science, commerce and arts subjects) and study at your own pace — ideal if you want flexibility, are working, or are re-attempting subjects. Lab-science subjects have practical requirements.",
  },
  {
    key: "ib",
    label: "IB / Cambridge",
    full: "International Baccalaureate / Cambridge (IGCSE)",
    blurb:
      "International curricula focused on broad, holistic learning and recognized worldwide — a strong fit if you plan to study abroad.",
    streamTip:
      "Instead of fixed streams you choose subject groups (IB Diploma's six groups, or Cambridge AS/A-Level subjects) and can mix sciences, commerce and humanities. Available in fewer schools and at higher fees.",
  },
];

export const boardByKey = (key: string | null | undefined): Board | null =>
  BOARDS.find((b) => b.key === key) ?? null;

/** True for every board — the non-stream tracks don't depend on your board. */
export const ANY_BOARD_NOTE =
  "Diploma / Polytechnic, ITI trades and Paramedical & Vocational courses accept a Class 10 pass from ANY recognized board — your board does not limit these options.";
