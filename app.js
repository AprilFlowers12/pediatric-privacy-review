const articles = [
  {
    title: "WHAT’S NEW WITH HIPAA IN 2025",
    date: "September 15, 2025",
    minutes: 5,
    tags: ["HIPAA", "SECURITY", "HEALTHCARE PRIVACY"],
    summary:
      "HHS has proposed changes to the HIPAA Security Rule for the first time since 2013.",
    symbol: "25",
    background: "#f2d6cd",
    accent: "#a94735",
    content: `
      <p class="dialog-lede">In April 2025, the U.S. Department of Health and Human Services (HHS) Office for Civil Rights (OCR) officially proposed an update to the HIPAA Security Rule. This is the first meaningful overhaul since 2013, aiming to bring federal privacy and security standards in line with today’s technology.</p>
      <p>That’s 12 years of change in tech but no change in regulation. In that time, we’ve seen the rise of AI, wearable health monitors, digital portals, and apps that track everything from sleep to symptoms. The 2025 proposal could reshape how healthcare organizations protect personal data including that of our children.</p>
      <p>So, what’s in it and why should parents care? Let’s break it down.</p>

      <h3>What’s Changing in the HIPAA Security Rule?</h3>
      <ol>
        <li><strong>Encryption Will No Longer Be Optional:</strong> The old version of HIPAA labeled certain protections (like encryption) as “addressable,” meaning healthcare providers could opt out with a good reason. The new rule? No more loopholes. Encryption of health data in transit and at rest would be required.</li>
        <li><strong>Multi-Factor Authentication (MFA) Becomes Mandatory:</strong> You’ve probably used MFA when logging into a bank or your email. Now, healthcare systems would be required to use it to access sensitive health information.</li>
        <li><strong>Faster Breach Notifications:</strong> The deadline to notify you of a data breach could drop from 60 days to 72 hours.</li>
        <li>
          <strong>Stronger Risk Assessments:</strong> The new rule cracks down on weak or one-time-only risk assessments. Organizations would be required to:
          <ul>
            <li>Conduct annual technical audits</li>
            <li>Perform semiannual vulnerability scans</li>
            <li>Keep a real inventory of every system accessing health data</li>
          </ul>
        </li>
        <li><strong>Third-Party Accountability:</strong> Vendors (like apps or billing platforms) who touch protected health information (PHI) must follow the same strict rules no matter how far removed they seem from the doctor’s office.</li>
      </ol>

      <h3>Why HHS and OCR Are Pushing for Stronger Security Requirements</h3>
      <p>The driving force is simple: cyberattacks on healthcare are at an all-time high. Hospitals, clinics, and even pediatric practices have been hit by ransomware that locks providers out of patient records until a payment is made. Children’s data is especially attractive to hackers because it can be used for identity theft and often goes unnoticed for years.</p>
      <p>HHS and its Office for Civil Rights want the new rule to close long-standing gaps in HIPAA and make sure every organization handling health data is using modern, baseline protections like encryption and MFA.</p>
      <blockquote>Human error is still the #1 cause of breaches. Providers should train employees on phishing, password hygiene, and breach reporting.</blockquote>

      <h3>How These Updates Could Impact Healthcare Providers and Business Associates</h3>
      <p>For providers and their vendors, these updates mean:</p>
      <ul>
        <li><strong>Higher compliance costs:</strong> organizations may need to upgrade IT systems, hire cybersecurity staff, or bring in external auditors.</li>
        <li><strong>Stronger oversight:</strong> pediatric clinics, hospitals, and even third-party apps will all be held to the same standards, with fewer excuses for weak security.</li>
        <li><strong>Faster response times:</strong> breaches can’t sit in limbo for weeks. Providers must quickly investigate and notify families.</li>
      </ul>
      <p>The upside: these changes create greater trust between families and healthcare systems. Parents can feel more confident that their child’s sensitive records are being protected at every step.</p>

      <h3>What Organizations Can Start Doing Now to Prepare</h3>

      <h3>What Does This Mean for Our Smallest Patients?</h3>
      <p>Children’s health data is some of the most sensitive and overlooked information out there. It includes developmental details, mental health notes, vaccination records and that data often follows them for a lifetime.</p>
      <p>The proposed HIPAA updates don’t just protect “health information” they protect childhood. They help ensure:</p>
      <ul>
        <li>Data is shared only with people who need it</li>
        <li>Apps and tools used in pediatric care follow the same privacy rules</li>
        <li>Parents can be alerted early if something goes wrong</li>
      </ul>

      <div class="article-example">
        <strong>Example</strong>
        <p>Imagine this: your child’s pediatrician uses a third-party app to track asthma symptoms. Under the old HIPAA rules, if that app’s vendor wasn’t directly tied to the hospital or clinic, its security standards could be weaker or even optional. If the app was hacked, you might not hear about it for months.</p>
        <p>Under the proposed 2025 rule:</p>
        <ul>
          <li>That app must meet the same strict security requirements as the hospital.</li>
          <li>All data, like your child’s medication usage or breathing test results would need to be encrypted.</li>
          <li>If a breach happened, you’d be notified within 72 hours, not two months.</li>
        </ul>
        <p>For parents, this means stronger protection, faster communication, and more control over who touches their child’s health information.</p>
      </div>

      <h3>Relevant Article(s):</h3>
      <p>For more detailed information on the HIPAA Privacy Rule changes, follow the link below to the Health and Human Services Website:</p>
      <p><a class="article-source" href="https://www.hhs.gov/hipaa/for-professionals/security/hipaa-security-rule-nprm/factsheet/index.html" target="_blank" rel="noopener noreferrer">HHS HIPAA Security Rule NPRM Fact Sheet →</a></p>
    `,
  },
  {
    title: "HIPAA Privacy Rule",
    date: "September 8, 2025",
    minutes: 5,
    tags: ["HIPAA", "PRIVACY", "HEALTHCARE PRIVACY"],
    summary:
      "The HIPAA Privacy Rule protects your health information and your rights.",
    symbol: "P",
    background: "#dbe9e5",
    accent: "#267a6d",
    content: `
      <h3>What Is the HIPAA Privacy Rule?</h3>
      <p class="dialog-lede">If you've ever signed a form at the doctors office or wondered who sees your medical records, you’ve brushed up against HIPAA.</p>
      <p>HIPAA (the Health Insurance Portability and Accountability Act) is a federal law designed to safeguard you and your family’s health information and one of its most important components is the Privacy Rule.</p>
      <p>Here’s what you really need to know:</p>

      <h3>HIPAA Privacy Rule: The Basics</h3>
      <ol>
        <li>
          <strong>It Protects Your Health Information</strong>
          <p>HIPAA keeps your sensitive health information private. That includes:</p>
          <ul>
            <li>Your diagnosis</li>
            <li>Vaccination and immunization records</li>
            <li>Test results</li>
            <li>Mental health notes</li>
            <li>Even the fact that you went to the doctor</li>
          </ul>
          <p>This information is called Protected Health Information (PHI) and can’t be shared without your permission, unless there's a legal or safety reason (more on that in a minute).</p>
        </li>
        <li>
          <strong>Only Certain People Can See It</strong>
          <p>Not everyone can access your health records. Only those who need it to do their job can legally see it, like:</p>
          <ul>
            <li>Your doctors and nurses</li>
            <li>Health insurance companies (to process claims)</li>
            <li>Some billing and administrative staff</li>
          </ul>
          <p>People like teachers, coaches, or employers can’t access this information unless you give written permission.</p>
        </li>
        <li>
          <strong>You Have Rights Under HIPAA</strong>
          <p>HIPAA isn’t just about what others can’t do, it also gives you control. You have the right to:</p>
          <ul>
            <li>See your medical records</li>
            <li>Ask for corrections if something’s wrong or missing</li>
            <li>Know who has accessed your records</li>
            <li>Request private communication (like asking not to leave voicemails with sensitive info, or to receive letters instead of calls)</li>
          </ul>
          <p>Knowing your rights helps you take charge of your own health and privacy.</p>
        </li>
        <li>
          <strong>There Are a Few Exceptions</strong>
          <p>Sometimes, your health information can be shared without your permission, such as:</p>
          <ul>
            <li>When it’s required by law (like reporting infectious diseases)</li>
            <li>In emergencies, to protect you or others</li>
            <li>For public health and safety efforts</li>
            <li>With child protective services, if abuse or neglect is suspected</li>
          </ul>
          <p>Even in these cases, HIPAA limits what can be shared and who receives it.</p>
        </li>
      </ol>

      <h3>Why This Matters For Our Smallest Patients...</h3>
      <p>In today’s world of apps, patient portals, and AI-powered health tools, your child’s medical information can travel across systems and devices in seconds. HIPAA’s Privacy Rule sets clear boundaries on how that information can be used and shared. Knowing your rights empowers you to decide who has access, for what purpose, and for how long.</p>
      <div class="article-example">
        <strong>Example</strong>
        <p>Imagine your pediatrician recommends a new health-tracking app for your child’s asthma. Before signing up, you can ask how the app stores and shares your child’s data, whether it’s protected under HIPAA, and if you can limit or revoke access later. That knowledge helps ensure your child’s sensitive information stays protected.</p>
      </div>

      <h3>Relevant Article(s):</h3>
      <p>For more detailed information on the HIPAA Privacy Rule, follow the link below to the Health and Human Services Website:</p>
      <p><a class="article-source" href="https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" target="_blank" rel="noopener noreferrer">HHS HIPAA Privacy Rule guidance →</a></p>
    `,
  },
  {
    title: "HIPAA Security Rule",
    date: "September 8, 2025",
    minutes: 5,
    tags: ["HIPAA", "SECURITY", "HEALTHCARE PRIVACY"],
    summary:
      "The HIPAA Security Rule protects electronic health information from unauthorized access.",
    symbol: "S",
    background: "#d8e3ed",
    accent: "#426f93",
    content: `
      <h3>Understanding the HIPAA Security Rule</h3>
      <p class="dialog-lede">When we think about HIPAA, many people are most familiar with the Privacy Rule, which focuses on who can access your health information and under what circumstances. But there’s another critical piece to the puzzle: the Security Rule.</p>
      <p>The Security Rule is all about how electronic protected health information (ePHI) is kept safe. It ensures that sensitive data—like medical histories, lab results, or billing records stored or shared electronically—remains protected from unauthorized access or accidental disclosure.</p>
      <blockquote>“If the Privacy Rule is about who can see your health information, the Security Rule is about how that information is protected.”</blockquote>

      <h3>What the Security Rule Covers</h3>
      <p>While the Privacy Rule applies to all forms of protected health information (whether written, spoken, or electronic), the Security Rule zeroes in specifically on electronic health data. Its main goal is to set national standards for keeping this information secure.</p>

      <h3>The Three Types of Safeguards</h3>
      <p>To achieve this, the Security Rule requires covered entities like healthcare providers, insurance plans, and their business partner to implement three categories of safeguards:</p>
      <ul>
        <li><strong>Administrative Safeguards</strong><br>Policies, procedures, and staff training that guide how ePHI is handled. For example, limiting system access to only those who need it for their job.</li>
        <li><strong>Physical Safeguards</strong><br>Measures to protect the physical spaces where ePHI is stored. Think locked server rooms, workstation positioning, or even facility access controls.</li>
        <li><strong>Technical Safeguards</strong><br>The technology tools that keep data safe such as encryption, secure passwords, automatic log-off, and audit controls that track who accesses information.</li>
      </ul>

      <h3>Why This Matters for Providers, Staff, and Our Smallest of Patients</h3>
      <p>For healthcare providers and staff, the Security Rule is about more than just compliance it’s about protecting trust. Every patient, especially the smallest and most vulnerable ones, deserves to know their personal information is treated with care and security. Strong safeguards also help organizations reduce risks of costly breaches and maintain a reputation for reliability.</p>

      <h3>Simple Tips to Keep ePHI Secure</h3>
      <p>Even small steps can go a long way in protecting electronic health information:</p>
      <ul>
        <li>Use strong, unique passwords and change them regularly.</li>
        <li>Never share login credentials.</li>
        <li>Be cautious when opening emails or links.
          <ul><li>Phishing remains one of the biggest threats!</li></ul>
        </li>
        <li>Log off devices when they’re not in use.</li>
        <li>Keep software and security patches up to date.</li>
      </ul>
      <p>In short: while the Privacy Rule governs who can see health information, the Security Rule makes sure that electronic data stays locked down and secure. Together, they work hand-in-hand to safeguard both privacy and trust in healthcare.</p>

      <h3>Relevant Article(s):</h3>
      <p>For more detailed information on the HIPAA Security Rule, follow the link below to the Health and Human Services Website:</p>
      <p><a class="article-source" href="https://www.hhs.gov/hipaa/for-professionals/security/index.html" target="_blank" rel="noopener noreferrer">HHS HIPAA Security Rule guidance →</a></p>
    `,
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
      ${
        article.content ||
        `
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
        `
      }
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
