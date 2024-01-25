// background carousel for header
$(document).ready(function() {
    var images = [
      "url('./images/slide\ show=show\ 1.png')",
      "url('./images/slide\ show=show\ 2.png')",
      "url('./images/slide\ show=show\ 3.png')",
      "url('./images/slide\ show=show4.png')",
      "url('./images/show5.png')",
      "url('./images/show6.png')",
      "url('./images/slide\ show=show8.png')",
      "url('./images/slide\ show=show9.png')",
      "url('./images/slide\ show=show10.png')",
      "url('./images/slide\ show=show11.png')"
      // Add more URLs as needed
    ];
    var currentIndex = 0;

    function changeBackground() {
      $('.carousel-item').css('background-image', images[currentIndex]);
      currentIndex = (currentIndex + 1) % images.length;
      setTimeout(changeBackground, 5000); // Change image every 5 seconds
    }

    changeBackground();
});

// active state of the navigation
// $(document).ready(function() {
//     var path = window.location.pathname;
//     $('.nav-cards').each(function() {
//       if ($(this).attr('href') === path) {
//         $(this).addClass('active');
//       }
//     });
// });