/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ (() => {

window.countdown = countEnd => {
  const diff = Math.floor((countEnd - new Date()) / 1000);
  let days = Math.floor(diff / (60 * 60 * 24)),
    hours = Math.floor((diff - days * 60 * 60 * 24) / 60 / 60),
    minutes = Math.floor((diff - (hours * 60 * 60 + days * 60 * 60 * 24)) / 60),
    seconds = Math.floor(diff - (hours * 60 * 60 + days * 60 * 60 * 24 + minutes * 60));
  if (days <= 9 && days >= 0) {
    days = '0' + days;
  }
  if (hours <= 9 && hours >= 0) {
    hours = '0' + hours;
  }
  if (minutes <= 9 && minutes >= 0) {
    minutes = '0' + minutes;
  }
  if (seconds <= 9 && seconds >= 0) {
    seconds = '0' + seconds;
  }
  return {
    'days': String(days),
    'hours': String(hours),
    'minutes': String(minutes),
    'seconds': String(seconds)
  };
};
window.pluralFormat = (num, one, two, many) => {
  const endOnOne = num % 10 === 1 && num % 100 !== 11;
  const endOnTwo = num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20);
  const notOne = endOnTwo ? two : many;
  return endOnOne ? one : notOne;
};
window.getCookie = name => {
  let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};
window.setCookie = function (name, value) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  options = {
    path: '/',
    ...options
  };
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }
  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  document.cookie = updatedCookie;
};
window.deleteCookie = name => {
  setCookie(name, "", {
    'max-age': -1
  });
};

/***/ }),

/***/ "./src/js/_scripts.js":
/*!****************************!*\
  !*** ./src/js/_scripts.js ***!
  \****************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", () => {
  const countdownEl = document.querySelector('[data-countdown]');
  if (countdownEl) {
    if (window.getCookie('countdown') === undefined || Date.parse(new Date()) > Date.parse(window.getCookie('countdown'))) {
      const currentDate = new Date(),
        targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + Number(countdownEl.dataset.countdown), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
      document.cookie = `countdown=${targetDate}; path=/; expires=${targetDate}`;
    }
    setCountdown();
    setInterval(() => {
      setCountdown();
    }, 1000);
    function setCountdown() {
      const countdownDate = window.countdown(Date.parse(window.getCookie('countdown'))),
        days = Number(countdownDate.days),
        hours = Number(countdownDate.hours),
        minutes = Number(countdownDate.minutes),
        seconds = Number(countdownDate.seconds);
      const countdownDays = countdownEl.querySelector('[data-countdown-value=days]'),
        countdownHours = countdownEl.querySelector('[data-countdown-value=hours]'),
        countdownMinutes = countdownEl.querySelector('[data-countdown-value=minutes]'),
        countdownSeconds = countdownEl.querySelector('[data-countdown-value=seconds]');
      countdownDays.querySelector('.count').innerHTML = `<span>${Math.floor(days / 10)}</span><span>${Math.floor(days % 10)}</span>`;
      countdownHours.querySelector('.count').innerHTML = `<span>${Math.floor(hours / 10)}</span><span>${Math.floor(hours % 10)}</span>`;
      countdownMinutes.querySelector('.count').innerHTML = `<span>${Math.floor(minutes / 10)}</span><span>${Math.floor(minutes % 10)}</span>`;
      countdownSeconds.querySelector('.count').innerHTML = `<span>${Math.floor(seconds / 10)}</span><span>${Math.floor(seconds % 10)}</span>`;
      countdownDays.querySelector('.val').innerHTML = window.pluralFormat(days, 'день', 'дня', 'дней');
      countdownHours.querySelector('.val').innerHTML = window.pluralFormat(hours, 'час', 'часа', 'часов');
      countdownMinutes.querySelector('.val').innerHTML = window.pluralFormat(minutes, 'минута', 'минуты', 'минут');
      countdownSeconds.querySelector('.val').innerHTML = window.pluralFormat(seconds, 'секунда', 'секунды', 'секунд');
    }
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_functions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_scripts */ "./src/js/_scripts.js");
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;
//# sourceMappingURL=main.js.map