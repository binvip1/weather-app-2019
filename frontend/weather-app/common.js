console.log("Loading common.js...");

const navbarHtml = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/">Weather App Project</a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/datadump.html">Datadump</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="/last50.html">Last 50</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="/temp.html">Temperature</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="/wind_speed.html">Wind Speed</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="/free_choice_signal.html">Free Choice Signal</a>
      </li>
    </ul>
</nav>
`;
const navbarElement = document.getElementById("navbar-element");
navbarElement.innerHTML = navbarHtml;