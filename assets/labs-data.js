/* INTERACTIVE LABS & MODULES DATA */

const LABS = [
  /* ========== LIVE MODULES ========== */
  {
    id: "hadith-library",
    title: "Prophetic Hadith Library",
    arabic: "مكتبة الحديث النبوي",
    category: "Divine tradition",
    summary: "Explore authenticated hadith collections: 40 Hadith of an-Nawawi, the eight major books, and scholarly commentary.",
    tags: ["Hadith", "Collections", "Verified"],
    status: "live",
    link: "/hadith.html",
    description: "Access the full Hadith Library with advanced search, topic filtering, and verification status for every entry."
  },
  {
    id: "five-pillars",
    title: "Five Pillars Foundation",
    arabic: "أركان الإسلام",
    category: "Theology and logic",
    summary: "Interactive tabs on Shahadah, Salah, Zakat, Sawm, and Hajj with rules, steps, and spiritual significance.",
    tags: ["Pillars", "Practice", "Islamic foundation"],
    status: "live",
    link: "/explore.html#pillars",
    description: "Learn the five pillars of Islam with detailed breakdowns of rules, practical implementation, and Quranic proofs."
  },
  {
    id: "dhikr-checklist",
    title: "Dhikr Checklist",
    arabic: "تسبيح وتهليل",
    category: "Spiritual studies",
    summary: "1-minute timer with tap-to-count progress for daily remembrances (SubhanAllah, Alhamdulillah, Allahu Akbar, etc.).",
    tags: ["Dhikr", "Spiritual practice", "Daily"],
    status: "live",
    link: "/explore.html#dhikr",
    description: "A mindful practice tool for daily Islamic remembrances with local storage of your counts."
  },
  {
    id: "celestial-globe",
    title: "Celestial Globe",
    arabic: "الكرة السماوية",
    category: "Divine tradition",
    summary: "Interactive 3D map of six scholastic hubs: Medina, Bukhara, Baghdad, Cairo, Fez, and Córdoba. Drag to rotate.",
    tags: ["Geography", "History", "Scholarship"],
    status: "live",
    link: "/explore.html#globe",
    description: "Explore the historical centers of Islamic learning with verified facts about their scholarly contributions."
  },
  {
    id: "quiz",
    title: "Interactive Quiz",
    arabic: "اختبار تفاعلي",
    category: "Theology and logic",
    summary: "Client-side quizzes on Islamic topics, fiqh scenarios, and Quranic knowledge from verified sources.",
    tags: ["Learning", "Assessment", "Interactive"],
    status: "live",
    link: "/explore.html#quiz",
    description: "Test your knowledge with curated quizzes covering Islamic sciences and contemporary ethics."
  },
  
  /* ========== COMING SOON ========== */
  {
    id: "quran-explorer",
    title: "Qur'an Interactive Explorer",
    arabic: "مستكشف القرآن التفاعلي",
    category: "Divine tradition",
    summary: "Search, read, and explore Quranic verses with tafsir notes, word-by-word analysis, and thematic connections.",
    tags: ["Quran", "Tafsir", "Search"],
    status: "coming-soon",
    link: "/contact?subject=Quran%20Explorer",
    description: "A comprehensive Quranic study tool with annotations and scholarly commentary."
  },
  {
    id: "debate-arena",
    title: "Scholarly Debate Arena",
    arabic: "ساحة المناظرة",
    category: "Theology and logic",
    summary: "Structured debates on Islamic jurisprudence, theology, and contemporary issues. Reasoned arguments only.",
    tags: ["Debate", "Fiqh", "Logic"],
    status: "coming-soon",
    link: "/contact?subject=Debate%20Arena",
    description: "Engage in respectful scholarly discourse on Islamic and ethical topics."
  },
  {
    id: "fiqh-rulings",
    title: "Fiqh Jurisprudence Rulings",
    arabic: "أحكام الفقه الإسلامي",
    category: "Theology and logic",
    summary: "Query-based jurisprudential guidance across the four schools (Hanafi, Maliki, Shafi'i, Hanbali).",
    tags: ["Fiqh", "Jurisprudence", "Schools"],
    status: "coming-soon",
    link: "/contact?subject=Fiqh%20Rulings",
    description: "Comparative fiqh guidance from authentic sources and classical scholarship."
  },
  {
    id: "aqeedah-firewall",
    title: "Aqeedah Dialectical Firewall",
    arabic: "حصن العقيدة",
    category: "Theology and logic",
    summary: "Defense and clarification of core Islamic beliefs (Aqeedah) against contemporary misunderstandings.",
    tags: ["Aqeedah", "Creed", "Defense"],
    status: "coming-soon",
    link: "/contact?subject=Aqeedah%20Firewall",
    description: "Intellectual grounding in Islamic theology and responses to philosophical challenges."
  },
  {
    id: "mantiq-tutor",
    title: "Mantiq Classical Logic Tutor",
    arabic: "معلم المنطق الإسلامي",
    category: "Theology and logic",
    summary: "Learn classical Islamic logic (mantiq): syllogisms, fallacies, and rigorous reasoning traditions.",
    tags: ["Logic", "Philosophy", "Classical"],
    status: "coming-soon",
    link: "/contact?subject=Classical%20Logic%20Tutor",
    description: "Master the art of Islamic logical reasoning and philosophical argumentation."
  },
  {
    id: "waswas-clinic",
    title: "Waswas Cognitive Clinic",
    arabic: "عيادة الوسواس",
    category: "Spiritual studies",
    summary: "Educational modules on managing intrusive thoughts and anxiety using Islamic guidance and ACT principles.",
    tags: ["Mental health", "Education", "Spiritual"],
    status: "coming-soon",
    link: "/contact?subject=Waswas%20Clinic",
    description: "Evidence-based Islamic approaches to managing obsessive thoughts and spiritual anxiety. Educational only; not a substitute for professional therapy."
  },
  {
    id: "nafs-assessment",
    title: "Spiritual Nafs Assessment",
    arabic: "تقييم النفس الروحي",
    category: "Spiritual studies",
    summary: "Self-reflection module on the spiritual station of the nafs (self) and pathways to spiritual growth.",
    tags: ["Nafs", "Spiritual", "Self-reflection"],
    status: "coming-soon",
    link: "/contact?subject=Nafs%20Assessment",
    description: "An educational tool for reflecting on one's spiritual journey through Islamic frameworks."
  },
  {
    id: "maqasid-analyzer",
    title: "Maqasid Ethical Analyzer",
    arabic: "محلل مقاصد الشريعة",
    category: "Ethics",
    summary: "Analyze contemporary issues through the lens of Maqasid as-Sharia (Objectives of Islamic Law).",
    tags: ["Ethics", "Maqasid", "Contemporary"],
    status: "coming-soon",
    link: "/contact?subject=Maqasid%20Analyzer",
    description: "Apply the classical framework of Maqasid to modern ethical dilemmas and policy questions."
  }
];

const LAB_CATEGORIES = [
  { id: "all", label: "All", count: LABS.length },
  { id: "divine-tradition", label: "Divine tradition", count: LABS.filter(l => l.category === "Divine tradition").length },
  { id: "theology-logic", label: "Theology and logic", count: LABS.filter(l => l.category === "Theology and logic").length },
  { id: "spiritual-studies", label: "Spiritual studies", count: LABS.filter(l => l.category === "Spiritual studies").length },
  { id: "ethics", label: "Ethics", count: LABS.filter(l => l.category === "Ethics").length }
];

/* FIVE PILLARS DATA (for /explore.html#pillars) */
const FIVE_PILLARS_EXPLORE = [
  {
    name: "Shahadah",
    arabic: "الشهادة",
    rules: "The testimony of faith: 'La ilaha illallah Muhammad rasulallah' (There is no god but Allah; Muhammad is the messenger of Allah).",
    steps: "Belief in the heart, profession with the tongue, acceptance with the mind. No rituals or conditions required.",
    significance: "The foundation and entry point to Islam. Upon sincere utterance, one becomes Muslim.",
    proof: "Surah Muhammad 47:19"
  },
  {
    name: "Salah",
    arabic: "الصلاة",
    rules: "Five obligatory prayers daily, facing the Kaaba (Qibla), performed with purification (wudu).",
    steps: "Fajr (before sunrise), Dhuhr (after noon), Asr (late afternoon), Maghrib (immediately after sunset), Isha (night). Each consists of specific units (rakat) and movements.",
    significance: "Direct communication with Allah. Establishes discipline, remembrance, and spiritual connection throughout the day.",
    proof: "Surah An-Nisa 4:103"
  },
  {
    name: "Zakat",
    arabic: "الزكاة",
    rules: "Alms tax of 2.5% on eligible wealth held for a full lunar year above Nisab threshold (87.48g of gold or 612.36g of silver).",
    steps: "Calculate total eligible wealth, determine the Nisab threshold, calculate 2.5%, and distribute to eight categories of recipients.",
    significance: "Purification of wealth, support for the poor, and strengthening community bonds and social justice.",
    proof: "Surah At-Taubah 9:60"
  },
  {
    name: "Sawm",
    arabic: "الصوم",
    rules: "Fasting from dawn to sunset during Ramadan (the 9th Islamic month), abstaining from food, drink, and conjugal relations.",
    steps: "Form intention (niyyah) at night. Fast from Fajr (dawn) to Maghrib (sunset). Exemptions: young children, travelers, ill, elderly, pregnant or menstruating women (may make up fasts later).",
    significance: "Self-discipline, empathy for the poor, spiritual purification, and heightened God-consciousness during the month of revelation.",
    proof: "Surah Al-Baqarah 2:183-184"
  },
  {
    name: "Hajj",
    arabic: "الحج",
    rules: "The pilgrimage to Mecca, obligatory once in a lifetime for those physically and financially able.",
    steps: "Performed in Dhul-Hijjah (12th Islamic month). Enter Ihram (pilgrim's sacred state), perform Tawaf (circumambulation), Sa'i (walking between Safa and Marwa), stand at Arafat, throw pebbles at Mina, offer sacrifice.",
    significance: "The greatest gathering of Muslims worldwide. Represents submission, unity of the ummah, and commemoration of Prophet Ibrahim's sacrifice.",
    proof: "Surah Al-Hajj 22:27-29"
  }
];

/* DHIKR DATA */
const DHIKR_SESSION = [
  { id: "subhanallah", text: "Subhan'Allah", meaning: "Glory be to Allah", arabic: "سُبْحَانَ اللَّهِ", count: 33 },
  { id: "alhamdulillah", text: "Alhamdulillah", meaning: "All praise is due to Allah", arabic: "الْحَمْدُ لِلَّهِ", count: 33 },
  { id: "allahuakbar", text: "Allahu Akbar", meaning: "Allah is the Greatest", arabic: "اللَّهُ أَكْبَرُ", count: 33 },
  { id: "laila", text: "La ilaha illallah", meaning: "There is no god but Allah", arabic: "لَا إِلَاهَ إِلَّا اللَّهُ", count: null }
];

const QURAN_PROOF_DHIKR = "Surah Ar-Ra'd 13:28: 'Remember that the hearts find rest and assurance in the remembrance of Allah.'";

/* SCHOLASTIC HUBS FOR CELESTIAL GLOBE */
const SCHOLASTIC_HUBS = [
  {
    id: "medina",
    name: "Medina",
    arabic: "المدينة المنورة",
    region: "Arabian Peninsula",
    coordinates: [24.4672, 39.6068],
    facts: [
      "Served as the capital of the Islamic state under the Prophet Muhammad and his successors, establishing the foundations of Islamic governance and law.",
      "The University of Al-Madinah (Madrasat an-Nabi) was an informal center of learning where the Prophet's Companions studied Qur'an and Hadith.",
      "Home to scholars and jurists who preserved and transmitted the Qur'an, Hadith, and Islamic sciences throughout Islamic history."
    ]
  },
  {
    id: "bukhara",
    name: "Bukhara",
    arabic: "بخارى",
    region: "Central Asia (Modern-day Uzbekistan)",
    coordinates: [39.7751, 64.4151],
    facts: [
      "A major intellectual center in Central Asia, hosting renowned Islamic scholars and producing significant contributions to hadith science.",
      "Birthplace of Imam Muhammad al-Bukhari (256 AH), compiler of Sahih al-Bukhari, one of the most authentic collections of hadith.",
      "Known for its madrasas and libraries that attracted scholars from across the Islamic world to study Islamic sciences."
    ]
  },
  {
    id: "baghdad",
    name: "Baghdad",
    arabic: "بغداد",
    region: "Iraq",
    coordinates: [33.3128, 44.3615],
    facts: [
      "Founded by the Abbasid Caliph al-Mansur in 762 CE, becoming the largest city in the world and center of Islamic scholarship.",
      "Home to the House of Wisdom (Bayt al-Hikma), where scholars translated, preserved, and advanced knowledge in Islamic sciences, philosophy, and mathematics.",
      "A hub for legal scholarship, theology, hadith studies, and the development of Islamic jurisprudence across multiple schools."
    ]
  },
  {
    id: "cairo",
    name: "Cairo",
    arabic: "القاهرة",
    region: "Egypt",
    coordinates: [30.0444, 31.2357],
    facts: [
      "Became a major center of Islamic learning during the Mamluk era, hosting prestigious institutions for Islamic sciences.",
      "Home to Al-Azhar University (founded 970 CE), one of the oldest and most influential Islamic educational institutions in the world.",
      "Produced and attracted renowned scholars in hadith, fiqh, tafsir, and Islamic theology throughout medieval and modern periods."
    ]
  },
  {
    id: "fez",
    name: "Fez",
    arabic: "فاس",
    region: "Morocco",
    coordinates: [34.0333, -5.0],
    facts: [
      "Emerged as a leading center of Islamic learning in the Maghreb, particularly under the Marinid dynasty.",
      "Home to the University of Al-Qarawiyyin (founded 859 CE), one of the oldest continuously operating universities in the world.",
      "Produced notable scholars in Islamic jurisprudence, theology, hadith sciences, and contributed significantly to Maliki school of Islamic law."
    ]
  },
  {
    id: "cordoba",
    name: "Córdoba",
    arabic: "قرطبة",
    region: "Al-Andalus (Modern Spain)",
    coordinates: [37.8882, -4.7794],
    facts: [
      "Served as the capital of the Umayyad Caliphate in Al-Andalus and became a center of interfaith scholarship and intellectual exchange.",
      "Libraries and madrasas in Córdoba preserved and advanced knowledge in Islamic sciences, philosophy, mathematics, and medicine.",
      "Produced scholars who contributed to Islamic jurisprudence, particularly the Maliki and Zahiri schools, and influenced European Renaissance thought."
    ]
  }
];

/* SAMPLE QUIZ QUESTIONS (verified only) */
const QUIZ_QUESTIONS = [
  {
    id: "q1",
    question: "What is the first pillar of Islam?",
    arabic: "ما هو الركن الأول من أركان الإسلام؟",
    options: [
      "Salah (Prayer)",
      "Shahadah (Testimony of faith)",
      "Zakat (Alms)",
      "Hajj (Pilgrimage)"
    ],
    correct: 1,
    explanation: "The Shahadah (testimony of faith) is the first and foundational pillar. It establishes belief in Allah and in Muhammad as His messenger."
  },
  {
    id: "q2",
    question: "How many times daily are Muslims obligated to pray?",
    arabic: "كم عدد الصلوات المفروضة على المسلم في اليوم؟",
    options: [
      "Three times",
      "Four times",
      "Five times",
      "Six times"
    ],
    correct: 2,
    explanation: "Five prayers are obligatory: Fajr, Dhuhr, Asr, Maghrib, and Isha. This is established in the Qur'an and Sunnah."
  }
];
