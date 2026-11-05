// Interactive Labs Data
// 14 modules: 5 live, 9 coming-soon

window.LABS_DATA = {
  labs: [
    // LIVE LABS (5)
    {
      id: 'hadith-library',
      arabicTitle: 'مَكْتَبَةُ الْحَدِيثِ النَّبَوِيِّ',
      englishTitle: 'Prophetic Hadith Library',
      summary: 'Explore verified hadith collections from the six authentic books and scholarly commentary.',
      category: 'Divine tradition',
      tags: ['Hadith', 'Islamic sources', 'Scholarship'],
      status: 'live',
      link: '/hadith.html',
      description: 'Access the 40 Hadith of an-Nawawi, browse by collection (Bukhari, Muslim, Muwatta, Ahmad, Abu Dawud, Tirmidhi, Nasa\'i, Ibn Majah), search by topic with verification badges, and learn about the Four Imams.'
    },
    {
      id: 'five-pillars',
      arabicTitle: 'أَرْكَانُ الْإِسْلَامِ الْخَمْسَةُ',
      englishTitle: 'Five Pillars Foundation',
      summary: 'Understand the core practices of Islam through interactive tabs.',
      category: 'Divine tradition',
      tags: ['Pillars', 'Islamic practice', 'Foundations'],
      status: 'live',
      link: '/explore.html#pillars',
      description: 'Learn about Shahadah, Salah (five daily prayers), Zakat, Sawm (Ramadan fasting), and Hajj with rules, steps, spiritual significance, and Quranic proofs.'
    },
    {
      id: 'dhikr-checklist',
      arabicTitle: 'ذِكْرُ اللَّهِ',
      englishTitle: 'Dhikr Checklist',
      summary: 'Practice remembrance of Allah with a 1-minute timer and tap-to-count cards.',
      category: 'Spiritual studies',
      tags: ['Dhikr', 'Worship', 'Meditation'],
      status: 'live',
      link: '/explore.html#dhikr',
      description: 'Interactive dhikr counter with SubhanAllah, Alhamdulillah, Allahu Akbar, La ilaha illallah, and other praised phrases. Counts stored locally with localStorage.'
    },
    {
      id: 'celestial-globe',
      arabicTitle: 'الْكُرَةُ السَّمَاوِيَّةُ',
      englishTitle: 'Celestial Globe',
      summary: 'Interactive 3D map of 6 great scholastic hubs of Islamic history.',
      category: 'Divine tradition',
      tags: ['History', 'Geography', 'Scholarship'],
      status: 'live',
      link: '/explore.html#globe',
      description: 'Explore Medina, Bukhara, Baghdad, Cairo, Fez, and Cordoba—centers of Islamic learning. Drag to rotate, keyboard accessible, with historical facts about each hub.'
    },
    {
      id: 'interactive-quiz',
      arabicTitle: 'الِاخْتِبَارُ التَّفَاعُلِيُّ',
      englishTitle: 'Interactive Quiz',
      summary: 'Test your knowledge with verified Q&A on Islamic sciences.',
      category: 'Theology and logic',
      tags: ['Learning', 'Assessment', 'Knowledge'],
      status: 'live',
      link: '/explore.html#quiz',
      description: 'Answer questions on hadith, Quranic sciences, fiqh, and Islamic history. Real-time feedback, instant scoring, and explanations for each answer.'
    },

    // COMING SOON (9)
    {
      id: 'quran-explorer',
      arabicTitle: 'اسْتِكْشَافُ الْقُرْآنِ',
      englishTitle: 'Qur\'an Interactive Explorer',
      summary: 'Deep dive into Quranic verses with tafsir, historical context, and linguistic analysis.',
      category: 'Divine tradition',
      tags: ['Quran', 'Tafsir', 'Arabic linguistics'],
      status: 'coming-soon',
      link: null,
      description: 'Fully searchable Quranic explorer with translations, classical tafsir, verse cross-references, and contextual history.'
    },
    {
      id: 'debate-arena',
      arabicTitle: 'حَلَقَةُ الْمُنَاظَرَةِ',
      englishTitle: 'Scholarly Debate Arena',
      summary: 'Engage with historical and contemporary scholarly debates on Islamic jurisprudence.',
      category: 'Theology and logic',
      tags: ['Fiqh', 'Debate', 'Methodology'],
      status: 'coming-soon',
      link: null,
      description: 'Explore classical munazara (debates) between scholars, learn argumentative methodology, and understand the reasoning behind different juridical schools.'
    },
    {
      id: 'fiqh-rulings',
      arabicTitle: 'أَحْكَامُ الْفِقْهِ',
      englishTitle: 'Fiqh Jurisprudence Rulings',
      summary: 'Query Islamic jurisprudence with structured answers from the four schools.',
      category: 'Divine tradition',
      tags: ['Fiqh', 'Islamic law', 'Rulings'],
      status: 'coming-soon',
      link: null,
      description: 'Browse rulings across Hanafi, Maliki, Shafi\'i, and Hanbali schools. Understand the evidence (Quran, Sunnah, Qiyas) and reasoning for each fatwa.'
    },
    {
      id: 'aqeedah-firewall',
      arabicTitle: 'حِصْنُ الْعَقِيدَةِ',
      englishTitle: 'Aqeedah Dialectical Firewall',
      summary: 'Study Islamic creed with critiques of contemporary ideological challenges.',
      category: 'Theology and logic',
      tags: ['Aqeedah', 'Theology', 'Philosophy'],
      status: 'coming-soon',
      link: null,
      description: 'Understand Islamic creed (aqeedah) and learn how classical and contemporary scholars address challenges from materialism, secularism, atheism, and philosophical critique.'
    },
    {
      id: 'logic-tutor',
      arabicTitle: 'مُعَلِّمُ الْمَنْطِقِ',
      englishTitle: 'Mantiq Classical Logic Tutor',
      summary: 'Master deductive, inductive, and informal logic through Islamic and universal examples.',
      category: 'Theology and logic',
      tags: ['Logic', 'Reasoning', 'Philosophy'],
      status: 'coming-soon',
      link: null,
      description: 'Interactive lessons on syllogism, fallacies, argumentation, and critical thinking rooted in classical Islamic logical tradition.'
    },
    {
      id: 'waswas-clinic',
      arabicTitle: 'عِيَادَةُ الْوَسْوَاسِ',
      englishTitle: 'Waswas Cognitive Clinic',
      summary: 'Educational modules on intrusive thoughts and cognitive restructuring (not therapy).',
      category: 'Spiritual studies',
      tags: ['Mental health', 'Education', 'Psychology'],
      status: 'coming-soon',
      link: null,
      description: 'Educational resource on waswas (intrusive thoughts), cognitive behavioral techniques, Islamic coping strategies, and when to seek professional help. For educational purposes only.'
    },
    {
      id: 'nafs-assessment',
      arabicTitle: 'تَقْيِيمُ النَّفْسِ',
      englishTitle: 'Spiritual Nafs Assessment',
      summary: 'Educational self-reflection tool on the spiritual state of the soul.',
      category: 'Spiritual studies',
      tags: ['Nafs', 'Self-reflection', 'Spirituality'],
      status: 'coming-soon',
      link: null,
      description: 'Guided educational reflection on the levels of nafs (self/soul) and stages of spiritual development based on classical Islamic psychology.'
    },
    {
      id: 'maqasid-analyzer',
      arabicTitle: 'مُحَلِّلُ الْمَقَاصِدِ',
      englishTitle: 'Maqasid Ethical Analyzer',
      summary: 'Understand the higher objectives (maqasid) of Islamic law and ethical decision-making.',
      category: 'Ethics',
      tags: ['Maqasid', 'Ethics', 'Islamic law'],
      status: 'coming-soon',
      link: null,
      description: 'Learn maqasid ash-shariah (objectives of Islamic law): preservation of religion, intellect, life, family, and wealth. Apply to ethical dilemmas.'
    },
    {
      id: 'poetry-explorer',
      arabicTitle: 'اسْتِكْشَافُ الشِّعْرِ',
      englishTitle: 'Classical Poetry Explorer',
      summary: 'Read, analyze, and interpret Arabic, Persian, and Urdu classical poetry.',
      category: 'Humanities',
      tags: ['Poetry', 'Literature', 'Culture'],
      status: 'coming-soon',
      link: null,
      description: 'Curated collection of classical poetry with literary analysis, historical context, and spiritual significance in Islamic civilization.'
    }
  ],

  categories: [
    'Divine tradition',
    'Theology and logic',
    'Spiritual studies',
    'Ethics',
    'Humanities'
  ],

  getLabsByCategory(category) {
    if (!category || category === 'All') return this.labs;
    return this.labs.filter(l => l.category === category);
  },

  search(query) {
    if (!query.trim()) return this.labs;
    const q = query.toLowerCase();
    return this.labs.filter(l =>
      l.englishTitle.toLowerCase().includes(q) ||
      l.arabicTitle.includes(q) ||
      l.summary.toLowerCase().includes(q) ||
      l.tags.some(t => t.toLowerCase().includes(q))
    );
  },

  filterAndSearch(category, query) {
    let results = this.getLabsByCategory(category);
    if (query.trim()) {
      results = results.filter(l =>
        l.englishTitle.toLowerCase().includes(query.toLowerCase()) ||
        l.arabicTitle.includes(query) ||
        l.summary.toLowerCase().includes(query.toLowerCase()) ||
        l.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
      );
    }
    return results;
  }
};
