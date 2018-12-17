$('[data-toggle="popover"]').popover()







$("#view-appointment").popover({
  html : true,
  placement: "right",
  title: function() {
    return $("#view-appointment-popover-header").html();
  },
  content: function() {
    return $("#view-appointment-popover-content").html();
  },
  trigger: "click"
});


$(document).on('click', function (e) {
  $('[data-toggle="popover"],[data-original-title]').each(function () {
      //the 'is' for buttons that trigger popups
      //the 'has' for icons within a button that triggers a popup
      if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {                
          (($(this).popover('hide').data('bs.popover')||{}).inState||{}).click = false  // fix for BS 3.3.6
      }

  });
});



var tabs = $('.tabs');
var items = $('.tabs').find('a').length;
var selector = $(".tabs").find(".selector");
var activeItem = tabs.find('.active');
var activeWidth = activeItem.innerWidth();
$(".selector").css({
  "left": activeItem.position.left + "px", 
  "width": activeWidth + "px"
});

$(".tabs").on("click","a",function(){
  $('.tabs a').removeClass("active");
  $(this).addClass('active');
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    "left":itemPos.left + "px", 
    "width": activeWidth + "px"
  });
});






// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);




















// SLIDER TOGGLE FUNCTION

$(window).load(function() {
  var slider_width = $("#global-slider").width(); //get width automaticly
  $("#global-slider").animate({ "left": "-" + slider_width });
});

$(document).ready(function() {
  var slider_width = $("#global-slider").width(); //get width automaticly
  $("#mobile-slider").click(function() {
      $("#global-slider").animate({ "margin-left": slider_width });
      $(".slider-overlay").fadeIn(250);
      $("#global-slider").css('display', 'flex');
      // $('body').attr('style','overflow: hidden; position: fixed; width: 100%;');
  });
  $("#close-slider, .slider-overlay").click(function() {
      $("#global-slider").animate({ "margin-left": "0" });
      $("#global-slider").animate({ "left": "-" + slider_width });
      $(".slider-overlay").fadeOut(250);
      // $('body').removeAttr('style','overflow: hidden; position: fixed; width: 100%;');
  });
});


// $('#details-tab').tab('show')























// SLIDER TOGGLE FUNCTION

$(window).load(function() {
  // var heading_height = $(".heading").height(); //get width automaticly
  // $("#global-slider").animate({ "left": "-" + slider_width });
});

$(document).ready(function() {

  var heading_height = $(".heading.fixed-top").innerHeight(); //get width automaticly

  $('#main-panel').css('padding-top', heading_height);

});













$(document).ready(function(){

  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.heading').innerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();

      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('.heading').removeClass('nav-down').addClass('nav-up');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('.heading').removeClass('nav-up').addClass('nav-down');
          }
      }

      lastScrollTop = st;
  }
});













$(document).ready(function(){
  $('table tr').click(function(){
      window.location = $(this).attr('href');
      return false;
  });
});