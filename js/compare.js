const comparisons = [
  {
    title: "ChatGPT vs Claude AI",
    category: "chat",
    description: "Compare the two leading conversational AI assistants for content creation, coding help, and general knowledge.",
    tags: ["Context Length", "Creativity", "Safety"],
    tool1: { name: "ChatGPT", rating: 4.7, stars: "★★★★★", price: "Freemium", img: "../images/chatgpt-logo.png" },
    tool2: { name: "Claude AI", rating: 4.5, stars: "★★★★☆", price: "Freemium", img: "../images/claude.png" },
    link: "chatgpt-vs-claude.html"
  },
  {
    title: "Midjourney vs DALL·E",
    category: "image",
    description: "Detailed comparison of the two leading AI image generation tools for creative professionals and content creators.",
    tags: ["Realism", "Text-to-Image Accuracy", "Pricing"],
    tool1: { name: "Midjourney", rating: 4.8, stars: "★★★★★", price: "Paid", img: "../images/midjourney-icon.png" },
    tool2: { name: "DALL·E", rating: 4.5, stars: "★★★★☆", price: "Free/Paid", img: "../images/dalle.png" },
    link: "midjourney-vs-dalle.html"
  },
  {
    title: "Notion AI vs Evernote",
    category: "productivity",
    description: "Which note-taking app with AI features is better for organization and productivity?",
    tags: ["AI Features", "Templates", "Collaboration"],
    tool1: { name: "Notion AI", rating: 4.6, stars: "★★★★☆", price: "Freemium", img: "../images/notion-icon.png" },
    tool2: { name: "Evernote", rating: 4.2, stars: "★★★★☆", price: "Freemium", img: "../images/evernote.jpeg" },
    link: "notion-vs-evernote.html"
  },
  {
    title: "Grammarly vs ProWritingAid",
    category: "writing",
    description: "Which AI writing assistant offers better grammar checking and style suggestions?",
    tags: ["Accuracy", "Integration", "Pricing"],
    tool1: { name: "Grammarly", rating: 4.7, stars: "★★★★★", price: "Freemium", img: "../images/grammarly-icon.png" },
    tool2: { name: "ProWritingAid", rating: 4.4, stars: "★★★★☆", price: "Freemium", img: "../images/prowritingaid.png" },
    link: "grammarly-vs-prowritingaid.html"
  },
  {
    title: "GitHub Copilot vs Cursor",
    category: "coding",
    description: "Which AI-powered editor enhances productivity and code understanding better?",
    tags: ["Autocompletion", "Bug Fix Suggestions", "Context Awareness"],
    tool1: { name: "GitHub Copilot", rating: 4.8, stars: "★★★★★", price: "Paid", img: "../images/github-copilot.png" },
    tool2: { name: "Cursor", rating: 4.6, stars: "★★★★☆", price: "Freemium", img: "../images/cursor.png" },
    link: "github-copilot-vs-cursor.html"
  },
  {
    title: "Runway ML vs Pika Labs",
    category: "video",
    description: "Compare the leading AI video generation and editing tools for creators.",
    tags: ["Video Quality", "Features", "Accessibility"],
    tool1: { name: "Runway ML", rating: 4.6, stars: "★★★★☆", price: "Freemium", img: "../images/runway.png" },
    tool2: { name: "Pika Labs", rating: 4.3, stars: "★★★★☆", price: "Free", img: "../images/pika.png" },
    link: "runway-ml-vs-pika-labs.html"
  }
];

// ===================
// 2. VARIABLES
// ===================
let currentPage = 1;
const comparisonsPerPage = 6;
let filteredComparisons = [...comparisons];

// ===================
// 3. RENDER FUNCTIONS
// ===================
function renderComparisons() {
  const grid = document.querySelector(".comparison-grid");
  grid.innerHTML = "";

  const start = (currentPage - 1) * comparisonsPerPage;
  const end = start + comparisonsPerPage;
  const pageItems = filteredComparisons.slice(start, end);

  if (pageItems.length === 0) {
    grid.innerHTML = `<p class="no-results">No comparisons found.</p>`;
    return;
  }

  pageItems.forEach(item => {
    grid.innerHTML += `
      <article class="comparison-card" data-categories="${item.category}">
        <div class="comparison-header">
            <h3>${item.title}</h3>
            <p class="comparison-meta">${item.description}</p>
        </div>
        <div class="comparison-tools">
            <div class="tool-item">
                <div class="comparison-image">
                    <img src="${item.tool1.img}" alt="${item.tool1.name}" loading="lazy">
                </div>
                <h4>${item.tool1.name}</h4>
                <div class="rating">
                    <span class="stars">${item.tool1.stars}</span>
                    <span class="score">${item.tool1.rating}/5</span>
                </div>
                <div class="price">${item.tool1.price}</div>
            </div>
            <div class="vs-circle">VS</div>
            <div class="tool-item">
                <div class="comparison-image">
                    <img src="${item.tool2.img}" alt="${item.tool2.name}" loading="lazy">
                </div>
                <h4>${item.tool2.name}</h4>
                <div class="rating">
                    <span class="stars">${item.tool2.stars}</span>
                    <span class="score">${item.tool2.rating}/5</span>
                </div>
                <div class="price">${item.tool2.price}</div>
            </div>
        </div>
        <div class="comparison-summary">
            <p>${item.description}</p>
            <div class="key-differences">
                ${item.tags.map(tag => `<span class="difference-tag">${tag}</span>`).join("")}
            </div>
        </div>
        <a href="${item.link}" class="btn btn-primary">View Full Comparison</a>
      </article>
    `;
  });

  renderPagination();
}


// ===================
// 4. PAGINATION
// ===================
function renderPagination() {
  const pagination = document.querySelector(".pagination");
  pagination.innerHTML = "";

  const totalPages = Math.ceil(filteredComparisons.length / comparisonsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `
      <button class="page-btn ${i === currentPage ? "active" : ""}" onclick="goToPage(${i})">${i}</button>
    `;
  }
}

function goToPage(page) {
  currentPage = page;
  renderComparisons();
}

// ===================
// 5. FILTER & SEARCH
// ===================
document.querySelector("#searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  filteredComparisons = comparisons.filter(c =>
    c.title.toLowerCase().includes(query) ||
    c.description.toLowerCase().includes(query) ||
    c.tags.some(tag => tag.toLowerCase().includes(query))
  );
  currentPage = 1;
  renderComparisons();
});
// BROWSE CATEGORIES CLICK HANDLER
document.querySelectorAll(".compare-categories .category-card").forEach(card => {
    card.addEventListener("click", function (e) {
        e.preventDefault(); // stop link jump
        const category = this.dataset.category;

        // Set dropdown value
        document.getElementById("categorySelect").value = category;

        // Filter comparisons
        if (category === "all") {
            filteredComparisons = [...comparisons];
        } else {
            filteredComparisons = comparisons.filter(c => c.category === category);
        }
        currentPage = 1;
        renderComparisons();

        // Smooth scroll to comparison grid
        document.querySelector(".compare-section").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});


document.querySelector("#categorySelect").addEventListener("change", function () {
    const category = this.value;
    if (category === "all") {
        filteredComparisons = [...comparisons];
    } else {
        filteredComparisons = comparisons.filter(c => c.category === category);
    }
    currentPage = 1;
    renderComparisons();
});


// ===================
// 6. INIT
// ===================
renderComparisons();
