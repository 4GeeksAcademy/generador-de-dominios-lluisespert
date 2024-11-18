/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let array1 = ["one", "two", "three", "four", "five"];
let array2 = [
  "boniato",
  "chupinga",
  "chupacabras",
  "tuercebotas",
  "abrazafarolas"
];
let array3 = [
  "chupacharcos",
  "cansaliebres",
  "mastuerzo",
  "pescabicho",
  "fifaproplayer"
];
let array4 = ["luisete", "bushi", "loperilla", "rick", "moure"];
let array5 = ["es", "com", "cat", "eu", "net"];

for (let i = 0; i < array1.length; i++) {
  for (let b = 0; b < array2.length; b++) {
    for (let c = 0; c < array3.length; c++) {
      for (let d = 0; d < array4.length; d++) {
        for (let e = 0; e < array5.length; e++) {
          console.log(
            array1[i] + array2[b] + array3[c] + array4[d] + "." + array5[e]
          );
        }
      }
    }
  }
}
