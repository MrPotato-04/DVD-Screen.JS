let framecount = 0
let lastRenderTime = 0
const FPS = 60;
const section = document.querySelector('#dvd-box')
const styleLink = `
<style>
    * {
        margin: 0;
        padding: 0;
    }

    body {
        overflow: hidden;
    }

    #dvd-box {
        background-color: rgb(0, 0, 0);
        height: 400px;
        width: 600px;
    }

    svg {
        position: absolute;
        width: 200px;
        fill: rgb(255, 255, 255);
    }
</style>`
;
const logoHTML = `
    <svg id="logo" class="logo" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.4 4.959C3.268 4.959 0 5.509 0 6.186C0 6.864 3.268 7.413 7.4 7.413C11.532 7.413 14.943 6.864 14.943 6.186C14.944 5.508 11.533 4.959 7.4 4.959ZM7.263 6.51C6.306 6.51 5.53 6.273 5.53 5.98C5.53 5.687 6.306 5.45 7.263 5.45C8.22 5.45 8.995 5.687 8.995 5.98C8.995 6.273 8.219 6.51 7.263 6.51ZM13.319 0.052002H9.701L7.769 2.291L6.849 0.0830021H1.145L0.933 1.045H3.202C3.202 1.045 4.239 0.909002 4.273 1.739C4.273 3.177 1.897 3.055 1.897 3.055L2.341 1.555H0.869L0.194 3.988H2.862C2.862 3.988 5.683 3.738 5.683 1.77C5.683 1.77 5.797 1.196 5.749 0.943002L7.124 4.62L10.559 1.055H13.165C13.165 1.055 13.963 1.123 13.963 1.74C13.963 3.178 11.604 3.028 11.604 3.028L11.969 1.556H10.682L9.946 3.989H12.399C12.399 3.989 15.465 3.799 15.465 1.71C15.465 1.709 15.404 0.052002 13.319 0.052002Z" />
    </svg>
`;
if (section) {
    document.querySelector('head').innerHTML += styleLink;
    section.innerHTML = logoHTML;
}





const logo = document.getElementById('logo');


let xPosition = 10;
let yPosition = 10;
let xSpeed = 4;
let ySpeed = 4;
function update() {
    logo.style.left = xPosition + "px";
    logo.style.top = yPosition + "px";
}

setInterval(() => {
    if (xPosition + logo.clientWidth >= section.clientWidth || xPosition <= 0) {
        xSpeed = -xSpeed;
        logo.style.fill = randomColor();
    }
    if (yPosition + logo.clientHeight >= section.clientHeight || yPosition <= 0) {
        ySpeed = -ySpeed;
        logo.style.fill = randomColor();
    }
    xPosition += xSpeed;
    yPosition += ySpeed;
    update();
}, 1000 / FPS);

function randomColor() {
    let color = "#";
    color += Math.random().toString(16).slice(2, 8).toUpperCase();

    return color;
}
window.addEventListener("resize", () => {
    xPosition = 10;
    yPosition = 10;
});
