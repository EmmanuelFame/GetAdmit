const btn1 = document.getElementById("next1");
const btn2 = document.getElementById("next2");
const btn3 = document.getElementById("next3");
const btn4 = document.getElementById("next4");
const btn5 = document.getElementById("next5");
const btn6 = document.getElementById("next6");
const btn7 = document.getElementById("next7");
const btn8 = document.getElementById("next8");

const first = document.querySelector('.step2');
const second = document.querySelector('.step3');
const third = document.querySelector('.step4');
const fourth = document.querySelector('.step5');
const fifth = document.querySelector('.step6');
const sixth = document.querySelector('.step7');
const seventh = document.querySelector('.step8');

btn1.addEventListener('click', () => {
  first.classList.toggle("hidden");
})
btn2.addEventListener('click', () => {
  second.classList.toggle("hidden");
})
btn3.addEventListener('click', () => {
  third.classList.toggle("hidden");
})
btn4.addEventListener('click', () => {
  fourth.classList.toggle("hidden");
})
btn5.addEventListener('click', () => {
  fifth.classList.toggle("hidden");
})
btn6.addEventListener('click', () => {
  sixth.classList.toggle("hidden");
})
btn7.addEventListener('click', () => {
  seventh.classList.toggle("hidden");
})
btn8.addEventListener('click', () => {
  window.location.reload();
})