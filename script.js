let input = document.getElementById("input");
let radius = document.getElementById("radius");
let image = document.getElementById("img");

function colorChange(event) {
  if (event.key === "Enter") {
    document.body.style.backgroundColor = input.value;
  } else {
    document.body.style.backgroundColor = "white";
  }
}

function radiusChange(event) {
  if (event.key === "Enter") {
    image.style.borderRadius = `${radius.value}px`;
  }
}
let password = document.querySelector('input[type="password"]');
let icon = document.getElementById("icon");

icon.onclick = function () {
  if (password.type === "password") {
    password.type = "text";
    icon.className = "fa-solid fa-eye";
  } else {
    password.type = "password";
    icon.className = "fa-solid fa-eye-slash";
  }
};

radius.addEventListener("keyup", radiusChange);
input.addEventListener("keyup", colorChange);
