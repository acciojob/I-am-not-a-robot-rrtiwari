let allImages = [
  "https://picsum.photos/id/1015/150/150",
  "https://picsum.photos/id/1016/150/150",
  "https://picsum.photos/id/1018/150/150",
  "https://picsum.photos/id/1020/150/150",
  "https://picsum.photos/id/1024/150/150"
];

let imageContainer = document.getElementById("image-container");
let resetBtn = document.getElementById("reset");
let verifyBtn = document.getElementById("verify");
let message = document.getElementById("para");

let selected = [];

function start() {
  imageContainer.innerHTML = "";
  message.innerText = "";
  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";
  selected = [];

  let duplicate = allImages[Math.floor(Math.random() * allImages.length)];
  let sixImages = [...allImages, duplicate];
  sixImages.sort(() => Math.random() - 0.5);

  for (let i = 0; i < sixImages.length; i++) {
    let img = document.createElement("img");
    img.src = sixImages[i];
    img.dataset.value = sixImages[i];
    img.classList.add("img" + (i + 1));   // ✅ add class for Cypress
    imageContainer.appendChild(img);
  }

  let images = document.querySelectorAll("#image-container img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      if (selected.length < 2 && !selected.includes(img)) {
        img.style.border = "3px solid blue";
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
  if (selected[0].dataset.value === selected[1].dataset.value) {
    message.innerText = "You are a human. Congratulations!";
  } else {
    message.innerText = "We can't verify you as a human. You selected the non-identical tiles.";
  }
};

start();
let allImages = [
  "https://picsum.photos/id/1015/150/150",
  "https://picsum.photos/id/1016/150/150",
  "https://picsum.photos/id/1018/150/150",
  "https://picsum.photos/id/1020/150/150",
  "https://picsum.photos/id/1024/150/150"
];

let imageContainer = document.getElementById("image-container");
let resetBtn = document.getElementById("reset");
let verifyBtn = document.getElementById("verify");
let message = document.getElementById("para");

let selected = [];

function start() {
  imageContainer.innerHTML = "";
  message.innerText = "";
  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";
  selected = [];

  let duplicate = allImages[Math.floor(Math.random() * allImages.length)];
  let sixImages = [...allImages, duplicate];
  sixImages.sort(() => Math.random() - 0.5);

  for (let i = 0; i < sixImages.length; i++) {
    let img = document.createElement("img");
    img.src = sixImages[i];
    img.dataset.value = sixImages[i];
    img.classList.add("img" + (i + 1));  
    imageContainer.appendChild(img);
  }

  let images = document.querySelectorAll("#image-container img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      if (selected.length < 2 && !selected.includes(img)) {
        img.style.border = "3px solid blue";
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
  if (selected[0].dataset.value === selected[1].dataset.value) {
    message.innerText = "You are a human. Congratulations!";
  } else {
    message.innerText = "We can't verify you as a human. You selected the non-identical tiles.";
  }
};

start();
