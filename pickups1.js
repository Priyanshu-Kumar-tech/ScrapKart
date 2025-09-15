const body = document.querySelector("body");
const btns = document.querySelectorAll(".choices");

btns.forEach((val, idx) => {
  console.log(idx);
  console.log(val);

  let initialbgcolor = getComputedStyle(btns[idx]).background;
  let hoverbgcolor = "linear-gradient(90deg, #57c785 0%, #b3cc6e 100%)";
  
  val.addEventListener("mouseover", () => {
    if (btns[idx].clicked !== "true") {
      btns[idx].style.background = hoverbgcolor;
    }
  });
  val.addEventListener("mouseout", () => {
    if (btns[idx].clicked !== "true") {
      btns[idx].style.background = initialbgcolor;
    }
  });
  val.addEventListener("click", () => {
    if (!isClicked) {
      btns[idx].style.background = hoverbgcolor;
      isClicked = true
    } else if (isClicked) {
      btns[idx].style.background = initialbgcolor;
    }
    else{
      isClicked = false;
    }
  });
});


// myButton.addEventListener('click', () => {
//   if (!isClicked) {
//     // First click: apply clicked state
//     myButton.classList.add('clicked');
//     isClicked = true;
//   } else {
//     // Second click: revert to default
//     myButton.classList.remove('clicked');
//     isClicked = false;
//   }
// });