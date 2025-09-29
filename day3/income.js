let a = Number(prompt("Enter your monthly income:"));
let b = Number(prompt("Enter your rent expenses:"));
let c= Number(prompt("Enter your groceries expenses:"));
let d= Number(prompt("Enter your transport expenses:"));
let total = b + c + d;
let f = a - total;
h = (total/a) * 100;
if (f<0){
    alert("Overspending");
} else{
    alert("You are within Budget:\nTotal Expenses: " + total + "\nRemaining Balance: " + f + "\nPercentage Spent :" + (h).toFixed(2) + "%");
}