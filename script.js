const form = document.querySelector("#rfqForm");
const summaryBox = document.querySelector("#summaryBox");

function valueOf(formData, key, fallback = "Not provided") {
  const value = String(formData.get(key) || "").trim();
  return value || fallback;
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const company = valueOf(formData, "company");
  const name = valueOf(formData, "name");
  const email = valueOf(formData, "email");
  const country = valueOf(formData, "country");
  const message = valueOf(formData, "message", "Please attach or paste your BOM / part list.");

  summaryBox.innerHTML = `
    <strong>RFQ summary</strong>
    <p><b>Company:</b> ${escapeHtml(company)}</p>
    <p><b>Contact:</b> ${escapeHtml(name)} / ${escapeHtml(email)}</p>
    <p><b>Destination:</b> ${escapeHtml(country)}</p>
    <p><b>Inquiry:</b> ${escapeHtml(message)}</p>
  `;
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
