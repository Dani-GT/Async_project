import './style.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const clientId = import.meta.env.VITE_CLIENT_ID;

const init = () => {
    Header();
    Main();
    Footer();
};

init ();

const getPhotos =  async (keyword, photoNum,order) => {
    const data = await fetch (`https://api.unsplash.com/search/photos/?page=1&query=${keyword}&per_page=${photoNum}&order_by=${order}&client_id=${clientId}`);
    const dataJSON = await data.json(); 
    const photos = dataJSON.results;
    printPhotos(photos);
};

const printPhotos = (photos) => {
   
    const container = document.querySelector("#gallery");
    container.innerHTML = "";
    message.textContent = "";

    if (photos.length === 0 || keywordValue === "") {
        const message = document.querySelector("#message");
        message.textContent = "No se encontraron resultados. Intenta otra búsqueda...";
        const suggestions = ["Animales", "Paises", "Futbol", "Naturaleza", "Ciudades"];
        const suggestionContainer = document.createElement("div");
        suggestionContainer.innerHTML = "<p>Prueba con estas opciones:</p>";
        suggestions.forEach(suggestion => {
            const button = document.createElement("button");
            button.textContent = suggestion;
            button.addEventListener("click", () => {
                getPhotos(suggestion, 20, "relevant");
            });
            suggestionContainer.appendChild(button);
        });
        message.appendChild(suggestionContainer);
    } else {
        for (const photo of photos) {
            const li = document.createElement("li");
            li.innerHTML = `
            <img src="${photo.urls.regular}" alt="${photo.alt_description}"/>
            `
            container.appendChild(li)
        }
    } 
};

document.querySelector("#searchBtn").addEventListener("click", () => {
    const keywordValue = document.querySelector("#searchInput").value.trim();
    const photoNumValue = parseInt(document.querySelector("#countInput").value, 10);
    const orderByValue = document.querySelector("#orderBy").value;
        getPhotos(keywordValue, photoNumValue, orderByValue);
        document.querySelector("#searchInput").value = "";
        document.querySelector("#orderBy").value = "relevant";
    
});

getPhotos("Japon", "20", "relevant");