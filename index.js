let countHome = document.getElementById("count-home")
let countGuest = document.getElementById("count-guest")

let home = 0
let guest = 0

function homeOne() {
    home += 1
    countHome.textContent = home 
}

function homeTwo() {
    home += 2
    countHome.textContent = home 
}

function homeThree() {
    home += 3
    countHome.textContent = home 
}

function guestOne() {
    guest += 1
    countGuest.textContent = guest 
}

function guestTwo() {
    guest += 2
    countGuest.textContent = guest 
}

function guestThree() {
    guest += 3
    countGuest.textContent = guest 
}

function clearIt() {
    home = 0
    guest = 0
    countHome.textContent = 0
    countGuest.textContent = 0
}