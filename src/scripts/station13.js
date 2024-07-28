const check = document.getElementById("check");
check.addEventListener("change", changeBackgroundColor);

function changeBackgroundColor(e) {
  const text = document.getElementById("text");
  if (e.target.checked) {
    text.style.backgroundColor = "red";
  } else {
    text.style.backgroundColor = "";
  }
}
