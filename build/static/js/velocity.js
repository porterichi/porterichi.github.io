"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! ScrollMagic v2.0.7 | (c) 2019 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function (e, i) {
  "function" == typeof define && define.amd ? define(["ScrollMagic", "velocity"], i) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? i(require("scrollmagic"), require("velocity")) : i(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.Velocity || e.jQuery && e.jQuery.Velocity);
}(void 0, function (e, y) {
  "use strict";

  var v = 0;
  e.Scene.extend(function () {
    var o,
        r,
        u,
        n,
        c = this,
        l = e._util,
        i = 0;
    c.on("progress.plugin_velocity", function () {
      f();
    }), c.on("destroy.plugin_velocity", function (e) {
      c.off("*.plugin_velocity"), c.removeVelocity(e.reset);
    });

    var s = function s(e, i, t) {
      l.type.Array(e) ? e.forEach(function (e) {
        s(e, i, t);
      }) : (y.Utilities.data(e, n) || y.Utilities.data(e, n, {
        reverseProps: l.css(e, Object.keys(r))
      }), y(e, i, t), void 0 !== t.queue && y.Utilities.dequeue(e, t.queue));
    },
        a = function a(e, i) {
      if (l.type.Array(e)) e.forEach(function (e) {
        a(e, i);
      });else {
        var t = y.Utilities.data(e, n);
        t && t.reverseProps && (y(e, t.reverseProps, i), void 0 !== i.queue && y.Utilities.dequeue(e, i.queue));
      }
    },
        f = function f() {
      if (o) {
        var e = c.progress();
        e != i && (0 === c.duration() && (0 < e ? s(o, r, u) : a(o, u)), i = e);
      }
    };

    c.setVelocity = function (e, i, t) {
      return o && c.removeVelocity(), o = l.get.elements(e), r = i || {}, n = "ScrollMagic.animation.velocity[" + v++ + "]", void 0 !== (u = t || {}).queue && (u.queue = n + "_queue"), f(), c;
    }, c.removeVelocity = function (e) {
      return o && (void 0 !== u.queue && y(o, "stop", u.queue), e && a(o, {
        duration: 0
      }), o.forEach(function (e) {
        y.Utilities.removeData(e, n);
      }), o = r = u = n = void 0), c;
    };
  });
});