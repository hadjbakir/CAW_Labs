


document.addEventListener("DOMContentLoaded", function () {

    var walls = document.querySelectorAll(".boundary");


    walls.forEach(function (wall) {
        wall.addEventListener("mouseover", function () {

            walls.forEach(function (w) {
                w.style.backgroundColor = "red";
            });
        });
    });
});




document.addEventListener("DOMContentLoaded", function () {

    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var boundaries = document.querySelectorAll(".boundary"); 
    
    var hasWon = false;


    end.addEventListener("mouseover", function () {

        if (!hasWon) {

            alert("You win!");
            hasWon = true; 
            
        }
    });


    document.getElementById("maze").addEventListener("mouseout", function () {
        if (hasWon) {

            hasWon = false;


            boundaries.forEach(function (boundary) {
                boundary.style.backgroundColor = "#eeeeee";
            });
        }
    });

    
});

