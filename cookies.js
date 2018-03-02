"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cookies = function () {
  function Cookies() {
    _classCallCheck(this, Cookies);
  }

  _createClass(Cookies, null, [{
    key: "set",
    value: function set(name, value, config) {
      var opts = _extends({
        source: null,
        path: '/'
      }, config);
      opts.source = !opts.source ? document : opts.source;

      var c = name + "=" + value + ";";
      if (opts.days) {
        var d = new Date();
        d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * opts.days);
        c += "expires=" + d.toGMTString() + ";";
      }
      if (opts.path) {
        c += "path=" + opts.path + ";";
      }
      opts.source.cookie = c;
    }
  }, {
    key: "get",
    value: function get(name, config) {
      var opts = _extends({
        source: null
      }, config);
      opts.source = !opts.source ? document : opts.source;

      var v = opts.source.cookie && opts.source.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
      return v ? v[2] : null;
    }
  }, {
    key: "delete",
    value: function _delete(name, config) {
      var opts = _extends({
        source: null
      }, config);
      opts.source = !opts.source ? document : opts.source;

      this.set(name, '', {
        days: -1,
        source: opts.source
      });
    }
  }]);

  return Cookies;
}();

exports.default = Cookies;
//# sourceMappingURL=cookies.js.map