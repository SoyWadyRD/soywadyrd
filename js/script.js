document.addEventListener("DOMContentLoaded", function() {
    let userName = prompt("¡Bienvenido! ¿Cuál es tu nombre?");
    
    if (userName) {
        const welcomeMessage = document.createElement("p");
        welcomeMessage.textContent = `Hola, ${userName}! Gracias por visitar mi página.`;
        welcomeMessage.style.fontSize = "1.5em";
        welcomeMessage.style.color = "lightblue";
        welcomeMessage.style.textAlign = "center";
        welcomeMessage.style.marginTop = "20px";
        
        const welcomeSection = document.getElementById("welcome-message");
        welcomeSection.appendChild(welcomeMessage);
    }
});
