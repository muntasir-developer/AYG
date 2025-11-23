import {
  Stethoscope,
  Laptop,
  Atom,
  Leaf,
  Satellite,
  Brain,
} from "lucide-react";

// ----------------------------- Helper -----------------------------
/**
 * Converts a string into a clean URL slug
 * Example: "B.Sc Nursing" → "b-sc-nursing"
 */
export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// ----------------------------- Types -----------------------------
export type Degree = {
  name: string;
  short: string;
  fullDescription: string;
  duration: string;
  eligibility: string;
  careerOpportunities: string;
  fees: string;
  syllabus: string;
};

export type Category = {
  key: string;
  label: string;
  icon: JSX.Element;
  degrees: Degree[];
};

// ----------------------------- Data -----------------------------
export const SCIENCE_CATEGORIES: Category[] = [
  {
    key: "medical",
    label: "Medical & Allied Health",
    icon: <Stethoscope className="w-5 h-5 text-rose-600" />,
    degrees: [
      {
        name: "MBBS (Medicine & Surgery)",
        short: "Become a doctor.",
        fullDescription:
          "Bachelor of Medicine and Bachelor of Surgery is the primary medical degree for becoming a licensed doctor. The program combines theoretical knowledge with extensive clinical practice, covering all major medical specialties. Students learn to diagnose diseases, prescribe treatments, perform surgeries, and provide comprehensive patient care across various healthcare settings.",
        duration: "5.5 years (4.5 years + 1 year internship)",
        eligibility:
          "10+2 with Physics, Chemistry, Biology and English. Minimum 50% marks (40% for SC/ST/OBC). Qualified NEET-UG entrance exam.",
        careerOpportunities:
          "General Physician, Specialist Doctor (after MD/MS), Surgeon, Medical Officer, Research Scientist, Public Health Officer, Medical Consultant, Healthcare Administrator, Medical Professor",
        fees: "₹50,000 - ₹25 lakhs per year (Government: ₹50K-5L, Private: ₹5L-25L)",
        syllabus:
          "Anatomy, Physiology, Biochemistry, Pharmacology, Pathology, Microbiology, Forensic Medicine, Community Medicine, General Medicine, General Surgery, Pediatrics, Obstetrics & Gynecology, Orthopedics, ENT, Ophthalmology, Psychiatry, Dermatology, Radiology",
      },
      {
        name: "BDS (Dental Surgery)",
        short: "Teeth & oral care doctor.",
        fullDescription:
          "Bachelor of Dental Surgery focuses on oral health, dental diseases, and surgical procedures related to teeth, gums, and jaw. Students learn dental anatomy, tooth extraction, root canal treatments, orthodontics, and cosmetic dentistry. The program includes both theoretical knowledge and hands-on clinical training in dental hospitals.",
        duration: "5 years (4 years + 1 year internship)",
        eligibility:
          "10+2 with Physics, Chemistry, Biology. Minimum 50% marks. Qualified NEET-UG entrance exam.",
        careerOpportunities:
          "Dentist, Orthodontist, Oral Surgeon, Periodontist, Endodontist, Prosthodontist, Pediatric Dentist, Dental Researcher, Dental Product Sales, Academic Professor",
        fees: "₹50,000 - ₹8 lakhs per year (Government: ₹50K-2L, Private: ₹2L-8L)",
        syllabus:
          "Dental Anatomy, Oral Pathology, Dental Materials, Prosthodontics, Orthodontics, Periodontics, Oral Surgery, Conservative Dentistry, Endodontics, Pedodontics, Community Dentistry, Oral Medicine & Radiology",
      },
      {
        name: "BAMS (Ayurveda)",
        short: "Indian herbal medicine doctor.",
        fullDescription:
          "Bachelor of Ayurvedic Medicine and Surgery integrates traditional Indian Ayurvedic principles with modern medical science. Students learn about doshas, herbal medicines, Panchakarma therapies, and holistic healing approaches. The program covers both ancient Ayurvedic texts and contemporary medical subjects, preparing graduates to practice as Ayurvedic physicians.",
        duration: "5.5 years (4.5 years + 1 year internship)",
        eligibility:
          "10+2 with Physics, Chemistry, Biology. Minimum 50% marks. Qualified NEET-UG entrance exam.",
        careerOpportunities:
          "Ayurvedic Physician, Panchakarma Specialist, Ayurvedic Consultant, Wellness Center Manager, Herbal Product Developer, Research Officer, Academic Faculty, Medical Officer (Ayush)",
        fees: "₹20,000 - ₹5 lakhs per year (Government: ₹20K-1L, Private: ₹1L-5L)",
        syllabus:
          "Sanskrit, Padartha Vigyan, Rachana Sharira (Anatomy), Kriya Sharira (Physiology), Dravyaguna (Pharmacology), Rasa Shastra, Charaka Samhita, Sushruta Samhita, Kayachikitsa, Shalya Tantra, Panchakarma, Prasuti Tantra, Kaumarbhritya",
      },
      {
        name: "BHMS (Homeopathy)",
        short: "Homeopathic medicine doctor.",
        fullDescription:
          "Bachelor of Homeopathic Medicine and Surgery teaches the principles of homeopathy founded by Samuel Hahnemann. Students learn to treat diseases using highly diluted natural substances based on the 'like cures like' principle. The curriculum includes homeopathic pharmacy, repertory, materia medica, alongside modern medical subjects.",
        duration: "5.5 years (4.5 years + 1 year internship)",
        eligibility:
          "10+2 with Physics, Chemistry, Biology. Minimum 50% marks. Qualified NEET-UG entrance exam.",
        careerOpportunities:
          "Homeopathic Doctor, Consultant Physician, Clinical Researcher, Hospital Administrator, Pharmaceutical Researcher, Public Health Officer, Academic Teacher, Medical Officer (Ayush)",
        fees: "₹20,000 - ₹4 lakhs per year (Government: ₹20K-80K, Private: ₹80K-4L)",
        syllabus:
          "Organon of Medicine, Homeopathic Pharmacy, Materia Medica, Repertory, Anatomy, Physiology, Pathology, Surgery, Gynecology, Pediatrics, Community Medicine, Practice of Medicine, Forensic Medicine",
      },
      {
        name: "BUMS (Unani Medicine)",
        short: "Unani system doctor.",
        fullDescription:
          "Bachelor of Unani Medicine and Surgery is based on the Greco-Arabic medical system that emphasizes balance of body humors. Students learn about traditional Unani diagnosis methods, herbal formulations, dietetics, and surgery. The program combines ancient Unani wisdom with modern medical knowledge for holistic patient care.",
        duration: "5.5 years (4.5 years + 1 year internship)",
        eligibility:
          "10+2 with Physics, Chemistry, Biology. Minimum 50% marks. Qualified NEET-UG entrance exam.",
        careerOpportunities:
          "Unani Physician, Clinical Practitioner, Drug Inspector, Research Officer, Medical Officer (Ayush), Wellness Consultant, Pharmaceutical Developer, Academic Faculty",
        fees: "₹20,000 - ₹3.5 lakhs per year (Government: ₹20K-70K, Private: ₹70K-3.5L)",
        syllabus:
          "Kulliyat (Fundamentals), Tashreeh-ul-Badan (Anatomy), Munafeul Aza (Physiology), Mahiyatul Amraz (Pathology), Ilmul Advia (Pharmacology), Ilaj Bit Tadbeer (Regimenal Therapy), Moalijat (Medicine), Jarahat (Surgery), Qabalat wa Naumauladaat (Obstetrics), Ilmul Atfal (Pediatrics)",
      },
      {
        name: "BNYS (Naturopathy & Yoga)",
        short: "Heal with yoga & nature.",
        fullDescription:
          "Bachelor of Naturopathy and Yogic Sciences focuses on natural healing methods without drugs or surgery. Students learn yoga therapy, diet therapy, hydrotherapy, mud therapy, acupuncture, and other natural treatments. The program emphasizes disease prevention through lifestyle modifications and holistic wellness approaches.",
        duration: "5.5 years (4.5 years + 1 year internship)",
        eligibility:
          "10+2 with Physics, Chemistry, Biology. Minimum 50% marks. Qualified NEET-UG entrance exam.",
        careerOpportunities:
          "Naturopathy Doctor, Yoga Therapist, Wellness Consultant, Spa Manager, Diet & Nutrition Advisor, Fitness Center Director, Corporate Wellness Trainer, Research Officer, Academic Faculty",
        fees: "₹50,000 - ₹4 lakhs per year (Government: ₹50K-1.5L, Private: ₹1.5L-4L)",
        syllabus:
          "Yoga Philosophy, Asanas & Pranayama, Naturopathic Principles, Anatomy, Physiology, Biochemistry, Hydrotherapy, Mud Therapy, Fasting Therapy, Diet Therapy, Acupuncture, Clinical Diagnosis, Emergency Medicine, Community Medicine",
      },
      {
        name: "B.Sc Nursing",
        short: "Patient care & hospital support.",
        fullDescription:
          "Bachelor of Science in Nursing prepares professionals to provide comprehensive patient care in hospitals and healthcare settings. Students learn clinical nursing skills, patient assessment, medication administration, emergency care, and healthcare management. The program includes extensive practical training in hospital wards and community health settings.",
        duration: "4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology. Minimum 45-50% marks. Some states require NEET or state-level nursing entrance exams.",
        careerOpportunities:
          "Staff Nurse, Nursing Supervisor, ICU Nurse, Operation Theatre Nurse, Community Health Nurse, Nurse Educator, Hospital Administrator, Clinical Research Coordinator, Home Healthcare Nurse, Armed Forces Nursing Officer",
        fees: "₹20,000 - ₹2 lakhs per year (Government: ₹20K-60K, Private: ₹60K-2L)",
        syllabus:
          "Fundamentals of Nursing, Anatomy & Physiology, Microbiology, Nutrition, Medical-Surgical Nursing, Pediatric Nursing, Obstetric & Gynecological Nursing, Community Health Nursing, Mental Health Nursing, Nursing Research, Healthcare Management",
      },
      {
        name: "BPT (Physiotherapy)",
        short: "Body movement & recovery.",
        fullDescription:
          "Bachelor of Physiotherapy focuses on physical rehabilitation and movement therapy to treat injuries, disabilities, and chronic conditions. Students learn therapeutic exercises, manual therapy, electrotherapy, and specialized techniques for neurological, orthopedic, and cardiopulmonary conditions. The program emphasizes restoring mobility and improving quality of life.",
        duration: "4.5 years (4 years + 6 months internship)",
        eligibility:
          "10+2 with Physics, Chemistry, Biology. Minimum 50% marks. State-level entrance exams or institutional tests.",
        careerOpportunities:
          "Physiotherapist, Sports Physiotherapist, Orthopedic Specialist, Neurological Rehabilitation Therapist, Cardiac Rehabilitation Expert, Pediatric Physiotherapist, Home Care Therapist, Fitness Consultant, Academic Teacher, Clinical Researcher",
        fees: "₹50,000 - ₹3 lakhs per year (Government: ₹50K-1L, Private: ₹1L-3L)",
        syllabus:
          "Anatomy, Physiology, Biomechanics, Exercise Therapy, Electrotherapy, Manual Therapy, Orthopedic Physiotherapy, Neurological Physiotherapy, Cardiopulmonary Physiotherapy, Pediatric Physiotherapy, Sports Physiotherapy, Community Medicine",
      },
      {
        name: "BOT (Occupational Therapy)",
        short: "Daily life rehab support.",
        fullDescription:
          "Bachelor of Occupational Therapy helps individuals develop, recover, or maintain daily living and work skills. Students learn to assess functional abilities and design therapeutic activities for people with physical, mental, or developmental conditions. The focus is on enabling independence through adaptive techniques and assistive devices.",
        duration: "4.5 years (3.5 years + 1 year internship)",
        eligibility:
          "10+2 with Physics, Chemistry, Biology. Minimum 50% marks. State-level entrance exams or institutional tests.",
        careerOpportunities:
          "Occupational Therapist, Rehabilitation Specialist, Pediatric OT, Geriatric Care Therapist, Mental Health Therapist, School-based Therapist, Hand Therapy Specialist, Community Rehabilitation Officer, Clinical Researcher",
        fees: "₹40,000 - ₹2.5 lakhs per year (Government: ₹40K-80K, Private: ₹80K-2.5L)",
        syllabus:
          "Anatomy, Physiology, Psychology, Kinesiology, Therapeutic Activities, Physical Dysfunction OT, Psychosocial Dysfunction OT, Pediatric OT, Community Based Rehabilitation, Assistive Technology, Research Methodology",
      },
      {
        name: "BASLP (Audiology & Speech Therapy)",
        short: "Hearing & speech help.",
        fullDescription:
          "Bachelor of Audiology and Speech-Language Pathology trains professionals to diagnose and treat hearing, speech, voice, and language disorders. Students learn about hearing aids, cochlear implants, speech therapy techniques, and communication disorders in children and adults. The program combines clinical skills with technological applications.",
        duration: "4 years (3.5 years + 6 months internship)",
        eligibility:
          "10+2 with Physics, Chemistry, Biology/Mathematics. Minimum 50% marks. Entrance exams vary by institution.",
        careerOpportunities:
          "Audiologist, Speech-Language Pathologist, Hearing Aid Specialist, Cochlear Implant Programmer, School Speech Therapist, Voice Therapist, Clinical Researcher, Special Education Teacher, Corporate Communication Trainer",
        fees: "₹50,000 - ₹3 lakhs per year (Government: ₹50K-1.2L, Private: ₹1.2L-3L)",
        syllabus:
          "Anatomy & Physiology of Speech & Hearing, Phonetics, Linguistics, Audiology, Speech Science, Language Disorders, Articulation Disorders, Voice Disorders, Fluency Disorders, Hearing Aids & Assistive Devices, Neurogenic Communication Disorders",
      },
      {
        name: "B.Pharm (Pharmacy)",
        short: "Make & study medicines.",
        fullDescription:
          "Bachelor of Pharmacy is a comprehensive program covering pharmaceutical sciences, drug development, manufacturing, and dispensing. Students learn chemistry, pharmacology, drug formulation, quality control, and pharmaceutical regulations. The degree prepares professionals for various roles in the pharmaceutical industry and healthcare sector.",
        duration: "4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Mathematics/Biology. Minimum 50% marks. Many states conduct entrance exams.",
        careerOpportunities:
          "Pharmacist, Drug Inspector, Quality Control Officer, Medical Representative, Pharmaceutical Researcher, Clinical Pharmacist, Hospital Pharmacist, Drug Safety Associate, Regulatory Affairs Officer, Academic Faculty",
        fees: "₹40,000 - ₹2 lakhs per year (Government: ₹40K-1L, Private: ₹1L-2L)",
        syllabus:
          "Pharmaceutical Chemistry, Pharmacology, Pharmaceutics, Pharmacognosy, Pharmaceutical Analysis, Biochemistry, Microbiology, Pharmacokinetics, Drug Regulatory Affairs, Pharmaceutical Jurisprudence, Clinical Pharmacy, Hospital & Community Pharmacy",
      },
      {
        name: "Pharm.D (Doctor of Pharmacy)",
        short: "Advanced pharmacy practice.",
        fullDescription:
          "Doctor of Pharmacy is a clinical pharmacy program focusing on patient-centered pharmaceutical care. Students receive advanced training in clinical pharmacology, therapeutics, patient counseling, and medication management. The program prepares clinical pharmacists who work directly with healthcare teams to optimize drug therapy outcomes.",
        duration:
          "6 years (5 years + 1 year internship) or 3 years (Post B.Pharm)",
        eligibility:
          "10+2 with PCM/PCB for 6-year program. B.Pharm degree for 3-year Post-Baccalaureate program. Entrance exams required.",
        careerOpportunities:
          "Clinical Pharmacist, Hospital Pharmacy Manager, Drug Information Specialist, Pharmacovigilance Expert, Clinical Research Associate, Medical Affairs Manager, Pharmaceutical Consultant, Academic Clinical Pharmacy Faculty",
        fees: "₹60,000 - ₹3 lakhs per year (Government: ₹60K-1.5L, Private: ₹1.5L-3L)",
        syllabus:
          "Medicinal Chemistry, Pathophysiology, Pharmacotherapy, Clinical Pharmacokinetics, Pharmaceutical Care, Clinical Toxicology, Drug Information & Literature Evaluation, Pharmacoepidemiology, Clinical Research, Patient Counseling, Pharmacy Practice",
      },
      {
        name: "B.Sc Optometry",
        short: "Eye testing & care.",
        fullDescription:
          "Bachelor of Science in Optometry focuses on primary eye care, vision testing, and prescribing corrective lenses. Students learn to examine eyes, diagnose vision problems, detect eye diseases, and prescribe eyeglasses or contact lenses. The program also covers low vision rehabilitation and optical dispensing.",
        duration: "4 years or 3 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology/Mathematics. Minimum 50% marks. Entrance exams vary by institution.",
        careerOpportunities:
          "Optometrist, Contact Lens Specialist, Low Vision Specialist, Vision Therapist, Optical Store Manager, Refractive Surgery Coordinator, Research Optometrist, Corporate Optometrist, Academic Faculty",
        fees: "₹30,000 - ₹2 lakhs per year (Government: ₹30K-80K, Private: ₹80K-2L)",
        syllabus:
          "Ocular Anatomy, Physiological Optics, Visual Optics, Optometric Instruments, Refraction, Contact Lens, Binocular Vision, Low Vision Aids, Pediatric Optometry, Geriatric Optometry, Community Optometry, Clinical Optometry",
      },
      {
        name: "B.Sc Radiology & Imaging",
        short: "X-ray, CT, MRI expert.",
        fullDescription:
          "Bachelor of Science in Radiology and Imaging Technology trains professionals to operate diagnostic imaging equipment and produce quality medical images. Students learn X-ray, CT scan, MRI, ultrasound, and other imaging modalities. The program emphasizes radiation safety, image quality, patient positioning, and radiographic techniques.",
        duration: "3-4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology. Minimum 50% marks. Some institutions require entrance exams.",
        careerOpportunities:
          "Radiographer, CT Technologist, MRI Technologist, Ultrasound Technician, Cath Lab Technologist, Mammography Specialist, Radiation Safety Officer, PACS Administrator, Equipment Application Specialist",
        fees: "₹30,000 - ₹2 lakhs per year (Government: ₹30K-70K, Private: ₹70K-2L)",
        syllabus:
          "Radiation Physics, Radiographic Anatomy, Radiographic Techniques, X-ray Equipment, CT Imaging, MRI Physics & Techniques, Ultrasound Technology, Radiation Protection, Contrast Media, Digital Radiography, Interventional Radiology",
      },
      {
        name: "BMLT (Medical Lab Technology)",
        short: "Medical tests & labs.",
        fullDescription:
          "Bachelor of Medical Laboratory Technology prepares technicians to conduct laboratory tests that help diagnose diseases. Students learn clinical biochemistry, microbiology, hematology, pathology, and immunology. The program covers specimen collection, test procedures, equipment operation, and quality control in medical laboratories.",
        duration: "3-4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology. Minimum 50% marks. Some universities require entrance exams.",
        careerOpportunities:
          "Medical Lab Technologist, Pathology Lab Technician, Microbiology Technician, Blood Bank Technician, Lab Manager, Quality Control Officer, Research Assistant, Diagnostic Center Owner, Public Health Lab Officer",
        fees: "₹25,000 - ₹1.5 lakhs per year (Government: ₹25K-60K, Private: ₹60K-1.5L)",
        syllabus:
          "Clinical Biochemistry, Hematology, Microbiology, Immunology, Pathology, Histopathology, Cytology, Blood Banking, Clinical Parasitology, Molecular Diagnostics, Lab Management, Quality Assurance",
      },
      {
        name: "B.Sc Anesthesia Technology",
        short: "Support during surgery.",
        fullDescription:
          "Bachelor of Science in Anesthesia Technology trains professionals to assist anesthesiologists in administering anesthesia and monitoring patients during surgical procedures. Students learn about anesthetic agents, equipment handling, patient monitoring, emergency protocols, and post-anesthesia care in operation theaters and ICUs.",
        duration: "3-4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology. Minimum 50% marks. Some institutions conduct entrance exams.",
        careerOpportunities:
          "Anesthesia Technician, OT Technician, ICU Technician, Pain Management Technician, Cardiac Anesthesia Technician, Pediatric Anesthesia Technician, Equipment Maintenance Specialist, Academic Instructor",
        fees: "₹40,000 - ₹2 lakhs per year (Government: ₹40K-80K, Private: ₹80K-2L)",
        syllabus:
          "Anatomy & Physiology, Pharmacology, Anesthesia Equipment, General Anesthesia, Regional Anesthesia, Cardiac Anesthesia, Pediatric Anesthesia, Patient Monitoring, Emergency Care, Pain Management, ICU Technology",
      },
      {
        name: "B.Sc Dialysis Technology",
        short: "Kidney dialysis care.",
        fullDescription:
          "Bachelor of Science in Dialysis Technology focuses on renal replacement therapy for patients with kidney failure. Students learn to operate dialysis machines, prepare dialysate solutions, monitor patient vitals during dialysis, manage vascular access, and handle emergencies. The program covers both hemodialysis and peritoneal dialysis techniques.",
        duration: "3-4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology. Minimum 50% marks.",
        careerOpportunities:
          "Dialysis Technician, Dialysis Unit Manager, Renal Care Coordinator, Vascular Access Specialist, Home Dialysis Trainer, Equipment Maintenance Technician, Clinical Dialysis Specialist",
        fees: "₹40,000 - ₹2 lakhs per year (Government: ₹40K-1L, Private: ₹1L-2L)",
        syllabus:
          "Renal Anatomy & Physiology, Nephrology, Dialysis Principles, Hemodialysis Technology, Peritoneal Dialysis, Dialysis Equipment, Water Treatment, Vascular Access, Infection Control, Patient Care, Emergency Management",
      },
      {
        name: "B.Sc Cardiac Care Technology",
        short: "Heart care support.",
        fullDescription:
          "Bachelor of Science in Cardiac Care Technology trains professionals in cardiovascular diagnostic procedures and monitoring. Students learn ECG, echocardiography, stress testing, cardiac catheterization support, and intensive cardiac care. The program prepares technologists for cardiac emergency rooms, cath labs, and cardiac ICUs.",
        duration: "3-4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology. Minimum 50% marks.",
        careerOpportunities:
          "Cardiac Technologist, ECG Technician, Echo Technician, Cath Lab Technician, Cardiac ICU Technician, Stress Test Specialist, Holter Monitor Technician, Cardiac Rehabilitation Specialist",
        fees: "₹50,000 - ₹2.5 lakhs per year (Government: ₹50K-1.2L, Private: ₹1.2L-2.5L)",
        syllabus:
          "Cardiovascular Anatomy, Cardiac Physiology, ECG Technology, Echocardiography, Cardiac Catheterization, Stress Testing, Holter Monitoring, Cardiac Emergency Care, Pacemaker Technology, Cardiac Rehabilitation",
      },
      {
        name: "B.Sc Operation Theatre Technology",
        short: "OT equipment & prep.",
        fullDescription:
          "Bachelor of Science in Operation Theatre Technology prepares professionals to manage operation theater equipment, maintain sterile environments, and assist surgical teams. Students learn surgical instruments handling, sterilization techniques, patient positioning, OT protocols, and emergency procedures during surgery.",
        duration: "3-4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology. Minimum 50% marks.",
        careerOpportunities:
          "OT Technician, Surgical Technologist, Central Sterile Supply Technician, Surgical Equipment Manager, OT Coordinator, Endoscopy Technician, Surgical First Assistant, OT Educator",
        fees: "₹40,000 - ₹2 lakhs per year (Government: ₹40K-1L, Private: ₹1L-2L)",
        syllabus:
          "Surgical Anatomy, Surgical Instruments, Sterilization & Disinfection, OT Setup & Management, General Surgery, Orthopedic Surgery, Gynecological Surgery, Laparoscopy, Emergency Surgery Procedures, Infection Control",
      },
      {
        name: "B.Sc Respiratory Therapy",
        short: "Lungs & breathing care.",
        fullDescription:
          "Bachelor of Science in Respiratory Therapy trains professionals to treat patients with breathing disorders and cardiopulmonary conditions. Students learn mechanical ventilation, oxygen therapy, pulmonary function testing, airway management, and critical care for respiratory emergencies. The program emphasizes ICU and emergency department skills.",
        duration: "3-4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology. Minimum 50% marks.",
        careerOpportunities:
          "Respiratory Therapist, Pulmonary Function Technologist, Sleep Lab Technician, ICU Respiratory Specialist, Ventilator Specialist, Asthma Educator, Cardiac Pulmonary Rehabilitation Therapist",
        fees: "₹50,000 - ₹2.5 lakhs per year (Government: ₹50K-1.2L, Private: ₹1.2L-2.5L)",
        syllabus:
          "Respiratory Anatomy & Physiology, Pulmonary Pathology, Mechanical Ventilation, Oxygen Therapy, Airway Management, Pulmonary Function Testing, Critical Care, Neonatal Respiratory Care, Sleep Medicine",
      },
      {
        name: "B.Sc Perfusion Technology",
        short: "Heart-lung machine work.",
        fullDescription:
          "Bachelor of Science in Perfusion Technology specializes in operating heart-lung machines during cardiac surgery. Students learn to manage cardiopulmonary bypass, maintain blood circulation and oxygenation during surgery, monitor physiological parameters, and handle emergency situations. This highly specialized field requires precision and critical thinking.",
        duration: "3-4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology. Minimum 50% marks. Often requires entrance exams.",
        careerOpportunities:
          "Perfusionist, Cardiac Surgery Team Member, Pediatric Perfusionist, ECMO Specialist, Clinical Perfusion Educator, Perfusion Equipment Specialist, Research Perfusionist",
        fees: "₹60,000 - ₹3 lakhs per year (Government: ₹60K-1.5L, Private: ₹1.5L-3L)",
        syllabus:
          "Cardiovascular Anatomy, Cardiac Physiology, Perfusion Principles, Cardiopulmonary Bypass, ECMO Technology, Blood Gas Management, Hemodynamics, Pediatric Perfusion, Cardiac Surgery Procedures, Emergency Protocols",
      },
      {
        name: "B.Sc Emergency & Trauma Care",
        short: "Emergency room support.",
        fullDescription:
          "Bachelor of Science in Emergency and Trauma Care trains professionals to provide immediate medical care in emergency situations. Students learn advanced life support, trauma management, emergency protocols, triage, patient stabilization, and pre-hospital care. The program prepares graduates for high-pressure emergency medical services.",
        duration: "3-4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology. Minimum 50% marks.",
        careerOpportunities:
          "Emergency Medical Technician, Trauma Care Specialist, Ambulance Paramedic, Emergency Room Technician, Disaster Management Officer, Flight Paramedic, Emergency Care Educator",
        fees: "₹40,000 - ₹2 lakhs per year (Government: ₹40K-1L, Private: ₹1L-2L)",
        syllabus:
          "Emergency Medicine, Trauma Life Support, Basic & Advanced Cardiac Life Support, Triage, Airway Management, Shock Management, Burns & Poisoning, Pre-hospital Care, Disaster Management, Emergency Pharmacology",
      },
      {
        name: "B.Sc Critical Care Technology",
        short: "ICU monitoring.",
        fullDescription:
          "Bachelor of Science in Critical Care Technology focuses on intensive care unit management and monitoring critically ill patients. Students learn advanced monitoring techniques, ventilator management, hemodynamic monitoring, and critical care equipment operation. The program prepares technologists for ICU, CCU, and NICU settings.",
        duration: "3-4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology. Minimum 50% marks.",
        careerOpportunities:
          "ICU Technician, Critical Care Specialist, Intensive Care Monitoring Technician, NICU Technician, CCU Technician, Ventilator Technician, Critical Care Educator",
        fees: "₹50,000 - ₹2.5 lakhs per year (Government: ₹50K-1.2L, Private: ₹1.2L-2.5L)",
        syllabus:
          "Critical Care Principles, Patient Monitoring, Ventilator Management, Hemodynamic Monitoring, ICU Equipment, Cardiac Critical Care, Neonatal Intensive Care, Infection Control, Emergency Procedures, Pharmacology",
      },
      {
        name: "B.Sc Physician Assistant",
        short: "Assist doctors clinically.",
        fullDescription:
          "Bachelor of Science in Physician Assistant prepares mid-level healthcare providers who work under physician supervision to provide diagnostic and therapeutic services. Students learn physical examination, diagnosis, treatment planning, minor procedures, and patient management. This emerging role bridges nursing and medical practice.",
        duration: "3-4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology. Minimum 50% marks. Some programs prefer healthcare background.",
        careerOpportunities:
          "Physician Assistant, Clinical Associate, Medical Assistant, Surgical Assistant, Primary Care Assistant, Emergency Medicine PA, Hospital Medicine PA, Academic Clinical Instructor",
        fees: "₹60,000 - ₹3 lakhs per year (Government: ₹60K-1.5L, Private: ₹1.5L-3L)",
        syllabus:
          "Clinical Medicine, Physical Diagnosis, Pharmacology, Pathophysiology, Clinical Procedures, Surgery, Internal Medicine, Pediatrics, Obstetrics & Gynecology, Emergency Medicine, Primary Care Practice",
      },
      {
        name: "B.Sc Nuclear Medicine Technology",
        short: "Radio-diagnostics.",
        fullDescription:
          "Bachelor of Science in Nuclear Medicine Technology trains professionals to use radioactive materials for diagnosis and treatment. Students learn about radioisotopes, imaging techniques (PET, SPECT), radiation safety, quality control, and nuclear pharmacy. The program combines physics, biology, and technology for advanced medical imaging.",
        duration: "3-4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology/Mathematics. Minimum 50% marks.",
        careerOpportunities:
          "Nuclear Medicine Technologist, PET-CT Technologist, Radiation Safety Officer, Nuclear Pharmacy Technician, Research Technologist, Quality Assurance Officer, Clinical Application Specialist",
        fees: "₹60,000 - ₹3 lakhs per year (Government: ₹60K-1.5L, Private: ₹1.5L-3L)",
        syllabus:
          "Nuclear Physics, Radiation Biology, Radiopharmaceuticals, PET Imaging, SPECT Imaging, Radiation Protection, Nuclear Instrumentation, Clinical Nuclear Medicine, Quality Control, Radionuclide Therapy",
      },
      {
        name: "B.Sc Neuroscience Technology",
        short: "Brain & nerve tech.",
        fullDescription:
          "Bachelor of Science in Neuroscience Technology focuses on diagnostic procedures for neurological disorders. Students learn EEG, EMG, nerve conduction studies, evoked potentials, polysomnography, and neuromonitoring techniques. The program prepares technologists for neurology departments, sleep labs, and intraoperative monitoring.",
        duration: "3-4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology. Minimum 50% marks.",
        careerOpportunities:
          "EEG Technologist, EMG Technician, Sleep Technologist, Neuromonitoring Specialist, Evoked Potential Technician, Neurology Lab Technician, Clinical Neurophysiology Technologist, Research Technician",
        fees: "₹50,000 - ₹2.5 lakhs per year (Government: ₹50K-1.2L, Private: ₹1.2L-2.5L)",
        syllabus:
          "Neuroanatomy, Neurophysiology, EEG Technology, EMG & Nerve Conduction Studies, Evoked Potentials, Polysomnography, Intraoperative Neuromonitoring, Clinical Neurology, Neurological Disorders, Equipment Maintenance",
      },
      {
        name: "BPO (Prosthetics & Orthotics)",
        short: "Artificial limbs & braces.",
        fullDescription:
          "Bachelor of Prosthetics and Orthotics trains professionals to design, fabricate, and fit artificial limbs (prosthetics) and supportive devices (orthotics) for people with disabilities or injuries. Students learn biomechanics, materials science, patient assessment, custom device fabrication, and rehabilitation principles to restore mobility and function.",
        duration: "4 years (3.5 years + 6 months internship)",
        eligibility:
          "10+2 with Physics, Chemistry, Biology/Mathematics. Minimum 50% marks.",
        careerOpportunities:
          "Prosthetist, Orthotist, Prosthetic & Orthotic Technician, Rehabilitation Specialist, Custom Device Designer, Sports Orthotics Specialist, Pediatric P&O Specialist, Research & Development Officer, Business Owner",
        fees: "₹50,000 - ₹2.5 lakhs per year (Government: ₹50K-1L, Private: ₹1L-2.5L)",
        syllabus:
          "Anatomy & Physiology, Biomechanics, Kinesiology, Materials Science, Upper Limb Prosthetics, Lower Limb Prosthetics, Spinal Orthotics, Lower Limb Orthotics, Pediatric P&O, Pathology, Rehabilitation, Clinical Practice",
      },
      {
        name: "B.Sc Nutrition & Dietetics",
        short: "Food for good health.",
        fullDescription:
          "Bachelor of Science in Nutrition and Dietetics focuses on the science of food, nutrition, and their impact on health. Students learn therapeutic nutrition, diet planning for various diseases, food safety, community nutrition, and nutritional counseling. The program prepares professionals to promote health through proper nutrition and dietary interventions.",
        duration: "3-4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology/Mathematics. Minimum 50% marks.",
        careerOpportunities:
          "Clinical Dietitian, Nutritionist, Sports Nutritionist, Community Nutritionist, Food Service Manager, Wellness Consultant, Research Nutritionist, Nutrition Educator, Public Health Nutritionist, Consultant Dietitian",
        fees: "₹30,000 - ₹2 lakhs per year (Government: ₹30K-80K, Private: ₹80K-2L)",
        syllabus:
          "Food Science, Human Nutrition, Clinical Nutrition, Therapeutic Dietetics, Community Nutrition, Food Microbiology, Diet Planning, Nutritional Biochemistry, Public Health Nutrition, Food Safety & Quality Control, Research Methodology",
      },
      {
        name: "B.Sc Public Health",
        short: "Health for communities.",
        fullDescription:
          "Bachelor of Science in Public Health addresses health issues at the population level through disease prevention, health promotion, and policy development. Students learn epidemiology, biostatistics, environmental health, health education, and healthcare systems. The program prepares professionals to improve community health outcomes and reduce health disparities.",
        duration: "3-4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology/Mathematics. Minimum 50% marks.",
        careerOpportunities:
          "Public Health Officer, Epidemiologist, Health Educator, Program Coordinator, Community Health Worker, NGO Health Manager, Health Policy Analyst, Research Associate, Maternal & Child Health Officer, Disease Surveillance Officer",
        fees: "₹40,000 - ₹2 lakhs per year (Government: ₹40K-1L, Private: ₹1L-2L)",
        syllabus:
          "Epidemiology, Biostatistics, Environmental Health, Health Education, Community Health, Maternal & Child Health, Communicable Diseases, Non-Communicable Diseases, Health Policy & Management, Research Methods, Bioethics",
      },
      {
        name: "B.Sc Health Information Management",
        short: "Medical data systems.",
        fullDescription:
          "Bachelor of Science in Health Information Management combines healthcare knowledge with information technology to manage patient data, medical records, and healthcare databases. Students learn medical coding, health informatics, database management, electronic health records, data analytics, and healthcare regulations. The program prepares professionals for the digital transformation of healthcare.",
        duration: "3-4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology/Mathematics. Minimum 50% marks.",
        careerOpportunities:
          "Health Information Manager, Medical Records Manager, Medical Coder, Health Data Analyst, Clinical Documentation Specialist, EHR Implementation Specialist, Data Quality Manager, Healthcare IT Consultant, Compliance Officer",
        fees: "₹40,000 - ₹2.5 lakhs per year (Government: ₹40K-1L, Private: ₹1L-2.5L)",
        syllabus:
          "Medical Terminology, Health Information Systems, Medical Coding (ICD, CPT), Electronic Health Records, Healthcare Database Management, Health Data Analytics, Medical Record Management, Healthcare Laws & Ethics, Quality Management, Healthcare Statistics",
      },
    ],
  },
  {
    key: "engineering",
    label: "Engineering & Technology (B.E./B.Tech)",
    icon: <Laptop className="w-5 h-5 text-indigo-600" />,
    degrees: [
      {
        name: "Computer Science & Engineering (CSE)",
        short: "Build software & apps.",
        fullDescription:
          "Computer Science & Engineering focuses on the design, development, and analysis of software and hardware systems. Students learn programming, algorithms, databases, artificial intelligence, web development, and computer networks. This field combines theoretical computer science with practical engineering to create innovative software solutions and computing systems.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60% aggregate). Entrance exams: JEE Main, JEE Advanced, state CETs, or university-specific exams.",
        careerOpportunities:
          "Software Developer, Data Scientist, Machine Learning Engineer, Full Stack Developer, Systems Analyst, Cloud Architect, Cybersecurity Analyst, Mobile App Developer, DevOps Engineer, AI Research Scientist, Database Administrator, Game Developer. Top recruiters include Google, Microsoft, Amazon, TCS, Infosys, Wipro, and startups.",
        fees: "₹50,000 - ₹3,00,000 per year in government colleges; ₹2,00,000 - ₹10,00,000 per year in private institutions; ₹15,00,000 - ₹40,00,000 total for premier institutes like IITs/NITs.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Basic Programming (C/C++), Engineering Graphics. Semester 3-4: Data Structures, Computer Organization, Digital Electronics, Object-Oriented Programming (Java/Python), Database Management Systems. Semester 5-6: Operating Systems, Computer Networks, Software Engineering, Algorithm Design, Web Technologies, Compiler Design. Semester 7-8: Artificial Intelligence, Machine Learning, Cloud Computing, Electives (Blockchain, IoT, Big Data), Major Project, Internship.",
      },
      {
        name: "Information Technology (IT)",
        short: "Manage computers & networks.",
        fullDescription:
          "Information Technology focuses on the practical application of computer systems for storing, retrieving, transmitting, and manipulating data. IT emphasizes software applications, network management, database systems, and IT infrastructure. Students learn to implement and manage technology solutions for business and organizational needs.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60% aggregate). Entrance exams: JEE Main, state CETs, or university-specific exams.",
        careerOpportunities:
          "IT Consultant, Network Administrator, System Administrator, Database Manager, Web Developer, IT Project Manager, Business Analyst, Technical Support Engineer, ERP Consultant, Cloud Solutions Architect, IT Security Specialist. Companies include Accenture, Cognizant, Capgemini, IBM, Oracle, and Deloitte.",
        fees: "₹40,000 - ₹2,50,000 per year in government colleges; ₹1,50,000 - ₹8,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Mathematics, Physics, Programming Fundamentals, Digital Logic, Communication Skills. Semester 3-4: Data Structures, DBMS, Computer Networks, Web Technologies, Operating Systems. Semester 5-6: Software Engineering, Network Security, Mobile Computing, Java/Python Programming, System Administration. Semester 7-8: Cloud Computing, IT Service Management, Electives (DevOps, Cybersecurity, Data Analytics), Capstone Project, Industrial Training.",
      },
      {
        name: "Artificial Intelligence & Machine Learning",
        short: "Smart computers.",
        fullDescription:
          "AI & Machine Learning is a specialized field focusing on creating intelligent systems that can learn from data and make decisions. Students study neural networks, deep learning, natural language processing, computer vision, and robotics. This emerging field combines computer science, mathematics, and statistics to build systems that mimic human intelligence.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 60% aggregate). Strong foundation in mathematics recommended. Entrance exams: JEE Main, BITSAT, or university-specific tests.",
        careerOpportunities:
          "Machine Learning Engineer, AI Research Scientist, Data Scientist, Computer Vision Engineer, NLP Engineer, Deep Learning Specialist, Robotics Engineer, AI Product Manager, Business Intelligence Analyst, MLOps Engineer. Top employers include Google, Meta, Microsoft Research, NVIDIA, Tesla, startups, and research labs.",
        fees: "₹1,00,000 - ₹4,00,000 per year in government colleges; ₹3,00,000 - ₹12,00,000 per year in premium private institutions.",
        syllabus:
          "Semester 1-2: Advanced Mathematics (Linear Algebra, Calculus, Statistics), Programming (Python), Data Structures, Physics. Semester 3-4: Probability & Statistics, Machine Learning Fundamentals, Database Systems, Algorithms. Semester 5-6: Deep Learning, Neural Networks, Natural Language Processing, Computer Vision, Reinforcement Learning. Semester 7-8: Advanced AI Topics, Big Data Analytics, AI Ethics, Specialized Electives (Generative AI, Autonomous Systems), Research Project.",
      },
      {
        name: "Data Science",
        short: "Learn from big data.",
        fullDescription:
          "Data Science combines statistics, programming, and domain expertise to extract meaningful insights from structured and unstructured data. Students learn data mining, machine learning, statistical modeling, data visualization, and big data technologies. This interdisciplinary field prepares professionals to solve complex problems using data-driven approaches.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60% aggregate). Strong analytical and mathematical skills preferred.",
        careerOpportunities:
          "Data Scientist, Data Analyst, Business Intelligence Analyst, Data Engineer, Analytics Consultant, Quantitative Analyst, Research Scientist, Big Data Engineer, Statistical Modeler. Opportunities in tech companies, consulting firms, finance, healthcare, e-commerce (Amazon, Flipkart, McKinsey, Goldman Sachs).",
        fees: "₹80,000 - ₹3,50,000 per year in government institutions; ₹2,50,000 - ₹10,00,000 per year in private colleges.",
        syllabus:
          "Semester 1-2: Mathematics, Statistics, Programming (Python/R), Database Concepts, Data Structures. Semester 3-4: Probability Theory, Data Mining, SQL & NoSQL Databases, Machine Learning, Data Visualization. Semester 5-6: Big Data Technologies (Hadoop, Spark), Advanced Machine Learning, Time Series Analysis, Natural Language Processing, Cloud Platforms. Semester 7-8: Deep Learning, Business Analytics, Data Ethics, Electives (Recommendation Systems, Predictive Analytics), Capstone Project.",
      },
      {
        name: "Cybersecurity",
        short: "Keep computers safe.",
        fullDescription:
          "Cybersecurity focuses on protecting computer systems, networks, and data from digital attacks, unauthorized access, and damage. Students learn cryptography, ethical hacking, network security, digital forensics, and security policies. This critical field addresses growing threats in the digital world and prepares professionals to defend against cybercrimes.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60%). Interest in security and problem-solving essential.",
        careerOpportunities:
          "Cybersecurity Analyst, Ethical Hacker/Penetration Tester, Security Consultant, Information Security Manager, Incident Response Analyst, Security Architect, Malware Analyst, Cryptographer, Forensic Analyst, Chief Information Security Officer (CISO). Employers include government agencies, defense, banks, tech companies, consulting firms.",
        fees: "₹60,000 - ₹3,00,000 per year in government colleges; ₹2,00,000 - ₹9,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Programming, Networking Basics, Mathematics, Computer Systems, Digital Electronics. Semester 3-4: Operating Systems, Computer Networks, Cryptography, Database Security, Web Security. Semester 5-6: Ethical Hacking, Network Security, Security Auditing, Digital Forensics, Malware Analysis. Semester 7-8: Cloud Security, IoT Security, Advanced Cryptography, Security Operations, Compliance & Risk Management, Practical Labs, Final Project.",
      },
      {
        name: "Electronics & Communication (ECE)",
        short: "Chips & signals.",
        fullDescription:
          "Electronics & Communication Engineering deals with electronic devices, circuits, communication systems, and signal processing. Students learn analog and digital electronics, microprocessors, VLSI design, wireless communication, and embedded systems. This field forms the backbone of modern telecommunication and consumer electronics industries.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60%). Entrance exams: JEE Main, JEE Advanced, state CETs.",
        careerOpportunities:
          "Electronics Engineer, Communication Engineer, VLSI Design Engineer, Embedded Systems Engineer, Signal Processing Engineer, Telecom Engineer, RF Engineer, Network Planning Engineer, Hardware Design Engineer, IoT Developer. Companies include Qualcomm, Intel, Samsung, Broadcom, Ericsson, Nokia, ISRO, DRDO.",
        fees: "₹40,000 - ₹2,50,000 per year in government colleges; ₹1,50,000 - ₹8,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Basic Electronics, Circuit Theory, Programming. Semester 3-4: Analog Electronics, Digital Electronics, Signals & Systems, Network Analysis, Electromagnetic Theory. Semester 5-6: Microprocessors, Communication Systems, Digital Signal Processing, VLSI Design, Control Systems. Semester 7-8: Wireless Communication, Optical Communication, Embedded Systems, Antenna Theory, Electives (5G, IoT, Satellite Communication), Project Work.",
      },
      {
        name: "Electrical & Electronics (EEE)",
        short: "Power & circuits.",
        fullDescription:
          "Electrical & Electronics Engineering combines electrical power systems with electronics. Students study power generation, transmission, distribution, electrical machines, control systems, and electronic circuits. This versatile branch prepares engineers for both core electrical industries and electronics sectors.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60%). Entrance exams: JEE Main, state CETs.",
        careerOpportunities:
          "Electrical Engineer, Power Systems Engineer, Control Systems Engineer, Automation Engineer, Electrical Design Engineer, Transmission Engineer, Electronics Engineer, Renewable Energy Engineer, Maintenance Engineer. Opportunities in power corporations (NTPC, Power Grid), manufacturing, automation, renewable energy, PSUs, and private companies.",
        fees: "₹35,000 - ₹2,00,000 per year in government colleges; ₹1,20,000 - ₹6,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Basic Electrical Engineering, Circuit Theory, Engineering Graphics. Semester 3-4: Electrical Machines, Power Electronics, Analog & Digital Electronics, Network Theory, Electromagnetic Fields. Semester 5-6: Power Systems, Control Systems, Microprocessors, Electrical Measurements, Power Generation. Semester 7-8: Power Transmission & Distribution, High Voltage Engineering, Renewable Energy, Switchgear & Protection, Electives, Project.",
      },
      {
        name: "Electronics & Instrumentation",
        short: "Sensors & control.",
        fullDescription:
          "Electronics & Instrumentation Engineering focuses on designing and maintaining measurement and control systems. Students learn about sensors, transducers, process control, industrial automation, and analytical instruments. This field is crucial for industries requiring precise measurement and automated control systems.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60%).",
        careerOpportunities:
          "Instrumentation Engineer, Process Control Engineer, Automation Engineer, Quality Control Engineer, Calibration Engineer, Biomedical Instrumentation Engineer, Industrial Automation Specialist, DCS/PLC Programmer. Industries include oil & gas, pharmaceuticals, manufacturing, power plants, research labs, and aerospace.",
        fees: "₹40,000 - ₹2,00,000 per year in government colleges; ₹1,50,000 - ₹7,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Mathematics, Physics, Chemistry, Basic Electronics, Circuit Analysis, Programming. Semester 3-4: Analog & Digital Electronics, Sensors & Transducers, Signals & Systems, Network Analysis, Control Systems. Semester 5-6: Process Control, Industrial Instrumentation, Analytical Instrumentation, Microcontrollers, Digital Signal Processing. Semester 7-8: Biomedical Instrumentation, PLC & SCADA, DCS, Virtual Instrumentation (LabVIEW), Electives, Industrial Training, Project.",
      },
      {
        name: "Mechanical Engineering",
        short: "Machines & engines.",
        fullDescription:
          "Mechanical Engineering is one of the oldest and broadest engineering disciplines, dealing with the design, analysis, manufacturing, and maintenance of mechanical systems. Students learn thermodynamics, fluid mechanics, machine design, manufacturing processes, and CAD/CAM. This field covers everything from tiny sensors to massive power plants.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60%). Entrance exams: JEE Main, JEE Advanced, state CETs.",
        careerOpportunities:
          "Mechanical Engineer, Design Engineer, Manufacturing Engineer, CAD Engineer, Thermal Engineer, Quality Engineer, Product Development Engineer, Maintenance Engineer, Automotive Engineer, HVAC Engineer. Sectors include automotive, aerospace, manufacturing, energy, robotics, PSUs (BHEL, ONGC, Indian Railways), and MNCs.",
        fees: "₹35,000 - ₹2,00,000 per year in government colleges; ₹1,20,000 - ₹6,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Engineering Mechanics, Engineering Graphics, Manufacturing Processes. Semester 3-4: Thermodynamics, Fluid Mechanics, Material Science, Strength of Materials, Kinematics of Machines. Semester 5-6: Machine Design, Heat Transfer, CAD/CAM, Dynamics of Machines, Manufacturing Technology, IC Engines. Semester 7-8: Finite Element Analysis, Refrigeration & Air Conditioning, Automobile Engineering, Industrial Engineering, Electives (Robotics, Mechatronics, CFD), Project Work.",
      },
      {
        name: "Automobile Engineering",
        short: "Cars & EVs.",
        fullDescription:
          "Automobile Engineering is a specialized branch focusing on the design, development, manufacturing, and maintenance of automobiles. Students learn vehicle dynamics, engine design, automotive electronics, electric vehicles, and hybrid systems. With the rise of EVs and autonomous vehicles, this field is experiencing rapid transformation.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60%).",
        careerOpportunities:
          "Automobile Design Engineer, Vehicle Dynamics Engineer, Powertrain Engineer, EV Development Engineer, CAE Engineer, Production Engineer, Quality Assurance Engineer, R&D Engineer, Motorsports Engineer. Companies include Maruti Suzuki, Tata Motors, Mahindra, Hyundai, Ola Electric, Tesla, Bosch, and automotive component manufacturers.",
        fees: "₹50,000 - ₹2,50,000 per year in government colleges; ₹1,50,000 - ₹8,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Engineering Mechanics, Manufacturing Processes, Engineering Drawing. Semester 3-4: Thermodynamics, Fluid Mechanics, Material Science, Machine Design, Automotive Chassis. Semester 5-6: IC Engines, Vehicle Body Engineering, Automotive Electrical & Electronics, Transmission Systems, Alternative Fuels. Semester 7-8: Electric Vehicles, Hybrid Vehicles, Vehicle Dynamics, Automotive Safety, Autonomous Vehicles, Electives, Industrial Project.",
      },
      {
        name: "Mechatronics / Robotics & Automation",
        short: "Robots & control.",
        fullDescription:
          "Mechatronics is an interdisciplinary field combining mechanical engineering, electronics, computer science, and control engineering to create intelligent systems and robots. Students learn robotics, automation, AI, sensors, actuators, and industrial automation. This cutting-edge field is essential for Industry 4.0 and smart manufacturing.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60%). Interest in interdisciplinary learning recommended.",
        careerOpportunities:
          "Robotics Engineer, Automation Engineer, Mechatronics Engineer, Control Systems Engineer, Industrial Automation Specialist, Robot Programmer, IoT Engineer, AI Robotics Developer, Drone Engineer. Industries include manufacturing, automotive, aerospace, healthcare robotics, defense, and research institutions.",
        fees: "₹60,000 - ₹3,00,000 per year in government colleges; ₹2,00,000 - ₹9,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Programming, Engineering Mechanics, Electronics, Engineering Graphics. Semester 3-4: Digital Electronics, Sensors & Actuators, Microcontrollers, Machine Design, Control Systems. Semester 5-6: Robotics, Automation, PLC & SCADA, Hydraulics & Pneumatics, Embedded Systems, Artificial Intelligence. Semester 7-8: Industrial Automation, Mobile Robotics, Computer Vision, Machine Learning for Robotics, IoT, Electives (Drones, Humanoid Robots), Major Project.",
      },
      {
        name: "Civil Engineering",
        short: "Buildings & bridges.",
        fullDescription:
          "Civil Engineering is one of the oldest engineering disciplines, focusing on the design, construction, and maintenance of infrastructure. Students learn structural engineering, geotechnical engineering, transportation, water resources, and environmental engineering. Civil engineers shape the built environment, from skyscrapers to highways to water supply systems.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60%). Entrance exams: JEE Main, state CETs.",
        careerOpportunities:
          "Structural Engineer, Construction Manager, Site Engineer, Transportation Engineer, Water Resources Engineer, Urban Planner, Project Manager, Geotechnical Engineer, Quality Control Engineer. Opportunities in construction companies, government departments (PWD, NHAI), consulting firms, real estate, and infrastructure projects.",
        fees: "₹30,000 - ₹1,80,000 per year in government colleges; ₹1,00,000 - ₹5,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Engineering Mechanics, Engineering Graphics, Surveying. Semester 3-4: Strength of Materials, Structural Analysis, Fluid Mechanics, Geotechnical Engineering, Building Materials. Semester 5-6: Design of Steel Structures, Design of RCC Structures, Transportation Engineering, Water Resources Engineering, Environmental Engineering. Semester 7-8: Foundation Engineering, Construction Management, Estimation & Costing, Earthquake Engineering, Electives (Smart Cities, Sustainable Construction), Project Work.",
      },
      {
        name: "Chemical Engineering",
        short: "Chemicals & plants.",
        fullDescription:
          "Chemical Engineering applies principles of chemistry, physics, mathematics, and economics to efficiently use, produce, and transform chemicals and materials. Students learn process engineering, thermodynamics, reactor design, separation processes, and process control. Chemical engineers work in diverse industries from petrochemicals to pharmaceuticals to food processing.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60%). Strong chemistry background helpful.",
        careerOpportunities:
          "Process Engineer, Chemical Plant Manager, Process Safety Engineer, R&D Engineer, Production Engineer, Quality Control Manager, Environmental Engineer, Petrochemical Engineer, Pharmaceutical Engineer. Industries include oil & gas (Reliance, ONGC), chemicals (BASF, Dow), pharmaceuticals, fertilizers, food processing, and consulting.",
        fees: "₹40,000 - ₹2,20,000 per year in government colleges; ₹1,50,000 - ₹7,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Chemical Process Calculations, Engineering Graphics, Programming. Semester 3-4: Thermodynamics, Fluid Mechanics, Heat Transfer, Mass Transfer, Chemical Reaction Engineering. Semester 5-6: Process Equipment Design, Chemical Process Control, Separation Processes, Industrial Chemistry, Material & Energy Balance. Semester 7-8: Process Plant Design, Petroleum Refining, Polymer Engineering, Biochemical Engineering, Process Safety, Electives, Plant Training, Project.",
      },
      {
        name: "Biomedical Engineering",
        short: "Tech for health.",
        fullDescription:
          "Biomedical Engineering combines engineering principles with medical and biological sciences to design healthcare technologies and devices. Students learn medical instrumentation, biomaterials, biomechanics, medical imaging, and tissue engineering. This field bridges the gap between engineering and healthcare, creating innovations that save and improve lives.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, Mathematics/Biology (minimum 50-60%). Interest in healthcare and biology essential.",
        careerOpportunities:
          "Biomedical Engineer, Medical Device Designer, Clinical Engineer, Research Scientist, Biomaterials Engineer, Rehabilitation Engineer, Medical Imaging Specialist, Regulatory Affairs Specialist, Quality Assurance Engineer. Employers include hospitals, medical device companies (Medtronic, Siemens Healthineers), research institutions, pharmaceutical companies, and regulatory bodies.",
        fees: "₹60,000 - ₹3,00,000 per year in government colleges; ₹2,00,000 - ₹10,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Biology, Human Anatomy & Physiology, Programming. Semester 3-4: Electronics, Biomechanics, Biomaterials, Medical Instrumentation, Cell Biology, Signal Processing. Semester 5-6: Medical Imaging, Biosensors, Artificial Organs, Rehabilitation Engineering, Tissue Engineering, Hospital Management. Semester 7-8: Biomedical Signal Processing, Nanomedicine, Medical Device Design, Regulatory Affairs, Clinical Engineering, Electives (Neural Engineering, 3D Bioprinting), Project.",
      },
      {
        name: "Biotechnology Engineering",
        short: "Tech + biology.",
        fullDescription:
          "Biotechnology Engineering applies engineering principles to biological systems and processes. Students learn genetic engineering, bioprocess engineering, microbiology, biochemistry, and bioinformatics. This interdisciplinary field contributes to healthcare, agriculture, environmental protection, and industrial processes through innovations like vaccines, biofuels, and GMOs.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics/Biology (minimum 50-60%). Biology background advantageous.",
        careerOpportunities:
          "Biotechnology Researcher, Bioprocess Engineer, Quality Control Analyst, Bioinformatics Scientist, Genetic Engineer, Pharmaceutical Researcher, Environmental Biotechnologist, Product Development Scientist, Clinical Research Associate. Sectors include pharma, agriculture (seed companies), biofuels, research labs, and biotech startups.",
        fees: "₹50,000 - ₹2,50,000 per year in government colleges; ₹1,80,000 - ₹8,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Mathematics, Physics, Chemistry, Biology, Microbiology, Biochemistry, Programming. Semester 3-4: Cell Biology, Genetics, Molecular Biology, Biostatistics, Thermodynamics, Bioprocess Engineering. Semester 5-6: Genetic Engineering, Immunology, Enzyme Technology, Fermentation Technology, Bioinformatics, Environmental Biotechnology. Semester 7-8: Industrial Biotechnology, Pharmaceutical Biotechnology, Plant/Animal Biotechnology, Bioreactor Design, Regulatory Affairs, Electives (Synthetic Biology, Nanobiotechnology), Research Project.",
      },
      {
        name: "Aerospace/Aeronautical Engineering",
        short: "Planes & space tech.",
        fullDescription:
          "Aerospace/Aeronautical Engineering focuses on the design, development, testing, and production of aircraft, spacecraft, satellites, and missiles. Students learn aerodynamics, aircraft structures, propulsion, flight mechanics, and space systems. This prestigious field demands precision and innovation for applications in aviation, space exploration, and defense.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 60% aggregate). High academic performance expected. Entrance exams: JEE Main, JEE Advanced, IIST entrance exam.",
        careerOpportunities:
          "Aerospace Engineer, Aircraft Design Engineer, Propulsion Engineer, Flight Test Engineer, Space Systems Engineer, Avionics Engineer, Aerodynamicist, Maintenance Engineer, R&D Scientist. Organizations include ISRO, DRDO, HAL, NAL, Boeing, Airbus, private space companies, and defense establishments.",
        fees: "₹50,000 - ₹2,50,000 per year in government institutions; ₹2,00,000 - ₹10,00,000 per year in private colleges.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Engineering Mechanics, Engineering Graphics, Introduction to Aerospace. Semester 3-4: Thermodynamics, Fluid Mechanics, Material Science, Aircraft Structures, Aerodynamics I. Semester 5-6: Aerodynamics II, Propulsion, Flight Mechanics, Aircraft Systems, Avionics, Computational Fluid Dynamics. Semester 7-8: Space Mechanics, Rocket Propulsion, Composite Materials, Aircraft Design, Electives (UAVs, Satellite Technology, Hypersonics), Design Project.",
      },
      {
        name: "Marine Engineering",
        short: "Ship machines.",
        fullDescription:
          "Marine Engineering deals with the design, construction, installation, operation, and maintenance of propulsion and auxiliary machinery on ships, offshore platforms, and submarines. Students learn marine engines, ship systems, naval architecture basics, and marine electrical systems. Marine engineers keep vessels running safely and efficiently at sea.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 60%). Must pass medical fitness test. Age limit typically 17-25 years.",
        careerOpportunities:
          "Marine Engineer (sailing on ships), Port Engineer, Technical Superintendent, Ship Surveyor, Naval Architect (marine systems), Offshore Engineer, Maritime Consultant, Class Society Surveyor, Marine Equipment Manufacturer. Employers include shipping companies, offshore oil & gas, Indian Navy, port authorities, classification societies (DNV, Lloyd's Register), and shipyards.",
        fees: "₹1,00,000 - ₹4,00,000 per year in government maritime universities; ₹2,50,000 - ₹10,00,000 per year in private institutions. Additional costs for sea training.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Engineering Mechanics, Naval Architecture Basics, Workshop Practice. Semester 3-4: Thermodynamics, Fluid Mechanics, Marine Diesel Engines, Marine Auxiliary Machinery, Material Science, Marine Electrical Systems. Semester 5-6: Marine Propulsion, Marine Boilers, Refrigeration & Air Conditioning, Marine Control Systems, Ship Stability. Semester 7-8: Marine Safety, Marine Pollution, Ship Management, Automation, Electives, Sea Training (onboard ship experience), Project. Note: Includes mandatory sea training for certification.",
      },
      {
        name: "Naval Architecture & Ocean Engineering",
        short: "Design ships.",
        fullDescription:
          "Naval Architecture & Ocean Engineering focuses on the design, construction, and operation of ships, boats, and offshore structures. Students learn ship design, hydrostatics, stability, resistance and propulsion, offshore structures, and structural analysis. Naval architects ensure vessels are safe, efficient, and seaworthy.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60%). Strong mathematical and mechanical aptitude beneficial.",
        careerOpportunities:
          "Naval Architect, Ship Designer, Offshore Structure Designer, Ship Surveyor, Marine Consultant, Technical Manager (shipping), Classification Society Engineer, Research Engineer, Yacht Designer, Port & Harbor Engineer. Organizations include shipbuilding yards (MDL, CSL, GSL), classification societies, offshore companies, consultancies, and defense (Indian Navy, Coast Guard).",
        fees: "₹50,000 - ₹2,50,000 per year in government institutions; ₹2,00,000 - ₹8,00,000 per year in private colleges.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Engineering Mechanics, Engineering Drawing, Ship Geometry. Semester 3-4: Fluid Mechanics, Strength of Materials, Naval Architecture I (Hydrostatics & Stability), Ship Structures I, Marine Materials. Semester 5-6: Naval Architecture II (Resistance & Propulsion), Ship Structures II, Marine Hydrodynamics, Ship Design I, Offshore Engineering. Semester 7-8: Ship Design II, Finite Element Analysis, Ship Production Technology, Marine Safety, Electives (Submarine Design, Yacht Design), Design Project, Shipyard Training.",
      },
      {
        name: "Petroleum Engineering",
        short: "Oil & gas.",
        fullDescription:
          "Petroleum Engineering focuses on exploring, extracting, and producing oil and gas from underground reservoirs. Students learn reservoir engineering, drilling engineering, production engineering, well logging, and enhanced oil recovery. This specialized field is vital for the energy sector, though increasingly incorporating renewable energy technologies.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60%).",
        careerOpportunities:
          "Petroleum Engineer, Reservoir Engineer, Drilling Engineer, Production Engineer, Well Completion Engineer, Petroleum Geologist (with additional qualifications), Refinery Engineer, Oil & Gas Consultant, Project Engineer. Major employers include ONGC, Oil India, Reliance, Cairn, Schlumberger, Halliburton, Baker Hughes, and international oil companies.",
        fees: "₹50,000 - ₹3,00,000 per year in government colleges; ₹2,00,000 - ₹9,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Geology, Engineering Mechanics, Engineering Drawing. Semester 3-4: Thermodynamics, Fluid Mechanics, Petroleum Geology, Rock Mechanics, Well Logging. Semester 5-6: Drilling Engineering, Reservoir Engineering, Production Engineering, Petrophysics, Natural Gas Engineering. Semester 7-8: Enhanced Oil Recovery, Offshore Engineering, Petroleum Economics, Well Testing, Process Safety, Electives (Unconventional Resources, Carbon Capture), Field Training, Project.",
      },
      {
        name: "Mining Engineering",
        short: "Mines & minerals.",
        fullDescription:
          "Mining Engineering deals with the extraction of minerals and metals from the earth. Students learn mine planning, mineral processing, rock mechanics, mine surveying, and mine safety. This field is essential for extracting resources needed for construction, manufacturing, and energy while focusing increasingly on sustainable practices.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60%). Physical fitness required for fieldwork.",
        careerOpportunities:
          "Mining Engineer, Mine Planning Engineer, Mine Surveyor, Mineral Processing Engineer, Mine Safety Engineer, Mine Manager, Quarry Manager, Environmental Manager (mining), Mine Geologist, Consultant. Employers include Coal India, NMDC, Hindalco, Vedanta, Tata Steel, state mining corporations, and private mining companies.",
        fees: "₹30,000 - ₹2,00,000 per year in government colleges; ₹1,20,000 - ₹6,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Engineering Mechanics, Geology, Mining Geology, Engineering Drawing. Semester 3-4: Strength of Materials, Fluid Mechanics, Surveying, Rock Mechanics, Mining Methods (Surface), Mineral Processing. Semester 5-6: Mining Methods (Underground), Mine Planning & Design, Mine Ventilation, Explosives Engineering, Mine Machinery, Mine Surveying. Semester 7-8: Mine Environment & Safety, Ground Control, Mine Management, Mining Economics, Electives (Mine Automation, Environmental Impact Assessment, Sustainable Mining), Field Training, Project Work.",
      },
      {
        name: "Metallurgical & Materials Engineering",
        short: "Metals & materials.",
        fullDescription:
          "Metallurgical & Materials Engineering focuses on the extraction, processing, and development of metals and advanced materials. Students learn physical metallurgy, extractive metallurgy, materials characterization, corrosion engineering, and nanomaterials. This field develops new materials for aerospace, automotive, electronics, and biomedical applications.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60%). Strong chemistry and physics foundation helpful.",
        careerOpportunities:
          "Metallurgical Engineer, Materials Scientist, Process Engineer, Quality Control Engineer, R&D Engineer, Corrosion Engineer, Foundry Engineer, Materials Consultant, Failure Analysis Engineer, Research Scientist. Industries include steel (SAIL, Tata Steel, JSW), aluminum (Hindalco), automotive, aerospace, research labs (CSIR, BARC), and manufacturing.",
        fees: "₹35,000 - ₹2,00,000 per year in government colleges; ₹1,50,000 - ₹7,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Material Science, Thermodynamics, Engineering Graphics. Semester 3-4: Physical Metallurgy, Mechanical Metallurgy, Extractive Metallurgy (Iron & Steel), Transport Phenomena, Phase Transformations. Semester 5-6: Metal Forming, Metal Joining, Heat Treatment, Extractive Metallurgy (Non-ferrous), Materials Characterization, Corrosion Engineering. Semester 7-8: Composite Materials, Nanomaterials, Powder Metallurgy, Ceramic Materials, Biomaterials, Electives (Smart Materials, Computational Materials Science), Industrial Training, Project.",
      },
      {
        name: "Production/Manufacturing Engineering",
        short: "Factories & making.",
        fullDescription:
          "Production/Manufacturing Engineering focuses on designing, operating, and improving manufacturing systems and processes. Students learn manufacturing processes, production planning, quality control, automation, and industrial management. This field ensures efficient production of goods from consumer products to industrial machinery.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60%).",
        careerOpportunities:
          "Production Engineer, Manufacturing Engineer, Production Manager, Quality Engineer, Process Engineer, Plant Manager, Operations Manager, Industrial Engineer, Automation Engineer, Maintenance Engineer. Opportunities in automotive, electronics, FMCG, heavy engineering, machine tools, and manufacturing industries.",
        fees: "₹35,000 - ₹2,00,000 per year in government colleges; ₹1,20,000 - ₹6,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Engineering Mechanics, Manufacturing Processes, Engineering Drawing. Semester 3-4: Strength of Materials, Thermodynamics, Material Science, Metal Cutting Theory, Machine Tools, Metrology. Semester 5-6: Production Planning & Control, CAD/CAM, CNC Technology, Quality Control, Tool Engineering, Industrial Robotics. Semester 7-8: Automation, Lean Manufacturing, Supply Chain Management, Maintenance Engineering, Electives (Additive Manufacturing, Smart Manufacturing), Industrial Training, Project.",
      },
      {
        name: "Industrial Engineering",
        short: "Improve systems.",
        fullDescription:
          "Industrial Engineering focuses on optimizing complex processes, systems, and organizations. Students learn operations research, work study, ergonomics, supply chain management, and quality management. Industrial engineers improve productivity, efficiency, and quality in manufacturing, service, and logistics sectors.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60%). Good analytical and problem-solving skills essential.",
        careerOpportunities:
          "Industrial Engineer, Operations Manager, Process Improvement Specialist, Supply Chain Manager, Quality Manager, Production Planner, Logistics Manager, Management Consultant, Six Sigma Consultant, Systems Analyst. Industries include manufacturing, logistics, consulting (McKinsey, BCG), e-commerce, healthcare, and service sectors.",
        fees: "₹40,000 - ₹2,20,000 per year in government colleges; ₹1,50,000 - ₹7,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Engineering Mechanics, Manufacturing Processes, Programming. Semester 3-4: Probability & Statistics, Thermodynamics, Material Science, Work Study, Production Planning, Engineering Economics. Semester 5-6: Operations Research, Facility Planning, Quality Control, Supply Chain Management, Human Factors Engineering, Industrial Safety. Semester 7-8: Lean Manufacturing, Six Sigma, Project Management, Simulation & Modeling, Electives (Data Analytics, Logistics Management), Industrial Training, Capstone Project.",
      },
      {
        name: "Environmental Engineering",
        short: "Clean air & water.",
        fullDescription:
          "Environmental Engineering applies scientific and engineering principles to protect and improve the environment. Students learn water and wastewater treatment, air pollution control, solid waste management, environmental impact assessment, and sustainable technologies. This field addresses critical environmental challenges like pollution, climate change, and resource conservation.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60%). Interest in environmental issues essential.",
        careerOpportunities:
          "Environmental Engineer, Water Treatment Engineer, Air Quality Engineer, Waste Management Engineer, Environmental Consultant, EIA Specialist, Pollution Control Officer, Sustainability Manager, Environmental Health & Safety Engineer. Employers include pollution control boards, environmental consulting firms, industries (compliance roles), NGOs, municipalities, and research institutions.",
        fees: "₹35,000 - ₹2,00,000 per year in government colleges; ₹1,20,000 - ₹6,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Environmental Science, Engineering Mechanics, Engineering Graphics. Semester 3-4: Fluid Mechanics, Microbiology, Environmental Chemistry, Hydrology, Surveying, Thermodynamics. Semester 5-6: Water Supply Engineering, Wastewater Engineering, Air Pollution Control, Solid Waste Management, Environmental Impact Assessment. Semester 7-8: Hazardous Waste Management, Industrial Waste Treatment, Remote Sensing & GIS, Environmental Laws, Electives (Climate Change, Renewable Energy), Field Training, Project.",
      },
      {
        name: "Textile Engineering",
        short: "Fabrics & fibres.",
        fullDescription:
          "Textile Engineering deals with the design, production, and distribution of textile materials, including fibers, yarns, fabrics, and finished products. Students learn fiber science, spinning, weaving, knitting, textile chemistry, and garment technology. This field combines traditional craftsmanship with modern technology for fashion, technical textiles, and industrial applications.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60%).",
        careerOpportunities:
          "Textile Engineer, Production Manager, Quality Control Manager, Textile Designer, Dyeing & Printing Technologist, Merchandiser, Technical Textiles Engineer, R&D Engineer, Textile Consultant, Fashion Technologist. Industries include textile mills, garment manufacturing, technical textiles, research institutions, and export houses. Major hubs: Gujarat, Tamil Nadu, Maharashtra, Punjab.",
        fees: "₹30,000 - ₹1,80,000 per year in government colleges; ₹1,00,000 - ₹5,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Textile Fibers, Basic Textile Processes, Engineering Drawing. Semester 3-4: Yarn Manufacturing I & II, Fabric Manufacturing I (Weaving), Textile Chemistry, Textile Testing, Mechanics. Semester 5-6: Fabric Manufacturing II (Knitting), Fabric Structure & Analysis, Dyeing & Printing, Chemical Processing, Apparel Manufacturing. Semester 7-8: Technical Textiles, Textile Quality Management, Textile Management, Fashion Technology, Electives (Smart Textiles, Nonwovens, Sustainable Textiles), Industrial Training, Project.",
      },
      {
        name: "Ceramic Engineering",
        short: "Glass & ceramics.",
        fullDescription:
          "Ceramic Engineering focuses on the science and technology of inorganic, non-metallic materials processed at high temperatures. Students learn about traditional ceramics (pottery, tiles, sanitaryware), advanced ceramics (electronics, aerospace), glass technology, and refractories. This specialized field produces materials for diverse applications from dinner plates to spacecraft components.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60%).",
        careerOpportunities:
          "Ceramic Engineer, Glass Technologist, Refractories Engineer, Quality Control Engineer, Production Manager, R&D Engineer, Ceramic Designer, Materials Scientist (ceramics), Technical Service Engineer. Industries include ceramic tiles, sanitaryware, glass, refractories, electronics (substrates, capacitors), aerospace, cement, and research labs.",
        fees: "₹30,000 - ₹1,80,000 per year in government colleges; ₹1,20,000 - ₹5,50,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Ceramic Materials, Thermodynamics, Engineering Graphics. Semester 3-4: Ceramic Phase Equilibria, Ceramic Processing, Drying & Firing, Raw Materials, Physical Chemistry, Transport Phenomena. Semester 5-6: Whitewares Technology, Glass Technology, Refractories, Glazes & Enamels, Kiln Technology, Materials Characterization. Semester 7-8: Advanced Ceramics, Ceramic Composites, Electronic Ceramics, Bioceramics, Electives (Nanomaterials, Computational Ceramics), Industrial Training, Project Work.",
      },
      {
        name: "Food Technology (B.Tech)",
        short: "Safe & tasty food.",
        fullDescription:
          "Food Technology applies engineering and scientific principles to food processing, preservation, packaging, and distribution. Students learn food chemistry, microbiology, food processing operations, quality assurance, and food safety. This field ensures safe, nutritious, and palatable food products reach consumers while minimizing waste and maximizing shelf life.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics/Biology (minimum 50-60%). Biology knowledge advantageous.",
        careerOpportunities:
          "Food Technologist, Production Manager (food industry), Quality Assurance Manager, Food Safety Officer, R&D Scientist, Product Development Manager, Food Analyst, Nutritionist (with additional certification), FSSAI Inspector, Food Consultant. Industries include food processing, FMCG, beverages, dairy, bakery, confectionery, restaurants, and regulatory bodies.",
        fees: "₹40,000 - ₹2,00,000 per year in government colleges; ₹1,50,000 - ₹6,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Biochemistry, Food Microbiology, Engineering Graphics. Semester 3-4: Food Chemistry, Unit Operations in Food Processing, Heat & Mass Transfer, Food Analysis, Nutrition, Food Engineering. Semester 5-6: Food Preservation, Food Packaging, Dairy Technology, Fruit & Vegetable Technology, Cereals & Bakery Technology, Quality Control. Semester 7-8: Food Safety & Standards, Food Product Development, Meat & Fish Technology, Food Plant Design, Electives (Functional Foods, Nutraceuticals), Industrial Training, Project.",
      },
      {
        name: "Agricultural Engineering",
        short: "Farming machines.",
        fullDescription:
          "Agricultural Engineering applies engineering principles to agriculture, focusing on farm mechanization, irrigation, soil and water conservation, and post-harvest technology. Students learn about tractors and farm equipment, precision agriculture, renewable energy in agriculture, and food processing. This field modernizes farming to increase productivity and sustainability.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60%). Interest in agriculture and rural development beneficial.",
        careerOpportunities:
          "Agricultural Engineer, Farm Machinery Designer, Irrigation Engineer, Food Processing Engineer, Agricultural Consultant, Sales Engineer (farm equipment), Soil Conservation Engineer, Post-Harvest Engineer, Precision Agriculture Specialist. Opportunities in agricultural universities, farm equipment manufacturers (John Deere, Mahindra), government agriculture departments, NGOs, and agribusiness companies.",
        fees: "₹25,000 - ₹1,50,000 per year in government agricultural universities; ₹1,00,000 - ₹4,50,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Engineering Mechanics, Agricultural Engineering Basics, Engineering Drawing. Semester 3-4: Fluid Mechanics, Strength of Materials, Soil Mechanics, Farm Machinery I (Tillage & Sowing), Surveying, Thermodynamics. Semester 5-6: Farm Machinery II (Harvesting & Threshing), Irrigation Engineering, Soil & Water Conservation, Farm Power, Agricultural Structures, Renewable Energy. Semester 7-8: Post-Harvest Technology, Food Process Engineering, Precision Agriculture, Agricultural Waste Management, Electives (Greenhouse Technology, Agri-Robotics), Field Training, Project.",
      },
      {
        name: "Instrumentation & Control",
        short: "Measure & control.",
        fullDescription:
          "Instrumentation & Control Engineering focuses on designing and maintaining systems that measure and control physical quantities and processes. Students learn about sensors, control systems, process instrumentation, automation, and data acquisition systems. This field is vital for industries requiring precision measurement and automated operations.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60%).",
        careerOpportunities:
          "Instrumentation Engineer, Control Systems Engineer, Automation Engineer, Process Control Engineer, Instrument Design Engineer, Calibration Engineer, DCS/SCADA Engineer, Test & Measurement Engineer, IoT Engineer. Industries include oil & gas, petrochemicals, power plants, pharmaceuticals, manufacturing, aerospace, and research laboratories.",
        fees: "₹40,000 - ₹2,20,000 per year in government colleges; ₹1,50,000 - ₹7,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Basic Electronics, Circuit Theory, Programming. Semester 3-4: Analog Electronics, Digital Electronics, Signals & Systems, Sensors & Transducers, Network Analysis, Control Systems I. Semester 5-6: Control Systems II, Process Control, Microprocessors & Microcontrollers, Industrial Instrumentation, Digital Signal Processing, Data Acquisition Systems. Semester 7-8: Process Control & Automation, PLC & SCADA, DCS, Virtual Instrumentation, Biomedical Instrumentation, Electives (IoT, Advanced Control Systems), Industrial Training, Project.",
      },
      {
        name: "Electronics & Telecommunication",
        short: "Networks & comms.",
        fullDescription:
          "Electronics & Telecommunication Engineering combines electronics with communication technologies. Students learn about wireless communication, optical fiber communication, mobile networks, satellite communication, and digital signal processing. This field enables modern communication infrastructure from 5G networks to satellite systems.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60%). Entrance exams: JEE Main, state CETs.",
        careerOpportunities:
          "Telecommunication Engineer, Network Engineer, RF Engineer, Wireless Communication Engineer, Telecom Equipment Designer, Network Planning Engineer, Satellite Communication Engineer, 5G/6G Engineer, Telecom Consultant, Field Engineer. Companies include Airtel, Jio, VI, Nokia, Ericsson, Huawei, Qualcomm, and telecom infrastructure providers.",
        fees: "₹40,000 - ₹2,50,000 per year in government colleges; ₹1,50,000 - ₹8,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Engineering Mathematics, Physics, Chemistry, Basic Electronics, Circuit Analysis, Programming. Semester 3-4: Analog Electronics, Digital Electronics, Signals & Systems, Electromagnetic Theory, Network Analysis. Semester 5-6: Communication Systems, Digital Communication, Microprocessors, Optical Fiber Communication, Microwave Engineering, Antenna Theory. Semester 7-8: Wireless Communication, Mobile Communication (4G/5G), Satellite Communication, Digital Signal Processing, Computer Networks, Electives (IoT, Cognitive Radio), Project Work.",
      },
      {
        name: "B.Arch (Architecture)",
        short: "Design buildings.",
        fullDescription:
          "Bachelor of Architecture is a professional degree focusing on the art and science of designing buildings and spaces. Students learn architectural design, building construction, urban planning, architectural history, and sustainable design. Architects create functional, aesthetic, and sustainable built environments that shape how people live, work, and interact.",
        duration: "5 years (10 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics OR 10+2 with Mathematics and 50% aggregate. Must qualify NATA (National Aptitude Test in Architecture) or JEE Main Paper 2. Drawing aptitude essential.",
        careerOpportunities:
          "Architect (after Council of Architecture registration), Architectural Designer, Interior Designer, Urban Planner, Landscape Architect, Conservation Architect, Project Manager, Architectural Consultant, 3D Visualization Artist, Green Building Consultant. Employment in architectural firms, construction companies, real estate, government (PWD, urban development), and self-practice after experience.",
        fees: "₹50,000 - ₹2,50,000 per year in government colleges; ₹2,00,000 - ₹10,00,000 per year in private institutions.",
        syllabus:
          "Year 1: Architectural Design I, Building Construction I, Architectural Graphics, History of Architecture I, Climate & Sustainability, Structures I. Year 2: Architectural Design II & III, Building Construction II, Services I (Plumbing, Drainage), Structures II, History of Architecture II, Site Planning. Year 3: Architectural Design IV & V, Building Construction III, Services II (Electrical, HVAC), Structures III, Specifications & Contracts, Computer Applications (CAD, BIM). Year 4: Architectural Design VI & VII, Advanced Construction, Urban Design, Landscape Architecture, Sustainable Architecture, Professional Practice. Year 5: Architectural Design VIII (Thesis Project), Urban Planning, Conservation, Portfolio Development, Internship (mandatory 6 months+ with registered architect).",
      },
      {
        name: "B.Plan (Planning)",
        short: "Plan smart cities.",
        fullDescription:
          "Bachelor of Planning focuses on urban and regional planning, land use planning, infrastructure development, and sustainable city design. Students learn spatial planning, transportation planning, environmental planning, GIS, and urban governance. Planners shape cities and regions to be livable, sustainable, and equitable for growing populations.",
        duration: "4 years (8 semesters)",
        eligibility:
          "10+2 with Mathematics and 50% aggregate. Some institutes admit through JEE Main Paper 2 or university entrance exams. Interest in geography, social sciences, and sustainable development helpful.",
        careerOpportunities:
          "Urban Planner, Regional Planner, Transportation Planner, Environmental Planner, GIS Analyst, Infrastructure Planner, Smart City Consultant, Policy Analyst, Housing Planner, Development Control Officer. Opportunities in government (urban development authorities, municipalities), consulting firms, real estate, NGOs, and international organizations (World Bank, UN-Habitat).",
        fees: "₹40,000 - ₹2,00,000 per year in government institutions; ₹1,50,000 - ₹7,00,000 per year in private colleges.",
        syllabus:
          "Semester 1-2: Introduction to Planning, Geography, Sociology, Economics, Engineering Drawing, Planning Graphics, Computer Applications. Semester 3-4: Urban Planning Theory, Regional Planning, Housing & Community Planning, Transportation Planning, Infrastructure Planning, Surveying, Statistics. Semester 5-6: Land Use Planning, Environmental Planning, Urban Design, GIS & Remote Sensing, Urban Governance, Planning Law, Urban Economics. Semester 7-8: Smart Cities, Sustainable Development, Disaster Management, Project Planning & Management, Electives (Rural Planning, Heritage Conservation), Studio Projects, Dissertation, Internship.",
      },
    ],
  },
  {
    key: "pure",
    label: "Pure & Natural Sciences (B.Sc/B.Sc Hons.)",
    icon: <Atom className="w-5 h-5 text-sky-600" />,
    degrees: [
      {
        name: "B.Sc Physics",
        short: "Matter, motion, energy.",
        fullDescription:
          "B.Sc Physics is a fundamental science degree that explores the laws governing matter, energy, space, and time. Students study mechanics, thermodynamics, electromagnetism, quantum mechanics, and relativity. Physics provides the foundation for understanding the universe from subatomic particles to galaxies, and forms the basis for many technological innovations.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics as core subjects (minimum 50-60% aggregate). Some universities require entrance exams or merit-based admission.",
        careerOpportunities:
          "Research Scientist (after M.Sc/Ph.D.), Teaching (schools/colleges), Technical Writer, Data Analyst, Scientific Officer in ISRO/DRDO/BARC, Quality Control Analyst, Meteorologist, Medical Physics, Patent Analyst, Science Journalism. Further studies: M.Sc Physics, M.Tech (Photonics, Nanotechnology), MBA, competitive exams (UPSC, banking).",
        fees: "₹5,000 - ₹50,000 per year in government colleges; ₹30,000 - ₹2,00,000 per year in private institutions; ₹50,000 - ₹3,00,000 per year in premier universities.",
        syllabus:
          "Semester 1-2: Mathematical Physics, Mechanics, Waves & Oscillations, Electricity & Magnetism, Thermal Physics, Basic Electronics, Practicals. Semester 3-4: Optics, Quantum Mechanics I, Statistical Physics, Solid State Physics, Analog & Digital Electronics, Computational Physics. Semester 5-6: Quantum Mechanics II, Atomic & Molecular Physics, Nuclear Physics, Particle Physics, Electives (Astrophysics, Plasma Physics, Laser Physics, Nanophysics), Advanced Practicals, Project Work.",
      },
      {
        name: "B.Sc Chemistry",
        short: "Atoms & reactions.",
        fullDescription:
          "B.Sc Chemistry explores the composition, structure, properties, and reactions of matter. Students study organic, inorganic, physical, and analytical chemistry, learning how atoms and molecules interact and transform. Chemistry is the central science, connecting physics with biology and enabling innovations in medicine, materials, energy, and environmental protection.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics/Biology (minimum 50-60%). Chemistry as mandatory subject.",
        careerOpportunities:
          "Analytical Chemist, Quality Control Chemist, Research Scientist, Laboratory Technician, Chemical Analyst, Pharmaceutical Chemist, Environmental Chemist, Forensic Scientist, Food Technologist, Teacher/Lecturer. Industries: pharmaceuticals, petrochemicals, cosmetics, food processing, environmental agencies. Further studies: M.Sc Chemistry, B.Ed, MBA, competitive exams.",
        fees: "₹5,000 - ₹40,000 per year in government colleges; ₹30,000 - ₹1,80,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Inorganic Chemistry I (Atomic Structure, Bonding, Periodic Table), Organic Chemistry I (Basics, Hydrocarbons, Stereochemistry), Physical Chemistry I (Thermodynamics, Chemical Kinetics), Practicals. Semester 3-4: Inorganic Chemistry II (Coordination Compounds, Organometallics), Organic Chemistry II (Functional Groups, Spectroscopy), Physical Chemistry II (Electrochemistry, Phase Equilibrium), Analytical Chemistry. Semester 5-6: Advanced Organic Chemistry, Medicinal Chemistry, Polymer Chemistry, Green Chemistry, Electives (Industrial Chemistry, Computational Chemistry), Research Methodology, Project.",
      },
      {
        name: "B.Sc Mathematics",
        short: "Numbers & logic.",
        fullDescription:
          "B.Sc Mathematics is a rigorous program studying abstract concepts, logical reasoning, and problem-solving through numbers, shapes, and patterns. Students explore calculus, algebra, geometry, differential equations, and mathematical modeling. Mathematics is the language of science and technology, essential for fields ranging from physics to finance to computer science.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Mathematics as a core subject (minimum 50-60%). Strong analytical and logical thinking skills essential.",
        careerOpportunities:
          "Data Analyst, Actuarial Analyst, Statistical Analyst, Operations Research Analyst, Mathematics Teacher/Professor, Quantitative Analyst (finance), Research Mathematician, Software Developer, Cryptographer, Business Analyst. Sectors: IT, banking, insurance, consulting, education, research. Further studies: M.Sc Mathematics, M.C.A, M.B.A, competitive exams (UPSC, banking, SSC).",
        fees: "₹5,000 - ₹40,000 per year in government colleges; ₹25,000 - ₹1,50,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Calculus, Algebra (Linear Algebra, Matrices), Analytical Geometry, Differential Equations I, Discrete Mathematics, Programming (C/Python). Semester 3-4: Real Analysis, Abstract Algebra (Groups, Rings, Fields), Differential Equations II, Vector Calculus, Numerical Methods, Probability & Statistics. Semester 5-6: Complex Analysis, Topology, Mathematical Modeling, Optimization Techniques, Electives (Number Theory, Graph Theory, Cryptography, Actuarial Mathematics), Project/Dissertation.",
      },
      {
        name: "B.Sc Statistics",
        short: "Data & chances.",
        fullDescription:
          "B.Sc Statistics focuses on collecting, analyzing, interpreting, and presenting data. Students learn probability theory, statistical inference, regression analysis, experimental design, and data visualization. In our data-driven world, statisticians are essential for making informed decisions in business, healthcare, government, and research.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Mathematics as a core subject (minimum 50-60%). Some universities prefer Physics/Chemistry/Statistics alongside Mathematics.",
        careerOpportunities:
          "Statistician, Data Analyst, Biostatistician, Market Research Analyst, Quality Analyst, Risk Analyst, Actuarial Analyst, Survey Statistician, Data Scientist (with additional skills), Business Intelligence Analyst, Government Statistician. Sectors: IT, banking, insurance, pharmaceuticals, market research, government agencies (Census, Statistics Departments). Further studies: M.Sc Statistics, Data Science, Actuarial Science.",
        fees: "₹6,000 - ₹45,000 per year in government colleges; ₹30,000 - ₹1,80,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Descriptive Statistics, Probability Theory, Mathematical Statistics, Linear Algebra, Calculus, Programming (R/Python basics). Semester 3-4: Probability Distributions, Statistical Inference, Regression Analysis, Design of Experiments, Sampling Theory, Database Management. Semester 5-6: Multivariate Analysis, Time Series Analysis, Operations Research, Econometrics, Data Mining & Machine Learning Basics, Electives (Biostatistics, Actuarial Statistics, Quality Control), Statistical Software (R, SAS, SPSS), Project Work.",
      },
      {
        name: "B.Sc Computer Science",
        short: "Programming basics.",
        fullDescription:
          "B.Sc Computer Science is a theoretical and practical program covering computing principles, programming, algorithms, and software development. Students learn programming languages, data structures, databases, computer networks, and software engineering. This degree provides a solid foundation for careers in the rapidly evolving technology sector.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Mathematics as a core subject (minimum 50-60%). Some universities prefer Computer Science/IP in 10+2. Logical thinking and problem-solving skills important.",
        careerOpportunities:
          "Software Developer, Web Developer, Application Developer, Database Administrator, System Analyst, Technical Support Engineer, Software Tester, Network Administrator, IT Consultant, Junior Data Analyst. Companies: TCS, Infosys, Wipro, Cognizant, startups, and IT services. Further studies: M.Sc Computer Science, M.C.A, M.Tech, specialized certifications (Cloud, Cybersecurity, Data Science).",
        fees: "₹8,000 - ₹60,000 per year in government colleges; ₹40,000 - ₹2,50,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Programming Fundamentals (C/C++), Digital Electronics, Discrete Mathematics, Computer Organization, Data Structures, Mathematics. Semester 3-4: Object-Oriented Programming (Java/Python), Database Management Systems, Operating Systems, Computer Networks, Algorithm Design & Analysis, Web Technologies. Semester 5-6: Software Engineering, Compiler Design, Theory of Computation, Computer Graphics, Electives (Machine Learning, Cloud Computing, Cybersecurity, Mobile Computing), Mini Project, Major Project/Internship.",
      },
      {
        name: "B.Sc Electronics",
        short: "Circuits & devices.",
        fullDescription:
          "B.Sc Electronics focuses on electronic devices, circuits, and systems. Students study analog and digital electronics, microprocessors, communication systems, and signal processing. This program combines theoretical knowledge with practical skills in designing and troubleshooting electronic systems used in consumer devices, telecommunications, and industrial applications.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 50-60%). Electronics/Computer Science in 10+2 is advantageous.",
        careerOpportunities:
          "Electronics Technician, Circuit Designer, Testing Engineer, Maintenance Engineer, Technical Sales Engineer, Field Service Engineer, Quality Control Inspector, Electronics Teacher, Research Assistant. Industries: consumer electronics, telecommunications, manufacturing, R&D labs, service centers. Further studies: M.Sc Electronics, M.Tech, specialized diplomas, certifications.",
        fees: "₹6,000 - ₹50,000 per year in government colleges; ₹35,000 - ₹2,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Basic Electronics, Circuit Theory, Semiconductor Devices, Digital Electronics, Mathematics, Programming (C/Python), Practicals. Semester 3-4: Analog Electronics, Microprocessors & Microcontrollers, Electronic Instrumentation, Signals & Systems, Communication Electronics, PCB Design. Semester 5-6: Embedded Systems, VLSI Design Basics, Power Electronics, Wireless Communication, Electives (IoT, Robotics, Consumer Electronics), Industrial Training, Project Work with extensive lab sessions.",
      },
      {
        name: "B.Sc Data Science / AI & ML",
        short: "Data + smart models.",
        fullDescription:
          "B.Sc Data Science / AI & ML is an emerging interdisciplinary program combining statistics, computer science, and machine learning to extract insights from data. Students learn programming, statistical analysis, machine learning algorithms, data visualization, and AI techniques. This field prepares professionals for the data-driven economy where intelligent systems are transforming industries.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Mathematics as a core subject (minimum 60%). Computer Science/Statistics background advantageous. Strong analytical and programming aptitude essential.",
        careerOpportunities:
          "Junior Data Scientist, Data Analyst, ML Engineer (entry-level), Business Intelligence Analyst, Data Visualization Specialist, AI Developer, Research Assistant, Statistical Programmer, Analytics Consultant. Industries: IT, e-commerce, finance, healthcare, consulting. Further studies: M.Sc Data Science, M.Tech AI/ML, specialized certifications (AWS ML, Google Cloud ML, Azure AI).",
        fees: "₹15,000 - ₹1,00,000 per year in government institutions; ₹60,000 - ₹3,50,000 per year in private universities.",
        syllabus:
          "Semester 1-2: Programming (Python, R), Mathematics (Calculus, Linear Algebra), Statistics & Probability, Data Structures, Database Systems, Data Visualization. Semester 3-4: Machine Learning Fundamentals, Statistical Learning, Big Data Analytics, Data Mining, SQL & NoSQL, Web Scraping. Semester 5-6: Deep Learning, Natural Language Processing, Computer Vision, Time Series Analysis, Cloud Computing for Data Science, Electives (Reinforcement Learning, MLOps, Recommendation Systems), Capstone Project with real datasets.",
      },
      {
        name: "B.Sc Biotechnology",
        short: "Biology + tech.",
        fullDescription:
          "B.Sc Biotechnology integrates biology with technology to develop products and processes for healthcare, agriculture, and environmental applications. Students learn genetic engineering, cell culture, biochemistry, immunology, and bioprocessing. This field creates innovations like vaccines, genetically modified crops, biofuels, and diagnostic tools.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Biology/Biotechnology, Chemistry, and Physics/Mathematics (minimum 50-60%). Strong interest in both biology and technology essential.",
        careerOpportunities:
          "Biotechnology Research Associate, Laboratory Technician, Quality Control Analyst, Production Officer (biotech industry), Clinical Research Coordinator, Bioinformatics Analyst (with additional training), Agricultural Biotechnologist, Science Writer. Industries: pharmaceuticals, diagnostics, agriculture (seed companies), research institutes, hospitals. Further studies: M.Sc Biotechnology, M.Tech Biotech, MBA (Pharma), competitive exams.",
        fees: "₹10,000 - ₹70,000 per year in government colleges; ₹50,000 - ₹2,50,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Cell Biology, Biochemistry, Microbiology, Chemistry, Mathematics/Biostatistics, Computer Applications, Basic Biotechnology Techniques. Semester 3-4: Genetics, Molecular Biology, Immunology, Biophysics, Bioprocess Engineering, Bioinformatics, Recombinant DNA Technology. Semester 5-6: Genetic Engineering, Plant/Animal Biotechnology, Environmental Biotechnology, Industrial Biotechnology, Pharmaceutical Biotechnology, Electives (Stem Cell Technology, Nanobiotechnology, Biosafety), Industrial Training, Project Work.",
      },
      {
        name: "B.Sc Microbiology",
        short: "Tiny living things.",
        fullDescription:
          "B.Sc Microbiology is the study of microscopic organisms including bacteria, viruses, fungi, protozoa, and algae. Students learn microbial physiology, pathogenic microbiology, immunology, and industrial applications of microbes. Microbiologists play crucial roles in healthcare, food safety, pharmaceuticals, environmental protection, and biotechnology.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Biology/Botany/Zoology, Chemistry, and Physics/Mathematics (minimum 50-60%). Biology as mandatory subject.",
        careerOpportunities:
          "Microbiologist, Quality Control Microbiologist, Clinical Laboratory Technician, Research Associate, Food Microbiologist, Environmental Microbiologist, Pharmaceutical QC Analyst, Hospital Laboratory Staff, Infection Control Officer, Science Educator. Sectors: hospitals, diagnostic labs, pharmaceuticals, food industry, water treatment, research institutes. Further studies: M.Sc Microbiology, Medical Laboratory Technology, Ph.D.",
        fees: "₹8,000 - ₹60,000 per year in government colleges; ₹40,000 - ₹2,20,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: General Microbiology, Microbial Diversity, Biochemistry, Cell Biology, Chemistry, Biostatistics, Basic Microscopy & Staining Techniques. Semester 3-4: Microbial Physiology & Metabolism, Genetics, Immunology, Pathogenic Microbiology (Medical Bacteriology), Virology, Mycology. Semester 5-6: Industrial Microbiology, Food Microbiology, Environmental Microbiology, Molecular Biology, Microbial Biotechnology, Electives (Clinical Microbiology, Pharmaceutical Microbiology, Soil Microbiology), Research Methodology, Laboratory Training, Dissertation.",
      },
      {
        name: "B.Sc Biochemistry",
        short: "Chemistry of life.",
        fullDescription:
          "B.Sc Biochemistry explores the chemical processes within living organisms. Students study biomolecules (proteins, carbohydrates, lipids, nucleic acids), metabolism, enzymology, and molecular biology. This interdisciplinary field connects chemistry with biology, essential for understanding diseases, developing drugs, and advancing biotechnology.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Chemistry and Biology as core subjects, plus Physics/Mathematics (minimum 50-60%). Both Chemistry and Biology mandatory.",
        careerOpportunities:
          "Biochemist, Clinical Biochemist, Research Scientist, Laboratory Analyst, Quality Control Chemist, Pharmaceutical Researcher, Diagnostic Lab Technician, Toxicologist, Food Biochemist, Science Content Developer. Sectors: hospitals, diagnostic centers, pharmaceuticals, biotechnology, research labs, food industry. Further studies: M.Sc Biochemistry, Medical Laboratory Technology, M.Sc Molecular Biology, Ph.D.",
        fees: "₹8,000 - ₹65,000 per year in government colleges; ₹45,000 - ₹2,40,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Biomolecules (Carbohydrates, Lipids, Proteins), Cell Biology, Inorganic & Organic Chemistry, Mathematics/Biostatistics, Basics of Biochemistry Lab Techniques. Semester 3-4: Enzymology, Metabolism (Carbohydrate, Lipid, Protein, Nucleic Acid), Molecular Biology, Biophysical Chemistry, Genetics, Immunology. Semester 5-6: Clinical Biochemistry, Endocrinology, Nutritional Biochemistry, Plant Biochemistry, Biotechnology, Electives (Neurochemistry, Pharmacology, Toxicology), Instrumentation, Research Project with extensive practical training.",
      },
      {
        name: "B.Sc Genetics",
        short: "Genes & DNA.",
        fullDescription:
          "B.Sc Genetics focuses on heredity, genetic variation, and gene function. Students study classical genetics, molecular genetics, cytogenetics, population genetics, and genetic engineering. This field is crucial for understanding inherited diseases, developing gene therapies, improving crop varieties, and advancing personalized medicine.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Biology, Chemistry, and Physics/Mathematics (minimum 50-60%). Strong foundation in biology essential.",
        careerOpportunities:
          "Genetic Counselor (after certification), Cytogenetic Technologist, Research Associate (genetics), Laboratory Technician (molecular diagnostics), Bioinformatics Analyst (with training), Agricultural Geneticist, Clinical Trial Coordinator, Forensic DNA Analyst, Science Educator. Employers: hospitals, diagnostic centers, research institutes, agricultural companies, pharmaceutical firms. Further studies: M.Sc Genetics, M.Sc Molecular Biology, Genetic Counseling certification, Ph.D.",
        fees: "₹10,000 - ₹70,000 per year in government colleges; ₹50,000 - ₹2,60,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Cell Biology, Classical Genetics (Mendelian Genetics), Biochemistry, Biostatistics, Molecular Biology Basics, Microbiology. Semester 3-4: Molecular Genetics, Cytogenetics, Microbial Genetics, Immunology, Bioinformatics, Population & Quantitative Genetics. Semester 5-6: Human Genetics, Genetic Engineering & rDNA Technology, Genomics & Proteomics, Medical Genetics, Evolutionary Genetics, Electives (Cancer Genetics, Developmental Genetics, Pharmacogenomics, Gene Therapy), Research Methodology, Project Work.",
      },
      {
        name: "B.Sc Life Sciences / Biomedical Science",
        short: "Human biology.",
        fullDescription:
          "B.Sc Life Sciences/Biomedical Science is an integrated program covering various biological disciplines with emphasis on human health. Students study anatomy, physiology, pathology, pharmacology, and molecular biology. This comprehensive degree prepares students for healthcare-related careers and advanced studies in medicine, research, or allied health sciences.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Biology, Chemistry, and Physics/Mathematics (minimum 50-60%). Biology and Chemistry mandatory.",
        careerOpportunities:
          "Biomedical Research Associate, Clinical Laboratory Technician, Medical Representative, Healthcare Consultant, Research Assistant, Pharmaceutical Quality Analyst, Hospital Administrator (with MBA), Science Educator, Medical Content Writer. Further career paths: prepare for NEET (medical entrance), allied health courses, or M.Sc programs. Further studies: M.Sc Life Sciences, Medical Laboratory Technology, Public Health, MBA Healthcare.",
        fees: "₹10,000 - ₹75,000 per year in government colleges; ₹50,000 - ₹3,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Cell Biology & Genetics, Human Anatomy & Physiology, Biochemistry, Microbiology, Biostatistics, Chemistry. Semester 3-4: Molecular Biology, Immunology, Pathology, Pharmacology, Hematology, Histology. Semester 5-6: Clinical Biochemistry, Medical Microbiology, Biotechnology, Bioinformatics, Research Methodology, Electives (Neuroscience, Cancer Biology, Stem Cell Biology, Medical Diagnostics), Industrial/Hospital Training, Dissertation. Strong emphasis on laboratory skills throughout.",
      },
      {
        name: "B.Sc Botany",
        short: "Plants.",
        fullDescription:
          "B.Sc Botany is the scientific study of plants, including their structure, physiology, classification, ecology, and economic importance. Students learn plant anatomy, taxonomy, genetics, biotechnology, and environmental interactions. Botanists contribute to agriculture, conservation, pharmaceuticals, and understanding ecosystem dynamics.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Biology/Botany as a core subject, along with Chemistry and Physics/Mathematics (minimum 50-60%). Botany or Biology mandatory.",
        careerOpportunities:
          "Botanist, Plant Taxonomist, Horticulturist, Agricultural Officer, Forest Officer (through competitive exams), Plant Biotechnologist, Environmental Consultant, Research Assistant, Herbal Product Developer, Botanical Survey Officer, Science Teacher. Sectors: agriculture, forestry, botanical gardens, research institutes, pharmaceuticals (herbal), environmental agencies. Further studies: M.Sc Botany, M.Sc Environmental Science, B.Ed, Forest Services exam.",
        fees: "₹5,000 - ₹40,000 per year in government colleges; ₹30,000 - ₹1,80,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Plant Diversity (Algae, Fungi, Bryophytes, Pteridophytes), Plant Anatomy, Cell Biology, Biochemistry, Microbiology. Semester 3-4: Plant Taxonomy (Gymnosperms, Angiosperms), Plant Physiology, Genetics, Ecology & Environmental Science, Economic Botany. Semester 5-6: Plant Biotechnology, Molecular Biology, Plant Pathology, Ethnobotany, Horticulture & Landscaping, Electives (Plant Tissue Culture, Medicinal Plants, Conservation Biology, Floriculture), Field Trips, Project Work with herbarium preparation.",
      },
      {
        name: "B.Sc Zoology",
        short: "Animals.",
        fullDescription:
          "B.Sc Zoology is the scientific study of animals, their structure, physiology, behavior, classification, and ecology. Students learn animal diversity from invertebrates to vertebrates, animal physiology, genetics, evolution, and conservation. Zoologists contribute to wildlife conservation, veterinary sciences, research, and understanding biodiversity.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Biology/Zoology as a core subject, along with Chemistry and Physics/Mathematics (minimum 50-60%). Zoology or Biology mandatory.",
        careerOpportunities:
          "Zoologist, Wildlife Biologist, Conservation Officer, Zoo Curator, Animal Behaviorist, Research Assistant, Environmental Consultant, Fisheries Officer, Veterinary Assistant (with additional training), Science Educator, Museum Curator. Organizations: wildlife sanctuaries, zoos, research institutes, environmental NGOs, fisheries departments, pharmaceutical companies. Further studies: M.Sc Zoology, Wildlife Science, Veterinary Science, Environmental Management.",
        fees: "₹5,000 - ₹40,000 per year in government colleges; ₹30,000 - ₹1,80,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Animal Diversity I (Protozoa to Annelida), Animal Diversity II (Arthropoda to Chordata), Cell Biology, Biochemistry, Biostatistics. Semester 3-4: Animal Physiology, Genetics & Evolution, Developmental Biology, Ecology & Animal Behavior, Parasitology, Microbiology. Semester 5-6: Molecular Biology & Biotechnology, Immunology, Endocrinology, Wildlife Biology, Aquaculture & Fishery Science, Electives (Entomology, Ornithology, Marine Biology, Conservation Biology), Field Studies, Dissertation with museum specimen collection.",
      },
      {
        name: "B.Sc Psychology (Science)",
        short: "Mind & behavior.",
        fullDescription:
          "B.Sc Psychology is a scientific approach to understanding human mind, behavior, emotions, and cognition. Students learn research methods, experimental psychology, neuroscience, statistics, and various psychology branches. This degree emphasizes scientific methodology and biological basis of behavior, preparing students for research and clinical/counseling careers (after further studies).",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 in any stream (Science/Commerce/Arts) with minimum 50% aggregate. Some universities prefer Science stream. No specific subject requirement but Mathematics/Statistics helpful.",
        careerOpportunities:
          "Research Assistant (psychology), Human Resources Associate, Counseling Trainee (requires M.A./M.Sc + certification), Market Research Analyst, Organizational Behavior Consultant, Child Development Specialist, Mental Health Worker, Content Developer, NGO Worker (mental health). Further career development requires M.A./M.Sc Psychology and professional certifications. Further studies: M.Sc/M.A. Psychology (Clinical, Counseling, Organizational, Educational), M.Phil Clinical Psychology, Ph.D.",
        fees: "₹8,000 - ₹50,000 per year in government colleges; ₹40,000 - ₹2,50,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Introduction to Psychology, Biopsychology, Research Methods, Statistics for Psychology, Developmental Psychology, Cognitive Psychology. Semester 3-4: Experimental Psychology, Social Psychology, Abnormal Psychology, Psychological Testing & Assessment, Learning & Memory, Personality Theories. Semester 5-6: Clinical Psychology, Organizational Psychology, Health Psychology, Neuropsychology, Electives (Positive Psychology, Forensic Psychology, Sports Psychology, Environmental Psychology), Research Project, Practical Training (conducting experiments, tests, observations).",
      },
      {
        name: "B.Sc Home Science",
        short: "Nutrition & family science.",
        fullDescription:
          "B.Sc Home Science is a multidisciplinary program covering nutrition, food science, textile science, human development, and family resource management. Students learn scientific approaches to improving quality of life, health, and well-being of individuals and families. This field combines science with practical life skills and community development.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 in any stream with minimum 50% aggregate. Science stream with Biology/Chemistry preferred but not mandatory in most universities.",
        careerOpportunities:
          "Nutritionist/Dietitian (with certification), Food Technologist, Fashion Designer, Textile Designer, Interior Designer, Child Development Specialist, Home Science Teacher, Entrepreneur (catering, boutique), Community Development Officer, Counselor (family/marriage), NGO Worker. Industries: food & nutrition, textiles, hospitality, education, healthcare, entrepreneurship. Further studies: M.Sc Home Science (specializations), Dietetics certification, B.Ed, MBA.",
        fees: "₹5,000 - ₹40,000 per year in government colleges; ₹30,000 - ₹1,50,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Human Development & Family Studies, Food & Nutrition, Textile Science, Resource Management, Biochemistry, Basics of Home Science. Semester 3-4: Advanced Nutrition, Clinical & Therapeutic Nutrition, Food Science & Technology, Fabric Science & Apparel Design, Child Development, Family Resource Management. Semester 5-6: Community Nutrition, Entrepreneurship Development, Interior Decoration, Extension Education, Electives (Geriatric Nutrition, Fashion Designing, Food Quality Control, Consumer Studies), Practicals (Cooking, Garment Construction), Internship, Project Work.",
      },
      {
        name: "B.Sc Forensic Science",
        short: "Science for crime cases.",
        fullDescription:
          "B.Sc Forensic Science applies scientific principles to criminal investigations and legal proceedings. Students learn crime scene investigation, forensic biology, chemistry, toxicology, ballistics, and cybercrime. Forensic scientists provide crucial evidence in criminal cases through laboratory analysis and expert testimony.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Biology/Mathematics (minimum 50-60%). Some universities conduct entrance exams. Interest in criminal justice and attention to detail essential.",
        careerOpportunities:
          "Forensic Scientist, Crime Scene Investigator, Forensic Analyst (DNA, Toxicology, Ballistics), Fingerprint Expert, Document Examiner, Cyber Forensic Analyst, Forensic Photographer, Evidence Technician, Legal Consultant (technical), Academic Researcher. Employers: state forensic labs, CBI, police departments, private forensic labs, legal firms, insurance companies. Further studies: M.Sc Forensic Science (specializations), Cyber Forensics, Criminology.",
        fees: "₹15,000 - ₹1,00,000 per year in government colleges; ₹60,000 - ₹3,50,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Introduction to Forensic Science, Forensic Chemistry, Forensic Biology, Physics for Forensics, Crime Scene Management, Basics of Criminal Law. Semester 3-4: Forensic Toxicology, Forensic Serology & DNA Analysis, Fingerprint Science, Forensic Ballistics, Forensic Medicine, Photography & Videography. Semester 5-6: Forensic Psychology & Behavioral Science, Cyber Forensics & Digital Evidence, Questioned Documents, Forensic Anthropology, Forensic Odontology, Electives (Wildlife Forensics, Forensic Accounting), Moot Court, Practical Training in Labs, Internship at Forensic Labs.",
      },
      {
        name: "B.Sc Nanoscience & Nanotechnology",
        short: "Very tiny tech.",
        fullDescription:
          "B.Sc Nanoscience & Nanotechnology explores matter at the nanoscale (1-100 nanometers), where materials exhibit unique properties. Students learn nanomaterials synthesis, characterization techniques, quantum mechanics, and applications in electronics, medicine, energy, and materials. This cutting-edge field is revolutionizing technology from drug delivery to solar cells.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 60%). Strong foundation in physics and chemistry essential. Some universities require entrance exams.",
        careerOpportunities:
          "Nanotechnology Research Associate, Nanomaterials Scientist, Laboratory Technician (nanotech), Quality Control Analyst, Application Scientist (instrumentation companies), Junior R&D Engineer, Technical Writer (nanotech), Science Educator. Industries: semiconductors, pharmaceuticals, materials science, electronics, energy, research institutions. Further studies: M.Sc/M.Tech Nanotechnology, Materials Science, Ph.D for research careers.",
        fees: "₹15,000 - ₹1,20,000 per year in government institutions; ₹80,000 - ₹4,00,000 per year in private universities.",
        syllabus:
          "Semester 1-2: Physics (Mechanics, Electromagnetism), Chemistry (Inorganic, Organic), Mathematics, Introduction to Nanoscience, Atomic & Molecular Physics, Materials Science Basics. Semester 3-4: Quantum Mechanics, Solid State Physics, Nanomaterials & Synthesis Techniques, Characterization Methods (SEM, TEM, XRD, AFM), Computational Nanoscience, Physical Chemistry. Semester 5-6: Nanoelectronics, Nanobiotechnology, Nanomedicine & Drug Delivery, Carbon Nanotubes & Graphene, Nano-optics, Electives (Green Nanotechnology, Nano-sensors, Energy Applications), Instrumentation Training, Research Project with hands-on lab work.",
      },
      {
        name: "B.Sc Astronomy & Astrophysics",
        short: "Stars & space.",
        fullDescription:
          "B.Sc Astronomy & Astrophysics studies celestial objects, phenomena, and the universe's structure and evolution. Students learn observational astronomy, stellar physics, cosmology, planetary science, and space instrumentation. This fascinating field explores questions about the origin of the universe, black holes, exoplanets, and cosmic phenomena.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Physics and Mathematics as core subjects (minimum 60%). Chemistry often required. Strong mathematical and analytical skills essential. Offered by limited specialized universities.",
        careerOpportunities:
          "Research Assistant (astronomy), Observational Astronomer (after higher studies), Planetarium Educator, Science Communicator, Data Analyst (astronomical data), Scientific Officer (ISRO, observatories after exams), Telescope Operator, Academic Researcher, Science Journalist (space). Organizations: ISRO, astronomical observatories, planetariums, research institutes, science centers. Further studies: M.Sc Astronomy/Astrophysics (essential for professional career), Ph.D., specialized courses abroad.",
        fees: "₹10,000 - ₹80,000 per year in government institutions; ₹60,000 - ₹3,00,000 per year in private universities (limited colleges offer this).",
        syllabus:
          "Semester 1-2: Classical Mechanics, Electricity & Magnetism, Mathematical Physics, Introduction to Astronomy, Optics, Thermal Physics, Basic Observational Techniques. Semester 3-4: Quantum Mechanics, Statistical Physics, Stellar Astrophysics, Galactic Structure, Observational Astronomy, Computational Methods, Astrophysical Instrumentation. Semester 5-6: Cosmology, High Energy Astrophysics, Planetary Science, Radio Astronomy, Celestial Mechanics, Electives (Exoplanets, Astrobiology, Black Holes & Neutron Stars), Telescope Time & Observations, Research Project, Data Analysis Training.",
      },
      {
        name: "B.Sc Space Science",
        short: "Rockets & satellites.",
        fullDescription:
          "B.Sc Space Science focuses on space exploration, satellite technology, space environment, and applications. Students learn about spacecraft systems, orbital mechanics, remote sensing, space instrumentation, and space missions. This specialized field prepares students for careers in the growing space sector including satellite communications, navigation, and planetary exploration.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics (minimum 60%). High academic performance expected. Very limited colleges offer this specialized program. Some universities have entrance exams.",
        careerOpportunities:
          "Space Scientist (after M.Sc/M.Tech), Satellite Data Analyst, Research Associate (space agencies), Remote Sensing Analyst, Space Systems Engineer (with further studies), Ground Station Operator, Scientific Officer (ISRO through exams), Mission Planning Analyst, Space Education Specialist. Organizations: ISRO, private space companies, research institutes, satellite communication companies. Further studies: M.Sc/M.Tech Space Science, Aerospace Engineering, Atmospheric Science.",
        fees: "₹15,000 - ₹1,00,000 per year in government institutions; ₹1,00,000 - ₹4,00,000 per year in specialized universities (limited availability).",
        syllabus:
          "Semester 1-2: Physics (Mechanics, Electromagnetism), Mathematics, Chemistry, Introduction to Space Science, Astronomy Basics, Programming (Python/MATLAB). Semester 3-4: Quantum Mechanics, Space Physics, Orbital Mechanics & Astrodynamics, Electronics & Instrumentation, Space Environment, Atmospheric Science. Semester 5-6: Satellite Technology, Remote Sensing & GIS, Spacecraft Systems, Space Communication, Planetary Science, Electives (Rocket Propulsion, Space Missions, GPS & Navigation, Space Weather), Data Processing, Project Work with possible exposure to satellite data analysis.",
      },
      {
        name: "B.Sc Earth Science / Geology",
        short: "Rocks & earth.",
        fullDescription:
          "B.Sc Earth Science/Geology studies the Earth's composition, structure, processes, and history. Students learn about minerals, rocks, fossils, plate tectonics, natural resources, and geological hazards. Geologists explore for resources, assess environmental risks, study climate change evidence, and understand natural disasters.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics/Biology (minimum 50-60%). Geology/Geography in 10+2 is advantageous. Physical fitness required for field work.",
        careerOpportunities:
          "Geologist, Mineral Exploration Geologist, Petroleum Geologist, Hydrogeologist, Environmental Geologist, Engineering Geologist, Mining Geologist, Geological Survey Officer, Seismologist (with specialization), Museum Curator, Science Educator. Organizations: Geological Survey of India, mining companies, oil & gas companies, environmental consultancies, construction firms, research institutions. Further studies: M.Sc Geology (specializations), Applied Geology, Geophysics, Environmental Science.",
        fees: "₹6,000 - ₹50,000 per year in government colleges; ₹35,000 - ₹2,00,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Physical Geology, Mineralogy, Crystallography, Petrology (Igneous), Chemistry, Mathematics/Physics, Geological Field Methods. Semester 3-4: Petrology (Sedimentary & Metamorphic), Paleontology, Structural Geology, Stratigraphy, Geomorphology, Geochemistry. Semester 5-6: Economic Geology (Ore Deposits), Petroleum Geology, Hydrogeology, Engineering Geology, Environmental Geology, Electives (Seismology, Remote Sensing & GIS, Marine Geology, Geotechnics), Field Training (multiple camps), Dissertation with rock/mineral collection and mapping.",
      },
      {
        name: "B.Sc Geography (Science)",
        short: "Maps & places.",
        fullDescription:
          "B.Sc Geography (Science stream) studies Earth's physical features, climate, natural resources, and human-environment interactions using scientific methods. Students learn geomorphology, climatology, remote sensing, GIS, cartography, and environmental geography. This spatial science combines physical and environmental sciences with technological tools.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Geography as a subject (preferred) or Science stream (minimum 50-60%). Mathematics helpful but not always mandatory. Some universities allow any stream.",
        careerOpportunities:
          "GIS Analyst, Cartographer, Remote Sensing Specialist, Urban Planner (with additional qualifications), Environmental Consultant, Climate Analyst, Survey Officer, Disaster Management Specialist, Geography Teacher, Research Assistant. Organizations: Survey of India, urban development authorities, environmental agencies, GIS companies, disaster management, research institutes. Further studies: M.Sc Geography, Remote Sensing & GIS, Urban Planning, Environmental Management, UPSC (Geography optional).",
        fees: "₹5,000 - ₹40,000 per year in government colleges; ₹30,000 - ₹1,80,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Physical Geography (Geomorphology, Climatology), Cartography, Introduction to Remote Sensing, Basics of GIS, Environmental Geography, Statistics for Geography. Semester 3-4: Biogeography, Oceanography, Soil Geography, Hydrology, Quantitative Methods, Computer Applications (GIS Software). Semester 5-6: Remote Sensing Applications, Advanced GIS, Disaster Management, Climate Change, Urban Geography, Electives (Aerial Photo Interpretation, GPS Technology, Coastal Zone Management, Agricultural Geography), Field Work, Dissertation with mapping projects and GIS analysis.",
      },
      {
        name: "B.Sc Oceanography / Marine Science",
        short: "Seas & oceans.",
        fullDescription:
          "B.Sc Oceanography/Marine Science studies oceans, their physical properties, chemistry, biology, and geology. Students learn about ocean circulation, marine ecosystems, coastal processes, marine resources, and oceanographic instrumentation. This field addresses critical issues like climate change, ocean pollution, sustainable fisheries, and marine conservation.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Physics, Chemistry, and Mathematics/Biology (minimum 50-60%). Biology preferred for biological oceanography. Swimming ability often required. Limited specialized institutions offer this program.",
        careerOpportunities:
          "Oceanographer (research), Marine Biologist, Coastal Zone Manager, Fisheries Scientist, Marine Environmental Consultant, Ocean Data Analyst, Hydrographic Surveyor, Marine Resource Manager, Aquaculture Specialist, Maritime Consultant, Science Educator. Organizations: National Institute of Oceanography, marine research institutes, fisheries departments, coastal management agencies, oil & gas (offshore), environmental NGOs. Further studies: M.Sc Oceanography, Marine Biology, Coastal Management.",
        fees: "₹10,000 - ₹80,000 per year in government institutions; ₹60,000 - ₹3,00,000 per year in private universities (limited colleges).",
        syllabus:
          "Semester 1-2: Physical Oceanography, Chemical Oceanography, Marine Biology, Mathematics, Statistics, Introduction to Marine Sciences, Basics of Navigation. Semester 3-4: Biological Oceanography, Geological Oceanography, Marine Ecology, Ocean Dynamics, Marine Chemistry, Instrumentation & Field Techniques. Semester 5-6: Coastal Processes, Marine Pollution & Conservation, Fisheries Science, Aquaculture, Remote Sensing of Oceans, Electives (Coral Reef Ecology, Marine Biotechnology, Ocean Modeling, Deep Sea Biology), Field Training (coastal/sea-going expeditions), Research Project with data collection at sea.",
      },
      {
        name: "B.Sc Meteorology / Atmospheric Science",
        short: "Weather & climate.",
        fullDescription:
          "B.Sc Meteorology/Atmospheric Science studies Earth's atmosphere, weather patterns, climate systems, and atmospheric phenomena. Students learn weather forecasting, climatology, atmospheric physics and chemistry, remote sensing, and climate modeling. Meteorologists play crucial roles in weather prediction, climate research, disaster warning, and aviation safety.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Physics and Mathematics as core subjects (minimum 60%). Chemistry often required. Strong mathematical and analytical skills essential. Very limited specialized universities offer this program.",
        careerOpportunities:
          "Meteorologist, Weather Forecaster (IMD after exams), Climate Analyst, Atmospheric Scientist, Weather Data Analyst, Operational Meteorologist (aviation, military), Climate Researcher, Disaster Management Specialist, Environmental Consultant, Science Communicator. Organizations: India Meteorological Department (IMD), research institutes, aviation sector, armed forces, agricultural meteorology, private weather companies. Further studies: M.Sc Meteorology, Atmospheric Science, Climate Change, Ph.D.",
        fees: "₹10,000 - ₹1,00,000 per year in government institutions (limited colleges offer this specialized program).",
        syllabus:
          "Semester 1-2: Physics (Mechanics, Thermodynamics), Mathematics (Calculus, Differential Equations), Chemistry, Introduction to Meteorology, Atmospheric Thermodynamics, Physical Geography. Semester 3-4: Atmospheric Physics, Dynamical Meteorology, Cloud Physics, Weather Analysis & Forecasting, Statistical Methods, Synoptic Meteorology. Semester 5-6: Climate Dynamics, Tropical Meteorology, Satellite & Radar Meteorology, Atmospheric Chemistry, Numerical Weather Prediction, Electives (Air Pollution, Climate Change, Agricultural Meteorology, Aviation Meteorology), Computer Programming for Meteorology, Weather Forecasting Practicals, Project Work with weather data analysis.",
      },
      {
        name: "B.Sc Environmental Science",
        short: "Nature & pollution.",
        fullDescription:
          "B.Sc Environmental Science is an interdisciplinary program studying interactions between physical, chemical, and biological components of the environment. Students learn ecology, pollution control, conservation, environmental impact assessment, and sustainable development. This field addresses pressing environmental challenges like climate change, biodiversity loss, and resource depletion.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Biology/Physics/Chemistry as core subjects (minimum 50-60%). Biology and Chemistry preferred. Interest in environmental issues essential.",
        careerOpportunities:
          "Environmental Scientist, Environmental Consultant, Pollution Control Officer, EIA Specialist, Conservation Officer, Sustainability Analyst, Waste Management Expert, Environmental Auditor, Climate Change Analyst, NGO Worker (environment), Environmental Educator, Wildlife Manager. Organizations: pollution control boards, environmental consulting firms, industries (compliance), NGOs, government departments, research institutes, renewable energy sector. Further studies: M.Sc Environmental Science, Environmental Engineering, Wildlife Conservation, Urban Planning.",
        fees: "₹6,000 - ₹50,000 per year in government colleges; ₹35,000 - ₹2,20,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Environmental Science Fundamentals, Ecology, Environmental Chemistry, Environmental Biology, Mathematics/Statistics, Environmental Geology/Geography. Semester 3-4: Environmental Pollution & Control, Biodiversity Conservation, Natural Resource Management, Environmental Microbiology, Environmental Toxicology, GIS & Remote Sensing. Semester 5-6: Environmental Impact Assessment, Climate Change, Renewable Energy, Environmental Laws & Policy, Waste Management, Electives (Wildlife Conservation, Sustainable Development, Urban Ecology, Water Resources Management), Field Work & Surveys, Internship, Dissertation with focus on local environmental issues.",
      },
      {
        name: "B.Sc Bioinformatics / Computational Biology",
        short: "Biology + computing.",
        fullDescription:
          "B.Sc Bioinformatics/Computational Biology applies computational tools and techniques to biological data. Students learn programming, database management, molecular biology, genomics, proteomics, and algorithm development for biological problems. This interdisciplinary field is essential for analyzing massive biological datasets from genome sequencing, drug discovery, and personalized medicine.",
        duration: "3 years (6 semesters)",
        eligibility:
          "10+2 with Biology, Chemistry, and Physics/Mathematics (minimum 50-60%). Both Biology and Mathematics/Computer Science background highly advantageous. Programming interest essential.",
        careerOpportunities:
          "Bioinformatics Analyst, Computational Biologist, Genomic Data Analyst, Biostatistician, Database Curator, Bioinformatics Programmer, Research Associate, Clinical Informatics Specialist, Drug Discovery Analyst, Systems Biologist. Industries: pharmaceuticals, biotechnology, genomics companies, research institutes, hospitals (clinical genomics), agricultural biotech, contract research organizations. Further studies: M.Sc/M.Tech Bioinformatics, Computational Biology, Data Science, Ph.D.",
        fees: "₹15,000 - ₹1,00,000 per year in government colleges; ₹60,000 - ₹3,50,000 per year in private institutions.",
        syllabus:
          "Semester 1-2: Programming (Python, R), Data Structures, Cell Biology, Biochemistry, Molecular Biology, Mathematics & Biostatistics, Introduction to Bioinformatics. Semester 3-4: Algorithms, Database Management Systems, Genetics, Genomics & Proteomics, Sequence Analysis, Structural Bioinformatics, Biological Databases. Semester 5-6: Machine Learning for Biology, Systems Biology, Computational Drug Design, Next-Generation Sequencing Data Analysis, Phylogenetics, Electives (Network Biology, Metagenomics, Immunoinformatics, Cheminformatics), Bioinformatics Tools Training, Project Work with real biological datasets and software development.",
      },
    ],
  },
  {
    key: "agri",
    label: "Agriculture, Animal & Fisheries",
    icon: <Leaf className="w-5 h-5 text-emerald-600" />,
    degrees: [
      {
        name: "B.Sc (Hons) Agriculture",
        short: "Smart farming.",
        fullDescription:
          "Bachelor of Science in Agriculture is a comprehensive program that covers modern agricultural practices, crop production, soil science, and sustainable farming techniques. Students learn about agricultural economics, farm management, plant breeding, and the application of technology in agriculture. The course prepares graduates to address food security challenges and implement innovative farming solutions.",
        duration: "4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology/Mathematics/Agriculture. Minimum 50% marks (45% for SC/ST/OBC). Entrance exams: ICAR AIEEA, state agricultural university exams.",
        careerOpportunities:
          "Agricultural Officer, Farm Manager, Agricultural Consultant, Crop Specialist, Soil Scientist, Agricultural Research Scientist, Bank Agricultural Officer, Agribusiness Manager, Extension Officer, Agricultural Product Developer",
        fees: "₹20,000 - ₹2 lakhs per year (Government: ₹20K-80K, Private: ₹50K-2L)",
        syllabus:
          "Agronomy, Soil Science, Agricultural Chemistry, Plant Breeding & Genetics, Plant Pathology, Agricultural Entomology, Agricultural Economics, Farm Management, Agricultural Extension, Seed Technology, Plant Physiology, Agricultural Statistics, Crop Production Technology, Post-Harvest Technology",
      },
      {
        name: "B.Sc Horticulture",
        short: "Fruits & flowers.",
        fullDescription:
          "Bachelor of Science in Horticulture focuses on the cultivation of fruits, vegetables, flowers, ornamental plants, and plantation crops. The program covers modern horticultural practices, greenhouse technology, landscape design, post-harvest management, and commercial horticulture. Students learn scientific methods for increasing crop yield, quality improvement, and sustainable horticultural practices.",
        duration: "4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology/Mathematics/Agriculture. Minimum 50% marks (45% for SC/ST/OBC). Entrance exams: ICAR AIEEA, state agricultural university exams.",
        careerOpportunities:
          "Horticulturist, Garden Manager, Landscape Designer, Floriculturist, Fruit Processing Specialist, Nursery Manager, Greenhouse Technician, Quality Control Officer, Horticultural Consultant, Research Officer in Horticulture",
        fees: "₹25,000 - ₹1.5 lakhs per year (Government: ₹25K-70K, Private: ₹60K-1.5L)",
        syllabus:
          "Fundamentals of Horticulture, Pomology (Fruit Science), Olericulture (Vegetable Science), Floriculture & Landscaping, Plantation Crops, Spices & Medicinal Plants, Post-Harvest Technology, Protected Cultivation, Plant Propagation, Nursery Management, Organic Horticulture, Horticultural Engineering",
      },
      {
        name: "B.Sc Forestry",
        short: "Forest care.",
        fullDescription:
          "Bachelor of Science in Forestry is dedicated to the study of forest management, conservation, and sustainable utilization of forest resources. The program covers forest ecology, wildlife management, silviculture, agroforestry, and environmental conservation. Students learn to manage forest ecosystems, implement conservation programs, and balance environmental protection with resource utilization.",
        duration: "4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology/Mathematics. Minimum 50% marks (45% for SC/ST/OBC). Entrance exams: ICAR AIEEA, state university exams.",
        careerOpportunities:
          "Forest Officer (IFS), Forest Range Officer, Wildlife Manager, Conservation Officer, Agroforestry Consultant, Forest Research Scientist, Environmental Consultant, National Park Manager, NGO Worker in Conservation, Forestry Extension Officer",
        fees: "₹15,000 - ₹1 lakh per year (Government: ₹15K-60K, Private: ₹50K-1L)",
        syllabus:
          "Silviculture, Forest Ecology, Forest Management, Dendrology, Forest Mensuration, Wildlife Management, Agroforestry, Forest Economics, Forest Protection, Wood Science & Technology, Forest Survey, Remote Sensing & GIS, Social Forestry, Watershed Management",
      },
      {
        name: "B.Sc Sericulture",
        short: "Silk farming.",
        fullDescription:
          "Bachelor of Science in Sericulture focuses on silk production, from rearing silkworms to processing silk. The program covers silkworm biology, mulberry cultivation, cocoon production, silk reeling and weaving, and quality control. Students learn scientific methods for improving silk production, disease management in silkworms, and the commercial aspects of the silk industry.",
        duration: "3-4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology/Zoology. Minimum 45-50% marks. Some universities conduct entrance exams.",
        careerOpportunities:
          "Sericulture Officer, Silk Production Manager, Quality Control Analyst, Research Scientist in Sericulture, Extension Officer, Entrepreneurship in Silk Production, Silk Processing Unit Manager, Technical Advisor to Silk Farmers, Export Consultant",
        fees: "₹10,000 - ₹80,000 per year (Government: ₹10K-40K, Private: ₹40K-80K)",
        syllabus:
          "Sericulture Biology, Mulberry Cultivation, Silkworm Rearing, Seed Technology, Silkworm Diseases & Pests, Post-Cocoon Technology, Silk Reeling & Weaving, Silk Processing, Sericulture Economics, Entrepreneurship Development, Quality Evaluation, By-Products Utilization",
      },
      {
        name: "B.V.Sc & AH (Veterinary Science)",
        short: "Animal doctor.",
        fullDescription:
          "Bachelor of Veterinary Science and Animal Husbandry is the primary degree for becoming a veterinary doctor. The program covers animal anatomy, physiology, diseases, surgery, and healthcare across all species including livestock, poultry, and companion animals. Students learn to diagnose and treat animal diseases, perform surgeries, ensure food safety, and contribute to public health through disease prevention and control.",
        duration: "5 years (4 years + 1 year internship)",
        eligibility:
          "10+2 with Physics, Chemistry, Biology and English. Minimum 50% marks (40% for SC/ST/OBC). Qualified NEET-UG or state veterinary entrance exams.",
        careerOpportunities:
          "Veterinary Doctor, Livestock Development Officer, Veterinary Surgeon, Poultry Consultant, Dairy Farm Manager, Animal Health Inspector, Research Scientist, Wildlife Veterinarian, Pharmaceutical Industry Professional, Veterinary Professor",
        fees: "₹30,000 - ₹5 lakhs per year (Government: ₹30K-1L, Private: ₹1L-5L)",
        syllabus:
          "Veterinary Anatomy, Physiology, Biochemistry, Pharmacology, Pathology, Microbiology, Parasitology, Animal Nutrition, Veterinary Medicine, Veterinary Surgery, Veterinary Gynecology & Obstetrics, Veterinary Public Health, Poultry Science, Animal Breeding, Clinical Practice",
      },
      {
        name: "B.F.Sc (Fisheries Science)",
        short: "Fish & aquaculture.",
        fullDescription:
          "Bachelor of Fisheries Science focuses on aquaculture, fish breeding, fisheries management, and aquatic resource conservation. The program covers fish biology, aquatic ecosystems, fish disease management, fish processing, and sustainable fishing practices. Students learn modern techniques in aquaculture production, fish nutrition, and the management of marine and freshwater fisheries resources.",
        duration: "4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology/Mathematics. Minimum 50% marks (45% for SC/ST/OBC). Entrance exams: ICAR AIEEA, state university exams.",
        careerOpportunities:
          "Fisheries Officer, Aquaculture Manager, Fish Hatchery Manager, Marine Biologist, Fisheries Research Scientist, Aquaculture Consultant, Fish Processing Unit Manager, Fisheries Extension Officer, Quality Control Officer, Fish Farm Entrepreneur",
        fees: "₹20,000 - ₹1.5 lakhs per year (Government: ₹20K-70K, Private: ₹60K-1.5L)",
        syllabus:
          "Aquatic Biology, Fish Biology, Aquaculture, Fish Nutrition, Fish Genetics & Breeding, Fisheries Microbiology, Fish Pathology, Fisheries Economics, Aquatic Environmental Management, Fish Processing Technology, Fisheries Extension, Marine Fisheries, Inland Fisheries, Aquaculture Engineering",
      },
      {
        name: "B.Tech Dairy Technology / B.Sc Dairy Science",
        short: "Milk & dairy tech.",
        fullDescription:
          "Dairy Technology/Science programs focus on milk production, processing, preservation, and the manufacture of dairy products. Students learn about dairy microbiology, milk chemistry, dairy engineering, quality control, and the production of products like cheese, butter, yogurt, and ice cream. The course combines food science with engineering principles to optimize dairy product quality and safety.",
        duration: "4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Mathematics/Biology. Minimum 50% marks (45% for SC/ST/OBC). Entrance exams: ICAR AIEEA, JEE Main (for B.Tech), state university exams.",
        careerOpportunities:
          "Dairy Technologist, Production Manager in Dairy Industry, Quality Control Manager, Dairy Plant Manager, Research & Development Officer, Dairy Consultant, Dairy Product Developer, Technical Manager, Dairy Farm Supervisor, Food Safety Officer",
        fees: "₹25,000 - ₹2 lakhs per year (Government: ₹25K-80K, Private: ₹60K-2L)",
        syllabus:
          "Dairy Chemistry, Dairy Microbiology, Milk Processing Technology, Dairy Engineering, Dairy Products Technology, Quality Assurance, Dairy Plant Management, Milk & Milk Products Analysis, Dairy Biotechnology, Refrigeration & Cold Storage, Waste Management, Dairy Economics, Food Safety Standards",
      },
      {
        name: "B.Sc Animal Husbandry & Dairying",
        short: "Animal care & milk.",
        fullDescription:
          "Bachelor of Science in Animal Husbandry and Dairying covers the scientific management of livestock, dairy farming, animal breeding, and production systems. The program focuses on animal nutrition, breeding techniques, dairy management, and the economic aspects of livestock production. Students learn to improve animal productivity, maintain animal health, and manage sustainable livestock and dairy enterprises.",
        duration: "3-4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology/Mathematics/Agriculture. Minimum 45-50% marks. Some universities conduct entrance exams.",
        careerOpportunities:
          "Livestock Development Officer, Dairy Farm Manager, Animal Husbandry Officer, Feed Mill Manager, Breeding Consultant, Livestock Supervisor, Dairy Entrepreneur, Technical Advisor, Extension Officer, Quality Control Officer in Feed/Dairy Industry",
        fees: "₹15,000 - ₹1 lakh per year (Government: ₹15K-50K, Private: ₹40K-1L)",
        syllabus:
          "Animal Husbandry, Dairy Science, Animal Breeding & Genetics, Animal Nutrition, Livestock Production Management, Dairy Farm Management, Feed Technology, Animal Health & Hygiene, Livestock Economics, Poultry Production, Small Animal Management, Animal Products Technology",
      },
      {
        name: "B.Sc Food Science & Nutrition",
        short: "Healthy food.",
        fullDescription:
          "Bachelor of Science in Food Science and Nutrition combines food technology with nutritional science. The program covers food chemistry, microbiology, processing, preservation, nutritional biochemistry, and dietetics. Students learn to ensure food safety, develop nutritious food products, plan therapeutic diets, and address malnutrition and lifestyle diseases through proper nutrition management.",
        duration: "3-4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology/Mathematics. Minimum 50% marks (45% for SC/ST/OBC). Some universities conduct entrance exams.",
        careerOpportunities:
          "Nutritionist/Dietitian, Food Quality Analyst, Food Product Developer, Clinical Nutritionist, Public Health Nutritionist, Food Safety Officer, Research Scientist, Nutrition Consultant, Hospital Dietitian, Food Processing Unit Manager, Health & Wellness Advisor",
        fees: "₹20,000 - ₹2 lakhs per year (Government: ₹20K-60K, Private: ₹50K-2L)",
        syllabus:
          "Food Chemistry, Food Microbiology, Human Nutrition, Food Processing & Preservation, Nutritional Biochemistry, Clinical Nutrition, Community Nutrition, Diet Therapy, Food Quality & Safety, Nutrition Education, Food Product Development, Public Health Nutrition, Food Analysis",
      },
      {
        name: "B.Sc Agricultural Biotechnology",
        short: "Biotech for crops.",
        fullDescription:
          "Bachelor of Science in Agricultural Biotechnology applies modern biotechnology tools to agriculture for crop improvement, disease resistance, and enhanced productivity. The program covers genetic engineering, molecular biology, plant tissue culture, bioinformatics, and biosafety. Students learn to develop genetically modified crops, improve crop varieties, and use biotechnology for sustainable agriculture and food security.",
        duration: "3-4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology/Mathematics. Minimum 50% marks (45% for SC/ST/OBC). Entrance exams vary by university.",
        careerOpportunities:
          "Biotechnology Research Scientist, Plant Biotechnologist, Genetic Engineer, Laboratory Technician, Quality Control Analyst, Agricultural Consultant, Biotech Product Developer, Research Associate in Seed Companies, Academic Researcher, Regulatory Affairs Officer",
        fees: "₹25,000 - ₹2 lakhs per year (Government: ₹25K-80K, Private: ₹60K-2L)",
        syllabus:
          "Cell Biology, Molecular Biology, Genetics, Plant Biotechnology, Microbial Biotechnology, Genetic Engineering, Plant Tissue Culture, Bioinformatics, Agricultural Genomics, Biosafety & Bioethics, Biochemistry, Immunology, Recombinant DNA Technology, Biostatistics",
      },
      {
        name: "B.Sc Seed Science & Technology",
        short: "Better seeds.",
        fullDescription:
          "Bachelor of Science in Seed Science and Technology focuses on seed production, processing, storage, quality control, and certification. The program covers seed physiology, genetics, breeding, testing methods, and seed business management. Students learn to produce high-quality seeds, maintain genetic purity, test seed viability, and manage seed enterprises for improved agricultural productivity.",
        duration: "3-4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology/Agriculture. Minimum 45-50% marks. Some universities conduct entrance exams.",
        careerOpportunities:
          "Seed Certification Officer, Seed Production Manager, Quality Control Analyst, Seed Technologist, Research Officer in Seed Companies, Seed Processing Unit Manager, Seed Marketing Manager, Agricultural Extension Officer, Entrepreneur in Seed Business, Laboratory Technician",
        fees: "₹15,000 - ₹1 lakh per year (Government: ₹15K-50K, Private: ₹40K-1L)",
        syllabus:
          "Seed Production Technology, Seed Processing & Storage, Seed Quality Control, Seed Certification, Seed Testing, Plant Breeding, Genetics, Seed Physiology, Seed Pathology, Seed Business Management, Agricultural Economics, Post-Harvest Technology, Intellectual Property Rights",
      },
      {
        name: "B.Sc Plant Protection / Plant Pathology",
        short: "Protect crops.",
        fullDescription:
          "Bachelor of Science in Plant Protection or Plant Pathology focuses on protecting crops from diseases, pests, and weeds. The program covers plant pathology, entomology, nematology, weed science, and integrated pest management. Students learn to identify and manage plant diseases, implement biological control methods, and use pesticides safely to ensure crop health and maximize agricultural productivity.",
        duration: "3-4 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology/Agriculture. Minimum 45-50% marks. Some universities conduct entrance exams.",
        careerOpportunities:
          "Plant Protection Officer, Plant Pathologist, Pest Control Advisor, Agricultural Extension Officer, Research Scientist, Quality Control Officer in Pesticide Industry, IPM Specialist, Crop Health Manager, Quarantine Officer, Consultant in Crop Protection",
        fees: "₹15,000 - ₹1 lakh per year (Government: ₹15K-50K, Private: ₹40K-1L)",
        syllabus:
          "Plant Pathology, Agricultural Entomology, Nematology, Weed Science, Integrated Pest Management, Pesticide Application Technology, Disease Diagnosis, Biological Control, Insect Ecology, Plant Quarantine, Crop Protection Chemicals, Pest Surveillance, Resistance Management, Safe Pesticide Use",
      },
    ],
  },
  {
    key: "space",
    label: "Earth, Space & Maritime",
    icon: <Satellite className="w-5 h-5 text-cyan-700" />,
    degrees: [
      {
        name: "B.Sc Nautical Science",
        short: "Navigation at sea.",
        fullDescription:
          "Bachelor of Science in Nautical Science is a specialized program that trains students to become navigating officers on merchant navy ships. The course covers navigation, ship handling, cargo operations, maritime law, and safety procedures. Students learn celestial and electronic navigation, meteorology, and international maritime regulations, preparing them to command vessels across the world's oceans.",
        duration: "3 years (academic) + 12-18 months sea training",
        eligibility:
          "10+2 with Physics, Chemistry and Mathematics. Minimum 60% marks. Age 17-25 years. Medical fitness (good eyesight, no color blindness). Must clear IMU CET or other maritime entrance exams.",
        careerOpportunities:
          "Deck Officer, Ship Captain/Master Mariner, Port Manager, Shipping Company Executive, Maritime Surveyor, Harbor Master, Coastal Security Officer, Logistics Manager, Maritime Consultant, Navigation Expert",
        fees: "₹2-8 lakhs per year (Government institutes: ₹2-4L, Private: ₹4-8L)",
        syllabus:
          "Navigation (Terrestrial & Celestial), Ship Stability, Meteorology, Seamanship, Cargo Handling, Maritime Law, RADAR & ARPA, Electronic Navigation, Ship Construction, Safety & Survival at Sea, Marine Engineering Basics, Communication Procedures, Chart Work",
      },
      {
        name: "B.Sc Aviation",
        short: "Aviation & pilot studies.",
        fullDescription:
          "Bachelor of Science in Aviation is a comprehensive program covering all aspects of commercial aviation, including pilot training, aviation management, and aircraft operations. Students receive ground training in aviation subjects along with optional flying training. The course prepares graduates for various roles in the aviation industry, from becoming commercial pilots to aviation managers and ground operations specialists.",
        duration:
          "3 years (with flying training) / 3 years (ground course only)",
        eligibility:
          "10+2 with Physics and Mathematics. Minimum 50% marks. Age 17-27 years for pilot training. Medical fitness Class 1/Class 2 as per DGCA norms. Good communication skills in English.",
        careerOpportunities:
          "Commercial Pilot, Flight Instructor, Aviation Manager, Airport Operations Manager, Air Traffic Controller, Airline Operations Officer, Flight Dispatcher, Aviation Safety Officer, Cabin Crew Trainer, Aviation Consultant",
        fees: "₹3-25 lakhs per year (Ground course: ₹3-6L, With flying training: ₹15-25L)",
        syllabus:
          "Air Navigation, Aviation Meteorology, Air Regulations, Aviation Electronics, Aircraft Systems, Flight Planning, Aerodynamics, Aviation Law, Airline Management, Airport Operations, Aviation Safety, Human Factors, Flight Training (if included), Radio Telephony",
      },
      {
        name: "B.Sc Remote Sensing & GIS / Geoinformatics",
        short: "Smart maps.",
        fullDescription:
          "Bachelor of Science in Remote Sensing and Geographic Information Systems is a technology-driven program that teaches students to analyze satellite imagery, create digital maps, and solve spatial problems using advanced geospatial technologies. The course combines earth sciences with computer science, enabling students to work on environmental monitoring, urban planning, disaster management, and resource exploration using cutting-edge mapping technologies.",
        duration: "3 years",
        eligibility:
          "10+2 with Physics, Chemistry and Mathematics/Biology/Computer Science/Geography. Minimum 50% marks. Basic computer knowledge preferred.",
        careerOpportunities:
          "GIS Analyst, Remote Sensing Specialist, Cartographer, Spatial Data Scientist, Urban Planner, Environmental Consultant, Surveyor, Geospatial Developer, Disaster Management Specialist, Agriculture Analyst, Forest Officer, Climate Change Researcher",
        fees: "₹50,000 - ₹3 lakhs per year (Government: ₹50K-1.5L, Private: ₹1.5-3L)",
        syllabus:
          "Fundamentals of Remote Sensing, Geographic Information Systems, Cartography, Digital Image Processing, GPS & GNSS Technology, Photogrammetry, Spatial Analysis, Database Management, Programming (Python/R), Environmental Studies, Land Use Mapping, Web GIS, LiDAR Technology, Geospatial Statistics",
      },
      {
        name: "B.Tech Marine Engineering",
        short: "Ship engines.",
        fullDescription:
          "Bachelor of Technology in Marine Engineering is a specialized engineering program that trains students to operate, maintain, and repair all machinery and systems on board ships. Students learn about diesel engines, steam turbines, electrical systems, refrigeration, and propulsion systems specific to maritime vessels. The course combines mechanical engineering principles with maritime-specific applications, preparing graduates to serve as engineering officers in the merchant navy.",
        duration: "4 years (academic) + 12-18 months sea training",
        eligibility:
          "10+2 with Physics, Chemistry and Mathematics. Minimum 60% marks. Age 17-25 years. Medical fitness as per merchant navy standards. Must clear IMU CET or other maritime entrance exams.",
        careerOpportunities:
          "Marine Engineer Officer, Chief Engineer, Ship Superintendent, Port Engineer, Marine Surveyor, Offshore Oil & Gas Engineer, Power Plant Engineer, Marine Equipment Manufacturer, Naval Architect (with further studies), Maritime Safety Inspector, Shipyard Manager",
        fees: "₹2-8 lakhs per year (Government institutes: ₹2-4L, Private: ₹4-8L)",
        syllabus:
          "Marine Diesel Engines, Steam Engineering, Naval Architecture, Thermodynamics, Fluid Mechanics, Marine Electrical Systems, Refrigeration & Air Conditioning, Ship Auxiliary Machinery, Control Engineering, Workshop Technology, Marine Engineering Drawing, Safety & Pollution Prevention, Automation Systems, Ship Maintenance",
      },
      {
        name: "B.Tech Aerospace / Aeronautical",
        short: "Aircraft tech.",
        fullDescription:
          "Bachelor of Technology in Aerospace/Aeronautical Engineering is an advanced engineering program focused on the design, development, testing, and maintenance of aircraft, spacecraft, satellites, and missiles. Students learn about aerodynamics, propulsion systems, flight mechanics, avionics, and aerospace materials. The program combines theoretical knowledge with practical applications, preparing engineers to work on cutting-edge aviation and space technology projects.",
        duration: "4 years",
        eligibility:
          "10+2 with Physics, Chemistry and Mathematics. Minimum 75% marks (varies by institution). Qualified JEE Main/Advanced or state engineering entrance exams. Strong mathematical and analytical skills required.",
        careerOpportunities:
          "Aerospace Engineer, Aircraft Design Engineer, Flight Test Engineer, Propulsion Engineer, Avionics Engineer, Maintenance Engineer, Aerodynamicist, Spacecraft Designer, Defense Research Scientist, CAD/CAM Engineer, Quality Assurance Engineer, Aviation Consultant, Drone Technology Specialist",
        fees: "₹1-5 lakhs per year (Government/IITs: ₹1-2.5L, Private: ₹2.5-5L)",
        syllabus:
          "Engineering Mechanics, Aerodynamics, Flight Mechanics, Aircraft Structures, Propulsion Systems, Aircraft Design, Avionics, Control Systems, Computational Fluid Dynamics, Aerospace Materials, Rocket Propulsion, Helicopter Engineering, Space Mechanics, Manufacturing Processes, Composite Materials, Wind Tunnel Testing",
      },
    ],
  },
  {
    key: "inter",
    label: "Interdisciplinary & Emerging",
    icon: <Brain className="w-5 h-5 text-violet-700" />,
    degrees: [
      {
        name: "B.Sc Cognitive Science / Neuroscience",
        short: "Brain & thinking.",
        fullDescription:
          "Bachelor of Science in Cognitive Science/Neuroscience is an interdisciplinary program that explores how the human brain works, how we think, learn, and process information. The course integrates psychology, neuroscience, computer science, linguistics, and philosophy to understand human cognition. Students study brain anatomy, neural mechanisms, artificial intelligence, and cognitive processes, preparing them for careers in research, healthcare, and technology.",
        duration: "3 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology/Mathematics. Minimum 50% marks. Some institutes prefer Biology background. Interest in psychology and research recommended.",
        careerOpportunities:
          "Cognitive Scientist, Neuroscience Researcher, Clinical Research Coordinator, Neuropsychologist (with further studies), AI/ML Specialist, UX/UI Researcher, Educational Psychologist, Pharmaceutical Research Analyst, Brain-Computer Interface Developer, Science Writer, Healthcare Data Analyst",
        fees: "₹1-4 lakhs per year (Government: ₹1-2L, Private: ₹2-4L)",
        syllabus:
          "Introduction to Cognitive Science, Neuroanatomy & Physiology, Psychology & Behavior, Computational Neuroscience, Perception & Attention, Memory & Learning, Language Processing, Artificial Intelligence, Research Methodology, Statistics, Brain Imaging Techniques, Cognitive Psychology, Philosophy of Mind, Neural Networks, Neuropsychology",
      },
      {
        name: "B.Sc Environmental Health",
        short: "Health + environment.",
        fullDescription:
          "Bachelor of Science in Environmental Health is a specialized program that examines the relationship between environmental factors and human health. Students learn to identify, assess, and manage environmental health hazards including air and water pollution, toxic substances, food safety, and occupational health risks. The course prepares professionals who can protect public health by ensuring safe living and working environments through policy, regulation, and community interventions.",
        duration: "3 years",
        eligibility:
          "10+2 with Physics, Chemistry, Biology. Minimum 50% marks. Biology and Chemistry background preferred. Interest in public health and environmental issues.",
        careerOpportunities:
          "Environmental Health Officer, Public Health Specialist, Industrial Hygienist, Water Quality Analyst, Food Safety Inspector, Occupational Health Specialist, Environmental Consultant, Pollution Control Officer, Health & Safety Manager, Community Health Worker, NGO Program Manager, Environmental Policy Analyst",
        fees: "₹50,000 - ₹2.5 lakhs per year (Government: ₹50K-1.5L, Private: ₹1.5-2.5L)",
        syllabus:
          "Environmental Health Sciences, Epidemiology, Public Health, Toxicology, Water & Wastewater Management, Air Quality Management, Food Safety & Hygiene, Occupational Health & Safety, Environmental Microbiology, Waste Management, Environmental Law & Policy, Biostatistics, Risk Assessment, Vector Control, Community Health, Environmental Monitoring",
      },
      {
        name: "B.Sc Biomedical Instrumentation",
        short: "Medical devices.",
        fullDescription:
          "Bachelor of Science in Biomedical Instrumentation is a specialized program combining biology, medicine, and engineering to design, develop, and maintain medical equipment and devices. Students learn about diagnostic machines, therapeutic equipment, patient monitoring systems, and medical imaging technology. The course prepares professionals who bridge healthcare and technology, ensuring medical devices function safely and effectively in hospitals and diagnostic centers.",
        duration: "3 years",
        eligibility:
          "10+2 with Physics, Chemistry, Mathematics/Biology. Minimum 50% marks. Strong interest in both electronics and healthcare. Basic computer knowledge beneficial.",
        careerOpportunities:
          "Biomedical Equipment Technician, Medical Device Engineer, Hospital Technical Manager, Clinical Engineer, Service Engineer (Medical Equipment), Quality Assurance Specialist, Research & Development Associate, Medical Equipment Sales Specialist, Regulatory Affairs Officer, Healthcare Technology Consultant, Diagnostic Center Supervisor",
        fees: "₹1-3.5 lakhs per year (Government: ₹1-2L, Private: ₹2-3.5L)",
        syllabus:
          "Human Anatomy & Physiology, Electronic Devices & Circuits, Medical Instrumentation, Biomedical Sensors & Transducers, Digital Electronics, Microprocessors, Diagnostic Equipment, Therapeutic Equipment, Medical Imaging Systems (X-ray, CT, MRI, Ultrasound), Patient Monitoring Systems, Biomaterials, Hospital Management, Medical Equipment Maintenance, Safety Standards & Regulations",
      },
      {
        name: "B.Sc Robotics (where offered)",
        short: "Robots basics.",
        fullDescription:
          "Bachelor of Science in Robotics is an emerging interdisciplinary program that covers the design, programming, and operation of robotic systems. Students learn mechanical design, electronics, programming, artificial intelligence, and automation. The course prepares graduates to work with industrial robots, autonomous vehicles, service robots, and intelligent machines. This field combines elements of mechanical engineering, computer science, and electronics to create smart automated systems.",
        duration: "3 years",
        eligibility:
          "10+2 with Physics, Mathematics and Chemistry/Computer Science. Minimum 50% marks. Strong programming aptitude and interest in automation. Computer Science background advantageous.",
        careerOpportunities:
          "Robotics Engineer, Automation Engineer, Robot Programmer, Mechatronics Specialist, Industrial Automation Specialist, AI/ML Engineer, Drone Technology Specialist, Manufacturing Engineer, Research Scientist, Product Development Engineer, Robotics Trainer, IoT Solutions Developer",
        fees: "₹1.5-4 lakhs per year (Government: ₹1.5-2.5L, Private: ₹2.5-4L)",
        syllabus:
          "Fundamentals of Robotics, Programming (Python, C++), Mechanical Systems, Electronics & Circuits, Sensors & Actuators, Microcontrollers & Embedded Systems, Robot Kinematics & Dynamics, Artificial Intelligence, Machine Learning, Computer Vision, Control Systems, Industrial Automation, Mobile Robotics, Robot Operating System (ROS), IoT Applications",
      },
      {
        name: "B.Sc Defence / Military Science",
        short: "Armed forces studies.",
        fullDescription:
          "Bachelor of Science in Defence/Military Science is a specialized program that prepares students for careers in the armed forces and defence sector. The course covers military history, strategy, defence technology, leadership, physical training, and national security. Students learn about warfare tactics, defence management, geopolitics, and military operations. This program is often offered through National Defence Academy (NDA), military colleges, or universities with defence affiliations, combining academic knowledge with military discipline.",
        duration: "3 years (Regular) / 4 years (at NDA with service academies)",
        eligibility:
          "10+2 with any stream. Minimum 50% marks. Age 16.5-19.5 years for NDA. Must qualify NDA exam (conducted by UPSC) or other defence entrance exams. Physical fitness standards as per armed forces. Indian citizenship required.",
        careerOpportunities:
          "Officer in Army/Navy/Air Force, Defence Analyst, Military Intelligence Officer, Defence Technology Specialist, Security Consultant, Paramilitary Forces Officer, Defence Research Scientist, Strategic Affairs Expert, Military Trainer, Veterans Affairs Officer, Defence Procurement Specialist, Security & Risk Management Consultant",
        fees: "₹0-2 lakhs per year (NDA/Military colleges: Fully funded/stipend provided, Private institutes: ₹1-2L)",
        syllabus:
          "Military History & Strategy, Defence Studies, National Security, Geopolitics & International Relations, Military Law, Leadership & Management, Physical Training & Combat Skills, Weapons & Ammunition, Defence Technology, Communication Systems, Tactical Operations, Map Reading & Navigation, Military Intelligence, Disaster Management, First Aid & Field Craft",
      },
    ],
  },
];
