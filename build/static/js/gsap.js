"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! ScrollMagic v2.0.7 | (c) 2019 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function (e, n) {
  "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], n) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? (require("gsap"), n(require("scrollmagic"), TweenMax, TimelineMax)) : n(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.TweenMax || e.TweenLite, e.TimelineMax || e.TimelineLite);
}(void 0, function (e, s, u) {
  "use strict";

  e.Scene.addOption("tweenChanges", !1, function (e) {
    return !!e;
  }), e.Scene.extend(function () {
    var i,
        o = this;
    o.on("progress.plugin_gsap", function () {
      a();
    }), o.on("destroy.plugin_gsap", function (e) {
      o.removeTween(e.reset);
    });

    var a = function a() {
      if (i) {
        var e = o.progress(),
            n = o.state();
        i.repeat && -1 === i.repeat() ? "DURING" === n && i.paused() ? i.play() : "DURING" === n || i.paused() || i.pause() : e != i.progress() && (0 === o.duration() ? 0 < e ? i.play() : i.reverse() : o.tweenChanges() && i.tweenTo ? i.tweenTo(e * i.duration()) : i.progress(e).pause());
      }
    };

    o.setTween = function (e, n, r) {
      var t;
      1 < arguments.length && (arguments.length < 3 && (r = n, n = 1), e = s.to(e, n, r));

      try {
        (t = u ? new u({
          smoothChildTiming: !0
        }).add(e) : e).pause();
      } catch (e) {
        return o;
      }

      return i && o.removeTween(), i = t, e.repeat && -1 === e.repeat() && (i.repeat(-1), i.yoyo(e.yoyo())), a(), o;
    }, o.removeTween = function (e) {
      return i && (e && i.progress(0).pause(), i.kill(), i = void 0), o;
    };
  });
});