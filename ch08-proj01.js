
const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

let subtotal = 0;
for (let c of cart)
{
   let total = calculateTotal(c.quantity, c.product.price)
   subtotal += total;
   outputCartRow(c, total);
}

const tax = calculateTax(subtotal, tax_rate);
const shipping = calculateShipping(subtotal, shipping_threshold);
const grand = calculateGrandTotal(subtotal, tax, shipping);
