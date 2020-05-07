"use strict";

$(document).ready(function () {
  // Comparison Table
  $('.comparison-table__row-include').on('click', function () {
    var activeCls = 'js-active-tip';
    $('body').addClass(activeCls);
    $(this).closest('.comparison-table__row-tips').addClass(activeCls);
    $(this).find('.comparison-table__row-dropdown').fadeIn();
  });
  $('body').on('mouseup', function (e) {
    var curr = $(this).find('.comparison-table__row-tips.js-active-tip .comparison-table__row-dropdown');

    if (!curr.is(e.target)) {
      $('body').addClass('js-active-tip');
      $(this).find('.comparison-table__row-tips.js-active-tip').removeClass('js-active-tip');
      curr.hide();
    }
  }); // End of Comparison Table
  // Pick Accessories

  /*var $frame = $('.pick-accessories__slider-wrap');
  var $wrap = $frame.parent();
  */

  var frameColors = {
    bronze: $('#accessoriesBronze'),
    chromium: $('#accessoriesChromium'),
    satin: $('#accessoriesSatin'),
    gold: $('#accessoriesGold')
  };

  for (var el in frameColors) {
    var $frame = frameColors[el];
    var $wrap = $frame.parent();

    if (frameColors[el].find('.pick-accessories__slider-item').length > 2) {
      $frame.sly({
        horizontal: 1,
        itemNav: 'basic',
        mouseDragging: 1,
        touchDragging: 1,
        scrollBar: $wrap.find('.pick-accessories__slider-scrollbar'),
        scrollBy: 1,
        speed: 300,
        elasticBounds: 1,
        easing: 'easeOutExpo',
        dragHandle: 1,
        dynamicHandle: false
      });
    } else {
      $wrap.addClass('without-slider');
    }
  }
  /* $frame.sly({
       horizontal: 1,
       itemNav: 'basic',
       mouseDragging: 1,
       touchDragging: 1,
       scrollBar: $('.pick-accessories__slider-scrollbar'),
       scrollBy: 1,
       speed: 300,
       elasticBounds: 1,
       easing: 'easeOutExpo',
       dragHandle: 1,
       dynamicHandle: false
   });*/

  /*$frame.sly({
      horizontal: 1,
      itemNav: 'basic',
      mouseDragging: 1,
      touchDragging: 1,
      scrollBar: $('.pick-accessories__slider-scrollbar'),
      scrollBy: 1,
      speed: 300,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: false
  });*/


  $('.pick-accessories__item').on('click', function () {
    var itemNum = $(this).data('accessories');
    var tab = $("[data-accessories-tabs='".concat(itemNum, "']"));
    var allTabs = $('.pick-accessories__slider-overflow');
    var allAside = $('.pick-accessories__static-item');
    var aside = $("[data-accessories-left='".concat(itemNum, "']"));
    allAside.hide();
    aside.show();
    $('.pick-accessories__item').removeClass('active');
    $(this).addClass('active');
    allTabs.hide();
    tab.show();
  }); // If that mobile browser

  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {} else {
    // Sticky!
    var sticky = new Sticky('.entrance-choose__wrap');
  }

  svg4everybody({});
  var state = {
    items: '.catalog-item__color',
    active: 'catalog-item__color--active'
  };
  var maskColors = {
    'ampir': '#E1D7DA',
    'barokko': '#CDDBEC',
    'bauhouse': '#CDDBEC',
    'venezia': '#ACA7A8',
    'versal': '#E1D7DA',
    'georg': '#CEBB95',
    'industrial ': '#CEBB95',
    'italiano': '#D2C8BC',
    'lounge': '#BBBEBB',
    'loft': '#D4D8CF',
    'mayer': '#EBDAB1',
    'military': '#CDC693',
    'minimal': '#8C786C',
    'modern': '#E0D7C6',
    'neoclassic': '#CBC8B7',
    'eclectic': '#CCCECB',
    'ecostyle': '#D2DDD0',
    'nova': '#D6CDC8',
    'hitech': '#E0E0E0',
    'rustik': '#A9A7A3',
    'techno': '#AEB2BD'
  };
  var allElements = $('.catalog-item');
  $.each(allElements, function (i, val) {
    var mask = $(val).find('.catalog-item__mask');
    var maskColor = mask.data('mask');

    if (maskColor !== undefined) {
      mask.css('background-color', maskColors[maskColor]);
    }
  }); // Catalog UI
  // Change Product Color
  // Change Product Color

  $('.catalog-item__color').on('click', function (e) {
    e.preventDefault();
    var el = $(this);
    var parent = el.parent().parent();
    var collection = parent.find(state.items);
    var flagPage = el.parents('.catalog-item').length ? true : false;
    var data = false;
    var picture;

    if (jsonDataOffers) {
      data = jsonDataOffers[el.data('id')];
    }

    console.log(data);

    if (flagPage) {
      // SECTION
      var material = el.parents('.catalog-item').find('.catalog-item__material');
      picture = el.parents('.catalog-item').find('.catalog-item__img img');
      material.text(data.COLOR_DOOR.UNDERCOVER);
      picture.attr('src', data.PREVIEW_PICTURE);
    } else {
      // ELEMENT
      var parentEl = el.parents('.product-variant');
      var parentCoast = $('.product-cost');
      var price = parentEl.find('.product-variant__card-price span:not(.product-variant__card-oldprice)');
      var priceCoast = parentCoast.find('.product-cost__price-number');
      var priceOld = parentEl.find('.product-variant__card-price span.product-variant__card-oldprice');

      var _material = parentEl.find('.product-variant__name');

      var zakaz = parentEl.find('.product-variant__order');
      var shop = parentEl.find('.product-variant__card-description');
      var polotno = parentCoast.find('.product-cost__table-row.polotno');
      var korobka = parentCoast.find('.product-cost__table-row.korobka');
      var nalichniki = parentCoast.find('.product-cost__table-row.nalichniki');
      var furniture = parentCoast.find('.product-cost__table-row.furniture');
      var vrezka = parentCoast.find('.product-cost__table-row.vrezka');
      var dekor = parentCoast.find('.product-cost__table-row.dekor');
      picture = parentEl.find('img.product-variant__img');
      price.text(data.PRICE + ' рублей');
      priceCoast.text(data.PRICE + ' рублей');

      if (data.PRICE_OLD) {
        priceOld.text(data.PRICE_OLD + ' рублей');
        priceOld.removeClass('d-none');
      } else {
        priceOld.text('');
        priceOld.addClass('d-none');
      }

      _material.text(data.COLOR_DOOR.UNDERCOVER + ', ' + data.COLOR_DOOR.COLOR);

      zakaz.text('Под заказ до ' + data.COUNT_DAYS + ' дней');

      if (data.SHOPS) {
        shop.find('span').text(data.SHOPS);
        shop.removeClass('d-none');
      } else {
        shop.find('span').text('');
        shop.addClass('d-none');
      }

      polotno.find('.number').text(data.PRICES.POLOTNO);
      korobka.find('.number').text(data.PRICES.KOROBKA);

      if (data.PRICES.NALICHNIKI) {
        nalichniki.find('.number').text(data.PRICES.NALICHNIKI);
        nalichniki.removeClass('d-none');
      } else {
        nalichniki.find('.number').text('');
        nalichniki.addClass('d-none');
      }

      furniture.find('.number').text(data.PRICES.FURNITURE);
      vrezka.find('.number').text(data.PRICES.VREZKA);

      if (data.PRICES.DEKOR) {
        dekor.find('.number').text(data.PRICES.DEKOR);
        dekor.removeClass('d-none');
      } else {
        dekor.find('.number').text('');
        dekor.addClass('d-none');
      }

      picture.attr('src', data.PREVIEW_PICTURE);
    }

    if (!el.hasClass(state.active)) {
      collection.removeClass(state.active);
      el.addClass(state.active);
    }
  }); // Collection Cost Slider
  // Scroll Cost Block

  /*    $(window).scroll(function() {
          var middle = $('.product-cost__slide--middle').offset();
          if ($(this).scrollTop() > middle.top) {
              productCostInvisible.trigger('next.owl.carousel');
  
              // Invisible Door
              $('.product-cost__invisible--big').fadeOut(300);
              $('.product-cost__invisible--small').fadeOut(300);
              $('.product-cost__invisible--middle').fadeIn(300);
  
              // Product Card
              $('.product-cost__img-door--first-line').fadeOut(300);
              $('.product-cost__img-door--second-line').fadeOut(300);
              $('.product-cost__img-door--third-line').fadeIn(300);
              $('.product-cost__img-door--fourth-line').fadeIn(300);
          }
          else {
              productCostInvisible.trigger('prev.owl.carousel');
  
              // Invisible Door
              $('.product-cost__invisible--big').fadeIn(300);
              $('.product-cost__invisible--small').fadeIn(300);
              $('.product-cost__invisible--middle').fadeOut(300);
  
              // Product Card
              $('.product-cost__img-door--first-line').fadeIn(300);
              $('.product-cost__img-door--second-line').fadeIn(300);
              $('.product-cost__img-door--third-line').fadeOut(300);
              $('.product-cost__img-door--fourth-line').fadeOut(300);
          }
      });*/
  // Hardware Sly Slider

  var $frame = $('.hardware__slider-wrap');
  var $wrap = $frame.parent();
  $frame.sly({
    horizontal: 1,
    itemNav: 'basic',
    mouseDragging: 1,
    touchDragging: 1,
    scrollBar: $wrap.find('.scrollbar'),
    scrollBy: 1,
    speed: 300,
    elasticBounds: 1,
    easing: 'easeOutExpo',
    dragHandle: 0,
    dynamicHandle: false
  }); // Review Container

  var reviewArrow = "<svg width=\"11\" height=\"8\" viewBox=\"0 0 11 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.97631 4.7308 0.659728 4.53553 0.464466C4.34027 0.269203 4.02369 0.269203 3.82843 0.464465L0.646446 3.64645ZM11 3.5L1 3.5L1 4.5L11 4.5L11 3.5Z\"/>\n</svg>";
  $('.reviews__container').owlCarousel({
    items: 3,
    loop: false,
    margin: 173,
    nav: true,
    navText: [reviewArrow, reviewArrow]
  }); // Review

  $('.recently-viewed__container').owlCarousel({
    items: 3,
    loop: false,
    autoWidth: true,
    navText: [reviewArrow, reviewArrow]
  }); // Header Filter Menu

  var list = $('.main-filter__list');
  var listWidth = list.width();
  var row = $('.main-filter__row');
  var widthRow = row.width();
  var balance = widthRow - listWidth;
  var filterSection = $('.main-filter');

  if (balance <= 30 && balance >= 10) {
    filterSection.addClass('main-filter--last-child-width ');
  }

  if (balance < 10) {
    filterSection.addClass('main-filter--slider-active');
    $('.main-filter__row').addClass('with');

    var _$frame = $('.main-filter__list-wrap');

    var _$wrap = _$frame.parent();

    _$frame.sly({
      horizontal: 1,
      itemNav: 'basic',
      mouseDragging: 1,
      touchDragging: 1,
      scrollBar: _$wrap.find('.scrollbar'),
      scrollBy: 1,
      speed: 300,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: false
    }, {
      moveEnd: function moveEnd() {
        var scrollWidth = $('.scrollbar').width();
        var handle = $('.handle').css('transform');
        var transX = handle.match(/matrix\(\d+, ?\d+, ?\d+, ?\d+, ?(\d+)/)[1];
        var res = scrollWidth - transX;

        if (res < 110) {
          $('.main-filter__row').removeClass('with');
        } else {
          $('.main-filter__row').addClass('with');
        }
      }
    });
  }
  /* if (document.documentElement.clientWidth < 1389) {
          document.querySelector("meta[name=viewport]").setAttribute(
              'content',
              'width=1390');
   };*/
  // Disable Colors Link


  $('.catalog-item__colors').on('click', function (e) {
    e.preventDefault();
  });
});