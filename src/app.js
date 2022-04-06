/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["incredible", "amazing", "stinky", "surprising", "suspicious"];
let noun = ["shop", "tarantula", "jean", "messi"];
let extension = [".net", ".org", ".com", ".io"];

function selRandom(arr) {
  let random = ~~(Math.random() * arr.length);
  return arr[random];
}

window.onload = function() {
  let result = `${selRandom(pronoun)}${selRandom(adj)}${selRandom(
    noun
  )}${selRandom(extension)}`;
  let element = document.getElementById("domain-name");
  element.innerHTML = result;
};
