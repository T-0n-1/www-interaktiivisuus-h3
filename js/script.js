"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var map = [];
map[0] = "Nukkuva lohikäärme";
map[1] = "Vanha linna";
map[2] = "Hämyinen metsäaukio";
map[3] = "Linnan piha";
map[4] = "Kapea metsäpolku";
map[5] = "Vanha portti";
map[6] = "Joen ranta";
map[7] = "Tyhjä puupenkki";
map[8] = "Vanha mökki, sisältä kuuluu hiljaista musiikkia";
var imagesWebp = [];
imagesWebp[0] = "dragon.webp";
imagesWebp[1] = "torni.webp";
imagesWebp[2] = "aukio.webp";
imagesWebp[3] = "kaivo.webp";
imagesWebp[4] = "polku.webp";
imagesWebp[5] = "portti.webp";
imagesWebp[6] = "joki.webp";
imagesWebp[7] = "penkki.webp";
imagesWebp[8] = "mokki.webp";
var imagesJpg = [];
imagesJpg[0] = "dragon.jpg";
imagesJpg[1] = "torni.jpg";
imagesJpg[2] = "aukio.jpg";
imagesJpg[3] = "kaivo.jpg";
imagesJpg[4] = "polku.jpg";
imagesJpg[5] = "portti.jpg";
imagesJpg[6] = "joki.jpg";
imagesJpg[7] = "penkki.jpg";
imagesJpg[8] = "mokki.jpg";
var charWebp = [];
charWebp[0] = "medieval-grimreaper.webp";
charWebp[1] = "medieval-princess.webp";
charWebp[2] = "medieval-blacksmith.webp";
charWebp[3] = "medieval-witch.webp";
charWebp[4] = "medieval-wizard.webp";
charWebp[5] = "medieval-soldier.webp";
charWebp[6] = "medieval-bard.webp";
charWebp[7] = "medieval-messenger.webp";
charWebp[8] = "medieval-king.webp";
var charPng = [];
charPng[0] = "medieval-grimreaper.png";
charPng[1] = "medieval-princess.png";
charPng[2] = "medieval-blacksmith.png";
charPng[3] = "medieval-witch.png";
charPng[4] = "medieval-wizard.png";
charPng[5] = "medieval-soldier.png";
charPng[6] = "medieval-bard.png";
charPng[7] = "medieval-messenger.png";
charPng[8] = "medieval-king.png";
var charLocations = [undefined, undefined, 3, 2, 6, undefined, 8, 4, 1];
var webpImage = document.querySelector("#gameScreen source");
var jpgImage = document.querySelector("#gameScreen img");
var webpCharImage = document.querySelector("#charScreen source");
var pngCharImage = document.querySelector("#charScreen img");
var speak = document.querySelector("#spokenText p");

function charInteraction() {
  if (charLocations.some(function (value) {
    return value === mapLocation;
  })) {
    document.querySelector(".charDiv").style.display = "block";
    document.querySelector(".interface").style.display = "none";

    var _iterator = _createForOfIteratorHelper(charLocations),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var element = _step.value;

        if (element === mapLocation) {
          webpCharImage.srcset = "images/" + charWebp[charLocations.indexOf(element)];
          pngCharImage.src = "images/" + charPng[charLocations.indexOf(element)];
          speak.innerHTML = talk[charLocations.indexOf(element)];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}

function closeCharDiv() {
  document.querySelector(".charDiv").style.display = "none";
  document.querySelector(".interface").style.display = "flex";
} // Hahmojen puheet


var talk = [];
talk[0] = " ***Kuolema ei pidä minkäänlaista ääntä tullessaan hakemaan sinua*** ***Peli päättyi***";
talk[1] = "PRINSESSA:   Kiitokseni sinulle - pelastit minut painajaisesta, jonka pelkäsin kestävän ikuisuuden. Velho muutti minut vihaiseksi lohikäärmeeksi kostoksi isäni erotettua hänet kuninkaan velhon virasta.";
talk[2] = "SEPPÄ:   Kuningas pitää minut kiireisenä. Mikäli sinulle ei rahaa ole niin älä häiritse minua.";
talk[3] = "NOITA:   Poistu minua häiritsemästä.. etsin yrttejä, mutten ole löytänyt vielä yhtä ainoaa..";
talk[4] = "VELHO:   Kuningas on vanha hölmö, hän erotti minut kuninkaan velhon virasta epäonnistuttuani parantamaan hänen vaimonsa.";
talk[5] = "SOTILAS:   Kuninkaamme käskystä estämme poistumisenne kunnes asianne täällä hänen kanssaan on hoidettu.";
talk[6] = "BARDI:   Ollos tervetullut vaeltaja. jää kuuntelemaan surusointuisia säveliäni. Menetin elämäni rakkauden lohikäärmelle ja kaiken lisäksi kadotin rakkaimman muistoni hänestä - korun, jonka sisällä oli kaiverrus rakkaastani";
talk[7] = "VIESTINTUOJA:   Kuningas on antanut käskyn tulla noutamaan teidät puheillensa välittömästi. Jatka siis välittömästi pohjoiseen.";
talk[8] = "KUNINGAS:   Valtakuntaamme riivaa peto, jonka yhtenä ensimmäisistä uhreista oli tyttäreni. Käskyni on tappaa tuo peto ja vapauttaa valtakuntamme sen surua ja kuolemaa aiheuttavasta ikeestä."; // Viesti joka näyteteään pelaajan valitseman suunnan ollessa estetty

var blockMessage = [];
blockMessage[0] = "Et onnistu kiertämään lohikäärmettä herättämättä sitä";
blockMessage[1] = "Linnaa ympäröivä vallihauta estää liikkumisen siihen suuntaan";
blockMessage[2] = "Et halua häiritä noitaa toimissaan";
blockMessage[3] = "Rakennukset estävät kulkusi siihen suuntaan";
blockMessage[4] = " ";
blockMessage[5] = " ";
blockMessage[6] = "Voimakas virtaus estää joen ylityken";
blockMessage[7] = "Metsä on liian tiheä kuljettavaksi";
blockMessage[8] = "Bardi pysäyttää sinut pyytäen kääntymään takaisin ja hoitamaan asiat kuntoon"; // Sijainti pelin alussa

var mapLocation = 4;
var playerMoved = true; // Pelaajan syöte

var playersInput = ""; // Pelin viesti

var gameMessage = ""; // Pelin sisältämät tavarat

var items = ["kivi", "koru", "kolikko", "yrtit", "miekka", "huilu"];
var itemLocations = [1, 7, undefined, 6, undefined, undefined];
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
    playerMoved = true;
    mapLocation -= 3;
  } else {
    return warning.innerHTML = blockMessage[mapLocation];
  }

  playGame();
}

function goSouth() {
  if (mapLocation <= 5) {
    playerMoved = true;
    mapLocation += 3;
  } else {
    return warning.innerHTML = blockMessage[mapLocation];
  }

  playGame();
}

function goEast() {
  if (mapLocation % 3 != 2) {
    playerMoved = true;
    mapLocation += 1;
  } else if (mapLocation === 5) {
    document.querySelector(".charDiv").style.display = "block";
    document.querySelector(".interface").style.display = "none";
    webpCharImage.srcset = "images/" + charWebp[5];
    pngCharImage.src = "images/" + charPng[5];
    speak.innerHTML = talk[5];
  } else {
    return warning.innerHTML = blockMessage[mapLocation];
  }

  playGame();
}

function goWest() {
  if (mapLocation % 3 != 0) {
    playerMoved = true;
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
window.addEventListener("keydown", keydownHandler, false); // Tämä tarkistaa Enter-näppäimen painalluksen

function keydownHandler(e) {
  if (e.keyCode === 13) {
    playGame();
  }
}

function mouseInterfaceHandler(array) {
  input.value = array.join(" ");
  playGame();
}

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
  action = action.toString(); // warningin oletusvärin palautus

  warning.style.color = "red";

  function checkAction() {
    var output = [];

    var _iterator2 = _createForOfIteratorHelper(playersInputArray),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var element = _step2.value;
        if (actionsForPlayer.includes(element)) output.splice(0, 1, element);else if (output === []) output.splice(0, 1, "Ei löytynyt vastaavuutta");
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return output;
  }

  function pickUpItem() {
    var _iterator3 = _createForOfIteratorHelper(playersInputArray),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var element = _step3.value;

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
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }

  function dropItem() {
    var _iterator4 = _createForOfIteratorHelper(playersInputArray),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var element = _step4.value;

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
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }

  function useItem() {
    var _iterator5 = _createForOfIteratorHelper(playersInputArray),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var element = _step5.value;

        if (backPack.includes(element)) {
          // let items = ["kivi", "koru", "kolikko", "yrtit", "miekka", "huilu"]
          if (element == "kivi") {
            if (mapLocation == 0) {
              document.querySelector(".charDiv").style.display = "block";
              document.querySelector(".charDiv span").style.display = "none";
              document.querySelector(".interface").style.display = "none";
              webpCharImage.srcset = "images/" + charWebp[0];
              pngCharImage.src = "images/" + charPng[0];
              speak.innerHTML = "Heität nukkuvaa lohikäärmettä kivellä.. lohikäärme herää vihaisena kääntäen päänsä heti suuntaasi hönkäisten tulikuuman liekin päällesi. " + talk[0];
            } else if (mapLocation == 2) {
              document.querySelector(".charDiv").style.display = "block";
              document.querySelector(".charDiv span").style.display = "none";
              document.querySelector(".interface").style.display = "none";
              webpCharImage.srcset = "images/" + charWebp[0];
              pngCharImage.src = "images/" + charPng[0];
              speak.innerHTML = "Heität noitaa kohti kivellä.. Noita lausuu sanoja, joita et ymmärrä, ja näet kiven muuttavan suuntaan takaisin. Kivi iskeytyy järkyttävällä voimalla otsaasi - tunnet kuinka kaadut maailman pimetessä ympärilläsi. " + talk[0];
            } else {
              warning.style.color = "lightgreen";
              warning.innerHTML = "Heität kiven kaikin voimin eteen päin. Kivi lentää pitkälle etkä löydä sitä enää";
              backPack.splice(backPack.indexOf(element), 1);
            }
          } else if (element == "yrtit") {
            if (mapLocation == 2) {
              document.querySelector(".charDiv").style.display = "block";
              document.querySelector(".interface").style.display = "none";
              webpCharImage.srcset = "images/" + charWebp[3];
              pngCharImage.src = "images/" + charPng[3];
              speak.innerHTML = "NOITA:   Toit minulle yrttejä - olet yllättävä tapaus. Sinulla varmasti on joku taka-ajatus tässä. Tässä kolikko palveluksestasi, jätä minut nyt rauhaan.";
              talk[3] = "NOITA:   Olen kiireinen, jätä minut rauhaan.";
              var i = backPack.indexOf("yrtit");
              var y = items.indexOf("kolikko");
              backPack.splice(i, 1);
              itemLocations[y] = 2;
            } else {
              warning.style.color = "lightgreen";
              warning.innerHTML = "Tutkit yrttejä - ne tuoksuvat voimakkaasti. Sinulla ei ole niille käyttöä.";
            }
          } else if (element == "kolikko") {
            if (mapLocation == 3) {
              document.querySelector(".charDiv").style.display = "block";
              document.querySelector(".interface").style.display = "none";
              webpCharImage.srcset = "images/" + charWebp[2];
              pngCharImage.src = "images/" + charPng[2];
              speak.innerHTML = "SEPPÄ:   Rahasi kelpaa. Taoin aikaisemmin miekan, joka sopisi juuri sinulle.";
              talk[2] = "SEPPÄ:   Olen kiireinen, älä häiritse minua enää.";

              var _i = backPack.indexOf("kolikko");

              var _y = items.indexOf("miekka");

              backPack.splice(_i, 1);
              itemLocations[_y] = 3;
            } else {
              warning.style.color = "lightgreen";
              warning.innerHTML = "Tutkit kolikko - se on kultakolikko, arvokas ja kulunut. Sille varmasti on käyttöä, pidä hyvää huolta siitä.";
            }
          } else if (element == "miekka") {
            if (mapLocation == 0) {
              document.querySelector(".charDiv").style.display = "block";
              document.querySelector(".charDiv span").style.display = "none";
              document.querySelector(".interface").style.display = "none";
              webpCharImage.srcset = "images/" + charWebp[8];
              pngCharImage.src = "images/" + charPng[8];
              speak.innerHTML = "KUNINGAS:   Sait lohikäärmeen tapettua. Valtakuntamme on nyt turvassa. Suurkiitokset sinulle. ***Peli päättyi***";
            } else {
              warning.style.color = "lightgreen";
              warning.innerHTML = "Tutkit ja testaat miekkaa kädessäsi. Miekka on erinomaisesti tasapainotettu ja se on todella terävä.";
            }
          } else if (element == "huilu") {
            if (mapLocation == 0) {
              document.querySelector(".charDiv").style.display = "block";
              document.querySelector(".charDiv span").style.display = "none";
              document.querySelector(".interface").style.display = "none";
              webpCharImage.srcset = "images/" + charWebp[1];
              pngCharImage.src = "images/" + charPng[1];
              speak.innerHTML = talk[1] + " ***Peli päättyi***";
            } else {
              warning.style.color = "lightgreen";
              warning.innerHTML = "Nostat huilun huulillesi ja alat soittamaan. Soitto on todella lumoavaa ja tuntuu kuin sen äänessä olisi taikaa.";
            }
          } else if (element == "koru") {
            if (mapLocation == 8) {
              document.querySelector(".charDiv").style.display = "block";
              document.querySelector(".interface").style.display = "none";
              webpCharImage.srcset = "images/" + charWebp[6];
              pngCharImage.src = "images/" + charPng[6];
              speak.innerHTML = "BARDI:   Sinäkö löysit koruni? Olin jo luovuttanut toivon sen löytymisen suhteen. Minulla ei ole rikkauksia, mutta tämä huilu voi olla sinulle todella arvokas.";
              talk[6] = "BARDI:   Olet aina tervetullut iloisen musiikkini pariin. Muista, että musiikki avaa mysteerejä maailmassa.";

              var _i2 = backPack.indexOf("koru");

              var _y2 = items.indexOf("huilu");

              backPack.splice(_i2, 1);
              itemLocations[_y2] = 8;
            } else {
              warning.style.color = "lightgreen";
              warning.innerHTML = "Koru on yksinkertainen ja kaunis. Sen sisällä on kaiverrus naisesta.";
            }
          }
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }

  function itemsInBackpack(command) {
    if (backPack.length !== 0) {
      list = "<ul>";

      var _iterator6 = _createForOfIteratorHelper(backPack),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var element = _step6.value;
          list += "<li onmousedown=\"mouseInterfaceHandler(['".concat(command, "', '").concat(element, "'])\">") + element + "</li>";
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
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

      var _iterator7 = _createForOfIteratorHelper(items),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var element = _step7.value;

          if (itemLocations[items.indexOf(element)] === mapLocation) {
            playersInputArray = ["poimi"];
            playersInputArray.push(element);
            list += "<li onmousedown=\"mouseInterfaceHandler(['poimi', '".concat(element, "'])\">") + element + "</li>";
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      list += '</ul>';
      return list;
    } else return "";
  }

  switch (action) {
    case 'pohjoinen':
      if (mapLocation >= 3) {
        playerMoved = true;
        mapLocation -= 3;
      } else {
        warning.innerHTML = blockMessage[mapLocation];
      }

      break;

    case 'etelä':
      if (mapLocation <= 5) {
        playerMoved = true;
        mapLocation += 3;
      } else {
        warning.innerHTML = blockMessage[mapLocation];
      }

      break;

    case "itä":
      if (mapLocation % 3 != 2) {
        playerMoved = true;
        mapLocation += 1;
      } else if (mapLocation === 5) {
        document.querySelector(".charDiv").style.display = "block";
        document.querySelector(".interface").style.display = "none";
        webpCharImage.srcset = "images/" + charWebp[5];
        pngCharImage.src = "images/" + charPng[5];
        speak.innerHTML = talk[5];
      } else {
        warning.innerHTML = blockMessage[mapLocation];
      }

      break;

    case "länsi":
      if (mapLocation % 3 != 0) {
        playerMoved = true;
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
  var usable = itemsInBackpack('käytä');
  document.querySelector("#mouseUse").innerHTML += usable;
  document.querySelector("#mouseDrop").innerHTML = "[ Pudota ]";
  var droppable = itemsInBackpack('pudota');
  document.querySelector("#mouseDrop").innerHTML += droppable;
  render();
}

function render() {
  // playerInputin tyhjentäminen
  document.querySelector('#input').value = '';
  document.querySelector('#input').placeholder = 'Mitä haluat tehdä'; // kuvien renderöinti

  webpImage.srcset = "images/" + imagesWebp[mapLocation];
  jpgImage.src = "images/" + imagesJpg[mapLocation]; // NPC hahmot

  if (playerMoved == true) {
    charInteraction();
  } // sijainnin päivitys pelaajalle


  output.innerHTML = "<span class='outputHeader'>Sijaintisi on:</span><br>" + map[mapLocation]; // mahdolliset esineet peliruudulla

  if (itemLocations.some(function (value) {
    return value === mapLocation;
  })) {
    var localItems = [];

    var _iterator8 = _createForOfIteratorHelper(items),
        _step8;

    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var element = _step8.value;

        if (itemLocations[items.indexOf(element)] === mapLocation) {
          localItems.push(element);
        }
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
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

  playerMoved = false;
}

//# sourceMappingURL=script.js.map
