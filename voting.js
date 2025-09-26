function Voting()
{
let repeat = true;
while(repeat)
{
let name = prompt ("Enter your name", "User");
let age = Number(prompt ("Enter your age", "18"));
if (age>= 18) {
    alert("Hello " + name + ", you are eligible to vote.");
} else {
    alert("Sorry " + name + ", you are not eligile to vote.");
} repeat = confirm("Do you want to check again?");
}
alert("Goodbye!");
}
Voting();