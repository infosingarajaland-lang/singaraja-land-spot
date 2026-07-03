const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("overlay");
const closeMenu = document.getElementById("close-menu");
const filterForm = document.getElementById("propertyFilterForm");

// ===============================
// PROPERTY FILTER DEKSTOP
// ===============================
if (filterForm) {
  filterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const keyword = this.keyword.value.toLowerCase();
    const tipe = this.tipe.value.toLowerCase();
    const lokasi = this.lokasi.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

      const title = card.dataset.title;
      const cardTipe = card.dataset.tipe;
      const cardLokasi = card.dataset.lokasi;

      const matchKeyword = title.includes(keyword);
      const matchTipe = tipe === "" || cardTipe === tipe;
      const matchLokasi = lokasi === "" || cardLokasi === lokasi;

      if (matchKeyword && matchTipe && matchLokasi) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }

    });
  });
}

// ===============================
// PROPERTY FILTER BURGER HP
// ===============================
// ✅ Buka menu (SAFE)
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.add("active");
    overlay.classList.add("active");
  });
}

// ✅ Tutup via overlay
if (overlay) {
  overlay.addEventListener("click", () => {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
  });
}

// ✅ Tutup via tombol X
if (closeMenu) {
  closeMenu.addEventListener("click", () => {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
  });
}