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




(function(window, undefined) {
  'use strict';

  function inspector() {

    var parentClass = 'js-html-inspector';
    var buttonClass = 'js-btn-inspector';
    var $dialog     = $('#dialog-html-inspector');
    var $button     = $('<button class="btn btn-default btn-xs ' + buttonClass + '">' +
      '<span class="glyphicon glyphicon-search"></span>' +
    '</button>');

    $button.click(function() {

      var $parent = $(this).closest('.' + parentClass).clone();

      // Replace elements
      var replaceTarget = $parent.data('replace-target');
      if (replaceTarget) {
        $parent.find(replaceTarget).each(function() {
          $(this).replaceWith($(this).html());
        });
      }

      // Remove elements
      var removeTargets = $parent.data('remove-target') || [];
      if (!(removeTargets instanceof Array)) {
        removeTargets = [removeTargets];
      }
      removeTargets.push('.' + buttonClass);
      $.each(removeTargets, function(index, target) {
        $parent.find(target).remove();
      });

      // Remove classes from elements
      var removeClassesTargets = $parent.data('remove-class-target') || [];
      if (!(removeClassesTargets instanceof Array)) {
        removeClassesTargets = [removeClassesTargets];
      }
      $.each(removeClassesTargets, function(index, target) {
        $parent.find(target).removeClass(target.split('.')[1]);
      });

      // Trim whitespaces
      var lines = $parent.html().split('\n');
      if (lines.length > 0) {
        // Remove all empty lines on the top
        while(lines[0].trim().length === 0) {
          lines.shift();
        }

        // Change indentation based on the first line
        var indent  = lines[0].length - lines[0].trim().length;
        var regex   = new RegExp(' {' + indent + '}');
        var html    = [];
        $.each(lines, function(index, line) {
          if (line.trim().length > 0 && line.match(regex)) {
            html.push(line.substring(indent));
          } else if (line.length === 0) {
            // Intended empty line
            html.push('');
          }
        });

        // Copy html to dialog and launch
        $dialog
          .find('.modal-body code').text(html.join('\n')).end()
          .modal();
      }
    });

    // Add inspector button
    $('.' + parentClass).hover(function() {
      $(this).append($button);
    });
  }

  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    // Prevent demo links from navigating
    $('a[href="#"]:not([data-toggle], [rel="async"])').click(function() {
      return false;
    });
    // Prevent demo forms from submitting
    $('form:not([action])').submit(function() {
      return false;
    });

    // Show inspector button on hover
    inspector();
  });
})(window);



















// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
