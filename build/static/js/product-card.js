"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

$(function () {
  // jQuery Mask Plugin v1.14.16
  // github.com/igorescobar/jQuery-Mask-Plugin
  var $jscomp = $jscomp || {};
  $jscomp.scope = {};

  $jscomp.findInternal = function (a, n, f) {
    a instanceof String && (a = String(a));

    for (var p = a.length, k = 0; k < p; k++) {
      var b = a[k];
      if (n.call(f, b, k, a)) return {
        i: k,
        v: b
      };
    }

    return {
      i: -1,
      v: void 0
    };
  };

  $jscomp.ASSUME_ES5 = !1;
  $jscomp.ASSUME_NO_NATIVE_MAP = !1;
  $jscomp.ASSUME_NO_NATIVE_SET = !1;
  $jscomp.SIMPLE_FROUND_POLYFILL = !1;
  $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, n, f) {
    a != Array.prototype && a != Object.prototype && (a[n] = f.value);
  };

  $jscomp.getGlobal = function (a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a;
  };

  $jscomp.global = $jscomp.getGlobal(this);

  $jscomp.polyfill = function (a, n, f, p) {
    if (n) {
      f = $jscomp.global;
      a = a.split(".");

      for (p = 0; p < a.length - 1; p++) {
        var k = a[p];
        k in f || (f[k] = {});
        f = f[k];
      }

      a = a[a.length - 1];
      p = f[a];
      n = n(p);
      n != p && null != n && $jscomp.defineProperty(f, a, {
        configurable: !0,
        writable: !0,
        value: n
      });
    }
  };

  $jscomp.polyfill("Array.prototype.find", function (a) {
    return a ? a : function (a, f) {
      return $jscomp.findInternal(this, a, f).v;
    };
  }, "es6", "es3");

  (function (a, n, f) {
    "function" === typeof define && define.amd ? define(["jquery"], a) : "object" === (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" === typeof Meteor ? module.exports = a(require("jquery")) : a(n || f);
  })(function (a) {
    var n = function n(b, d, e) {
      var c = {
        invalid: [],
        getCaret: function getCaret() {
          try {
            var a = 0,
                r = b.get(0),
                h = document.selection,
                d = r.selectionStart;

            if (h && -1 === navigator.appVersion.indexOf("MSIE 10")) {
              var e = h.createRange();
              e.moveStart("character", -c.val().length);
              a = e.text.length;
            } else if (d || "0" === d) a = d;

            return a;
          } catch (C) {}
        },
        setCaret: function setCaret(a) {
          try {
            if (b.is(":focus")) {
              var c = b.get(0);
              if (c.setSelectionRange) c.setSelectionRange(a, a);else {
                var g = c.createTextRange();
                g.collapse(!0);
                g.moveEnd("character", a);
                g.moveStart("character", a);
                g.select();
              }
            }
          } catch (B) {}
        },
        events: function events() {
          b.on("keydown.mask", function (a) {
            b.data("mask-keycode", a.keyCode || a.which);
            b.data("mask-previus-value", b.val());
            b.data("mask-previus-caret-pos", c.getCaret());
            c.maskDigitPosMapOld = c.maskDigitPosMap;
          }).on(a.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", c.behaviour).on("paste.mask drop.mask", function () {
            setTimeout(function () {
              b.keydown().keyup();
            }, 100);
          }).on("change.mask", function () {
            b.data("changed", !0);
          }).on("blur.mask", function () {
            f === c.val() || b.data("changed") || b.trigger("change");
            b.data("changed", !1);
          }).on("blur.mask", function () {
            f = c.val();
          }).on("focus.mask", function (b) {
            !0 === e.selectOnFocus && a(b.target).select();
          }).on("focusout.mask", function () {
            e.clearIfNotMatch && !k.test(c.val()) && c.val("");
          });
        },
        getRegexMask: function getRegexMask() {
          for (var a = [], b, c, e, t, f = 0; f < d.length; f++) {
            (b = l.translation[d.charAt(f)]) ? (c = b.pattern.toString().replace(/.{1}$|^.{1}/g, ""), e = b.optional, (b = b.recursive) ? (a.push(d.charAt(f)), t = {
              digit: d.charAt(f),
              pattern: c
            }) : a.push(e || b ? c + "?" : c)) : a.push(d.charAt(f).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
          }

          a = a.join("");
          t && (a = a.replace(new RegExp("(" + t.digit + "(.*" + t.digit + ")?)"), "($1)?").replace(new RegExp(t.digit, "g"), t.pattern));
          return new RegExp(a);
        },
        destroyEvents: function destroyEvents() {
          b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "));
        },
        val: function val(a) {
          var c = b.is("input") ? "val" : "text";

          if (0 < arguments.length) {
            if (b[c]() !== a) b[c](a);
            c = b;
          } else c = b[c]();

          return c;
        },
        calculateCaretPosition: function calculateCaretPosition(a) {
          var d = c.getMasked(),
              h = c.getCaret();

          if (a !== d) {
            var e = b.data("mask-previus-caret-pos") || 0;
            d = d.length;
            var g = a.length,
                f = a = 0,
                l = 0,
                k = 0,
                m;

            for (m = h; m < d && c.maskDigitPosMap[m]; m++) {
              f++;
            }

            for (m = h - 1; 0 <= m && c.maskDigitPosMap[m]; m--) {
              a++;
            }

            for (m = h - 1; 0 <= m; m--) {
              c.maskDigitPosMap[m] && l++;
            }

            for (m = e - 1; 0 <= m; m--) {
              c.maskDigitPosMapOld[m] && k++;
            }

            h > g ? h = 10 * d : e >= h && e !== g ? c.maskDigitPosMapOld[h] || (e = h, h = h - (k - l) - a, c.maskDigitPosMap[h] && (h = e)) : h > e && (h = h + (l - k) + f);
          }

          return h;
        },
        behaviour: function behaviour(d) {
          d = d || window.event;
          c.invalid = [];
          var e = b.data("mask-keycode");

          if (-1 === a.inArray(e, l.byPassKeys)) {
            e = c.getMasked();
            var h = c.getCaret(),
                g = b.data("mask-previus-value") || "";
            setTimeout(function () {
              c.setCaret(c.calculateCaretPosition(g));
            }, a.jMaskGlobals.keyStrokeCompensation);
            c.val(e);
            c.setCaret(h);
            return c.callbacks(d);
          }
        },
        getMasked: function getMasked(a, b) {
          var h = [],
              f = void 0 === b ? c.val() : b + "",
              g = 0,
              k = d.length,
              n = 0,
              p = f.length,
              m = 1,
              r = "push",
              u = -1,
              w = 0;
          b = [];

          if (e.reverse) {
            r = "unshift";
            m = -1;
            var x = 0;
            g = k - 1;
            n = p - 1;

            var A = function A() {
              return -1 < g && -1 < n;
            };
          } else x = k - 1, A = function A() {
            return g < k && n < p;
          };

          for (var z; A();) {
            var y = d.charAt(g),
                v = f.charAt(n),
                q = l.translation[y];
            if (q) v.match(q.pattern) ? (h[r](v), q.recursive && (-1 === u ? u = g : g === x && g !== u && (g = u - m), x === u && (g -= m)), g += m) : v === z ? (w--, z = void 0) : q.optional ? (g += m, n -= m) : q.fallback ? (h[r](q.fallback), g += m, n -= m) : c.invalid.push({
              p: n,
              v: v,
              e: q.pattern
            }), n += m;else {
              if (!a) h[r](y);
              v === y ? (b.push(n), n += m) : (z = y, b.push(n + w), w++);
              g += m;
            }
          }

          a = d.charAt(x);
          k !== p + 1 || l.translation[a] || h.push(a);
          h = h.join("");
          c.mapMaskdigitPositions(h, b, p);
          return h;
        },
        mapMaskdigitPositions: function mapMaskdigitPositions(a, b, d) {
          a = e.reverse ? a.length - d : 0;
          c.maskDigitPosMap = {};

          for (d = 0; d < b.length; d++) {
            c.maskDigitPosMap[b[d] + a] = 1;
          }
        },
        callbacks: function callbacks(a) {
          var g = c.val(),
              h = g !== f,
              k = [g, a, b, e],
              l = function l(a, b, c) {
            "function" === typeof e[a] && b && e[a].apply(this, c);
          };

          l("onChange", !0 === h, k);
          l("onKeyPress", !0 === h, k);
          l("onComplete", g.length === d.length, k);
          l("onInvalid", 0 < c.invalid.length, [g, a, b, c.invalid, e]);
        }
      };
      b = a(b);
      var l = this,
          f = c.val(),
          k;
      d = "function" === typeof d ? d(c.val(), void 0, b, e) : d;
      l.mask = d;
      l.options = e;

      l.remove = function () {
        var a = c.getCaret();
        l.options.placeholder && b.removeAttr("placeholder");
        b.data("mask-maxlength") && b.removeAttr("maxlength");
        c.destroyEvents();
        c.val(l.getCleanVal());
        c.setCaret(a);
        return b;
      };

      l.getCleanVal = function () {
        return c.getMasked(!0);
      };

      l.getMaskedVal = function (a) {
        return c.getMasked(!1, a);
      };

      l.init = function (g) {
        g = g || !1;
        e = e || {};
        l.clearIfNotMatch = a.jMaskGlobals.clearIfNotMatch;
        l.byPassKeys = a.jMaskGlobals.byPassKeys;
        l.translation = a.extend({}, a.jMaskGlobals.translation, e.translation);
        l = a.extend(!0, {}, l, e);
        k = c.getRegexMask();
        if (g) c.events(), c.val(c.getMasked());else {
          e.placeholder && b.attr("placeholder", e.placeholder);
          b.data("mask") && b.attr("autocomplete", "off");
          g = 0;

          for (var f = !0; g < d.length; g++) {
            var h = l.translation[d.charAt(g)];

            if (h && h.recursive) {
              f = !1;
              break;
            }
          }

          f && b.attr("maxlength", d.length).data("mask-maxlength", !0);
          c.destroyEvents();
          c.events();
          g = c.getCaret();
          c.val(c.getMasked());
          c.setCaret(g);
        }
      };

      l.init(!b.is("input"));
    };

    a.maskWatchers = {};

    var f = function f() {
      var b = a(this),
          d = {},
          e = b.attr("data-mask");
      b.attr("data-mask-reverse") && (d.reverse = !0);
      b.attr("data-mask-clearifnotmatch") && (d.clearIfNotMatch = !0);
      "true" === b.attr("data-mask-selectonfocus") && (d.selectOnFocus = !0);
      if (p(b, e, d)) return b.data("mask", new n(this, e, d));
    },
        p = function p(b, d, e) {
      e = e || {};
      var c = a(b).data("mask"),
          f = JSON.stringify;
      b = a(b).val() || a(b).text();

      try {
        return "function" === typeof d && (d = d(b)), "object" !== _typeof(c) || f(c.options) !== f(e) || c.mask !== d;
      } catch (w) {}
    },
        k = function k(a) {
      var b = document.createElement("div");
      a = "on" + a;
      var e = a in b;
      e || (b.setAttribute(a, "return;"), e = "function" === typeof b[a]);
      return e;
    };

    a.fn.mask = function (b, d) {
      d = d || {};
      var e = this.selector,
          c = a.jMaskGlobals,
          f = c.watchInterval;
      c = d.watchInputs || c.watchInputs;

      var k = function k() {
        if (p(this, b, d)) return a(this).data("mask", new n(this, b, d));
      };

      a(this).each(k);
      e && "" !== e && c && (clearInterval(a.maskWatchers[e]), a.maskWatchers[e] = setInterval(function () {
        a(document).find(e).each(k);
      }, f));
      return this;
    };

    a.fn.masked = function (a) {
      return this.data("mask").getMaskedVal(a);
    };

    a.fn.unmask = function () {
      clearInterval(a.maskWatchers[this.selector]);
      delete a.maskWatchers[this.selector];
      return this.each(function () {
        var b = a(this).data("mask");
        b && b.remove().removeData("mask");
      });
    };

    a.fn.cleanVal = function () {
      return this.data("mask").getCleanVal();
    };

    a.applyDataMask = function (b) {
      b = b || a.jMaskGlobals.maskElements;
      (b instanceof a ? b : a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(f);
    };

    k = {
      maskElements: "input,td,span,div",
      dataMaskAttr: "*[data-mask]",
      dataMask: !0,
      watchInterval: 300,
      watchInputs: !0,
      keyStrokeCompensation: 10,
      useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && k("input"),
      watchDataMask: !1,
      byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
      translation: {
        0: {
          pattern: /\d/
        },
        9: {
          pattern: /\d/,
          optional: !0
        },
        "#": {
          pattern: /\d/,
          recursive: !0
        },
        A: {
          pattern: /[a-zA-Z0-9]/
        },
        S: {
          pattern: /[a-zA-Z]/
        }
      }
    };
    a.jMaskGlobals = a.jMaskGlobals || {};
    k = a.jMaskGlobals = a.extend(!0, {}, k, a.jMaskGlobals);
    k.dataMask && a.applyDataMask();
    setInterval(function () {
      a.jMaskGlobals.watchDataMask && a.applyDataMask();
    }, k.watchInterval);
  }, window.jQuery, window.Zepto); //  Choose Box Tabs


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

  $('.hardware__slider').owlCarousel({
    items: 3,
    loop: false,
    margin: 15,
    nav: false,
    dots: false,
    scrollbarType: "progress"
  });
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

  var productCostInvisible = $('.product-cost-right__slider');
  productCostInvisible.owlCarousel({
    items: 1,
    loop: false,
    nav: false,
    dots: false,
    margin: 10,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp'
  });
  $('.stained-glass__slider').owlCarousel({
    items: 1,
    loop: false,
    nav: false,
    dots: false,
    margin: 10,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp'
  });
  $(window).scroll(function () {
    var top = $('.product-cost__slider').offset().top + 500;
    var middle = $('.product-cost__slide--middle').offset().top;
    var bottom = $('.product-cost__slide--bottom').offset().top;

    if ($(this).scrollTop() < top) {
      productCostInvisible.trigger('to.owl.carousel', 0); // Invisible Door

      $('.product-cost__invisible--big').fadeOut(300);
      $('.product-cost__invisible--small').fadeOut(300);
      $('.product-cost__invisible--middle').fadeIn(300); // Product Card

      $('.product-cost__img-door--first-line').fadeIn(300);
      $('.product-cost__img-door--second-line').fadeIn(300);
      $('.product-cost__img-door--third-line').fadeOut(300);
      $('.product-cost__img-door--fourth-line').fadeOut(300);
    } else if ($(this).scrollTop() < middle) {
      productCostInvisiblec; // Invisible Door

      $('.product-cost__invisible--big').fadeIn(300);
      $('.product-cost__invisible--small').fadeIn(300);
      $('.product-cost__invisible--middle').fadeOut(300); // Product Card

      $('.product-cost__img-door--first-line').fadeOut(300);
      $('.product-cost__img-door--second-line').fadeOut(300);
      $('.product-cost__img-door--third-line').fadeIn(300);
      $('.product-cost__img-door--fourth-line').fadeIn(300);
    } else if ($(this).scrollTop() < bottom) {
      productCostInvisible.trigger('to.owl.carousel', 2);
      $('.product-cost__img-door--first-line').fadeOut(300);
      $('.product-cost__img-door--second-line').fadeOut(300);
      $('.product-cost__img-door--third-line').fadeOut(300);
      $('.product-cost__img-door--fourth-line').fadeOut(300);
    }
  });
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
  }); // Vitrage Scroll

  var stainedSliders = $('.stained-glass__slide').length;

  var _loop = function _loop(i) {
    $("<div class=\"stained-glass__slide--item\" id=stained-glass-slide-".concat(i, ">")).appendTo('.stained-glass .container');
    new Waypoint({
      element: document.getElementById("stained-glass-slide-".concat(i)),
      handler: function handler() {
        $('.stained-glass__slider').trigger('to.owl.carousel', i);
      }
    });
    var slide = $("[data-stained=".concat(i, "]"));
  };

  for (var i = 0; i < stainedSliders; i++) {
    _loop(i);
  } // Invisible Scroll


  var invisibleSliders = $('.product-cost-right__slide').length;

  var _loop2 = function _loop2(_i) {
    $("<div class=\"product-cost__slide--middle\" id=invisible-slide-".concat(_i, ">")).appendTo('.product-cost__slider');
    new Waypoint({
      element: document.getElementById("invisible-slide-".concat(_i)),
      handler: function handler() {
        console.dir(321);
        productCostInvisible.trigger('to.owl.carousel', _i);
      }
    });
  };

  for (var _i = 0; _i < invisibleSliders; _i++) {
    _loop2(_i);
  } // Phone Mask


  var measurementPhone = $('.measurement__input input');
  measurementPhone.mask("+375 (00) 000-00-00");
});