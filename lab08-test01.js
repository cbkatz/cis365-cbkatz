/* add code below this */

let bill = prompt ("What is the bill total? ");
let iBill = Number(bill); //parses user input to number

const TIP_PERCENTAGE = 0.10;
let tip = iBill * TIP_PERCENTAGE;

if (iBill && iBill !=0)  //truthy or falsy the first iBill means that its not equal to undefined 
{
    console.log("For bill of $"+bill+" the tip should be $"+tip);
}
else{
    console.log('${bill} is not a valid number')
}
