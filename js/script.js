document.addEventListener("DOMContentLoaded", function() {
    // Muestra el modal al cargar la página
    const modal = document.getElementById("name-modal");
    const closeButton = document.querySelector(".close-button");
    const submitButton = document.getElementById("submit-name");
    const userNameInput = document.getElementById("user-name-input");
    const welcomeSection = document.getElementById("welcome-message");

    function showModal() {
        modal.classList.add("show");
    }

    function hideModal() {
        modal.classList.remove("show");
    }

    function handleSubmit() {
        const userName = userNameInput.value;
        if (userName) {
            const welcomeMessageDiv = document.createElement("div");
            welcomeMessageDiv.textContent = `Hola, ${userName}! Gracias por visitar mi página.`;
            welcomeMessageDiv.style.fontSize = "1.5em";
            welcomeMessageDiv.style.color = "lightblue";
            welcomeMessageDiv.style.textAlign = "center";
            welcomeMessageDiv.style.marginTop = "20px";
            welcomeMessageDiv.style.padding = "10px";
            welcomeMessageDiv.style.backgroundColor = "#121212";
            welcomeMessageDiv.style.borderRadius = "10px";
            welcomeSection.appendChild(welcomeMessageDiv);
            hideModal();
        }
    }

    // Muestra el modal al cargar la página
    showModal();

    // Maneja el cierre del modal
    closeButton.addEventListener("click", hideModal);

    // Maneja el envío del formulario
    submitButton.addEventListener("click", handleSubmit);
});




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


