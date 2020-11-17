const images = ["images/img1.png", "images/img2.png", "images/img3.png"];
const rowLeft = document.getElementById("rowleft");
const rowRight = document.getElementById("rowright");
const image = document.getElementById("img");
let index = 0;


function left() {
    index--;
    if(index < 0) {
        index = images.length -1;
    }
    image.src = images[index];
}
function right() {
    index++;
    if(index > images.length -1) {
        index = 0;
    }
    image.src = images[index];
}

rowLeft.addEventListener("click", left);
rowRight.addEventListener("click", right);