// Isi file: script.js
document.addEventListener("DOMContentLoaded", function () {
  // Muat header
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;

      // Dapatkan nama halaman saat ini, misal: "index.html" atau "bilangan_bulat.html"
      const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

      // Cari semua link di navigasi
      const navLinks = document.querySelectorAll(
        ".nav-links a.nav-link, .nav-links .dropdown-content a"
      );

      navLinks.forEach((link) => {
        const linkHref = link.getAttribute("href");

        // Cek apakah href link sama dengan halaman saat ini
        if (linkHref === currentPage) {
          // Jika ini link dropdown, tandai juga tombol dropdown-nya (opsional)
          if (link.closest(".nav-dropdown")) {
            link
              .closest(".nav-dropdown")
              .querySelector(".dropbtn")
              .classList.add("active");
          }
          // Jika ini link biasa (bukan dropdown)
          else if (link.classList.contains("nav-link")) {
            link.classList.add("active");
          }
        }
      });
    });
});
