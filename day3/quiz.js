let mark = 0;
let que1 = prompt("How many days in a week?\n1. Three\n2. Seven\n3. Nine");
switch(que1){
    case "2":
        mark ++;
        break;
        default: mark += 0;
}
let que2 = prompt("Which is the largest mammal?\n1. Whale\n2. Rabbit\n3. Hippo");
switch(que2){
    case "1":
        mark ++;
        break;
        default: mark += 0;
}
let que3 = prompt("Where is Erode?\n1. Karnataka\n2. Tamilnadu\n3. Assam");
switch(que3){
    case "2":
        mark ++;
        break;
        default: mark += 0;
} 
alert(`Your final score: ${mark}/3`);