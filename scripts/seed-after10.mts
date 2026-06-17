/**
 * Seed the "after 10th" catalog (streams 11-12, diploma, ITI, paramedical &
 * vocational) into InsForge. Reuses the same categories/programs tables as the
 * after-12th catalog, with new `stream` values.
 *
 * Run with:  npx tsx scripts/seed-after10.mts
 * Idempotent: clears each of these streams before re-inserting.
 *
 * Eligibility is written accurately — most paths open right after Class 10;
 * where a course typically needs 10+2, the eligibility text says so.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { createAdminClient } from "@insforge/sdk";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const proj = JSON.parse(readFileSync(path.join(root, ".insforge/project.json"), "utf8"));
const admin = createAdminClient({ baseUrl: proj.oss_host, apiKey: proj.api_key });

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

type Item = {
  name: string;
  short: string;
  fullDescription: string;
  duration: string;
  eligibility: string;
  fees: string;
  careerOpportunities: string[];
  syllabus: string[];
};
type Cat = { key: string; label: string; icon: string; iconColor: string; items: Item[] };
type Stream = { stream: string; categories: Cat[] };

const TENTH = "Passed Class 10th from a recognized board.";

const DATA: Stream[] = [
  // ===================================================================
  // 1) Streams (11th–12th)
  // ===================================================================
  {
    stream: "stream1112",
    categories: [
      {
        key: "hs-streams",
        label: "Higher Secondary Streams",
        icon: "BookOpen",
        iconColor: "text-blue-500",
        items: [
          {
            name: "Science (PCM)",
            short: "Physics, Chemistry, Maths.",
            fullDescription:
              "The Science stream with Physics, Chemistry and Mathematics is the gateway to engineering, technology, architecture, defence and pure-science careers. It builds strong analytical and problem-solving ability.",
            duration: "2 years (Class 11 & 12)",
            eligibility: TENTH + " Usually 50%+ marks; some schools require a science aptitude.",
            fees: "₹2,000 – ₹50,000 per year (Govt. vs private school)",
            careerOpportunities: [
              "Engineering (B.E./B.Tech)",
              "Architecture",
              "Defence (NDA)",
              "B.Sc (Physics/Maths/CS)",
              "Merchant Navy",
              "Data & Computer Science",
            ],
            syllabus: ["Physics", "Chemistry", "Mathematics", "English", "Optional (CS / PE / etc.)"],
          },
          {
            name: "Science (PCB)",
            short: "Physics, Chemistry, Biology.",
            fullDescription:
              "The Science stream with Physics, Chemistry and Biology is the path to medicine, dentistry, nursing, pharmacy, biotechnology and life-science research. Ideal for students who want a career in healthcare.",
            duration: "2 years (Class 11 & 12)",
            eligibility: TENTH + " Usually 50%+ marks.",
            fees: "₹2,000 – ₹50,000 per year",
            careerOpportunities: [
              "MBBS / BDS (Doctor / Dentist)",
              "Nursing (B.Sc Nursing)",
              "Pharmacy (B.Pharm)",
              "Physiotherapy",
              "Biotechnology",
              "Veterinary Science",
            ],
            syllabus: ["Physics", "Chemistry", "Biology", "English", "Optional (Maths / PE)"],
          },
          {
            name: "Science (PCMB)",
            short: "All four science subjects.",
            fullDescription:
              "Taking Physics, Chemistry, Maths and Biology together keeps both the engineering and the medical doors open until you decide. It is demanding but maximises your options after 12th.",
            duration: "2 years (Class 11 & 12)",
            eligibility: TENTH + " Strong 10th marks recommended (60%+).",
            fees: "₹2,000 – ₹60,000 per year",
            careerOpportunities: [
              "Engineering or Medical",
              "B.Sc (any science)",
              "Biotechnology",
              "Research",
              "Defence",
            ],
            syllabus: ["Physics", "Chemistry", "Mathematics", "Biology", "English"],
          },
          {
            name: "Commerce (with Maths)",
            short: "Business + Mathematics.",
            fullDescription:
              "Commerce with Mathematics is ideal for careers in finance, chartered accountancy, economics, data and business analytics. Maths widens your eligibility for B.Com (Hons), BBA, economics and actuarial paths.",
            duration: "2 years (Class 11 & 12)",
            eligibility: TENTH,
            fees: "₹2,000 – ₹40,000 per year",
            careerOpportunities: [
              "Chartered Accountant (CA)",
              "Company Secretary (CS)",
              "B.Com / BBA / BMS",
              "Economics & Analytics",
              "Banking & Finance",
              "Actuarial Science",
            ],
            syllabus: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"],
          },
          {
            name: "Commerce (without Maths)",
            short: "Business without Maths.",
            fullDescription:
              "Commerce without Maths suits students who want business and finance careers but prefer not to study mathematics. It still leads to most commerce degrees and professional courses.",
            duration: "2 years (Class 11 & 12)",
            eligibility: TENTH,
            fees: "₹2,000 – ₹40,000 per year",
            careerOpportunities: [
              "B.Com / BBA",
              "Company Secretary (CS)",
              "Hotel Management",
              "Digital Marketing",
              "Banking",
              "Law (BA LLB)",
            ],
            syllabus: ["Accountancy", "Business Studies", "Economics", "English", "Optional (IP / Entrepreneurship)"],
          },
          {
            name: "Arts / Humanities",
            short: "Widest range of careers.",
            fullDescription:
              "The Arts/Humanities stream covers history, political science, psychology, sociology, languages, media and design. It leads to law, civil services, journalism, teaching, design and the social sciences — the broadest set of options.",
            duration: "2 years (Class 11 & 12)",
            eligibility: TENTH,
            fees: "₹1,500 – ₹35,000 per year",
            careerOpportunities: [
              "Civil Services (IAS/IPS)",
              "Law (BA LLB)",
              "Journalism & Mass Comm",
              "Psychology",
              "Teaching",
              "Design & Fine Arts",
            ],
            syllabus: ["History", "Political Science", "Geography", "Psychology / Sociology", "English / Languages"],
          },
          {
            name: "Vocational Stream",
            short: "Job-skills inside school.",
            fullDescription:
              "Many boards (CBSE/NSQF) offer vocational subjects in 11-12 such as IT, retail, healthcare, tourism and beauty alongside academics — giving you a job-ready skill plus your 12th certificate.",
            duration: "2 years (Class 11 & 12)",
            eligibility: TENTH,
            fees: "₹2,000 – ₹30,000 per year",
            careerOpportunities: [
              "Entry-level jobs after 12th",
              "Apprenticeships",
              "Diploma / B.Voc",
              "Self-employment",
            ],
            syllabus: ["A vocational trade (IT/Retail/Healthcare/Tourism)", "Two academic subjects", "English", "Practical / internship"],
          },
        ],
      },
    ],
  },

  // ===================================================================
  // 2) Diploma / Polytechnic
  // ===================================================================
  {
    stream: "diploma",
    categories: [
      {
        key: "engineering",
        label: "Engineering Diplomas",
        icon: "Cog",
        iconColor: "text-cyan-600",
        items: [
          {
            name: "Diploma in Civil Engineering",
            short: "Build roads, bridges, buildings.",
            fullDescription:
              "A 3-year polytechnic diploma covering construction, surveying, structures and project management. Civil diploma holders work on real sites and can later do lateral entry into B.Tech (2nd year).",
            duration: "3 years",
            eligibility: TENTH + " (10th with Maths & Science).",
            fees: "₹10,000 – ₹60,000 per year",
            careerOpportunities: ["Junior Engineer", "Site Supervisor", "Surveyor", "Draughtsman", "Govt. PWD jobs", "Lateral entry to B.Tech"],
            syllabus: ["Engineering Drawing", "Surveying", "Building Construction", "Concrete Technology", "Structural Engineering", "Estimating & Costing"],
          },
          {
            name: "Diploma in Mechanical Engineering",
            short: "Machines, manufacturing, design.",
            fullDescription:
              "Covers thermodynamics, manufacturing, CAD/CAM and machine design. One of the most versatile diplomas, opening jobs across manufacturing, automobile and energy industries.",
            duration: "3 years",
            eligibility: TENTH + " (10th with Maths & Science).",
            fees: "₹10,000 – ₹60,000 per year",
            careerOpportunities: ["Junior Engineer", "CAD/CAM Designer", "Production Supervisor", "Maintenance Technician", "PSU jobs", "Lateral entry to B.Tech"],
            syllabus: ["Engineering Mechanics", "Thermodynamics", "Manufacturing Processes", "Machine Design", "CAD/CAM", "Fluid Mechanics"],
          },
          {
            name: "Diploma in Electrical Engineering",
            short: "Power, motors, wiring.",
            fullDescription:
              "Focuses on electrical machines, power systems, transmission and control. Strong demand in power utilities, manufacturing and construction.",
            duration: "3 years",
            eligibility: TENTH + " (10th with Maths & Science).",
            fees: "₹10,000 – ₹60,000 per year",
            careerOpportunities: ["Junior Engineer (Electrical)", "Electrical Supervisor", "Maintenance Engineer", "Power Plant Technician", "State Electricity Board jobs"],
            syllabus: ["Electrical Circuits", "Electrical Machines", "Power Systems", "Control Systems", "Electrical Installation", "Switchgear & Protection"],
          },
          {
            name: "Diploma in Electronics & Communication",
            short: "Circuits, signals, devices.",
            fullDescription:
              "Covers analog/digital electronics, communication systems and embedded devices. Leads to roles in telecom, electronics manufacturing and IoT.",
            duration: "3 years",
            eligibility: TENTH + " (10th with Maths & Science).",
            fees: "₹12,000 – ₹65,000 per year",
            careerOpportunities: ["Electronics Technician", "Telecom Junior Engineer", "Service Engineer", "Embedded/IoT Assistant", "Lateral entry to B.Tech"],
            syllabus: ["Electronic Devices", "Digital Electronics", "Communication Systems", "Microprocessors", "Embedded Systems", "PCB Design"],
          },
          {
            name: "Diploma in Computer Engineering",
            short: "Programming & IT systems.",
            fullDescription:
              "A 3-year diploma in programming, databases, networking and web development — a quick route into the IT industry or into B.Tech CSE via lateral entry.",
            duration: "3 years",
            eligibility: TENTH,
            fees: "₹12,000 – ₹70,000 per year",
            careerOpportunities: ["Junior Programmer", "Web Developer", "IT Support Engineer", "Network Technician", "Lateral entry to B.Tech CSE"],
            syllabus: ["Programming (C/Python)", "Data Structures", "DBMS", "Computer Networks", "Web Development", "Operating Systems"],
          },
          {
            name: "Diploma in Automobile Engineering",
            short: "Vehicles & engines.",
            fullDescription:
              "Specialises in vehicle design, engines, transmission and servicing. High demand with the growth of automobile and EV industries.",
            duration: "3 years",
            eligibility: TENTH + " (10th with Maths & Science).",
            fees: "₹12,000 – ₹60,000 per year",
            careerOpportunities: ["Service Engineer", "Automobile Technician", "Workshop Supervisor", "EV Service Technician", "Quality Inspector"],
            syllabus: ["Automobile Engines", "Transmission Systems", "Vehicle Maintenance", "Auto Electrical", "Two & Three Wheelers", "Electric Vehicles"],
          },
          {
            name: "Diploma in Chemical Engineering",
            short: "Process & plant operations.",
            fullDescription:
              "Covers chemical processes, plant operations and safety. Diploma holders work in refineries, pharma, fertiliser and process industries.",
            duration: "3 years",
            eligibility: TENTH + " (10th with Maths & Science).",
            fees: "₹12,000 – ₹65,000 per year",
            careerOpportunities: ["Process Technician", "Plant Operator", "Quality Control Assistant", "Safety Supervisor", "Pharma/Refinery jobs"],
            syllabus: ["Chemical Process Principles", "Unit Operations", "Industrial Chemistry", "Process Instrumentation", "Plant Safety", "Environmental Engineering"],
          },
          {
            name: "Diploma in Mechatronics Engineering",
            short: "Mechanical + electronics + automation.",
            fullDescription:
              "A modern diploma blending mechanical, electronics and control to build automated and robotic systems — aligned with Industry 4.0 jobs.",
            duration: "3 years",
            eligibility: TENTH + " (10th with Maths & Science).",
            fees: "₹15,000 – ₹70,000 per year",
            careerOpportunities: ["Automation Technician", "Robotics Assistant", "PLC/SCADA Technician", "Maintenance Engineer", "Manufacturing jobs"],
            syllabus: ["Sensors & Actuators", "PLC & Automation", "Robotics", "Hydraulics & Pneumatics", "Microcontrollers", "CNC Machines"],
          },
          {
            name: "Diploma in Information Technology",
            short: "Software, web & networks.",
            fullDescription:
              "Focuses on software, web technologies, networking and databases for direct IT-industry entry or further study.",
            duration: "3 years",
            eligibility: TENTH,
            fees: "₹12,000 – ₹70,000 per year",
            careerOpportunities: ["IT Support", "Web Developer", "Junior Software Developer", "Network Admin Assistant", "Lateral entry to B.Tech IT"],
            syllabus: ["Programming", "Web Technologies", "Database Systems", "Networking", "Software Engineering", "Cyber Security Basics"],
          },
          {
            name: "Diploma in Mining Engineering",
            short: "Extraction & mine safety.",
            fullDescription:
              "Specialised diploma in mining methods, mine surveying, ventilation and safety — strong placements with coal and mineral companies.",
            duration: "3 years",
            eligibility: TENTH + " (10th with Maths & Science).",
            fees: "₹15,000 – ₹70,000 per year",
            careerOpportunities: ["Mining Mate / Foreman", "Mine Surveyor", "Safety Officer", "Coal India jobs", "Quarry Supervisor"],
            syllabus: ["Mining Methods", "Mine Surveying", "Mine Ventilation", "Mine Machinery", "Mine Safety & Legislation", "Geology"],
          },
        ],
      },
      {
        key: "applied-science",
        label: "Applied Science & Technology",
        icon: "FlaskConical",
        iconColor: "text-rose-600",
        items: [
          {
            name: "Diploma in Food Technology",
            short: "Food processing & safety.",
            fullDescription:
              "Covers food processing, preservation, quality and safety. Strong demand in the packaged-food, dairy and FMCG sectors.",
            duration: "3 years",
            eligibility: TENTH + " (with Science).",
            fees: "₹15,000 – ₹60,000 per year",
            careerOpportunities: ["Food Quality Technician", "Production Supervisor", "FSSAI / Lab Assistant", "FMCG jobs", "Food Entrepreneur"],
            syllabus: ["Food Chemistry", "Food Processing", "Food Microbiology", "Quality Control", "Packaging Technology", "Food Safety & Standards"],
          },
          {
            name: "Diploma in Plastics Technology",
            short: "Polymers & moulding.",
            fullDescription:
              "Focuses on polymers, mould design and plastic processing (injection/blow moulding). Placements with plastic and packaging manufacturers (e.g. CIPET).",
            duration: "3 years",
            eligibility: TENTH + " (with Science).",
            fees: "₹15,000 – ₹65,000 per year",
            careerOpportunities: ["Plastics Technician", "Mould Designer", "Production Supervisor", "Quality Inspector", "CIPET-linked jobs"],
            syllabus: ["Polymer Science", "Plastics Processing", "Mould & Die Design", "Injection Moulding", "Testing of Plastics", "CAD"],
          },
          {
            name: "Diploma in Textile Technology",
            short: "Yarn, fabric & garments.",
            fullDescription:
              "Covers spinning, weaving, dyeing and garment manufacturing. Strong placements in India's large textile and apparel industry.",
            duration: "3 years",
            eligibility: TENTH,
            fees: "₹12,000 – ₹55,000 per year",
            careerOpportunities: ["Textile Technician", "Production Supervisor", "Quality Controller", "Merchandiser", "Textile Mill jobs"],
            syllabus: ["Fibre Science", "Yarn Manufacturing", "Fabric Manufacturing", "Textile Chemistry & Dyeing", "Garment Technology", "Quality Control"],
          },
        ],
      },
      {
        key: "design-management",
        label: "Design & Management",
        icon: "Palette",
        iconColor: "text-purple-600",
        items: [
          {
            name: "Diploma in Hotel Management & Catering",
            short: "Hospitality & food service.",
            fullDescription:
              "Trains you in hotel operations, food production, front office and housekeeping for a career in India's growing hospitality and tourism industry.",
            duration: "3 years",
            eligibility: TENTH,
            fees: "₹20,000 – ₹1,00,000 per year",
            careerOpportunities: ["Hotel Operations", "Chef / Kitchen", "Front Office Executive", "Cruise & Airline Hospitality", "Catering Business"],
            syllabus: ["Food Production", "Food & Beverage Service", "Front Office", "Housekeeping", "Hospitality Accounting", "Tourism"],
          },
          {
            name: "Diploma in Fashion Design",
            short: "Apparel & style design.",
            fullDescription:
              "Covers sketching, garment construction, textiles and fashion illustration. Leads into the apparel, retail and styling industry or self-employment.",
            duration: "1–3 years",
            eligibility: TENTH,
            fees: "₹25,000 – ₹1,50,000 per year",
            careerOpportunities: ["Fashion Designer", "Apparel Merchandiser", "Stylist", "Boutique Owner", "Textile/Export House jobs"],
            syllabus: ["Fashion Illustration", "Garment Construction", "Textile Science", "Pattern Making", "Draping", "Fashion CAD"],
          },
          {
            name: "Diploma in Interior Design",
            short: "Spaces & decor.",
            fullDescription:
              "Teaches space planning, materials, drawing and 3D visualisation to design homes, offices and commercial interiors.",
            duration: "1–3 years",
            eligibility: TENTH,
            fees: "₹25,000 – ₹1,20,000 per year",
            careerOpportunities: ["Interior Designer", "Design Assistant", "3D Visualiser", "Furniture Designer", "Freelance Designer"],
            syllabus: ["Design Principles", "Space Planning", "Materials & Finishes", "Drawing & Drafting", "3D Software (AutoCAD/SketchUp)", "Estimation"],
          },
          {
            name: "Diploma in Architectural Assistantship",
            short: "Support architects & drafting.",
            fullDescription:
              "A polytechnic diploma in building drawing, drafting and basic design — work as a draughtsman/architectural assistant or do lateral entry into B.Arch-related fields.",
            duration: "3 years",
            eligibility: TENTH + " (with Maths).",
            fees: "₹15,000 – ₹70,000 per year",
            careerOpportunities: ["Architectural Assistant", "Draughtsman", "CAD Technician", "Site Coordinator", "Govt. town-planning jobs"],
            syllabus: ["Architectural Drawing", "Building Construction", "AutoCAD", "Building Materials", "Surveying", "Estimation & Costing"],
          },
          {
            name: "Diploma in Graphic Design",
            short: "Visual & digital design.",
            fullDescription:
              "Covers typography, branding, layout and design software for careers in advertising, publishing and digital media.",
            duration: "1–2 years",
            eligibility: TENTH,
            fees: "₹20,000 – ₹1,00,000",
            careerOpportunities: ["Graphic Designer", "UI Designer (entry)", "Branding Assistant", "DTP Operator", "Freelancer"],
            syllabus: ["Design Fundamentals", "Typography", "Adobe Photoshop", "Adobe Illustrator", "Branding & Layout", "Print & Digital Media"],
          },
          {
            name: "Diploma in Animation & Multimedia",
            short: "2D/3D animation & VFX.",
            fullDescription:
              "Trains you in 2D/3D animation, modelling, VFX and editing for the media, gaming and film industry.",
            duration: "1–3 years",
            eligibility: TENTH,
            fees: "₹40,000 – ₹2,00,000",
            careerOpportunities: ["2D/3D Animator", "VFX Artist", "Motion Graphics Designer", "Game Art Assistant", "Video Editor"],
            syllabus: ["Drawing & Storyboarding", "2D Animation", "3D Modelling", "Rigging & Animation", "VFX & Compositing", "Video Editing"],
          },
        ],
      },
      {
        key: "agriculture",
        label: "Agriculture & Allied",
        icon: "Leaf",
        iconColor: "text-emerald-600",
        items: [
          {
            name: "Diploma in Agriculture",
            short: "Modern farming science.",
            fullDescription:
              "Covers crops, soil, irrigation and agribusiness. Leads to roles with agri-companies, govt. extension services or your own modern farm.",
            duration: "2–3 years",
            eligibility: TENTH + " (with Science).",
            fees: "₹10,000 – ₹60,000 per year",
            careerOpportunities: ["Agriculture Assistant", "Agri Field Officer", "Seed/Fertiliser Sales", "Govt. extension jobs", "Agri-entrepreneur"],
            syllabus: ["Agronomy", "Soil Science", "Horticulture", "Plant Protection", "Agricultural Economics", "Irrigation"],
          },
          {
            name: "Diploma in Horticulture",
            short: "Fruits, flowers, gardens.",
            fullDescription:
              "Specialises in growing fruits, vegetables, flowers and landscaping — a growing field with nurseries, farms and landscaping businesses.",
            duration: "2–3 years",
            eligibility: TENTH + " (with Science).",
            fees: "₹10,000 – ₹55,000 per year",
            careerOpportunities: ["Horticulture Assistant", "Nursery Manager", "Landscape Supervisor", "Floriculture Business", "Govt. horticulture jobs"],
            syllabus: ["Pomology (Fruits)", "Olericulture (Vegetables)", "Floriculture", "Landscaping", "Plant Propagation", "Post-Harvest Technology"],
          },
          {
            name: "Diploma in Dairy Technology",
            short: "Milk processing industry.",
            fullDescription:
              "Covers milk processing, dairy products and quality control. Strong placements with dairy cooperatives like Amul and private dairies.",
            duration: "3 years",
            eligibility: TENTH + " (with Science).",
            fees: "₹12,000 – ₹60,000 per year",
            careerOpportunities: ["Dairy Technician", "Quality Analyst", "Plant Supervisor", "Dairy Cooperative jobs", "Dairy Business"],
            syllabus: ["Milk Chemistry", "Dairy Processing", "Dairy Microbiology", "Dairy Products Technology", "Quality Control", "Dairy Plant Management"],
          },
        ],
      },
    ],
  },

  // ===================================================================
  // 3) ITI Trades
  // ===================================================================
  {
    stream: "iti",
    categories: [
      {
        key: "engineering-trades",
        label: "Engineering Trades",
        icon: "Wrench",
        iconColor: "text-amber-600",
        items: [
          {
            name: "Electrician",
            short: "Wiring & electrical systems.",
            fullDescription:
              "One of the most popular ITI trades — install, maintain and repair electrical wiring, motors and equipment. Excellent demand in industry, construction and self-employment.",
            duration: "2 years",
            eligibility: TENTH + " (with Science & Maths preferred).",
            fees: "₹3,000 – ₹40,000 per year (Govt. vs private ITI)",
            careerOpportunities: ["Electrician", "Wireman", "Maintenance Technician", "PSU / Railway jobs", "Self-employment", "Apprenticeship"],
            syllabus: ["Basic Electricity", "Wiring & Installation", "Electrical Machines", "Motor Winding", "Domestic & Industrial Wiring", "Safety Practices"],
          },
          {
            name: "Fitter",
            short: "Assembling & machining parts.",
            fullDescription:
              "Learn to assemble, fit and machine metal components using hand and machine tools. A core engineering trade with wide industrial demand.",
            duration: "2 years",
            eligibility: TENTH,
            fees: "₹3,000 – ₹40,000 per year",
            careerOpportunities: ["Fitter", "Maintenance Mechanic", "Assembly Technician", "PSU / Railway jobs", "Apprenticeship"],
            syllabus: ["Fitting & Filing", "Drilling & Tapping", "Lathe Operations", "Measuring Instruments", "Engineering Drawing", "Workshop Calculation"],
          },
          {
            name: "Turner",
            short: "Lathe machining specialist.",
            fullDescription:
              "Specialises in shaping metal on lathe machines to make precise cylindrical components. In demand in manufacturing and tool rooms.",
            duration: "2 years",
            eligibility: TENTH,
            fees: "₹3,000 – ₹40,000 per year",
            careerOpportunities: ["Turner / Machinist", "CNC Operator", "Tool Room Technician", "PSU jobs", "Apprenticeship"],
            syllabus: ["Lathe Operations", "Taper & Thread Cutting", "Measuring Instruments", "Engineering Drawing", "Workshop Practice", "CNC Basics"],
          },
          {
            name: "Machinist",
            short: "Operating machine tools.",
            fullDescription:
              "Operate lathes, milling and grinding machines to produce precision parts. Pathway to CNC operator roles in modern manufacturing.",
            duration: "2 years",
            eligibility: TENTH,
            fees: "₹3,000 – ₹40,000 per year",
            careerOpportunities: ["Machinist", "CNC Machine Operator", "Production Technician", "Tool Room jobs", "Apprenticeship"],
            syllabus: ["Machining Operations", "Milling & Grinding", "Precision Measurement", "Engineering Drawing", "CNC Programming Basics", "Workshop Calculation"],
          },
          {
            name: "Welder",
            short: "Joining metals.",
            fullDescription:
              "Learn arc, gas and modern welding techniques to join metals for construction, fabrication and pipelines. High demand in India and abroad.",
            duration: "1 year",
            eligibility: TENTH,
            fees: "₹3,000 – ₹35,000 per year",
            careerOpportunities: ["Welder", "Fabricator", "Pipe Welder (oil & gas)", "Overseas welding jobs", "Self-employment"],
            syllabus: ["Arc Welding", "Gas Welding & Cutting", "MIG/TIG Welding", "Welding Symbols & Drawing", "Metallurgy Basics", "Welding Safety"],
          },
          {
            name: "Mechanic (Motor Vehicle)",
            short: "Service cars & vehicles.",
            fullDescription:
              "Diagnose, service and repair cars and light vehicles. Strong demand in the automobile service and EV sectors.",
            duration: "2 years",
            eligibility: TENTH,
            fees: "₹4,000 – ₹45,000 per year",
            careerOpportunities: ["Auto Mechanic", "Service Advisor", "Workshop Technician", "EV Technician", "Garage Business"],
            syllabus: ["Engine Systems", "Transmission & Brakes", "Auto Electrical", "Fuel & Ignition", "Vehicle Diagnostics", "EV Basics"],
          },
          {
            name: "Diesel Mechanic",
            short: "Diesel engines & generators.",
            fullDescription:
              "Specialise in diesel engines used in trucks, generators and heavy machinery — service, overhaul and maintenance.",
            duration: "1 year",
            eligibility: TENTH,
            fees: "₹3,000 – ₹35,000 per year",
            careerOpportunities: ["Diesel Mechanic", "Generator Technician", "Heavy Vehicle Mechanic", "Fleet Maintenance", "Self-employment"],
            syllabus: ["Diesel Engine Systems", "Fuel Injection", "Engine Overhaul", "Cooling & Lubrication", "Troubleshooting", "Workshop Safety"],
          },
          {
            name: "Wireman",
            short: "Electrical wiring expert.",
            fullDescription:
              "Specialises in internal and external electrical wiring, cabling and fittings for buildings and industry.",
            duration: "2 years",
            eligibility: TENTH,
            fees: "₹3,000 – ₹35,000 per year",
            careerOpportunities: ["Wireman", "Electrical Helper → Electrician", "Cable Jointer", "Maintenance jobs", "Self-employment"],
            syllabus: ["Wiring Systems", "Cable Jointing", "Earthing", "Electrical Estimation", "Safety Practices", "Domestic Appliances"],
          },
          {
            name: "Draughtsman (Civil)",
            short: "Building drawings & plans.",
            fullDescription:
              "Prepare civil drawings, building plans and structural drafts using manual and CAD methods — a desk-based site-support role.",
            duration: "2 years",
            eligibility: TENTH,
            fees: "₹4,000 – ₹40,000 per year",
            careerOpportunities: ["Civil Draughtsman", "CAD Technician", "Site Coordinator", "Govt. PWD jobs", "Architectural firm jobs"],
            syllabus: ["Building Drawing", "AutoCAD", "Surveying", "Building Materials", "Estimation", "Structural Drawing"],
          },
          {
            name: "Draughtsman (Mechanical)",
            short: "Machine & component drawing.",
            fullDescription:
              "Create mechanical part and assembly drawings using drafting and CAD software for manufacturing and design teams.",
            duration: "2 years",
            eligibility: TENTH,
            fees: "₹4,000 – ₹40,000 per year",
            careerOpportunities: ["Mechanical Draughtsman", "CAD Designer", "Design Assistant", "PSU jobs", "Manufacturing jobs"],
            syllabus: ["Machine Drawing", "AutoCAD / SolidWorks", "Geometric Drawing", "Production Drawing", "Tolerances & Fits", "Workshop Practice"],
          },
          {
            name: "Refrigeration & AC Technician",
            short: "Cooling systems repair.",
            fullDescription:
              "Install, service and repair refrigerators, ACs and cold-storage systems — a fast-growing trade with the boom in air-conditioning.",
            duration: "2 years",
            eligibility: TENTH,
            fees: "₹4,000 – ₹45,000 per year",
            careerOpportunities: ["RAC Technician", "AC Service Engineer", "Cold Storage Technician", "Brand Service jobs", "Self-employment"],
            syllabus: ["Refrigeration Cycle", "Air Conditioning", "Compressors", "Electrical Controls", "Installation & Service", "Troubleshooting"],
          },
          {
            name: "Plumber",
            short: "Pipes & sanitation systems.",
            fullDescription:
              "Install and repair water-supply, drainage and sanitation systems for homes and buildings. Strong demand in construction and overseas.",
            duration: "1 year",
            eligibility: TENTH,
            fees: "₹3,000 – ₹30,000 per year",
            careerOpportunities: ["Plumber", "Pipe Fitter", "Construction jobs", "Overseas plumbing jobs", "Self-employment"],
            syllabus: ["Pipe Fitting", "Water Supply Systems", "Sanitation & Drainage", "Plumbing Tools", "Blueprint Reading", "Safety"],
          },
          {
            name: "Tool & Die Maker",
            short: "Precision tools & moulds.",
            fullDescription:
              "A premium engineering trade making precision tools, dies and moulds for manufacturing. Among the highest-paid ITI trades.",
            duration: "2 years",
            eligibility: TENTH,
            fees: "₹5,000 – ₹50,000 per year",
            careerOpportunities: ["Tool & Die Maker", "Tool Room Technician", "CNC Programmer", "Mould Maker", "PSU / MNC jobs"],
            syllabus: ["Tool Engineering", "Die & Mould Making", "Precision Machining", "CNC/EDM", "Metrology", "CAD/CAM"],
          },
          {
            name: "Instrument Mechanic",
            short: "Industrial instruments.",
            fullDescription:
              "Install, calibrate and maintain industrial instruments and control systems used in process industries.",
            duration: "2 years",
            eligibility: TENTH + " (with Science).",
            fees: "₹4,000 – ₹45,000 per year",
            careerOpportunities: ["Instrument Technician", "Calibration Technician", "Process Plant jobs", "Maintenance Engineer", "PSU jobs"],
            syllabus: ["Measuring Instruments", "Process Control", "Sensors & Transducers", "PLC Basics", "Calibration", "Industrial Electronics"],
          },
        ],
      },
      {
        key: "computer-electronics",
        label: "Computer & Electronics",
        icon: "Cpu",
        iconColor: "text-indigo-600",
        items: [
          {
            name: "COPA (Computer Operator & Programming Assistant)",
            short: "Office IT & basic programming.",
            fullDescription:
              "Learn computer operation, office software, internet and basic programming — a quick route to IT-enabled office and data jobs.",
            duration: "1 year",
            eligibility: TENTH,
            fees: "₹3,000 – ₹35,000 per year",
            careerOpportunities: ["Computer Operator", "Data Entry Operator", "Office Assistant", "BPO / IT support", "Self-employment"],
            syllabus: ["Computer Fundamentals", "MS Office", "Internet & Email", "Basic Programming", "Database Basics", "Accounting Software (Tally)"],
          },
          {
            name: "Electronics Mechanic",
            short: "Repair electronic equipment.",
            fullDescription:
              "Assemble, test and repair electronic equipment and circuit boards — leads into consumer electronics and IT-hardware service.",
            duration: "2 years",
            eligibility: TENTH + " (with Science).",
            fees: "₹4,000 – ₹40,000 per year",
            careerOpportunities: ["Electronics Technician", "Service Engineer", "PCB Repair Technician", "Manufacturing jobs", "Self-employment"],
            syllabus: ["Electronic Components", "Soldering & PCB", "Digital Electronics", "Consumer Electronics", "Test Instruments", "Microcontrollers"],
          },
          {
            name: "Information Technology (ICTSM)",
            short: "Computer hardware & networks.",
            fullDescription:
              "ICT System Maintenance trade — install and maintain computer hardware, peripherals and networks for the IT-support industry.",
            duration: "2 years",
            eligibility: TENTH,
            fees: "₹4,000 – ₹40,000 per year",
            careerOpportunities: ["IT Support Technician", "Hardware Engineer", "Network Technician", "Field Service jobs", "Self-employment"],
            syllabus: ["Computer Hardware", "Operating Systems", "Networking", "Peripheral Maintenance", "Troubleshooting", "Internet & Security"],
          },
        ],
      },
      {
        key: "non-engineering-trades",
        label: "Non-Engineering Trades",
        icon: "Scissors",
        iconColor: "text-pink-600",
        items: [
          {
            name: "Stenographer & Secretarial Assistant",
            short: "Shorthand & office work.",
            fullDescription:
              "Learn shorthand, typing and office management for stenographer and secretarial roles in government and private offices.",
            duration: "1 year",
            eligibility: TENTH,
            fees: "₹2,000 – ₹25,000 per year",
            careerOpportunities: ["Stenographer", "Personal Assistant", "Office Secretary", "Govt. steno jobs", "Court reporter"],
            syllabus: ["Shorthand", "Typing", "Office Procedures", "Computer & MS Office", "Business Correspondence", "Communication"],
          },
          {
            name: "Dress Making",
            short: "Stitching & garment making.",
            fullDescription:
              "Learn cutting, stitching and tailoring of garments — leads to boutique work, self-employment or the garment industry.",
            duration: "1 year",
            eligibility: TENTH,
            fees: "₹2,000 – ₹25,000 per year",
            careerOpportunities: ["Tailor / Dressmaker", "Boutique Assistant", "Garment Factory jobs", "Self-employment", "Fashion entrepreneur"],
            syllabus: ["Cutting & Stitching", "Pattern Making", "Garment Construction", "Embroidery", "Fabric Study", "Machine Operation"],
          },
          {
            name: "Sewing Technology",
            short: "Industrial garment production.",
            fullDescription:
              "Focuses on industrial sewing machines and mass garment production for the apparel and export industry.",
            duration: "1 year",
            eligibility: TENTH,
            fees: "₹2,000 – ₹25,000 per year",
            careerOpportunities: ["Sewing Machine Operator", "Quality Checker", "Production Assistant", "Garment Export jobs", "Supervisor"],
            syllabus: ["Industrial Sewing Machines", "Garment Construction", "Quality Control", "Pattern & Cutting", "Production Process", "Machine Maintenance"],
          },
          {
            name: "Hair & Skin Care",
            short: "Beauty & grooming.",
            fullDescription:
              "Learn hair styling, skin care and beauty treatments for a career in salons, spas or your own beauty business.",
            duration: "1 year",
            eligibility: TENTH,
            fees: "₹3,000 – ₹40,000 per year",
            careerOpportunities: ["Beautician", "Hair Stylist", "Salon Professional", "Spa Therapist", "Beauty Entrepreneur"],
            syllabus: ["Hair Cutting & Styling", "Skin Care & Facials", "Makeup", "Manicure & Pedicure", "Salon Management", "Hygiene & Safety"],
          },
          {
            name: "Food Production (General)",
            short: "Cooking & kitchen skills.",
            fullDescription:
              "Trains you in professional cooking, kitchen operations and food safety for hotels, restaurants and catering.",
            duration: "1 year",
            eligibility: TENTH,
            fees: "₹3,000 – ₹40,000 per year",
            careerOpportunities: ["Commis Chef", "Kitchen Assistant", "Catering jobs", "Cloud Kitchen", "Food Business"],
            syllabus: ["Basic Cookery", "Indian & Continental Cuisine", "Bakery & Confectionery", "Kitchen Hygiene", "Food Safety", "Menu Planning"],
          },
          {
            name: "Fashion Design & Technology",
            short: "Design & make apparel.",
            fullDescription:
              "Combines fashion design with garment technology — sketching, pattern making and production for the apparel industry.",
            duration: "1 year",
            eligibility: TENTH,
            fees: "₹3,000 – ₹40,000 per year",
            careerOpportunities: ["Fashion Design Assistant", "Boutique Owner", "Merchandiser", "Garment Industry jobs", "Stylist"],
            syllabus: ["Fashion Illustration", "Pattern Making", "Garment Construction", "Textile Study", "Surface Ornamentation", "Fashion CAD"],
          },
        ],
      },
    ],
  },

  // ===================================================================
  // 4) Paramedical & Vocational
  // ===================================================================
  {
    stream: "paravoc",
    categories: [
      {
        key: "paramedical",
        label: "Paramedical & Healthcare",
        icon: "HeartPulse",
        iconColor: "text-rose-600",
        items: [
          {
            name: "General Duty Assistant (GDA)",
            short: "Patient care support.",
            fullDescription:
              "A Skill-India healthcare course training you to assist nurses and care for patients in hospitals and at home — one of the most accessible healthcare jobs after 10th.",
            duration: "3 months – 1 year",
            eligibility: TENTH,
            fees: "₹5,000 – ₹40,000",
            careerOpportunities: ["General Duty Assistant", "Hospital Attendant", "Home Care Assistant", "Ward Assistant", "Elderly Care"],
            syllabus: ["Basic Patient Care", "Vital Signs", "Hygiene & Infection Control", "First Aid", "Medical Terminology", "Communication"],
          },
          {
            name: "Home Health Aide",
            short: "Care for patients at home.",
            fullDescription:
              "Trains you to support elderly, recovering and bed-ridden patients at home — a fast-growing field with home-healthcare companies.",
            duration: "3–6 months",
            eligibility: TENTH,
            fees: "₹5,000 – ₹30,000",
            careerOpportunities: ["Home Health Aide", "Elderly Caregiver", "Home Nursing Assistant", "Patient Attendant", "Overseas care jobs"],
            syllabus: ["Personal Care", "Mobility Support", "Nutrition & Feeding", "Medication Reminders", "First Aid", "Safety & Hygiene"],
          },
          {
            name: "Diploma in Medical Lab Technology (DMLT)",
            short: "Lab tests & diagnostics.",
            fullDescription:
              "Trains you to perform pathology lab tests on blood, urine and samples. Note: many institutes require 10+2 (Science); some offer it after 10th — check locally.",
            duration: "1–2 years",
            eligibility: "Passed Class 10th; many colleges require 10+2 with Science (Biology). Check the institute.",
            fees: "₹20,000 – ₹1,00,000",
            careerOpportunities: ["Lab Technician", "Pathology Lab jobs", "Hospital Diagnostics", "Blood Bank Technician", "Sample Collection"],
            syllabus: ["Hematology", "Clinical Pathology", "Microbiology", "Biochemistry", "Blood Banking", "Lab Equipment & Safety"],
          },
          {
            name: "X-Ray / Radiology Technician",
            short: "Medical imaging support.",
            fullDescription:
              "Learn to operate X-ray and imaging equipment to assist in diagnosis. Entry levels exist after 10th; full diplomas often need 10+2 (Science).",
            duration: "6 months – 2 years",
            eligibility: "Passed Class 10th for certificate courses; diploma usually needs 10+2 with Science.",
            fees: "₹20,000 – ₹1,20,000",
            careerOpportunities: ["X-Ray Technician", "Radiology Assistant", "Imaging Centre jobs", "Hospital Diagnostics", "CT/MRI Assistant"],
            syllabus: ["Radiographic Techniques", "Human Anatomy", "Radiation Safety", "Imaging Equipment", "Patient Positioning", "Dark Room / PACS"],
          },
          {
            name: "Operation Theatre (OT) Technician",
            short: "Assist in surgeries.",
            fullDescription:
              "Trains you to prepare and assist in operation theatres — sterilisation, instruments and supporting the surgical team. Often needs 10+2 (Science); some after 10th.",
            duration: "1–2 years",
            eligibility: "Passed Class 10th; many programs require 10+2 with Science. Check the institute.",
            fees: "₹25,000 – ₹1,20,000",
            careerOpportunities: ["OT Technician", "Surgical Assistant", "CSSD Technician", "Hospital jobs", "Day-care Surgery Centres"],
            syllabus: ["OT Procedures", "Sterilisation (CSSD)", "Surgical Instruments", "Anesthesia Support", "Infection Control", "Emergency Care"],
          },
          {
            name: "Dialysis Technician",
            short: "Run dialysis machines.",
            fullDescription:
              "Learn to operate dialysis machines and care for kidney patients — strong demand with the rise of dialysis centres. Many programs prefer 10+2 (Science).",
            duration: "1–2 years",
            eligibility: "Passed Class 10th; diploma often requires 10+2 with Science.",
            fees: "₹30,000 – ₹1,50,000",
            careerOpportunities: ["Dialysis Technician", "Nephrology jobs", "Dialysis Centre jobs", "Hospital jobs", "Equipment Specialist"],
            syllabus: ["Renal Anatomy", "Dialysis Procedures", "Machine Operation", "Water Treatment", "Patient Monitoring", "Infection Control"],
          },
          {
            name: "ECG / Cardiac Care Technician",
            short: "Heart-monitoring tests.",
            fullDescription:
              "Trains you to perform ECG and basic cardiac monitoring tests to support cardiologists. Certificate after 10th; advanced diploma may need 10+2.",
            duration: "6 months – 2 years",
            eligibility: "Passed Class 10th for certificate; diploma may need 10+2 with Science.",
            fees: "₹20,000 – ₹1,00,000",
            careerOpportunities: ["ECG Technician", "Cardiac Care Assistant", "Cath-lab jobs", "Hospital Diagnostics", "Heart Centres"],
            syllabus: ["Cardiac Anatomy", "ECG Recording", "Stress Test (TMT)", "Holter Monitoring", "Patient Care", "Emergency Basics"],
          },
          {
            name: "Ophthalmic / Optometry Assistant",
            short: "Eye-care support.",
            fullDescription:
              "Assist optometrists and ophthalmologists with eye tests, spectacles and equipment. Entry-level after 10th; full diploma often 10+2.",
            duration: "1–2 years",
            eligibility: "Passed Class 10th for assistant courses; optometry diploma often needs 10+2 with Science.",
            fees: "₹20,000 – ₹1,00,000",
            careerOpportunities: ["Optometry Assistant", "Optical Showroom jobs", "Eye Hospital jobs", "Refraction Assistant", "Self-employment (optical)"],
            syllabus: ["Eye Anatomy", "Refraction Basics", "Optical Dispensing", "Visual Testing", "Contact Lens Basics", "Equipment Handling"],
          },
          {
            name: "Dental Assistant",
            short: "Support dental clinics.",
            fullDescription:
              "Trains you to assist dentists, prepare instruments and manage dental clinics — a steady job in the growing dental sector.",
            duration: "6 months – 1 year",
            eligibility: TENTH,
            fees: "₹15,000 – ₹60,000",
            careerOpportunities: ["Dental Assistant", "Dental Clinic jobs", "Dental Hygiene Assistant", "Front-desk (dental)", "Dental Lab support"],
            syllabus: ["Dental Anatomy", "Chair-side Assistance", "Sterilisation", "Dental Materials", "Clinic Management", "Infection Control"],
          },
          {
            name: "Auxiliary Nurse Midwifery (ANM)",
            short: "Community nursing.",
            fullDescription:
              "A nursing course focused on basic and community health care, especially mother-and-child health. Note: ANM admission usually requires 10+2.",
            duration: "2 years",
            eligibility: "Usually 10+2 (any stream); some states allow strong 10th + bridge. Verify with the council.",
            fees: "₹20,000 – ₹1,50,000",
            careerOpportunities: ["ANM Nurse", "Community Health Worker", "Govt. PHC jobs", "Maternity Care", "Pathway to GNM"],
            syllabus: ["Community Health Nursing", "Maternal & Child Health", "First Aid", "Health Promotion", "Nutrition", "Basic Nursing"],
          },
        ],
      },
      {
        key: "vocational",
        label: "Vocational & Skill Courses",
        icon: "Sparkles",
        iconColor: "text-cyan-600",
        items: [
          {
            name: "Beauty & Wellness (Beautician)",
            short: "Beauty, skin & makeup.",
            fullDescription:
              "Learn beauty treatments, skin care, makeup and salon skills for a salon job or your own beauty business — a booming self-employment field.",
            duration: "3 months – 1 year",
            eligibility: TENTH,
            fees: "₹5,000 – ₹50,000",
            careerOpportunities: ["Beautician", "Makeup Artist", "Salon Owner", "Bridal Makeup", "Spa Therapist"],
            syllabus: ["Skin Care & Facials", "Hair Styling", "Makeup", "Manicure & Pedicure", "Mehndi", "Salon Management"],
          },
          {
            name: "Hospitality & Hotel Operations",
            short: "Hotels, food & service.",
            fullDescription:
              "A practical course in hotel front-office, food service and housekeeping for entry-level jobs in hotels, restaurants and tourism.",
            duration: "6 months – 1 year",
            eligibility: TENTH,
            fees: "₹10,000 – ₹60,000",
            careerOpportunities: ["Hotel Steward", "Front Office Assistant", "F&B Service", "Cruise/Airline jobs", "Catering"],
            syllabus: ["Food & Beverage Service", "Front Office", "Housekeeping", "Hospitality Etiquette", "Communication", "Tourism Basics"],
          },
          {
            name: "Retail Sales Associate",
            short: "Sales & store operations.",
            fullDescription:
              "Trains you in customer service, sales and store operations for India's fast-growing organised retail sector.",
            duration: "3–6 months",
            eligibility: TENTH,
            fees: "₹3,000 – ₹25,000",
            careerOpportunities: ["Retail Sales Associate", "Cashier", "Store Assistant", "Customer Service", "Team Leader (retail)"],
            syllabus: ["Customer Handling", "Sales Techniques", "Billing & POS", "Inventory Basics", "Visual Merchandising", "Communication"],
          },
          {
            name: "Web Designing & Development",
            short: "Build websites.",
            fullDescription:
              "Learn HTML, CSS, JavaScript and design tools to build websites — a high-demand digital skill that also enables freelancing.",
            duration: "3–12 months",
            eligibility: TENTH + " (basic computer knowledge helps).",
            fees: "₹10,000 – ₹80,000",
            careerOpportunities: ["Web Designer", "Front-end Developer (entry)", "Freelancer", "UI Assistant", "WordPress Developer"],
            syllabus: ["HTML & CSS", "JavaScript", "Responsive Design", "WordPress", "Graphic Tools", "Hosting & Domains"],
          },
          {
            name: "Tally & Financial Accounting",
            short: "Computerised accounting.",
            fullDescription:
              "Master Tally and computerised accounting, GST and billing for accounting-assistant jobs in shops, firms and companies.",
            duration: "2–6 months",
            eligibility: TENTH,
            fees: "₹5,000 – ₹30,000",
            careerOpportunities: ["Accounts Assistant", "Tally Operator", "GST Billing", "Data Entry (accounts)", "Self-employment"],
            syllabus: ["Accounting Basics", "Tally ERP/Prime", "GST", "Inventory & Billing", "Payroll", "Bank Reconciliation"],
          },
          {
            name: "Digital Marketing",
            short: "Online marketing skills.",
            fullDescription:
              "Learn social media, SEO, ads and content marketing — a modern, high-demand skill that supports jobs and freelancing.",
            duration: "3–6 months",
            eligibility: TENTH + " (basic computer & internet skills).",
            fees: "₹10,000 – ₹70,000",
            careerOpportunities: ["Digital Marketing Executive", "Social Media Manager", "SEO Assistant", "Freelancer", "Content Creator"],
            syllabus: ["Social Media Marketing", "SEO", "Google & Meta Ads", "Content Marketing", "Email Marketing", "Analytics"],
          },
          {
            name: "Photography & Videography",
            short: "Capture photos & video.",
            fullDescription:
              "Learn camera work, composition, lighting and editing for careers in events, media and content creation.",
            duration: "3–12 months",
            eligibility: TENTH,
            fees: "₹15,000 – ₹1,00,000",
            careerOpportunities: ["Photographer", "Videographer", "Photo/Video Editor", "Event/Wedding Studio", "Content Creator"],
            syllabus: ["Camera Handling", "Composition", "Lighting", "Photo Editing (Lightroom)", "Video Editing", "Studio & Outdoor Shoots"],
          },
          {
            name: "Mobile Phone Repair",
            short: "Repair smartphones.",
            fullDescription:
              "Hands-on training in diagnosing and repairing mobile phones — hardware and software — a popular self-employment skill.",
            duration: "2–6 months",
            eligibility: TENTH,
            fees: "₹5,000 – ₹40,000",
            careerOpportunities: ["Mobile Repair Technician", "Service Centre jobs", "Self-employment", "Spare-parts Business", "Field Technician"],
            syllabus: ["Mobile Hardware", "Soldering & Tools", "Software Flashing", "Fault Diagnosis", "Touch & Display Repair", "Customer Service"],
          },
          {
            name: "Tailoring & Garment Making",
            short: "Stitch & design clothes.",
            fullDescription:
              "Learn cutting, stitching and garment design for boutique work, the garment industry or your own tailoring business.",
            duration: "3 months – 1 year",
            eligibility: TENTH,
            fees: "₹3,000 – ₹30,000",
            careerOpportunities: ["Tailor", "Boutique Owner", "Garment Factory jobs", "Designer Assistant", "Self-employment"],
            syllabus: ["Cutting & Stitching", "Pattern Making", "Garment Design", "Embroidery", "Machine Operation", "Fabric Study"],
          },
          {
            name: "Spoken English & Soft Skills",
            short: "Communication & confidence.",
            fullDescription:
              "Builds spoken English, communication and workplace soft skills — a multiplier that improves your chances in almost any job.",
            duration: "2–6 months",
            eligibility: TENTH,
            fees: "₹3,000 – ₹30,000",
            careerOpportunities: ["Customer Support / BPO", "Front-desk roles", "Sales jobs", "Improved job interviews", "Any client-facing role"],
            syllabus: ["Spoken English", "Grammar & Vocabulary", "Communication Skills", "Interview Preparation", "Personality Development", "Workplace Etiquette"],
          },
        ],
      },
    ],
  },
];

async function seedStream(s: Stream) {
  await admin.database.from("programs").delete().eq("stream", s.stream);
  await admin.database.from("categories").delete().eq("stream", s.stream);

  let catCount = 0;
  let progCount = 0;
  for (let ci = 0; ci < s.categories.length; ci++) {
    const cat = s.categories[ci];
    const { data: inserted, error: catErr } = await admin.database
      .from("categories")
      .insert([
        {
          stream: s.stream,
          key: cat.key,
          label: cat.label,
          icon: cat.icon,
          icon_color: cat.iconColor,
          sort_order: ci,
        },
      ])
      .select();
    if (catErr || !inserted?.[0]) {
      throw new Error(`category insert failed (${s.stream}/${cat.key}): ${JSON.stringify(catErr)}`);
    }
    const categoryId = inserted[0].id;
    catCount++;

    const rows = cat.items.map((d, di) => ({
      category_id: categoryId,
      stream: s.stream,
      name: d.name,
      slug: slugify(d.name),
      short: d.short,
      full_description: d.fullDescription,
      duration: d.duration,
      eligibility: d.eligibility,
      career_opportunities: d.careerOpportunities,
      fees: d.fees,
      syllabus: d.syllabus,
      sort_order: di,
    }));
    const { error: progErr } = await admin.database.from("programs").insert(rows).select("id");
    if (progErr) throw new Error(`programs insert failed (${s.stream}/${cat.key}): ${JSON.stringify(progErr)}`);
    progCount += rows.length;
  }
  console.log(`  ✓ ${s.stream}: ${catCount} categories, ${progCount} programs`);
  return { catCount, progCount };
}

async function main() {
  let cats = 0;
  let progs = 0;
  for (const s of DATA) {
    const r = await seedStream(s);
    cats += r.catCount;
    progs += r.progCount;
  }
  console.log(`\nDone. Seeded ${cats} categories and ${progs} programs across ${DATA.length} after-10th streams.`);
}

main().catch((e) => {
  console.error("Seed failed:", e);
  process.exit(1);
});
