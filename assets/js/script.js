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



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

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
    image: "./assets/images/vendo.jpg",
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
      github: "https://github.com/kishoratada/datawise-ai",
      demo: "https://datawise-ai-demo.com"
    }
  },
  "Retail Revenue Intelligence": {
    title: "Retail Revenue Intelligence",
    category: "Data Engineering",
    image: "./assets/images/project-2.png",
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
      github: "https://github.com/kishoratada/retail-analytics",
      demo: "https://retail-analytics-demo.com"
    }
  },
  "Energy Demand Analytics": {
    title: "Energy Demand Analytics",
    category: "Machine Learning",
    image: "./assets/images/vendo.jpg",
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
      github: "https://github.com/kishoratada/energy-forecasting",
      demo: "https://energy-analytics-demo.com"
    }
  },
  "AgentFlow": {
    title: "AgentFlow",
    category: "Generative AI",
    image: "./assets/images/videtect.jpg",
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
      github: "https://github.com/kishoratada/agentflow",
      demo: "https://agentflow-demo.com"
    }
  },
  "GitHub MCP Server": {
    title: "GitHub MCP Server",
    category: "Generative AI",
    image: "./assets/images/project-2.png",
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
      github: "https://github.com/kishoratada/github-mcp-server",
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

// Scroll Animation Functionality
const animateOnScroll = function () {
  const elements = document.querySelectorAll('.animate-on-scroll, .animate-left, .animate-right, .animate-scale, .animate-fade');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('animated');
      
      // Animate skill progress bars
      if (element.classList.contains('skill-progress-fill')) {
        const targetWidth = element.getAttribute('data-width') || '90%';
        element.style.setProperty('--target-width', targetWidth);
        setTimeout(() => {
          element.style.width = targetWidth;
        }, 100);
      }
      
      // Animate counters
      if (element.classList.contains('counter')) {
        animateCounter(element);
      }
    }
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

// Initial check for elements already in view
document.addEventListener('DOMContentLoaded', function() {
  // Make hero section visible immediately
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    heroSection.classList.add('animated');
    // Also animate hero elements immediately
    const heroElements = heroSection.querySelectorAll('.animate-fade, .animate-scale, .animate-right');
    heroElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animated');
      }, index * 100);
    });
  }
  
  // GitHub stats are now displayed using static images
  
  animateOnScroll();
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
    const targetPage = this.innerHTML.toLowerCase();
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
