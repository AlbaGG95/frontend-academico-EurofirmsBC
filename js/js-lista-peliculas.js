const contadorElement = document.getElementById("contador");
const listaPeliculasElement = document.getElementById("lista-peliculas");
const consoleOutput = document.getElementById("console-output");

const peliculas = [
  "Interstellar",
  "El Señor de los Anillos",
  "Inception",
  "Pulp Fiction",
  "El Viaje de Chihiro",
];

function addConsoleLine(text, type) {
  if (!consoleOutput) {
    return;
  }

  const line = document.createElement("span");
  line.className = type ? `console-line ${type}` : "console-line";
  line.textContent = text;
  consoleOutput.appendChild(line);
}

function renderPeliculas() {
  if (!contadorElement || !listaPeliculasElement) {
    return;
  }

  listaPeliculasElement.innerHTML = "";

  for (let index = 0; index < peliculas.length; index += 1) {
    const titulo = peliculas[index];
    const item = document.createElement("li");
    item.className = "movie-list-item";
    item.textContent = titulo;
    listaPeliculasElement.appendChild(item);

    addConsoleLine(`Anadida pelicula ${index + 1}: ${titulo}`);
  }

  const etiqueta = peliculas.length === 1 ? "pelicula" : "peliculas";
  contadorElement.textContent = `Tienes ${peliculas.length} ${etiqueta} en tu lista.`;
}

console.log("Array de peliculas:", peliculas);
addConsoleLine("Renderizando lista de peliculas", "step");
addConsoleLine(`Total en array: ${peliculas.length}`);
renderPeliculas();
addConsoleLine("Render finalizado", "step");
