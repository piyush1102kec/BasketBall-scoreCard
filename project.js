let homePts = document.getElementById("home-pts")
let homeCount = 0

let guestPts = document.getElementById("guest-pts")

let guestCount = 0

function add1(){
    homeCount += 1
    homePts.textContent = homeCount
}

function add2(){
    homeCount +=2
    homePts.textContent = homeCount
}
function add3(){
    homeCount += 3
    homePts.textContent = homeCount
}

function inc1(){
    guestCount += 1
    guestPts.textContent = guestCount
}

function inc2(){
    guestCount += 2
    guestPts.textContent = guestCount
}
function inc3(){
    guestCount += 3
    guestPts.textContent = guestCount
}
function resetScores(){
    homeCount = 0
    guestCount = 0
    homePts.textContent = homeCount
    guestPts.textContent = guestCount
}
