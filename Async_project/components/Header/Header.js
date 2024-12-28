import "./Header.css";

const template = () => `
<h1> Photosplash</h1>
<input type="text" id="searchInput" placeholder="Escribe por ejemplo gato, coche..." />
<select id="countInput">
    <option value="20">20</option>
    <option value="30">30</option>
    <option value="50">50</option>
    <option value="100">100</option>
</select>
<select id="orderBy">
    <option value="relevant">Relevante</option>
    <option value="latest">Nuevas</option>
</select>
<button id="searchBtn">Buscar</button>
`;

const Header = () => {
    document.querySelector("header").innerHTML = template ();
};


export default Header;