
var category = document.getElementById('category');
var total_salary = document.querySelector(".Total_salary");
var expense_pay =  document.querySelector(".You_Owe");
var inputTitle =  document.getElementById("name");
var inputAmount =  document.getElementById("amount");
var addBtn = document.getElementById("Add_Button");
var defaultSelected  =  document.getElementById("default");



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
            
            
            AddTransactionHistory();
            
            selectedValue = "";
            inputAmount.value = "";  inputTitle.value = "";
            category.selectedIndex = 0;


            AvailableBalanceCheck(); //Subtract the salary from expenses and show the available balance
            

        } 
        else if (selectedValue === "expenses") {

            var totalExp =  parseInt(expense_pay.innerText);
            totalExp += parseInt(inputAmount.value);  
            expense_pay.firstElementChild.innerText = String(totalExp);  
            
            AddTransactionHistory();
        
            
            selectedValue = ""; 
            inputAmount.value = ""; inputTitle.value = "";
            category.selectedIndex = 0;

            AvailableBalanceCheck(); // Subtract the salary from expenses and show the available balance
            // AddTransactionHistory();

        }

    }
    selectedValue = category.value;

        
    // Add click event listener to the button
    addBtn.addEventListener('click', handleButtonClick);
    
  

})

function AvailableBalanceCheck(selectedValue){

    var totalsal = parseInt(total_salary.innerText);
    var totalExpe =  parseInt(expense_pay.innerText);
    var Balance =  document.getElementById("You_get_back");
    // console.log(Balance);


    console.log(selectedValue);
  

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






function AddTransactionHistory() {

    var activitesDiv =  document.getElementById("activites_div");
   
    // Create a new div element to hold the transaction history
    var transactionDiv = document.createElement("div");
    transactionDiv.className = "Transaction_history";

    // Set the inner HTML of the new div to include the input title and amount
    transactionDiv.innerHTML = `
        <h3>${inputTitle.value}</h3>
        <span>${inputAmount.value}</span>
    `;
    // Append the new div to the activitiesDiv
    activitesDiv.appendChild(transactionDiv);
}



// AddTransactionHistory();






   // var titlele  = document.createElement('h3');
    // var amountSapan =  document.createElement("span");

    // titlele.innerText = inputTitle.value;
    // amountSapan.innerText = inputAmount.value;

    // console.log(inputTitle.value);
    // console.log(inputAmount.value);

    
    // translem.appendChild(titlele);
    // translem.appendChild(amountSapan);









// AvailableBalanceCheck();

    

    // function AddIncome(){
    //     addBtn.addEventListener('click',function(){
    //         total_salary.firstElementChild.innerText += inputAmount.value;
    //         inputAmount.value = "";
    //         inputTitle.value = "";
    //     })  
        
    // }

    // function AddExpenses(){
    //     addBtn.addEventListener('click',function(){
    //         expense_pay.firstElementChild.innerText += inputAmount.value;
    //         inputAmount.value = "";
    //         inputTitle.value = "";
    //     })  
        
    // }
