//this is for the responsive navbar
function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '0px';
    }
  }
  
  let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.85,
    barColor: "#17d3e6",
    fill: { gradient: ['#00FFC7'] }
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
    function (event, progress, stepValue) {
      $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
    });
  $(".js .bar").circleProgress({
    value: 0.70
  });
  $(".node .bar").circleProgress({
    value: 0.90
  });
  $(".react .bar").circleProgress({
    value: 0.60
  });
//this is for the home section 
$(document).ready(function(){
  $(window).scroll(function(){
      // sticky navbar on scroll script
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      
      // scroll-up button show/hide script
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });
  // slide-up script
  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
      // removing smooth scroll on slide-up button click
      $('html').css("scrollBehavior", "auto");
  });
  $('.navbar .menu li a').click(function(){
      // applying again smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
  });
  // toggle menu/navbar script
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });
  // typing text animation script
  var typed = new Typed(".typing", {
      strings: [ "Passionate Motion Graphics Designer","Fashion Design Aspirant", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
  var typed = new Typed(".typing-2", {
      strings: ["Motion Graphics Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
  // owl carousel script
  $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
          0:{
              items: 1,
              nav: false
          },
          600:{
              items: 2,
              nav: false
          },
          1000:{
              items: 3,
              nav: false
          }
      }
  });
});
