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

// Sijainti pelin alussa
let mapLocation = 4

// Pelaajan syöte
let playersInput = ""

// Pelin viesti
let gameMessage = ""

// Pelaajan köytössä olevat toiminnot
let actionsForPlayer = ["pohjoinen", "etelä", "länsi", "itä"]
let action = ""

// Käyttöliittymäkomponentit
let output = document.querySelector("#output")
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
    action = ""
    let playersInputArray = playersInput.split(' ')
    
    action = checkAction()
    action = action.toString()

    function checkAction() {
        const output = []
        for (let element of playersInputArray)
            if (actionsForPlayer.includes(element))
                output.splice(0, 1, element)
            else output.splice(0, 1, "Ei löytynyt vastaavuutta")
        return output
    }
    
    switch (action) {

        case 'pohjoinen':
            mapLocation -= 3
            break
        
        case 'etelä':
            mapLocation += 3
            break

        case 'itä':
            mapLocation += 1
            break

        case 'länsi':
            mapLocation -= 1
            break

        default:
            gameMessage = "Tuntematon toiminto"
    } 

    render()
}

function render() {
    webpImage.srcset = "images/" + imagesWebp[mapLocation]
    jpgImage.src = "images/" + imagesJpg[mapLocation]

    // sijainnin päivitys pelaajalle
    output.innerHTML = "<span class='outputHeader'>Sijaintisi on:</span><br>" + map[mapLocation]

    // palaute pelaajalle 
    output.innerHTML += "<br><em>" + gameMessage + "</em>"
}