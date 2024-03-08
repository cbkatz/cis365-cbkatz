/* add code below this */
const billTotals = [50.00, 150.00, 20.00, 500.00];
const tips = [];

function calculateTip(total)
{
    var tip;
    if (total < 30){
        tip = total * 0.30;
    } 
    else if (total >=30 && total <= 75) {
        tip = total * 0.20;
   } 
   else {
       tip = total * 0.10;
   } 
   return tip;
}
for(let total of billTotals){
    tips.push(calculateTip(total));
    } 

for (let i=0; i < billTotals.length; i++) {
    console.log("For bill of $" + billTotals[i] + " the tip should be $" + tips[i]);
}
