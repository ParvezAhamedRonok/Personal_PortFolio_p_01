
// Selector's
let openMenu = document.querySelector("#openMenu")
let closeMenu = document.getElementById("closeMenu");
let body = document.body;


// end of the selection's......


function openCity(evt, cityName) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
}
document.getElementById(cityName).style.display = "block";
evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



// for Open and close menu and making the page responsive...--------------
openMenu.addEventListener("click" , function(){
   document.querySelector(".tab").style.transform = "translateX(0)"
   this.style.display = "none";
    
});
closeMenu.addEventListener("click" , function(){
document.querySelector(".tab").style.transform = "translateX(-280px)";
openMenu.style.display = "block";


});

// for skills section Proggress_bar-------

let displayValue = document.querySelectorAll(".num");
let interVAl = 3000;

displayValue.forEach((valueDisplay) =>{
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interVAl / endValue);
  let counter = setInterval(() => {
        startValue++;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
          clearInterval(counter)
        }
  }, duration);

});



// end of the skills section Proggress_bar-------

var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 20,
          stretch: 0,
          depth: 700,
          modifier: 1,
          slideShadows: true,
        },
        autoplay : {
          delay : 1000,
          disableOnInteraction : false,
        },
        loop : true,

      });
    
// start for the works section using by swiper.js codes-----

// start of the blogs section -----



//end for the works section using by swiper.js codes-----



