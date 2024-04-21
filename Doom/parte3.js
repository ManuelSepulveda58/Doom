const parte3 = () => {
    const parte3Container = document.getElementById("parte3");


    const footer = document.createElement("footer");
    footer.classList.add("footer");


    const creatorName = document.createElement("p");
    creatorName.textContent = "Manuel Sepúlveda";
    creatorName.classList.add("creator");


    const thankYouMessage = document.createElement("p");
    thankYouMessage.textContent = "Gracias por visitarnos";
    thankYouMessage.classList.add("message");


    footer.appendChild(creatorName);
    footer.appendChild(thankYouMessage);

    parte3Container.appendChild(footer);


    const styleElement = document.createElement("style");
    styleElement.textContent = `
        .footer {
            background-color: purple; /* Color morado como fondo del pie de página */
            color: orange; /* Color naranja para el texto del pie de página */
            padding: 20px; /* Espaciado interno */
            text-align: center; /* Alineación centrada del texto */
        }
        
        .footer .creator {
            font-weight: bold; /* Texto en negrita para el nombre del creador */
        }
        
        .footer .message {
            font-style: italic; /* Texto en cursiva para el mensaje de agradecimiento */
        }
    `;

    document.head.appendChild(styleElement);
};

export default parte3;
