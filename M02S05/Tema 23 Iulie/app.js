$(document).ready(() => {

  
  $('.first-carousel').slick({
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    adaptiveHeight: true
  });

  $('.kittens-carusel').slick({
    infinite: false,
    speed: 800,
    dots: true,
    arrows:false,
    slidesToShow: 2,
    centerMode: true,
      centerPadding: '80px',
      initialSlide:1,
      responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1,
          initialSlide:0
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '30px',
          initialSlide:0
        }
      }
    ]  
  });

  const tobii = new Tobii();

});