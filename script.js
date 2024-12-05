function getRandomNumber() {
    return Math.floor(Math.random() * 9) + 1;
}

let randomNumbers = [];
for (let i = 0; i < 3; i++) {
    randomNumbers.push(getRandomNumber());
}


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
    document.querySelector("body").append(div);
}

const dropZones = document.querySelectorAll(".container");
dropZones.forEach(dropZone => {
    dropZone.addEventListener("dragover", (ev) => {
        ev.preventDefault();
        const draggable = document.querySelector(".dragging");
        dropZone.appendChild(draggable);
    })
})

for (let i = 0; i < 30; i++) {
    generatePawn();
}

