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