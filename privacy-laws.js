import { laws, reviewedOn, searchLaws, topicLabels } from "./laws-data.js";

const form = document.querySelector("#law-search-form");
const search = document.querySelector("#law-search");
const topic = document.querySelector("#law-topic");
const jurisdiction = document.querySelector("#law-jurisdiction");
const results = document.querySelector("#law-results");
const count = document.querySelector("#law-count");
const empty = document.querySelector("#law-empty");
const reviewDate = new Intl.DateTimeFormat("en-US", {
  month: "long", day: "numeric", year: "numeric", timeZone: "UTC",
}).format(new Date(`${reviewedOn}T00:00:00Z`));

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function link(source) {
  const node = element("a", source.label);
  node.href = source.url;
  node.target = "_blank";
  node.rel = "noopener noreferrer";
  node.append(element("span", " (opens in a new tab)", "sr-only"));
  return node;
}

function sourceList(sources) {
  const list = element("ul", "", "law-sources");
  for (const source of sources) {
    const item = element("li");
    item.append(link(source));
    if (source.publisher) item.append(element("small", `Publisher: ${source.publisher}`));
    list.append(item);
  }
  return list;
}

function card(law) {
  const article = element("article", "", "law-card");
  article.id = `law-${law.id}`;
  const meta = element("div", "", "law-meta");
  meta.append(element("span", law.jurisdiction, "law-badge"), element("span", law.kind));
  article.append(meta, element("h3", law.name), element("p", `${law.acronym} | ${law.citation}`, "law-citation"), element("p", law.summary, "law-summary"));
  const tags = element("p", law.topics.map((key) => topicLabels[key]).join(" / "), "law-topics");
  article.append(tags);

  const details = element("details", "", "law-details");
  const toggle = element("summary", "Explore law & sources");
  toggle.append(element("span", `: ${law.name}`, "sr-only"));
  details.append(toggle);
  const body = element("div", "", "law-detail-body");
  body.append(element("h4", "Who it covers"), element("p", law.appliesTo));
  body.append(element("h4", "Key protections and limits"));
  const points = element("ul");
  for (const point of law.points) points.append(element("li", point));
  body.append(points, element("h4", "Status and dates"), element("p", law.status));
  body.append(element("h4", "Read the actual legal text"), element("p", "Open the complete text at the government publisher. These links contain the law or regulation, rather than this site's summary."));
  if (law.excerpt) {
    body.append(element("blockquote", law.excerpt.text));
    body.append(link({label: `Selected excerpt: ${law.excerpt.citation}`, url: law.excerpt.url}));
  }
  body.append(sourceList(law.text), element("h4", "Legislative and agency credit"), element("p", law.credit));
  body.append(element("h4", "References and guidance"), sourceList(law.references));
  body.append(element("p", `Summary prepared for The Pediatric Privacy Review. Sources reviewed ${reviewDate}.`, "law-review-date"));
  const permalink = element("a", "Link to this entry", "law-permalink");
  permalink.href = `#law-${law.id}`;
  body.append(permalink);
  details.append(body);
  article.append(details);
  return article;
}

function render() {
  const matches = searchLaws(search.value, topic.value, jurisdiction.value);
  results.replaceChildren(...matches.map(card));
  count.textContent = `${matches.length} of ${laws.length} laws and rules`;
  empty.hidden = matches.length !== 0;
}

function resetFilters() {
  search.value = "";
  topic.value = "all";
  jurisdiction.value = "all";
  render();
}

function showLinkedLaw() {
  const id = window.location.hash.slice(1);
  if (!laws.some((law) => `law-${law.id}` === id)) return;
  resetFilters();
  const target = document.getElementById(id);
  target.querySelector("details").open = true;
  target.scrollIntoView({block: "start"});
  target.querySelector("summary").focus({preventScroll: true});
}

form.addEventListener("submit", (event) => event.preventDefault());
search.addEventListener("input", render);
topic.addEventListener("change", render);
jurisdiction.addEventListener("change", render);
form.addEventListener("reset", (event) => {
  event.preventDefault();
  resetFilters();
});
window.addEventListener("hashchange", showLinkedLaw);
render();
showLinkedLaw();
