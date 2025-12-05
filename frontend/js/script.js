
document.addEventListener("DOMContentLoaded", () => {
    const p = document.getElementById("typewriter");
    if (!p) return;

    // Tomamos el texto original y normalizamos cualquier whitespace a un solo espacio
    const raw = p.textContent || p.innerText || "";
    const text = raw.replace(/\s+/g, " ").trim(); // <- clave: evita que las palabras se peguen

    // Limpia el contenido para empezar la animación
    p.textContent = "";
    p.style.opacity = 1; // mostrar antes de empezar

    let i = 0;
    let animacionIniciada = false;
    let typingTimer = null;

    function escribir() {
        if (i < text.length) {
            p.textContent += text.charAt(i);
            i++;
            typingTimer = setTimeout(escribir, 30); // velocidad (ms)
        } else {
            // quitar cursor cuando termine (si lo añadiste)
            p.classList.remove("cursor");
        }
    }

    // IntersectionObserver para iniciar al hacer scroll
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animacionIniciada) {
                animacionIniciada = true;
                p.classList.add("cursor"); // añadir cursor parpadeante opcional
                escribir();
                obs.unobserve(p); // solo una vez
            }
        });
    }, { threshold: 0.3 });

    observer.observe(p);

    // Si quieres reiniciar el intervalo al hacer click por ejemplo:
    // p.addEventListener('click', () => {
    //     clearTimeout(typingTimer);
    //     i = 0;
    //     p.textContent = "";
    //     animacionIniciada = false;
    //     observer.observe(p);
    // });
});























// ESTO LO EDITAS TÚ dependiendo si estás en vivo o no
const isTiktokLive = false;   // Cambia a true cuando estés en vivo
const isKickLive = false;     // Cambia a true cuando estés en vivo

const tiktokBtn = document.getElementById("btn-tiktok");
const kickBtn = document.getElementById("btn-kick");

// Verificar TikTok Live
fetch("/live/tiktok")
    .then(res => res.json())
    .then(data => {
        if (data.live) {
            tiktokBtn.classList.add("active");
            tiktokBtn.onclick = () => window.open("https://www.tiktok.com/@soy_wady_rd/live", "_blank");
        }
    });

// Verificar Kick Live
fetch("/live/kick")
    .then(res => res.json())
    .then(data => {
        if (data.live) {
            kickBtn.classList.add("active");
            kickBtn.onclick = () => window.open("https://kick.com/soy_wady_rd", "_blank");
        }
    });





    async function verificarEnVivo() {
    try {
        const res = await fetch("/api/live");
        const data = await res.json();

        const tiktokBtn = document.getElementById("btn-tiktok");
        const kickBtn = document.getElementById("btn-kick");

        // TikTok
        if (data.tiktokLive) {
            tiktokBtn.classList.add("activo");
            tiktokBtn.classList.remove("inactivo");
            tiktokBtn.disabled = false;
            tiktokBtn.onclick = () => window.open("https://www.tiktok.com/@soy_wady_rd/live", "_blank");
        } else {
            tiktokBtn.classList.add("inactivo");
            tiktokBtn.classList.remove("activo");
            tiktokBtn.disabled = true;
            tiktokBtn.onclick = null;
        }

        // Kick
        if (data.kickLive) {
            kickBtn.classList.add("activo");
            kickBtn.classList.remove("inactivo");
            kickBtn.disabled = false;
            kickBtn.onclick = () => window.open("https://kick.com/soy-wady-rd", "_blank");
        } else {
            kickBtn.classList.add("inactivo");
            kickBtn.classList.remove("activo");
            kickBtn.disabled = true;
            kickBtn.onclick = null;
        }

    } catch (error) {
        console.error("Error consultando API:", error);
    }
}

// Llamar cada 20 segundos
setInterval(verificarEnVivo, 20000);

// Llamada inicial
verificarEnVivo();


// Evitar que el navegador recuerde la posición al recargar
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});














// ⚠️ BLOQUEO TOTAL DEL SCROLL
function bloquearScroll(e) {
  e.preventDefault();
}

function activarBloqueoScroll() {
  document.body.classList.add("no-scroll");
  window.addEventListener("scroll", bloquearScroll, { passive: false });
  window.addEventListener("wheel", bloquearScroll, { passive: false });
  window.addEventListener("touchmove", bloquearScroll, { passive: false });
  window.addEventListener("keydown", bloquearScroll, { passive: false });
}

function quitarBloqueoScroll() {
  document.body.classList.remove("no-scroll");
  window.removeEventListener("scroll", bloquearScroll);
  window.removeEventListener("wheel", bloquearScroll);
  window.removeEventListener("touchmove", bloquearScroll);
  window.removeEventListener("keydown", bloquearScroll);
}



document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("name-modal");
  const btnEntrar = document.getElementById("btn-entrar");
  const hero = document.querySelector(".hero");
  const video = document.querySelector(".hero-video");
  const nextSection = document.querySelector("#sobre-mi");

  // Mostrar modal
  modal.classList.add("show");
  activarBloqueoScroll()

  // 🟢 PRE-CARGAR el video sin reproducirlo
  if (video) {
    video.load();
  }

  /* -------------------------
     🔥 CUANDO LE DA ENTRAR
  -------------------------- */
  btnEntrar.addEventListener("click", () => {
    modal.classList.remove("show");


    if (!video) return;

    // Siempre empezar muted (obligatorio)
    video.muted = true;

    video.play().then(() => {
      setTimeout(() => {
        video.muted = false;
      }, 400);

    }).catch(err => {
      console.warn("El navegador bloqueó play():", err);
    });
  });

  /* -------------------------
     🔥 CUANDO TERMINA EL VIDEO
  -------------------------- */
  video.addEventListener("ended", () => {

    // 🔓 AHORA sí desbloquea scroll
  quitarBloqueoScroll();

  
    video.classList.add("video-hide");

    setTimeout(() => {
      hero.classList.add("hero-collapse");

      hero.addEventListener("transitionend", () => {
        nextSection.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
          video.remove();
        }, 450);

      }, { once: true });

    }, 350);
  });

});

























document.addEventListener('DOMContentLoaded', () => {
    const capoButton = document.querySelector('.carbon-hood-button');
    const socialIcons = document.querySelector('.social-icons');

    let open = false;

    capoButton.addEventListener('click', () => {
        if (!open) {
            capoButton.classList.add('open');      // Capó sube
            socialIcons.classList.add('open');     // Social aparece
        } else {
            capoButton.classList.remove('open');   // Capó baja
            socialIcons.classList.remove('open');  // Social desaparece
        }
        open = !open;
    });
});

















const images = [
    "img/forza.jpg",
    "img/cod.png",
    "img/fortnite.jpg",
    "img/f123.jpg",
    "img/assettocorsa.jpg",
    "img/gtavonline.jpg",
    "img/snowrunner.jpg"
];

let index = 0;
let autoSlide;

const prevItem = document.querySelector(".carousel-item.prev");
const activeItem = document.querySelector(".carousel-item.active");
const nextItem = document.querySelector(".carousel-item.next");

function updateImages() {
    prevItem.style.backgroundImage  = `url(${images[(index - 1 + images.length) % images.length]})`;
    activeItem.style.backgroundImage = `url(${images[index]})`;
    nextItem.style.backgroundImage  = `url(${images[(index + 1) % images.length]})`;
}

updateImages();

function slideNext() {
    activeItem.classList.add("slide-out-left");
    nextItem.classList.add("slide-to-center");

    setTimeout(() => {
        activeItem.classList.remove("slide-out-left");
        nextItem.classList.remove("slide-to-center");

        index = (index + 1) % images.length;

        prevItem.className = "carousel-item prev";
        activeItem.className = "carousel-item active";
        nextItem.className = "carousel-item next";

        updateImages();
    }, 600);
}

function slidePrev() {
    activeItem.classList.add("slide-out-right");
    prevItem.classList.add("slide-to-center");

    setTimeout(() => {
        activeItem.classList.remove("slide-out-right");
        prevItem.classList.remove("slide-to-center");

        index = (index - 1 + images.length) % images.length;

        prevItem.className = "carousel-item prev";
        activeItem.className = "carousel-item active";
        nextItem.className = "carousel-item next";

        updateImages();
    }, 600);
}

/* ---- AUTO SLIDE CON REINICIO ---- */
function startAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(slideNext, 4000);
}

startAutoSlide();

/* ---- CLICK ---- */
prevItem.addEventListener("click", () => {
    slidePrev();
    startAutoSlide();
});

nextItem.addEventListener("click", () => {
    slideNext();
    startAutoSlide();
});








