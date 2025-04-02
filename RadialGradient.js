let body2=document.querySelector('body');
let ColorCde3=document.getElementById('colorcode3');

let getColorRadialGradient = () => {
    // Hex Code
    const randomNumber3=Math.floor(Math.random()* 16777315);
    const randomNumber4=Math.floor(Math.random()* 16777315);
    
    const randomcode3="#"+randomNumber3.toString(16);
    const randomcode4="#"+randomNumber4.toString(16);
const radialColor=`radial-gradient(circle, ${randomcode3}, ${randomcode4})`;

    console.log(randomNumber3,randomNumber4,radialColor);
    body2.style.background=radialColor;
    ColorCde3.innerText=radialColor;

    navigator.clipboard.writeText(radialColor);
}

// Event Call
document.getElementById('btn3').addEventListener("click",getColorRadialGradient)

// Intail Call
getColorRadialGradient();