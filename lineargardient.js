let body1=document.querySelector('body');
let ColorCde2=document.getElementById('colorcode2');

let getColorlinearGradient = () => {
    // Hex Code
    const randomNumber2=Math.floor(Math.random()* 16777215);
    const randomNumber3=Math.floor(Math.random()* 16777215);
    
    const randomcode2="#"+randomNumber2.toString(16);
    const randomcode3="#"+randomNumber3.toString(16);
const linearColor=`linear-gradient(to right, ${randomcode2}, ${randomcode3})`;

    console.log(randomNumber2,randomNumber3,linearColor);
    body1.style.background=linearColor;
    ColorCde2.innerText=linearColor;

    navigator.clipboard.writeText(linearColor);
}

// Event Call
document.getElementById('btn2').addEventListener("click",getColorlinearGradient)

// Intail Call
getColorlinearGradient();