// Guides data
const guides = [
  {
    title: "How to Write a Winning Resume with ChatGPT",
    category: "writing",
    level: "Beginner",
    time: "15 min read",
    views: "24K",
    date: "2025-06-15",
    excerpt: "Step-by-step instructions to craft a professional resume that stands out, using ChatGPT for content, formatting, and optimization tips.",
    img: "../images/chatgpt-essay.png",
    link: "../guides/chatgpt-resume.html",
    featured: true
  },
  {
    title: "Creating Stunning Social Media Graphics with MidJourney",
    category: "art",
    level: "Intermediate",
    time: "22 min read",
    views: "18K",
    date: "2025-06-10",
    excerpt: "Learn professional techniques for generating branded visual content that engages your audience and boosts social media performance.",
    img: "../images/guides/midjourney-social.png",
    link: "../guides/midjourney-social.html"
  },
  {
    title: "Notion AI: The Ultimate Productivity Setup",
    category: "productivity",
    level: "Beginner",
    time: "12 min read",
    views: "15K",
    date: "2025-06-05",
    excerpt: "Transform your workflow with this complete guide to building an AI-powered productivity system in Notion.",
    img: "../images/guides/notion-ai.png",
    link: "../guides/notion-ai-guide.html"
  },
  {
    title: "Mastering GitHub Copilot for Faster Development",
    category: "coding",
    level: "Advanced",
    time: "30 min read",
    views: "12K",
    date: "2025-05-28",
    excerpt: "Professional techniques to integrate AI pair programming into your workflow and dramatically boost coding efficiency.",
    img: "../images/guides/copilot-coding.png",
    link: "../guides/copilot-coding.html"
  },
  {
    title: "Automating Business Processes with AI Tools",
    category: "business",
    level: "Intermediate",
    time: "25 min read",
    views: "10K",
    date: "2025-05-20",
    excerpt: "Practical guide to identifying and automating repetitive tasks in your business using AI tools and workflows.",
    img: "../images/guides/ai-business.png",
    link: "../guides/ai-business.html"
  },
  {
    title: "Advanced Prompt Engineering Techniques",
    category: "writing",
    level: "Advanced",
    time: "35 min read",
    views: "20K",
    date: "2025-05-15",
    excerpt: "Go beyond basic prompts with these professional strategies for getting consistent, high-quality results from AI systems.",
    img: "../images/guides/prompt-engineering.png",
    link: "../guides/prompt-engineering.html"
  },
  {
    title: "AI Math Help: Solving Complex Problems",
    category: "education",
    level: "Intermediate",
    time: "20 min read",
    views: "8K",
    date: "2025-05-10",
    excerpt: "How to use AI tools to solve math problems and understand complex concepts.",
    img: "../images/guides/ai-math.png",
    link: "../guides/ai-math-help.html"
  },
  {
    title: "ChatGPT for Essay Writing",
    category: "writing",
    level: "Beginner",
    time: "18 min read",
    views: "22K",
    date: "2025-05-05",
    excerpt: "Improve your essay writing process with ChatGPT's brainstorming and editing capabilities.",
    img: "../images/guides/chatgpt-essay.png",
    link: "../guides/chatgpt-essay-writing.html"
  },
  {
    title: "AI Research: Boosting Academic Workflows",
    category: "education",
    level: "Advanced",
    time: "28 min read",
    views: "14K",
    date: "2025-05-02",
    excerpt: "Learn to leverage AI for literature reviews, data analysis, and writing academic papers.",
    img: "../images/guides/ai-research.png",
    link: "../guides/ai-research.html"
  },
  {
    title: "ChatGPT Prompt Library",
    category: "writing",
    level: "All Levels",
    time: "40 min read",
    views: "26K",
    date: "2025-04-28",
    excerpt: "A curated collection of prompts to maximize ChatGPT's potential across different tasks and industries.",
    img: "../images/guides/chatgpt-prompts.png",
    link: "../guides/chatgpt-prompts.html"
  },
  {
    title: "Student Productivity with AI",
    category: "productivity",
    level: "Beginner",
    time: "14 min read",
    views: "11K",
    date: "2025-04-20",
    excerpt: "Boost your study habits and time management skills with AI-powered tools.",
    img: "../images/guides/student-productivity.png",
    link: "../guides/student-productivity.html"
  },
];
console.log("Total guides:", guides.length); // Add this at the start of your JS file

// ===================
// 2. GUIDES VARIABLES
// ===================
let currentGuidesPage = 1;
const guidesPerPage = 6;
let filteredGuides = [...guides];

// ===================
// 3. GUIDES RENDER FUNCTIONS
// ===================
function renderGuides() {
  const grid = document.getElementById("guidesGrid");
  const noResults = document.querySelector(".guides-section .no-results");
  grid.innerHTML = "";

  const start = (currentGuidesPage - 1) * guidesPerPage;
  const end = start + guidesPerPage;
  const pageGuides = filteredGuides.slice(start, end);

  if (pageGuides.length === 0) {
    noResults.style.display = "block";
    grid.classList.remove("single-item");
  } else {
    noResults.style.display = "none";

    pageGuides.forEach((guide, index) => {
      const isFeatured = index === 0 && guide.featured;
      grid.innerHTML += `
        <article class="guide-card ${isFeatured ? "featured" : ""}">
          ${isFeatured ? `<div class="guide-badge">Featured</div>` : ""}
          <div class="guide-image">
            <img src="${guide.img}" alt="${guide.title}" loading="lazy">
          </div>
          <div class="guide-content">
            <div class="guide-meta">
              <span class="category">${guide.category}</span>
              <span class="level">${guide.level}</span>
              <span class="time">${guide.time}</span>
            </div>
            <h3><a href="${guide.link}">${guide.title}</a></h3>
            <p class="excerpt">${guide.excerpt}</p>
            <div class="guide-footer">
              <a href="${guide.link}" class="btn btn-small">Read Guide</a>
              <div class="stats">
                <span class="views">${guide.views} views</span>
                <span class="date">Updated: ${new Date(guide.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </article>
      `;
    });

    if (pageGuides.length === 1) {
      grid.classList.add("single-item");
    } else {
      grid.classList.remove("single-item");
    }
  }

  renderGuidesPagination();
}

function renderGuidesPagination() {
  const pagination = document.getElementById("guidesPagination");
  pagination.innerHTML = "";
  const totalPages = Math.ceil(filteredGuides.length / guidesPerPage);

  pagination.innerHTML += `<a href="#" class="btn btn-secondary ${currentGuidesPage === 1 ? "disabled" : ""}" onclick="changeGuidesPage(${currentGuidesPage - 1})">Previous</a>`;

  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `<a href="#" class="page-number ${i === currentGuidesPage ? "active" : ""}" onclick="changeGuidesPage(${i})">${i}</a>`;
  }

  pagination.innerHTML += `<a href="#" class="btn btn-secondary ${currentGuidesPage === totalPages ? "disabled" : ""}" onclick="changeGuidesPage(${currentGuidesPage + 1})">Next</a>`;
}

function changeGuidesPage(page) {
  const totalPages = Math.ceil(filteredGuides.length / guidesPerPage);
  if (page < 1 || page > totalPages) return;
  currentGuidesPage = page;
  renderGuides();
}

// ===================
// 4. GUIDES SEARCH & FILTER
// ===================
function applyGuidesFilters() {
  const searchQuery = document.querySelector(".guides-hero .search-box input").value.toLowerCase();
  const categoryValue = document.getElementById("guides-category-filter").value;
  const sortValue = document.getElementById("guides-sort-by").value;

  filteredGuides = guides.filter(g => {
    const matchesSearch = g.title.toLowerCase().includes(searchQuery) || 
                         g.excerpt.toLowerCase().includes(searchQuery);
    const matchesCategory = categoryValue === "all" || g.category === categoryValue;
    return matchesSearch && matchesCategory;
  });

  // Apply sorting
  if (sortValue === "newest") {
    filteredGuides.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortValue === "popular") {
    filteredGuides.sort((a, b) => parseInt(b.views) - parseInt(a.views));
  } else if (sortValue === "difficulty") {
    const levelOrder = { "Beginner": 1, "Intermediate": 2, "Advanced": 3 };
    filteredGuides.sort((a, b) => levelOrder[b.level] - levelOrder[a.level]);
  }

  currentGuidesPage = 1;
  renderGuides();
}

function filterGuidesByCategory(category) {
  const categoryFilter = document.getElementById("guides-category-filter");
  categoryFilter.value = category;
  applyGuidesFilters();
  
  // Scroll to the guides section
  document.querySelector('.guides-section').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

// ===================
// 5. GUIDES EVENT LISTENERS
// ===================
document.querySelector(".guides-hero .search-box input")
  .addEventListener("input", applyGuidesFilters);
document.getElementById("guides-category-filter").addEventListener("change", applyGuidesFilters);
document.getElementById("guides-sort-by").addEventListener("change", applyGuidesFilters);

// ===================
// 6. INIT GUIDES
// ===================
renderGuides();