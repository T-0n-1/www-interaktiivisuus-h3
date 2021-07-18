let map = []
map[0] = "Nukkuva lohikäärme"
map[1] = "Vanha linna"
map[2] = "Hämyinen metsäaukio"
map[3] = "Linnan piha"
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
charWebp[0] = "medieval-grimreaper.webp"
charWebp[1] = "medieval-princess.webp"
charWebp[2] = "medieval-blacksmith.webp"
charWebp[3] = "medieval-witch.webp"
charWebp[4] = "medieval-wizard.webp"
charWebp[5] = "medieval-soldier.webp"
charWebp[6] = "medieval-bard.webp"
charWebp[7] = "medieval-messenger.webp"
charWebp[8] = "medieval-king.webp"

let charPng = []
charPng[0] = "medieval-grimreaper.png"
charPng[1] = "medieval-princess.png"
charPng[2] = "medieval-blacksmith.png"
charPng[3] = "medieval-witch.png"
charPng[4] = "medieval-wizard.png"
charPng[5] = "medieval-soldier.png"
charPng[6] = "medieval-bard.png"
charPng[7] = "medieval-messenger.png"
charPng[8] = "medieval-king.png"

let charLocations = [undefined, undefined, 3, 2, 6, undefined, 8, 4, 1]

let webpImage = document.querySelector("#gameScreen source")
let jpgImage = document.querySelector("#gameScreen img")
let webpCharImage = document.querySelector("#charScreen source")
let pngCharImage = document.querySelector("#charScreen img")
let speak = document.querySelector("#spokenText p")

function charInteraction() {
    if (charLocations.some(value => value === mapLocation)) {
        document.querySelector(".charDiv").style.display = "block"
        document.querySelector(".interface").style.display = "none"
        for (let element of charLocations) {
            if (element === mapLocation) {
                webpCharImage.srcset = "../images/" + charWebp[charLocations.indexOf(element)]
                pngCharImage.src = "../images/" + charPng[charLocations.indexOf(element)]
                speak.innerHTML = talk[charLocations.indexOf(element)]
            }
        }
    }
}

function closeCharDiv() {
    document.querySelector(".charDiv").style.display = "none"
    document.querySelector(".interface").style.display = "flex"
}

// Hahmojen puheet
let talk = []
talk[0] = "* Kuolema ei pidä minkäänlaista ääntä tullessaan hakemaan sinua *** Peli päättyi *"
talk[1] = "PRINSESSA:   Kiitokseni sinulle - pelastit minut painajaisesta, jonka pelkäsin kestävän ikuisuuden. Velho muutti minut vihaiseksi lohikäärmeeksi kostoksi isäni erotettua hänet kuninkaan velhon virasta."
talk[2] = "SEPPÄ:   Kuningas pitää minut kiireisenä. Mikäli sinulle ei rahaa ole niin älä häiritse minua."
talk[3] = "NOITA:   Poistu minua häiritsemästä.. etsin yrttejä, mutten ole löytänyt vielä yhtä ainoaa.."
talk[4] = "VELHO:   Kuningas on vanha hölmö, hän erotti minut kuninkaan velhon virasta epäonnistuttuani parantamaan hänen vaimonsa."
talk[5] = "SOTILAS:   Kuninkaamme käskystä estämme poistumisenne kunnes asianne täällä hänen kanssaan on hoidettu."
talk[6] = "BARDI:   Ollos tervetullut vaeltaja. jää kuuntelemaan surusointuisia säveliäni. Menetin elämäni rakkauden lohikäärmelle ja kaiken lisäksi kadotin rakkaimman muistoni hänestä - korun, jonka sisällä oli kaiverrus rakkaastani"
talk[7] = "VIESTINTUOJA:   Kuningas on antanut käskyn tulla noutamaan teidät puheillensa välittömästi. Jatka siis välittömästi pohjoiseen."
talk[8] = "KUNINGAS:   Valtakuntaamme riivaa peto, jonka yhtenä ensimmäisistä uhreista oli tyttäreni. Käskyni on tappaa tuo peto ja vapauttaa valtakuntamme sen surua ja kuolemaa aiheuttavasta ikeestä."

// Viesti joka näyteteään pelaajan valitseman suunnan ollessa estetty
let blockMessage = []
blockMessage[0] = "Et onnistu kiertämään lohikäärmettä herättämättä sitä"
blockMessage[1] = "Linnaa ympäröivä vallihauta estää liikkumisen siihen suuntaan"
blockMessage[2] = "Et halua häiritä noitaa toimissaan"
blockMessage[3] = "Rakennukset estävät kulkusi siihen suuntaan"
blockMessage[4] = " "
blockMessage[5] = " "
blockMessage[6] = "Voimakas virtaus estää joen ylityken"
blockMessage[7] = "Metsä on liian tiheä kuljettavaksi"
blockMessage[8] = "Bardi pysäyttää sinut pyytäen kääntymään takaisin ja hoitamaan asiat kuntoon"

// Sijainti pelin alussa
let mapLocation = 4
let playerMoved = true

// Pelaajan syöte
let playersInput = ""

// Pelin viesti
let gameMessage = ""

// Pelin sisältämät tavarat
let items = ["kivi", "koru", "kolikko", "yrtit", "miekka", "huilu"]
let itemLocations = [1, 7, undefined, 6, undefined, undefined]

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
        playerMoved = true
        mapLocation -= 3
    } else {
        return warning.innerHTML = blockMessage[mapLocation]
    }
    playGame()
}

function goSouth() {
    if (mapLocation <= 5) {
        playerMoved = true
        mapLocation += 3
    } else {
        return warning.innerHTML = blockMessage[mapLocation]
    }
    playGame()
}

function goEast() {
    if (mapLocation % 3 != 2) {
        playerMoved = true
        mapLocation += 1
    } else if (mapLocation === 5) {
        document.querySelector(".charDiv").style.display = "block"
        document.querySelector(".interface").style.display = "none"
        webpCharImage.srcset = "../images/" + charWebp[5]
        pngCharImage.src = "../images/" + charPng[5]
        speak.innerHTML = talk[5]
    } else {
        return warning.innerHTML = blockMessage[mapLocation]
    }
    playGame()
}


function goWest() {
    if (mapLocation % 3 != 0) {
        playerMoved = true
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
                playerMoved = true
                mapLocation -= 3
            } else {
                warning.innerHTML = blockMessage[mapLocation]
            }
            break

        case 'etelä':
            if (mapLocation <= 5) {
                playerMoved = true
                mapLocation += 3
            } else {
                warning.innerHTML = blockMessage[mapLocation]
            }
            break

        case "itä":
            if (mapLocation % 3 != 2) {
                playerMoved = true
                mapLocation += 1
            } else if (mapLocation === 5) {
                document.querySelector(".charDiv").style.display = "block"
                document.querySelector(".interface").style.display = "none"
                webpCharImage.srcset = "../images/" + charWebp[5]
                pngCharImage.src = "../images/" + charPng[5]
                speak.innerHTML = talk[5]
            } else {
                warning.innerHTML = blockMessage[mapLocation]
            }
            break

        case "länsi":
            if (mapLocation % 3 != 0) {
                playerMoved = true
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
    
    // NPC hahmot
    if (playerMoved == true) {
    charInteraction()
    }

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

    playerMoved = false
}