let dis = Number(prompt("Enter travel distance in km:"));
let trans=prompt("Enter transport type (Bus/Train/Flight):");
let fareperkm;
switch(trans.toLowerCase()){
    case "bus":
        fareperkm=3;
        break;
    case "train":
        fareperkm=5;
        break;
    case "flight":
        fareperkm=10;
        break;
    default:
        alert("Invalit Transport type!");
        fareperkm=0;
}
let totalfare=dis*fareperkm;
if(fareperkm>0)
{
    alert("Total Fare: " +totalfare);
}