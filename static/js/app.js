const retype = document.querySelector('#retype')
const cursor = document.querySelector(".cursor");
const textArray = ['From Nigeria', 'Based In Cambridge, UK'];
let textArrayIndex = 0;
let charIndex = 0;
let time = Math.round( Math.random() * 50 ) + 100;
let nextTextTime = Math.round( Math.random() * 1500 ) + 1000;
let eraseTime = Math.round( Math.random() * 100 ) + 100;
counter = 0
countDev = 0
countWordpress = 0


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


const colorWrapper = document.querySelectorAll('.colors_wrapper')
const homeBg = document.querySelector('.home_wrapper')
const homeMain = document.querySelector('.home_main')
const homeDesc = document.querySelector('.home_desc')
const homeName = document.querySelector('.home_name')
const simple = document.querySelector('.simple')


colorWrapper.forEach(function (color, index) {
    color.addEventListener('click' , () => {
        homeBg.classList.remove('home_wrapper-second')
        homeMain.classList.remove('home_main-second')
        homeDesc.classList.remove('home_desc-second')
        homeName.classList.remove('home_name-second')
        simple.classList.remove('simple-second')
          if(index === 1){
            homeBg.classList.add('home_wrapper-second')
            homeMain.classList.add('home_main-second')
            homeDesc.classList.add('home_desc-second')
            homeName.classList.add('home_name-second')
            simple.classList.add('simple-second')
        } else if (index === 0) {
            homeBg.classList.add('home_wrapper-first')
            homeMain.classList.add('home_main-first')
            homeDesc.classList.add('home_desc-first')
            homeName.classList.add('home_name-first')
        } else{
            console.log('hello')
        }
    })
})

const scrollElements = document.querySelectorAll('.scroll')

function isVisible(element){
    const elementDiv = element.getBoundingClientRect()
    let distanceTop = 100;
    return elementDiv.top - window.innerHeight < distanceTop ? true : false
}

window.addEventListener('scroll', () => {
scrollElements.forEach(el => {
    if(isVisible(el)){
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
      }, 5);
      moveBar()

      setTimeout(() => {
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
      }, 5);
        moveWebDev()
      }, 500);
    
      setTimeout(() => {
      let moveWordPress = () => setInterval(() => {
          const progressThree = document.querySelector('.progress_three')
          const spanWordPress = document.querySelector('#span_wordpress')
          if(countWordpress === 70){
              clearInterval();
              } else {
                  countWordpress++
                  spanWordPress.textContent = countWordpress + "%"
                  progressThree.style.width = "70%"
                  progressThree.style.opacity = 1;
              }
      }, 5);
      moveWordPress()
      }, 1000);
    } else {
    el.classList.remove('scroll')
    }
  })
})



const works = document.querySelectorAll('#work')
const countScroll = document.querySelectorAll('.count_scroll')

works.forEach(function(work, index){
  let count = 29 
  setTimeout(() => {
    if(index === 0){
      setInterval(() => {
        if(count === 100){
          clearInterval()
        } else {
          count++
          work.textContent = count
        }
      }, 80);
    }
    else if(index === 1){
      setInterval(() => {
        if(count === 1900){
          clearInterval()
        } else {
          count++
          work.textContent = count
        }
      }, 1);
    }
    else if(index === 2){
      setInterval(() => {
        if(count === 900){
          clearInterval()
        } else {
          count++
          work.textContent = count
        }
      }, 10);
    } else {
      setInterval(() => {
        if(count === 190){
          clearInterval()
        } else {
          count++
          work.textContent = count
        }
      }, 30);
    }
  }, 100);
})





