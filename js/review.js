// ===================
// 1. DATA SOURCE
// ===================
const reviews = [
  {
    title: "ChatGPT 4.5 Review: Still the King of AI Assistants?",
    category: "writing",
    date: "2025-06-18",
    rating: 4.8,
    stars: "★★★★★",
    excerpt: "Our in-depth evaluation of OpenAI's latest ChatGPT version shows why it remains the most versatile AI assistant.",
    img: "../images/tools/chatgpt.png",
    link: "chatgpt-review.html",
    freeTier: "Free tier available",
    featured: true
  },
  {
    title: "MidJourney v6 Review: Pushing the Boundaries of AI Art",
    category: "art",
    date: "2025-06-10",
    rating: 4.6,
    stars: "★★★★☆",
    excerpt: "With stunning photorealism and improved coherence, MidJourney continues to lead the AI art generation space.",
    img: "../images/tools/midjourney.png",
    link: "midjourney-review.html",
    price: "$10-$60/month",
    freeTier: "No free tier"
  },
  {
    title: "Notion AI Review: Smart Organization Meets AI",
    category: "productivity",
    date: "2025-06-05",
    rating: 4.3,
    stars: "★★★★☆",
    excerpt: "We test whether Notion's AI features justify the price premium for this already powerful productivity platform.",
    img: "../images/tools/notion.png",
    link: "notion-review.html",
    price: "$8-$15/month",
    freeTier: "Limited free plan"
  },
  {
    title: "GitHub Copilot X Review: The Programmer's AI Pair",
    category: "coding",
    date: "2025-05-28",
    rating: 4.7,
    stars: "★★★★★",
    excerpt: "Testing the latest version of GitHub's AI coding assistant that now supports chat and documentation lookup.",
    img: "../images/tools/copilot.png",
    link: "copilot-review.html",
    price: "$10/month",
    freeTier: "Student discount"
  },
  {
    title: "GrammarlyGO Review: More Than Just Grammar Checking",
    category: "writing",
    date: "2025-05-20",
    rating: 4.2,
    stars: "★★★★☆",
    excerpt: "Grammarly's new AI features transform it from proofreader to full writing assistant - but is it worth upgrading?",
    img: "../images/tools/grammarly.png",
    link: "grammarly-review.html",
    price: "$12-$30/month",
    freeTier: "Basic features free"
  },
  {
    title: "Runway ML Review: AI Video Editing for Creatives",
    category: "video",
    date: "2025-05-15",
    rating: 4.4,
    stars: "★★★★☆",
    excerpt: "From text-to-video to advanced editing, Runway offers powerful AI tools for video creators - at a price.",
    img: "../images/tools/runway.png",
    link: "runway-review.html",
    price: "$15-$95/month",
    freeTier: "Trial available"
  },
  {
    title: "Anki Review: Smarter Flashcards for Lifelong Learning",
    category: "education",
    date: "2025-05-12",
    rating: 4.5,
    stars: "★★★★★",
    excerpt: "We explore how Anki's spaced repetition system helps students and professionals retain information efficiently.",
    img: "../images/tools/anki.png",
    link: "anki-review.html",
    freeTier: "Free tier available"
  },
  {
    title: "Canva Magic Studio Review: Design Meets AI",
    category: "design",
    date: "2025-05-08",
    rating: 4.4,
    stars: "★★★★☆",
    excerpt: "AI-powered design tools in Canva make creating professional visuals faster than ever.",
    img: "../images/tools/canva.png",
    link: "canva-review.html",
    price: "$12.99/month",
    freeTier: "Free plan with limits"
  },
  {
    title: "Claude 3.5 Review: The Thoughtful AI Assistant",
    category: "writing",
    date: "2025-05-03",
    rating: 4.6,
    stars: "★★★★☆",
    excerpt: "Anthropic's latest Claude model offers impressive reasoning skills and a more natural conversational style.",
    img: "../images/tools/claude.png",
    link: "claude-review.html",
    freeTier: "Limited free tier"
  },
  {
    title: "ClickUp Review: AI-Powered Project Management",
    category: "productivity",
    date: "2025-04-28",
    rating: 4.3,
    stars: "★★★★☆",
    excerpt: "ClickUp's AI upgrades promise smarter task handling, but are they worth the learning curve?",
    img: "../images/tools/clickup.png",
    link: "clickup-review.html",
    price: "$7-$29/month",
    freeTier: "Free plan available"
  },
  {
    title: "Cursor Review: The AI-First Code Editor",
    category: "coding",
    date: "2025-04-24",
    rating: 4.5,
    stars: "★★★★★",
    excerpt: "A next-gen code editor with AI pair programming built in — ideal for rapid prototyping and debugging.",
    img: "../images/tools/cursor.png",
    link: "cursor-review.html",
    freeTier: "Free tier available"
  },
  {
    title: "Elicit Review: AI Research Assistant for Academics",
    category: "research",
    date: "2025-04-20",
    rating: 4.4,
    stars: "★★★★☆",
    excerpt: "Elicit automates literature reviews and research summaries, saving hours of academic work.",
    img: "../images/tools/elicit.png",
    link: "elicit-review.html",
    freeTier: "Free plan with limits"
  },
  {
    title: "Evernote AI Review: Note-Taking Reinvented",
    category: "productivity",
    date: "2025-04-15",
    rating: 4.1,
    stars: "★★★★☆",
    excerpt: "Evernote's AI features aim to organize your thoughts — and your life — faster than ever.",
    img: "../images/tools/evernote.png",
    link: "evernote-review.html",
    price: "$8-$15/month",
    freeTier: "Basic free plan"
  },
  {
    title: "FreshBooks AI Review: Accounting Gets Smarter",
    category: "business",
    date: "2025-04-10",
    rating: 4.3,
    stars: "★★★★☆",
    excerpt: "From automated invoicing to expense tracking, FreshBooks' AI features save time for small businesses.",
    img: "../images/tools/freshbooks.png",
    link: "freshbooks-review.html",
    price: "$17-$55/month",
    freeTier: "Free trial"
  },
  {
    title: "Gemini 1.5 Review: Google's Next-Gen AI",
    category: "writing",
    date: "2025-04-06",
    rating: 4.5,
    stars: "★★★★★",
    excerpt: "We test Gemini's advanced reasoning, multimodal abilities, and integration with Google Workspace.",
    img: "../images/tools/gemini.png",
    link: "gemini-review.html",
    freeTier: "Free tier available"
  },
  {
    title: "HoneyBook Review: Client Management with AI",
    category: "business",
    date: "2025-04-01",
    rating: 4.2,
    stars: "★★★★☆",
    excerpt: "HoneyBook's AI tools streamline proposals, contracts, and payments for freelancers and agencies.",
    img: "../images/tools/honeybook.png",
    link: "honeybook-review.html",
    price: "$16-$66/month",
    freeTier: "Trial available"
  },
  {
    title: "Jasper AI Review: Fast, Flexible AI Copywriting",
    category: "writing",
    date: "2025-03-28",
    rating: 4.4,
    stars: "★★★★☆",
    excerpt: "Jasper's customizable templates make it a go-to AI for marketers and content creators.",
    img: "../images/tools/jasper.png",
    link: "jasper-ai.html",
    price: "$39-$99/month",
    freeTier: "Trial available"
  },
  {
    title: "Obsidian AI Review: Knowledge Management with Intelligence",
    category: "productivity",
    date: "2025-03-25",
    rating: 4.3,
    stars: "★★★★☆",
    excerpt: "Obsidian's AI helps organize, search, and connect your notes with ease.",
    img: "../images/tools/obsidian.png",
    link: "obsidian-review.html",
    freeTier: "Free plan with optional paid plugins"
  },
  {
    title: "Perplexity AI Review: Instant, Accurate Search",
    category: "research",
    date: "2025-03-20",
    rating: 4.5,
    stars: "★★★★★",
    excerpt: "Perplexity delivers lightning-fast, cited answers — making it a researcher's dream.",
    img: "../images/tools/perplexity.png",
    link: "perplexity-review.html",
    freeTier: "Free tier available"
  },
  {
    title: "Photomath Review: Your Pocket Math Tutor",
    category: "education",
    date: "2025-03-15",
    rating: 4.4,
    stars: "★★★★☆",
    excerpt: "Snap a photo, get the answer — and learn how to solve it, step-by-step.",
    img: "../images/tools/photomath.png",
    link: "photomath-review.html",
    freeTier: "Free tier available"
  },
  {
    title: "Scholarly Review: AI-Powered Academic Writing",
    category: "research",
    date: "2025-03-12",
    rating: 4.2,
    stars: "★★★★☆",
    excerpt: "Scholarly speeds up academic paper writing and formatting with targeted AI tools.",
    img: "../images/tools/scholarly.png",
    link: "scholarly-review.html",
    freeTier: "Trial available"
  },
  {
    title: "Symbolab Review: Math Problem Solver with Explanations",
    category: "education",
    date: "2025-03-10",
    rating: 4.3,
    stars: "★★★★☆",
    excerpt: "Symbolab not only solves equations but shows the logic behind each step.",
    img: "../images/tools/symbolab.png",
    link: "symbolab-review.html",
    freeTier: "Free tier available"
  },
  {
    title: "Tabnine Review: AI Code Completion Simplified",
    category: "coding",
    date: "2025-03-05",
    rating: 4.2,
    stars: "★★★★☆",
    excerpt: "Tabnine's AI auto-completion boosts coding speed without being intrusive.",
    img: "../images/tools/tabnine.png",
    link: "tabnine-review.html",
    freeTier: "Free tier available"
  },
  {
    title: "Trello AI Review: Smarter Boards for Teamwork",
    category: "productivity",
    date: "2025-03-01",
    rating: 4.1,
    stars: "★★★★☆",
    excerpt: "Trello adds AI for better task prioritization and deadline predictions.",
    img: "../images/tools/trello.png",
    link: "trello-review.html",
    freeTier: "Free plan available"
  },
  {
    title: "Wolfram Alpha Pro Review: Math and Knowledge Engine",
    category: "research",
    date: "2025-02-26",
    rating: 4.6,
    stars: "★★★★☆",
    excerpt: "Wolfram Alpha's Pro version offers deeper analysis tools and step-by-step solutions.",
    img: "../images/tools/wolfram.png",
    link: "wolfram-review.html",
    price: "$6.99/month",
    freeTier: "Basic free tier"
  },
  {
    title: "Zotero Review: AI-Assisted Research Management",
    category: "research",
    date: "2025-02-20",
    rating: 4.4,
    stars: "★★★★☆",
    excerpt: "Zotero's AI features help organize citations and generate bibliographies faster.",
    img: "../images/tools/zotero.png",
    link: "zotero-review.html",
    freeTier: "Free tier available"
  }
];

// ===================
// 2. VARIABLES
// ===================
let currentPage = 1;
const reviewsPerPage = 6;
let filteredReviews = [...reviews];

// ===================
// 3. RENDER FUNCTIONS
// ===================
function renderReviews() {
  const grid = document.getElementById("reviewsGrid");
  const noResults = document.querySelector(".no-results");
  grid.innerHTML = "";

  const start = (currentPage - 1) * reviewsPerPage;
  const end = start + reviewsPerPage;
  const pageReviews = filteredReviews.slice(start, end);

  if (pageReviews.length === 0) {
    noResults.style.display = "block";
    grid.classList.remove("single-item"); // remove in case no results
  } else {
    noResults.style.display = "none";

    pageReviews.forEach((review, index) => {
      const isFeatured = index === 0 && review.featured;
      grid.innerHTML += `
        <article class="review-card ${isFeatured ? "featured" : ""}">
          ${isFeatured ? `<div class="review-badge">Editor's Choice</div>` : ""}
          <div class="review-image">
            <img src="${review.img}" alt="${review.title}" loading="lazy">
          </div>
          <div class="review-content">
            <div class="review-meta">
              <span class="category">${review.category}</span>
              <span class="date">Updated: ${new Date(review.date).toLocaleDateString()}</span>
            </div>
            <h3><a href="${review.link}">${review.title}</a></h3>
            <div class="rating">
              <span class="stars">${review.stars}</span>
              <span class="score">${review.rating}/5</span>
            </div>
            <p class="excerpt">${review.excerpt}</p>
            <div class="review-footer">
              <a href="${review.link}" class="btn btn-small">Read Review</a>
              <div class="pricing">
                <span class="price">${review.price}</span>
                <span class="free-tier">${review.freeTier}</span>
              </div>
            </div>
          </div>
        </article>
      `;
    });

    // ✅ Single-item centering logic
    if (pageReviews.length === 1) {
      grid.classList.add("single-item");
    } else {
      grid.classList.remove("single-item");
    }
  }

  renderPagination();
}



function renderPagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);

  pagination.innerHTML += `<a href="#" class="btn btn-secondary ${currentPage === 1 ? "disabled" : ""}" onclick="changePage(${currentPage - 1})">Previous</a>`;

  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `<a href="#" class="page-number ${i === currentPage ? "active" : ""}" onclick="changePage(${i})">${i}</a>`;
  }

  pagination.innerHTML += `<a href="#" class="btn btn-secondary ${currentPage === totalPages ? "disabled" : ""}" onclick="changePage(${currentPage + 1})">Next</a>`;
}

function changePage(page) {
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderReviews();
}

// ===================
// 4. SEARCH & FILTER
// ===================
function applyFilters() {
  const searchQuery = document.querySelector(".search-box input").value.toLowerCase();
  const categoryValue = document.getElementById("category-filter").value;

  filteredReviews = reviews.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(searchQuery) || r.excerpt.toLowerCase().includes(searchQuery);
    const matchesCategory = categoryValue === "all" || r.category === categoryValue;
    return matchesSearch && matchesCategory;
  });

  currentPage = 1;
  renderReviews();
}

// ===================
// 5. EVENT LISTENERS
// ===================
document.querySelector(".search-box input").addEventListener("input", applyFilters);
document.getElementById("category-filter").addEventListener("change", applyFilters);

// ===================
// 6. INIT
// ===================
renderReviews();
