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
map[8] = "Vanha mökki, sisältä kuuluu hiljaista musiikkia";
var imagesWebp = [];
imagesWebp[0] = "torni.webp";
imagesWebp[1] = "kaivo.webp";
imagesWebp[2] = "aukio.webp";
imagesWebp[3] = "dragon.webp";
imagesWebp[4] = "polku.webp";
imagesWebp[5] = "portti.webp";
imagesWebp[6] = "joki.webp";
imagesWebp[7] = "penkki.webp";
imagesWebp[8] = "mokki.webp";
var imagesJpg = [];
imagesJpg[0] = "torni.jpg";
imagesJpg[1] = "kaivo.jpg";
imagesJpg[2] = "aukio.jpg";
imagesJpg[3] = "dragon.jpg";
imagesJpg[4] = "polku.jpg";
imagesJpg[5] = "portti.jpg";
imagesJpg[6] = "joki.jpg";
imagesJpg[7] = "penkki.jpg";
imagesJpg[8] = "mokki.jpg";
var blockMessage = [];
blockMessage[0] = "Tornin takana sijaitseva korkea jyrkänne estää liikkumisen siihen suuntaan";
blockMessage[1] = "Salaperäinen voima estää liikkumesi tuohon suuntaan";
blockMessage[2] = "Vaikeakulkuinen ryteikkö estää kulkemisen";
blockMessage[3] = "Et pääse kiertämään lohikäärmettä valitsemastasi suunnasta";
blockMessage[4] = " ";
blockMessage[5] = "Portti sulkeutuu ja estää pääsysi";
blockMessage[6] = "Voimakas virtaus estää joen ylityken";
blockMessage[7] = "Metsä on liian tiheä kuljettavaksi";
blockMessage[8] = "Kauhu jähmettää sinut paikallesi etkä tohdi kulkea pidemmälle tähän suuntaan"; // Sijainti pelin alussa

var mapLocation = 4; // Pelaajan syöte

var playersInput = ""; // Pelin viesti

var gameMessage = ""; // Pelin sisältämät tavarat

var items = ["huilu", "kivi", "miekka"];
var itemLocations = [1, 6, 8];
var list = ""; // Pelaajan inventaario

var backPack = []; // Pelaajan köytössä olevat toiminnot

var actionsForPlayer = ["pohjoinen", "etelä", "länsi", "itä", "poimi", "pudota", "käytä"];
var action = ""; // Käyttöliittymäkomponentit

var output = document.querySelector("#output");
var inventory = document.querySelector("#inventory");
var inGameMessage = document.querySelector("#gamemessage");
var warning = document.querySelector("#warning");
output.innerHTML = "<span class='outputHeader'>Sijaintisi on:<br></span>" + map[mapLocation];

function goNorth() {
  if (mapLocation >= 3) {
    mapLocation -= 3;
  } else {
    return warning.innerHTML = blockMessage[mapLocation];
  }

  playGame();
}

function goSouth() {
  if (mapLocation <= 5) {
    mapLocation += 3;
  } else {
    return warning.innerHTML = blockMessage[mapLocation];
  }

  playGame();
}

function goEast() {
  if (mapLocation % 3 != 2) {
    mapLocation += 1;
  } else {
    return warning.innerHTML = blockMessage[mapLocation];
  }

  playGame();
}

function goWest() {
  if (mapLocation % 3 != 0) {
    mapLocation -= 1;
  } else {
    return warning.innerHTML = blockMessage[mapLocation];
  }

  playGame();
}

var input = document.querySelector("#input");
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
var webpImage = document.querySelector("source");
var jpgImage = document.querySelector("img");
render();

function clickHandler() {
  playGame();
}

function playGame() {
  playersInput = input.value.toLowerCase();
  gameMessage = "";
  inGameMessage.innerHTML = "";
  action = "";
  warning.innerHTML = "";
  var playersInputArray = playersInput.split(' ');
  action = checkAction();
  action = action.toString();

  function checkAction() {
    var output = [];

    var _iterator = _createForOfIteratorHelper(playersInputArray),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var element = _step.value;
        if (actionsForPlayer.includes(element)) output.splice(0, 1, element);else if (output === []) output.splice(0, 1, "Ei löytynyt vastaavuutta");
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return output;
  }

  function pickUpItem() {
    var _iterator2 = _createForOfIteratorHelper(playersInputArray),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var element = _step2.value;

        if (items.includes(element)) {
          var i = items.indexOf(element);

          if (itemLocations[i] == mapLocation) {
            backPack.push(items[i]);
            gameMessage = "Poimit mukaasi esineen: " + element;
            warning.innerHTML = "";
            items.splice(i, 1);
            itemLocations.splice(i, 1);
            break;
          }
        } else {
          if (backPack.includes(element)) {
            break;
          } else {
            warning.innerHTML = "Ei tavaraa poimittavana";
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  function dropItem() {
    var _iterator3 = _createForOfIteratorHelper(playersInputArray),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var element = _step3.value;

        if (backPack.includes(element)) {
          warning.innerHTML = "Pudotit maahan esineen: " + element;
          items.push(element);
          itemLocations.push(mapLocation);
          backPack.splice(backPack.indexOf(element), 1);
          break;
        } else {
          warning.innerHTML = "Ei sellaista tavaraa mukana";
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }

  function useItem() {}

  function itemsInBackpack() {
    if (backPack.length !== 0) {
      list = "<ul>";

      var _iterator4 = _createForOfIteratorHelper(backPack),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var element = _step4.value;
          list += "<li>" + element + "</li>";
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      list += '</ul>';
      return list;
    } else return "";
  }

  function ableToTake() {
    if (itemLocations.some(function (value) {
      return value === mapLocation;
    })) {
      list = "<ul>";

      var _iterator5 = _createForOfIteratorHelper(items),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var element = _step5.value;

          if (itemLocations[items.indexOf(element)] === mapLocation) {
            list += "<li>" + element + "</li>";
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      list += '</ul>';
      return list;
    } else return "";
  }

  switch (action) {
    case 'pohjoinen':
      if (mapLocation >= 3) {
        mapLocation -= 3;
      } else {
        warning.innerHTML = blockMessage[mapLocation];
      }

      break;

    case 'etelä':
      if (mapLocation <= 5) {
        mapLocation += 3;
      } else {
        warning.innerHTML = blockMessage[mapLocation];
      }

      break;

    case "itä":
      if (mapLocation % 3 != 2) {
        mapLocation += 1;
      } else {
        warning.innerHTML = blockMessage[mapLocation];
      }

      break;

    case "länsi":
      if (mapLocation % 3 != 0) {
        mapLocation -= 1;
      } else {
        warning.innerHTML = blockMessage[mapLocation];
      }

      break;

    case "poimi":
      pickUpItem();
      break;

    case "pudota":
      dropItem();
      break;

    case "käytä":
      useItem();
      break;

    default:
      gameMessage = "Tuntematon toiminto";
  }

  document.querySelector("#mouseTake").innerHTML = "[ Poimi ]";
  var ableToPickUp = ableToTake();
  document.querySelector("#mouseTake").innerHTML += ableToPickUp;
  document.querySelector("#mouseUse").innerHTML = "[ Käytä ]";
  var usable = itemsInBackpack();
  document.querySelector("#mouseUse").innerHTML += usable;
  document.querySelector("#mouseDrop").innerHTML = "[ Pudota ]";
  var droppable = itemsInBackpack();
  document.querySelector("#mouseDrop").innerHTML += itemsInBackpack();
  render();
}

function render() {
  // playerInputin tyhjentäminen
  document.querySelector('#input').value = '';
  document.querySelector('#input').placeholder = 'Mitä haluat tehdä'; // kuvien renderöinti

  webpImage.srcset = "images/" + imagesWebp[mapLocation];
  jpgImage.src = "images/" + imagesJpg[mapLocation]; // sijainnin päivitys pelaajalle

  output.innerHTML = "<span class='outputHeader'>Sijaintisi on:</span><br>" + map[mapLocation]; // mahdolliset esineet peliruudulla

  if (itemLocations.some(function (value) {
    return value === mapLocation;
  })) {
    var localItems = [];

    var _iterator6 = _createForOfIteratorHelper(items),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var element = _step6.value;

        if (itemLocations[items.indexOf(element)] === mapLocation) {
          localItems.push(element);
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    gameMessage = "Näkyvissä on " + localItems.join(", ");
  } // repun sisältö


  if (backPack.length != 0) {
    inventory.innerHTML = "Repussasi on " + backPack.join(", ");
  } else {
    inventory.innerHTML = "Reppusi on tyhjä";
  } // palaute pelaajalle 


  if (gameMessage.startsWith("Poimit")) {
    inGameMessage.innerHTML = "<strong>" + gameMessage + "</strong>";
  } else if (gameMessage.startsWith("Näkyvissä")) {
    inGameMessage.innerHTML = "<i>" + gameMessage + "</i>";
  }
}

//# sourceMappingURL=script.js.map
