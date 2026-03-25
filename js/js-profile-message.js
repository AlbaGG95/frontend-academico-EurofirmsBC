const nameOutput = document.getElementById("name-output");
const ageOutput = document.getElementById("age-output");
const likesOutput = document.getElementById("likes-output");
const consoleOutput = document.getElementById("console-output");

const studentName = "Alba";
const studentAge = 30;
const likesProgramming = true;

const programmingMessage = likesProgramming
  ? "me gusta programar"
  : "no me gusta programar";

const finalMessage = `Hola, mi nombre es ${studentName}, tengo ${studentAge} años y ${programmingMessage}.`;

function addConsoleLine(text, type) {
  const line = document.createElement("span");
  line.className = type ? `console-line ${type}` : "console-line";
  line.textContent = text;
  consoleOutput.appendChild(line);
}

console.log(finalMessage);

nameOutput.textContent = studentName;
ageOutput.textContent = studentAge;
likesOutput.textContent = likesProgramming;

addConsoleLine("console.log(finalMessage);", "step");
addConsoleLine(finalMessage);
