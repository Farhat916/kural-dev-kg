const WHATSAPP_NUMBER = "996772017522";
const projectForm = document.getElementById("project-form");
if (projectForm) {
    projectForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("client-name").value.trim();
        const service = document.getElementById("client-service").value;
        const budget = document.getElementById("client-budget").value;
        const message = document.getElementById("client-message").value.trim();
        if (!name || !service || !message) {
            alert("Заполни все обязательные поля.");
            return;
        }
        const whatsappMessage = [
            "Здравствуйте! Хочу заказать проект в KURAL DEV KG.",
            "",
            "Имя: " + name,
            "Услуга: " + service,
            "Бюджет: " + budget,
            "Описание проекта: " + message
        ].join("\n");
        const whatsappURL =
            "https://wa.me/" +
            WHATSAPP_NUMBER +
            "?text=" +
            encodeURIComponent(whatsappMessage);
        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
}