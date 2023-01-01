let numSquares = 6;
let colors = generateRandomColors(6);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){                
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.background = "steelblue";
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.background = "steelblue";
    for(let i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    
    //generate all new colors
   colors = generateRandomColors(numSquares);
    //pick a new random color from array
   pickedColor = pickColor();
    //change color display to match picked color
   colorDisplay.textContent = pickedColor;
     //change color of squares
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
   for(let i = 0; i < squares.length; i++){
       squares[i].style.background = colors[i];
   }
   h1.style.background = "steelblue";
})

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++){
    //add colors to squares
    squares[i].style.background = colors[i];

    //add event listeners
    squares[i].addEventListener("click", function(){
        let clickedColor = this.style.background;

        if( clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!"
            changeColor(clickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again?"
            console.log(clickedColor, pickedColor);
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again!"
            console.log(clickedColor, pickedColor);
        }
    })
}

function changeColor(color){
    for (let i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //create an array;
    let arr = [];
    //add num random colors to array
    for (let i = 0; i < num; i++){
        //ger random color and push into arr
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    //pick a red color from 0 - 255
    let r = Math.floor(Math.random() * 256);
    //pick a green color from 0 - 255
    let g = Math.floor(Math.random() * 256);
    //pick a blue color from 0 - 255
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")"
}