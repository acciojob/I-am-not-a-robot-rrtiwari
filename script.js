let imageContainer = document.getElementById("image-container");
let resetBtn = document.getElementById("reset");
let verifyBtn = document.getElementById("verify");
let message = document.getElementById("para");

let classes = ["img1", "img2", "img3", "img4", "img5"];
let selected = [];

function start() {
  imageContainer.innerHTML = "";
  message.innerText = "";
  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";
  selected = [];

  let duplicate = classes[Math.floor(Math.random() * classes.length)];
  let sixClasses = [...classes, duplicate];
  sixClasses.sort(() => Math.random() - 0.5);

  for (let i = 0; i < sixClasses.length; i++) {
    let img = document.createElement("img");
    img.classList.add(sixClasses[i]);
    imageContainer.appendChild(img);
  }

  let images = document.querySelectorAll("#image-container img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      if (selected.length < 2 && !selected.includes(img)) {
        img.classList.add("selected");
        selected.push(img);
        resetBtn.style.display = "inline-block";
      }
      if (selected.length === 2) {
        verifyBtn.style.display = "inline-block";
      }
    });
  });
}

resetBtn.onclick = function () {
  start();
};

verifyBtn.onclick = function () {
  verifyBtn.style.display = "none";
  if (selected[0].className === selected[1].className) {
    message.innerText = "You are a human. Congratulations!";
  } else {
    message.innerText = "We can't verify you as a human. You selected the non-identical tiles.";
  }
};

start();

