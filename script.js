const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
`rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`;

document.querySelector('.box-table').addEventListener('click', function(event){
  console.log(event);
  if(event.target.classList.contains('btn-white-box')){
    const clicked = event.target;
    console.log(clicked);
    const sibling = clicked.closest('.main').querySelectorAll('.btn-white-box');
    console.log(sibling);
    sibling.forEach(el =>{
      if(el===clicked){
        el.style.background = randomColor();
      }
      else{
        el.style.background = "";
      }
    });

  }
})