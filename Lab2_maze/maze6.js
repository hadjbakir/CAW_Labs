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
        
        

        hasWon = true;
        status.textContent  = "You win!";
        
    });


    start.addEventListener("click", function () {

        walls.forEach(function (wall) {
            wall.style.backgroundColor = "#eeeeee";
        });
        
        status.textContent = "Move your mouse over the 'S' to begin.";
    });

   
});
