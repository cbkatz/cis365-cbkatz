/* add code after this comment */
console.log(document.getElementById("thumb-list"));
document.getElementById('thumb-list').style.display = 'none';
document.getElementById('thumb-list').style.display = 'solid 1px gray';
console.log(document.getElementById('thumb-list').classList);

const images = document.querySelectorAll('#thumb-list img');
console.log(images);

for (let img of images)
{
   img.style.boxShadow = "6px 5px 20px 1px rbga(0,0,0,0.22)"
}

const d = document.querySelector('#msg');
d.innerHTML = '<h2>HELLO WORLD</h2>' ;
d.insertAdjacentText("beforeend", "HELLO AGAIN");