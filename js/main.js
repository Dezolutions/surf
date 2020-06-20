$(function () {

  $('a').on('click', function (e) {
    e.preventDefault();

  })


  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider__arrows arrow-left" src="./img/arrow-left.svg" alt="">',
    nextArrow: '<img class="slider__arrows arrow-right" src="./img/arrow-right.svg" alt="">',
    asNavFor: '.slider__dots',
  })

  $('.slider__dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
  })

  $('.surf__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider__arrows arrow-left" src="./img/arrow-left.svg" alt="">',
    nextArrow: '<img class="slider__arrows arrow-right" src="./img/arrow-right.svg" alt="">',
    asNavFor: '.slider__map',
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 381,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  })

  $('.slider__map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf__slider',
    focusOnSelect: true,
  })

  $('.main__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider__arrows arrow-left" src="./img/arrow-left.svg" alt="">',
    nextArrow: '<img class="slider__arrows arrow-right" src="./img/arrow-right.svg" alt="">'
  })

  $('.shop__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider__arrows arrow-left" src="./img/arrow-left.svg" alt="">',
    nextArrow: '<img class="slider__arrows arrow-right" src="./img/arrow-right.svg" alt="">'

  })

  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="./img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="./img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

  $('.quantity-button').on('click', function () {
    let summ = $('.nights').val() * $('.sum').data('nights') + ($('.guests').val() - 1) * $('.sum').data('people');
    $('.sum').html('$' + summ);

  })

  $('.shop__slider-content-circle').on('click', function () {
    $(this).toggleClass('circle__row-active');
  });

  $('a[href^="#"]').on('click', function () {
    var target = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(target).offset().top
    }, 500)
  })

  $('.header__arrows').on('click', function () {
    $('html, body').animate({
      scrollTop: $('#surf').offset().top
    }, 600)
  })

  $(window).on('scroll', function () {
    if ($(this).scrollTop() != 0) {
      $('#toTop').css({
        transition: '.3s',
        transform: 'scale(2.5)'
      })
    }
    else {
      $('#toTop').css({
        transition: '.3s',
        transform: 'scale(0)'
      })
    }
  });

  $('#toTop').on('click', function () {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
  });

  
  
  
  

  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false,       // default
    live:         true        // default
  }
  )
  wow.init();

});