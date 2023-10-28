


document.addEventListener("DOMContentLoaded", function () {

    var walls = document.querySelectorAll(".boundary");


    walls.forEach(function (wall) {
        wall.addEventListener("mouseover", function () {

            wall.style.backgroundColor = "red";
        });
    });
});
