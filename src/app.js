/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numero = ["one", "two", "three", "four", "five"];
let frutas = [
  "boniato",
  "chupinga",
  "chupacabras",
  "tuercebotas",
  "abrazafarolas"
];
let personajes = [
  "chupacharcos",
  "cansaliebres",
  "mastuerzo",
  "pescabicho",
  "fifaproplayer"
];
let companyeros = ["luisete", "bushi", "loperilla", "rick", "moure"];
let dominio = ["es", "com", "cat", "eu", "net"];

for (let i = 0; i < numero.length; i++) {
  for (let b = 0; b < frutas.length; b++) {
    for (let c = 0; c < personajes.length; c++) {
      for (let d = 0; d < companyeros.length; d++) {
        for (let e = 0; e < dominio.length; e++) {
          document.write(
            numero[i] +
              frutas[b] +
              personajes[c] +
              companyeros[d] +
              "." +
              dominio[e] +
              "<br>"
          );
        }
      }
    }
  }
}
