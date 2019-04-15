(function ($) {
  "use strict";


  /*-------------------------------------
   </> @author MohammadReza Pazani
   </> @version 1.0
  ------------------------------------*/


  /* Start Tab Menu */

  $('.bdi-menu-shop')
    .click(function () {
      if ($(this).hasClass('active') && $(this).parent().hasClass('active')) {
        $(this).parent().removeClass('active');
        $(this).removeClass('active');
      } else {
        $(this).parent().addClass('active');
        $(this).addClass('active');
      }
    });
  /* End Tab Menu */


  /*-------------------------------------
   </> @author Grid View && List View
   </> Scroll Top to Up
   </> @version 1.0
  ------------------------------------*/
  $('[data-changeview]').each(function () {
    $(this)
      .on('click', function () {
        var Type = $(this).attr('data-changeview');
        $('[data-changeview]').removeClass('active');
        $(this).addClass('active');
        if (Type == "list_view") {
          $(this)
            .parents('.archive_content')
            .find('[data-viewtarget]')
            .removeClass('grid_view');
          $(this)
            .parents('.archive_content')
            .find('[data-viewtarget]')
            .addClass(Type);
        } else {
          $(this)
            .parents('.archive_content')
            .find('[data-viewtarget]')
            .addClass(Type);
          $(this)
            .parents('.archive_content')
            .find('[data-viewtarget]')
            .removeClass('list_view');
        }
      });
  });

  /*-------------------------------------
   </> MTabs
   </> @version 1.0
   </> @version 1.0.1 Initial tab
   </> @version 1.0.2 Default tab
   </> @version 1.0.3 Navigation arrows
   </> @version 1.0.4 Initial default tab if it isn't initialed
  ------------------------------------*/
  $('[data-tabindex]').each(function () {
    var index = $(this).attr('data-tabindex');
    var active = false;
    $('[data-tabindex="' + index + '"] [data-tabc]').hide();
    $('[data-tabindex="' + index + '"] .tab-title [data-tab]').each(function () {
      if ($(this).hasClass('active')) {
        var i = $(this).attr('data-tab');
        $('[data-tabindex="' + index + '"] [data-tabc="' + i + '"]').fadeIn();
        active = true;
        return false;
      }
    });
    if (active === false) {
      $('[data-tabindex="' + index + '"] [data-tabc]:first-of-type').fadeIn();
      $('[data-tabindex="' + index + '"] [data-tab]:first-of-type').addClass('active');
    }
    $('[data-tabindex="' + index + '"] .tab-title [data-tab]')
      .on('click', function () {
        var t = $(this).attr('data-tab');
        $('[data-tabindex="' + index + '"] .tab-title [data-tab]').removeClass('active');
        $(this).addClass('active');
        $('[data-tabindex="' + index + '"] [data-tabc]').hide();
        $('[data-tabindex="' + index + '"] [data-tabc="' + t + '"]').fadeIn();
      });
    $('[data-tabindex="' + index + '"]  nav .prev').on('click', function () {
      var t = parseInt($('[data-tabindex="' + index + '"]  .tab-title [data-tab].active').attr('data-tab')) - 1;
      if (t == 0)
        return false;
      $('[data-tabindex="' + index + '"] .tab-title [data-tab].active').removeClass('active');
      $('[data-tabindex="' + index + '"] [data-tabc]').hide();
      $('[data-tabindex="' + index + '"] [data-tab="' + t + '"]').addClass('active');
      $('[data-tabindex="' + index + '"] [data-tabc="' + t + '"]').fadeIn();
    });
    $('[data-tabindex="' + index + '"] nav .next').on('click', function () {
      var t = parseInt($('[data-tabindex="' + index + '"] .tab-title [data-tab].active').attr('data-tab'));
      var list = $('[data-tabindex="' + index + '"] .tab-title [data-tab]').length;
      if (t == list)
        return false;
      t++;
      $('[data-tabindex="' + index + '"] .tab-title [data-tab].active').removeClass('active');
      $('[data-tabindex="' + index + '"] [data-tabc]').hide();
      $('[data-tabindex="' + index + '"] [data-tab="' + t + '"]').addClass('active');
      $('[data-tabindex="' + index + '"] [data-tabc="' + t + '"]').fadeIn();
    });
  });
  /*-------------------------------------
     </> Swipers
     </> introduction
    ------------------------------------*/

  /*-------------------------------------
   </> mmenu
  ------------------------------------*/
  var $menu = $('#menu').mmenu({
    extensions: [
      'pagedim-black', 'border-offset', 'fx-menu-slide', 'fx-panels-none'
    ],
    navbar: {
      add: false,
      title: 'منو',
      titleLink: 'parent'
    },
    slidingSubmenus: false,
    offCanvas: {
      position: 'right',
      zposition: 'back'
    },
    keyboardNavigation: {
      enable: 'default',
      enhance: true
    },
    lazySubmenus: {
      load: true
    },
    setSelected: {
      current: 'detect',
      hover: true,
      parent: true
    }
  }, {
    transitionDuration: 500,
    offCanvas: {
      pageSelector: '#main-page'
    },
    screenReader: {
      text: {
        closeMenu: 'بستن منو',
        closeSubmenu: 'بستن زیر منو',
        openSubmenu: 'بازکردن زیر منو',
        toggleSubmenu: 'باز و بسته کردن منو'
      }
    }
  });
  var API = $menu.data('mmenu');
  $('#navbar-toggler').on('click', function () {
    API.open();
  });
  $('#menu .menu-item-has-children').on('click', function () {
    $(this)
      .find('> div.mm-panel.mm-vertical')
      .slideToggle();
    $(this).toggleClass('active');
  });
  /*-------------------------------------
   </> @author http://Css-tricks.com
   </> Image to Svg
   </> @version 1.0.0
  /*------------------------------------*/
  $('img.svg').each(function () {
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function (data) {
      var $svg = $(data).find('svg');
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      $img.replaceWith($svg);
    }, 'xml');
  });

  $(document).ready(function () {
    $('select').niceSelect();
  });
})(jQuery);