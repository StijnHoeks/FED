

$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash,
      $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top-100
      }, 400, 'swing', function () {
          window.location.hash = target;
      });
  });
});

$(document).on('ready', function () {
var e = $('header>div>h1');
  for (var i = 0; i < 20; i++) {
    e.clone().insertAfter(e);
  }
});

var modern = Modernizr.touch
$(document).ready(function(){
  if (modern == true) {
    $('fieldset>section:first-of-type input').addClass('touch');
  }
});

$(document).on('ready scroll', function () {
  var wst = $(window).scrollTop();
  var navT = $('nav').offset().top;
    var bp = (wst/1.6);
    if (wst >= 0) {
      if (wst < navT) {
        $("header>div").slideDown(500);
        if (modern == false) {
          $("header>div>h1").css({'right':wst+'px'});
    	    $("header>figure>img").css({'top':bp+'px'});
        } 
      }
      else {
        $("header>div").slideUp(0);
      }
    }
});


$(window).on('load scroll resize', function () {
  var navTop = $('nav').offset().top;
  var wnTop  = $(window).scrollTop();
  var ul1    = $('nav ul:first-of-type')
  var ul2    = $('nav ul:last-of-type')
  var ulTop  = ul1.outerHeight(true)+5;
  if (wnTop < navTop) { 
    $("nav ul").removeClass('ulfix')
    ul2.css('top',ulTop+'px');
  }
  else {
    $("nav ul").addClass('ulfix');
    ul2.css('top',ulTop+'px');
  }

});

$(window).on('load', function () {
  var ulTop  = $('nav ul:first-of-type').outerHeight(true)+6;
  var ul = $('nav ul')
  var bttn = $('nav ul img:first-of-type')
  $("ul:last-of-type").css('top',ulTop+'px'); ul.addClass('ul_s');
  $(bttn).toggle(function () {
      $("ul:last-of-type").css('top',ulTop+'px'); ul.removeClass('ul_s');
    }, function () {
      $("ul:last-of-type").css('top',ulTop+'px'); ul.addClass('ul_s');
    });
});

$(window).load(function () {
  var form1 = $('fieldset>section:nth-of-type(2)')
  var form2 = $('fieldset>section:nth-of-type(3)')
  var inpt  = $('article input[type="submit"]')
  
  $('input#aanmelden_project,nav ul:last-of-type li:first-of-type a[href="#form"]').click(function () {
    form1.addClass('formshow');inpt.addClass('formshow');
    form2.removeClass('formshow');
  });
  $('input#aanmelden_bedrijf,nav ul:last-of-type li:last-of-type a[href="#form"]').click(function () {
    form1.removeClass('formshow');
    form2.addClass('formshow');inpt.addClass('formshow');

  });

});





