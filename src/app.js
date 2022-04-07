/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["incredible", "amazing", "stinky", "surprising", "suspicious"];
let noun = ["shop", "tarantula", "jean", "messi"];
let extension = [".net", ".org", ".com", ".io"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < extension.length; l++) {
        let result = `${pronoun[i]}${adj[j]}${noun[k]}${extension[l]}`;
        let element = document.getElementById("domain-name");
        element.innerHTML = result;
      }
    }
  }
}
