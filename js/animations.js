// Contains all animations for BudgetCalc

$(".table-caption-text").click(function() {
    alert("Toggle pressed!");
     $(this).nextUntil('tr').slideToggle(1000);
});