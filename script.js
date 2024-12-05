function getRandomNumber() {
    return Math.floor(Math.random() * 9) + 1;
    console.log(getRandomNumber());
}

let randomNumbers = [];
for (let i = 0; i < 3; i++) {
    randomNumbers.push(getRandomNumber());
}

console.log(randomNumbers);

function generatePawn () {
    const div = document.createElement('div');
    div.className = "pawn";
    document.querySelector("body").append(div);
}

for (let i = 0; i < 30; i++) {
    generatePawn();
}
