win = false;
miss = 12;

for (let i = 0; i < 49; i++) {
    var gamepad = document.createElement("div");
    gamepad.setAttribute("data-value", i);
    gamepad.classList.add("box")
    gameboard.appendChild(gamepad);
    
    gamepad.addEventListener("click", function () {
        attack(this);
    });
}
// Sets the ship position to random
let computer = Math.floor(Math.random() * 49);


function attack (hit) {
    
    var target = hit.getAttribute("data-value");
    announcements = document.getElementById("announcements");
    
    if (!win) {
        if (target == computer) {
            win = true;
            hit.style.background = "green";
            announcements.innerText = "You have won the game!";
        } else {
            miss--;
            hit.style.background = "red";
            announcements.innerText = `You have ${miss} tries left.`
        }
    }
    if (miss < 1) {
        win = true;
        let pad = document.querySelectorAll(".box");
        pad[computer].style.backgroundColor = "orange";
        announcements.innerText = `The battleship was at ${computer} position`
    }
    return false;
}

// Reset button
function reset () {
    window.location.reload();
}
