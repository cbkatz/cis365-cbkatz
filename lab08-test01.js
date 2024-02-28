/* add code below this */

let bill = prompt ("What is the bill total? ");
let iBill = Number(bill); //parses user input to number

const TIP_PERCENTAGE = 0.10;
let tip = iBill * TIP_PERCENTAGE;
console.log("For bill of $"+bill+" the tip should be $"+tip)