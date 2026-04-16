const eventBoard = document.getElementById("event-board");
const selectedId = document.getElementById("selected-id");
const totalEvents = document.getElementById("total-events");
const lastSource = document.getElementById("last-source");
const consoleOutput = document.getElementById("console-output");
const counters = document.querySelectorAll("[data-counter-for]");

const countersById = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
};

let totalInteractions = 0;

function addConsoleLine(text, type) {
  const line = document.createElement("span");
  line.className = type ? `console-line ${type}` : "console-line";
  line.textContent = text;
  consoleOutput.appendChild(line);
}

function refreshCounters() {
  for (const element of counters) {
    const itemId = element.getAttribute("data-counter-for");
    element.textContent = String(countersById[itemId] || 0);
  }
}

function setActiveBox(activeBox) {
  const boxes = eventBoard.querySelectorAll(".event-box");
  for (const box of boxes) {
    box.classList.toggle("active", box === activeBox);
  }
}

function registerInteraction(box, source) {
  const itemId = box.getAttribute("data-item-id");

  if (!itemId) {
    return;
  }

  countersById[itemId] += 1;
  totalInteractions += 1;

  setActiveBox(box);
  refreshCounters();

  selectedId.textContent = itemId;
  totalEvents.textContent = String(totalInteractions);
  lastSource.textContent = source;

  const logLine =
    `Evento capturado -> item-id=${itemId} | origen=${source} | total=${totalInteractions}`;

  console.log(logLine);
  addConsoleLine(logLine, "step");
}

eventBoard.addEventListener("click", (event) => {
  const targetBox = event.target.closest(".event-box");

  if (!targetBox || !eventBoard.contains(targetBox)) {
    return;
  }

  registerInteraction(targetBox, "click");
});

eventBoard.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  const targetBox = event.target.closest(".event-box");

  if (!targetBox || !eventBoard.contains(targetBox)) {
    return;
  }

  event.preventDefault();
  registerInteraction(targetBox, "teclado");
});

addConsoleLine("Escuchando eventos delegados en #event-board", "step");
addConsoleLine("Interacciona con las cajas para ver el registro en tiempo real.");
refreshCounters();
