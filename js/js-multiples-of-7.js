const consoleOutput = document.getElementById("console-output");
const multiplesList = document.getElementById("multiples-list");
const summaryResults = document.getElementById("summary-results");
const totalCount = document.getElementById("total-count");
const sequenceOutput = document.getElementById("sequence-output");

function addConsoleLine(text, type) {
  const line = document.createElement("span");
  line.className = type ? `console-line ${type}` : "console-line";
  line.textContent = text;
  consoleOutput.appendChild(line);
}

function addMultipleCard(number, position) {
  const card = document.createElement("article");
  card.className = "exercise-item";

  const badge = document.createElement("strong");
  badge.textContent = `Multiplo ${position}`;

  const heading = document.createElement("h3");
  heading.textContent = `${number} es multiplo de 7`;

  const explanation = document.createElement("p");
  explanation.textContent =
    `${number} dividido entre 7 da un resto de 0, por eso se suma al contador.`;

  card.appendChild(badge);
  card.appendChild(heading);
  card.appendChild(explanation);

  multiplesList.appendChild(card);
}

function addSummaryCard(label, title, description) {
  const card = document.createElement("article");
  card.className = "exercise-item";

  const badge = document.createElement("strong");
  badge.textContent = label;

  const heading = document.createElement("h3");
  heading.textContent = title;

  const paragraph = document.createElement("p");
  paragraph.textContent = description;

  card.appendChild(badge);
  card.appendChild(heading);
  card.appendChild(paragraph);

  summaryResults.appendChild(card);
}

let multiplesCount = 0;
const multiplesOfSeven = [];

addConsoleLine("Recorrido del 1 al 100", "step");

for (let number = 1; number <= 100; number += 1) {
  if (number % 7 === 0) {
    multiplesCount += 1;
    multiplesOfSeven.push(number);

    console.log(`${number} es multiplo de 7`);
    addConsoleLine(`${number} es multiplo de 7`);
    addMultipleCard(number, multiplesCount);
  }
}

const finalMessage =
  `Cantidad total de multiplos de 7 entre 1 y 100: ${multiplesCount}.`;

console.log(finalMessage);
addConsoleLine("Resultado final", "step");
addConsoleLine(finalMessage);

totalCount.textContent = String(multiplesCount);
sequenceOutput.textContent = multiplesOfSeven.join(", ");

addSummaryCard(
  "for",
  "Recorre todos los numeros",
  "El bucle visita cada valor entre 1 y 100 para comprobarlo una sola vez.",
);

addSummaryCard(
  "if",
  "Filtra solo los multiplos de 7",
  "La condicion number % 7 === 0 separa los numeros validos del resto.",
);

addSummaryCard(
  "contador",
  "Guarda la cantidad final",
  `Al terminar el recorrido, el contador queda en ${multiplesCount}.`,
);
