let Hour = document.querySelector(".first")
let minutes = document.querySelector('.second')
let seconds = document.querySelector(".Third")
let Day = document.querySelector(".day")
let Month = document.querySelector(".month")
let Year = document.querySelector(".year")

//////////
 setInterval(All, 1000)
function All() {
  var Min = new Date()
  let Mins = Min.getHours()
  Hour.innerHTML = Mins
  let currentMinute = Min.getMinutes()
  minutes.innerHTML = currentMinute
  if (minutes.innerHTML < 10) {
    minutes.innerHTML = "0" + minutes.innerHTML
  }
  let currentSec = Min.getSeconds()
  seconds.innerHTML = currentSec
  if (seconds.innerHTML < 10) {
    seconds.innerHTML = '0' + seconds.innerHTML
  }
  
  let currentDay = Min.getDate()
  Day.innerHTML =  ` ${currentDay}/`
  
  let currentMonth = Min.getMonth()
  Month.innerHTML = ` ${currentMonth + 1}/`
  let currentYear = Min.getFullYear()
  Year.innerHTML = currentYear
}
All()












