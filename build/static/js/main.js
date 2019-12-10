"use strict";

$(document).ready(function () {
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

  var productCostInvisible = $('.product-cost-right__slider');
  productCostInvisible.owlCarousel({
    items: 1,
    loop: false,
    nav: false,
    dots: false,
    margin: 10,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp'
  }); // Scroll Cost Block

  $(window).scroll(function () {
    var middle = $('.product-cost__slide--middle').offset();

    if ($(this).scrollTop() > middle.top) {
      productCostInvisible.trigger('next.owl.carousel');
      $('.product-cost__invisible--big').fadeOut(300);
      $('.product-cost__invisible--small').fadeOut(300);
      $('.product-cost__invisible--middle').fadeIn(300);
    } else {
      productCostInvisible.trigger('prev.owl.carousel');
      $('.product-cost__invisible--big').fadeIn(300);
      $('.product-cost__invisible--small').fadeIn(300);
      $('.product-cost__invisible--middle').fadeOut(300);
    }
  }); // Hardware Sly Slider

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
    dragHandle: 1,
    dynamicHandle: false
  }); // Review Container

  var reviewArrow = "<svg width=\"11\" height=\"8\" viewBox=\"0 0 11 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.97631 4.7308 0.659728 4.53553 0.464466C4.34027 0.269203 4.02369 0.269203 3.82843 0.464465L0.646446 3.64645ZM11 3.5L1 3.5L1 4.5L11 4.5L11 3.5Z\"/>\n</svg>";
  $('.reviews__container').owlCarousel({
    items: 3,
    loop: false,
    margin: 173,
    nav: true,
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
    });
  }

  if (document.documentElement.clientWidth < 1300) {
    document.querySelector("meta[name=viewport]").setAttribute('content', 'width=1450');
  }

  ;
});