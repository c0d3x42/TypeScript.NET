/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
!function(e,t){if("object"==typeof module&&"object"==typeof module.exports){var o=t(require,exports);void 0!==o&&(module.exports=o)}else"function"==typeof define&&define.amd&&define(e,t)}(["require","exports"],function(e,t){"use strict";function o(e,t,o,n){if(!o)throw"Must provide Promise constructor.  Try injecting Promise using awaiter.factory(PromiseConstructorLike).";return new o(function(r,i){function u(e){try{f(a.next(e))}catch(t){i(t)}}function c(e){try{f(a["throw"](e))}catch(t){i(t)}}function f(e){e.done?r(e.value):new o(function(t){t(e.value)}).then(u,c)}var a=n=n.apply(e,t);f(a.next())})}t.awaiter=o,Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o});
//# sourceMappingURL=awaiter.js.map