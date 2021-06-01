$('.banner-slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  customPaging: function (slider, i) {
    return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '<i class="fa fa-sort-asc"></i></button>';
  },
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.join-slider').slick({
  dots: false,
  arrows: true,
  prevArrow:'<i class="fas fa-angle-left priv"></i>',
  nextArrow:'<i class="fas fa-angle-right next"></i>',
  // prevArrow:<i class="fas fa-chevron-left"></i>,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,

  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.Joshua-slider').slick({
  dots: false,
  arrows: true,
  prevArrow:'<i class="fas fa-angle-left priv"></i>',
  nextArrow:'<i class="fas fa-angle-right next"></i>',
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnHight: 200
});
$('.dh_images').directionalHover({
  overlay: "dh_overlay",
  easing: "swing",
  // <a href="https://www.jqueryscript.net/animation/">Animation</a> speed in ms
  speed: 300,

});

$(".btn").click(function(){
$(".bottom").fadeToggle()
});
