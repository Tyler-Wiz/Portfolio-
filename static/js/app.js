const retype = document.querySelector('#retype')
const cursor = document.querySelector(".cursor");
const textArray = ['From Nigeria', 'Based In Cambridge, UK'];
let textArrayIndex = 0;
let charIndex = 0;
let time = Math.round( Math.random() * 50 ) + 100;
let nextTextTime = Math.round( Math.random() * 1500 ) + 1000;
let eraseTime = Math.round( Math.random() * 100 ) + 100;

const typeLoop = () => {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
    retype.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeLoop, time);
  } 
  else {
    cursor.classList.remove("typing");
  	setTimeout(erase,eraseTime);
  }
}

const erase = () => {
	if (charIndex > 0) {
    if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
    retype.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, eraseTime);
  } 
  else {
    cursor.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(typeLoop, nextTextTime);
  }
}

document.addEventListener("DOMContentLoaded", function() { 
  if(textArray.length) setTimeout(typeLoop, nextTextTime);
});



counter = 0
countDev = 0
countWordpress = 0


let moveBar = () => setInterval(() => {
    const progressOne = document.querySelector('.progress_one')
    const span = document.querySelector('#span_progress')
    if(counter === 95){
      clearInterval();
    } else {
        counter++
        span.textContent = counter + "%"
        progressOne.style.width = "95%"
        progressOne.style.opacity = 1;
    }
}, 30);

moveBar()

let moveWebDev = () => setInterval(() => {
    const spandev = document.querySelector('#span_dev')
    const progressTwo = document.querySelector('.progress_two')
    if(countDev === 80){
        clearInterval();
      } else {
          countDev++
          spandev.textContent = countDev + "%"
          progressTwo.style.width = "80%"
          progressTwo.style.opacity = 1;
      }
}, 30);

moveWebDev()


let moveWordPress = () => setInterval(() => {
    const progressThree = document.querySelector('.progress_three')
    const spanWordPress = document.querySelector('#span_wordpress')
    if(countWordpress === 60){
        clearInterval();
      } else {
          countWordpress++
          spanWordPress.textContent = countWordpress + "%"
          progressThree.style.width = "60%"
          progressThree.style.opacity = 1;
      }
}, 30);

moveWordPress()

const colorWrapper = document.querySelectorAll('.colors_wrapper')
const homeBg = document.querySelector('.home_wrapper')
const homeMain = document.querySelector('.home_main')
const homeDesc = document.querySelector('.home_desc')
const homeName = document.querySelector('.home_name')

colorWrapper.forEach(function (color, index) {
    color.addEventListener('click' , () => {
          if(index === 1){
            homeBg.classList.add('home_wrapper-second')
            homeMain.classList.add('home_main-second')
            homeDesc.classList.add('home_desc-second')
            homeName.classList.add('home_name-second')
        } else if (index === 0) {
            homeBg.classList.add('home_wrapper-first')
            homeMain.classList.add('home_main-first')
            homeDesc.classList.add('home_desc-first')
            homeName.classList.add('home_name-first')
        }
    })
})

