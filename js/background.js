const body = document.querySelector("body")
const login = document.querySelector("#login-form");

function mainBg () {
  if (localStorage.getItem("username") !== null) {
    const Images = ["no.jpg", "stay.jpg", "stay1.png"];
    const number = Math.floor(Math.random()*Images.length);
    const chosenImage = Images[number];
  
    const imageLink = `../img/${chosenImage}`;
    body.style.backgroundImage = `url(${imageLink})`;
    body.className = chosenImage.slice(0,chosenImage.search(/\./))
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center";
  }
}

mainBg();
login.addEventListener("submit", mainBg)