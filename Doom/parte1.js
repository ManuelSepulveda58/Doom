const parte1 = () => {
    const parteContainer = document.getElementById("parte1");

    
    const header = document.createElement("h2");
    const paragraph = document.createElement("p");

   
    header.textContent = "Pagina interesante";
    paragraph.textContent = "Interesante";

    
    parteContainer.style.padding = "20px";
    parteContainer.style.backgroundColor = "#ff8000";
    parteContainer.style.borderBottom = "1px solid #ccc";


    header.style.marginBottom = "10px";
    header.style.color = "#000000";

    paragraph.style.color = "#000000";

    parteContainer.appendChild(header);
    parteContainer.appendChild(paragraph);
};

export default parte1;
