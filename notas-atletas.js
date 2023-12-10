let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function calcularMediaNotas(atleta) {
  const notas = atleta.notas.slice(); // Copia as notas para não alterar o array original
  notas.sort(); // Ordena as notas
  notas.shift(); // Remove a menor nota
  notas.pop(); // Remove a maior nota

  const somaNotas = notas.reduce((total, nota) => total + nota, 0);
  const media = somaNotas / notas.length;

  return media;
}

function apresentarResultados(atletas) {
  atletas.forEach((atleta) => {
    const media = calcularMediaNotas(atleta);

    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas.join(', ')}`);
    console.log(`Média Válida: ${media.toFixed(2)}`);
    console.log(); // Adiciona uma linha em branco para separar os resultados
  });
}

apresentarResultados(atletas);
