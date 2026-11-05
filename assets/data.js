/* ALBAB ISLAMIC UNIVERSITY — DATA.JS
   Central configuration for all programmes, events, and dhikr data.
   Edit this file to update content across the site.
*/

/* ========== PROGRAMMES ========== */
window.PROGRAMMES = [
  {
    id: "quran",
    name: "Quran",
    arabicName: "الْقُرْآنُ الْكَرِيمُ",
    icon: "📖",
    summary: "The fountainhead of revelation. Deep dive into exegesis, structural rules, rhetorical miracles, historic context, and precise preservation methodology.",
    category: "Islamic Sciences",
    branches: ["Tafseer", "Uloom al-Qur'an", "Qira'at", "Hifz & Tajweed", "Qur'anic Arabic"],
    level: "Beginner to Advanced",
    duration: "Ongoing",
    mode: "Online & Hybrid",
    overview: "The fountainhead of revelation. Deep dive into exegesis, structural rules, rhetorical miracles, historic context, and precise preservation methodology.",
    who: "Anyone seeking deep understanding of the Quran and its sciences",
    outcomes: "Master Quranic interpretation, preservation, and application"
  },
  {
    id: "hadith",
    name: "Hadith",
    arabicName: "الْحَدِيثُ الشَّرِيفُ",
    icon: "💬",
    summary: "The prophetic path. Study the scientific principles of narrations, the critical biography of narrators, chain authenticity verification, and application.",
    category: "Islamic Sciences",
    branches: ["Mustalah of Hadith", "Ilm al-Rijal", "Sharh al-Hadith", "Takhrij", "Hadith Collections Study"],
    level: "Intermediate to Advanced",
    duration: "Ongoing",
    mode: "Online & Hybrid",
    overview: "The prophetic path. Study the scientific principles of narrations, the critical biography of narrators, chain authenticity verification, and application.",
    who: "Scholars and serious students of Islamic sciences",
    outcomes: "Learn hadith authentication and scholarly criticism"
  },
  {
    id: "fiqh",
    name: "Fiqh",
    arabicName: "الْفِقْهُ الْإِسْلَامِيُّ",
    icon: "⚖️",
    summary: "Islamic jurisprudence and systematic execution. Grasp legal principles, comparative school methods, contracts of modern commerce, and ethical decree generation.",
    category: "Islamic Sciences",
    branches: ["Usul al-Fiqh", "Comparative Fiqh", "Muamalat", "Ibadat", "Judiciary & Fatwa"],
    level: "Beginner to Advanced",
    duration: "Ongoing",
    mode: "Online & Hybrid",
    overview: "Islamic jurisprudence and systematic execution. Grasp legal principles, comparative school methods, contracts of modern commerce, and ethical decree generation.",
    who: "Anyone seeking Islamic legal knowledge and practical guidance",
    outcomes: "Understand Islamic law and apply it to modern contexts"
  },
  {
    id: "aqeedah",
    name: "Aqeedah",
    arabicName: "الْعَقِيدَةُ الْإِسْلَامِيَّةُ",
    icon: "🔮",
    summary: "Theological inquiry using rational discourse. Study classical and contemporary Islamic theology, addressing philosophical challenges to creed.",
    category: "Islamic Sciences",
    branches: ["Classical Kalam", "Aqeedah", "Islamic Metaphysics", "Divine Attributes", "Free Will & Predestination"],
    level: "Intermediate to Advanced",
    duration: "Ongoing",
    mode: "Online & Hybrid",
    overview: "Theological inquiry using rational discourse. Study classical and contemporary Islamic theology, addressing philosophical challenges to creed.",
    who: "Intellectually engaged students seeking theological depth",
    outcomes: "Develop sophisticated theological understanding"
  },
  {
    id: "logic",
    name: "Logic",
    arabicName: "الْمَنْطِقُ",
    icon: "🔟",
    summary: "The standard of sound reasoning. Master deductive synergistic systems, inductive research, formal notation of arguments, and identification of intellectual fallacies.",
    category: "Reasoning",
    branches: ["Deductive Logic", "Inductive Logic", "Symbolic Logic", "Informal Fallacies", "Critical Thinking"],
    level: "Intermediate to Advanced",
    duration: "Ongoing",
    mode: "Online & Hybrid",
    overview: "The standard of sound reasoning. Master deductive synergistic systems, inductive research, formal notation of arguments, and identification of intellectual fallacies.",
    who: "Students of philosophy and rigorous reasoning",
    outcomes: "Master logical reasoning and critical analysis"
  },
  {
    id: "philosophy",
    name: "Philosophy",
    arabicName: "الْفَلْسَفَةُ الْإِسْلَامِيَّةُ",
    icon: "◎",
    summary: "The analytical arena. Reconstruct core paradigms, evaluate theories of knowing, study classic morals, and critique secular political thought framework.",
    category: "Reasoning",
    branches: ["Metaphysics", "Epistemology", "Ethics", "Political Philosophy", "Philosophy of Religion"],
    level: "Advanced",
    duration: "Ongoing",
    mode: "Online & Hybrid",
    overview: "The analytical arena. Reconstruct core paradigms, evaluate theories of knowing, study classic morals, and critique secular political thought framework.",
    who: "Advanced students seeking philosophical rigor",
    outcomes: "Develop sophisticated philosophical analysis"
  },
  {
    id: "psychology",
    name: "Psychology",
    arabicName: "عِلْمُ النَّفْسِ الْإِسْلَامِيُّ",
    icon: "⊕",
    summary: "Theories of the Soul (Nafs) integrated with modern cognitive neuroscience and ACT models. Bridge classical Islamic psychology with contemporary research.",
    category: "Modern Studies",
    branches: ["Cognitive Psychology", "Behavioral Psychology", "Clinical Psychology", "Social Psychology", "Neuropsychology"],
    level: "Intermediate to Advanced",
    duration: "Ongoing",
    mode: "Online & Hybrid",
    overview: "Theories of the Soul (Nafs) integrated with modern cognitive neuroscience and ACT models. Bridge classical Islamic psychology with contemporary research.",
    who: "Healthcare professionals, counselors, and psychology students",
    outcomes: "Integrate Islamic and modern psychology"
  },
  {
    id: "challenges",
    name: "Challenges",
    arabicName: "التَّحَدِّيَاتُ الْمُعَاصِرَةُ",
    icon: "⚠️",
    summary: "Scholarly critique of contemporary ideologies. Undertake a rigorous, respectful academic breakdown of current sociopolitical and theological challenges.",
    category: "Modern Studies",
    branches: ["Atheism", "Liberalism", "Feminism", "Materialism", "Secularism"],
    level: "Advanced",
    duration: "Ongoing",
    mode: "Online & Hybrid",
    overview: "Scholarly critique of contemporary ideologies. Undertake a rigorous, respectful academic breakdown of current sociopolitical and theological challenges.",
    who: "Intellectually engaged students seeking critical engagement",
    outcomes: "Develop informed responses to modern ideologies"
  },
  {
    id: "modernity",
    name: "Modernity",
    arabicName: "الْحَدَاثَةُ",
    icon: "⚙️",
    summary: "Deconstruct the historical, philosophical, and social architectures of the modern epoch. Investigate secularization, post-structural models, and deep ethics of technology.",
    category: "Modern Studies",
    branches: ["Postmodernism Critique", "Sovereignty & State", "Secularization Thesis", "Technological Ethics", "Cultural Hegemony"],
    level: "Advanced",
    duration: "Ongoing",
    mode: "Online & Hybrid",
    overview: "Deconstruct the historical, philosophical, and social architectures of the modern epoch. Investigate secularization, post-structural models, and deep ethics of technology.",
    who: "Advanced scholars and intellectuals",
    outcomes: "Understand modernity and propose Islamic responses"
  },
  {
    id: "politics",
    name: "Politics",
    arabicName: "الْعِلْمُ السِّيَاسِيُّ",
    icon: "🏛️",
    summary: "Diplomatic systems, classical treaties, model sovereignty, and global modern affairs. Study governance through Islamic and comparative lenses.",
    category: "Humanities & Soul",
    branches: ["Political Theory", "Islamic Governance", "International Relations", "Geopolitics", "Public Administration"],
    level: "Intermediate to Advanced",
    duration: "Ongoing",
    mode: "Online & Hybrid",
    overview: "Diplomatic systems, classical treaties, model sovereignty, and global modern affairs. Study governance through Islamic and comparative lenses.",
    who: "Policy makers, students of governance, and civic leaders",
    outcomes: "Understand Islamic governance and modern politics"
  },
  {
    id: "history",
    name: "History",
    arabicName: "التَّارِيخُ الْإِسْلَامِيُّ",
    icon: "🕰️",
    summary: "Annalling historic cycles, political shifts, and global socio-religious evolutions. Understand causation, patterns, and lessons from Islamic civilization.",
    category: "Humanities & Soul",
    branches: ["Islamic History", "World History", "Ancient Civilizations", "Historiography", "Political History"],
    level: "Beginner to Intermediate",
    duration: "Ongoing",
    mode: "Online & Hybrid",
    overview: "Annalling historic cycles, political shifts, and global socio-religious evolutions. Understand causation, patterns, and lessons from Islamic civilization.",
    who: "History enthusiasts and students of civilization",
    outcomes: "Understand Islamic and world history"
  },
  {
    id: "economics",
    name: "Economic Studies",
    arabicName: "الاقْتِصَادُ الْإِسْلَامِيُّ",
    icon: "◉",
    summary: "Wealth distribution ethics, behavioral incentives, interest-free finance, and trade models. Study Islamic economics and modern economic theory comparatively.",
    category: "Humanities & Soul",
    branches: ["Islamic Economics", "Microeconomics", "Macroeconomics", "Behavioral Economics", "Finance & Trade"],
    level: "Intermediate to Advanced",
    duration: "Ongoing",
    mode: "Online & Hybrid",
    overview: "Wealth distribution ethics, behavioral incentives, interest-free finance, and trade models. Study Islamic economics and modern economic theory comparatively.",
    who: "Economists, business leaders, and finance professionals",
    outcomes: "Apply Islamic economics to modern challenges"
  },
  {
    id: "poetry",
    name: "Poetry",
    arabicName: "الشِّعْرُ الْإِسْلَامِيُّ",
    icon: "🍃",
    summary: "Soul of classical rhetoric, structural metrics, mystical couplets, and linguistic prose development. Study classical poetry across cultures.",
    category: "Humanities & Soul",
    branches: ["Arabic Poetry", "Urdu Poetry", "Persian Poetry", "Literary Criticism", "Spiritual Poetry"],
    level: "Beginner to Intermediate",
    duration: "Ongoing",
    mode: "Online & Hybrid",
    overview: "Soul of classical rhetoric, structural metrics, mystical couplets, and linguistic prose development. Study classical poetry across cultures.",
    who: "Literature lovers and language enthusiasts",
    outcomes: "Appreciate and analyze classical poetry"
  }
];

/* ========== DHIKR PHRASES WITH TIMER OPTIONS ========== */
window.DHIKR_PHRASES = [
  { phrase: "سُبْحَانَ اللَّهِ", transliteration: "SubhanAllah", meaning: "Glory be to Allah", color: "#e74c3c" },
  { phrase: "الْحَمْدُ لِلَّهِ", transliteration: "Alhamdulillah", meaning: "All praise to Allah", color: "#f39c12" },
  { phrase: "اللَّهُ أَكْبَرُ", transliteration: "Allahu Akbar", meaning: "Allah is the Greatest", color: "#27ae60" },
  { phrase: "لَا إِلَهَ إِلَّا اللَّهُ", transliteration: "La ilaha illallah", meaning: "There is no deity except Allah", color: "#2980b9" },
  { phrase: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", transliteration: "La hawla wa la quwwata illa billah", meaning: "There is no power except with Allah", color: "#8e44ad" },
  { phrase: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", transliteration: "Subhan'allahi wa bihamdihi", meaning: "Glory and praise to Allah", color: "#c0392b" },
  { phrase: "أَسْتَغْفِرُ اللَّهَ", transliteration: "Astaghfirullah", meaning: "I seek forgiveness from Allah", color: "#16a085" },
  { phrase: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ", transliteration: "Hasbunallahu wa ni'mal wakil", meaning: "Allah is sufficient for us and the best trustee", color: "#d35400" }
];

/* ========== DHIKR TIMER OPTIONS ========== */
window.DHIKR_TIMERS = [
  { duration: 60, label: "1 Minute", displayLabel: "1 min" },
  { duration: 180, label: "3 Minutes", displayLabel: "3 min" },
  { duration: 300, label: "5 Minutes", displayLabel: "5 min" }
];

/* ========== FIVE PILLARS DETAILED DATA ========== */
window.FIVE_PILLARS = [
  {
    id: "shahadah",
    name: "Shahadah",
    arabicName: "ٱلشَّهَادَةُ",
    englishName: "Declaration of Faith",
    icon: "📖",
    tagline: "Declaration of Faith",
    quote: "The formal entry into Islam and the absolute foundation of a Muslim\'s entire belief system.",
    rules: "One must recite the phrase aloud with total conviction and understanding of its weight.",
    steps: "Reciting \"La ilaha illallah, Muhammadur rasulullah\" (There is no deity except Allah, and Muhammad is the Messenger of Allah).",
    significance: "It marks the transition to living a life submitted to God. It is traditionally the first thing whispered into a newborn\'s ear and the ideal final words a person says before passing away.",
    scriptureProof: "Surah Muhammad 47:19"
  },
  {
    id: "salah",
    name: "Salah",
    arabicName: "ٱلصَّلَاةُ",
    englishName: "Prayer",
    icon: "⊙",
    tagline: "Sacred Commemoration",
    quote: "The systematic spiritual anchor repeating five times across the daily cosmic cycles.",
    rules: "Before praying, a person must perform Wudu (ritual washing with clean water). They must wear clean clothes, cover private areas appropriately, and face toward the Kaaba in Mecca.",
    steps: "The prayer consists of sets of physical standing, bowing, and prostration (Rak'ahs) combined with reciting chapters from the Quran.",
    significance: "Salah is a direct connection to Allah, a moment of reflection, and a foundation for righteous living. It disciplines the soul and reminds believers of their purpose.",
    scriptureProof: "The Five Obligatory Prayer Times:\nFajr: Performed at dawn, before sunrise.\nDhuhr: Performed just after noon, when the sun passes its highest point.\nAsr: Performed in the late afternoon.\nMaghrib: Performed immediately after sunset.\nIsha: Performed during the dark night hours."
  },
  {
    id: "zakat",
    name: "Zakat",
    arabicName: "ٱلزَّكَاةُ",
    englishName: "Almsgiving",
    icon: "⊟",
    tagline: "Purifying Alms",
    quote: "An elegant, systematic wealth redistribution mechanism built directly into core jurisprudence.",
    rules: "It is not calculated on personal income alone, but on accumulated personal wealth (such as gold, silver, savings accounts, or investments) that has been kept for a full lunar year. This wealth must cross a minimum threshold called the Nisab (the value of 87.48 grams of gold or 612.36 grams of silver).",
    steps: "If a Muslim qualifies, they calculate exactly 2.5% of their eligible stagnant wealth and distribute it directly to specified categories of needy people.",
    significance: "The Arabic word means \"purification,\" as it cleanse a believer\'s heart from greed and purifies the leftover wealth. It fosters social justice and equity within communities.",
    scriptureProof: "Surah Al-Baqarah 2:110"
  },
  {
    id: "sawm",
    name: "Sawm",
    arabicName: "ٱلصَّوْمُ",
    englishName: "Fasting",
    icon: "❤️",
    tagline: "Annual Intensive Masterclass",
    quote: "An annual intensive masterclass in cognitive self-regulation during the month of Ramadan.",
    rules: "Fasting is mandatory for every healthy, adult Muslim during the entire 9th lunar month of the Islamic calendar (Ramadan). Children, travelers, the sick, the elderly, pregnant or menstruating women, and those with legitimate hardship are exempt and can make up missed fasts later.",
    steps: "Believers must completely abstain from all food, liquids, smoking, and intimate relations from the first light of dawn (Fajr) to the exact moment of sunset (Maghrib).",
    significance: "By denying the physical body its basic necessities, a person learns empathy for the poor and redirects their focus entirely to prayer, Quran reading, and charity.",
    scriptureProof: "Surah Al-Baqarah 2:183: \"O you who believe, fasting is prescribed for you as it was prescribed for those before you, that you might become conscious of Allah.\""
  },
  {
    id: "hajj",
    name: "Hajj",
    arabicName: "ٱلْحَجُّ",
    englishName: "Pilgrimage",
    icon: "🕋",
    tagline: "Ultimate Transformative Convergence",
    quote: "The ultimate, transformative convergence of global humanity in the footsteps of prophets.",
    rules: "It is required only once in a lifetime, and only for adults who possess the physical health and sufficient independent funds to complete the journey without leaving their families in debt.",
    steps: "Pilgrims travel to Mecca during the 12th month of the Islamic calendar (Dhul-Hijjah). They put on identical, simple white pieces of unstitched cloth (Ihram) to remove any social classes or wealth status. Over five days, they perform a series of unified rituals, including walking seven times around the Kaaba (Tawaf), standing in prayer at Mount Arafat, and symbolically throwing pebbles at the Jamarat (the stoning of evil thoughts and impulses).",
    significance: "Completing a sincere Hajj successfully wipes clean a person\'s life history of mistakes, leaving them as spiritually pure as a newborn child.",
    scriptureProof: "The standing at Arafat is the climax: the spiritual moment when millions stand together in one open valley, equal before their Creator, imploring for forgiveness and divine mercy."
  }
];

/* ========== EVENTS ========== */
window.EVENTS = [
  {
    title: "Failed Parenting: Causes, Consequences and the Way Forward",
    date: "2026-11-05",
    time: "10:00 AM–2:00 PM",
    venue: "GRSM School, Sangram Bata, Kishtwar",
    speaker: "Adnan Al Farooq",
    description: "Guest speaker session on parenting challenges and Islamic approaches."
  },
  {
    title: "Female Personality Development",
    date: "2026-10-15",
    time: "TBD",
    venue: "Online",
    speaker: "TBD",
    description: "New course: Women's development through the lives of women in Islamic history. Women only."
  },
  {
    title: "The Awareness Movement",
    date: "2026-09-01",
    time: "Ongoing",
    venue: "Multiple",
    speaker: "Adnan Al Farooq",
    description: "Educational & social initiative by the founder."
  }
];
