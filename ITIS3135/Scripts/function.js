function displayDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const dateTimeString = `Today is ${now.toLocaleDateString('en-US', options)}`;
    document.getElementById('dateTimeDisplay').textContent = dateTimeString;
}

displayDateTime();

function greetUser() {
    const companyName = "Calculated Rooster";
    const userName = document.getElementById('userName').value;
    const userMood = document.getElementById('userMood').value;
    const greeting = `The ${companyName} welcomes you, ${userName}! We're glad you are doing ${userMood}!`;
    document.getElementById('greeting').textContent = greeting;
}

function favoriteNumberPolygon() {
    const number = Math.abs(Math.round(document.getElementById('favoriteNumber').value));
    const polygons = ["point", "digon", "trigon", "tetragon", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"];
    const polygonName = number < polygons.length ? polygons[number] : "a polygon with " + number + " sides";
    alert(polygonName);
}

function tellAJoke() {
    const jokes = [
        "What do you call fake spaghetti? An impasta!",
        "What do you get when you cross a snowman and a vampire? Frostbite.",
        "Why dont skeletons fight each other? They dont have the guts."
    ];
    document.getElementById('dynamicContent').textContent = jokes[Math.floor(Math.random() * jokes.length)];
}

function insultMe() {
    const insults = [
        "Id agree with you but then wed both be wrong.",
        "Keep rolling your eyes. Maybe you'll find a brain back there",
        "You're the reason the gene pool needs a lifeguard."
    ];
    document.getElementById('dynamicContent').textContent = insults[Math.floor(Math.random() * insults.length)];
}

function calculateSum() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const sum = number1 + number2;
    document.getElementById('dynamicContent').textContent = `The sum is ${sum}.`;
}

function rockPaperScissors() {
    const userChoice = document.getElementById('rpsChoice').value.toLowerCase().trim();
    const choices = ["rock", "paper", "scissors"];

if (!userChoice) {
    document.getElementById('dynamicContent').textContent = "Please enter rock, paper, or scissors to play.";
    return; 
}

if (!choices.includes(userChoice)) {
    document.getElementById('dynamicContent').textContent = "Invalid choice. Please enter rock, paper, or scissors.";
    return; 
}

const computerChoice = choices[Math.floor(Math.random() * choices.length)];
let result;

if (userChoice === computerChoice) {
    result = "It's a tie!";
} else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
) {
    result = `You win! ${userChoice} beats ${computerChoice}.`;
} else {
    result = `You lose! ${computerChoice} beats ${userChoice}.`;
}

document.getElementById('dynamicContent').textContent = result;
}

