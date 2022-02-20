let menuBtn = document.querySelector('.burger-btn');
let menuBody = document.querySelector('.burger-menu');

menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('active');
  menuBody.classList.toggle('active');
})