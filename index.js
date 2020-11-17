const images = ["https://assets.stickpng.com/thumbs/5a0c693082e02d31ecb8d004.png", "https://assets.stickpng.com/thumbs/5a0c696b82e02d31ecb8d00a.png", "https://assets.stickpng.com/thumbs/5a0c691a82e02d31ecb8d002.png"];
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