import "./Footer.css";

const template = () =>`
<p> Photosplash - 2024 </p>
`;

const Footer = () => {
    document.querySelector("footer").innerHTML = template()
};

export default Footer;