"use strict";

$(function () {
  // Fix Height strengthen-protection block
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
  $('.strengthen-protection__second-product .strengthen-protection__second-text__overflow').height(maxHeight);
  console.dir(maxHeight); // entrance-variant, Tabs

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
    $('.create-modal').fadeOut(300);
    $('body').removeClass('fixed');
  });
  $('.create-modal__wrap').on('click', function (e) {
    if ($(e.target).hasClass("create-modal__wrap")) {
      $('.create-modal').fadeOut(300);
      $('body').removeClass('fixed');
    }
  }); //End of create, Gallery
  // create, Choose

  $('.entrance-choose__tabs-item').on('click', function () {
    var self = $(this);
    var tabs = $('[data-choose-entrance-tab]');
    var activeTabNumber = self.data('choose-entrance-tab');
    var blockCollection = $("[data-choose-entrance-block]");
    var activeBlock = $("[data-choose-entrance-block=".concat(activeTabNumber, "]"));

    if (!self.hasClass('active')) {
      tabs.removeClass('active');
      self.addClass('active');
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
  $('.pick-accessories__slider-overflow:first-child').show(); // pick-accessories Sly Slider

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
  }).setPin("#pinContainer").setTween(wipeAnimation).addTo(controller); // define movement of panels
  // change-modern modal

  $('.change-modern__door').on('click', function () {
    $('body').addClass('fixed');
    $('.create-modal').fadeIn();
    var source = $(this).find('.change-modern__door-img').attr('src');
    $('.create-modal__wrap').addClass('change-modern--modal');
    $('.create-modal__wrap img').attr('src', source);
  }); // End of change-modern modal
});