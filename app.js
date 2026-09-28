const sidebar = document.getElementById("sidebar");
document.getElementById("menuBtn")?.addEventListener("click", () => sidebar.classList.toggle("open"));

document.querySelectorAll(".nav-item").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    sidebar.classList.remove("open");
  });
});

document.querySelectorAll("[data-query]").forEach(btn => {
  btn.addEventListener("click", () => {
    const q = btn.dataset.query;
    document.getElementById("heroSearch").value = q;
    filterProducts(q);
  });
});

document.getElementById("globalSearch")?.addEventListener("input", e => filterProducts(e.target.value));
document.getElementById("heroSearch")?.addEventListener("input", e => filterProducts(e.target.value));

function runSearch() {
  filterProducts(document.getElementById("heroSearch").value);
  document.getElementById("productGrid")?.scrollIntoView({behavior:"smooth", block:"center"});
}

function filterProducts(query) {
  const q = (query || "").trim().toLowerCase();
  document.querySelectorAll(".product-card").forEach(card => {
    card.style.display = !q || card.dataset.search.toLowerCase().includes(q) ? "" : "none";
  });
}

// Make the quick access controls easy to wire into your app routes.
document.querySelectorAll(".quick-access button").forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("Data Beacon action:", btn.innerText.trim());
  });
});
