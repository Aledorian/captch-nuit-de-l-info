document.querySelector("dialog").showModal()

function getRandomNumber() {
    return Math.floor(Math.random() * 9) + 1;
}

let randomNumbers = [];
for (let i = 0; i < 3; i++) {
    randomNumbers.push(getRandomNumber());
}

document.querySelector("#sectionOne h3").textContent = randomNumbers[0]
document.querySelector("#sectionTwo h3").textContent = randomNumbers[1]
document.querySelector("#sectionThree h3").textContent = randomNumbers[2]


function generatePawn () {
    const div = document.createElement('div');
    div.className = "pawn";
    div.draggable = true; 
    div.addEventListener("dragstart", ()=>{
        div.classList.add("dragging");
    });
    div.addEventListener("dragend", () =>{
        div.classList.remove("dragging");
    })
    document.querySelector("#pawnContainer").append(div);
}

const dropZones = document.querySelectorAll(".container");
dropZones.forEach(dropZone => {
    dropZone.addEventListener("dragover", (ev) => {
        ev.preventDefault();
        const draggable = document.querySelector(".dragging");
        dropZone.appendChild(draggable);
        check();
    })
})

for (let i = 0; i < 30; i++) {
    generatePawn();
}

function check () {
    let childCount = [];
    dropZones.forEach(dropZone => {
        childCount.push(dropZone.childElementCount)
    })
    console.log();
    if (JSON.stringify(childCount)=== JSON.stringify(randomNumbers)){
        document.querySelector("dialog").close()
    }
    
}

