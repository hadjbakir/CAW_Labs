document.addEventListener("DOMContentLoaded", function () {
    var walls = document.querySelectorAll(".boundary");
    var hasWon = false;
    var maze = document.getElementById("maze");
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var status = document.getElementById("status"); 


    walls.forEach(function (wall) {
        wall.addEventListener("mouseover", function () {
            if (!hasWon) {
                walls.forEach(function (w) {
                    w.style.backgroundColor = "red";
                });
                hasWon = false;
                status.textContent  = "You lose!";
            }
        });
    });


    end.addEventListener("mouseover", function () {
        if (hasWon) return; 
        if (start.dataset.visited === "true"
        ) {

            hasWon = true;
            status.textContent  = "You win!";
        }
    });


    start.addEventListener("click", function () {

        walls.forEach(function (wall) {
            wall.style.backgroundColor = "#eeeeee";
        });
        start.dataset.visited = "false"; 
        status.textContent = "Move your mouse over the 'S' to begin.";
       

    });


    maze.addEventListener("mouseleave", function () {
        if (!hasWon && start.dataset.visited === "true") {
            start.dataset.visited = "false";
            walls.forEach(function (wall) {
            wall.style.backgroundColor = "red";
        });
        }
    });


    start.dataset.visited = "false";
    start.addEventListener("mouseover", function () {
        start.dataset.visited = "true";
    });
});
