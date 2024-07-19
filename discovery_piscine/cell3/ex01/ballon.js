const ballon = document.getElementById("balloon");
const maxSize = 420;
let widthSize = 200;
let heightSize = 200;
const color = ['red','green','blue'];
let index = 1;


ballon.addEventListener("click", changeColor);
ballon.addEventListener('mouseleave', reduceSize);

function changeColor () {
   
   widthSize += 10;
   heightSize += 10;
   ballon.style.backgroundColor = color[index];
   ballon.style.width =  widthSize + `px`; 
   ballon.style.height = heightSize + `px`;
   index++;
   if(index == 3)
    {
        index = 0;
    }
    if(widthSize == 420 && heightSize == 420){
        widthSize = 200;
        heightSize = 200;
    }
}

function reduceSize (){
    widthSize -= 5;
    heightSize -= 5;
    index--;
    if(widthSize > 200)
    {
        ballon.style.backgroundColor = color[index];
        ballon.style.width = widthSize + `px`;
        ballon.style.height = heightSize + `px`;
        
    }

    
}

