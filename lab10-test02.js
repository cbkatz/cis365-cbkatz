// import the module here

import {getSampleGalleries} from "./gallery";

document.addEventListener("DOMContentLoaded", function() {

   const galleries = getSampleGalleries();

   // you'll be adding code to this <ul> list
   const list = document.querySelector("#galleryList");
    
   // now loop through the sample gallery data calling render and list.appendChild
   galleries.forEach((item) => {
      console.log(item);
      let a = item.render();
      list.appendChild(item.render());
   });
    

});