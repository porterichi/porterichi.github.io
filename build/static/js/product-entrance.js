"use strict";

$(function () {
  // New Glass color picker
  $('.product-variant__new-color').on('click', function () {
    if (!$(this).hasClass('active')) {
      $(this).closest('.product-variant__new-colors').find('.product-variant__new-color').removeClass('active');
      $(this).addClass('active');
    }
  }); // entrance-choose__material-img modal

  $('.entrance-choose__material-item').on('click', function () {
    $('body').addClass('fixed');
    $('.create-modal').fadeIn(0);
    $(this).addClass('active-img');
    var popUp = $('.create-modal__wrap-bg');
    popUp.addClass('owl-carousel');
    popUp.empty();
    $('.create-modal__wrap').addClass('change-modern--modal');
    var collect = $(this).closest('.entrance-choose-tabs').find('img');
    var activeIndex = 0;
    collect.each(function (i, e) {
      var isActive = $(e).closest('.entrance-choose__material-item').hasClass('active-img');
      var material = $(e).closest('.entrance-choose__material-item').find('.entrance-choose__material-model').text();
      var name = $(e).closest('.entrance-choose__material-item').find('.entrance-choose__material-name').text();

      if (isActive) {
        var _source = $(e).attr('src');

        popUp.append("<img data-material='".concat(name, ", ").concat(material, "' src='").concat(_source, "'  alt='' data-img-index=").concat(i, "> "));
        activeIndex = i;
        $('.create-modal__material').text("".concat(name, ", ").concat(material));
        return true;
      }

      var source = $(e).attr('src');
      popUp.append("<img data-material='".concat(name, ", ").concat(material, "'  src='").concat(source, "'  alt='' data-img-index=").concat(i, "> "));
    });
    var leftArrow = "<svg width=\"32\" height=\"62\" viewBox=\"0 0 32 62\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M31 61L1 31L31 1\" stroke=\"#868686\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>";
    var rightArrow = "<svg width=\"32\" height=\"62\" viewBox=\"0 0 32 62\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M1 61L31 31L1 1\" stroke=\"#868686\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>";
    popUp.owlCarousel({
      items: 1,
      startPosition: activeIndex,
      nav: true,
      navText: [leftArrow, rightArrow]
    });
    popUp.on('changed.owl.carousel', function (property) {
      var current = property.item.index;
      var material = $(property.target).find(".owl-item").eq(current).find("img").data('material');
      $('.create-modal__material').text(material);
    });
  }); // End of entrance-choose__material-img modal
  // Outside transform door

  $('.product-concept__outside-right').on('click', function () {
    $(this).toggleClass('active');
    $('.product-concept__outside-descr.in').toggle();
    $('.product-concept__outside-descr.out').toggle();
  }); // Fix Height strengthen-protection block

  var strengthenHeightArr = [];
  $('.strengthen-protection__second-product').each(function (i, el) {
    var textBlocks = $(this).find('.strengthen-protection__second-text');
    var summBlockHeight = 0;
    textBlocks.each(function () {
      summBlockHeight += $(this).height();
    });
    return strengthenHeightArr.push(summBlockHeight);
  });
  var maxHeight = Math.max.apply(Math, strengthenHeightArr);
  $('.strengthen-protection__second-product .strengthen-protection__second-text__overflow').height(maxHeight); // entrance-variant, Tabs

  $('.entrance-variant__tabs-item').on('click', function () {
    var itemData = $(this).data('variant-entrance');
    var blocksCollection = $('[data-variant-entrance-block]');
    var activeBlock = $("[data-variant-entrance-block=".concat(itemData, "]"));
    blocksCollection.fadeOut();
    activeBlock.fadeIn(300);
    $('.entrance-variant__tabs-item').removeClass('active');
    $(this).addClass('active');
  }); // End of entrance-variant, Tabs
  // strengthen-protection, Tabs

  $('.strengthen-protection__list-item').on('click', function () {
    var self = $(this);
    var tabs = $('[data-strengthen-tabs]');
    var activeTabNumber = self.data('strengthen-tabs');
    var blockCollection = $("[data-strengthen-protection]");
    var activeBlock = $("[data-strengthen-protection=".concat(activeTabNumber, "]"));

    if (!self.hasClass('active')) {
      tabs.removeClass('active');
      self.addClass('active');
      blockCollection.hide();
      activeBlock.fadeIn(300);
      activeBlock.css('display', 'flex');
    }
  }); // End of strengthen-protection, Tabs
  // create, Gallery

  $('.create__gallery').on('click', function () {
    $('body').addClass('fixed');
    $('.create-modal').fadeIn();
    var source = $(this).attr('src');
    $('.create-modal__wrap img').attr('src', source);
    $('.create-modal__wrap').removeClass('change-modern--modal');
  });
  $('.create-modal__close').on('click', function () {
    $('.create-modal').fadeOut(0);
    $('body').removeClass('fixed');
    $('.entrance-choose__material-item').removeClass('active-img');
    var popUp = $('.create-modal__wrap-bg');
    $('.create-modal__material').empty();
    popUp.owlCarousel('destroy');
    popUp.empty();
    popUp.removeClass('owl-carousel');
    popUp.append('<img src="", alt="">');
  });
  /*$('.create-modal__wrap').on('click', function(e) {
      if($(e.target).hasClass("create-modal__wrap")) {
          $('.create-modal').fadeOut(300);
          $('body').removeClass('fixed');
      }
    });*/
  //End of create, Gallery
  // create, Choose

  $('.entrance-choose__tabs-item').on('click', function () {
    var self = $(this);
    var tabs = $('[data-choose-entrance-tab]');
    var activeTabNumber = self.data('choose-entrance-tab');
    var blockCollection = $("[data-choose-entrance-block]");
    var activeBlock = $("[data-choose-entrance-block=".concat(activeTabNumber, "]"));

    if (!self.hasClass('active')) {
      tabs.removeClass('active');
      self.addClass('active'); // Scroll to the top of block

      $('html, body').animate({
        scrollTop: $(".entrance-choose").offset().top
      }, 800);
      blockCollection.hide();
      activeBlock.fadeIn(300);
    }
  }); //End of Choose
  // pick-accessories Sly Slider

  /*var $frame = $('.pick-accessories__slider-wrap');
  var $wrap = $frame.parent();
          $frame.sly({
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

  $('.pick-accessories__slider-overflow').hide();
  $('.pick-accessories__slider-overflow:first-child').show();

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var $frame = $('.strengthen-protection__slider-wrap');
    var $wrap = $frame.parent();
    $frame.sly({
      horizontal: 1,
      itemNav: 'basic',
      smart: 1,
      activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      scrollBy: 0,
      speed: 300,
      releaseSwing: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      elasticBounds: 1,
      dynamicHandle: true
    });
  } else {
    // pick-accessories Sly Slider
    var controller = new ScrollMagic.Controller(); // define movement of panels

    var wipeAnimation = new TimelineMax() // animate to second panel
    // move back in 3D space
    .to("#slideContainer", 1, {
      x: -2671
    }); // move in to first panel
    // create scene to pin and link animation

    new ScrollMagic.Scene({
      triggerElement: "#pinContainer",
      triggerHook: "onLeave",
      duration: "250%",
      offset: -75
    }).setPin("#pinContainer").setTween(wipeAnimation).addTo(controller);
  } // define movement of panels
  // change-modern modal


  $('.change-modern__door').on('click', function () {
    $('body').addClass('fixed');
    $('.create-modal').fadeIn();
    var source = $(this).find('.change-modern__door-img').attr('src');
    $('.create-modal__wrap').addClass('change-modern--modal');
    $('.create-modal__wrap img').attr('src', source);
  }); // End of change-modern modal
});