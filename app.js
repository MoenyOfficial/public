const $ = (sel) => document.querySelector(sel);

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clampProgress(n) {
  if (typeof n !== "number" || Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(100, n));
}

function renderItems(items, query = "") {
  const q = query.trim().toLowerCase();
  const filtered = !q
    ? items
    : items.filter(it => {
        const hay = [
          it.title,
          it.note || "",
          ...(it.tags || [])
        ].join(" ").toLowerCase();
        return hay.includes(q);
      });

  const list = $("#list");
  list.innerHTML = "";

  if (filtered.length === 0) {
    list.innerHTML = `<li class="empty">No matching items.</li>`;
    $("#count").textContent = `0 items`;
    return;
  }

  for (const it of filtered) {
    const li = document.createElement("li");

    const progress = clampProgress(it.progress);
    const done = it.done === true || progress >= 100;

    li.className = `item ${done ? "done" : ""}`;

    const tags = (it.tags || [])
      .map(t => `<span class="tag">${escapeHtml(t)}</span>`)
      .join("");

    const note = it.note ? `<p class="meta">${escapeHtml(it.note)}</p>` : "";

    li.innerHTML = `
      <span class="dot" aria-hidden="true"></span>
      <div style="width:100%">
        <p class="title">${escapeHtml(it.title)} ${tags}</p>
        ${note}

        <div class="progress-wrapper">
          <div class="progress-bar" aria-label="Progress">
            <div class="progress-fill" style="width:${progress}%"></div>
          </div>
          <span class="progress-text">${progress}%</span>
        </div>
      </div>
    `;

    list.appendChild(li);
  }

  $("#count").textContent = `${filtered.length} item${filtered.length === 1 ? "" : "s"}`;
}

async function main() {
  // Auto-set repo link if running on GitHub Pages
  const { host, pathname } = window.location;
  if (host.endsWith("github.io")) {
    const parts = pathname.split("/").filter(Boolean);
    const owner = host.split(".")[0];
    const repo = parts[0];
    const repoUrl = `https://github.com/${owner}/${repo}`;
    $("#repoLink").href = repoUrl;
  } else {
    $("#repoLink").href = "#";
  }

  // Load todos (public, same for everyone)
  const res = await fetch("todos.json", { cache: "no-store" });
  if (!res.ok) throw new Error("Could not load todos.json");
  const data = await res.json();

  $("#updated").textContent = `Updated: ${data.updated || "—"}`;
  const items = Array.isArray(data.items) ? data.items : [];

  renderItems(items);

  $("#search").addEventListener("input", (e) => {
    renderItems(items, e.target.value);
  });
}

main().catch(err => {
  console.error(err);
  const list = $("#list");
  list.innerHTML = `<li class="empty">Error loading the list. Check the console.</li>`;
});