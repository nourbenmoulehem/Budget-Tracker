window.addEventListener("load", () => {
  // (A) GET NESTED ITEMS
  let all = document.querySelectorAll(".collapse ul");
 
  // (B) CREATE TOGGLE BUTTONS
  for (let i of all) {
    let tog = document.createElement("div");
    tog.innerHTML = i.previousSibling.textContent;
    tog.className = "toggle";
    tog.onclick = () => tog.classList.toggle("show");
    i.parentElement.removeChild(i.previousSibling);
    i.parentElement.insertBefore(tog, i);
  }
});