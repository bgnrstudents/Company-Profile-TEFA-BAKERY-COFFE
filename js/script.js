// Navbar DAN FOOTER
function loadComponent(id, file) {
  return fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

Promise.all([
  loadComponent("navbar-placeholder", "includes/navbar.html"),
  loadComponent("footer-placeholder", "includes/footer.html"),
]).then(() => {
  setActiveNavbar();
});
// END Navbar DAN FOOTER
// TRANSITION LINK
document.addEventListener('DOMContentLoaded', function() {
  document.body.style.opacity = '1';
  
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (!link) return;
    
    const href = link.getAttribute('href');
    
    // Skip conditions
    if (!href || 
        link.classList.contains('dropdown-toggle') ||
        link.getAttribute('target') === '_blank' ||
        (href.startsWith('http') && !href.includes(window.location.hostname))) {
      return;
    }
    
    // ⬇️ PENTING: Hash-only links (#footer, #ulasan) - biarkan browser handle
    if (href.startsWith('#')) {
      return; // Default smooth scroll behavior
    }
    
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    
    // Links with page + hash (home.html#ulasan)
    if (href.includes('#')) {
      const [page, hash] = href.split('#');
      
      // Same page - let browser scroll
      if (page === currentPage) {
        return;
      }
      
      // Different page - apply transition
      e.preventDefault();
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.25s ease';
      
      setTimeout(() => {
        window.location.href = href;
      }, 250);
      return;
    }
    
    // Regular page links - apply transition
    e.preventDefault();
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.25s ease';
    
    setTimeout(() => {
      window.location.href = href;
    }, 250);
  });
});

// Auto scroll to hash after page load (untuk yang dari page lain)
window.addEventListener('load', function() {
  if (window.location.hash) {
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 600);
  }
});

// END TRANSITION LINK
// MAKANAN
// Toggle Favorite Button
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("fav-btn")) {
    e.preventDefault();
    e.target.classList.toggle("not-active");

    e.target.animate(
      [
        { transform: "scale(0.9)" },
        { transform: "scale(1.2)" },
        { transform: "scale(1)" },
      ],
      { duration: 200, easing: "ease-out" }
    );
  }
});
// END MAKANAN
// HORIZONTAL SCROLL ANEKA
const anekaScroll = document.getElementById("anekaScroll");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

function updateArrows() {
  if (!anekaScroll) return;
  leftBtn.style.display = anekaScroll.scrollLeft > 10 ? "block" : "none";
  rightBtn.style.display =
    anekaScroll.scrollLeft + anekaScroll.clientWidth < anekaScroll.scrollWidth - 10
      ? "block"
      : "none";
}

rightBtn?.addEventListener("click", () => {
  anekaScroll.scrollBy({ left: anekaScroll.clientWidth * 0.7, behavior: "smooth" });
  setTimeout(updateArrows, 350);
});

leftBtn?.addEventListener("click", () => {
  anekaScroll.scrollBy({ left: -anekaScroll.clientWidth * 0.7, behavior: "smooth" });
  setTimeout(updateArrows, 350);
});

anekaScroll?.addEventListener("scroll", updateArrows);
window.addEventListener("resize", updateArrows);
updateArrows();


// END HORIZONTAL SCROLL ANEKA
// MINUMAN
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const img = document.querySelector(".coffee-image");
  const overlay = document.querySelector(".overlay");

  if (img) img.style.transform = `translateY(${scrolled * 0.5}px)`;
  if (overlay) overlay.style.opacity = 1 - scrolled / 500;
});


document.querySelectorAll(".fav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("not-active");
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
// ===============================================
// NAVBAR ACTIVE STATE – FINAL & 100% JALAN
function setActiveNavbar() {
  const currentPage = window.location.pathname.split("/").pop() || "home.html";
  const currentHash = window.location.hash;

  // Bersihin semua active
  document.querySelectorAll(".navbar .nav-link, .dropdown-item").forEach(el => {
    el.classList.remove("active");
  });

  let activeSet = false;

  // 1. DROPDOWN ITEM (makanan.html, dll)
  document.querySelectorAll(".dropdown-item").forEach(item => {
    if (item.getAttribute("href") === currentPage) {
      item.classList.add("active");
      activeSet = true;
      const toggle = item.closest(".dropdown")?.querySelector(".dropdown-toggle");
      if (toggle) toggle.classList.add("active");
    }
  });

  // 2. Kalau di home.html & ada hash
  if (currentPage === "home.html") {
    if (currentHash === "#ulasan") {
      const link = document.querySelector('.nav-link[href="home.html#ulasan"], .nav-link[href="#ulasan"]');
      if (link) link.classList.add("active");
      activeSet = true;
    } else if (currentHash === "#footer") {
      const link = document.querySelector('.nav-link[href="home.html#footer"], .nav-link[href="#footer"]');
      if (link) link.classList.add("active");
      activeSet = true;
    } else if (!currentHash) {
      const home = document.querySelector('.nav-link[href="home.html"]');
      if (home) home.classList.add("active");
    }
  }
}

// Scroll detection — jalan di SEMUA halaman
let scrollTimeout;
function handleScroll() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const currentPage = window.location.pathname.split("/").pop() || "home.html";
    const scrollPos = window.scrollY + window.innerHeight / 2;

    // Ambil section ulasan & footer
    const ulasanSection = document.querySelector("#ulasan");
    const footerSection = document.querySelector("footer, #footer");

    // Bersihin active nav-link dulu (dropdown item ga ikut dibersihin)
    document.querySelectorAll(".navbar .nav-link").forEach(link => {
      link.classList.remove("active");
    });

    // Prioritas: Footer paling bawah
    if (footerSection && scrollPos > footerSection.offsetTop) {
      const contact = document.querySelector('.nav-link[href$="#footer"], .nav-link[href="#footer"]');
      if (contact) contact.classList.add("active");
    }
    // Ulasan aktif kalau di tengah-tengah
    else if (ulasanSection && scrollPos > ulasanSection.offsetTop && scrollPos < ulasanSection.offsetTop + ulasanSection.offsetHeight) {
      const ulasan = document.querySelector('.nav-link[href$="#ulasan"], .nav-link[href="#ulasan"]');
      if (ulasan) ulasan.classList.add("active");
    }
    // Default: Home aktif
    // else if (currentPage === "home.html") {
    //   const home = document.querySelector('.nav-link[href="home.html"]');
    //   if (home) home.classList.add("active");
    // }
  }, 50);
}

// Jalankan saat navbar ready
function runWhenReady() {
  if (document.querySelector(".navbar")) {
    setActiveNavbar();
    window.addEventListener("scroll", handleScroll);
  } else {
    const check = setInterval(() => {
      if (document.querySelector(".navbar")) {
        clearInterval(check);
        setActiveNavbar();
        window.addEventListener("scroll", handleScroll);
      }
    }, 50);
  }
}

document.addEventListener("DOMContentLoaded", runWhenReady);
window.addEventListener("hashchange", setActiveNavbar);



