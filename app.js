const articles = [
  {
    title: "What’s New With HIPAA in 2025",
    date: "September 15, 2025",
    minutes: 5,
    tags: ["HIPAA", "SECURITY", "HEALTHCARE PRIVACY"],
    summary:
      "A practical look at proposed Security Rule updates, from encryption and MFA to faster breach notifications.",
    symbol: "25",
    background: "#f2d6cd",
    accent: "#a94735",
    lede:
      "Healthcare technology has changed dramatically since the HIPAA Security Rule was last meaningfully updated. The 2025 proposal aims to bring federal safeguards closer to today’s risks.",
    sections: [
      {
        heading: "What could change?",
        body:
          "The proposal would strengthen baseline cybersecurity expectations for healthcare organizations and their partners. Encryption, multi-factor authentication, more detailed risk assessments, and regular vulnerability checks are among the major themes.",
      },
      {
        heading: "Why families should care",
        body:
          "Children’s health records can include developmental, mental health, vaccination, and other lifelong information. Stronger technical safeguards can reduce the chance that this sensitive data is exposed or misused.",
      },
      {
        heading: "A note on timing",
        body:
          "Proposed rules are not the same as final rules. Healthcare organizations should follow the current HIPAA requirements while monitoring official HHS guidance for changes.",
      },
    ],
  },
  {
    title: "HIPAA Privacy Rule",
    date: "September 8, 2025",
    minutes: 5,
    tags: ["HIPAA", "PRIVACY", "HEALTHCARE PRIVACY"],
    summary:
      "The essentials of protected health information, who may access it, and the rights families have under HIPAA.",
    symbol: "P",
    background: "#dbe9e5",
    accent: "#267a6d",
    lede:
      "If you have signed a form at a doctor’s office or wondered who can see a medical record, you have encountered the HIPAA Privacy Rule.",
    sections: [
      {
        heading: "What it protects",
        body:
          "The rule protects identifiable health information such as diagnoses, vaccination records, test results, billing details, and many clinical notes. This is commonly called protected health information, or PHI.",
      },
      {
        heading: "Your rights",
        body:
          "Patients and their representatives generally have rights to inspect records, request corrections, ask for certain private communications, and learn how information has been shared.",
      },
      {
        heading: "Important limits",
        body:
          "HIPAA does not cover every app, website, school, or organization that may collect health-related data. Whether a tool is covered depends on who operates it and how it relates to a covered healthcare entity.",
      },
    ],
  },
  {
    title: "HIPAA Security Rule",
    date: "September 8, 2025",
    minutes: 5,
    tags: ["HIPAA", "SECURITY", "HEALTHCARE PRIVACY"],
    summary:
      "How administrative, physical, and technical safeguards protect electronic health information.",
    symbol: "S",
    background: "#d8e3ed",
    accent: "#426f93",
    lede:
      "If the Privacy Rule addresses who may use health information, the Security Rule focuses on how electronic protected health information is safeguarded.",
    sections: [
      {
        heading: "Three kinds of safeguards",
        body:
          "Administrative safeguards include policies and staff training. Physical safeguards protect facilities and devices. Technical safeguards include access controls, secure authentication, audit logs, and other technology-based protections.",
      },
      {
        heading: "Why it matters",
        body:
          "Security is part of patient trust. Care teams need reliable access to accurate records, while families need confidence that sensitive information is not available to unauthorized people.",
      },
      {
        heading: "Everyday security",
        body:
          "Strong unique passwords, phishing awareness, timely software updates, careful access management, and prompt reporting of suspicious activity all support a healthier security culture.",
      },
    ],
  },
  {
    title: "Healthcare Privacy Breaches",
    date: "October 6, 2025",
    minutes: 10,
    tags: ["HEALTHCARE PRIVACY", "DATA BREACHES", "SECURITY"],
    summary:
      "What a healthcare data breach can mean for families, and the practical steps to take after a notification.",
    symbol: "!",
    background: "#f3e1bf",
    accent: "#9a6a18",
    lede:
      "A breach notice can be unsettling, especially when a child’s information is involved. Understanding the notice is the first step toward a measured response.",
    sections: [
      {
        heading: "Read the details",
        body:
          "Identify which organization was affected, what categories of information were involved, when the event occurred, and what assistance is being offered. Keep the notice for your records.",
      },
      {
        heading: "Watch for misuse",
        body:
          "Depending on the information involved, families may need to monitor insurance statements, account activity, credit reports, or unexpected communications. Be cautious with messages that create urgency or ask for credentials.",
      },
      {
        heading: "Ask direct questions",
        body:
          "The affected organization should be able to explain its response, how families can get help, and what steps are being taken to reduce the risk of a similar incident.",
      },
    ],
  },
  {
    title: "Emerging Tech & Children’s Privacy",
    date: "October 14, 2025",
    minutes: 1,
    tags: ["PRIVACY", "AI", "HEALTHCARE TECH"],
    summary:
      "A quick framework for evaluating apps, connected devices, and AI tools that collect children’s data.",
    symbol: "AI",
    background: "#ddd9ec",
    accent: "#67558f",
    lede:
      "Digital health tools can make care more convenient and responsive, but their privacy protections vary widely.",
    sections: [
      {
        heading: "Start with the data",
        body:
          "Ask what information the tool collects, why it needs that information, how long the data is retained, and whether it is sold or shared for advertising, analytics, or product development.",
      },
      {
        heading: "Look beyond HIPAA",
        body:
          "A health-related app is not automatically covered by HIPAA. Consumer protection and children’s privacy laws may apply instead, depending on the product and the child’s age.",
      },
      {
        heading: "Choose the minimum",
        body:
          "Prefer tools that collect only what is needed, offer clear privacy controls, use strong security, and make it possible to delete an account and its associated data.",
      },
    ],
  },
  {
    title: "Simplified Privacy Laws",
    date: "September 8, 2025",
    minutes: 15,
    tags: ["LAWS", "PRIVACY", "HIPAA", "SECURITY"],
    summary:
      "A plain-language starting point for understanding the overlapping rules that may protect children’s information.",
    symbol: "§",
    background: "#e7e2d7",
    accent: "#755f3f",
    lede:
      "Children’s data can be governed by different laws depending on where it was collected, who collected it, and how it will be used.",
    sections: [
      {
        heading: "Context matters",
        body:
          "Health providers, schools, consumer apps, and online services can fall under different legal frameworks. The same piece of information may receive different protection in different settings.",
      },
      {
        heading: "Ask who is responsible",
        body:
          "Before relying on a privacy promise, identify the organization collecting the data and the law or contractual obligation that applies to it.",
      },
      {
        heading: "Use laws as a floor",
        body:
          "Legal compliance is only one part of responsible data use. Clear explanations, limited collection, secure systems, and meaningful choices help build trust beyond minimum requirements.",
      },
    ],
  },
];

const grid = document.querySelector("#article-grid");
const emptyState = document.querySelector("#empty-state");
const dialog = document.querySelector("#article-dialog");
const dialogContent = document.querySelector("#dialog-content");

function articleCard(article, index) {
  const primaryTag = article.tags[0];
  return `
    <article class="article-card" style="--card-bg:${article.background};--card-accent:${article.accent}">
      <div class="card-visual">
        <span class="card-symbol">${article.symbol}</span>
      </div>
      <div class="card-content">
        <div class="card-meta">
          <span class="card-tag">${primaryTag}</span>
          <span>${article.date}</span>
          <span>${article.minutes} min read</span>
        </div>
        <h3>${article.title}</h3>
        <p>${article.summary}</p>
        <button class="read-button" type="button" data-article="${index}">
          Read the review <span>→</span>
        </button>
      </div>
    </article>
  `;
}

function renderArticles(filter = "all") {
  const visible = articles
    .map((article, index) => ({ article, index }))
    .filter(({ article }) => filter === "all" || article.tags.includes(filter));

  grid.innerHTML = visible.map(({ article, index }) => articleCard(article, index)).join("");
  emptyState.hidden = visible.length !== 0;
}

function openArticle(index) {
  const article = articles[index];
  dialogContent.innerHTML = `
    <header class="dialog-hero" style="--dialog-bg:${article.background}">
      <div class="dialog-meta">
        <span>${article.tags.join(" · ")}</span>
        <span>${article.date}</span>
        <span>${article.minutes} min read</span>
      </div>
      <h2>${article.title}</h2>
    </header>
    <article class="dialog-body">
      <p class="dialog-lede">${article.lede}</p>
      ${article.sections
        .map(
          (section) => `
            <section>
              <h3>${section.heading}</h3>
              <p>${section.body}</p>
            </section>
          `,
        )
        .join("")}
      <p class="dialog-note">
        This overview is educational and does not constitute medical or legal advice.
      </p>
    </article>
  `;
  dialog.showModal();
  document.body.style.overflow = "hidden";
}

document.querySelector(".filters").addEventListener("click", (event) => {
  const button = event.target.closest(".filter");
  if (!button) return;
  document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  renderArticles(button.dataset.filter);
});

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-article]");
  if (button) openArticle(Number(button.dataset.article));
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("close", () => {
  document.body.style.overflow = "";
});
dialog.addEventListener("click", (event) => {
  const bounds = dialog.getBoundingClientRect();
  const outside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;
  if (outside) dialog.close();
});

const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");
menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  siteNav.classList.toggle("open", !expanded);
});
siteNav.addEventListener("click", () => {
  siteNav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
});

document.querySelector("#year").textContent = new Date().getFullYear();
renderArticles();
