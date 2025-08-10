import Header from "./components/Header";
import Footer from "./components/Footer";

document.querySelector("#app").innerHTML = `
    ${Header()}
    <main>
        <h2>Welcome to My Portfolio</h2>
        <p>This is a showcase of my work and projects.</p>
    </main>
    ${Footer()}
`;