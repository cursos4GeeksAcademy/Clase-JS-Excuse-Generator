/* eslint-disable */
import "bootstrap";
import "./style.css";

//La función window.onload significa que cuando cargue mi pagina html ALGO VA A PASAR
window.onload = function() {
  //para obtener un número aleatorio usamos el modulo random y el * algo para definir la cantidad máxima-1
  let aleatorio = Math.floor(Math.random() * 5);
  //lo que esté acá dentro va a suceder
  //             0            1          2              3        Total de elementos=4 úlltima posición=3
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  //concatenacion es la acción de unir 2 cadenas de caracteres
  let nombre = "Freddy";
  let apellido = "Lobo";
  //variable concatenada
  let resultado = nombre + " " + apellido;

  let excusa = who[1] + " " + action[2] + " " + what[2] + " " + when[aleatorio];

  console.log(excusa);

  //mira mama a este truco le llamo "modificar el HTML desde JS"
  document.getElementById("excuse").innerHTML = excusa;
};
