/* SCROLL SPY INDICATOR — IntersectionObserver based */

const ScrollSpy = {
  sections: [],
  dots: [],
  progressRing: null,
  currentSection: 0,
  circumference: 0,
  
  init() {
    // Define sections and their labels
    this.sections = [
      { id: 'hero', label: 'Intro' },
      { id: 'focus', label: 'Focus areas' },
      { id: 'hadith-section', label: 'Hadith' },
      { id: 'programmes-preview', label: 'Programmes' },
      { id: 'founder-section', label: 'Founder' },
      { id: 'events', label: 'Contact' }
    ];
    
    // Create indicator markup
    this.createIndicator();
    
    // Setup intersection observer
    this.setupObserver();
    
    // Setup scroll progress
    this.setupScrollProgress();
    
    // Setup keyboard navigation
    this.setupKeyboard();
  },
  
  createIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    indicator.setAttribute('role', 'navigation');
    indicator.setAttribute('aria-label', 'Page sections');
    
    // Progress ring
    const progressHtml = `
      <button class="scroll-progress" onclick="ScrollSpy.scrollToTop()" title="Scroll to top" aria-label="Scroll to top">
        <svg class="scroll-progress-fill" width="40" height="40" style="position: absolute; width: 36px; height: 36px;">
          <circle cx="18" cy="18" r="16" fill="none" stroke="var(--line)" stroke-width="2" style="position: absolute;"/>
          <circle cx="18" cy="18" r="16" fill="none" stroke="var(--gold)" stroke-width="2" stroke-dasharray="100.5" stroke-dashoffset="100.5" style="transition: stroke-dashoffset 0.3s; position: absolute;" id="progressCircle"/>
        </svg>
      </button>
    `;
    
    // Dots track
    const trackHtml = `
      <div class="scroll-track" role="list">
        ${this.sections.map((s, i) => `
          <button class="scroll-dot ${i === 0 ? 'active' : ''}" 
                  data-section="${s.id}" 
                  title="${s.label}"
                  aria-label="${s.label} section"
                  role="listitem"
                  tabindex="${i === 0 ? '0' : '-1'}"
                  onclick="ScrollSpy.scrollToSection('${s.id}')">
          </button>
        `).join('')}
      </div>
    `;
    
    indicator.innerHTML = progressHtml + trackHtml;
    document.body.appendChild(indicator);
    
    this.progressRing = document.getElementById('progressCircle');
    this.dots = Array.from(indicator.querySelectorAll('.scroll-dot'));
  },
  
  setupObserver() {
    const options = {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: '-50% 0px -50% 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const index = this.sections.findIndex(s => s.id === sectionId);
          if (index !== -1) {
            this.setActiveSection(index);
          }
        }
      });
    }, options);
    
    // Observe all sections
    this.sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
  },
  
  setActiveSection(index) {
    this.currentSection = index;
    
    // Update dots
    this.dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
      dot.setAttribute('tabindex', i === index ? '0' : '-1');
    });
  },
  
  setupScrollProgress() {
    if (!this.progressRing) return;
    
    window.addEventListener('scroll', () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / docHeight) * 100;
      const offset = this.circumference - (progress / 100) * this.circumference;
      this.progressRing.style.strokeDashoffset = offset;
    });
    
    // Calculate circumference
    this.circumference = 2 * Math.PI * 16;
    this.progressRing.style.strokeDasharray = this.circumference;
  },
  
  setupKeyboard() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const next = Math.min(this.currentSection + 1, this.sections.length - 1);
        this.scrollToSection(this.sections[next].id);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = Math.max(this.currentSection - 1, 0);
        this.scrollToSection(this.sections[prev].id);
      }
    });
  },
  
  scrollToSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  },
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

// Auto-init on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => ScrollSpy.init());
} else {
  ScrollSpy.init();
}
