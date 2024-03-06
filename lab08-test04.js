
// convert comma-separated values into an array
let countries = csv.split(",");

// convert array into delimited string
let delimitedString = countries.join(",");

// check if these are arrays
console.log(Array.isArray(csv));
console.log(Array.isArray(countries));

//  sort a simple array 
countries.sort();
console.log(countries);

// reverse the sort
countries.reverse();
console.log(countries);

// remove the first element
countries.shift();
console.log(countries);

// remove the last element
countries.pop();
console.log(countries);

// add new elements to the front of the array
countries.unshift("Italy", "Japan");
console.log(countries);
// search for element

console.log(countries.includes("Germany"));
// search for element index
console.log(countries.indexOf("Germany"));

// make a new array by extracting from another array
let extractedCountries = countries.splice(1, 3);
console.log(extractedCountries);
console.log(countries);
console.log('---------------------');
// there are other array methods which you will learn in Ch 10 */


// use a loop to output all cities whose continent=="NA"
for (let i = 0; i< cities.length; i++)
{
   if (cities[i].continent === "NA")
   {
      console.log(cities[i].city);
   }
}

console.log('---------------------');

// use a loop to output gallery names whose country=="USA"
for (let i = 0; i< galleries.length; i++)
{
   if (galleries[i].location.country === "USA")
   {
      console.log(galleries[i].name);
   }
}

console.log('---------------------');

// convert JSON colorsAsString to js object
const colors = JSON.parse(colorsAsString);
console.log(colors);

// use a loop to output color name if luminance < 75


console.log('---------------------');
for (let c of colors)
{
   if (c.luminance < 75) console.log(c.name);
}
// use two nested loops - outer: loop thru colors
for (let c of colors)
{
   let sum = 0;
   for (let rgb of c.rgb) sum += rgb;
   console.log(c.name +" rgb= "+sum)
}

console.log('---------------------');

/* use a loop output using document.write a unordered
   list of links to the galleries in the galleries array.
   Make the label of the link the name property, and the href
   the url property */

document.write(`<ul>`);
// for loop
const firstItem = 'first item';
document.write(`<li>${firstItem}</li>`);
document.write(`</ul>`);


