import "./Header.css";

const template = () => `
<div class="top-row">
    <h1> Photosplash</h1>
    <input type="text" id="searchInput" placeholder="Ejemplo: gato, perro..." />
</div>
<div class="bottom-row">
    <select id="countInput">
        <option value="12">12</option>
        <option value="24">24</option>
        <option value="30">30</option>
    </select>
    <select id="orderBy">
        <option value="relevant">Relevante</option>
        <option value="latest">Nuevas</option>
    </select>
    <button id="searchBtn">Buscar</button>
</div>
`;

const Header = () => {
    document.querySelector("header").innerHTML = template ();
};


export default Header;