// Navbar
fetch("includes/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;

    const currentPage = location.pathname.split("/").pop();

    document.querySelectorAll(".nav-link").forEach((link) => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  });
// FOOTER
fetch("includes/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
    const currentPage = location.pathname.split("/").pop();

    document.querySelectorAll(".nav-link").forEach((link) => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  });
// MAKANAN
// Toggle Favorite Button
document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua tombol favorite
  const favBtns = document.querySelectorAll(".fav-btn");

  favBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault(); // Biar nggak reload page

      // Toggle class active/not-active
      this.classList.toggle("not-active");

      // Kasih feedback visual untuk SEMUA klik (love & unlove)
      this.style.transform = "scale(1.2)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 200);
    });
  });
});

// Horizontal scroll controls
const anekaScroll = document.getElementById("anekaScroll");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

function updateArrows() {
  if (!anekaScroll) return;
  leftBtn.style.display = anekaScroll.scrollLeft > 10 ? "block" : "none";
  rightBtn.style.display =
    anekaScroll.scrollLeft + anekaScroll.clientWidth <
    anekaScroll.scrollWidth - 10
      ? "block"
      : "none";
}

rightBtn?.addEventListener("click", () => {
  anekaScroll.scrollBy({
    left: anekaScroll.clientWidth * 0.7,
    behavior: "smooth",
  });
  setTimeout(updateArrows, 350);
});

leftBtn?.addEventListener("click", () => {
  anekaScroll.scrollBy({
    left: -anekaScroll.clientWidth * 0.7,
    behavior: "smooth",
  });
  setTimeout(updateArrows, 350);
});

anekaScroll?.addEventListener("scroll", updateArrows);
window.addEventListener("resize", updateArrows);
updateArrows();
// END MAKANAN
// MINUMAN
// Parallax on scroll
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".coffee-image");
  const overlay = document.querySelector(".overlay");

  if (parallax) {
    parallax.style.transform = "translateY(" + scrolled * 0.5 + "px)";
  }

  if (overlay) {
    overlay.style.opacity = 1 - scrolled / 500;
  }
});

// Mousemove parallax effect
document.addEventListener("mousemove", function (e) {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  const coffeeImage = document.querySelector(".coffee-image");
  if (coffeeImage) {
    coffeeImage.style.transform = `translate(${mouseX * 20}px, ${
      mouseY * 20
    }px) scale(1.1)`;
  }
});
document.querySelectorAll(".fav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("not-active");
    // simple animation
    btn.animate(
      [
        { transform: "scale(0.9)" },
        { transform: "scale(1.15)" },
        { transform: "scale(1)" },
      ],
      { duration: 220, easing: "ease-out" }
    );
  });
});
// END MINUMAN
