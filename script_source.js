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

// Sijainti pelin alussa
let mapLocation = 4

// Pelaajan syöte
let playersInput = ""

// Pelin viesti
let gameMessage = ""

// Pelaajan köytössä olevat toiminnot
let actionsForPlayer = ["pohjoinen", "etelä", "länsi", "itä", "poimi", "pudota", "käytä"]
let action = ""

let output = document.querySelector("#output")
output.innerHTML = "<span class='outputHeader'>Sijaintisi on:<br></span>" + map[mapLocation]
let input = document.querySelector("#input")
let button = document.querySelector("button")
button.style.cursor = "pointer"
button.addEventListener("click", clickHandler, false)

render()

function clickHandler() {
    console.log("Nappia painettu")
}