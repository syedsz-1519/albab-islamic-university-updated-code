/* ALBAB ISLAMIC UNIVERSITY — DATA.JS
   Central configuration for all programmes, events, and hadith data.
   Edit this file to update content across the site.
*/

/* ========== PROGRAMMES ========== */
const PROGRAMMES = [
  {
    id: "quran",
    name: "Quran and Tafsir",
    summary: "Study of the Quran through classical and contemporary tafsir.",
    category: "Islamic Sciences",
    branches: [
      "TODO: Branch 1",
      "TODO: Branch 2",
      "TODO: Branch 3",
      "TODO: Branch 4",
      "TODO: Branch 5"
    ],
    level: "TODO: Level",
    duration: "TODO: Duration",
    mode: "TODO: Mode",
    overview: "TODO: Full overview text",
    who: "TODO: Who it is for",
    outcomes: "TODO: Learning outcomes"
  },
  {
    id: "hadith",
    name: "Hadith",
    summary: "The prophetic path: authentication, narrators, commentary, chain analysis, and classical collections.",
    category: "Islamic Sciences",
    branches: [
      "Mustalah of Hadith",
      "Ilm al-Rijal",
      "Sharh al-Hadith",
      "Takhrij",
      "Hadith Collections Study"
    ],
    level: "TODO: Level",
    duration: "TODO: Duration",
    mode: "TODO: Mode",
    overview: "A comprehensive study of the science of hadith covering authentication methodologies and classical scholarship.",
    who: "TODO: Who it is for",
    outcomes: "TODO: Learning outcomes"
  },
  {
    id: "fiqh",
    name: "Fiqh",
    summary: "Islamic jurisprudence: principles, schools of law, and application to modern contexts.",
    category: "Islamic Sciences",
    branches: [
      "Usul al-Fiqh",
      "Comparative Fiqh",
      "Muamalat",
      "Ibadat",
      "Judiciary & Fatwa"
    ],
    level: "TODO: Level",
    duration: "TODO: Duration",
    mode: "TODO: Mode",
    overview: "Study of Islamic legal methodology and its application across different schools of jurisprudence.",
    who: "TODO: Who it is for",
    outcomes: "TODO: Learning outcomes"
  },
  {
    id: "kalam",
    name: "Kalam (Dialectic Theology)",
    summary: "Classical and contemporary Islamic theology through rational discourse.",
    category: "Islamic Sciences",
    branches: [
      "TODO: Branch 1",
      "TODO: Branch 2",
      "TODO: Branch 3",
      "TODO: Branch 4",
      "TODO: Branch 5"
    ],
    level: "TODO: Level",
    duration: "TODO: Duration",
    mode: "TODO: Mode",
    overview: "TODO: Full overview text",
    who: "TODO: Who it is for",
    outcomes: "TODO: Learning outcomes"
  },
  {
    id: "muamalat",
    name: "Mu'amalat and Civic Ethics",
    summary: "Islamic economics, social ethics, and governance in contemporary societies.",
    category: "Islamic Sciences",
    branches: [
      "TODO: Branch 1",
      "TODO: Branch 2",
      "TODO: Branch 3",
      "TODO: Branch 4",
      "TODO: Branch 5"
    ],
    level: "TODO: Level",
    duration: "TODO: Duration",
    mode: "TODO: Mode",
    overview: "TODO: Full overview text",
    who: "TODO: Who it is for",
    outcomes: "TODO: Learning outcomes"
  },
  {
    id: "logic",
    name: "Logic",
    summary: "Deductive, inductive, and symbolic reasoning applied to philosophical and theological inquiry.",
    category: "Reasoning",
    branches: [
      "Deductive Logic",
      "Inductive Logic",
      "Symbolic Logic",
      "Informal Fallacies",
      "Critical Thinking"
    ],
    level: "TODO: Level",
    duration: "TODO: Duration",
    mode: "TODO: Mode",
    overview: "Comprehensive study of logical frameworks and their application to Islamic and contemporary thought.",
    who: "TODO: Who it is for",
    outcomes: "TODO: Learning outcomes"
  },
  {
    id: "philosophy",
    name: "Philosophy",
    summary: "Metaphysics, epistemology, ethics, and their intersection with Islamic thought.",
    category: "Reasoning",
    branches: [
      "Metaphysics",
      "Epistemology",
      "Ethics",
      "Political Philosophy",
      "Philosophy of Religion"
    ],
    level: "TODO: Level",
    duration: "TODO: Duration",
    mode: "TODO: Mode",
    overview: "Exploration of foundational philosophical questions through Islamic and Western perspectives.",
    who: "TODO: Who it is for",
    outcomes: "TODO: Learning outcomes"
  },
  {
    id: "psychology",
    name: "Psychology",
    summary: "The human mind and behaviour: cognitive, clinical, and neurobiological approaches aligned with Islamic guidance.",
    category: "Modern Studies",
    branches: [
      "Cognitive Psychology",
      "Behavioral Psychology",
      "Clinical Psychology",
      "Social Psychology",
      "Neuropsychology"
    ],
    level: "TODO: Level",
    duration: "TODO: Duration",
    mode: "TODO: Mode",
    overview: "Integration of contemporary psychological science with Islamic understanding of the human nafs (self).",
    who: "TODO: Who it is for",
    outcomes: "TODO: Learning outcomes"
  },
  {
    id: "challenges",
    name: "Challenges",
    summary: "Respectful academic critique of contemporary ideologies and worldviews.",
    category: "Modern Studies",
    branches: [
      "Atheism",
      "Liberalism",
      "Feminism",
      "Materialism",
      "Secularism"
    ],
    level: "TODO: Level",
    duration: "TODO: Duration",
    mode: "TODO: Mode",
    overview: "Rigorous, respectful engagement with ideological systems and their assumptions.",
    who: "TODO: Who it is for",
    outcomes: "TODO: Learning outcomes"
  },
  {
    id: "modernity",
    name: "Modernity",
    summary: "History and critique of modern thought: technology, politics, culture, and their reshaping of belief.",
    category: "Modern Studies",
    branches: [
      "Postmodernism Critique",
      "Sovereignty & State",
      "Secularization Thesis",
      "Technological Ethics",
      "Cultural Hegemony"
    ],
    level: "TODO: Level",
    duration: "TODO: Duration",
    mode: "TODO: Mode",
    overview: "Analysis of how modernity has transformed society, knowledge, and religious life.",
    who: "TODO: Who it is for",
    outcomes: "TODO: Learning outcomes"
  },
  {
    id: "politics",
    name: "Politics",
    summary: "Political theory, governance, and the application of Islamic principles to collective decision-making.",
    category: "Humanities",
    branches: [
      "Political Theory",
      "Islamic Governance",
      "International Relations",
      "Geopolitics",
      "Public Administration"
    ],
    level: "TODO: Level",
    duration: "TODO: Duration",
    mode: "TODO: Mode",
    overview: "Examination of political structures, Islamic governance models, and contemporary geopolitics.",
    who: "TODO: Who it is for",
    outcomes: "TODO: Learning outcomes"
  },
  {
    id: "history",
    name: "History",
    summary: "Islamic, world, and ancient history; historiographical method and political history.",
    category: "Humanities",
    branches: [
      "Islamic History",
      "World History",
      "Ancient Civilizations",
      "Historiography",
      "Political History"
    ],
    level: "TODO: Level",
    duration: "TODO: Duration",
    mode: "TODO: Mode",
    overview: "Study of past societies, ideas, and events with attention to historical methodology.",
    who: "TODO: Who it is for",
    outcomes: "TODO: Learning outcomes"
  },
  {
    id: "economics",
    name: "Economic Studies",
    summary: "Islamic and modern economics: markets, trade, finance, and the ethics of wealth.",
    category: "Humanities",
    branches: [
      "Islamic Economics",
      "Microeconomics",
      "Macroeconomics",
      "Behavioral Economics",
      "Finance & Trade"
    ],
    level: "TODO: Level",
    duration: "TODO: Duration",
    mode: "TODO: Mode",
    overview: "Integration of Islamic economic principles with contemporary economic theory and practice.",
    who: "TODO: Who it is for",
    outcomes: "TODO: Learning outcomes"
  },
  {
    id: "poetry",
    name: "Poetry",
    summary: "Arabic, Urdu, and Persian poetry: literary criticism and spiritual analysis.",
    category: "Humanities",
    branches: [
      "Arabic Poetry",
      "Urdu Poetry",
      "Persian Poetry",
      "Literary Criticism",
      "Spiritual Poetry"
    ],
    level: "TODO: Level",
    duration: "TODO: Duration",
    mode: "TODO: Mode",
    overview: "Exploration of poetic traditions across Islamic cultures and their spiritual dimensions.",
    who: "TODO: Who it is for",
    outcomes: "TODO: Learning outcomes"
  }
];

/* ========== EVENTS ========== */
const EVENTS = [
  {
    id: "failed-parenting",
    title: "Failed Parenting: Causes, Consequences and the Way Forward",
    date: new Date("2026-11-05"),
    startTime: "10:00 AM",
    endTime: "02:00 PM",
    venue: "GRSM School, Sangram Bata, Kishtwar",
    description: "Annual programme with guest speaker Adnan Al Farooq.",
    type: "workshop",
    featured: true
  },
  {
    id: "female-dev",
    title: "Female Personality Development",
    date: new Date("2026-10-15"),
    startTime: null,
    endTime: null,
    venue: null,
    description: "A new course on character and confidence, taught through the lives of the women of Islamic history. Women only.",
    type: "course",
    featured: true
  },
  {
    id: "awareness",
    title: "The Awareness Movement",
    date: new Date("2025-01-01"), // Ongoing: set to past date
    startTime: null,
    endTime: null,
    venue: null,
    description: "An educational and social initiative by Adnan Al Farooq, reaching students and families with research-based talks.",
    type: "ongoing",
    featured: true
  }
];

/* ========== FIVE PILLARS ========== */
const FIVE_PILLARS = [
  {
    name: "Shahadah",
    arabic: "الشهادة",
    rules: "The testimony of faith: La ilaha illallah Muhammad rasulallah. No god but Allah; Muhammad is the messenger of Allah.",
    steps: "Belief in the heart, profession with the tongue, acceptance in the mind. No conditions or rituals.",
    significance: "The foundation of Islam. The entry point to the faith and the source of all other practices.",
    proof: "Surah Muhammad 47:19"
  },
  {
    name: "Salah",
    arabic: "الصلاة",
    rules: "Obligatory ritual prayer performed five times a day, facing the Kaaba, with purification (wudu).",
    steps: "Fajr (dawn, before sunrise), Dhuhr (just after noon), Asr (late afternoon), Maghrib (immediately after sunset), Isha (dark night). Each prayer has specific units (rakat) and movements.",
    significance: "The spiritual pillar: direct connection to Allah, discipline, and remembrance throughout the day.",
    proof: "TODO: Proof verse"
  },
  {
    name: "Zakat",
    arabic: "الزكاة",
    rules: "Charitable obligation of 2.5% on wealth held for a full lunar year above the Nisab threshold (87.48g of gold or 612.36g of silver).",
    steps: "Calculate eligible wealth (gold, silver, cash, merchandise). Calculate 2.5%. Give to eight categories of recipients.",
    significance: "Purification of wealth, support for the poor, and building community bonds.",
    proof: "TODO: Proof verse"
  },
  {
    name: "Sawm",
    arabic: "الصوم",
    rules: "Fasting during the month of Ramadan from dawn to sunset. Abstaining from food, drink, and marital relations.",
    steps: "Begin each day with the intention (niyyah). Fast from Fajr until sunset. Exemptions: children, travelers, sick, elderly, pregnant or menstruating women (may make up later).",
    significance: "Self-discipline, empathy for the poor, spiritual purification, and heightened God-consciousness.",
    proof: "Surah Al-Baqarah 2:183"
  },
  {
    name: "Hajj",
    arabic: "الحج",
    rules: "The pilgrimage to Mecca, obligatory once in a lifetime for those who are physically and financially able.",
    steps: "Performed in Dhul-Hijjah (12th Islamic month). Enter Ihram (pilgrim's state). Perform Tawaf (circumambulation of the Kaaba), Sa'i (walking between Safa and Marwa), stand at Arafat, throw pebbles at Mina, offer sacrifice.",
    significance: "The greatest gathering of Muslims. Submission to Allah, unity of the ummah, and commemoration of Ibrahim's sacrifice.",
    proof: "TODO: Proof verse"
  }
];

/* ========== HADITH DATABASE ========== */
const HADITH_DATA = [
  {
    id: "ilm-001",
    arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
    translation: "Seeking knowledge is an obligation upon every Muslim.",
    source: "Sunan Ibn Majah",
    hadithNumber: "224",
    grading: "Graded Sahih by al-Albani",
    narrator: "Anas ibn Malik",
    topic: "Seeking Knowledge"
  }
  /* TODO: Add more hadith entries following the same format */
];

/* ========== SCHOLASTIC HUBS (for Celestial Globe) ========== */
const SCHOLASTIC_HUBS = [
  {
    id: "medina",
    name: "Medina",
    region: "Arabian Peninsula",
    facts: [
      "TODO: Historical fact 1 (to be verified by academic council)",
      "TODO: Historical fact 2 (to be verified by academic council)",
      "TODO: Historical fact 3 (to be verified by academic council)"
    ]
  },
  {
    id: "bukhara",
    name: "Bukhara",
    region: "Central Asia",
    facts: [
      "TODO: Historical fact 1 (to be verified by academic council)",
      "TODO: Historical fact 2 (to be verified by academic council)",
      "TODO: Historical fact 3 (to be verified by academic council)"
    ]
  },
  {
    id: "baghdad",
    name: "Baghdad",
    region: "Iraq",
    facts: [
      "TODO: Historical fact 1 (to be verified by academic council)",
      "TODO: Historical fact 2 (to be verified by academic council)",
      "TODO: Historical fact 3 (to be verified by academic council)"
    ]
  },
  {
    id: "cairo",
    name: "Cairo",
    region: "Egypt",
    facts: [
      "TODO: Historical fact 1 (to be verified by academic council)",
      "TODO: Historical fact 2 (to be verified by academic council)",
      "TODO: Historical fact 3 (to be verified by academic council)"
    ]
  },
  {
    id: "fez",
    name: "Fez",
    region: "Morocco",
    facts: [
      "TODO: Historical fact 1 (to be verified by academic council)",
      "TODO: Historical fact 2 (to be verified by academic council)",
      "TODO: Historical fact 3 (to be verified by academic council)"
    ]
  },
  {
    id: "cordoba",
    name: "Córdoba",
    region: "Al-Andalus (Spain)",
    facts: [
      "TODO: Historical fact 1 (to be verified by academic council)",
      "TODO: Historical fact 2 (to be verified by academic council)",
      "TODO: Historical fact 3 (to be verified by academic council)"
    ]
  }
];

/* ========== DHIKR DATA ========== */
const DHIKR_PHRASES = [
  { id: "subhanallah", text: "Subhan'Allah", meaning: "Glory be to Allah", arabic: "سُبْحَانَ اللَّهِ" },
  { id: "alhamdulillah", text: "Alhamdulillah", meaning: "All praise is due to Allah", arabic: "الْحَمْدُ لِلَّهِ" },
  { id: "allahuakbar", text: "Allahu Akbar", meaning: "Allah is the Greatest", arabic: "اللَّهُ أَكْبَرُ" },
  { id: "la-ilaha", text: "La ilaha illallah", meaning: "There is no god but Allah", arabic: "لَا إِلَاهَ إِلَّا اللَّهُ" }
];

/* ========== ADHKAR (Morning/Evening Remembrances) ========== */
// TODO: Add verified morning and evening adhkar with proper sources
const ADHKAR = {
  morning: [],
  evening: []
};

/* ========== EXPORT ========== */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PROGRAMMES,
    EVENTS,
    FIVE_PILLARS,
    HADITH_DATA,
    SCHOLASTIC_HUBS,
    DHIKR_PHRASES,
    ADHKAR
  };
}
