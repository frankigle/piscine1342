const button = document.getElementById("button");
const body = document.querySelector("body");
const colorNumber = document.querySelector(".color-number");
const colorCard = document.querySelector(".color-card");
console.log(button, body);
const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    console.log(r);
    const rgbColor = `rgb(${r},${g},${b})`;
   return rgbColor;
};

const setBackgrount = () => {
  const newColor = generateRandomColor();
  console.log(newColor);
  //colorNumber.innerHTML = newColor;
  body.style.backgroundColor = newColor;
  colorCard.style.backgroundColor = newColor;
};

button.addEventListener("click", setBackgrount);