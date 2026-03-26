const estudiantes = [
  {
    nombre: "Ana",
    edad: 20,
    notas: [8, 7, 9],
  },
  {
    nombre: "Luis",
    edad: 22,
    notas: [6, 8, 7],
  },
  {
    nombre: "Marta",
    edad: 19,
    notas: [9, 10, 8],
  },
];

function agregarEstudiante(nombre, edad, notas) {
  const nuevoEstudiante = {
    nombre,
    edad,
    notas,
  };

  estudiantes.push(nuevoEstudiante);
  return nuevoEstudiante;
}

const consoleOutput = typeof document !== "undefined"
  ? document.getElementById("console-output")
  : null;
const initialContainer = typeof document !== "undefined"
  ? document.getElementById("initial-students")
  : null;
const updatedContainer = typeof document !== "undefined"
  ? document.getElementById("updated-students")
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

function addStudentCard(container, student, label) {
  if (!container) {
    return;
  }

  const card = document.createElement("article");
  card.className = "exercise-item";

  const badge = document.createElement("strong");
  badge.textContent = label;

  const heading = document.createElement("h3");
  heading.textContent = `${student.nombre}, ${student.edad} anos`;

  const paragraph = document.createElement("p");
  paragraph.textContent = `Notas: ${student.notas.join(", ")}`;

  card.appendChild(badge);
  card.appendChild(heading);
  card.appendChild(paragraph);
  container.appendChild(card);
}

const snapshotInicial = estudiantes.map((student) => ({
  nombre: student.nombre,
  edad: student.edad,
  notas: [...student.notas],
}));

console.log("Estudiantes iniciales:", snapshotInicial);
addConsoleLine("Array inicial de estudiantes", "step");
addConsoleLine(JSON.stringify(snapshotInicial));

for (const student of snapshotInicial) {
  addStudentCard(initialContainer, student, "Inicial");
}

const nuevoEstudiante = agregarEstudiante("Carlos", 21, [7, 8, 6]);

console.log("Nuevo estudiante:", nuevoEstudiante);
addConsoleLine("Nuevo estudiante agregado", "step");
addConsoleLine(JSON.stringify(nuevoEstudiante));

console.log("Array actualizado:", estudiantes);
addConsoleLine("Array actualizado", "step");
addConsoleLine(JSON.stringify(estudiantes));

for (const student of estudiantes) {
  const label = student.nombre === nuevoEstudiante.nombre ? "Nuevo" : "Actual";
  addStudentCard(updatedContainer, student, label);
}
