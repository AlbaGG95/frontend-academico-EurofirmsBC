function sumarHasta(numero) {
  if (typeof numero !== "number" || !Number.isFinite(numero) || numero <= 0) {
    console.error("Error: debes introducir un numero mayor que 0.");
    return -1;
  }

  let sumaTotal = 0;

  for (let actual = 1; actual <= numero; actual += 1) {
    sumaTotal += actual;
  }

  return sumaTotal;
}

const consoleOutput = typeof document !== "undefined"
  ? document.getElementById("console-output")
  : null;
const examplesContainer = typeof document !== "undefined"
  ? document.getElementById("examples-results")
  : null;

function addConsoleLine(text, type) {
  if (!consoleOutput) {
    return;
  }

  const line = document.createElement("span");
  line.className = type ? `console-line ${type}` : "console-line";
  line.textContent = text;
  consoleOutput.appendChild(line);
}

function addExampleCard(input, result, explanation) {
  if (!examplesContainer) {
    return;
  }

  const card = document.createElement("article");
  card.className = "exercise-item";

  const badge = document.createElement("strong");
  badge.textContent = `sumarHasta(${input})`;

  const heading = document.createElement("h3");
  heading.textContent = `Resultado: ${result}`;

  const paragraph = document.createElement("p");
  paragraph.textContent = explanation;

  card.appendChild(badge);
  card.appendChild(heading);
  card.appendChild(paragraph);
  examplesContainer.appendChild(card);
}

const examples = [
  {
    input: 5,
    explanation: "Suma 1 + 2 + 3 + 4 + 5 y devuelve 15.",
  },
  {
    input: 1,
    explanation: "El rango solo contiene el 1, asi que la suma final tambien es 1.",
  },
  {
    input: 0,
    explanation: "Como no es mayor que 0, la funcion muestra un error y devuelve -1.",
  },
];

addConsoleLine("Pruebas de la funcion sumarHasta", "step");

for (const example of examples) {
  const result = sumarHasta(example.input);
  const output = `sumarHasta(${example.input}): ${result}`;

  console.log(output);
  addConsoleLine(output);
  addExampleCard(example.input, result, example.explanation);
}
