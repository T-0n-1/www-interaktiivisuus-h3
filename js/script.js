"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var actionsForPlayer = ["pohjoinen", "etelä", "länsi", "itä"];
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
  gameMessage = "";
  action = "";
  var playersInputArray = playersInput.split(' ');
  action = checkAction();

  function checkAction() {
    var output = [];

    var _iterator = _createForOfIteratorHelper(playersInputArray),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var element = _step.value;
        if (actionsForPlayer.includes(element)) output.splice(0, 1, element);else output.splice(0, 1, "Ei löytynyt vastaavuutta");
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return output;
  }

  console.log(action);

  if (action == "pohjoinen") {
    mapLocation -= 3;
  } else if (action == "etelä") {
    mapLocation += 3;
  } else if (action == "itä") {
    mapLocation += 1;
  } else if (action == "länsi") {
    mapLocation -= 1;
  } else {
    gameMessage = "Tuntematon toiminto";
  }

  render();
}

function render() {
  // sijainnin päivitys pelaajalle
  output.innerHTML = "<span class='outputHeader'>Sijaintisi on:</span><br>" + map[mapLocation]; // palaute pelaajalle 

  output.innerHTML += "<br><em>" + gameMessage + "</em>";
}

//# sourceMappingURL=script.js.map