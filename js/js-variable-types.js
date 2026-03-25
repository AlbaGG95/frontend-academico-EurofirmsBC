const resultsContainer = document.getElementById("js-results");
const experimentsContainer = document.getElementById("js-experiments");
const consoleOutput = document.getElementById("js-console-output");

function formatConsoleValue(value) {
  return typeof value === "string" ? `"${value}"` : String(value);
}

function addConsoleLine(text, type) {
  const line = document.createElement("span");
  line.className = type ? `console-line ${type}` : "console-line";
  line.textContent = text;
  consoleOutput.appendChild(line);
}

function addStepCard(container, step, title, value, type, explanation) {
  const card = document.createElement("article");
  card.className = "exercise-item";

  const badge = document.createElement("strong");
  badge.textContent = step;

  const heading = document.createElement("h3");
  heading.textContent = title;

  const valueLine = document.createElement("p");
  valueLine.textContent = `Valor guardado: ${value}`;

  const typeLine = document.createElement("p");
  typeLine.textContent = `Tipo de dato: ${type}`;

  const explanationLine = document.createElement("p");
  explanationLine.textContent = explanation;

  card.appendChild(badge);
  card.appendChild(heading);
  card.appendChild(valueLine);
  card.appendChild(typeLine);
  card.appendChild(explanationLine);

  container.appendChild(card);
}

function addExperimentCard(step, title, code, result, explanation) {
  const card = document.createElement("article");
  card.className = "exercise-item";

  const badge = document.createElement("strong");
  badge.textContent = step;

  const heading = document.createElement("h3");
  heading.textContent = title;

  const codeLine = document.createElement("p");
  const codeTag = document.createElement("code");
  codeTag.textContent = code;
  codeLine.appendChild(codeTag);

  const resultLine = document.createElement("p");
  resultLine.textContent = `Resultado: ${result}`;

  const explanationLine = document.createElement("p");
  explanationLine.textContent = explanation;

  card.appendChild(badge);
  card.appendChild(heading);
  card.appendChild(codeLine);
  card.appendChild(resultLine);
  card.appendChild(explanationLine);

  experimentsContainer.appendChild(card);
}

function showState(step, explanation) {
  console.log(step);
  console.log("Valor:", myVar);
  console.log("Tipo:", typeof myVar);

  addConsoleLine(step, "step");
  addConsoleLine(`Contenido: ${formatConsoleValue(myVar)}`);
  addConsoleLine(`Tipo: ${typeof myVar}`);

  addStepCard(
    resultsContainer,
    step,
    "Estado actual de myVar",
    String(myVar),
    typeof myVar,
    explanation,
  );
}

// Paso 1: crear la variable y darle el valor 0.
let myVar = 0;

// Paso 2: mostrar el contenido y el tipo.
showState(
  "Paso 1 y 2",
  "La variable empieza guardando un número entero.",
);

// Paso 3: usar la misma variable con un número decimal.
myVar = 4.5;
showState(
  "Paso 3",
  "La variable sigue siendo de tipo number, aunque ahora tenga decimales.",
);

// Paso 4: usar la misma variable con texto.
myVar = "John Doe";
showState(
  "Paso 4",
  "Ahora la variable cambia a texto, por eso su tipo pasa a ser string.",
);

// Paso 5: usar la misma variable con un valor booleano.
myVar = false;
showState(
  "Paso 5",
  "En este paso la variable guarda un valor lógico: true o false.",
);

// Paso 6A: probar qué pasa si intentamos volver a declarar la misma variable con let.
try {
  new Function("let testValue = 0; let testValue = 4.5;")();
  addConsoleLine("Paso 6A", "step");
  addConsoleLine("Resultado: No se ha producido error.");
  addExperimentCard(
    "Paso 6A",
    "Intentar redeclarar con let",
    "let testValue = 0; let testValue = 4.5;",
    "No se ha producido error.",
    "Esto no debería pasar en este caso, porque let no permite declarar dos veces el mismo nombre en el mismo bloque.",
  );
} catch (error) {
  console.error("Paso 6A", error);
  addConsoleLine("Paso 6A", "step");
  addConsoleLine(`Error: ${error.name}: ${error.message}`, "error");
  addExperimentCard(
    "Paso 6A",
    "Intentar redeclarar con let",
    "let testValue = 0; let testValue = 4.5;",
    `${error.name}: ${error.message}`,
    "Con let sí puedes cambiar el valor de una variable, pero no declararla otra vez con el mismo nombre dentro del mismo bloque.",
  );
}

// Paso 6B: probar qué pasa si cambiamos let por const y luego intentamos reasignar.
try {
  new Function("const testValue = 0; testValue = 4.5;")();
  addConsoleLine("Paso 6B", "step");
  addConsoleLine("Resultado: No se ha producido error.");
  addExperimentCard(
    "Paso 6B",
    "Cambiar let por const y reasignar",
    "const testValue = 0; testValue = 4.5;",
    "No se ha producido error.",
    "Esto no debería pasar en este caso, porque const no permite reasignar el valor.",
  );
} catch (error) {
  console.error("Paso 6B", error);
  addConsoleLine("Paso 6B", "step");
  addConsoleLine(`Error: ${error.name}: ${error.message}`, "error");
  addExperimentCard(
    "Paso 6B",
    "Cambiar let por const y reasignar",
    "const testValue = 0; testValue = 4.5;",
    `${error.name}: ${error.message}`,
    "Con const el valor queda fijado desde el principio, así que no puede cambiarse después.",
  );
}
