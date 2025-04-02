let body=document.querySelector('body');
let ColorCde=document.getElementById('colorcode');

let getColor = () => {
    // Hex Code
    const randomNumber=Math.floor(Math.random()* 16777215);
    
    const randomcode="#"+randomNumber.toString(16);
    console.log(randomNumber,randomcode);
    body.style.backgroundColor=randomcode;
    ColorCde.innerText=randomcode;

    navigator.clipboard.writeText(randomcode);
}

// Event Call
document.getElementById('btn').addEventListener("click",getColor)

// Intail Call
getColor();



