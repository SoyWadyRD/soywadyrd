



document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Actualiza los indicadores (si se utilizan)
        updateIndicators();
    }

    function updateIndicators() {
        const indicators = document.querySelectorAll('.slider-indicator');
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    // Crea los indicadores (si se utilizan)
    function createIndicators() {
        const indicatorContainer = document.createElement('div');
        indicatorContainer.classList.add('slider-indicators');
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('slider-indicator');
            indicatorContainer.appendChild(indicator);
        }
        document.querySelector('#game-slider').appendChild(indicatorContainer);
        updateIndicators();
    }

    createIndicators();
    setInterval(showNextSlide, 3000); // Cambia la imagen cada 3 segundos
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



document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("name-modal");
    const btnEntrar = document.getElementById("btn-entrar");
    const video = document.querySelector(".hero-video");
    const nextSection = document.querySelector("#sobre-mi");

    

    modal.addEventListener("click", (e) => {
    // Evita cerrar modal si tocan fuera
    if (e.target === modal) {
        e.stopPropagation();
    }
});


    if (!modal || !btnEntrar || !video) {
        console.error("ERROR: Falta un elemento del DOM");
        return;
    }

    // Mostrar modal correctamente
    modal.classList.add("show");
    document.body.classList.add("no-scroll");

    // Click en Entrar
    btnEntrar.addEventListener("click", () => {
    modal.classList.remove("show");
    document.body.classList.remove("no-scroll"); 
    video.muted = false;
    video.play();
});

    // Cuando el video termina
    video.addEventListener("ended", () => {
        nextSection.scrollIntoView({ behavior: "smooth" });
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












