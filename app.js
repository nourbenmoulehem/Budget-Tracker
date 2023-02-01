const newEvent = document.querySelector(".newEvent");
const newCategory = document.querySelector(".newCategory");
const btnCategoryAdd = document.querySelector(".categoryAdd");
const projectContainer = document.querySelector(".project-container");
const categoryName = document.querySelector(".category-description-name");
const categoryText = document.querySelector(".category-description-text");
const categoryImage = document.querySelector(".category-description-image");
const frequentExpenses = document.querySelector(".frequent")
console.log(frequentExpenses)



let randomImages = ['car.png', 'controller.svg', 'heart.svg', 'key.png', 'travel.png'];

newEvent.addEventListener('mouseover', () =>{
  newEvent.style.backgroundColor = '#98AFC7';
  newEvent.style.border = "1px solid black";
  newEvent.style.borderRadius = "30px"
  // newEvent.style.cssText = 'border-radius: 30px;';
  newCategory.classList.remove("hide")

})

newEvent.addEventListener('mouseout', () =>{
  newEvent.style.cssText = 'background: #d2deeb;';
  newCategory.classList.add("hide") 
})

// let image = new Image();
// categoryImage.addEventListener("change", function () {
//   const file = categoryImage.files[0];
//   image.src = URL.createObjectURL(file);
//   console.log(image)
//   console.log('hmmmmmmmmmmm')

// })



btnCategoryAdd.addEventListener('click', () =>{
  const project = document.createElement('div')
  project.classList.add('project')

  const intro = document.createElement('div')
  intro.classList.add('intro')

  let image = new Image();
  image.classList.add('project-img')
  image.src = `/randomImg/${randomImages[Math.floor(Math.random() * (randomImages.length))]}`;

  console.log(randomImages[Math.floor(Math.random() * (randomImages.length))])
  
  

  let deleteButton = document.createElement("div");
  deleteButton.classList.add("fa-solid", "fa-trash-can", "delete");
  deleteButton.addEventListener("click", () =>{
    project.remove()
  })
  deleteButton.classList.add('icon')
  
  const buttons = document.createElement("div")
  buttons.classList.add('buttons')
  buttons.appendChild(deleteButton)


  const h1 = document.createElement('h1')
  h1.classList.add('h1')
  h1.innerText = `${categoryName.value}` //input name . value
  

  const p = document.createElement('p')
  p.innerHTML = `${categoryText.value}` //input description . value
  p.classList.add('p')

  project.appendChild(image)
  intro.appendChild(h1)
  intro.appendChild(p)
  intro.appendChild(buttons)

  console.log(project)
  console.log(intro)

  project.appendChild(intro)


  projectContainer.appendChild(project)

  image.addEventListener("click", function() {
  window.location.assign("cataegoryGroup/event.html");
});
   
})

frequentExpenses.addEventListener("click", function() {
  window.location.assign("cataegoryGroup/eventFrequent.html");
});

