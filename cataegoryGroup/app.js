let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");
const checkAmountButton = document.getElementById("check-amount");
const totalAmountButton = document.getElementById("total-amount-button");
const productTitle = document.getElementById("product-title");
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const productCostError = document.getElementById("product-cost-error");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
const list = document.getElementById("list");
let tempAmount = 0;
//Set Budget Part
totalAmountButton.addEventListener("click", () => {
  tempAmount = totalAmount.value;
  //empty or negative input
  if (tempAmount === "" || tempAmount < 0) {
    errorMessage.classList.remove("hide");
  } else {
    errorMessage.classList.add("hide");
    //Set Budget
    amount.innerHTML = tempAmount;
    //Set Balance
    balanceValue.innerText = tempAmount - expenditureValue.innerText;
    //Clear Input Box
    totalAmount.value = "";
  }
});
//Function To Disable Edit and Delete Button
const disableButtons = (bool) => {
  let editButtons = document.getElementsByClassName("edit");
  Array.from(editButtons).forEach((element) => {
    element.disabled = bool;
  });
};
//Function To Modify List Elements
const modifyElement = (element, edit = false) => {
  let parentDiv = element.parentElement;
  let currentBalance = balanceValue.innerText;
  let currentExpense = expenditureValue.innerText;
  let parentAmount = parentDiv.querySelector(".amount").innerText;
  if (edit) {
    let parentText = parentDiv.querySelector(".product").innerText;
    productTitle.value = parentText;
    userAmount.value = parentAmount;
    disableButtons(true);
  }
  balanceValue.innerText = parseInt(currentBalance) + parseInt(parentAmount);
  expenditureValue.innerText =
    parseInt(currentExpense) - parseInt(parentAmount);
  parentDiv.remove();
};
//Function To Create List
const listCreator = (expenseName, expenseValue) => {
  let sublistContent = document.createElement("div");
  sublistContent.classList.add("sublist-content", "flex-space");
  list.appendChild(sublistContent);
  sublistContent.innerHTML = `<p class="product">${expenseName}</p><p class="amount">${expenseValue}</p>`;

  let editButton = document.createElement("button");
  editButton.classList.add("fa-solid", "fa-pen-to-square", "edit");
  editButton.style.fontSize = "1.2em";
  editButton.addEventListener("click", () => {
    modifyElement(editButton, true);
  });
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("fa-solid", "fa-trash-can", "delete");
  deleteButton.style.fontSize = "1.2em";
  deleteButton.addEventListener("click", () => {
    modifyElement(deleteButton);
  });
  sublistContent.appendChild(editButton);
  sublistContent.appendChild(deleteButton);
  document.getElementById("list").appendChild(sublistContent);

  //When sublist clicked
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
  circularProgress.appendChild(progressValue)

  //adding money progressively
  let info = document.createElement('p');
  info.classList.add("info")
  info.innerHTML= 'Assigned This Month: '
  cont.appendChild(info)

  let progressTarget = document.createElement("input")
  progressTarget.classList.add("progressTarget")
  progressTarget.setAttribute("type", "number");
  cont.appendChild(progressTarget)

  let monthlyAmount = document.createElement('button')
  monthlyAmount.setAttribute('content', 'Monthly Amount');
  monthlyAmount.textContent = 'Monthly Amount'
  monthlyAmount.classList.add("monthlyAmount")
  monthlyAmount.classList.add('submit')
  cont.appendChild(monthlyAmount)

  let progressDisplay = document.createElement("div")
  progressDisplay.classList.add("progressDisplay")
  // let warning = document.createElement("p")
  // warning.classList.add("warning")
  // warning.classList.add("hide")
  // warning.classList.add("error")

  cont.appendChild(progressDisplay)
  detail.classList.add("hide")

  monthlyAmount.addEventListener("click", () => {
    tempAmount = progressTarget.value;
    //empty or negative input
    if (tempAmount === "" || tempAmount < 0) {
      progressDisplay.innerHTML = "ERROR"
    } else {
      //Set Budget
      progressDisplay.innerHTML = tempAmount;
    //  const progret = document.querySelector('.progress')
    let progressStartValue = 0,    
     progressEndValue = Math.round((parseInt(progressDisplay.textContent)/expenseValue)*100),
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

  
}});
  
sublistContent.addEventListener('mouseover', function() {
  console.log('Mouse over!');
  detail.classList.remove("hide")
});
sublistContent.addEventListener('mouseout', function() {
  console.log('Mouse OUT!');
  detail.classList.add("hide")
});
  
 };




//Function To Add Expenses
checkAmountButton.addEventListener("click", () => {
  //empty checks
  if (!userAmount.value || !productTitle.value) {
    productTitleError.classList.remove("hide");
    return false;
  }
  //Enable buttons
  disableButtons(false);
  //Expense
  let expenditure = parseInt(userAmount.value);
  //Total expense (existing + new)
  let sum = parseInt(expenditureValue.innerText) + expenditure;
  expenditureValue.innerText = sum;
  //Total balance(budget - total expense)
  const totalBalance = tempAmount - sum;
  balanceValue.innerText = totalBalance;
  //Create list
  listCreator(productTitle.value, userAmount.value);
  //Empty inputs
  productTitle.value = "";
  userAmount.value = "";
});

//When a sublist clicked
