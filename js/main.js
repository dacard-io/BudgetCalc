// Main.js consists of the main calculating functions

/* Initialize the ID's to variables to make coding easier
var income_Salary = document.getElementById("income-salary");
var income_Amount = document.getElementById("income-amount");
var expense_Amount = document.getElementById("expense-amount");
var savings_general_Amount = document.getElementById("savings-amount");
var savings_emergency_Amount = document.getElementById("emergency-savings-amount");
var budget_Income = document.getElementById("budget-income");
var budget_Savings = document.getElementById("budget-savings");
var budget_EmergencyFunds = document.getElementById("budget-emergency-funds");
var budget_Expenses = document.getElementById("budget-expenses");
var budget_Salary = document.getElementById("budget-salary");
var budget_Total = document.getElementById("budget-total");
WHY DO I KEEP GETTING NULL VALUE ERRORS WHY WHY!?!?!!??!?!!?
NOW I HAVE TO TYPE OUT ENTIRE ELEMENT RETRIEVALS! */

var expense_rows = 11;

// Initialize totals
var income_sum = 0;
var generalsavings_sum = 0;
var emergencyfunds_sum = 0;
var savings_sum = 0;
var expense_sum = 0;
var budget_sum = 0;

/*LOAD GRAPH*****************************************************************************/
var ctx = document.getElementById("chart-area").getContext("2d");
var doughnutData = [
        {
            value: document.getElementById('housing-expense-amount').value,
            color:"#990000",
            highlight: "#ff3333",
            label: "Housing"
        },
        {
            value: document.getElementById('household-expense-amount').value,
            color:"#ff9933",
            highlight: "#ffb366",
            label: "Household"
        },
        {
            value: document.getElementById('cellphone-expense-amount').value,
            color:"#ffff66",
            highlight: "#ffff99",
            label: "Cellphone"
        },
        {
            value: document.getElementById('food-expense-amount').value,
            color:"#bfff00",
            highlight: "#ccff33",
            label: "Food"
        },
        {
            value: document.getElementById('entertainment-expense-amount').value,
            color:"#40ff00",
            highlight: "#66ff33",
            label: "Entertainment"
        },
        {
            value: document.getElementById('health-expense-amount').value,
            color:"#ff0040",
            highlight: "#ff3366",
            label: "Health"
        },
        {
            value: document.getElementById('carinsurance-expense-amount').value,
            color:"#00ff40",
            highlight: "#33ff66",
            label: "Car Insurance"
        },
        {
            value: document.getElementById('carpayments-expense-amount').value,
            color:"#00ff80",
            highlight: "#33ff99",
            label: "Car Payments"
        },
        {
            value: document.getElementById('gas-expense-amount').value,
            color:"#00ffbf",
            highlight: "#33ffcc",
            label: "Gas"
        },
        {
            value: document.getElementById('personal-expense-amount').value,
            color:"#ffebb3",
            highlight: "#fff2cc",
            label: "Personal"
        },
        {
            value: document.getElementById('clothing-expense-amount').value,
            color:"#ff8c66",
            highlight: "#ffb299",
            label: "Shopping"
        },
        {
            value: document.getElementById('savings-amount').value,
            color: "#99ccff",
            highlight: "#cce5ff",
            label: "General Savings"
        },
        {
            value: document.getElementById('emergency-savings-amount').value,
            color: "#0064cc",
            highlight: "#007dff",
            label: "Emergency Fund"
        }
    ];
    
    window.myDoughnut = new Chart(ctx).Pie(doughnutData, {
        responsive : true,
        animationEasing: "easeOutQuart",
        tooltipTemplate: "<%=label%>",
        segmentShowStroke : false,
    }); // Calculate percentage by taking the value, 
    document.getElementById('js-legend').innerHTML = myDoughnut.generateLegend();
/**************************************************************************************************/
function calculateSalary() {
    document.getElementById("budget-salary").value = (document.getElementById("income-salary").value * 4) * 12;
    document.getElementById("budget-income").value = document.getElementById("income-salary").value * 4;
    // Recalculate budget_sum
    calculateBudget();
    // Recalculate circle graph
}

function calculateGeneralSavings() {
    document.getElementById("budget-savings").value = document.getElementById("savings-amount").value * 12;
    // Recalculate budget_sum
    calculateBudget();
    // Recalculate circle graph
    calculateCircleGraph();
}

function calculateEmergencyFunds() {
    document.getElementById("budget-emergency-funds").value = document.getElementById("emergency-savings-amount").value * 12;
    // Recalculate budget_sum
    calculateBudget();
    // Recalculate circle graph
    calculateCircleGraph();
}

/* To be added in version 2
function calculateIncome() {
    // Recalculate budget_sum
    calculateBudget();
}

function calculateSavings() {
    // Recalculate budget_sum
    calculateBudget();
}
*/

function calculateExpenses() {
    // Declare an array to contain all instances of the expense values
    var expensesArray = document.getElementsByName('expense');
    // Make sure to reset the sum so it calculates properly
    var expense_sum = 0;

    // Use a for loop to iterate through each expense
    for(var i=0; i< expense_rows ;i++){
        // Through each expense, convert the value from a string to a float
        var currentValue = parseFloat(expensesArray[i].value);
        // If currentValue NaN(none), set the value to 0
        if (isNaN(currentValue))
        {
            currentValue = 0;
        }
        // Set the expense sum to itself + the value in the expense form
        expense_sum = expense_sum + currentValue;
        // Set the value of the monthly expenses in the budget section
        document.getElementById('budget-expenses').value = expense_sum;
    }
    // Recalculate budget_sum
    calculateBudget();
    // Recalculate circle graph
    calculateCircleGraph();
}

function calculateBudget() {
    // Reset budget_sum value incase its already been set
    budget_sum = 0;
    // Check if values of sums of rows are NaN, if NaN set to 0
    if (isNaN(document.getElementById("income-salary").value))
        {
            document.getElementById("budget-income").value = 0;
        }
    if (isNaN(document.getElementById("savings-amount").value))
        {
            document.getElementById("savings-amount").value = 0;
        }
    if (isNaN(document.getElementById("emergency-savings-amount").value))
        {
            document.getElementById("emergency-savings-amount").value = 0;
        }
    if (isNaN(document.getElementById('budget-expenses').value))
        {
            document.getElementById('budget-expenses').value = 0;
        }
    // Calculate the budget sum value (MONTHLY) -> (Income * 4) - Savings - Expenses
    budget_sum = (document.getElementById("budget-income").value) - document.getElementById("savings-amount").value - document.getElementById("emergency-savings-amount").value - (document.getElementById('budget-expenses').value);
    // Set the value of the budget input box to show the value
    document.getElementById("budget-total").value = budget_sum;
}

function calculateCircleGraph() {
    //Update each individual segment. Should be easy to add dynamic additions later using a for loop and a variable to hold the total # of rows
    myDoughnut.segments[0].value = document.getElementById('housing-expense-amount').value;
    myDoughnut.segments[1].value = document.getElementById('household-expense-amount').value;
    myDoughnut.segments[2].value = document.getElementById('cellphone-expense-amount').value;
    myDoughnut.segments[3].value = document.getElementById('food-expense-amount').value;
    myDoughnut.segments[4].value = document.getElementById('entertainment-expense-amount').value;
    myDoughnut.segments[5].value = document.getElementById('health-expense-amount').value;
    myDoughnut.segments[6].value = document.getElementById('carinsurance-expense-amount').value;
    myDoughnut.segments[7].value = document.getElementById('carpayments-expense-amount').value;
    myDoughnut.segments[8].value = document.getElementById('gas-expense-amount').value;
    myDoughnut.segments[9].value = document.getElementById('personal-expense-amount').value;
    myDoughnut.segments[10].value = document.getElementById('clothing-expense-amount').value;
    myDoughnut.segments[11].value = document.getElementById('savings-amount').value;
    myDoughnut.segments[12].value = document.getElementById('emergency-savings-amount').value;
    // Update/refresh the charts values
    myDoughnut.update();
}
/* Make it dynamic in version 2! Functions below will be used later

   Ran a small test! Use a for loop using an array retrieved by names
   to hide the rows using -> $(object).style.display = "none";
function addRow_Income() {
    
}

function addRow_Savings() {
    
}

function addRow_Expenses() {
    
}

function removeRow_Income() {
    
}

function removeRow_Savings() {
    
}

function removeRow_Expenses() {
    
}
*/