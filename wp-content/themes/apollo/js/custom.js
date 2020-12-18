// function DropDown(el) {
//   alert();
//   this.dd = el;
//   this.initEvents();
// }
// DropDown.prototype = {
//   initEvents : function() {
//       var obj = this;

//       obj.dd.on('click', function(event){
//           $(this).toggleClass('active');
//           event.stopPropagation();
//       }); 
//   }
// }


$('.wrapper-dropdown-2').click(function(){
  $(this).toggleClass('active');
});

$(document).on("click", function (e) {
  if ($(e.target).is(".wrapper-dropdown-2") === true) {
      $(this).removeClass("active");
  }
});

$(".sidebar-dropdown > a").click(function() {
    $(".sidebar-submenu").slideUp(200);
    if (
      $(this)
        .parent()
        .hasClass("active")
    ) {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .parent()
        .removeClass("active");
    } else {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .next(".sidebar-submenu")
        .slideDown(200);
      $(this)
        .parent()
        .addClass("active");
    }
  });
  
  $("#close-sidebar").click(function() {
    $(".page-wrapper").removeClass("toggled");
    $("body").removeClass("opened-sidebar");
  });
  $("#show-sidebar").click(function() {
    $(".page-wrapper").toggleClass("toggled");
    $("body").toggleClass("opened-sidebar");
  });
 
$('.best-seller-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrow: false,
    responsive: [
        {
           breakpoint: 767,
           settings: "unslick"
        },
    ]
});

$('.shop-by-style-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrow: false,
    initialSlide: 3,
    responsive: [
        {
           breakpoint: 767,
           settings: "unslick"
        },
    ]
});

$('.testimonial-slider').slick({
    responsive: [
        {
           breakpoint: 767,
           settings: "unslick"
        }
    ]
});

$('.sidebar-search .search-menu').focusin(function() {
    $('.search-megamenu').addClass('d-block');
});
$('.sidebar-search .search-menu').focusout(function() {
    $('.search-megamenu').removeClass('d-block');
});

$('.navbar-right li input').focusin(function() {
  $('.search-megamenu').addClass('d-block');
});
$('.navbar-right li input').focusout(function() {
  $('.search-megamenu').removeClass('d-block');
});

AOS.init({
    easing: 'ease-out-back',
    duration: 1000
});



/****************************Product Zoom and Slider JS Start**********************************/

//Initialize product gallery

// $('.show1').zoomImage();

// $('.show-small-img:first-of-type').css({'border': 'solid 1px #951b25', 'padding': '2px'})
// $('.show-small-img:first-of-type').attr('alt', 'now').siblings().removeAttr('alt')
// $('.show-small-img').click(function () {
//   $('#show-img').attr('src', $(this).attr('src'))
//   $('#big-img').attr('src', $(this).attr('src'))
//   $(this).attr('alt', 'now').siblings().removeAttr('alt')
//   $(this).css({'border': 'solid 1px #951b25', 'padding': '2px'}).siblings().css({'border': 'none', 'padding': '0'})
//   if ($('#small-img-roll').children().length > 4) {
//     if ($(this).index() >= 3 && $(this).index() < $('#small-img-roll').children().length - 1){
//       $('#small-img-roll').css('left', -($(this).index() - 2) * 76 + 'px')
//     } else if ($(this).index() == $('#small-img-roll').children().length - 1) {
//       $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 76 + 'px')
//     } else {
//       $('#small-img-roll').css('left', '0')
//     }
//   }
// })

//Enable the next button

// $('#next-img').click(function (){
//   $('#show-img').attr('src', $(".show-small-img[alt='now']").next().attr('src'))
//   $('#big-img').attr('src', $(".show-small-img[alt='now']").next().attr('src'))
//   $(".show-small-img[alt='now']").next().css({'border': 'solid 1px #951b25', 'padding': '2px'}).siblings().css({'border': 'none', 'padding': '0'})
//   $(".show-small-img[alt='now']").next().attr('alt', 'now').siblings().removeAttr('alt')
//   if ($('#small-img-roll').children().length > 4) {
//     if ($(".show-small-img[alt='now']").index() >= 3 && $(".show-small-img[alt='now']").index() < $('#small-img-roll').children().length - 1){
//       $('#small-img-roll').css('left', -($(".show-small-img[alt='now']").index() - 2) * 76 + 'px')
//     } else if ($(".show-small-img[alt='now']").index() == $('#small-img-roll').children().length - 1) {
//       $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 76 + 'px')
//     } else {
//       $('#small-img-roll').css('left', '0')
//     }
//   }
// })

//Enable the previous button

// $('#prev-img').click(function (){
//   $('#show-img').attr('src', $(".show-small-img[alt='now']").prev().attr('src'))
//   $('#big-img').attr('src', $(".show-small-img[alt='now']").prev().attr('src'))
//   $(".show-small-img[alt='now']").prev().css({'border': 'solid 1px #951b25', 'padding': '2px'}).siblings().css({'border': 'none', 'padding': '0'})
//   $(".show-small-img[alt='now']").prev().attr('alt', 'now').siblings().removeAttr('alt')
//   if ($('#small-img-roll').children().length > 4) {
//     if ($(".show-small-img[alt='now']").index() >= 3 && $(".show-small-img[alt='now']").index() < $('#small-img-roll').children().length - 1){
//       $('#small-img-roll').css('left', -($(".show-small-img[alt='now']").index() - 2) * 76 + 'px')
//     } else if ($(".show-small-img[alt='now']").index() == $('#small-img-roll').children().length - 1) {
//       $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 76 + 'px')
//     } else {
//       $('#small-img-roll').css('left', '0')
//     }
//   }
// })

/****************************Product Zoom and Slider JS End**********************************/

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 200) {
      $("header").addClass("stickyHeader");
  } else {
      $("header").removeClass("stickyHeader");
  }
});


$('.exp-dropdown li').on('click', function(e) {
  $('.exp-elected').html( $(this).text() );
  $('.exp-dropdown').removeClass('show');
});

$('.exp-elected').on('click', function() {
  $('.exp-dropdown').toggleClass('show');
});

// $(document).on("click", function (event) {
  
//   var a = $('.exp-elected');
//   if (a != event.target && !a.has(event.target).length){
//     event.stopPropagation();
//     $('.exp-dropdown').removeClass("show");
//   }
// });

$('.wedding-product-slider').slick({
  dots: true,
});

$( function() {
  $( "#slider-range1" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range1" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range1" ).slider( "values", 1 ) );
} );

$( function() {
  $( "#slider-range6" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range6" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range6" ).slider( "values", 1 ) );
} );

$( function() {
  $( "#slider-range61" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range61" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range61" ).slider( "values", 1 ) );
} );

$( function() {
  $( "#slider-range2" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 115, 400 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range2" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range2" ).slider( "values", 1 ) );
} );

$( function() {
  $( "#slider-range3" ).slider({
    range: true,
    min: 0,
    max: 2,
    values: [ 1, 2 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range3" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range3" ).slider( "values", 1 ) );
} );

$( function() {
  $( "#slider-range71" ).slider({
    range: true,
    min: 0,
    max: 2,
    values: [ 1, 2 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range71" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range71" ).slider( "values", 1 ) );
} );

$( function() {
  $( "#slider-range81").slider({
    range: true,
    min: 0,
    max: 2,
    values: [ 1, 2 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range81").slider( "values", 0 ) +
    " - $" + $( "#slider-range81").slider( "values", 1 ) );
} );

$( function() {
  $( "#slider-range91" ).slider({
    range: true,
    min: 0,
    max: 2,
    values: [ 1, 2 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range91" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range91" ).slider( "values", 1 ) );
} );

$( function() {
  $( "#slider-range7" ).slider({
    range: true,
    min: 0,
    max: 2,
    values: [ 1, 2 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range7" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range7" ).slider( "values", 1 ) );
} );

$( function() {
  $( "#slider-range8" ).slider({
    range: true,
    min: 0,
    max: 2,
    values: [ 1, 2 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range8" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range8" ).slider( "values", 1 ) );
} );

$( function() {
  $( "#slider-range9" ).slider({
    range: true,
    min: 0,
    max: 2,
    values: [ 1, 2 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range9" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range9" ).slider( "values", 1 ) );
} );

$( function() {
  $( "#slider-range4" ).slider({
    range: true,
    min: 0,
    max: 8,
    values: [ 2, 5 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range4" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range4" ).slider( "values", 1 ) );
} );

$( function() {
  $( "#slider-range5" ).slider({
    range: true,
    min: 0,
    max: 7,
    values: [ 2, 5 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range5" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range5" ).slider( "values", 1 ) );
  } );

  $( function() {
    $( "#slider-range11" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range11" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range11" ).slider( "values", 1 ) );
  } );
  
  $( function() {
    $( "#slider-range21" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 115, 400 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range21" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range21" ).slider( "values", 1 ) );
  } );
  
  $( function() {
    $( "#slider-range31" ).slider({
      range: true,
      min: 0,
      max: 2,
      values: [ 1, 2 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range31" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range31" ).slider( "values", 1 ) );
  } );
  
  $( function() {
    $( "#slider-range41" ).slider({
      range: true,
      min: 0,
      max: 8,
      values: [ 2, 5 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range41" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range41" ).slider( "values", 1 ) );
  } );
  
  $( function() {
    $( "#slider-range51" ).slider({
      range: true,
      min: 0,
      max: 7,
      values: [ 2, 5 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range51" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range51" ).slider( "values", 1 ) );
    } );
  



$('.options li').on('click', function(e) {
  //$('.custom-tab-content div').hide();
  $('div#'+$(this).attr('data-value')).show();
 $('.selected').html( $(this).text() );
  //console.log($('.selected-inp').val( $(this).data('value') ).trigger('change'));
  $('.options').removeClass('show');
});

$('.selected').on('click', function() {
  $(this).toggleClass('selected-active');
  $('.options').toggleClass('show');
});

// $('.selected-inp').on('change', function(ev) {
//   $('.result').html('The new value is: ' + ev.target.value);
// });

