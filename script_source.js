let map = []
map[0] = "Nukkuva lohikäärme"
map[1] = "Vanha linna"
map[2] = "Aurinkoinen metsäaukio"
map[3] = "Syvä kaivo"
map[4] = "Kapea metsäpolku"
map[5] = "Vanha portti"
map[6] = "Joen ranta"
map[7] = "Tyhjä puupenkki"
map[8] = "Vanha mökki, sisältä kuuluu hiljaista musiikkia"

let imagesWebp = []
imagesWebp[0] = "dragon.webp"
imagesWebp[1] = "torni.webp"
imagesWebp[2] = "aukio.webp"
imagesWebp[3] = "kaivo.webp"
imagesWebp[4] = "polku.webp"
imagesWebp[5] = "portti.webp"
imagesWebp[6] = "joki.webp"
imagesWebp[7] = "penkki.webp"
imagesWebp[8] = "mokki.webp"

let imagesJpg = []
imagesJpg[0] = "dragon.jpg"
imagesJpg[1] = "torni.jpg"
imagesJpg[2] = "aukio.jpg"
imagesJpg[3] = "kaivo.jpg"
imagesJpg[4] = "polku.jpg"
imagesJpg[5] = "portti.jpg"
imagesJpg[6] = "joki.jpg"
imagesJpg[7] = "penkki.jpg"
imagesJpg[8] = "mokki.jpg"

let charWebp = []
charWebp[0] = "medieval grimreaper.webp"
charWebp[1] = "medieval princess.webp"
charWebp[2] = "medieval king.webp"
charWebp[3] = "medieval blacksmith.webp"
charWebp[4] = "medieval witch.webp"
charWebp[5] = "medieval wizard.webp"
charWebp[6] = "medieval cleric.webp"
charWebp[7] = "medieval soldier.webp"
charWebp[8] = "medieval bard.webp"

let charPng = []
charPng[0] = "medieval grimreaper.png"
charPng[1] = "medieval princess.png"
charPng[2] = "medieval king.png"
charPng[3] = "medieval blacksmith.png"
charPng[4] = "medieval witch.png"
charPng[5] = "medieval wizard.png"
charPng[6] = "medieval cleric.jpg"
charPng[7] = "medieval soldier.png"
charPng[8] = "medieval bard.png"

// Hahmojen puheet
let princessTalk = []
princessTalk[0] = "Kiitokseni sinulle - pelastit minut painajaisesta, jonka pelkäsin kestävän ikuisuuden. Velho muutti minut vihaiseksi lohikäärmeeksi kostoksi isäni erotettua hänet kuninkaan velhon virasta"

let kingTalk = []
kingTalk[0] = "Vaeltaja, saavut surun hetkellä. Valtakuntaamme on kohdannut monta suurta surua - ensin vaimoni kuoli outoon sairauteen ja sitten tyttäreni katosi. Olen erottanut kuninkaallisen velhon vaimoni kuoltua hänen ponnisteluistaan huolimatta. Pian sen jälkeen ilmestyi lohikäärme, joka on terrorisoinut koko valtakuntaa. Lohikäärmeen yksi ensimmäisistä uhreista oli luultavasti tyttäreni. Käsken sinua nyt hoitamaan asian - tappamaan lohikäärmeen ja tuomaan valtakunnalleni rauhan. Vaimoani ja tytärtäni se ei takaisin tuo, mutta näin saisin kansamme vielä jäämään - se on alkanut pienemmissä ja isommissa ryhmissä muuttamaan toisaalle."
kingTalk[1] = "Tiesin, että sinuun voi luottaa. Olet saanut lohikäärmeen tapettua ja nyt minäkin voin alkaa rauhassa surra."
kingTalk[2] = "Kuka olisi uskonut.. miten minä olenkaan ollut sokea. Kuinka voisin koskaan kiittää, sinä olit välittämättä käskystäni tappaa lohikäärme ja selvitit asiat paremmin kuin osasin koskaan edes unelmoida. Erottamani entinen kuninkaan velho oli taikonut tyttäreni lohikäärmeeksi ja varmasti ajatellut saavansa todella synkän koston minun tapattaessa lohikäärmeen, joka oikeasti olikin oma tyttäreni. Olen ikionnellinen, sinä olet antanut minulle tyttäreni takaisin."

let smithTalk = []
smithTalk[0] = "Kuningas pitää minut kiireisenä. Mikäli sinulle ei rahaa ole niin älä häiritse minua."
smithTalk[1] = "Rahasi väri kelpaa, tässä miekka, jonka alunperin olen takonut kuninkaan tulevalle pojalle.. jota ei tulekaan, tauti vei kuninkaan suloisen vaimoparan."
smithTalk[2] = "Muista aina - "

let witchTalk = []
witchTalk[0] = "Hei vaeltaja.. poistuthan pikaisesti minua häiritsemättä.. etsin yrttejä, mutten ole löytänyt vielä yhtä ainoaa.."
witchTalk[1] = "Kiitoksena tuomistasi yrteistä, ota tämä kolikko - minä en tee sillä mitään."
witchTalk[2] = "Täällä valtakunnassa ei kaikki ole sitä miltä näyttää.."

let wizardTalk = []
wizardTalk[0] = "Kuinka minä vihaankaan kuningasta, hän erotti minut kuninkaan velhon virasta epäonnistuttuani parantamaan hänen vaimonsa. Minä saan lopulta sanoa viimeisen sanan.. ja nauran.. makeasti.. kosto on oleva suloinen."

let clericTalk = []
clericTalk[0] = "Parahin vaeltaja, valtakuntamme kuningas on seurannut huhuja teistä ja suorittamistanne urotöistä. Hän käski viipymättä saapumaan audienssille linnaansa. Seuraa vain polkua pohjoiseen ja löydätte linnaan."

let soldierTalk = []
soldierTalk[0] = "Kuninkaamme käskystä estämme poistumisenne kunnes asianne täällä hänen kanssaan on hoidettu."

let bardTalk = []
bardTalk[0] = "Ollos tervetullut vaeltaja. jää kuuntelemaan surusointuisia säveliäni. Menetin elämäni rakkauden lohikäärmelle ja kaiken lisäksi kadotin rakkaimman muistoni hänestä - korun, jonka sisällä oli kaiverrus rakkaastani"
bardTalk[1] = "Sinä löysit sen - minun rakkaimman koruni. Minun rakkaimman, kadonneen koruni. Minulla ei koskaan ole ollut maallisia rikkauksia enkä voi korvata sinulle muuten kuin jakamalla kanssasi jumalallisen musiikin. Soita suruusi, soita iloosi - ongelmat kaikkoavat kuin itsestään, et tarvitse miekkaa et taikaa."

// Viesti joka näyteteään pelaajan valitseman suunnan ollessa estetty
let blockMessage = []
blockMessage[0] = "Tornin takana sijaitseva korkea jyrkänne estää liikkumisen siihen suuntaan"
blockMessage[1] = "Salaperäinen voima estää liikkumesi tuohon suuntaan"
blockMessage[2] = "Vaikeakulkuinen ryteikkö estää kulkemisen"
blockMessage[3] = "Et pääse kiertämään lohikäärmettä valitsemastasi suunnasta"
blockMessage[4] = " "
blockMessage[5] = "Portti sulkeutuu ja estää pääsysi"
blockMessage[6] = "Voimakas virtaus estää joen ylityken"
blockMessage[7] = "Metsä on liian tiheä kuljettavaksi"
blockMessage[8] = "Kauhu jähmettää sinut paikallesi etkä tohdi kulkea pidemmälle tähän suuntaan"

// Sijainti pelin alussa
let mapLocation = 4

// Pelaajan syöte
let playersInput = ""

// Pelin viesti
let gameMessage = ""

// Pelin sisältämät tavarat
let items = ["huilu", "kivi", "miekka"]
let itemLocations = [1, 6, 8]

let list = ``

// Pelaajan inventaario
let backPack = []

// Pelaajan köytössä olevat toiminnot
let actionsForPlayer = ["pohjoinen", "etelä", "länsi", "itä", "poimi", "pudota", "käytä"]
let action = ""

// Käyttöliittymäkomponentit
let output = document.querySelector("#output")
let inventory = document.querySelector("#inventory")
let inGameMessage = document.querySelector("#gamemessage")
let warning = document.querySelector("#warning")

output.innerHTML = "<span class='outputHeader'>Sijaintisi on:<br></span>" + map[mapLocation]

function goNorth() {
    if (mapLocation >= 3) {
        mapLocation -= 3
    } else {
        return warning.innerHTML = blockMessage[mapLocation]
    }
    playGame()
}

function goSouth() {
    if (mapLocation <= 5) {
        mapLocation += 3
    } else {
        return warning.innerHTML = blockMessage[mapLocation]
    }
    playGame()
}

function goEast() {
    if (mapLocation % 3 != 2) {
        mapLocation += 1
    } else {
        return warning.innerHTML = blockMessage[mapLocation]
    }
    playGame()
}


function goWest() {
    if (mapLocation % 3 != 0) {
        mapLocation -= 1
    } else {
        return warning.innerHTML = blockMessage[mapLocation]
    }
    playGame()
}

let input = document.querySelector("#input")
let button = document.querySelector("button")
button.style.cursor = "pointer"
button.addEventListener("click", clickHandler, false)
window.addEventListener("keydown", keydownHandler, false);

// Tämä tarkistaa Enter-näppäimen painalluksen
function keydownHandler(e) {
    if (e.keyCode === 13) {
        playGame();
    }
}

function mouseInterfaceHandler(array) {
    input.value = array.join(" ")
    playGame()
}


let webpImage = document.querySelector("#gameScreen source")
let jpgImage = document.querySelector("#gameScreen img")
let webpCharImage = document.querySelector("#charScreen source")
let pngCharImage = document.querySelector("#charScreen img")

render()

function clickHandler() {
    playGame()
}

function playGame() {
    playersInput = input.value.toLowerCase()
    gameMessage = ""
    inGameMessage.innerHTML = ""
    action = ""
    warning.innerHTML = ""
    let playersInputArray = playersInput.split(' ')

    action = checkAction()
    action = action.toString()

    function checkAction() {
        const output = []
        for (let element of playersInputArray)
            if (actionsForPlayer.includes(element))
                output.splice(0, 1, element)
        else if (output === [])
            output.splice(0, 1, "Ei löytynyt vastaavuutta")
        return output
    }


    function pickUpItem() {
        for (let element of playersInputArray)
            if (items.includes(element)) {
                let i = items.indexOf(element)
                if (itemLocations[i] == mapLocation) {
                    backPack.push(items[i])
                    gameMessage = "Poimit mukaasi esineen: " + element
                    warning.innerHTML = ""
                    items.splice(i, 1)
                    itemLocations.splice(i, 1)
                    break
                }
            } else {
                if (backPack.includes(element)) {
                    break
                } else {
                    warning.innerHTML = "Ei tavaraa poimittavana"
                }
            }
    }

    function dropItem() {
        for (let element of playersInputArray)
            if (backPack.includes(element)) {
                warning.innerHTML = "Pudotit maahan esineen: " + element
                items.push(element)
                itemLocations.push(mapLocation)
                backPack.splice(backPack.indexOf(element), 1)
                break
            } else {
                warning.innerHTML = "Ei sellaista tavaraa mukana"
            }
    }
    
    function useItem() {
        
    }
    
    function itemsInBackpack(command) {
        if (backPack.length !== 0) {
            list = `<ul>`
            for (let element of backPack) {
                list += `<li onmousedown="mouseInterfaceHandler(['${command}', '${element}'])">` + element + `</li>`
            }
            list += '</ul>'
            return list
        } else return ""
    }

    function ableToTake() {
        if (itemLocations.some(value => value === mapLocation)) {
            list = `<ul>`
            for (let element of items) {
                if (itemLocations[items.indexOf(element)] === mapLocation) {
                    playersInputArray = ["poimi"]
                    playersInputArray.push(element)
                    list += `<li onmousedown="mouseInterfaceHandler(['poimi', '${element}'])">` + element + `</li>`
                }
            }
            list += '</ul>'
            return list
        } else return ""
    }

    switch (action) {

        case 'pohjoinen':
            if (mapLocation >= 3) {
                mapLocation -= 3
            } else {
                warning.innerHTML = blockMessage[mapLocation]
            }
            break

        case 'etelä':
            if (mapLocation <= 5) {
                mapLocation += 3
            } else {
                warning.innerHTML = blockMessage[mapLocation]
            }
            break

        case "itä":
            if (mapLocation % 3 != 2) {
                mapLocation += 1
            } else {
                warning.innerHTML = blockMessage[mapLocation]
            }
            break

        case "länsi":
            if (mapLocation % 3 != 0) {
                mapLocation -= 1
            } else {
                warning.innerHTML = blockMessage[mapLocation]
            }
            break

        case "poimi":
            pickUpItem()
            break

        case "pudota":
            dropItem()
            break

        case "käytä":
            useItem()
            break

        default:
            gameMessage = "Tuntematon toiminto"
    }

    document.querySelector("#mouseTake").innerHTML = "[ Poimi ]"
    let ableToPickUp = ableToTake()
    document.querySelector("#mouseTake").innerHTML += ableToPickUp

    document.querySelector("#mouseUse").innerHTML = "[ Käytä ]"
    let usable = itemsInBackpack('käytä')
    document.querySelector("#mouseUse").innerHTML += usable

    document.querySelector("#mouseDrop").innerHTML = "[ Pudota ]"
    let droppable = itemsInBackpack('pudota')
    document.querySelector("#mouseDrop").innerHTML += droppable


    render()
}

function render() {
    // playerInputin tyhjentäminen
    document.querySelector('#input').value = '';
    document.querySelector('#input').placeholder = 'Mitä haluat tehdä';

    // kuvien renderöinti
    webpImage.srcset = "images/" + imagesWebp[mapLocation]
    jpgImage.src = "images/" + imagesJpg[mapLocation]

    // sijainnin päivitys pelaajalle
    output.innerHTML = "<span class='outputHeader'>Sijaintisi on:</span><br>" + map[mapLocation]

    // mahdolliset esineet peliruudulla
    if (itemLocations.some(value => value === mapLocation)) {
        let localItems = []
        for (let element of items) {
            if (itemLocations[items.indexOf(element)] === mapLocation) {
                localItems.push(element)
            }
        }
        gameMessage = "Näkyvissä on " + localItems.join(", ")
    }

    // repun sisältö
    if (backPack.length != 0) {
        inventory.innerHTML = "Repussasi on " + backPack.join(", ")
    } else {
        inventory.innerHTML = "Reppusi on tyhjä"
    }

    // palaute pelaajalle 
    if (gameMessage.startsWith("Poimit")) {
        inGameMessage.innerHTML = "<strong>" + gameMessage + "</strong>"
    } else if (gameMessage.startsWith("Näkyvissä")) {
        inGameMessage.innerHTML = "<i>" + gameMessage + "</i>"
    }
}