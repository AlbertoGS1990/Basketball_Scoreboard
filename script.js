let homeScoreEl = document.getElementById("home");
let homeScore = homeScoreEl.textContent;

let guestScoreEl = document.getElementById("guest");
let guestScore = guestScoreEl.textContent;

function add1H() {
    homeScore = parseInt(homeScore) + 1;
    homeScoreEl.textContent = homeScore;
    
}

function add2H() {
    homeScore = parseInt(homeScore) + 2;
    homeScoreEl.textContent = homeScore;
    checkWinner();
}

function add3H() {
    homeScore = parseInt(homeScore) + 3;
    homeScoreEl.textContent = homeScore;
    checkWinner();
}

function add1G() {
    guestScore = parseInt(guestScore) + 1;
    guestScoreEl.textContent = guestScore;
    checkWinner();
}

function add2G() {
   guestScore = parseInt(guestScore) + 2;
    guestScoreEl.textContent = guestScore;
    checkWinner();
}

function add3G() {
    guestScore = parseInt(guestScore) + 3;
    guestScoreEl.textContent = guestScore;
    checkWinner();
}

function checkWinner() {
    if (homeScore > guestScore){
        homeScoreEl.style.border = "3px solid yellow";
         guestScoreEl.style.border = "none";
    } else if (homeScore < guestScore)  {
        guestScoreEl.style.border = "3px solid yellow";
        homeScoreEl.style.border = "none";

    } else {
        homeScoreEl.style.border = "none";
        guestScoreEl.style.border = "none";
    }
}