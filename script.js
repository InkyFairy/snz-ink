// SNZ.INK
//
// Take your time.
// Nothing here is in a hurry.
/* Grow the first strange flowers */

const flowerField = document.getElementById("flower-container");

if (flowerField) {

    for (let i = 0; i < 4; i++) {

        const flower = document.createElement("div");

        flower.className = "alien-flower";

        flowerField.appendChild(flower);

    }

}
