const body = document.querySelector("body");
const btns = document.querySelectorAll(".choices");

btns.forEach((val, idx) => {
  console.log(idx);
  console.log(val);
  let initialbgcolor = getComputedStyle(btns[idx]).background;
  val.addEventListener("click", () => {
    let currentbgcolor = getComputedStyle(btns[idx]).background;
    if (initialbgcolor === currentbgcolor) {
      console.log(idx);
      btns[idx].style.background =
        "linear-gradient(90deg, #57c785 0%, #b3cc6e 100%)";
      currentbgcolor = "linear-gradient(90deg, #57c785 0%, #b3cc6e 100%)";
      console.log(initialbgcolor);
      console.log(currentbgcolor);
    } else if (initialbgcolor !== currentbgcolor) {
      btns[idx].style.background = initialbgcolor;
    }
  });
});
