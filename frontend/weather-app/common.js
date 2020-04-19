console.log("Loading common.js..");

const navbarHtml = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">Navbar</a>
    <ul class="navbar-nav">
        <li class="nav-item active">
        <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/datadump.html">Datadump</a>
        </li>
    </ul>
</nav>
`;
const navbarElement = document.getElementById("navbar-element");
navbarElement.innerHTML = navbarHtml;