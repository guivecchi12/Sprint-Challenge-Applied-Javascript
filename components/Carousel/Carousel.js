/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carousel(){
  let car = document.createElement('div');
  car.classList.add('carousel');

  let lButton = document.createElement('div');
  lButton.classList.add('left-button');
  car.appendChild(lButton);

  let img1 = document.createElement('img');
  img1.src = "./assets/carousel/mountains.jpeg";
  car.appendChild(img1);

  let img2 = document.createElement('img');
  img2.src = "./assets/carousel/computer.jpeg";
  img2.classList.add('hide');
  car.appendChild(img2);

  let img3 = document.createElement('img');
  img3.src = "./assets/carousel/trees.jpeg";
  img3.classList.add('hide');
  car.appendChild(img3);

  let img4 = document.createElement('img');
  img4.src = "./assets/carousel/turntable.jpeg";
  img4.classList.add('hide');
  car.appendChild(img4);

  let rButton = document.createElement('div');
  rButton.classList.add('right-button');
  car.appendChild(rButton);

  return car;
}

let carC = document.querySelector('.carousel-container');
carC.appendChild(carousel());

let lB = document.querySelector('.left-button');
let rB = document.querySelector('.right-button');

let imgsArr = [];
let imgs = document.querySelectorAll(`.carousel img`);
imgs.forEach((e)=>{
  imgsArr.push(e);
})

console.log(imgsArr);

let index = 0;

lB.addEventListener('click', ()=>{
  imgsArr[index].classList.toggle('hide');
  if(index > 0){
    index -= 1;
  }
  else{
    index = imgsArr.length - 1;
  }
  imgsArr[index].classList.toggle('hide');
})

rB.addEventListener('click', ()=>{
  imgsArr[index].classList.toggle('hide');
  if(index < imgsArr.length - 1 ){
    index += 1;
  }
  else{
    index = 0;
  }
  imgsArr[index].classList.toggle('hide');
})
