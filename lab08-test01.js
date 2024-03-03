/* add code below this */
const billTotals=[50.00, 150.00, 20.00, 500.00];
const tips = [];

for(let total of billTotals)
{
    let tip;
    if (total < 30)
    {
        tip = total * 30;
    } 
    else if (total>= 30 && total<= 75)
    {
        tip = total * 0.20;
    }
    else
    { 
        tip = total* 0.10;
    }   
    tips.push(tip)
}

for (let i=0; i< billTotals.length; i++)
{
    console.log("For bill of $" + billTotals[i]+" the tips should be" + tips[i]);
}



