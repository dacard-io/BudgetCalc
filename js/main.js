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

var budget_Expenses = 0;

function calculateSalary() {
    document.getElementById("budget-salary").value = (document.getElementById("income-salary").value * 4) * 12;
    document.getElementById("budget-income").value = document.getElementById("income-salary").value * 4;
}

function calculateGeneralSavings() {
    document.getElementById("budget-savings").value = document.getElementById("savings-amount").value * 12;
}

function calculateEmergencyFunds() {
    document.getElementById("budget-emergency-funds").value = document.getElementById("emergency-savings-amount").value * 12;
}
function calculateIncome() {
    
}

function calculateSavings() {
    
}

function calculateExpenses() {
        var sum = 0;
        document.getElementById("expense-amount").each(function() {
        sum += Number($(this).value);
    });
}