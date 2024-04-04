
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
    // chart.data.datasets[0].data[2] = Balance;

    //   chart.update();

      

    if(totalsal >  totalExpe){
        
        var balanceCal = String(totalsal - totalExpe);

        // chart.data.datasets[0].data[0] = parseInt(balanceCal); 
        chart.data.datasets[0].data[2] = parseInt(balanceCal);

        chart.update();

        // chart.update();

        Balance.innerText = balanceCal;

        
    }else if(totalExpe > totalsal){

        var balanceCal = parseInt(totalsal - totalExpe);

        chart.data.datasets[0].data[2] = parseInt(balanceCal);

        chart.update();
        // chart.update();

        // console.log(balanceCal);

        Balance.innerText = (balanceCal);

    }else if(totalExpe === totalsal){

      chart.data.datasets[0].data[2] = parseInt(balanceCal);

        chart.update();

      // chart.data.datasets[0].data[0] = parseInt(balanceCal); 


        Balance.innerText =  00;
    }
}





// ********************************** Chart Bot Javascript Started ONLY Display and Hide funcationality******************************//
var bot_icon = document.getElementById("Bot-image");
var chat_box =  document.getElementById("Chat-UI-DIV");
var gemini_close_btn = document.querySelector(".material-symbols-outlined");
var Ai_article =  document.getElementById("Ai-article");


bot_icon.addEventListener('click',displayChatbox)

function displayChatbox(){

    chat_box.style.display= "block";
    bot_icon.style.display ="none";
    Ai_article.style.display = "none";

}


gemini_close_btn.addEventListener('click',hideChatbox)

function hideChatbox(){

    bot_icon.style.display ="block";
    chat_box.style.display= "none";
    Ai_article.style.display = "block";
    

}

// ********************************** Chart Bot Javascript ended ONLY Display and Hide funcationality ******************************//


// ************************************ Table creation tax calculator  start from here ******************************

var PayableTax = 0;

function calculateTax() {
  var income = document.getElementById('income').value;
  income = parseFloat(income);

  if (isNaN(income)) {
    alert("Please enter a valid number for your income.");
    return;
  }

  var taxNewRegime = 0;

  if (income <= 250000) {
    taxNewRegime = 0;
  } else if (income <= 500000) {
    taxNewRegime = income * 0.05;
  } else if (income <= 750000) {
    taxNewRegime = (income - 500000) * 0.1 + 25000;
  } else if (income <= 1000000) {
    taxNewRegime = (income - 750000) * 0.15 + 75000;
  } else if (income <= 1250000) {
    taxNewRegime = (income - 1000000) * 0.2 + 125000;
  } else if (income <= 1500000) {
    taxNewRegime = (income - 1250000) * 0.25 + 175000;
  } else {
    taxNewRegime = (income - 1500000) * 0.3 + 225000;
  }

  // Display the calculated tax for the New Regime only
  document.getElementById('tax-output').textContent = 
    "Tax under New Regime: ₹" + taxNewRegime.toFixed(2);

     PayableTax =  parseInt(taxNewRegime*100);

     console.log(PayableTax);

     console.log(typeof PayableTax);
}




// ************************************************ Table creation tax end here ******************************************


//******************************************* Adding Event Listener to calulate and PayTax button  started here ***********************/
var cal_pay_btn = document.getElementById("cal-pay-btn");
var tax_outer_contianer = document.getElementById('tax_out_contianer');

cal_pay_btn.addEventListener('click', pay_calulated_tax);

function pay_calulated_tax(){

  tax_outer_contianer.style.display = "block";
}

var TaxCloseBtn = document.getElementById("tax_close_btn");

TaxCloseBtn.addEventListener("click",CloseCalPayTax)


function CloseCalPayTax(){

  tax_outer_contianer.style.display = "none";
}

/// *************************************payment integration started from here ***********************************


var options = {
  "key": "rzp_test_YNXeqP1kSxE19T", // Enter the Key ID generated from the Dashboard
  "amount": PayableTax, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  "currency": "INR",
  "name": "Acme Corp", //your business name
  "description": "Test Transaction",
  "image": "https://example.com/your_logo",
  // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
  "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
      "name": "Gaurav Kumar", //your customer's name
      "email": "gaurav.kumar@example.com",
      "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
  },
  "notes": {
      "address": "Razorpay Corporate Office"
  },
  "theme": {
      "color": "#3399cc"
  }
};
var rzp1 = new Razorpay(options);
document.getElementById('rzp-button1').onclick = function(e){
  rzp1.open();
  e.preventDefault();
}




/// *************************************payment integration end here ***********************************