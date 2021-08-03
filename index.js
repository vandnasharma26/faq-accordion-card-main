var clicked = "false";

function toggleAnswer() {
  i = this.getAttribute("id");
  console.log(i);
  if (clicked==="false") {
    document.querySelectorAll(".answer-tab")[i].style.display = "block";
    document.querySelectorAll(".question")[i].style.fontWeight = "700";
    document.querySelectorAll(".question")[i].style.color = "hsl(238, 29%, 16%)";
    document.querySelectorAll(".toggle-icon")[i].style.transform = "rotate(180deg)";
    clicked = "true";
  }
  else {
    document.querySelectorAll(".answer-tab")[i].style.display = "none";
    document.querySelectorAll(".question")[i].style.fontWeight = "400";
    document.querySelectorAll(".question")[i].style.color = "hsl(237, 12%, 33%)";
    document.querySelectorAll(".toggle-icon")[i].style.transform = "initial";
    clicked = "false";
  }
}

for (var a=0; a<5; a++) {
  document.querySelectorAll(".toggle-icon")[a].addEventListener("click",toggleAnswer);
}
