"use strict";

function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(t, e) {
  for (var i = 0; i < e.length; i++) {
    var s = e[i];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
  }
}

function _createClass(t, e, i) {
  return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t;
}

var Sticky = function () {
  function i() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
    _classCallCheck(this, i), this.selector = t, this.elements = [], this.version = "1.2.2", this.vp = this.getViewportSize(), this.body = document.querySelector("body"), this.options = {
      wrap: e.wrap || !1,
      marginTop: e.marginTop || 0,
      stickyFor: e.stickyFor || 0,
      stickyClass: e.stickyClass || null,
      stickyContainer: e.stickyContainer || "body"
    }, this.updateScrollTopPosition = this.updateScrollTopPosition.bind(this), this.updateScrollTopPosition(), window.addEventListener("load", this.updateScrollTopPosition), window.addEventListener("scroll", this.updateScrollTopPosition), this.run();
  }

  return _createClass(i, [{
    key: "run",
    value: function value() {
      var e = this,
          i = setInterval(function () {
        if ("complete" === document.readyState) {
          clearInterval(i);
          var t = document.querySelectorAll(e.selector);
          e.forEach(t, function (t) {
            return e.renderElement(t);
          });
        }
      }, 10);
    }
  }, {
    key: "renderElement",
    value: function value(t) {
      var e = this;
      t.sticky = {}, t.sticky.active = !1, t.sticky.marginTop = parseInt(t.getAttribute("data-margin-top")) || this.options.marginTop, t.sticky.stickyFor = parseInt(t.getAttribute("data-sticky-for")) || this.options.stickyFor, t.sticky.stickyClass = t.getAttribute("data-sticky-class") || this.options.stickyClass, t.sticky.wrap = !!t.hasAttribute("data-sticky-wrap") || this.options.wrap, t.sticky.stickyContainer = this.options.stickyContainer, t.sticky.container = this.getStickyContainer(t), t.sticky.container.rect = this.getRectangle(t.sticky.container), t.sticky.rect = this.getRectangle(t), "img" === t.tagName.toLowerCase() && (t.onload = function () {
        return t.sticky.rect = e.getRectangle(t);
      }), t.sticky.wrap && this.wrapElement(t), this.activate(t);
    }
  }, {
    key: "wrapElement",
    value: function value(t) {
      t.insertAdjacentHTML("beforebegin", "<span></span>"), t.previousSibling.appendChild(t);
    }
  }, {
    key: "activate",
    value: function value(t) {
      t.sticky.rect.top + t.sticky.rect.height < t.sticky.container.rect.top + t.sticky.container.rect.height && t.sticky.stickyFor < this.vp.width && !t.sticky.active && (t.sticky.active = !0), this.elements.indexOf(t) < 0 && this.elements.push(t), t.sticky.resizeEvent || (this.initResizeEvents(t), t.sticky.resizeEvent = !0), t.sticky.scrollEvent || (this.initScrollEvents(t), t.sticky.scrollEvent = !0), this.setPosition(t);
    }
  }, {
    key: "initResizeEvents",
    value: function value(t) {
      var e = this;
      t.sticky.resizeListener = function () {
        return e.onResizeEvents(t);
      }, window.addEventListener("resize", t.sticky.resizeListener);
    }
  }, {
    key: "destroyResizeEvents",
    value: function value(t) {
      window.removeEventListener("resize", t.sticky.resizeListener);
    }
  }, {
    key: "onResizeEvents",
    value: function value(t) {
      this.vp = this.getViewportSize(), t.sticky.rect = this.getRectangle(t), t.sticky.container.rect = this.getRectangle(t.sticky.container), t.sticky.rect.top + t.sticky.rect.height < t.sticky.container.rect.top + t.sticky.container.rect.height && t.sticky.stickyFor < this.vp.width && !t.sticky.active ? t.sticky.active = !0 : (t.sticky.rect.top + t.sticky.rect.height >= t.sticky.container.rect.top + t.sticky.container.rect.height || t.sticky.stickyFor >= this.vp.width && t.sticky.active) && (t.sticky.active = !1), this.setPosition(t);
    }
  }, {
    key: "initScrollEvents",
    value: function value(t) {
      var e = this;
      t.sticky.scrollListener = function () {
        return e.onScrollEvents(t);
      }, window.addEventListener("scroll", t.sticky.scrollListener);
    }
  }, {
    key: "destroyScrollEvents",
    value: function value(t) {
      window.removeEventListener("scroll", t.sticky.scrollListener);
    }
  }, {
    key: "onScrollEvents",
    value: function value(t) {
      t.sticky.active && this.setPosition(t);
    }
  }, {
    key: "setPosition",
    value: function value(t) {
      this.css(t, {
        position: "",
        width: "",
        top: "",
        left: ""
      }), this.vp.height < t.sticky.rect.height || !t.sticky.active || (t.sticky.rect.width || (t.sticky.rect = this.getRectangle(t)), t.sticky.wrap && this.css(t.parentNode, {
        display: "block",
        width: t.sticky.rect.width + "px",
        height: t.sticky.rect.height + "px"
      }), 0 === t.sticky.rect.top && t.sticky.container === this.body ? this.css(t, {
        position: "fixed",
        top: t.sticky.rect.top + "px",
        left: t.sticky.rect.left + "px",
        width: t.sticky.rect.width + "px"
      }) : this.scrollTop > t.sticky.rect.top - t.sticky.marginTop ? (this.css(t, {
        position: "fixed",
        width: t.sticky.rect.width + "px",
        left: t.sticky.rect.left + "px"
      }), this.scrollTop + t.sticky.rect.height + t.sticky.marginTop > t.sticky.container.rect.top + t.sticky.container.offsetHeight ? (t.sticky.stickyClass && t.classList.remove(t.sticky.stickyClass), this.css(t, {
        top: t.sticky.container.rect.top + t.sticky.container.offsetHeight - (this.scrollTop + t.sticky.rect.height) + "px"
      })) : (t.sticky.stickyClass && t.classList.add(t.sticky.stickyClass), this.css(t, {
        top: t.sticky.marginTop + "px"
      }))) : (t.sticky.stickyClass && t.classList.remove(t.sticky.stickyClass), this.css(t, {
        position: "",
        width: "",
        top: "",
        left: ""
      }), t.sticky.wrap && this.css(t.parentNode, {
        display: "",
        width: "",
        height: ""
      })));
    }
  }, {
    key: "update",
    value: function value() {
      var e = this;
      this.forEach(this.elements, function (t) {
        t.sticky.rect = e.getRectangle(t), t.sticky.container.rect = e.getRectangle(t.sticky.container), e.activate(t), e.setPosition(t);
      });
    }
  }, {
    key: "destroy",
    value: function value() {
      var e = this;
      window.removeEventListener("load", this.updateScrollTopPosition), window.removeEventListener("scroll", this.updateScrollTopPosition), this.forEach(this.elements, function (t) {
        e.destroyResizeEvents(t), e.destroyScrollEvents(t), delete t.sticky;
      });
    }
  }, {
    key: "getStickyContainer",
    value: function value(t) {
      for (var e = t.parentNode; !e.hasAttribute("data-sticky-container") && !e.parentNode.querySelector(t.sticky.stickyContainer) && e !== this.body;) {
        e = e.parentNode;
      }

      return e;
    }
  }, {
    key: "getRectangle",
    value: function value(t) {
      this.css(t, {
        position: "",
        width: "",
        top: "",
        left: ""
      });

      for (var e = Math.max(t.offsetWidth, t.clientWidth, t.scrollWidth), i = Math.max(t.offsetHeight, t.clientHeight, t.scrollHeight), s = 0, n = 0; s += t.offsetTop || 0, n += t.offsetLeft || 0, t = t.offsetParent;) {
        ;
      }

      return {
        top: s,
        left: n,
        width: e,
        height: i
      };
    }
  }, {
    key: "getViewportSize",
    value: function value() {
      return {
        width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      };
    }
  }, {
    key: "updateScrollTopPosition",
    value: function value() {
      this.scrollTop = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0) || 0;
    }
  }, {
    key: "forEach",
    value: function value(t, e) {
      for (var i = 0, s = t.length; i < s; i++) {
        e(t[i]);
      }
    }
  }, {
    key: "css",
    value: function value(t, e) {
      for (var i in e) {
        e.hasOwnProperty(i) && (t.style[i] = e[i]);
      }
    }
  }]), i;
}();

!function (t, e) {
  "undefined" != typeof exports ? module.exports = e : "function" == typeof define && define.amd ? define([], function () {
    return e;
  }) : t.Sticky = e;
}(void 0, Sticky);