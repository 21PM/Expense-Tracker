
var category = document.getElementById('category');
var total_salary = document.querySelector(".Total_salary");
var expense_pay =  document.querySelector(".You_Owe");
var inputTitle =  document.getElementById("name");
var inputAmount =  document.getElementById("amount");
var addBtn = document.getElementById("Add_Button");
var defaultSelected  =  document.getElementById("default");






const ctx = document.getElementById('myChart');

const chart = new Chart(ctx, 
  {
  type: 'bar',
  data: {
    labels: ['Total Salary', 'Expenses', 'Available Balance'],
    datasets: [{
      label: 'Expenses chart',
      backgroundColor : ["pink"],
      data: [],   
      backgroundColor: [
    'green',
    'red',
    'gold',
    
  ],
     


    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// chart.update();


console.log(chart.data.datasets[0].data[2]);



// console.log(total_salary.firstElementChild.innerText);

category.addEventListener('change',function(e){
    
    // console.log(e);
    var selectedValue = category.value;

    addBtn.removeEventListener('click', handleButtonClick); // Remove previous click event listener to avoid multiple bindings

    
    
    function handleButtonClick() {

        if(inputAmount.value == "" || inputTitle.value ==""){
            alert("Fill all the details");
        }


        if (selectedValue === "income") {


            if(inputAmount.value == "" || inputTitle.value ==""){
                alert("Fill all the details");
                
            }else  if(inputAmount.value != "" || inputTitle.value !=""){
    

            
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
            
            
        } 
        else if (selectedValue === "expenses") {


            if(inputAmount.value == "" || inputTitle.value ==""){
                alert("Fill all the details");
                
            }else if(inputAmount.value != "" || inputTitle.value !=""){

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

    }
    selectedValue = category.value;

        
    // Add click event listener to the button
    addBtn.addEventListener('click', handleButtonClick);

})


function AvailableBalanceCheck(e){

    var totalsal = parseInt(total_salary.innerText);
    var totalExpe =  parseInt(expense_pay.innerText);
    var Balance =  document.getElementById("You_get_back");

   
    chart.data.datasets[0].data[0] = totalsal;
    chart.data.datasets[0].data[1] = totalExpe;
    chart.data.datasets[0].data[2] = Balance;

      chart.update();

      

    if(totalsal >  totalExpe){
        
        var balanceCal = String(totalsal - totalExpe);

        // chart.data.datasets[0].data[0] = parseInt(balanceCal); 


        // chart.update();

        Balance.innerText = balanceCal;

        
    }else if(totalExpe > totalsal){

        var balanceCal = parseInt(totalsal - totalExpe);

        chart.data.datasets[0].data[1] = parseInt(balanceCal); 

        // chart.update();

        // console.log(balanceCal);

        Balance.innerText = (balanceCal);

    }else if(totalExpe === totalsal){


      // chart.data.datasets[0].data[0] = parseInt(balanceCal); 


        Balance.innerText =  00;
    }
}







