function sumarHasta(número) {
  if (typeof número !== "number" || !Number.isFinite(número) || número <= 0) {
    console.error("Error: debes introducir un número mayor que 0.");
    return -1;
  }

  let sumaTotal = 0;

  for (let actual = 1; actual <= número; actual += 1) {
    sumaTotal += actual;
  }

  return sumaTotal;
}

console.log("sumarHasta(5):", sumarHasta(5));
console.log("sumarHasta(1):", sumarHasta(1));
console.log("sumarHasta(0):", sumarHasta(0));
