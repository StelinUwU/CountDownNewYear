const days = document.querySelector(".days").children[0].children[0];
const hours = document.querySelector(".hours").children[0].children[0];
const minutes = document.querySelector(".minutes").children[0].children[0];
const seconds = document.querySelector(".seconds").children[0].children[0];
const year = new Date().getFullYear()
const nyear = year + 1
const nyearHTML = document.querySelector(".container__info div p")
const countDownDate = new Date(`${nyear}, January, 1 `).getTime(); 


//Script año
nyearHTML.textContent = nyear



class UI{
  changeTime(d, h, m, s){
     days.textContent = d;
     hours.textContent = h;
     minutes.textContent = m;
     seconds.textContent = s;
  }
}

class DATE{
  constructor(){
    this.days;
    this.hours;
    this.seconds;
  }
  timeRemaining(){
    const now = new Date().getTime()
    const second = 1000;
    const minute = second *60
    const hour = minute *60
    const day = hour *24

    const time = countDownDate - now;

    const d = Math.floor(time / (day))
    const h = Math.floor((time % (day)) / (hour))
    const m = Math.floor((time % (hour)) / (minute))
    const s = Math.floor((time % (minute)) / (second))


    ui.changeTime(d, h, m, s)
  }
}



function loop(){
  setInterval( () =>{
    date.timeRemaining()
  }, 1000)
}

const date = new DATE();
const ui = new UI();

loop();

