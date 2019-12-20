"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

$(function () {
  !function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("jquery") : jQuery);
  }(function (a) {
    var b,
        c = navigator.userAgent,
        d = /iphone/i.test(c),
        e = /chrome/i.test(c),
        f = /android/i.test(c);
    a.mask = {
      definitions: {
        9: "[0-9]",
        a: "[A-Za-z]",
        "*": "[A-Za-z0-9]"
      },
      autoclear: !0,
      dataName: "rawMaskFn",
      placeholder: "_"
    }, a.fn.extend({
      caret: function caret(a, b) {
        var c;
        if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function () {
          this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select());
        })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), {
          begin: a,
          end: b
        });
      },
      unmask: function unmask() {
        return this.trigger("unmask");
      },
      mask: function mask(c, g) {
        var h, i, j, k, l, m, n, o;

        if (!c && this.length > 0) {
          h = a(this[0]);
          var p = h.data(a.mask.dataName);
          return p ? p() : void 0;
        }

        return g = a.extend({
          autoclear: a.mask.autoclear,
          placeholder: a.mask.placeholder,
          completed: null
        }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function (a, b) {
          "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null);
        }), this.trigger("unmask").each(function () {
          function h() {
            if (g.completed) {
              for (var a = l; m >= a; a++) {
                if (j[a] && C[a] === p(a)) return;
              }

              g.completed.call(B);
            }
          }

          function p(a) {
            return g.placeholder.charAt(a < g.placeholder.length ? a : 0);
          }

          function q(a) {
            for (; ++a < n && !j[a];) {
              ;
            }

            return a;
          }

          function r(a) {
            for (; --a >= 0 && !j[a];) {
              ;
            }

            return a;
          }

          function s(a, b) {
            var c, d;

            if (!(0 > a)) {
              for (c = a, d = q(b); n > c; c++) {
                if (j[c]) {
                  if (!(n > d && j[c].test(C[d]))) break;
                  C[c] = C[d], C[d] = p(d), d = q(d);
                }
              }

              z(), B.caret(Math.max(l, a));
            }
          }

          function t(a) {
            var b, c, d, e;

            for (b = a, c = p(a); n > b; b++) {
              if (j[b]) {
                if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break;
                c = e;
              }
            }
          }

          function u() {
            var a = B.val(),
                b = B.caret();

            if (o && o.length && o.length > a.length) {
              for (A(!0); b.begin > 0 && !j[b.begin - 1];) {
                b.begin--;
              }

              if (0 === b.begin) for (; b.begin < l && !j[b.begin];) {
                b.begin++;
              }
              B.caret(b.begin, b.begin);
            } else {
              for (A(!0); b.begin < n && !j[b.begin];) {
                b.begin++;
              }

              B.caret(b.begin, b.begin);
            }

            h();
          }

          function v() {
            A(), B.val() != E && B.change();
          }

          function w(a) {
            if (!B.prop("readonly")) {
              var b,
                  c,
                  e,
                  f = a.which || a.keyCode;
              o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault());
            }
          }

          function x(b) {
            if (!B.prop("readonly")) {
              var c,
                  d,
                  e,
                  g = b.which || b.keyCode,
                  i = B.caret();

              if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
                if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                  if (t(c), C[c] = d, z(), e = q(c), f) {
                    var k = function k() {
                      a.proxy(a.fn.caret, B, e)();
                    };

                    setTimeout(k, 0);
                  } else B.caret(e);

                  i.begin <= m && h();
                }

                b.preventDefault();
              }
            }
          }

          function y(a, b) {
            var c;

            for (c = a; b > c && n > c; c++) {
              j[c] && (C[c] = p(c));
            }
          }

          function z() {
            B.val(C.join(""));
          }

          function A(a) {
            var b,
                c,
                d,
                e = B.val(),
                f = -1;

            for (b = 0, d = 0; n > b; b++) {
              if (j[b]) {
                for (C[b] = p(b); d++ < e.length;) {
                  if (c = e.charAt(d - 1), j[b].test(c)) {
                    C[b] = c, f = b;
                    break;
                  }
                }

                if (d > e.length) {
                  y(b + 1, n);
                  break;
                }
              } else C[b] === e.charAt(d) && d++, k > b && (f = b);
            }

            return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l;
          }

          var B = a(this),
              C = a.map(c.split(""), function (a, b) {
            return "?" != a ? i[a] ? p(b) : a : void 0;
          }),
              D = C.join(""),
              E = B.val();
          B.data(a.mask.dataName, function () {
            return a.map(C, function (a, b) {
              return j[b] && a != p(b) ? a : null;
            }).join("");
          }), B.one("unmask", function () {
            B.off(".mask").removeData(a.mask.dataName);
          }).on("focus.mask", function () {
            if (!B.prop("readonly")) {
              clearTimeout(b);
              var a;
              E = B.val(), a = A(), b = setTimeout(function () {
                B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a));
              }, 10);
            }
          }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function () {
            B.prop("readonly") || setTimeout(function () {
              var a = A(!0);
              B.caret(a), h();
            }, 0);
          }), e && f && B.off("input.mask").on("input.mask", u), A();
        });
      }
    });
  }); //  Choose Box Tabs

  var items = $('.choose-box .choose-box__item');
  var tabs = $('.choose-box .choose-box__slide');
  var textBlock = $('.choose-box .choose-box__text-block');
  var section = $('.choose-box');
  items.on('click', function () {
    var itemDataNumber = $(this).data('choose-item');
    var slide = section.find("[data-choose-slide=".concat(itemDataNumber, "]"));

    if (!$(this).hasClass('choose-box__item--active')) {
      items.removeClass('choose-box__item--active');
      $(this).addClass('choose-box__item--active');
      textBlock.fadeOut(0);
      tabs.fadeOut(0);
      slide.fadeIn(300);
    }
  });
  /*let $carousel = $('.hardware__slider').slick({
      variableWidth: true,
      slidesToShow: 1,
      dots: false,
      prevArrow: false,
      nextArrow: false,
      infinite: false
  });*/

  /*    $('.hardware__slider').owlCarousel({
          items: 3,
          loop: false,
          margin: 15,
          nav: false,
          dots: false,
          scrollbarType: "progress"
      });*/

  var slideCount = $('.hardware__slide').length;
  /*$( ".hardware__range" ).slider({
      mode: "fast",
      change: function( event, ui ) {
          let carousel = $carousel.slick( "getSlick" );
          let goToSlide = ui.value * (carousel.slideCount-1) / 5;
          $carousel.slick( "goTo", goToSlide );
          console.dir(goToSlide);
      }
  });*/

  var reviewArrow = "<svg width=\"11\" height=\"8\" viewBox=\"0 0 11 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.97631 4.7308 0.659728 4.53553 0.464466C4.34027 0.269203 4.02369 0.269203 3.82843 0.464465L0.646446 3.64645ZM11 3.5L1 3.5L1 4.5L11 4.5L11 3.5Z\"/>\n</svg>";
  $('.reviews__container').owlCarousel({
    items: 3,
    loop: false,
    margin: 173,
    nav: true,
    navText: [reviewArrow, reviewArrow]
  }); // Change door and color

  var colors = $('.catalog-item__color');
  var doors = $('.product-variant__img');
  colors.on('click', function (e) {
    var el = $(e.currentTarget);
    var activeColorClass = 'catalog-item__color--active';
    var isActive = el.hasClass(activeColorClass);
    var color = el.data('color');
    var door = $("[data-door=".concat(color, "]"));

    if (isActive) {
      return false;
    }

    colors.removeClass(activeColorClass);
    el.addClass(activeColorClass);
    doors.hide();
    door.fadeIn(200);
  }); // Change Counter

  var counterMinus = $('.product-variant__card-minus');
  var counterPlus = $('.product-variant__card-plus');
  var counter = $('.product-variant__card-number');
  var counterNumber = parseInt($('.product-variant__card-number').text());
  counterMinus.on('click', function () {
    if (counterNumber >= 2) {
      counter.text(--counterNumber);
    }
  });
  counterPlus.on('click', function () {
    counter.text(++counterNumber);
  }); // Scroll To

  $(".product-variant__card-cost").click(function () {
    $("body,html").animate({
      scrollTop: $(".product-cost").offset().top
    }, 800 //speed
    );
  });
  /*    // Hot Fix for Desct on mobile
      if (document.documentElement.clientWidth < 1300) {
          document.querySelector("meta[name=viewport]").setAttribute(
              'content',
              'width=1450');
      };*/
  // Cost Slider

  /* let productCostInvisible = $('.product-cost-right__slider');
    productCostInvisible.owlCarousel({
      items: 1,
      loop: false,
      nav: false,
      dots: false,
      margin: 10,
      animateOut: 'slideOutUp',
      animateIn: 'slideInUp'
  });*/

  $('.stained-glass__slider').owlCarousel({
    items: 1,
    loop: false,
    nav: false,
    dots: false,
    margin: 10,
    bgfh: true,
    mouseDrag: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp'
  });
  $('.stained-glass__slider').on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
      $('.stained-glass__slider').trigger('next.owl');
    } else {
      $('.stained-glass__slider').trigger('prev.owl');
    }

    e.preventDefault();
  });
  /*$(window).scroll(function() {
        var top = $('.product-cost__slider').offset().top + 500;
        var middle = $('.product-cost__slide--middle').offset().top;
        var bottom = $('.product-cost__slide--bottom').offset().top;
          if($(this).scrollTop() <  top) {
            productCostInvisible.trigger('to.owl.carousel', 0);
            // Invisible Door
            $('.product-cost__invisible--big').fadeOut(300);
            $('.product-cost__invisible--small').fadeOut(300);
            $('.product-cost__invisible--middle').fadeIn(300);
              // Product Card
            $('.product-cost__img-door--first-line').fadeIn(300);
            $('.product-cost__img-door--second-line').fadeIn(300);
            $('.product-cost__img-door--third-line').fadeOut(300);
            $('.product-cost__img-door--fourth-line').fadeOut(300);
        }
          else if ($(this).scrollTop() <  middle) {
            productCostInvisiblec
            // Invisible Door
            $('.product-cost__invisible--big').fadeIn(300);
            $('.product-cost__invisible--small').fadeIn(300);
            $('.product-cost__invisible--middle').fadeOut(300);
              // Product Card
            $('.product-cost__img-door--first-line').fadeOut(300);
            $('.product-cost__img-door--second-line').fadeOut(300);
            $('.product-cost__img-door--third-line').fadeIn(300);
            $('.product-cost__img-door--fourth-line').fadeIn(300);
        }
        else if ($(this).scrollTop() < bottom ) {
            productCostInvisible.trigger('to.owl.carousel', 2);
              $('.product-cost__img-door--first-line').fadeOut(300);
            $('.product-cost__img-door--second-line').fadeOut(300);
            $('.product-cost__img-door--third-line').fadeOut(300);
            $('.product-cost__img-door--fourth-line').fadeOut(300);
        }
    });*/

  var extrasArrow = "<svg width=\"38\" height=\"74\" viewBox=\"0 0 38 74\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M1 73L37 37L1 1\" stroke=\"#868686\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"; // Extras Pop-up gallery

  $('.extras__link').on('click', function (e) {
    e.preventDefault();
    var popup = $('.extras__popup');
    popup.fadeIn(200);
    popup.css('display', 'flex');
    $('.extras__popup-container').owlCarousel({
      items: 1,
      loop: false,
      nav: true,
      dots: true,
      margin: 10,
      navText: [extrasArrow, extrasArrow]
    });
  });
  $('.extras__popup-close').on('click', function (e) {
    $('.extras__popup').fadeOut(200);
  }); // Product Cost Slider

  var leftProductArrow = "<svg width=\"18\" height=\"13\" viewBox=\"0 0 11 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.97631 4.7308 0.659728 4.53553 0.464466C4.34027 0.269203 4.02369 0.269203 3.82843 0.464465L0.646446 3.64645ZM11 3.5L1 3.5L1 4.5L11 4.5L11 3.5Z\" />\n</svg>\n";
  var rightProductArrow = "<svg width=\"18\" height=\"13\" viewBox=\"0 0 11 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10.3536 4.35356C10.5488 4.15829 10.5488 3.84171 10.3536 3.64645L7.17157 0.464468C6.97631 0.269206 6.65973 0.269206 6.46447 0.464468C6.26921 0.65973 6.26921 0.976313 6.46447 1.17157L9.29289 4L6.46447 6.82843C6.2692 7.02369 6.2692 7.34027 6.46447 7.53554C6.65973 7.7308 6.97631 7.7308 7.17157 7.53554L10.3536 4.35356ZM-1.5299e-07 4.5L10 4.5L10 3.5L1.5299e-07 3.5L-1.5299e-07 4.5Z\"/>\n</svg>\n";

  function setArrows(num) {
    $('[data-product-slide]').hide(200);
    $("[data-product-slide=".concat(num, "]")).show(200);
  }

  $('.product-cost-right__slider').on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }

    var carousel = e.relatedTarget;
    $('.product-cost__block-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
    setArrows(carousel.relative(carousel.current()) + 1);
  }).owlCarousel({
    items: 1,
    loop: false,
    nav: true,
    dots: true,
    margin: 10,
    navText: [leftProductArrow, rightProductArrow]
  }); // Vitrage Scroll

  /*    const stainedSliders = $('.stained-glass__slide').length;
      for (let i = 0; i < stainedSliders; i++) {
         $(`<div class="stained-glass__slide--item" id=stained-glass-slide-${i}>`).appendTo('.stained-glass .container');
          new Waypoint({
              element: document.getElementById(`stained-glass-slide-${i}`),
              handler: function() {
                  $('.stained-glass__slider').trigger('to.owl.carousel', i);
              }
          });
         const slide = $(`[data-stained=${i}]`);
      }*/
  // Invisible Scroll

  /*const invisibleSliders = $('.product-cost-right__slide').length;
  for (let i = 0; i < invisibleSliders; i++) {
      $(`<div class="product-cost__slide--middle" id=invisible-slide-${i}>`).appendTo('.product-cost__slider');
      new Waypoint({
          element: document.getElementById(`invisible-slide-${i}`),
          handler: function() {
              setArrow(i);
              productCostInvisible.trigger('to.owl.carousel', i);
          }
      });
  }*/
  // Set Arrow

  /*    function setArrow(name) {
          let arrows = {
              '0': {
                  'top': $('.product-cost__img-door--first-line'),
                  'bottom': $('.product-cost__img-door--second-line')
              },
              '1': {
                  'top': $('.product-cost__img-door--third-line'),
                  'bottom': $('.product-cost__img-door--fourth-line')
              }
          };
          let allImages = $('.product-cost__img img:not(".product-cost__img-door")');
          // Clear Arrows
          allImages.fadeOut(0);
          let result = arrows[name];
          for(let i in result) {
              result[i].fadeIn(200);
          }
      }*/
  // Phone Mask

  var measurementPhone = $('.measurement__input input');
  measurementPhone.mask("+ 375 99 999-99-99");
  /*let isFixed = false;
  new Waypoint({
      element: document.getElementsByClassName(`product-cost`),
      handler: function() {
          if(!isFixed){
              $('body').addClass('fixed');
              isFixed = true;
              $('.product-cost').on('mousewheel', function(event) {
                  console.log(event.deltaX, event.deltaY, event.deltaFactor);
              });
          } else {
              $('body').removeClass('fixed');
          }
        },
      offset: 'bottom-in-view'
  });*/
});