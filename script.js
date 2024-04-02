
var category = document.getElementById('category');
var total_salary = document.querySelector(".Total_salary");
var expense_pay =  document.querySelector(".You_Owe");
var inputTitle =  document.getElementById("name");
var inputAmount =  document.getElementById("amount");
var addBtn = document.getElementById("Add_Button");
var defaultSelected  =  document.getElementById("default");

// var activitesDiv =  document.getElementById("activites_div");


// function DeleteHistory(event){
//     if (event.target.classList.contains("material-symbols-outlined") && event.target.id === "deleteBtn") {
//         const deleteBtn = event.target;
//         const transactionDiv = deleteBtn.parentElement; // Get the parent transaction div
//         transactionDiv.style.display = "none"; // Hide the transaction div
//       }
// }


// console.log(total_salary.firstElementChild.innerText);

category.addEventListener('change',function(e){
    
    // console.log(e);
    var selectedValue = category.value;

    // console.log(selectedValue);

    addBtn.removeEventListener('click', handleButtonClick); // Remove previous click event listener to avoid multiple bindings

    

    function handleButtonClick() {
        if (selectedValue === "income") {
            // console.log("Income selected");

            var totalNum =  parseInt(total_salary.innerText);
            totalNum += parseInt(inputAmount.value);  
            total_salary.firstElementChild.innerText = String(totalNum);            

            // ****************** Adding Transaction History **********************

            
            var activitesDiv =  document.getElementById("activites_div");

            // Create a new div element to hold the transaction history
            var transactionDiv = document.createElement("div");
            transactionDiv.className = "Transaction_history";
            // Set the inner HTML of the new div to include the input title and amount
            transactionDiv.innerHTML = `
                <h3>${inputTitle.value}</h3>
                <p class = "green">${inputAmount.value}</p>
                <span class="material-symbols-outlined" id="deleteBtn">delete </span>

            `;
            
        
            // Append the new div to the activitiesDiv
            activitesDiv.appendChild(transactionDiv);  
            
            //******************* */ Ending Transaction History********************
            

        
            
            selectedValue = "";
            inputAmount.value = "";  inputTitle.value = "";
            category.selectedIndex = 0;


            AvailableBalanceCheck(); //Subtract the salary from expenses and show the available balance
            
            
        } 
        else if (selectedValue === "expenses") {

            var totalExp =  parseInt(expense_pay.innerText);
            totalExp += parseInt(inputAmount.value);  
            expense_pay.firstElementChild.innerText = String(totalExp);  
            
           
           // ****************** Adding Transaction History **********************

           var activitesDiv =  document.getElementById("activites_div");
   
           // Create a new div element to hold the transaction history
           var transactionDiv = document.createElement("div");
           transactionDiv.className = "Transaction_history";
           // Set the inner HTML of the new div to include the input title and amount
           transactionDiv.innerHTML = `
               <h3>${inputTitle.value}</h3>
               <p class = "red">${inputAmount.value}</p>
               <span class="material-symbols-outlined" id="deleteBtn">delete </span>
           `;
           // Append the new div to the activitiesDiv
           activitesDiv.appendChild(transactionDiv);
           
           //******************* */ Ending Transaction History********************  

            
            selectedValue = ""; 
            inputAmount.value = ""; inputTitle.value = "";
            category.selectedIndex = 0;

            AvailableBalanceCheck(); // Subtract the salary from expenses and show the available balance


        }

    }
    selectedValue = category.value;

        
    // Add click event listener to the button
    addBtn.addEventListener('click', handleButtonClick);

    
    
  

})



// var activites_div =  document.querySelectorAll(".Transaction_history");

// activites_div.forEach((item) => {
//     var deleteBtn = document.querySelector("#deleteBtn");
//     // console.log(deleteBtn.parentElement);


//     deleteBtn.addEventListener('click',DeleteHistory)

//     function  DeleteHistory(){
        
//         console.log("delted function called");
//         deleteBtn.parentElement.style.display = "none";
        


//     }

// });





function AvailableBalanceCheck(e){

    var totalsal = parseInt(total_salary.innerText);
    var totalExpe =  parseInt(expense_pay.innerText);
    var Balance =  document.getElementById("You_get_back");
      

    if(totalsal >  totalExpe){
        
        var balanceCal = String(totalsal - totalExpe);

        Balance.innerText = balanceCal;

        
    }else if(totalExpe > totalsal){

        var balanceCal = parseInt(totalsal - totalExpe);

        // console.log(balanceCal);

        Balance.innerText = (balanceCal);

    }else if(totalExpe === totalsal){

        Balance.innerText =  00;
    }
}



