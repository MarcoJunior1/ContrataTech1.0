const box = document.querySelector('.box');
const boxInner = document.querySelector('.box-inner');

document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const rotateX = (mouseY - box.offsetTop - (box.offsetHeight / 5)) / 4;
  const rotateY = (mouseX - box.offsetLeft - (box.offsetWidth / 5)) / 4;

  boxInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});