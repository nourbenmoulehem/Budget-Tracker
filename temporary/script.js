const sublistContent = document.querySelector(".sublistContent")
let detail = document.createElement("div");
  detail.classList.add("detail")
  sublistContent.appendChild(detail)

  let cont = document.createElement("div")
  cont.classList.add("cont")
  detail.appendChild(cont)

  let circularProgress = document.createElement("div")
  circularProgress.classList.add("circularProgress")
  cont.appendChild(circularProgress)

  let progressValue = document.createElement("span")
  progressValue.classList.add("progressValue")
  progressValue.innerHTML = "0%";
  progressValue.innerHTML = "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii";
  circularProgress.appendChild(progressValue)
  
  const progret = document.querySelector('.progress')
  let progressStartValue = 0,    
    progressEndValue = Math.round((parseInt(progret.textContent)/300)*100);
    speed = 100;

  console.log(progressEndValue)
    
let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);