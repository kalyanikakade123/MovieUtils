const hand = document.querySelector('.hand');
const hourHand = document.querySelector('.hourHand');
const secHand = document.querySelector('.secHand');

setInterval(() => { 

  const date = new Date(); 

  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  const getHourDegree =((minutes/60)*30) + hours*30;
  const getSecondDegree = seconds*6;

  hand.style.transform = `translateY(-50%) rotate(${minutes*6}deg)`;
  secHand.style.transform = `translateY(-50%) rotate(${getSecondDegree}deg)`;
  hourHand.style.transform = `translateY(-50%) rotate(${getHourDegree}deg)`;

}, 1000);
