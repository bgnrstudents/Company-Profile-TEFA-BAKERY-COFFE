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
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease';
  requestAnimationFrame(() => document.body.style.opacity = '1');
});

document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (!link) return;

  const href = link.getAttribute('href');
  if (!href ||
      link.classList.contains('dropdown-toggle') ||
      link.getAttribute('target') === '_blank' ||
      href.startsWith('#') ||
      (href.startsWith('http') && !href.includes(location.hostname))) {
    return;
  }

  e.preventDefault();

  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.3s ease';

  setTimeout(() => {
    history.pushState(null, '', href);
    window.location.href = href;   
  }, 300);
});


window.addEventListener('popstate', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.3s ease';

  setTimeout(() => {
    window.location.reload();  
  }, 300);
});


window.addEventListener('pageshow', (e) => {
  if (e.persisted) {  
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
      document.body.style.opacity = '1';
      document.body.style.transition = 'opacity 0.4s ease';
    });
  }
});
// END TRANSITION LINK
// LOVE ACTIVE 
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".fav-btn");
  if (!btn) return;

  e.preventDefault();

  btn.classList.toggle("not-active");

  btn.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(0.85)" },
      { transform: "scale(1.3)" },
      { transform: "scale(1)" }
    ],
    {
      duration: 350,
      easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)" 
    }
  );
});
// END LOVE ACTIVE
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


// END MINUMAN
// NAVBAR ACTIVE STATE – FINAL & 100% JALAN
function setActiveNavbar() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const currentHash = window.location.hash;


  document.querySelectorAll(".navbar .nav-link, .dropdown-item").forEach(el => {
    el.classList.remove("active");
  });

  let activeSet = false;

  document.querySelectorAll(".dropdown-item").forEach(item => {
    if (item.getAttribute("href") === currentPage) {
      item.classList.add("active");
      activeSet = true;
      const toggle = item.closest(".dropdown")?.querySelector(".dropdown-toggle");
      if (toggle) toggle.classList.add("active");
    }
  });


  if (currentPage === "index.html") {
    if (currentHash === "#ulasan") {
      const link = document.querySelector('.nav-link[href="index.html#ulasan"], .nav-link[href="#ulasan"]');
      if (link) link.classList.add("active");
      activeSet = true;
    } else if (currentHash === "#footer") {
      const link = document.querySelector('.nav-link[href="index.html#footer"], .nav-link[href="#footer"]');
      if (link) link.classList.add("active");
      activeSet = true;
    } else if (!currentHash) {
      const home = document.querySelector('.nav-link[href="index.html"]');
      if (home) home.classList.add("active");
    }
  }
}


let scrollTimeout;
function handleScroll() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const scrollPos = window.scrollY + window.innerHeight / 2;

    
    const ulasanSection = document.querySelector("#ulasan");
    const footerSection = document.querySelector("footer, #footer");


    document.querySelectorAll(".navbar .nav-link").forEach(link => {
      link.classList.remove("active");
    });

 
    if (footerSection && scrollPos > footerSection.offsetTop) {
      const contact = document.querySelector('.nav-link[href$="#footer"], .nav-link[href="#footer"]');
      if (contact) contact.classList.add("active");
    }

    else if (ulasanSection && scrollPos > ulasanSection.offsetTop && scrollPos < ulasanSection.offsetTop + ulasanSection.offsetHeight) {
      const ulasan = document.querySelector('.nav-link[href$="#ulasan"], .nav-link[href="#ulasan"]');
      if (ulasan) ulasan.classList.add("active");
    }
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


// ULASAN FORM → WHATSAPP (STAR)
document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('ratingValue');
    let selectedRating = 0;


    stars.forEach(star => {
        star.addEventListener('click', function () {
            selectedRating = this.getAttribute('data-value');
            ratingValue.value = selectedRating;

            stars.forEach(s => {
                if (parseInt(s.getAttribute('data-value')) <= selectedRating) {
                    s.textContent = '★';
                    s.style.color = '#ffc107';
                    s.classList.add('active');
                } else {
                    s.textContent = '☆';
                    s.style.color = '#524235';
                    s.classList.remove('active');
                }
            });
        });
    });

   
    document.getElementById('reviewForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const nama = document.getElementById('nama').value.trim();
        const ulasan = document.getElementById('isi-ulasan').value.trim();
        const rating = ratingValue.value;

   
        if (!nama || !ulasan || rating === "0") {
            alert("Harap lengkapi semua bidang dan berikan rating sebelum mengirim ulasan.");
            return;
        }

    
        const pesanWA = `Halo Admin TEFA Bakery Coffee!%0A%0A`
                      + `Ada ulasan baru nih ⭐%0A%0A`
                      + `Nama: *${nama}*%0A`
                      + `Rating: *${rating} / 5* ${'★'.repeat(rating)}${'☆'.repeat(5-rating)}%0A%0A`
                      + `Ulasan:%0A${ulasan}%0A%0A`
                      + `Terima kasih!`;


        window.open(`https://wa.me/6285850030268?text=${pesanWA}`, '_blank');


        this.reset();
        ratingValue.value = "0";
        selectedRating = 0;
        stars.forEach(s => {
            s.textContent = '☆';
            s.style.color = '#ddd';
            s.classList.remove('active');
        });

        alert("Ulasan berhasil dikirim ke WhatsApp! Terima kasih");
    });
});
