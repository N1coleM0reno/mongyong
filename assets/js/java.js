document.addEventListener("DOMContentLoaded", function () {
    const links = {
        "Servicios": "https://www.tranzact.net/what-we-do/",
        "Beneficios": "https://www.greatplacetowork.com.pe/mejores-lugares-para-trabajar/los-mejores-lugares-para-trabajar-en-per%C3%BA/2023/tranzact",
        "Contactanos": "https://www.tranzact.net/member-care/",
    };

    document.querySelectorAll(".navbar ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            const page = links[this.textContent.trim()];
            if (page) {
                event.preventDefault();
                window.open(page, "_blank"); // Se abre en una nueva pestaña
            }
        });
    });
});