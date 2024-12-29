import './style.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const clientId = import.meta.env.VITE_API_CLIENT_ID;

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
    for (const photo of photos) {
        const li = document.createElement("li");
        li.innerHTML = `
        <img src="${photo.urls.regular}" alt="${photo.alt_description}"/>
        `
        container.appendChild(li)
    }
};

document.querySelector("#searchBtn").addEventListener("click", ()=>{
    const keywordValue = document.querySelector("#searchInput").value;
    const photoNumValue = document.querySelector("#countInput").value;
    const orderByValue = document.querySelector("#orderBy").value;
    getPhotos(keywordValue,photoNumValue,orderByValue);
    document.querySelector("#searchInput").value = "";
    document.querySelector("#orderBy").value ="relevant";
});

getPhotos("Japon", "20", "relevant");