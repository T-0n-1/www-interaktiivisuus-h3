"use strict";

var map = [];
map[0] = "Vanha linnantorni";
map[1] = "Syvä kaivo";
map[2] = "Aurinkoinen metsäaukio";
map[3] = "Nukkuva lohikäärme";
map[4] = "Kapea metsäpolku";
map[5] = "Vanha portti";
map[6] = "Joen ranta";
map[7] = "Tyhjä puupenkki";
map[8] = "Vanha mökki, sisältä kuuluu hiljaista musiikkia"; // Sijainti pelin alussa

var mapLocation = 4; // Pelaajan syöte

var playersInput = ""; // Pelin viesti

var gameMessage = ""; // Pelaajan köytössä olevat toiminnot

var actionsForPlayer = ["pohjoinen", "etelä", "länsi", "itä", "poimi", "pudota", "käytä"];
var action = "";
var output = document.querySelector("#output");
output.innerHTML = "<span class='outputHeader'>Sijaintisi on:<br></span>" + map[mapLocation];
var input = document.querySelector("#input");
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
render();

function clickHandler() {
  console.log("Nappia painettu");
  playGame();
}

function playGame() {
  playersInput = input.value.toLowerCase();
  console.log(playersInput);
}

function render() {}

//# sourceMappingURL=script.js.map
