const parte2 = () => {
    const parte2Container = document.getElementById("parte2");
    const image = document.createElement("img");
    image.src = "6372162.png"; 
    image.alt = "Gracias"; 


    image.style.display = "block"; 
    image.style.margin = "0 auto"; 


    parte2Container.appendChild(image);

    const message = document.createElement("p");
    message.textContent = "Síguenos en redes sociales:";

    parte2Container.appendChild(message);

    const socialBar = document.createElement("div");
    socialBar.classList.add("social-bar");

    const facebookLink = document.createElement("a");
    facebookLink.href = "https://www.facebook.com/tu_pagina_de_facebook";
    facebookLink.target = "_blank"; 
    const facebookIcon = document.createElement("i");
    facebookIcon.classList.add("fab", "fa-facebook");
    facebookLink.appendChild(facebookIcon);

    const whatsappLink = document.createElement("a");
    whatsappLink.href = "https://wa.me/tu_numero_de_whatsapp";
    whatsappLink.target = "_blank"; 
    const whatsappIcon = document.createElement("i");
    whatsappIcon.classList.add("fab", "fa-whatsapp");
    whatsappLink.appendChild(whatsappIcon);

    socialBar.appendChild(facebookLink);
    socialBar.appendChild(whatsappLink);

    parte2Container.appendChild(socialBar);


    const styleElement = document.createElement("style");
    styleElement.textContent = `
        .social-bar i {
            font-size: 32px; /* Tamaño de fuente para hacer los íconos más grandes */
            margin: 0 10px; /* Espacio entre los íconos */
        }
    `;

    document.head.appendChild(styleElement);
};

export default parte2;




