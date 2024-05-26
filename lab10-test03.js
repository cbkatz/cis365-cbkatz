

document.addEventListener("DOMContentLoaded", function() {

   const countryAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/countries.php';
   const photoAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php';
   const imageURL = 'https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/';

   const loader1 = document.querySelector('#loader1');
   const loader2 = document.getElementById("loader2");
   const main = document.querySelector("main");
   const results = document.querySelector('#results');
   const select = document.querySelector('#countries');
   const button = document.querySelector('#fetchButton');

   // first hide loaders and main element 
   main.style.display = "none";
   loader1.style.display = "none";
   loader2.style.display = "none";

   // then handle button click 

   button.addEventListener("click", loadFilters);

   /* -------------------------------------------------------------
      When button is clicked, fetch data and populate select element 
   */

   function loadFilters(){
      main.style.display = "none";
      loader1.style.display = "block";
      fetch(countryAPI)
         .then(resp => resp.json())
         .then(countries => {
            main.style.display = "block";
            loader1.style.display = "none";
            select.innerHTML ="";
            select.appendChild(createOption("Select a country", ""));
            countries.forEach(c => {
               select.appendChild(createOption(c.name, c.iso));
            });
            select.addEventListener('input', loadPhotos);
         })
      function createOption(label, value){
         const opt = document.createElement('option');
         opt.textContent = label;
         opt.setAttribute('value', value);
         return opt;
      }

   }
   /* -------------------------------------------------------------
      When user selects, fetch data and display images
   */

   function loadPhotos(){
      if(select.value == "") return;
      loader2.style.display = "block";

      let photoURl = photoAPI + '?iso=' + select.value;
      fetch(photoURl)
      .then(resp => resp.json())
      .then(photosInfo => {
         console.log(photosInfo);
         loader2.style.display = "none";

         results.innerHTML = '';

         photosInfo.forEach(p => {
            const img = document.createElement('img');
            img.src = imageURL +p.fileName;
            img.title = p.title;
            img.alt = p.title;

            results.appendChild(img);
         });
      })   
   }


});