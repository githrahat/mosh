$(document).ready(function() {
    
  //  Owl-carousel Slide
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      autoplay:true, 
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })

});