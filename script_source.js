let map = []

map[0] = "Vanha linnantorni"
map[1] = "Syvä kaivo"
map[2] = "Aurinkoinen metsäaukio"
map[3] = "Nukkuva lohikäärme"
map[4] = "Kapea metsäpolku"
map[5] = "Vanha portti"
map[6] = "Joen ranta"
map[7] = "Tyhjä puupenkki"
map[8] = "Vanha mökki, sisältä kuuluu hiljaista musiikkia"

let imagesWebp = []

imagesWebp[0] = "torni.webp"
imagesWebp[1] = "kaivo.webp"
imagesWebp[2] = "aukio.webp"
imagesWebp[3] = "dragon.webp"
imagesWebp[4] = "polku.webp"
imagesWebp[5] = "portti.webp"
imagesWebp[6] = "joki.webp"
imagesWebp[7] = "penkki.webp"
imagesWebp[8] = "mokki.webp"

let imagesJpg = []

imagesJpg[0] = "torni.jpg"
imagesJpg[1] = "kaivo.jpg"
imagesJpg[2] = "aukio.jpg"
imagesJpg[3] = "dragon.jpg"
imagesJpg[4] = "polku.jpg"
imagesJpg[5] = "portti.jpg"
imagesJpg[6] = "joki.jpg"
imagesJpg[7] = "penkki.jpg"
imagesJpg[8] = "mokki.jpg"

let blockMessage = []

blockMessage[0] = " Haluamasi reitti on liian vaarallinen"
blockMessage[1] = " Salaperäinen voima estää liikkumesi tuohon suuntaan"
blockMessage[2] = " Vaikeakulkuinen ryteikkö estää kulkemisen"
blockMessage[3] = " Et pääse kiertämään lohikäärmettä valitsemastasi suunnasta"
blockMessage[4] = " "
blockMessage[5] = " Portti sulkeutuu ja estää pääsysi"
blockMessage[6] = " Joen voimakas virtaus estää joen ylityken"
blockMessage[7] = " Metsä on liian tiheä kuljettavaksi"
blockMessage[8] = " Kauhu jähmettää sinut paikallesi etkä tohdi kulkea tähän suuntaan"

// Sijainti pelin alussa
let mapLocation = 4

// Pelaajan syöte
let playersInput = ""

// Pelin viesti
let gameMessage = ""

// Pelin sisältämät tavarat
let items = ["huilu", "kivi", "miekka"]
let itemLocations = [1, 6, 8]
// let knownItems = ["huilu", "kivi", "miekka"]
// let item = ""

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

let input = document.querySelector("#input")
let button = document.querySelector("button")
button.style.cursor = "pointer"
button.addEventListener("click", clickHandler, false)

let webpImage = document.querySelector("source")
let jpgImage = document.querySelector("img")

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
    console.log(action)
    action = action.toString()
    console.log(action)

    // Own function for checking if player's inout includes possible action for player
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
                    items.splice(i, 1)
                    itemLocations.splice(i, 1)
                    break
                } else { gameMessage = "Ei tavaraa poimittavana" } 
            } else {
                if (gameMessage.startsWith("Poimit")) {
                    break
                } 
                else { gameMessage += "Ei tavaraa poimittavana" } 
            }
        }

    function dropItem() {

    }

    function useItem() {

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

    render()
}

function render() {
    // kuvien renderöinti
    webpImage.srcset = "images/" + imagesWebp[mapLocation]
    jpgImage.src = "images/" + imagesJpg[mapLocation]

    // sijainnin päivitys pelaajalle
    output.innerHTML = "<span class='outputHeader'>Sijaintisi on:</span><br>" + map[mapLocation]

    // mahdolliset esineet peliruudulla
    if (itemLocations.includes(mapLocation)) // Own code for checking possible items
        gameMessage = "Näkyvissä on " + items[itemLocations.indexOf(mapLocation)]

    // repun sisältö
    if (backPack.length != 0) {
        inventory.innerHTML = "Repussasi on " + backPack.join()
    } else { inventory.innerHTML = "Reppusi on tyhjä" }

    // palaute pelaajalle 
    if (gameMessage.startsWith("Poimit")) {
        inGameMessage.innerHTML = "<strong>" + gameMessage + "</strong>"
    } 
    else if (gameMessage.startsWith("Näkyvissä")) {
        inGameMessage.innerHTML = "<i>" + gameMessage + "</i>"
    }
}