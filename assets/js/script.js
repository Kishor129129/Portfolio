'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}



// Removed testimonials functionality - no longer needed

// Project Modal Functionality
const projectItems = document.querySelectorAll("[data-filter-item]");
const projectModal = document.querySelector(".project-modal");
const projectModalContainer = document.querySelector("[data-modal-container]");
const projectModalCloseBtn = document.querySelector("[data-modal-close-btn]");
const projectOverlay = document.querySelector("[data-overlay]");

// Project data
const projectData = {
  "DataWise AI": {
    title: "DataWise AI",
    category: "Generative AI",
    image: "./datawise.jpeg",
    description: "Built an NL-to-SQL analytics platform with RAG using ChromaDB embeddings, enabling conversational BI with multi-turn context and schema grounding. Added automated insights via statistical tests, trend and correlation analysis, and anomaly detection with IQR and Zscore.",
    features: [
      "NL-to-SQL query translation using RAG",
      "Multi-turn conversational context",
      "Automated statistical insights",
      "Anomaly detection with IQR and Zscore",
      "Streamlit UI with PostgreSQL backend",
      "PDF and Excel reporting automation"
    ],
    tech: ["Python", "LangChain", "ChromaDB", "PostgreSQL", "Streamlit", "SQL"],
    stats: {
      stat1: { number: "95%", label: "Query Accuracy" },
      stat2: { number: "10K+", label: "Queries Processed" },
      stat3: { number: "80%", label: "Time Saved" }
    },
    links: {
      github: "https://github.com/Kishor129129/datawise_ai",
      demo: "https://datawise-ai-demo.com"
    }
  },
  "Retail Revenue Intelligence": {
    title: "Retail Revenue Intelligence",
    category: "Data Engineering",
    image: "./retailrevenue.jpeg",
    description: "Built a retail analytics warehouse in DuckDB with dbt, 35+ models, and a star schema, orchestrated with Prefect. Enforced 120+ data tests in dbt and Great Expectations with a 96% pass rate. Delivered four Power BI executive dashboards with automated reporting.",
    features: [
      "DuckDB analytics warehouse with dbt",
      "35+ data models with star schema",
      "Prefect orchestration pipeline",
      "120+ data quality tests",
      "Power BI executive dashboards",
      "Automated PDF/Excel reporting with AI insights"
    ],
    tech: ["DuckDB", "DBT", "Prefect", "Power BI", "Python", "Great Expectations"],
    stats: {
      stat1: { number: "96%", label: "Test Pass Rate" },
      stat2: { number: "35+", label: "Data Models" },
      stat3: { number: "90%", label: "Time Reduction" }
    },
    links: {
      github: "https://github.com/Kishor129129/Retail-Revenue-Intelligence-Platform",
      demo: "https://retail-analytics-demo.com"
    }
  },
  "Energy Demand Analytics": {
    title: "Energy Demand Analytics",
    category: "Machine Learning",
    image: "./energydemand.jpeg",
    description: "Modeled 50k+ hourly grid records across 37 European countries from 2015 to 2020. Engineered 33+ time series features and trained XGBoost achieving 2.84% MAPE and 97.16% accuracy with time-based validation and no leakage.",
    features: [
      "50k+ hourly grid records modeling",
      "37 European countries coverage",
      "33+ engineered time series features",
      "XGBoost regression model",
      "Time-based validation strategy",
      "Power BI dashboard with forecasts"
    ],
    tech: ["Python", "XGBoost", "Pandas", "NumPy", "Power BI", "Scikit-learn"],
    stats: {
      stat1: { number: "97.16%", label: "Model Accuracy" },
      stat2: { number: "50K+", label: "Records Processed" },
      stat3: { number: "2.84%", label: "MAPE Score" }
    },
    links: {
      github: "https://github.com/Kishor129129/Energy-Demand-Analytics-Forecasting-Platform",
      demo: "https://energy-analytics-demo.com"
    }
  },
  "AgentFlow": {
    title: "AgentFlow",
    category: "Generative AI",
    image: "./agentflow.jpeg",
    description: "Orchestrated six specialized agents (Planner, Researcher, Analyst, Writer, Critic, QA) using a LangGraph state machine. Features a FastAPI backend with PostgreSQL for persistence and a Streamlit UI for real-time progress display.",
    features: [
      "Six specialized AI agents orchestration",
      "LangGraph state machine workflow",
      "FastAPI backend with PostgreSQL",
      "Streamlit real-time UI",
      "Source discovery via web search",
      "Iterative refinement process"
    ],
    tech: ["Python", "LangGraph", "LangChain", "FastAPI", "PostgreSQL", "Streamlit"],
    stats: {
      stat1: { number: "6", label: "Specialized Agents" },
      stat2: { number: "2K", label: "Word Reports" },
      stat3: { number: "35", label: "Sources Curated" }
    },
    links: {
      github: "https://github.com/Kishor129129/agentflow",
      demo: "https://agentflow-demo.com"
    }
  },
  "GitHub MCP Server": {
    title: "GitHub MCP Server",
    category: "Generative AI",
    image: "./guthubmcp.jpeg",
    description: "A TypeScript MCP server (STDIO + JSON-RPC) that integrates Gemini for generating PR summaries and risk notes. Supports advanced GitHub queries using fine-grained tokens. Provides five tools for repository management.",
    features: [
      "TypeScript MCP server implementation",
      "STDIO + JSON-RPC protocol",
      "Gemini integration for PR analysis",
      "Advanced GitHub API queries",
      "Fine-grained token authentication",
      "Claude Desktop/MCP Inspector integration"
    ],
    tech: ["TypeScript", "Node.js", "Gemini API", "GitHub API", "JSON-RPC", "STDIO"],
    stats: {
      stat1: { number: "5", label: "GitHub Tools" },
      stat2: { number: "100%", label: "API Coverage" },
      stat3: { number: "24/7", label: "Availability" }
    },
    links: {
      github: "https://github.com/Kishor129129/github-mcp-server",
      demo: "https://github-mcp-demo.com"
    }
  }
};

// Project modal toggle function
const projectModalFunc = function () {
  projectModalContainer.classList.toggle("active");
  projectOverlay.classList.toggle("active");
}

// Projects now redirect directly to GitHub repositories
// Modal functionality removed to allow direct navigation to GitHub

// Add click event to modal close button and overlay
projectModalCloseBtn.addEventListener("click", projectModalFunc);
projectOverlay.addEventListener("click", projectModalFunc);

// Enhanced Scroll Animation Functionality
const animateOnScroll = function () {
  const elements = document.querySelectorAll('.animate-on-scroll, .animate-left, .animate-right, .animate-scale, .animate-fade, .animate-slide-up, .animate-slide-down, .animate-rotate, .animate-flip, .animate-bounce, .animate-3d-flip, .animate-3d-slide, .animate-3d-zoom, .animate-matrix, .animate-quantum, .animate-hologram, .animate-crystalline');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('animated');
      
      // Animate counters
      if (element.classList.contains('counter')) {
        animateCounter(element);
      }
      
      // Text reveal animation
      if (element.classList.contains('text-reveal')) {
        animateTextReveal(element);
      }
    }
  });
};

// Text Reveal Animation
const animateTextReveal = function (element) {
  const text = element.textContent;
  element.innerHTML = '';
  
  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.transitionDelay = `${index * 0.05}s`;
    element.appendChild(span);
  });
  
  element.classList.add('revealed');
};

// Particle Effects System
const createParticles = function () {
  const container = document.getElementById('particles-container');
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size between 2px and 6px
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random starting position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 6}s`;
    particle.style.animationDuration = `${Math.random() * 8 + 6}s`;
    
    // Random opacity
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    
    container.appendChild(particle);
  }
};

// Floating Tech Icons
const createFloatingIcons = function () {
  const container = document.getElementById('floating-icons');
  const icons = ['logo-python', 'logo-javascript', 'logo-html5', 'logo-css3', 'logo-nodejs', 'server-outline', 'analytics-outline', 'code-slash-outline'];
  const iconCount = 20;
  
  for (let i = 0; i < iconCount; i++) {
    const icon = document.createElement('ion-icon');
    icon.className = 'floating-icon';
    icon.name = icons[Math.floor(Math.random() * icons.length)];
    
    // Random starting position
    icon.style.left = `${Math.random() * 100}%`;
    icon.style.animationDelay = `${Math.random() * 15}s`;
    icon.style.animationDuration = `${Math.random() * 10 + 15}s`;
    
    container.appendChild(icon);
  }
};

// Magnetic Effect for Elements
const initMagneticEffect = function () {
  const magneticElements = document.querySelectorAll('.magnetic');
  
  magneticElements.forEach(element => {
    element.addEventListener('mousemove', function(e) {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = 100;
      
      if (distance < maxDistance) {
        const moveX = (x / maxDistance) * 10;
        const moveY = (y / maxDistance) * 10;
        
        element.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
      }
    });
    
    element.addEventListener('mouseleave', function() {
      element.style.transform = 'translate(0px, 0px) scale(1)';
    });
  });
};

// Enhanced Card Tilt Effect
const initCardTilt = function () {
  const tiltElements = document.querySelectorAll('.card-tilt');
  
  tiltElements.forEach(element => {
    element.addEventListener('mousemove', function(e) {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const rotateX = (y / rect.height) * 20;
      const rotateY = (x / rect.width) * 20;
      
      element.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    });
    
    element.addEventListener('mouseleave', function() {
      element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
  });
};

// Counter animation function
const animateCounter = function (element) {
  const target = parseInt(element.textContent.replace(/[^\d]/g, ''));
  const suffix = element.textContent.replace(/[\d]/g, '');
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + suffix;
  }, 30);
};

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);

// GitHub Stats are now displayed using static images from GitHub Readme Stats API

// Ultra Advanced Animation Functions
const createMatrixRain = function () {
  const container = document.createElement('div');
  container.className = 'matrix-rain';
  document.body.appendChild(container);
  
  const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  const charArray = characters.split('');
  
  for (let i = 0; i < 50; i++) {
    const char = document.createElement('div');
    char.className = 'matrix-char';
    char.textContent = charArray[Math.floor(Math.random() * charArray.length)];
    
    char.style.left = `${Math.random() * 100}%`;
    char.style.animationDelay = `${Math.random() * 10}s`;
    char.style.animationDuration = `${Math.random() * 5 + 5}s`;
    
    container.appendChild(char);
  }
};

const createNeuralNetwork = function () {
  const container = document.createElement('div');
  container.className = 'neural-network';
  document.body.appendChild(container);
  
  const nodeCount = 20;
  const nodes = [];
  
  // Create nodes
  for (let i = 0; i < nodeCount; i++) {
    const node = document.createElement('div');
    node.className = 'neural-node';
    node.style.left = `${Math.random() * 100}%`;
    node.style.top = `${Math.random() * 100}%`;
    node.style.animationDelay = `${Math.random() * 4}s`;
    container.appendChild(node);
    nodes.push(node);
  }
  
  // Create connections
  for (let i = 0; i < nodeCount - 1; i++) {
    const connection = document.createElement('div');
    connection.className = 'neural-connection';
    
    const node1 = nodes[i];
    const node2 = nodes[i + 1];
    
    const rect1 = node1.getBoundingClientRect();
    const rect2 = node2.getBoundingClientRect();
    
    const angle = Math.atan2(rect2.top - rect1.top, rect2.left - rect1.left);
    const distance = Math.sqrt(Math.pow(rect2.left - rect1.left, 2) + Math.pow(rect2.top - rect1.top, 2));
    
    connection.style.left = `${rect1.left}px`;
    connection.style.top = `${rect1.top}px`;
    connection.style.width = `${distance}px`;
    connection.style.transform = `rotate(${angle}rad)`;
    connection.style.animationDelay = `${Math.random() * 3}s`;
    
    container.appendChild(connection);
  }
};

const createQuantumParticles = function () {
  const container = document.createElement('div');
  container.className = 'quantum-particles';
  document.body.appendChild(container);
  
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'quantum-particle';
    
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 6}s`;
    particle.style.animationDuration = `${Math.random() * 4 + 4}s`;
    
    container.appendChild(particle);
  }
};

const createDataStream = function () {
  const container = document.createElement('div');
  container.className = 'data-stream';
  document.body.appendChild(container);
  
  for (let i = 0; i < 25; i++) {
    const dataBit = document.createElement('div');
    dataBit.className = 'data-bit';
    
    dataBit.style.left = `${Math.random() * 100}%`;
    dataBit.style.animationDelay = `${Math.random() * 4}s`;
    dataBit.style.animationDuration = `${Math.random() * 3 + 3}s`;
    
    container.appendChild(dataBit);
  }
};

const createMagneticField = function () {
  const container = document.createElement('div');
  container.className = 'magnetic-field';
  document.body.appendChild(container);
  
  for (let i = 0; i < 15; i++) {
    const fieldLine = document.createElement('div');
    fieldLine.className = 'field-line';
    
    fieldLine.style.left = `${Math.random() * 100}%`;
    fieldLine.style.top = `${Math.random() * 100}%`;
    fieldLine.style.animationDelay = `${Math.random() * 5}s`;
    fieldLine.style.animationDuration = `${Math.random() * 3 + 3}s`;
    
    container.appendChild(fieldLine);
  }
};

const initUltraAdvancedAnimations = function () {
  // Create ultra-advanced background effects
  createMatrixRain();
  createNeuralNetwork();
  createQuantumParticles();
  createDataStream();
  createMagneticField();
};

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered successfully:', registration.scope);
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  });
}

// Performance optimization - Intersection Observer for lazy loading
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    }
  });
});

// Initialize all advanced animations
document.addEventListener('DOMContentLoaded', function() {
  // Make body visible immediately
  document.body.style.opacity = '1';
  
  // Observe all lazy images
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
  
  // Create particle effects
  createParticles();
  createFloatingIcons();
  
  // Initialize ultra-advanced animations
  initUltraAdvancedAnimations();
  
  // Initialize interactive effects
  initMagneticEffect();
  initCardTilt();
  
  // Make hero section visible immediately
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    heroSection.classList.add('animated');
    // Also animate hero elements immediately
    const heroElements = heroSection.querySelectorAll('.animate-fade, .animate-scale, .animate-right, .animate-slide-up, .animate-3d-zoom, .animate-flip, .animate-rotate');
    heroElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animated');
      }, index * 200);
    });
  }
  
  // Animate skills section with staggered delays
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('animated');
    }, index * 100);
  });
  
  // Initialize scroll animations
  animateOnScroll();
  
  // Add shake animation to buttons on click
  const buttons = document.querySelectorAll('button, .cta-btn');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      this.classList.add('shake-animation');
      setTimeout(() => {
        this.classList.remove('shake-animation');
      }, 500);
    });
  });
  
  // Hero title animation is now handled by CSS classes
});



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

console.log("Navigation links found:", navigationLinks.length);
console.log("Pages found:", pages.length);

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Navigation clicked:", this.innerHTML);

    // Remove active class from all navigation links
    navigationLinks.forEach(link => link.classList.remove("active"));
    
    // Add active class to clicked link
    this.classList.add("active");

    // Hide all pages
    pages.forEach(page => page.classList.remove("active"));
    
    // Show the target page
    const targetPage = this.innerHTML.toLowerCase().replace(' ', '');
    console.log("Looking for page:", targetPage);
    
    for (let j = 0; j < pages.length; j++) {
      if (pages[j].dataset.page === targetPage) {
        console.log("Found matching page:", pages[j].dataset.page);
        pages[j].classList.add("active");
        break;
      }
    }
    
    window.scrollTo(0, 0);
  });
}

// Email functionality
function handleEmailClick(event) {
  // Check if user has a default email client
  const hasEmailClient = navigator.userAgent.includes('Mail') || 
                        navigator.userAgent.includes('Outlook') || 
                        navigator.userAgent.includes('Thunderbird');
  
  if (!hasEmailClient) {
    // Show a modal or notification for users without email clients
    showEmailOptions();
    event.preventDefault();
  }
  // If they have an email client, let the default mailto: behavior work
}

function showEmailOptions() {
  // Create a modal for email options
  const modal = document.createElement('div');
  modal.className = 'email-modal';
  modal.innerHTML = `
    <div class="email-modal-content">
      <div class="email-modal-header">
        <h3>Choose Contact Method</h3>
        <button class="email-modal-close" onclick="closeEmailModal()">&times;</button>
      </div>
      <div class="email-modal-body">
        <p>Select your preferred way to contact Kishor:</p>
        <div class="email-options">
          <a href="mailto:kishoratada@gmail.com?subject=AI/ML Project Discussion - Portfolio Contact&body=Hi Kishor,%0D%0A%0D%0AI came across your portfolio and I'm interested in discussing a potential AI/ML project with you.%0D%0A%0D%0AProject Details:%0D%0A- Project Type: %0D%0A- Timeline: %0D%0A- Budget Range: %0D%0A- Description: %0D%0A%0D%0APlease let me know your availability and next steps.%0D%0A%0D%0ABest regards," class="email-option">
            <ion-icon name="mail-outline"></ion-icon>
            <span>Open Email Client</span>
          </a>
          <a href="https://www.linkedin.com/in/kishor-atada-1182272b5" target="_blank" class="email-option">
            <ion-icon name="logo-linkedin"></ion-icon>
            <span>Message on LinkedIn</span>
          </a>
          <button class="email-option copy-email" onclick="copyEmailToClipboard()">
            <ion-icon name="copy-outline"></ion-icon>
            <span>Copy Email Address</span>
          </button>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Add modal styles
  const style = document.createElement('style');
  style.textContent = `
    .email-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
      animation: fadeIn 0.3s ease;
    }
    
    .email-modal-content {
      background: var(--eerie-black-2);
      border: 1px solid var(--jet);
      border-radius: 16px;
      padding: 2rem;
      max-width: 500px;
      width: 90%;
      animation: slideUp 0.3s ease;
    }
    
    .email-modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }
    
    .email-modal-header h3 {
      color: var(--white-2);
      margin: 0;
    }
    
    .email-modal-close {
      background: none;
      border: none;
      color: var(--light-gray);
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .email-modal-body p {
      color: var(--light-gray);
      margin-bottom: 1.5rem;
    }
    
    .email-options {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .email-option {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      background: var(--eerie-black-1);
      border: 1px solid var(--jet);
      border-radius: 12px;
      color: var(--white-2);
      text-decoration: none;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    .email-option:hover {
      border-color: var(--orange-yellow-crayola);
      transform: translateY(-2px);
      box-shadow: 0 10px 25px hsla(45, 100%, 72%, 0.2);
    }
    
    .email-option ion-icon {
      font-size: 1.2rem;
      color: var(--orange-yellow-crayola);
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideUp {
      from { 
        opacity: 0;
        transform: translateY(20px);
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  
  document.head.appendChild(style);
}

function closeEmailModal() {
  const modal = document.querySelector('.email-modal');
  if (modal) {
    modal.remove();
  }
}

function copyEmailToClipboard() {
  const email = 'kishoratada@gmail.com';
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(() => {
      showCopySuccess();
    });
  } else {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showCopySuccess();
  }
  
  closeEmailModal();
}

function showCopySuccess() {
  const notification = document.createElement('div');
  notification.className = 'copy-notification';
  notification.innerHTML = `
    <ion-icon name="checkmark-circle"></ion-icon>
    <span>Email address copied to clipboard!</span>
  `;
  
  const style = document.createElement('style');
  style.textContent = `
    .copy-notification {
      position: fixed;
      top: 20px;
      right: 20px;
      background: var(--bg-gradient-yellow-1);
      color: var(--eerie-black-1);
      padding: 1rem 1.5rem;
      border-radius: 12px;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      z-index: 10001;
      animation: slideInRight 0.3s ease;
      box-shadow: 0 10px 25px hsla(45, 100%, 72%, 0.3);
    }
    
    .copy-notification ion-icon {
      font-size: 1.2rem;
    }
    
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(100px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `;
  
  document.head.appendChild(style);
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
    style.remove();
  }, 3000);
}

//-----------------------------------*\
// SCROLL TO TOP BUTTON
//-----------------------------------*/

function initScrollToTop() {
  const scrollToTopBtn = document.getElementById('scrollToTop');
  
  if (!scrollToTopBtn) return;
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });
  
  // Smooth scroll to top when clicked
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Initialize scroll to top functionality
document.addEventListener('DOMContentLoaded', function() {
  initScrollToTop();
});
