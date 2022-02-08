let random = document.querySelector("#random");
let skipped = document.querySelector("#skip");
let tryAgain = document.querySelector("#tryAgain");
let startAgain = document.querySelector("#startAgain");
let start = document.querySelector("#start");
let scoreOption = document.querySelector("#score-option");
let time = document.querySelector(".time");
let textArea = document.querySelector("#typedWord");



const url = "https://game-of-thrones-quotes.herokuapp.com/v1/random/5";
async function getData(){
    let response = await fetch(url);
    let data = await response.json();

    let randomWord = Math.floor(Math.random() * data.length)

    random.innerHTML = data[randomWord].sentence;
}

getData();


startAgain.addEventListener("click", () => {
    window.location.reload();
})
tryAgain.addEventListener("click", () => {
    window.location.reload();
})

function skip(){
    getData();
    let extraTime = [3,5,8,10,12,15];
    let randomNumber = Math.floor(Math.random() * extraTime.length);
    let randomTime = extraTime[randomNumber];
    timer+= randomTime;
}



let displayScore = document.querySelector("#score");
let typedWord = document.querySelector("#typedWord");
let score = 0;

// plus time if the user type correctly
typedWord.addEventListener("keyup", () => {
    if(typedWord.value.trim() === random.innerText){
        score++;
        displayScore.innerHTML = score;
        getData();
        typedWord.value = "";
        let extraTime = [3,5,8,10,12,15];
        let randomNumber = Math.floor(Math.random() * extraTime.length);
        let randomTime = extraTime[randomNumber];
        timer+= randomTime;
    }
})


random.style.display = "none";
skipped.style.display = "none";
startAgain.style.display = "none";

start.addEventListener("click", () => {

    start.style.display = "none";
    random.style.display = "block";
    skipped.style.display = "block";
    startAgain.style.display = "block";
    time.style.display = "block";
    textArea.style.display = "flex";
    




//timer
let timer = 30;

function displayTime(){
    let displayTimer = document.querySelector("#timer");
    timer--
    displayTimer.innerHTML = timer+ "s";
    if(timer == 0){
        clearInterval(counter);
        gameOver();
    }
}

let counter = setInterval(displayTime, 1000);

//game over
function gameOver(){
    random.innerHTML = "You Lose, Time Runs Out !!"
    typedWord.style.display = "none";
    skipped.style.display = "none";
    tryAgain.style.display = "block";
    startAgain.style.display = "none";
}


})

//timing event

let data = new Date();
let hours = data.getHours();
let timeInterval = document.getElementById("timeInterval");

if(hours >= 1 && hours <= 5){
    timeInterval.innerHTML = "Hello, Early Morning 🥱";
}else if(hours >= 6 && hours < 12){
    timeInterval.innerHTML = "Hello, Good Morning 🌞";
}else if(hours >= 12 && hours <= 14){
    timeInterval.innerHTML = "Hello, Good Afternoon ☀️";
}else if(hours >= 15 && hours <= 18){
    timeInterval.innerHTML = "Hello, Good Evening 🌤️";
}else if(hours >= 19 && hours <= 24 || hours == 0){
    timeInterval.innerHTML = "Hello, Good Night 🌜";
}else {
    timeInterval.innerHTML = "Hello Warmly Welcome To";
}

let showUser = document.querySelector("#show");
function popUp(){
    let username = prompt("What is your name ?");
    localStorage.setItem("storedUser", username );
    showUser.innerHTML = username;
}

let storedUser = localStorage.getItem("storedUser");
if(storedUser){
    showUser.innerHTML = storedUser;
}else{
    showUser.innerHTML = "User";
}