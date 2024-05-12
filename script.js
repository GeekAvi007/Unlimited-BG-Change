// generate a random colour

const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intid;
const startChange = () => {
    if(!intid){
        intid = setInterval(changeBg,1000)
    }

  function changeBg() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChange = () => {
    clearInterval(intid)
    // intid = null
};

document.querySelector("#start").addEventListener('click',startChange);
document.querySelector("#stop").addEventListener('click', stopChange);
