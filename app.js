// header onscroll event
const topNav = document.getElementById('nav');
const heroSection = document.getElementById('hero');
const heroSectionHeight = heroSection.clientHeight;
const scrollThreshold = 50; // Adjust as needed

window.addEventListener('scroll', function() {
  if (window.scrollY < heroSectionHeight - scrollThreshold) {
    topNav.classList.add('hidden');
  } else {
    topNav.classList.remove('hidden');
  }
});
// end

// background carousel for hero
$("#hero").ready(function() {
    var images = [
      "url('./images/hero1.png')",
      "url('./images/hero2.png')",
      "url('./images/hero3.png')",
      "url('./images/hero4.png')",
      "url('./images/hero5.png')",
      "url('./images/hero6.png')",
      "url('./images/hero7.png')",
      "url('./images/hero8.png')",
      "url('./images/hero9.png')",
      "url('./images/hero10.png')"
    ];
    var currentIndex = 0;

    function changeBackground() {
      $('.hero-carousel').css('background-image', images[currentIndex]);
      currentIndex = (currentIndex + 1) % images.length;
      setTimeout(changeBackground, 5000); // Change image every 5 seconds
    }

    changeBackground();
});
// end

// active state of the navigation
// $(document).ready(function() {
//     var path = window.location.pathname;
//     $('.nav-cards').each(function() {
//       if ($(this).attr('href') === path) {
//         $(this).addClass('active');
//       }
//     });
// });

// programs carousel
const multipleItemCarousel = document.querySelector("#programs-carousel");

if(window.matchMedia("(min-width:768px)").matches) {
  const carousel = new bootstrap.Carousel(multipleItemCarousel, {
    interval: false,
  })
  
  let carouselWidth = $(".program-list")[0].scrollWidth;
  let cardWidth = $(".program").width();
  let scrollPosition = 0;
  
  $(".carousel-control-prev").on('click', function() {
    if (scrollPosition > 0) {
      scrollPosition = scrollPosition - cardWidth;
      $(".program-list").animate({
        scrollLeft: scrollPosition
      }, 500)
    }
  });
  
  $(".carousel-control-next").on('click', function() {
    if (scrollPosition < (carouselWidth - (cardWidth * 4))) {
      scrollPosition = scrollPosition + cardWidth;
      $(".program-list").animate({
        scrollLeft: scrollPosition
      }, 500)
    }
  });
} else {
  $(multipleItemCarousel).addClass("slide");
}
// end