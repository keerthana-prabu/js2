let pin = prompt("Enter your pin:");
let balance = 1000;
if (pin === "1234"){
    let a = prompt("Menu:\n1. Withdraw\n2. Deposit\n3. Check Balance");
    switch(a){
        case "1":
            let withdraw = parseInt(prompt("Enter amount"));
            if (withdraw <= balance) {
        balance -= withdraw;
        alert(`Withdrawal successful! New Balance: ${balance}`);
            } else {
                alert("Insufficient Balance!");
            } break;
            case "2":
                 let deposit = parseInt(prompt("Enter amount"));
                 balance += deposit;
                 alert(`Withdrawal successful! New Balance: ${balance}`);
                 break;
            case "3":
                alert(`Your balance: ${balance}`);     
                break;
                default: ("Invalid choice!");
                 



    } 
} else{
    alert("Incorrect pin!");
}