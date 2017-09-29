/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Sidebar from '../components/Sidebar';
//import Mainbar from '../components/Mainbar';
var Infobar = function (_Component) {
  _inherits(Infobar, _Component);

  function Infobar() {
    _classCallCheck(this, Infobar);

    return _possibleConstructorReturn(this, (Infobar.__proto__ || Object.getPrototypeOf(Infobar)).apply(this, arguments));
  }

  _createClass(Infobar, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "page-title" },
        _react2.default.createElement(
          "h2",
          null,
          "FAQ Section"
        ),
        _react2.default.createElement(
          "p",
          { className: "mrg15B" },
          "Example FAQ section created using the components available in DelightUI"
        )
      );
    }
  }]);

  return Infobar;
}(_react.Component);

exports.default = Infobar;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _Logo = __webpack_require__(33);

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Sidebar from '../components/Sidebar';
//import Mainbar from '../components/Mainbar';

var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'page-sidebar' },
        _react2.default.createElement(_Logo2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'scroll-sidebar' },
          _react2.default.createElement(
            'ul',
            { id: 'sidebar-menu' },
            _react2.default.createElement(
              'li',
              { className: 'header' },
              _react2.default.createElement(
                'span',
                null,
                'Overview'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/', title: 'Admin Dashboard' },
                _react2.default.createElement('i', { className: 'glyph-icon icon-linecons-tv' }),
                ' ',
                _react2.default.createElement(
                  'span',
                  null,
                  'Admin dashboard'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'header' },
              _react2.default.createElement(
                'span',
                null,
                'Components'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'javascript:void(0);', title: 'Elements' },
                _react2.default.createElement('i', { className: 'glyph-icon icon-linecons-diamond' }),
                ' ',
                _react2.default.createElement(
                  'span',
                  null,
                  'Elements'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'sidebar-submenu' },
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'buttons.html', title: 'Buttons' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Buttons'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'labels-badges.html', title: 'Labels & Badges' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Labels & Badges'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'content-boxes.html', title: 'Content boxes' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Content boxes'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'icons.html', title: 'Icons' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Icons'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'nav-menus.html', title: 'Navigation menus' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Navigation menus'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'response-messages.html', title: 'Response messages' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Response messages'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'images.html', title: 'Images' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Images'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'javascript:void(0);', title: 'Dashboard boxes' },
                _react2.default.createElement('i', { className: 'glyph-icon icon-linecons-lightbulb' }),
                ' ',
                _react2.default.createElement(
                  'span',
                  null,
                  'Dashboard boxes'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'sidebar-submenu' },
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'chart-boxes.html', title: 'Chart boxes' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Chart boxes'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'tile-boxes.html', title: 'Tile boxes' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Tile boxes'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'social-boxes.html', title: 'Social boxes' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Social boxes'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'panel-boxes.html', title: 'Panel boxes' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Panel boxes'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'javascript:void(0);', title: 'Widgets' },
                _react2.default.createElement('i', { className: 'glyph-icon icon-linecons-wallet' }),
                ' ',
                _react2.default.createElement(
                  'span',
                  null,
                  'Widgets'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'sidebar-submenu' },
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'tabs.html', title: 'Responsive tabs' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Responsive tabs'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'collapsable.html', title: 'Collapsables' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Collapsable accordions'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'bs-carousel.html', title: 'Bootstrap Carousel' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Bootstrap carousel'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'calendar.html', title: 'Calendar' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Calendar'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'scrollbars.html', title: 'Custom scrollbars' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Custom scrollbars'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'modals.html', title: 'Modals' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Modals'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'notifications.html', title: 'Notifications' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Notifications'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'lazyload.html', title: 'Lazyload' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Lazyload'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'loading-feedback.html', title: 'Loading feedback' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Loading feedback'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'popovers-tooltips.html', title: 'Popovers & Tooltips' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Popovers & Tooltips'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'progress-bars.html', title: 'Progress bars' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Progress bars'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'sortable-elements.html', title: 'Sortable elements' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Sortable elements'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'javascript:void(0);', title: 'Forms UI' },
                _react2.default.createElement('i', { className: 'glyph-icon icon-linecons-eye' }),
                ' ',
                _react2.default.createElement(
                  'span',
                  null,
                  'Forms UI'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'sidebar-submenu' },
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'forms-elements.html', title: 'Form elements' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Form elements'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'forms-validation.html', title: 'Form validation' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Form validation'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'pickers.html', title: 'Pickers' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Pickers'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'sliders.html', title: 'Sliders' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Sliders'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'forms-wizard.html', title: 'Form wizards' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Form wizards'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'forms-masks.html', title: 'Form input masks' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Form input masks'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'image-crop.html', title: 'Image crop' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Image crop'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'dropzone-uploader.html', title: 'Dropzone uploader' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Dropzone uploader'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'multi-uploader.html', title: 'Multi uploader' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Multi uploader'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'input-knobs.html', title: 'Input knobs' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Input knobs'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'ckeditor.html', title: 'Ckeditor' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Ckeditor'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'summernote.html', title: 'Summernote' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Summernote'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'markdown.html', title: 'Markdown editor' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Markdown editor'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'inline-editor.html', title: 'Inline editor' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Inline editor'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'javascript:void(0);', title: 'Advanced tables' },
                _react2.default.createElement('i', { className: 'glyph-icon icon-linecons-megaphone' }),
                ' ',
                _react2.default.createElement(
                  'span',
                  null,
                  'Advanced tables'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'sidebar-submenu' },
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'tables.html', title: 'Basic tables' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Basic tables'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'responsive-tables.html', title: 'Responsive tables' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Responsive tables'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'data-tables.html', title: 'Data tables' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Data tables'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'advanced-datatables.html', title: 'Advanced data tables' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Advanced data tables'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'fixed-datatables.html', title: 'Fixed data tables' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Fixed data tables'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'responsive-datatables.html', title: 'Responsive data tables' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Responsive data tables'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'javascript:void(0);', title: 'Charts' },
                _react2.default.createElement('i', { className: 'glyph-icon icon-linecons-paper-plane' }),
                ' ',
                _react2.default.createElement(
                  'span',
                  null,
                  'Charts'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'sidebar-submenu' },
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'flot-charts.html', title: 'Flot charts' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Flot charts'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'sparklines.html', title: 'Sparklines' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Sparklines'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'pie-gages.html', title: 'PieGages' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'PieGages'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'just-gage.html', title: 'justGage' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'justGage'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'morris-charts.html', title: 'Morris charts' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Morris charts'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'xcharts.html', title: 'xCharts' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'xCharts'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'chart-js.html', title: 'Chart.js' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Chart.js'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'javascript:void(0);', title: 'Maps' },
                _react2.default.createElement('i', { className: 'glyph-icon icon-linecons-sound' }),
                ' ',
                _react2.default.createElement(
                  'span',
                  null,
                  'Maps'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'sidebar-submenu' },
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'gmaps.html', title: 'gMaps' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'gMaps'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'vector-maps.html', title: 'Vector maps' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Vector maps'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'mapael.html', title: 'Mapael' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Mapael'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'header' },
              _react2.default.createElement(
                'span',
                null,
                'Extra'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'javascript:void(0);', title: 'Pages' },
                _react2.default.createElement('i', { className: 'glyph-icon icon-linecons-fire' }),
                ' ',
                _react2.default.createElement(
                  'span',
                  null,
                  'Pages'
                ),
                ' ',
                _react2.default.createElement(
                  'span',
                  { className: 'bs-label badge-yellow' },
                  'NEW'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'sidebar-submenu' },
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '/orders', title: 'View profile' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Orders'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'index-alt.html', title: 'Alternate dashboard' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Alternate dashboard'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'view-profile.html', title: 'View profile' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'View profile'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '/salex', title: 'FAQ section' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'FAQ section'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '/automenu', title: 'Auto menu' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Auto menu'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'invoice.html', title: 'Invoice' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Invoice'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'admin-blog.html', title: 'Blog posts list' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Blog posts list'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'admin-pricing.html', title: 'Pricing tables' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Pricing tables'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'portfolio-gallery.html', title: 'Portfolio gallery' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Portfolio gallery'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'portfolio-masonry.html', title: 'Portfolio masonry' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Portfolio masonry'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'slidebars.html', title: 'Slidebars' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Slidebars'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'javascript:void(0);', title: 'Other Pages' },
                _react2.default.createElement('i', { className: 'glyph-icon icon-linecons-cup' }),
                ' ',
                _react2.default.createElement(
                  'span',
                  null,
                  'Other Pages'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'sidebar-submenu' },
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'login-1.html', target: '_blank', title: 'Login page 1' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Login page 1'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'login-2.html', target: '_blank', title: 'Login page 2' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Login page 2'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'login-3.html', target: '_blank', title: 'Login page 3' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Login page 3'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'login-4.html', target: '_blank', title: 'Login page 4' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Login page 4'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'login-5.html', target: '_blank', title: 'Login page 5' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Login page 5'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'lockscreen-1.html', target: '_blank', title: 'Lockscreen page 1' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Lockscreen page 1'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'lockscreen-2.html', target: '_blank', title: 'Lockscreen page 2' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Lockscreen page 2'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'lockscreen-3.html', target: '_blank', title: 'Lockscreen page 3' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Lockscreen page 3'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'server-1.html', target: '_blank', title: 'Server page 1' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Error 404 page'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'server-2.html', target: '_blank', title: 'Server page 2' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Error 404 alternate'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'server-3.html', target: '_blank', title: 'Server page 3' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Server 500 error'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'javascript:void(0);', title: 'Mailbox' },
                _react2.default.createElement('i', { className: 'glyph-icon icon-linecons-mail' }),
                ' ',
                _react2.default.createElement(
                  'span',
                  null,
                  'Mailbox'
                ),
                ' ',
                _react2.default.createElement(
                  'span',
                  { className: 'bs-badge badge-danger' },
                  '3'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'sidebar-submenu' },
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'mailbox-inbox.html', title: 'Inbox' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Inbox'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'mailbox-compose.html', title: 'Compose message' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Compose message'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'mailbox-single.html', title: 'Single message' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Single message'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'javascript:void(0);', title: 'Snippets' },
                _react2.default.createElement('i', { className: 'glyph-icon icon-linecons-cd' }),
                ' ',
                _react2.default.createElement(
                  'span',
                  null,
                  'Snippets'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'sidebar-submenu' },
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'timeline.html', title: 'Timeline' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Timeline'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'chat.html', title: 'Chat' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Chat'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'checklist.html', title: 'Checklist' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Checklist'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'javascript:void(0);', title: 'Helpers' },
                _react2.default.createElement('i', { className: 'glyph-icon icon-linecons-doc' }),
                ' ',
                _react2.default.createElement(
                  'span',
                  null,
                  'Helpers'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'sidebar-submenu' },
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'helper-classes.html', title: 'Helper classes' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Helper classes'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'page-transitions.html', title: 'Page transitions' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Page transitions'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'animations.html', title: 'Animations' },
                      _react2.default.createElement(
                        'span',
                        null,
                        'Animations'
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react.Component);

exports.default = Navbar;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SBleft = function (_Component) {
  _inherits(SBleft, _Component);

  function SBleft() {
    _classCallCheck(this, SBleft);

    return _possibleConstructorReturn(this, (SBleft.__proto__ || Object.getPrototypeOf(SBleft)).apply(this, arguments));
  }

  _createClass(SBleft, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "sb-slidebar bg-black sb-left sb-style-overlay" },
        _react2.default.createElement(
          "div",
          { className: "scrollable-content scrollable-slim-sidebar" },
          _react2.default.createElement(
            "div",
            { className: "pad10A" },
            _react2.default.createElement(
              "div",
              { className: "divider-header" },
              "Online"
            ),
            _react2.default.createElement(
              "ul",
              { className: "chat-box" },
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "div",
                  { className: "status-badge" },
                  _react2.default.createElement("img", { className: "img-circle", width: "40", src: "../bin/assets/image-resources/people/testimonial1.jpg", alt: "" }),
                  _react2.default.createElement("div", { className: "small-badge bg-green" })
                ),
                _react2.default.createElement(
                  "b",
                  null,
                  "Grace Padilla"
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "On the other hand, we denounce..."
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "btn btn-md no-border radius-all-100 btn-black" },
                  _react2.default.createElement("i", { className: "glyph-icon icon-comments-o" })
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "div",
                  { className: "status-badge" },
                  _react2.default.createElement("img", { className: "img-circle", width: "40", src: "../bin/assets/image-resources/people/testimonial2.jpg", alt: "" }),
                  _react2.default.createElement("div", { className: "small-badge bg-green" })
                ),
                _react2.default.createElement(
                  "b",
                  null,
                  "Carl Gamble"
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "Dislike men who are so beguiled..."
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "btn btn-md no-border radius-all-100 btn-black" },
                  _react2.default.createElement("i", { className: "glyph-icon icon-comments-o" })
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "div",
                  { className: "status-badge" },
                  _react2.default.createElement("img", { className: "img-circle", width: "40", src: "../bin/assets/image-resources/people/testimonial3.jpg", alt: "" }),
                  _react2.default.createElement("div", { className: "small-badge bg-green" })
                ),
                _react2.default.createElement(
                  "b",
                  null,
                  "Michael Poole"
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "Of pleasure of the moment, so..."
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "btn btn-md no-border radius-all-100 btn-black" },
                  _react2.default.createElement("i", { className: "glyph-icon icon-comments-o" })
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "div",
                  { className: "status-badge" },
                  _react2.default.createElement("img", { className: "img-circle", width: "40", src: "../bin/assets/image-resources/people/testimonial4.jpg", alt: "" }),
                  _react2.default.createElement("div", { className: "small-badge bg-green" })
                ),
                _react2.default.createElement(
                  "b",
                  null,
                  "Bill Green"
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "That they cannot foresee the..."
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "btn btn-md no-border radius-all-100 btn-black" },
                  _react2.default.createElement("i", { className: "glyph-icon icon-comments-o" })
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "div",
                  { className: "status-badge" },
                  _react2.default.createElement("img", { className: "img-circle", width: "40", src: "../bin/assets/image-resources/people/testimonial5.jpg", alt: "" }),
                  _react2.default.createElement("div", { className: "small-badge bg-green" })
                ),
                _react2.default.createElement(
                  "b",
                  null,
                  "Cheryl Soucy"
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "Pain and trouble that are bound..."
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "btn btn-md no-border radius-all-100 btn-black" },
                  _react2.default.createElement("i", { className: "glyph-icon icon-comments-o" })
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "divider-header" },
              "Idle"
            ),
            _react2.default.createElement(
              "ul",
              { className: "chat-box" },
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "div",
                  { className: "status-badge" },
                  _react2.default.createElement("img", { className: "img-circle", width: "40", src: "../bin/assets/image-resources/people/testimonial6.jpg", alt: "" }),
                  _react2.default.createElement("div", { className: "small-badge bg-orange" })
                ),
                _react2.default.createElement(
                  "b",
                  null,
                  "Jose Kramer"
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "Equal blame belongs to those..."
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "btn btn-md no-border radius-all-100 btn-black" },
                  _react2.default.createElement("i", { className: "glyph-icon icon-comments-o" })
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "div",
                  { className: "status-badge" },
                  _react2.default.createElement("img", { className: "img-circle", width: "40", src: "../bin/assets/image-resources/people/testimonial7.jpg", alt: "" }),
                  _react2.default.createElement("div", { className: "small-badge bg-orange" })
                ),
                _react2.default.createElement(
                  "b",
                  null,
                  "Dan Garcia"
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "Weakness of will, which is same..."
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "btn btn-md no-border radius-all-100 btn-black" },
                  _react2.default.createElement("i", { className: "glyph-icon icon-comments-o" })
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "div",
                  { className: "status-badge" },
                  _react2.default.createElement("img", { className: "img-circle", width: "40", src: "../bin/assets/image-resources/people/testimonial8.jpg", alt: "" }),
                  _react2.default.createElement("div", { className: "small-badge bg-orange" })
                ),
                _react2.default.createElement(
                  "b",
                  null,
                  "Edward Bridges"
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "These cases are perfectly simple..."
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "btn btn-md no-border radius-all-100 btn-black" },
                  _react2.default.createElement("i", { className: "glyph-icon icon-comments-o" })
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "divider-header" },
              "Offline"
            ),
            _react2.default.createElement(
              "ul",
              { className: "chat-box" },
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "div",
                  { className: "status-badge" },
                  _react2.default.createElement("img", { className: "img-circle", width: "40", src: "../bin/assets/image-resources/people/testimonial1.jpg", alt: "" }),
                  _react2.default.createElement("div", { className: "small-badge bg-red" })
                ),
                _react2.default.createElement(
                  "b",
                  null,
                  "Randy Herod"
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "In a free hour, when our power..."
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "btn btn-md no-border radius-all-100 btn-black" },
                  _react2.default.createElement("i", { className: "glyph-icon icon-comments-o" })
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "div",
                  { className: "status-badge" },
                  _react2.default.createElement("img", { className: "img-circle", width: "40", src: "../bin/assets/image-resources/people/testimonial2.jpg", alt: "" }),
                  _react2.default.createElement("div", { className: "small-badge bg-red" })
                ),
                _react2.default.createElement(
                  "b",
                  null,
                  "Patricia Bagley"
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "when nothing prevents our being..."
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "btn btn-md no-border radius-all-100 btn-black" },
                  _react2.default.createElement("i", { className: "glyph-icon icon-comments-o" })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return SBleft;
}(_react.Component);

exports.default = SBleft;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SBright = function (_Component) {
  _inherits(SBright, _Component);

  function SBright() {
    _classCallCheck(this, SBright);

    return _possibleConstructorReturn(this, (SBright.__proto__ || Object.getPrototypeOf(SBright)).apply(this, arguments));
  }

  _createClass(SBright, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "sb-slidebar bg-black sb-right sb-style-overlay" },
        _react2.default.createElement(
          "div",
          { className: "scrollable-content scrollable-slim-sidebar" },
          _react2.default.createElement(
            "div",
            { className: "pad15A" },
            _react2.default.createElement(
              "a",
              { href: "#", title: "", "data-toggle": "collapse", "data-target": "#sidebar-toggle-1", className: "popover-title" },
              "Cloud status ",
              _react2.default.createElement("span", { className: "caret" })
            ),
            _react2.default.createElement(
              "div",
              { id: "sidebar-toggle-1", className: "collapse in" },
              _react2.default.createElement(
                "div",
                { className: "pad15A" },
                _react2.default.createElement(
                  "div",
                  { className: "row" },
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-4" },
                    _react2.default.createElement(
                      "div",
                      { className: "text-center font-gray pad5B text-transform-upr font-size-12" },
                      "New visits"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "chart-alt-3 font-gray-dark", "data-percent": "55" },
                      _react2.default.createElement(
                        "span",
                        null,
                        "55"
                      ),
                      "%"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-4" },
                    _react2.default.createElement(
                      "div",
                      { className: "text-center font-gray pad5B text-transform-upr font-size-12" },
                      "Bounce rate"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "chart-alt-3 font-gray-dark", "data-percent": "46" },
                      _react2.default.createElement(
                        "span",
                        null,
                        "46"
                      ),
                      "%"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-4" },
                    _react2.default.createElement(
                      "div",
                      { className: "text-center font-gray pad5B text-transform-upr font-size-12" },
                      "Server load"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "chart-alt-3 font-gray-dark", "data-percent": "92" },
                      _react2.default.createElement(
                        "span",
                        null,
                        "92"
                      ),
                      "%"
                    )
                  )
                ),
                _react2.default.createElement("div", { className: "divider mrg15T mrg15B" }),
                _react2.default.createElement(
                  "div",
                  { className: "text-center" },
                  _react2.default.createElement(
                    "a",
                    { href: "#", className: "btn center-div btn-info mrg5T btn-sm text-transform-upr updateEasyPieChart" },
                    _react2.default.createElement("i", { className: "glyph-icon icon-refresh" }),
                    " Update charts"
                  )
                )
              )
            ),
            _react2.default.createElement("div", { className: "clear" }),
            _react2.default.createElement(
              "a",
              { href: "#", title: "", "data-toggle": "collapse", "data-target": "#sidebar-toggle-6", className: "popover-title" },
              "Latest transfers ",
              _react2.default.createElement("span", { className: "caret" })
            ),
            _react2.default.createElement(
              "div",
              { id: "sidebar-toggle-6", className: "collapse in" },
              _react2.default.createElement(
                "ul",
                { className: "files-box" },
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement("i", { className: "files-icon glyph-icon font-red icon-file-archive-o" }),
                  _react2.default.createElement(
                    "div",
                    { className: "files-content" },
                    _react2.default.createElement(
                      "b",
                      null,
                      "blog_export.zip"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "files-date" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-clock-o" }),
                      " added on ",
                      _react2.default.createElement(
                        "b",
                        null,
                        "22.10.2014"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "files-buttons" },
                    _react2.default.createElement(
                      "a",
                      { href: "#", className: "btn btn-xs hover-info tooltip-button", "data-placement": "left", title: "Download" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-cloud-download" })
                    ),
                    " ",
                    _react2.default.createElement(
                      "a",
                      { href: "#", className: "btn btn-xs hover-danger tooltip-button", "data-placement": "left", title: "Delete" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-times" })
                    )
                  )
                ),
                _react2.default.createElement("li", { className: "divider" }),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement("i", { className: "files-icon glyph-icon icon-file-code-o" }),
                  _react2.default.createElement(
                    "div",
                    { className: "files-content" },
                    _react2.default.createElement(
                      "b",
                      null,
                      "homepage-test.html"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "files-date" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-clock-o" }),
                      " added ",
                      _react2.default.createElement(
                        "b",
                        null,
                        "19.10.2014"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "files-buttons" },
                    _react2.default.createElement(
                      "a",
                      { href: "#", className: "btn btn-xs hover-info tooltip-button", "data-placement": "left", title: "Download" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-cloud-download" })
                    ),
                    " ",
                    _react2.default.createElement(
                      "a",
                      { href: "#", className: "btn btn-xs hover-danger tooltip-button", "data-placement": "left", title: "Delete" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-times" })
                    )
                  )
                ),
                _react2.default.createElement("li", { className: "divider" }),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement("i", { className: "files-icon glyph-icon font-yellow icon-file-image-o" }),
                  _react2.default.createElement(
                    "div",
                    { className: "files-content" },
                    _react2.default.createElement(
                      "b",
                      null,
                      "monthlyReport.jpg"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "files-date" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-clock-o" }),
                      " added on ",
                      _react2.default.createElement(
                        "b",
                        null,
                        "10.9.2014"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "files-buttons" },
                    _react2.default.createElement(
                      "a",
                      { href: "#", className: "btn btn-xs hover-info tooltip-button", "data-placement": "left", title: "Download" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-cloud-download" })
                    ),
                    " ",
                    _react2.default.createElement(
                      "a",
                      { href: "#", className: "btn btn-xs hover-danger tooltip-button", "data-placement": "left", title: "Delete" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-times" })
                    )
                  )
                ),
                _react2.default.createElement("li", { className: "divider" }),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement("i", { className: "files-icon glyph-icon font-green icon-file-word-o" }),
                  _react2.default.createElement(
                    "div",
                    { className: "files-content" },
                    _react2.default.createElement(
                      "b",
                      null,
                      "new_presentation.doc"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "files-date" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-clock-o" }),
                      " added on ",
                      _react2.default.createElement(
                        "b",
                        null,
                        "5.9.2014"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "files-buttons" },
                    _react2.default.createElement(
                      "a",
                      { href: "#", className: "btn btn-xs hover-info tooltip-button", "data-placement": "left", title: "Download" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-cloud-download" })
                    ),
                    " ",
                    _react2.default.createElement(
                      "a",
                      { href: "#", className: "btn btn-xs hover-danger tooltip-button", "data-placement": "left", title: "Delete" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-times" })
                    )
                  )
                )
              )
            ),
            _react2.default.createElement("div", { className: "clear" }),
            _react2.default.createElement(
              "a",
              { href: "#", title: "", "data-toggle": "collapse", "data-target": "#sidebar-toggle-3", className: "popover-title" },
              "Tasks for today ",
              _react2.default.createElement("span", { className: "caret" })
            ),
            _react2.default.createElement(
              "div",
              { id: "sidebar-toggle-3", className: "collapse in" },
              _react2.default.createElement(
                "ul",
                { className: "progress-box" },
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "div",
                    { className: "progress-title" },
                    "New features development ",
                    _react2.default.createElement(
                      "b",
                      null,
                      "87%"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "progressbar-smaller progressbar", "data-value": "87" },
                    _react2.default.createElement(
                      "div",
                      { className: "progressbar-value bg-azure" },
                      _react2.default.createElement("div", { className: "progressbar-overlay" })
                    )
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "div",
                    { className: "progress-title" },
                    "Finishing uploading files ",
                    _react2.default.createElement(
                      "b",
                      null,
                      "66%"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "progressbar-smaller progressbar", "data-value": "66" },
                    _react2.default.createElement(
                      "div",
                      { className: "progressbar-value bg-red" },
                      _react2.default.createElement("div", { className: "progressbar-overlay" })
                    )
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "div",
                    { className: "progress-title" },
                    "Creating tutorials ",
                    _react2.default.createElement(
                      "b",
                      null,
                      "58%"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "progressbar-smaller progressbar", "data-value": "58" },
                    _react2.default.createElement("div", { className: "progressbar-value bg-blue-alt" })
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "div",
                    { className: "progress-title" },
                    "Frontend bonus theme ",
                    _react2.default.createElement(
                      "b",
                      null,
                      "74%"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "progressbar-smaller progressbar", "data-value": "74" },
                    _react2.default.createElement("div", { className: "progressbar-value bg-purple" })
                  )
                )
              )
            ),
            _react2.default.createElement("div", { className: "clear" }),
            _react2.default.createElement(
              "a",
              { href: "#", title: "", "data-toggle": "collapse", "data-target": "#sidebar-toggle-4", className: "popover-title" },
              "Pending notifications ",
              _react2.default.createElement(
                "span",
                { className: "bs-label bg-orange tooltip-button", title: "Label example" },
                "New"
              ),
              " ",
              _react2.default.createElement("span", { className: "caret" })
            ),
            _react2.default.createElement(
              "div",
              { id: "sidebar-toggle-4", className: "collapse in" },
              _react2.default.createElement(
                "ul",
                { className: "notifications-box notifications-box-alt" },
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement("span", { className: "bg-purple icon-notification glyph-icon icon-users" }),
                  " ",
                  _react2.default.createElement(
                    "span",
                    { className: "notification-text" },
                    "This is an error notification"
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "notification-time" },
                    "a few seconds ago ",
                    _react2.default.createElement("span", { className: "glyph-icon icon-clock-o" })
                  ),
                  _react2.default.createElement(
                    "a",
                    { href: "#", className: "notification-btn btn btn-xs btn-black tooltip-button", "data-placement": "left", title: "View details" },
                    _react2.default.createElement("i", { className: "glyph-icon icon-arrow-right" })
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement("span", { className: "bg-warning icon-notification glyph-icon icon-ticket" }),
                  " ",
                  _react2.default.createElement(
                    "span",
                    { className: "notification-text" },
                    "This is a warning notification"
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "notification-time" },
                    _react2.default.createElement(
                      "b",
                      null,
                      "15"
                    ),
                    " minutes ago ",
                    _react2.default.createElement("span", { className: "glyph-icon icon-clock-o" })
                  ),
                  _react2.default.createElement(
                    "a",
                    { href: "#", className: "notification-btn btn btn-xs btn-black tooltip-button", "data-placement": "left", title: "View details" },
                    _react2.default.createElement("i", { className: "glyph-icon icon-arrow-right" })
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement("span", { className: "bg-green icon-notification glyph-icon icon-random" }),
                  " ",
                  _react2.default.createElement(
                    "span",
                    { className: "notification-text font-green" },
                    "A success message example."
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "notification-time" },
                    _react2.default.createElement(
                      "b",
                      null,
                      "2 hours"
                    ),
                    " ago ",
                    _react2.default.createElement("span", { className: "glyph-icon icon-clock-o" })
                  ),
                  _react2.default.createElement(
                    "a",
                    { href: "#", className: "notification-btn btn btn-xs btn-black tooltip-button", "data-placement": "left", title: "View details" },
                    _react2.default.createElement("i", { className: "glyph-icon icon-arrow-right" })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return SBright;
}(_react.Component);

exports.default = SBright;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Sidebar from '../components/Sidebar';
//import Mainbar from '../components/Mainbar';
var Topbar = function (_Component) {
  _inherits(Topbar, _Component);

  function Topbar() {
    _classCallCheck(this, Topbar);

    return _possibleConstructorReturn(this, (Topbar.__proto__ || Object.getPrototypeOf(Topbar)).apply(this, arguments));
  }

  _createClass(Topbar, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "page-header" },
        _react2.default.createElement(
          "div",
          { id: "header-nav-left" },
          _react2.default.createElement(
            "a",
            { className: "header-btn", id: "logout-btn", href: "lockscreen-3.html", title: "Lockscreen page example" },
            _react2.default.createElement("i", { className: "glyph-icon icon-linecons-lock" })
          ),
          _react2.default.createElement(
            "div",
            { className: "user-account-btn dropdown" },
            _react2.default.createElement(
              "a",
              { href: "#", title: "My Account", className: "user-profile clearfix", "data-toggle": "dropdown" },
              _react2.default.createElement("img", { width: "28", src: "../bin/assets/image-resources/gravatar.jpg", alt: "Profile image" }),
              _react2.default.createElement(
                "span",
                null,
                "Michael Lee"
              ),
              _react2.default.createElement("i", { className: "glyph-icon icon-angle-down" })
            ),
            _react2.default.createElement(
              "div",
              { className: "dropdown-menu float-right" },
              _react2.default.createElement(
                "div",
                { className: "box-sm" },
                _react2.default.createElement(
                  "div",
                  { className: "login-box clearfix" },
                  _react2.default.createElement(
                    "div",
                    { className: "user-img" },
                    _react2.default.createElement(
                      "a",
                      { href: "#", title: "", className: "change-img" },
                      "Change photo"
                    ),
                    _react2.default.createElement("img", { src: "../bin/assets/image-resources/gravatar.jpg", alt: "" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "user-info" },
                    _react2.default.createElement(
                      "span",
                      null,
                      "Michael Lee ",
                      _react2.default.createElement(
                        "i",
                        null,
                        "UX/UI developer"
                      )
                    ),
                    _react2.default.createElement(
                      "a",
                      { href: "#", title: "Edit profile" },
                      "Edit profile"
                    ),
                    _react2.default.createElement(
                      "a",
                      { href: "#", title: "View notifications" },
                      "View notifications"
                    )
                  )
                ),
                _react2.default.createElement("div", { className: "divider" }),
                _react2.default.createElement(
                  "ul",
                  { className: "reset-ul mrg5B" },
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      "View login page example ",
                      _react2.default.createElement("i", { className: "glyph-icon float-right icon-caret-right" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      "View lockscreen example ",
                      _react2.default.createElement("i", { className: "glyph-icon float-right icon-caret-right" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      "View account details ",
                      _react2.default.createElement("i", { className: "glyph-icon float-right icon-caret-right" })
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "button-pane button-pane-alt pad5L pad5R text-center" },
                  _react2.default.createElement(
                    "a",
                    { href: "#", className: "btn btn-flat display-block font-normal btn-danger" },
                    _react2.default.createElement("i", { className: "glyph-icon icon-power-off" }),
                    " Logout"
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { id: "header-nav-right" },
          _react2.default.createElement(
            "a",
            { href: "#", className: "hdr-btn popover-button", title: "Search", "data-placement": "bottom", "data-id": "#popover-search" },
            _react2.default.createElement("i", { className: "glyph-icon icon-search" })
          ),
          _react2.default.createElement(
            "div",
            { className: "hide", id: "popover-search" },
            _react2.default.createElement(
              "div",
              { className: "pad5A box-md" },
              _react2.default.createElement(
                "div",
                { className: "input-group" },
                _react2.default.createElement("input", { type: "text", className: "form-control", placeholder: "Search terms here ..." }),
                _react2.default.createElement(
                  "span",
                  { className: "input-group-btn" },
                  _react2.default.createElement(
                    "a",
                    { className: "btn btn-primary", href: "#" },
                    "Search"
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "dropdown", id: "dashnav-btn" },
            _react2.default.createElement(
              "a",
              { href: "#", "data-toggle": "dropdown", "data-placement": "bottom", className: "popover-button-header tooltip-button", title: "Dashboard Quick Menu" },
              _react2.default.createElement("i", { className: "glyph-icon icon-linecons-cog" })
            ),
            _react2.default.createElement(
              "div",
              { className: "dropdown-menu float-left" },
              _react2.default.createElement(
                "div",
                { className: "box-sm" },
                _react2.default.createElement(
                  "div",
                  { className: "pad5T pad5B pad10L pad10R dashboard-buttons clearfix" },
                  _react2.default.createElement(
                    "a",
                    { href: "#", className: "btn vertical-button hover-blue-alt", title: "" },
                    _react2.default.createElement(
                      "span",
                      { className: "glyph-icon icon-separator-vertical pad0A medium" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-dashboard opacity-80 font-size-20" })
                    ),
                    " Dashboard"
                  ),
                  _react2.default.createElement(
                    "a",
                    { href: "#", className: "btn vertical-button hover-green", title: "" },
                    _react2.default.createElement(
                      "span",
                      { className: "glyph-icon icon-separator-vertical pad0A medium" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-tags opacity-80 font-size-20" })
                    ),
                    " Widgets"
                  ),
                  _react2.default.createElement(
                    "a",
                    { href: "#", className: "btn vertical-button hover-orange", title: "" },
                    _react2.default.createElement(
                      "span",
                      { className: "glyph-icon icon-separator-vertical pad0A medium" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-fire opacity-80 font-size-20" })
                    ),
                    " Tables"
                  ),
                  _react2.default.createElement(
                    "a",
                    { href: "#", className: "btn vertical-button hover-orange", title: "" },
                    _react2.default.createElement(
                      "span",
                      { className: "glyph-icon icon-separator-vertical pad0A medium" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-bar-chart-o opacity-80 font-size-20" })
                    ),
                    " Charts"
                  ),
                  _react2.default.createElement(
                    "a",
                    { href: "#", className: "btn vertical-button hover-purple", title: "" },
                    _react2.default.createElement(
                      "span",
                      { className: "glyph-icon icon-separator-vertical pad0A medium" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-laptop opacity-80 font-size-20" })
                    ),
                    " Buttons"
                  ),
                  _react2.default.createElement(
                    "a",
                    { href: "#", className: "btn vertical-button hover-azure", title: "" },
                    _react2.default.createElement(
                      "span",
                      { className: "glyph-icon icon-separator-vertical pad0A medium" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-code opacity-80 font-size-20" })
                    ),
                    " Panels"
                  )
                ),
                _react2.default.createElement("div", { className: "divider" }),
                _react2.default.createElement(
                  "div",
                  { className: "pad5T pad5B pad10L pad10R dashboard-buttons clearfix" },
                  _react2.default.createElement(
                    "a",
                    { href: "#", className: "btn vertical-button remove-border btn-info", title: "" },
                    _react2.default.createElement(
                      "span",
                      { className: "glyph-icon icon-separator-vertical pad0A medium" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-dashboard opacity-80 font-size-20" })
                    ),
                    " Dashboard"
                  ),
                  _react2.default.createElement(
                    "a",
                    { href: "#", className: "btn vertical-button remove-border btn-danger", title: "" },
                    _react2.default.createElement(
                      "span",
                      { className: "glyph-icon icon-separator-vertical pad0A medium" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-tags opacity-80 font-size-20" })
                    ),
                    " Widgets"
                  ),
                  _react2.default.createElement(
                    "a",
                    { href: "#", className: "btn vertical-button remove-border btn-purple", title: "" },
                    _react2.default.createElement(
                      "span",
                      { className: "glyph-icon icon-separator-vertical pad0A medium" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-fire opacity-80 font-size-20" })
                    ),
                    " Tables"
                  ),
                  _react2.default.createElement(
                    "a",
                    { href: "#", className: "btn vertical-button remove-border btn-azure", title: "" },
                    _react2.default.createElement(
                      "span",
                      { className: "glyph-icon icon-separator-vertical pad0A medium" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-bar-chart-o opacity-80 font-size-20" })
                    ),
                    " Charts"
                  ),
                  _react2.default.createElement(
                    "a",
                    { href: "#", className: "btn vertical-button remove-border btn-yellow", title: "" },
                    _react2.default.createElement(
                      "span",
                      { className: "glyph-icon icon-separator-vertical pad0A medium" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-laptop opacity-80 font-size-20" })
                    ),
                    " Buttons"
                  ),
                  _react2.default.createElement(
                    "a",
                    { href: "#", className: "btn vertical-button remove-border btn-warning", title: "" },
                    _react2.default.createElement(
                      "span",
                      { className: "glyph-icon icon-separator-vertical pad0A medium" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-code opacity-80 font-size-20" })
                    ),
                    " Panels"
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "a",
            { href: "#", className: "hdr-btn", id: "fullscreen-btn", title: "Fullscreen" },
            _react2.default.createElement("i", { className: "glyph-icon icon-arrows-alt" })
          ),
          _react2.default.createElement(
            "a",
            { href: "#", className: "hdr-btn sb-toggle-left", id: "chatbox-btn", title: "Chat sidebar" },
            _react2.default.createElement("i", { className: "glyph-icon icon-linecons-paper-plane" })
          ),
          _react2.default.createElement(
            "div",
            { className: "dropdown", id: "notifications-btn" },
            _react2.default.createElement(
              "a",
              { "data-toggle": "dropdown", href: "#", title: "" },
              _react2.default.createElement("span", { className: "small-badge bg-yellow" }),
              _react2.default.createElement("i", { className: "glyph-icon icon-linecons-megaphone" })
            ),
            _react2.default.createElement(
              "div",
              { className: "dropdown-menu box-md float-left" },
              _react2.default.createElement(
                "div",
                { className: "popover-title display-block clearfix pad10A" },
                "Notifications ",
                _react2.default.createElement(
                  "a",
                  { className: "text-transform-cap font-primary font-normal btn-link float-right", href: "#", title: "View more options" },
                  "More options..."
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "scrollable-content scrollable-slim-box" },
                _react2.default.createElement(
                  "ul",
                  { className: "no-border notifications-box" },
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement("span", { className: "bg-danger icon-notification glyph-icon icon-bullhorn" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      { className: "notification-text" },
                      "This is an error notification"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "notification-time" },
                      "a few seconds ago ",
                      _react2.default.createElement("span", { className: "glyph-icon icon-clock-o" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement("span", { className: "bg-warning icon-notification glyph-icon icon-users" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      { className: "notification-text font-blue" },
                      "This is a warning notification"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "notification-time" },
                      _react2.default.createElement(
                        "b",
                        null,
                        "15"
                      ),
                      " minutes ago ",
                      _react2.default.createElement("span", { className: "glyph-icon icon-clock-o" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement("span", { className: "bg-green icon-notification glyph-icon icon-sitemap" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      { className: "notification-text font-green" },
                      "A success message example."
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "notification-time" },
                      _react2.default.createElement(
                        "b",
                        null,
                        "2 hours"
                      ),
                      " ago ",
                      _react2.default.createElement("span", { className: "glyph-icon icon-clock-o" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement("span", { className: "bg-azure icon-notification glyph-icon icon-random" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      { className: "notification-text" },
                      "This is an error notification"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "notification-time" },
                      "a few seconds ago ",
                      _react2.default.createElement("span", { className: "glyph-icon icon-clock-o" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement("span", { className: "bg-warning icon-notification glyph-icon icon-ticket" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      { className: "notification-text" },
                      "This is a warning notification"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "notification-time" },
                      _react2.default.createElement(
                        "b",
                        null,
                        "15"
                      ),
                      " minutes ago ",
                      _react2.default.createElement("span", { className: "glyph-icon icon-clock-o" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement("span", { className: "bg-blue icon-notification glyph-icon icon-user" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      { className: "notification-text font-blue" },
                      "Alternate notification styling."
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "notification-time" },
                      _react2.default.createElement(
                        "b",
                        null,
                        "2 hours"
                      ),
                      " ago ",
                      _react2.default.createElement("span", { className: "glyph-icon icon-clock-o" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement("span", { className: "bg-purple icon-notification glyph-icon icon-user" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      { className: "notification-text" },
                      "This is an error notification"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "notification-time" },
                      "a few seconds ago ",
                      _react2.default.createElement("span", { className: "glyph-icon icon-clock-o" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement("span", { className: "bg-warning icon-notification glyph-icon icon-user" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      { className: "notification-text" },
                      "This is a warning notification"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "notification-time" },
                      _react2.default.createElement(
                        "b",
                        null,
                        "15"
                      ),
                      " minutes ago ",
                      _react2.default.createElement("span", { className: "glyph-icon icon-clock-o" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement("span", { className: "bg-green icon-notification glyph-icon icon-user" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      { className: "notification-text font-green" },
                      "A success message example."
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "notification-time" },
                      _react2.default.createElement(
                        "b",
                        null,
                        "2 hours"
                      ),
                      " ago ",
                      _react2.default.createElement("span", { className: "glyph-icon icon-clock-o" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement("span", { className: "bg-purple icon-notification glyph-icon icon-user" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      { className: "notification-text" },
                      "This is an error notification"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "notification-time" },
                      "a few seconds ago ",
                      _react2.default.createElement("span", { className: "glyph-icon icon-clock-o" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement("span", { className: "bg-warning icon-notification glyph-icon icon-user" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      { className: "notification-text" },
                      "This is a warning notification"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "notification-time" },
                      _react2.default.createElement(
                        "b",
                        null,
                        "15"
                      ),
                      " minutes ago ",
                      _react2.default.createElement("span", { className: "glyph-icon icon-clock-o" })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "button-pane button-pane-alt pad5T pad5L pad5R text-center" },
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "btn btn-flat btn-primary", title: "View all notifications" },
                  "View all notifications"
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "dropdown", id: "progress-btn" },
            _react2.default.createElement(
              "a",
              { "data-toggle": "dropdown", href: "#", title: "" },
              _react2.default.createElement("span", { className: "small-badge bg-azure" }),
              " ",
              _react2.default.createElement("i", { className: "glyph-icon icon-linecons-params" })
            ),
            _react2.default.createElement(
              "div",
              { className: "dropdown-menu pad0A box-sm float-left", id: "progress-dropdown" },
              _react2.default.createElement(
                "div",
                { className: "scrollable-content scrollable-slim-box" },
                _react2.default.createElement(
                  "ul",
                  { className: "no-border progress-box progress-box-links" },
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#", title: "" },
                      _react2.default.createElement(
                        "div",
                        { className: "progress-title" },
                        "Finishing uploading files ",
                        _react2.default.createElement(
                          "b",
                          null,
                          "23%"
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "progressbar-smaller progressbar", "data-value": "23" },
                        _react2.default.createElement(
                          "div",
                          { className: "progressbar-value bg-blue-alt" },
                          _react2.default.createElement("div", { className: "progressbar-overlay" })
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#", title: "" },
                      _react2.default.createElement(
                        "div",
                        { className: "progress-title" },
                        "Roadmap progress ",
                        _react2.default.createElement(
                          "b",
                          null,
                          "91%"
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "progressbar-smaller progressbar", "data-value": "91" },
                        _react2.default.createElement(
                          "div",
                          { className: "progressbar-value bg-red" },
                          _react2.default.createElement("div", { className: "progressbar-overlay" })
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#", title: "" },
                      _react2.default.createElement(
                        "div",
                        { className: "progress-title" },
                        "Images upload ",
                        _react2.default.createElement(
                          "b",
                          null,
                          "58%"
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "progressbar-smaller progressbar", "data-value": "58" },
                        _react2.default.createElement("div", { className: "progressbar-value bg-green" })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#", title: "" },
                      _react2.default.createElement(
                        "div",
                        { className: "progress-title" },
                        "WordPress migration ",
                        _react2.default.createElement(
                          "b",
                          null,
                          "74%"
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "progressbar-smaller progressbar", "data-value": "74" },
                        _react2.default.createElement("div", { className: "progressbar-value bg-purple" })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#", title: "" },
                      _react2.default.createElement(
                        "div",
                        { className: "progress-title" },
                        "Agile development procedures ",
                        _react2.default.createElement(
                          "b",
                          null,
                          "91%"
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "progressbar-smaller progressbar", "data-value": "91" },
                        _react2.default.createElement(
                          "div",
                          { className: "progressbar-value bg-black" },
                          _react2.default.createElement("div", { className: "progressbar-overlay" })
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#", title: "" },
                      _react2.default.createElement(
                        "div",
                        { className: "progress-title" },
                        "Systems integration ",
                        _react2.default.createElement(
                          "b",
                          null,
                          "58%"
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "progressbar-smaller progressbar", "data-value": "58" },
                        _react2.default.createElement("div", { className: "progressbar-value bg-azure" })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#", title: "" },
                      _react2.default.createElement(
                        "div",
                        { className: "progress-title" },
                        "Code optimizations ",
                        _react2.default.createElement(
                          "b",
                          null,
                          "97%"
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "progressbar-smaller progressbar", "data-value": "97" },
                        _react2.default.createElement("div", { className: "progressbar-value bg-yellow" })
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "button-pane button-pane-alt pad5A text-center" },
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "btn btn-flat display-block font-normal hover-green", title: "View all notifications" },
                  "View all notifications"
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "dropdown", id: "cloud-btn" },
            _react2.default.createElement(
              "a",
              { href: "#", "data-placement": "bottom", className: "tooltip-button sb-toggle-right", title: "Statistics Sidebar" },
              _react2.default.createElement("i", { className: "glyph-icon icon-linecons-cloud" })
            )
          )
        )
      );
    }
  }]);

  return Topbar;
}(_react.Component);

exports.default = Topbar;

/*

<div id="page-header">
              <div id="header-nav-left">
              <a className="header-btn" id="logout-btn" href="lockscreen-3.html" title="Lockscreen page example">
                <i className="glyph-icon icon-linecons-lock"></i>
              </a>
              <div className="user-account-btn dropdown">
                <a href="#" title="My Account" className="user-profile clearfix" data-toggle="dropdown">
                  <img width="28" src="../bin/assets/image-resources/gravatar.jpg" alt="Profile image">
                  <span>Michael Lee</span>
                  <i className="glyph-icon icon-angle-down"></i>
                </a>
                  <div className="dropdown-menu float-right">
                    <div className="box-sm">
                      <div className="login-box clearfix">
                        <div className="user-img">
                        <a href="#" title="" className="change-img">Change photo</a>
                          <img src="../bin/assets/image-resources/gravatar.jpg" alt=""></div>
                          <div className="user-info"><span>Michael Lee <i>UX/UI developer</i></span> <a href="#" title="Edit profile">Edit profile</a> <a href="#" title="View notifications">View notifications</a></div>
                        </div>
                        <div className="divider"></div>
                        <ul className="reset-ul mrg5B">
                          <li><a href="#">View login page example <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                          <li><a href="#">View lockscreen example <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                          <li><a href="#">View account details <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                        </ul>
                        <div className="button-pane button-pane-alt pad5L pad5R text-center"><a href="#" className="btn btn-flat display-block font-normal btn-danger"><i className="glyph-icon icon-power-off"></i> Logout</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="header-nav-right"><a href="#" className="hdr-btn popover-button" title="Search" data-placement="bottom" data-id="#popover-search"><i className="glyph-icon icon-search"></i></a>
                  <div className="hide" id="popover-search">
                    <div className="pad5A box-md">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search terms here ...">
                        <span className="input-group-btn"><a className="btn btn-primary" href="#">Search</a></span>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown" id="dashnav-btn"><a href="#" data-toggle="dropdown" data-placement="bottom" className="popover-button-header tooltip-button" title="Dashboard Quick Menu"><i className="glyph-icon icon-linecons-cog"></i></a>
                    <div className="dropdown-menu float-left">
                      <div className="box-sm">
                        <div className="pad5T pad5B pad10L pad10R dashboard-buttons clearfix">
                          <a href="#" className="btn vertical-button hover-blue-alt" title="">
                            <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-dashboard opacity-80 font-size-20"></i></span> Dashboard
                          </a>
                          <a href="#" className="btn vertical-button hover-green" title="">
                            <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-tags opacity-80 font-size-20"></i></span> Widgets
                          </a>
                          <a href="#" className="btn vertical-button hover-orange" title="">
                            <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-fire opacity-80 font-size-20"></i></span> Tables
                          </a>
                          <a href="#" className="btn vertical-button hover-orange" title="">
                            <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-bar-chart-o opacity-80 font-size-20"></i></span> Charts
                          </a>
                          <a href="#" className="btn vertical-button hover-purple" title="">
                            <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-laptop opacity-80 font-size-20"></i></span> Buttons
                          </a>
                          <a href="#" className="btn vertical-button hover-azure" title="">
                            <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-code opacity-80 font-size-20"></i></span> Panels
                          </a>
                        </div>
                        <div className="divider"></div>
                        <div className="pad5T pad5B pad10L pad10R dashboard-buttons clearfix"><a href="#" className="btn vertical-button remove-border btn-info" title="">
                          <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-dashboard opacity-80 font-size-20"></i></span> Dashboard</a>
                          <a href="#" className="btn vertical-button remove-border btn-danger" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-tags opacity-80 font-size-20"></i></span> Widgets</a>
                          <a href="#" className="btn vertical-button remove-border btn-purple" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-fire opacity-80 font-size-20"></i></span> Tables</a>
                          <a href="#" className="btn vertical-button remove-border btn-azure" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-bar-chart-o opacity-80 font-size-20"></i></span> Charts</a>
                          <a href="#" className="btn vertical-button remove-border btn-yellow" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-laptop opacity-80 font-size-20"></i></span> Buttons</a>
                          <a href="#" className="btn vertical-button remove-border btn-warning" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-code opacity-80 font-size-20"></i></span> Panels</a>
                        </div>
                      </div>
                    </div>
                  </div><a href="#" className="hdr-btn" id="fullscreen-btn" title="Fullscreen"><i className="glyph-icon icon-arrows-alt"></i></a> <a href="#" className="hdr-btn sb-toggle-left" id="chatbox-btn" title="Chat sidebar"><i className="glyph-icon icon-linecons-paper-plane"></i></a>
                  <div className="dropdown" id="notifications-btn">
                    <a data-toggle="dropdown" href="#" title="">
                      <span className="small-badge bg-yellow"></span>
                      <i className="glyph-icon icon-linecons-megaphone"></i></a>
                      <div className="dropdown-menu box-md float-left">
                        <div className="popover-title display-block clearfix pad10A">Notifications <a className="text-transform-cap font-primary font-normal btn-link float-right" href="#" title="View more options">More options...</a></div>
                        <div className="scrollable-content scrollable-slim-box">
                          <ul className="no-border notifications-box">
                            <li><span className="bg-danger icon-notification glyph-icon icon-bullhorn"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                            <li><span className="bg-warning icon-notification glyph-icon icon-users"></span> <span className="notification-text font-blue">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                            <li><span className="bg-green icon-notification glyph-icon icon-sitemap"></span> <span className="notification-text font-green">A success message example.</span><div className="notification-time"><b>2 hours</b> ago <span className="glyph-icon icon-clock-o"></span></div></li>
                            <li><span className="bg-azure icon-notification glyph-icon icon-random"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                            <li><span className="bg-warning icon-notification glyph-icon icon-ticket"></span> <span className="notification-text">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                            <li><span className="bg-blue icon-notification glyph-icon icon-user"></span> <span className="notification-text font-blue">Alternate notification styling.</span><div className="notification-time"><b>2 hours</b> ago <span className="glyph-icon icon-clock-o"></span></div></li>
                            <li><span className="bg-purple icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                            <li><span className="bg-warning icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                            <li><span className="bg-green icon-notification glyph-icon icon-user"></span> <span className="notification-text font-green">A success message example.</span><div className="notification-time"><b>2 hours</b> ago <span className="glyph-icon icon-clock-o"></span></div></li>
                            <li><span className="bg-purple icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                            <li><span className="bg-warning icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                          </ul>
                        </div>
                        <div className="button-pane button-pane-alt pad5T pad5L pad5R text-center">
                          <a href="#" className="btn btn-flat btn-primary" title="View all notifications">View all notifications</a>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown" id="progress-btn">
                      <a data-toggle="dropdown" href="#" title=""><span className="small-badge bg-azure"></span> <i className="glyph-icon icon-linecons-params"></i></a>
                      <div className="dropdown-menu pad0A box-sm float-left" id="progress-dropdown">
                        <div className="scrollable-content scrollable-slim-box">
                          <ul className="no-border progress-box progress-box-links">
                            <li><a href="#" title=""><div className="progress-title">Finishing uploading files <b>23%</b></div><div className="progressbar-smaller progressbar" data-value="23"><div className="progressbar-value bg-blue-alt"><div className="progressbar-overlay"></div></div></div></a></li>
                            <li><a href="#" title=""><div className="progress-title">Roadmap progress <b>91%</b></div><div className="progressbar-smaller progressbar" data-value="91"><div className="progressbar-value bg-red"><div className="progressbar-overlay"></div></div></div></a></li>
                            <li><a href="#" title=""><div className="progress-title">Images upload <b>58%</b></div><div className="progressbar-smaller progressbar" data-value="58"><div className="progressbar-value bg-green"></div></div></a></li>
                            <li><a href="#" title=""><div className="progress-title">WordPress migration <b>74%</b></div><div className="progressbar-smaller progressbar" data-value="74"><div className="progressbar-value bg-purple"></div></div></a></li>
                            <li><a href="#" title=""><div className="progress-title">Agile development procedures <b>91%</b></div><div className="progressbar-smaller progressbar" data-value="91"><div className="progressbar-value bg-black"><div className="progressbar-overlay"></div></div></div></a></li>
                            <li><a href="#" title=""><div className="progress-title">Systems integration <b>58%</b></div><div className="progressbar-smaller progressbar" data-value="58"><div className="progressbar-value bg-azure"></div></div></a></li>
                            <li><a href="#" title=""><div className="progress-title">Code optimizations <b>97%</b></div><div className="progressbar-smaller progressbar" data-value="97"><div className="progressbar-value bg-yellow"></div></div></a></li>
                          </ul>
                        </div>
                        <div className="button-pane button-pane-alt pad5A text-center"><a href="#" className="btn btn-flat display-block font-normal hover-green" title="View all notifications">View all notifications</a></div>
                      </div>
                    </div>
                    <div className="dropdown" id="cloud-btn"><a href="#" data-placement="bottom" className="tooltip-button sb-toggle-right" title="Statistics Sidebar"><i className="glyph-icon icon-linecons-cloud"></i></a></div>
                  </div>
                </div>
                <script type="text/javascript" src="../bin/assets/widgets/tabs/tabs.js"></script>
                <div id="page-title">
                  <h2>FAQ Section</h2>
                  <p className="mrg15B">Example FAQ section created using the components available in DelightUI</p>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <ul className="list-group">
                      <li className="mrg10B"><a href="#faq-tab-1" data-toggle="tab" className="list-group-item bg-white">How to get paid <i className="glyph-icon icon-angle-right mrg0A"></i></a></li>
                      <li className="mrg10B"><a href="#faq-tab-2" data-toggle="tab" className="list-group-item bg-white">ThemeForest related <i className="glyph-icon font-green icon-angle-right mrg0A"></i></a></li>
                      <li className="mrg10B"><a href="#faq-tab-3" data-toggle="tab" className="list-group-item bg-white">Common questions <i className="glyph-icon icon-angle-right mrg0A"></i></a></li>
                      <li className="mrg10B"><a href="#faq-tab-4" data-toggle="tab" className="list-group-item bg-white">Terms of service <i className="glyph-icon icon-angle-right mrg0A"></i></a></li>
                    </ul>
                  </div>
                  <div className="col-md-9">
                    <div className="tab-content">
                      <div className="tab-pane fade active in pad0A" id="faq-tab-1">
                        <div className="panel-group" id="accordion5">
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion5" href="#collapseOne">Collapsible Group Item #1</a></h4>
                            </div>
                            <div id="collapseOne" className="panel-collapse collapse in">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.</p>
                                <p className="mrg15B">For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                                <p className="mrg15B">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.</p>
                              </div>
                            </div>
                          </div>
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion5" href="#collapseTwo">Collapsible Group Item #2</a></h4>
                            </div>
                            <div id="collapseTwo" className="panel-collapse collapse">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                                <p className="mrg15B">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                              </div>
                            </div>
                          </div>
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion5" href="#collapseThree">Collapsible Group Item #3</a></h4>
                            </div>
                            <div id="collapseThree" className="panel-collapse collapse">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                                <p className="mrg15B">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade pad0A" id="faq-tab-2">
                        <div className="panel-group" id="accordion1">
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion1" href="#collapseOne1">Collapsible Group Item #1</a></h4>
                            </div>
                            <div id="collapseOne1" className="panel-collapse collapse in">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                                <p className="mrg15B">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                              </div>
                            </div>
                          </div>
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion1" href="#collapseTwo1">Collapsible Group Item #2</a></h4>
                            </div>
                            <div id="collapseTwo1" className="panel-collapse collapse">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
                              </div>
                            </div>
                          </div>
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion1" href="#collapseThree1">Collapsible Group Item #3</a></h4>
                            </div>
                            <div id="collapseThree1" className="panel-collapse collapse">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.</p>
                                <p className="mrg15B">For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                                <p className="mrg15B">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade pad0A" id="faq-tab-3">
                        <div className="panel-group" id="accordion2">
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion2" href="#collapseOne2">Collapsible Group Item #1</a></h4>
                            </div>
                            <div id="collapseOne2" className="panel-collapse collapse in">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                                <p className="mrg15B">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                              </div>
                            </div>
                          </div>
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo2">Collapsible Group Item #2</a></h4>
                            </div>
                            <div id="collapseTwo2" className="panel-collapse collapse">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                              </div>
                            </div>
                          </div>
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion2" href="#collapseThree2">Collapsible Group Item #3</a></h4>
                            </div>
                            <div id="collapseThree2" className="panel-collapse collapse">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade pad0A" id="faq-tab-4">
                        <div className="panel-group" id="accordion3">
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseOne4">Collapsible Group Item #1</a></h4>
                            </div>
                            <div id="collapseOne4" className="panel-collapse collapse in">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                              </div>
                            </div>
                          </div>
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo4">Collapsible Group Item #2</a></h4>
                            </div>
                            <div id="collapseTwo4" className="panel-collapse collapse">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                              </div>
                            </div>
                          </div>
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseThree4">Collapsible Group Item #3</a></h4>
                            </div>
                            <div id="collapseThree4" className="panel-collapse collapse">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>































                <div id="page-header">
                  <div id="header-nav-left">
                    <a className="header-btn" id="logout-btn" href="lockscreen-3.html" title="Lockscreen page example">
                      <i className="glyph-icon icon-linecons-lock"></i>
                    </a>
                    <div className="user-account-btn dropdown">
                      <a href="#" title="My Account" className="user-profile clearfix" data-toggle="dropdown">
                        <img width="28" src="../bin/assets/image-resources/gravatar.jpg" alt="Profile image">
                        <span>Michael Lee</span>
                        <i className="glyph-icon icon-angle-down"></i>
                      </a>
                      <div className="dropdown-menu float-right">
                        <div className="box-sm">
                          <div className="login-box clearfix">
                            <div className="user-img">
                              <a href="#" title="" className="change-img">Change photo</a>
                              <img src="../bin/assets/image-resources/gravatar.jpg" alt="">
                            </div>
                            <div className="user-info">
                              <span>Michael Lee <i>UX/UI developer</i></span>
                              <a href="#" title="Edit profile">Edit profile</a>
                              <a href="#" title="View notifications">View notifications</a>
                            </div>
                          </div>
                          <div className="divider"></div>
                          <ul className="reset-ul mrg5B">
                            <li><a href="#">View login page example <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                            <li><a href="#">View lockscreen example <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                            <li><a href="#">View account details <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                          </ul>
                          <div className="button-pane button-pane-alt pad5L pad5R text-center">
                            <a href="#" className="btn btn-flat display-block font-normal btn-danger">
                              <i className="glyph-icon icon-power-off"></i> Logout
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="header-nav-right">
                    <a href="#" className="hdr-btn popover-button" title="Search" data-placement="bottom" data-id="#popover-search">
                      <i className="glyph-icon icon-search"></i>
                    </a>
                    <div className="hide" id="popover-search">
                      <div className="pad5A box-md">
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Search terms here ...">
                          <span className="input-group-btn">
                            <a className="btn btn-primary" href="#">Search</a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown" id="dashnav-btn">
                      <a href="#" data-toggle="dropdown" data-placement="bottom" className="popover-button-header tooltip-button" title="Dashboard Quick Menu">
                        <i className="glyph-icon icon-linecons-cog"></i>
                      </a>
                      <div className="dropdown-menu float-left">
                        <div className="box-sm">
                          <div className="pad5T pad5B pad10L pad10R dashboard-buttons clearfix">
                            <a href="#" className="btn vertical-button hover-blue-alt" title="">
                              <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-dashboard opacity-80 font-size-20"></i></span> Dashboard
                            </a>
                            <a href="#" className="btn vertical-button hover-green" title="">
                              <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-tags opacity-80 font-size-20"></i></span> Widgets
                            </a>
                            <a href="#" className="btn vertical-button hover-orange" title="">
                              <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-fire opacity-80 font-size-20"></i></span> Tables
                            </a>
                            <a href="#" className="btn vertical-button hover-orange" title="">
                              <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-bar-chart-o opacity-80 font-size-20"></i></span> Charts
                            </a>
                            <a href="#" className="btn vertical-button hover-purple" title="">
                              <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-laptop opacity-80 font-size-20"></i></span> Buttons
                            </a>
                            <a href="#" className="btn vertical-button hover-azure" title="">
                              <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-code opacity-80 font-size-20"></i></span> Panels
                            </a>
                          </div>
                          <div className="divider"></div>
                          <div className="pad5T pad5B pad10L pad10R dashboard-buttons clearfix">
                            <a href="#" className="btn vertical-button remove-border btn-info" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-dashboard opacity-80 font-size-20"></i></span> Dashboard</a>
                            <a href="#" className="btn vertical-button remove-border btn-danger" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-tags opacity-80 font-size-20"></i></span> Widgets</a>
                            <a href="#" className="btn vertical-button remove-border btn-purple" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-fire opacity-80 font-size-20"></i></span> Tables</a>
                            <a href="#" className="btn vertical-button remove-border btn-azure" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-bar-chart-o opacity-80 font-size-20"></i></span> Charts</a>
                            <a href="#" className="btn vertical-button remove-border btn-yellow" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-laptop opacity-80 font-size-20"></i></span> Buttons</a>
                            <a href="#" className="btn vertical-button remove-border btn-warning" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-code opacity-80 font-size-20"></i></span> Panels</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="hdr-btn" id="fullscreen-btn" title="Fullscreen">
                      <i className="glyph-icon icon-arrows-alt"></i>
                    </a>
                    <a href="#" className="hdr-btn sb-toggle-left" id="chatbox-btn" title="Chat sidebar">
                      <i className="glyph-icon icon-linecons-paper-plane"></i>
                    </a>
                    <div className="dropdown" id="notifications-btn">
                      <a data-toggle="dropdown" href="#" title="">
                        <span className="small-badge bg-yellow"></span>
                        <i className="glyph-icon icon-linecons-megaphone"></i>
                      </a>
                      <div className="dropdown-menu box-md float-left">
                        <div className="popover-title display-block clearfix pad10A">Notifications <a className="text-transform-cap font-primary font-normal btn-link float-right" href="#" title="View more options">More options...</a></div>
                          <div className="scrollable-content scrollable-slim-box">
                                          <ul className="no-border notifications-box">
                                            <li><span className="bg-danger icon-notification glyph-icon icon-bullhorn"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                            <li><span className="bg-warning icon-notification glyph-icon icon-users"></span> <span className="notification-text font-blue">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                            <li><span className="bg-green icon-notification glyph-icon icon-sitemap"></span> <span className="notification-text font-green">A success message example.</span><div className="notification-time"><b>2 hours</b> ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                            <li><span className="bg-azure icon-notification glyph-icon icon-random"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                            <li><span className="bg-warning icon-notification glyph-icon icon-ticket"></span> <span className="notification-text">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                            <li><span className="bg-blue icon-notification glyph-icon icon-user"></span> <span className="notification-text font-blue">Alternate notification styling.</span><div className="notification-time"><b>2 hours</b> ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                            <li><span className="bg-purple icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                            <li><span className="bg-warning icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                            <li><span className="bg-green icon-notification glyph-icon icon-user"></span> <span className="notification-text font-green">A success message example.</span><div className="notification-time"><b>2 hours</b> ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                            <li><span className="bg-purple icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                            <li><span className="bg-warning icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                          </ul>
                                        </div>
                                        <div className="button-pane button-pane-alt pad5T pad5L pad5R text-center">
                                          <a href="#" className="btn btn-flat btn-primary" title="View all notifications">View all notifications</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="dropdown" id="progress-btn">
                                      <a data-toggle="dropdown" href="#" title=""><span className="small-badge bg-azure"></span> <i className="glyph-icon icon-linecons-params"></i></a>
                                      <div className="dropdown-menu pad0A box-sm float-left" id="progress-dropdown">
                                        <div className="scrollable-content scrollable-slim-box">
                                          <ul className="no-border progress-box progress-box-links">
                                            <li><a href="#" title=""><div className="progress-title">Finishing uploading files <b>23%</b></div><div className="progressbar-smaller progressbar" data-value="23"><div className="progressbar-value bg-blue-alt"><div className="progressbar-overlay"></div></div></div></a></li>
                                            <li><a href="#" title=""><div className="progress-title">Roadmap progress <b>91%</b></div><div className="progressbar-smaller progressbar" data-value="91"><div className="progressbar-value bg-red"><div className="progressbar-overlay"></div></div></div></a></li>
                                            <li><a href="#" title=""><div className="progress-title">Images upload <b>58%</b></div><div className="progressbar-smaller progressbar" data-value="58"><div className="progressbar-value bg-green"></div></div></a></li>
                                            <li><a href="#" title=""><div className="progress-title">WordPress migration <b>74%</b></div><div className="progressbar-smaller progressbar" data-value="74"><div className="progressbar-value bg-purple"></div></div></a></li>
                                            <li><a href="#" title=""><div className="progress-title">Agile development procedures <b>91%</b></div><div className="progressbar-smaller progressbar" data-value="91"><div className="progressbar-value bg-black"><div className="progressbar-overlay"></div></div></div></a></li>
                                            <li><a href="#" title=""><div className="progress-title">Systems integration <b>58%</b></div><div className="progressbar-smaller progressbar" data-value="58"><div className="progressbar-value bg-azure"></div></div></a></li>
                                            <li><a href="#" title=""><div className="progress-title">Code optimizations <b>97%</b></div><div className="progressbar-smaller progressbar" data-value="97"><div className="progressbar-value bg-yellow"></div></div></a></li>
                                          </ul>
                                        </div>
                                        <div className="button-pane button-pane-alt pad5A text-center"><a href="#" className="btn btn-flat display-block font-normal hover-green" title="View all notifications">View all notifications</a></div>
                                      </div>
                                    </div>
                                    <div className="dropdown" id="cloud-btn"><a href="#" data-placement="bottom" className="tooltip-button sb-toggle-right" title="Statistics Sidebar"><i className="glyph-icon icon-linecons-cloud"></i></a></div>
                                  </div>
                                </div>
                                <script type="text/javascript" src="../bin/assets/widgets/tabs/tabs.js"></script>
                                <div id="page-title">
                                  <h2>FAQ Section</h2>
                                  <p className="mrg15B">Example FAQ section created using the components available in DelightUI</p>
                                </div>
                                <div className="row">
                                  <div className="col-md-3">
                                    <ul className="list-group">
                                      <li className="mrg10B"><a href="#faq-tab-1" data-toggle="tab" className="list-group-item bg-white">How to get paid <i className="glyph-icon icon-angle-right mrg0A"></i></a></li>
                                      <li className="mrg10B"><a href="#faq-tab-2" data-toggle="tab" className="list-group-item bg-white">ThemeForest related <i className="glyph-icon font-green icon-angle-right mrg0A"></i></a></li>
                                      <li className="mrg10B"><a href="#faq-tab-3" data-toggle="tab" className="list-group-item bg-white">Common questions <i className="glyph-icon icon-angle-right mrg0A"></i></a></li>
                                      <li className="mrg10B"><a href="#faq-tab-4" data-toggle="tab" className="list-group-item bg-white">Terms of service <i className="glyph-icon icon-angle-right mrg0A"></i></a></li>
                                    </ul>
                                  </div>
                                  <div className="col-md-9">
                                    <div className="tab-content">
                                      <div className="tab-pane fade active in pad0A" id="faq-tab-1">
                                        <div className="panel-group" id="accordion5">
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion5" href="#collapseOne">Collapsible Group Item #1</a></h4>
                                            </div>
                                            <div id="collapseOne" className="panel-collapse collapse in">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.</p>
                                                <p className="mrg15B">For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                                                <p className="mrg15B">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.</p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion5" href="#collapseTwo">Collapsible Group Item #2</a></h4>
                                            </div>
                                            <div id="collapseTwo" className="panel-collapse collapse">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                                                <p className="mrg15B">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion5" href="#collapseThree">Collapsible Group Item #3</a></h4>
                                            </div>
                                            <div id="collapseThree" className="panel-collapse collapse">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                                                <p className="mrg15B">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="tab-pane fade pad0A" id="faq-tab-2">
                                        <div className="panel-group" id="accordion1">
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion1" href="#collapseOne1">Collapsible Group Item #1</a></h4>
                                            </div>
                                            <div id="collapseOne1" className="panel-collapse collapse in">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                                                <p className="mrg15B">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion1" href="#collapseTwo1">Collapsible Group Item #2</a></h4>
                                            </div>
                                            <div id="collapseTwo1" className="panel-collapse collapse">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion1" href="#collapseThree1">Collapsible Group Item #3</a></h4>
                                            </div>
                                            <div id="collapseThree1" className="panel-collapse collapse">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.</p>
                                                <p className="mrg15B">For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                                                <p className="mrg15B">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="tab-pane fade pad0A" id="faq-tab-3">
                                        <div className="panel-group" id="accordion2">
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion2" href="#collapseOne2">Collapsible Group Item #1</a></h4>
                                            </div>
                                            <div id="collapseOne2" className="panel-collapse collapse in">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                                                <p className="mrg15B">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo2">Collapsible Group Item #2</a></h4>
                                            </div>
                                            <div id="collapseTwo2" className="panel-collapse collapse">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion2" href="#collapseThree2">Collapsible Group Item #3</a></h4>
                                            </div>
                                            <div id="collapseThree2" className="panel-collapse collapse">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="tab-pane fade pad0A" id="faq-tab-4">
                                        <div className="panel-group" id="accordion3">
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseOne4">Collapsible Group Item #1</a></h4>
                                            </div>
                                            <div id="collapseOne4" className="panel-collapse collapse in">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo4">Collapsible Group Item #2</a></h4>
                                            </div>
                                            <div id="collapseTwo4" className="panel-collapse collapse">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseThree4">Collapsible Group Item #3</a></h4>
                                            </div>
                                            <div id="collapseThree4" className="panel-collapse collapse">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
*/

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.selectItem = selectItem;
exports.getListItem = getListItem;
exports.addItem = addItem;
var ITEM_CLICKED = exports.ITEM_CLICKED = 'ITEM_CLICKED';
var ITEM_VIEW = exports.ITEM_VIEW = 'ITEM_VIEW';
var ADD_ITEM = exports.ADD_ITEM = 'ADD_ITEM';

var PROMISE = exports.PROMISE = 'PROMISE';

function selectItem(listItem) {
    return {
        type: ITEM_CLICKED,
        payload: listItem
    };
}

function getListItem(id) {
    return {
        type: ITEM_VIEW,
        payload: id
    };
}

function addItem(item) {
    return {
        type: ADD_ITEM,
        payload: item
    };
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const {Schema}=mongoose;

var ArticleSchema = new _mongoose2.default.Schema({
  //_id: String,
  name: { type: String, ref: 'Order' },
  template: { type: String, ref: 'ArticleTemplate' },
  snsSources: {
    "0": {
      id: String,
      alphavit: String,
      length: Number
    },
    "2": {
      id: String,
      alphavit: String,
      length: Number,
      gs1Prefix: String
    },
    "3": {
      id: String,
      alphavit: String,
      length: Number,
      gs1Prefix: String
    }
  },
  gtin: String,
  expiryPeriod: Number,
  special: Number
});

exports.default = _mongoose2.default.model("Articles", ArticleSchema);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const {Schema}=mongoose;

var ArticleSchema = new _mongoose2.default.Schema({
  //  _id: String,
  name: String,
  aggregation: {
    "0": {
      displayName: String,
      childCount: Number
    },
    "2": {
      displayName: String,
      childCount: Number
    },
    "3": {
      displayName: String,
      childCount: Number
    }
  },
  gs1Data: {
    "0": {
      "10": {
        name: String,
        displayName: String,
        _type: String,
        writable: Number
      },
      "17": {
        name: String,
        displayName: String,
        _type: String,
        writable: Number
      },
      "01": {
        name: String,
        displayName: String,
        _type: String,
        writable: Number
      }
    },
    "2": {
      "10": {
        name: String,
        displayName: String,
        _type: String,
        writable: Number
      },
      "02": {
        name: String,
        displayName: String,
        _type: String,
        writable: Number
      }
    },
    "3": {
      "10": {
        name: String,
        displayName: String,
        _type: String,
        writable: Number
      }
    }
  }
}, {
  "timestamps": true
});
//hjgjhg

exports.default = _mongoose2.default.model("ArticleTemplate", ArticleSchema);
//export default mongoose.model("Articletest",ArticleSchema);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LineSchema = new _mongoose2.default.Schema({
  _id: String,
  name: String,
  devices: String,
  state: String,
  order: String
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Topic' collection in the MongoDB database
/**
 * Schema Definitions
 *
 */
exports.default = _mongoose2.default.model('Line', LineSchema);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrdersSchema = new _mongoose2.default.Schema({
  gs1Data: {
    "0": {
      "10": String,
      "17": String,
      "01": String
    },
    "2": {
      "10": String,
      "02": String
    },
    "3": {
      "10": String
    }
  },
  created: { type: Date, default: Date.now },
  credentials: Number,
  article: { type: String, ref: 'Articles' },
  expireDate: Date,
  quantity: Number,
  batchNumber: String,
  name: String,
  comments: String,
  creator: { type: String, ref: 'Users' },
  status: { type: Number, ref: 'OrderStatus' },
  line: { type: String, ref: 'Line' },
  snCount: {
    "0": {
      "1": Number,
      "2": Number,
      "3": Number,
      "4": Number,
      "5": Number
    },
    "1": {
      "1": Number,
      "2": Number,
      "3": Number,
      "4": Number,
      "5": Number
    },
    "2": {
      "1": Number,
      "2": Number,
      "3": Number,
      "4": Number,
      "5": Number
    },
    "3": {
      "1": Number,
      "2": Number,
      "3": Number,
      "4": Number,
      "5": Number
    }
    /*text: String,
    count: { type: Number, min: 0 },
    date: { type: Date, default: Date.now }*/
  } });

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Topic' collection in the MongoDB database
/**
 * Schema Definitions
 *
 */
exports.default = _mongoose2.default.model('Order', OrdersSchema);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderSchema = new _mongoose2.default.Schema({
  _id: Number,
  name: String
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Topic' collection in the MongoDB database
/**
 * Schema Definitions
 *
 */
exports.default = _mongoose2.default.model('OrderStatus', OrderSchema);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductsSchema = new _mongoose2.default.Schema({
  _id: String,
  order: { type: String, ref: 'Order' },
  article: { type: String, ref: 'Article' },
  aggregation: Number,
  status: { type: Number, ref: 'ProductStatus' },
  serialized: Date,
  line: { type: String, ref: 'Line' },
  parent: String
}, {
  timestamp: true
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Topic' collection in the MongoDB database
/**
 * Schema Definitions
 *
 */
exports.default = _mongoose2.default.model('Product', ProductsSchema);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const {Schema}=mongoose;
var StatusSchema = new _mongoose2.default.Schema({
  _id: String,
  name: String
});
//hjgjhg

exports.default = _mongoose2.default.model("Productstatus", StatusSchema);
//export default mongoose.model("Articletest",ArticleSchema);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _mongoose2.default.Schema({
  //_id: String,
  //text: String,
  name: String,
  password: String,
  token: String,
  createdAt: { type: Date, default: Date.now }
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Topic' collection in the MongoDB database
/**
 * Schema Definitions
 *
 */
exports.default = _mongoose2.default.model('User', UserSchema);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(18);

var _express2 = _interopRequireDefault(_express);

var _index = __webpack_require__(30);

var _index2 = _interopRequireDefault(_index);

var _connect = __webpack_require__(23);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connectToMongo = (0, _connect2.default)();
var app = (0, _express2.default)();
//import _ from 'lodash';
app.use('/bin', _express2.default.static('./bin'));
app.use('/stylesheets', _express2.default.static('./public/stylesheets'));

app.use('/', _index2.default);
app.use('/view/*', _index2.default);
app.use('/salex', _index2.default);
app.use('/automenu', _index2.default);
app.use('/store', _index2.default);
app.use('/orders', _index2.default);

app.listen(3000, function () {
	console.log('Hello World listening on port 3000!');
});

/// comment___2

///whith new stage-1

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _models = __webpack_require__(27);

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  // Find the appropriate database to connect to, default to localhost if not found.
  var connect = function connect() {

    return new Promise(function (resolve, reject) {
      _mongoose2.default.Promise = __webpack_require__(55);
      _mongoose2.default.set('debug', false);
      var dbURI = 'mongodb://localhost:27017/salex';

      // Create the database connection
      //setTimeout(()=>{mongoose.connect(dbURI,{ useMongoClient: true, })},6000)
      _mongoose2.default.connect(dbURI, { useMongoClient: true });

      // CONNECTION EVENTS
      // When successfully connected
      resolve(_mongoose2.default.connection.on('connected', function () {
        console.log('Mongoose default connection open to ' + dbURI);
      }));

      // If the connection throws an error
      reject(_mongoose2.default.connection.on('error', function (err) {
        console.log('Mongoose default connection error: ' + err);
      }));

      // When the connection is disconnected
      _mongoose2.default.connection.on('disconnected', function () {
        console.log('Mongoose default connection disconnected');
      });
    });
  };

  connect();

  (0, _models2.default)();
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(19);

var _lodash2 = _interopRequireDefault(_lodash);

var _Product = __webpack_require__(15);

var _Product2 = _interopRequireDefault(_Product);

var _Line = __webpack_require__(12);

var _Line2 = _interopRequireDefault(_Line);

var _ArticleTemplate = __webpack_require__(11);

var _ArticleTemplate2 = _interopRequireDefault(_ArticleTemplate);

var _Article = __webpack_require__(10);

var _Article2 = _interopRequireDefault(_Article);

var _Order = __webpack_require__(13);

var _Order2 = _interopRequireDefault(_Order);

var _OrderStatus = __webpack_require__(14);

var _OrderStatus2 = _interopRequireDefault(_OrderStatus);

var _ProductStatus = __webpack_require__(16);

var _ProductStatus2 = _interopRequireDefault(_ProductStatus);

var _User = __webpack_require__(17);

var _User2 = _interopRequireDefault(_User);

var _Device = __webpack_require__(25);

var _Device2 = _interopRequireDefault(_Device);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//import TestCollection from "../models/TestCollection";


/**ArticleTemplate
 * List All numbers (no)
 */
/// comment
function randWDclassic(countNum, boxChild, palletChild, length, lengthp, lengthb) {
  var abd = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'abcdefghijklmnopqrstuvwxyz0123456789';
  var abdb = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'abcdefghijklmnopqrstuvwxyz0123456789';
  var abdp = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 'abcdefghijklmnopqrstuvwxyz0123456789';
  var type = arguments[9];
  var typeb = arguments[10];
  var typep = arguments[11];
  var levels = arguments[12];
  var boxCount = arguments[13];
  var pallCount = arguments[14];
  // [ 3 ] random words and digits by the wocabulary


  var aL = abd.length,
      aLp = abdp.length,
      aLb = abdb.length;
  var massPallet = [],
      massBox = [],
      massSerials = [];

  //  1000 / 20 / 4 /
  var boxNum = Math.ceil(countNum / boxChild);
  var palletNum = Math.ceil(boxNum / palletChild);
  //const countNum=1000;
  //const boxNum=50;
  //const palletNum=13;
  //console.log(palletNum);

  if (typep == 'datamatrix') {
    for (var i = 0; i < palletNum; i++) {

      var s = '';
      while (s.length < lengthp) {
        s += abdp[Math.random() * aLp | 0];
      }var text = 'parent';

      massPallet[i] = {
        _id: s,
        article: 'levels',
        order: 'order',
        aggregation: 0,
        status: 1,
        serialized: new Date(),
        line: 'line1',
        parent: text
      };
    }
  } else {
    for (var _i = 0; _i < palletNum; _i++) {
      var _s = '';
      var numLength = lengthp - typep.length;
      while (_s.length < numLength) {
        _s += abdp[Math.random() * aLp | 0];
      }var _text = 'parent';
      massPallet[_i] = {
        _id: typep + _s,
        article: 'levels',
        order: 'order',
        aggregation: 0,
        status: 1,
        serialized: new Date(),
        line: 'line1',
        parent: _text
      };
    }
  }

  if (typeb == 'datamatrix') {
    var j = 0;
    var count = 0;
    for (var _i2 = 0; _i2 < boxNum; _i2++) {
      var _s2 = '';
      while (_s2.length < lengthb) {
        _s2 += abdb[Math.random() * aLb | 0];
      }if (count < palletChild) {
        massBox[_i2] = {
          _id: _s2,
          article: 'levels',
          order: 'order',
          status: 1,
          aggregation: 0,
          serialized: new Date(),
          line: 'line1',
          parent: massPallet[j]._id
        };
        count++;
      } else {
        j++;
        _i2--;
        count = 0;
      }
    }
  } else {
    var _j = 0;
    var _count = 0;
    for (var _i3 = 0; _i3 < boxNum; _i3++) {
      var _s3 = '';
      var _numLength = lengthb - typeb.length;
      while (_s3.length < _numLength) {
        _s3 += abdb[Math.random() * aLb | 0];
      }if (_count < palletChild) {
        massBox[_i3] = {
          _id: typeb + _s3,
          article: 'levels',
          order: 'order',
          status: 1,
          aggregation: 0,
          serialized: new Date(),
          line: 'line1',
          parent: massPallet[_j]._id
        };
        _count = _count + 1;
      } else {
        _j++;
        _i3--;
        _count = 0;
      }
    }
  }

  if (type == 'datamatrix') {
    var _j2 = 0;
    var _count2 = 0;
    for (var _i4 = 0; _i4 < countNum; _i4++) {
      var _s4 = '';
      while (_s4.length < length) {
        _s4 += abd[Math.random() * aL | 0];
      }if (_count2 < boxChild) {
        massSerials[_i4] = {
          _id: _s4,
          article: 'levels',
          order: 'order',
          status: 1,
          aggregation: 0,
          serialized: new Date(),
          line: 'line1',
          parent: massBox[_j2]._id
        };
        _count2++;
      } else {
        _j2++;
        _i4--;
        _count2 = 0;
      }
    }
  } else {
    var _j3 = 0;
    var _count3 = 0;
    for (var _i5 = 0; _i5 < countNum; _i5++) {
      var _s5 = '';
      var _numLength2 = length - type.length;
      while (_s5.length < _numLength2) {
        _s5 += abd[Math.random() * aL | 0];
      }if (_count3 < boxChild) {
        massSerials[_i5] = {
          _id: type + _s5,
          article: 'levels',
          order: 'order',
          status: 1,
          aggregation: 0,
          serialized: new Date(),
          line: 'line1',
          parent: massBox[_j3]._id
        };
        _count3++;
      } else {
        _j3++;
        _i5--;
        _count3 = 0;
      }
    }
  }
  var united = _lodash2.default.unionBy(massPallet, massBox, massSerials, '_id');
  //var zipped = _.zip(massPallet, massBox, massSerials);

  return united;
}
//console.log(randWDclassic(100,20,4,10,10,10,'0123456789','abcdefghijklmnopqrstuvwxyz0123456789','abcdefghijklmnopqrstuvwxyz0123456789','datamatrix','123450','123456'));
// console.log(randWDclassic(10,10,"123456789"));

/////////////////////////////////////////////////
// ADD NEW data
/////////////////////////////////////////////////
/*const selectAll = () => {
  let initialData={};
  initialData.article =Article.find({});
  initialData.line = Line.find({});
  initialData.order = Order.find({});
  console.log('select data');
  //initialData[3] = await Product.find({});
  return initialData;
};*/
var selectAll = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var initialData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            initialData = {};
            _context.next = 3;
            return _Article2.default.find({});

          case 3:
            initialData.article = _context.sent;
            _context.next = 6;
            return _Line2.default.find({});

          case 6:
            initialData.line = _context.sent;
            _context.next = 9;
            return _Order2.default.find({}).populate('article').populate('status');

          case 9:
            initialData.order = _context.sent;

            console.log('select data');
            //initialData[3] = await Product.find({});
            return _context.abrupt("return", initialData);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function selectAll() {
    return _ref.apply(this, arguments);
  };
}();

var generateNumbers = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var date, broken, mongoNumbers, newNumbers, numbers, i;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            date = new Date();
            broken = 0;
            _context2.next = 4;
            return console.log('___date flag___1 ' + date.getMinutes() + '-' + date.getSeconds() + '-' + date.getMilliseconds());

          case 4:
            mongoNumbers = _Product2.default.find({}, { _id: 1 });

            date = new Date();
            _context2.next = 8;
            return console.log('___date flag___2 ' + date.getMinutes() + '-' + date.getSeconds() + '-' + date.getMilliseconds());

          case 8:
            newNumbers = randWDclassic(100000, 20, 4, 13, 18, 18, '0123456789', 'abcdefghijklmnopqrstuvwxyz0123456789', 'abcdefghijklmnopqrstuvwxyz0123456789', 'datamatrix', '123450', '123456');

            date = new Date();
            _context2.next = 12;
            return console.log('___date flag___3 ' + date.getMinutes() + '-' + date.getSeconds() + '-' + date.getMilliseconds());

          case 12:
            _context2.next = 14;
            return _lodash2.default.intersectionBy(mongoNumbers, newNumbers, '_id');

          case 14:
            broken = _context2.sent;
            _context2.next = 17;
            return _lodash2.default.unionBy(newNumbers, broken, '_id');

          case 17:
            numbers = _context2.sent;
            _context2.next = 20;
            return console.log('broken numbers: ' + broken.length);

          case 20:
            _context2.next = 22;
            return console.log('true numbers: ' + numbers.length);

          case 22:
            date = new Date();
            _context2.next = 25;
            return console.log('___date flag___4 ' + date.getMinutes() + '-' + date.getSeconds() + '-' + date.getMilliseconds());

          case 25:
            i = 0;

          case 26:
            if (!(i < numbers.length)) {
              _context2.next = 32;
              break;
            }

            _context2.next = 29;
            return _Product2.default.create(numbers[i]);

          case 29:
            i++;
            _context2.next = 26;
            break;

          case 32:
            date = new Date();
            _context2.next = 35;
            return console.log('___date flag___5 ' + date.getMinutes() + '-' + date.getSeconds() + '-' + date.getMilliseconds());

          case 35:
            return _context2.abrupt("return", true);

          case 36:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function generateNumbers() {
    return _ref2.apply(this, arguments);
  };
}();

var addLine = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var line;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Line2.default.create({ _id: "Line1", name: "Line1", devices: "TQSSM", state: "stopped", order: "s0" });

          case 2:
            line = _context3.sent;
            return _context3.abrupt("return", line);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function addLine() {
    return _ref3.apply(this, arguments);
  };
}();

var addOrder = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(options) {
    var order;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Order2.default.create({ gs1Data: {
                "0": { "10": options.batch, "17": dateConvert(options.expDate), "01": options.gtin },
                "2": { "10": options.batch, "02": options.gtin },
                "3": { "10": options.batch }
              },
              credentials: 0,
              article: options.article,
              expireDate: options.expDate,
              quantity: options.quantity,
              batchNumber: options.batch,
              name: options.name,
              comments: options.comments,
              creator: options.creator,
              status: 10,
              snCount: { "0": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 },
                "1": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 },
                "2": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 },
                "3": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 }
              },
              line: options.line
            }, function (err, small) {
              if (err) return handleError(err);
            });

          case 2:
            order = _context4.sent;
            return _context4.abrupt("return", order);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function addOrder(_x5) {
    return _ref4.apply(this, arguments);
  };
}();

var addArticle = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(options) {
    var article;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            article = _Article2.default.create({
              name: options.name,
              template: options.template,
              snsSourse: { "0": { id: options.id, alphavit: options.alphavit, length: options.length },
                "2": { id: options.id, alphavit: options.alphavit, length: options.length, gs1Prefix: options.gs1Prefix },
                "3": { id: options.id, alphavit: options.alphavit, length: options.length, gs1Prefix: options.gs1Prefix } },
              gtin: options.gtin,
              expiryPeriod: options.expPer,
              special: 0
            }, function (err, small) {
              if (err) return handleError(err);
            });
            return _context5.abrupt("return", article);

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function addArticle(_x6) {
    return _ref5.apply(this, arguments);
  };
}();

var addArticleTemplate = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(options) {
    var articleTemplate;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            articleTemplate = _ArticleTemplate2.default.create({
              name: options.name,
              aggregation: { "0": { displayName: "serialization", chidCount: options.serialization },
                "2": { displayName: "box", chidCount: options.box },
                "3": { displayName: "pallet", chidCount: options.pallet } },
              gs1Data: {
                "0": {
                  "10": { name: "[10]Batch or Lot Number(X..20)", displayName: "[10]Batch or Lot Number(X..20)", _type: "string", writable: 1 },
                  "17": { name: "[17] Expiration Date (N6)", displayName: "[17] Expiration Date (N6)", _type: "string", writable: 1 },
                  "01": { name: "[01] GTIN (N14)", displayName: "[01] GTIN (N14)", _type: "string", writable: 1 }
                },
                "2": {
                  "10": { name: "[10]Batch or Lot Number(X..20)", displayName: "[10]Batch or Lot Number(X..20)", _type: "string", writable: 1 },
                  "02": { name: "[02] GTIN of Contained Trade Items (N14)", displayName: "[02] GTIN of Contained Trade Items (N14)", _type: "string", writable: 1 }
                },
                "3": {
                  "10": { name: "[10]Batch or Lot Number(X..20)", displayName: "[10]Batch or Lot Number(X..20)", _type: "string", writable: 1 }
                }
              } });
            return _context6.abrupt("return", articleTemplate);

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, undefined);
  }));

  return function addArticleTemplate(_x7) {
    return _ref6.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////
// END ADD NEW data
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// SELECT NEW data
/////////////////////////////////////////////////


/////////////////////////////////////////////////
// END SELECT NEW data
/////////////////////////////////////////////////

/*



 const addProduct = async () => {


   const product = await Product.create(randWDclassic(100,20,4,10,10,10,'0123456789','abcdefghijklmnopqrstuvwxyz0123456789','abcdefghijklmnopqrstuvwxyz0123456789','datamatrix','123450','123456'));

   return product;
 };


 const addArticleTemplate_Test = async () => {
   const articleTemplate = ArticleTemplate.create({
     name:"SSCC_1",
     aggregation:{"0":{displayName:"serialization",childCount:20},
                  "2":{displayName:"box",childCount:4},
                  "3":{displayName:"pallet",childCount:1}
                 },
     gs1Data:{
              "0":{
                   "10":{name:"[10]Batch or Lot Number(X..20)",displayName:"[10]Batch or Lot Number(X..20)",_type:"string",writable:1},
                   "17":{name:"[17] Expiration Date (N6)",displayName:"[17] Expiration Date (N6)",_type:"string",writable:1},
                   "01":{name:"[01] GTIN (N14)",displayName:"[01] GTIN (N14)",_type:"string",writable:1},
                  },
              "2":{
                   "10":{name:"[10]Batch or Lot Number(X..20)",displayName:"[10]Batch or Lot Number(X..20)",_type:"string",writable:1},
                   "02":{name:"[02] GTIN of Contained Trade Items (N14)",displayName:"[02] GTIN of Contained Trade Items (N14)",_type:"string",writable:1},
                  },
              "3":{
                   "10":{name:"[10]Batch or Lot Number(X..20)",displayName:"[10]Batch or Lot Number(X..20)",_type:"string",writable:1}
                  }
              },
    });
   return articleTemplate;
 };

 const addArticle_Test = async () => {
   const article= Article.create({
     name:'testArticle',
     template:'59c8df6e98b2ae14ba259ab9',
     snsSourse:{"0":{id:'Datamatrix',alphavit:'0123456789',length:13},
                "2":{id:'SSCC',alphavit:'0123456789',length:18,gs1Prefix:'0123456'},
                "3":{id:'SSCC',alphavit:'0123456789',length:18,gs1Prefix:'0123456'},
               },
     gtin:'01234561234560',
     expiryPeriod:365,
     special:0
   });
   return article;
 };



 const addOrder_Test = async () => {
   const order = await Order.create({gs1Data:{
     "0":{"10":'1234',"17":'210918',"01":'01234561234560'},
     "2":{"10":'1234',"02":'01234561234560'},
     "3":{"10":'1234'}
   },
   credentials:0,
   article:'59c8e3c22d9fea177d8acc60',
   expireDate:Date("2018-09-21T08:06:59.138+0000"),
   quantity:300,
   batchNumber:1234,
   name:'test_order',
   comments:'_no',
   creator:'user',
   status:10,
   snCount:{"0":{"1":0,"2":0,"3":0,"4":0,"5":0},
            "1":{"1":0,"2":0,"3":0,"4":0,"5":0},
            "2":{"1":0,"2":0,"3":0,"4":0,"5":0},
            "3":{"1":0,"2":0,"3":0,"4":0,"5":0},
          },
   line:'Line1'
  },
     function (err, small) {if (err) return handleError(err)});
   return order;
 };


 const orderStatus_Test = async () => {
   const article= await OrderStatus.create([{
     _id:1,
     name:'Finished'
   },{
     _id:20,
     name:'Closed'
   },{
     _id:4,
     name:'Suspended'
   },{
     _id:11,
     name:'Starting'
   },{
     _id:12,
     name:'Stopping'
   },{
     _id:13,
     name:'Error'
   },{
     _id:5,
     name:'Generating'
   },{
     _id:14,
     name:'Loaded'
   },{
     _id:15,
     name:'Unloaded'
   },{
     _id:16,
     name:'Unassigned'
   }]);
   return article;
 };


 const productStatus_Test = async () => {
   const article= await ProductStatus.create([{
     _id:1,
     name:'New'
   },{
     _id:2,
     name:'Fetched'
   },{
     _id:3,
     name:'Ok'
   },{
     _id:4,
     name:'NOk'
   }]);
   return article;
 };

 const user_Test = async () => {
   const article= await User.create({
     name:'admin',
     password:'admin'
   });
   return article;
 };

 const addDevice_Test = async () => {
   const device= await Device.create({
     _id: 'TQSLM1',
     name: 'TQSLM1',
     _type: 'TQSLM',
     vid: '1529',
     pid: '8721',
     state: 'stopped',
     autoConnect: 1,
     log: 1,
     host: '192.168.30.10',
     port: '7973',
     enableLogging: true,
     liveSNUpdate: true,
     productionArea: 'Production',
     samplesArea: 'Samples',
     order: '59c8e7c2e65cf0193f7a7252',
     orderName: 'test_order',
   });
   return device;
 };
*/

exports.default = selectAll;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeviceSchema = new _mongoose2.default.Schema({
  _id: String,
  name: String,
  type: String,
  vid: String,
  pid: String,
  state: String,
  autoConnect: Number,
  log: Number,
  host: String,
  port: String,
  enableLogging: Boolean,
  liveSNUpdate: Boolean,
  productionArea: String,
  samplesArea: String,
  order: String,
  orderName: String
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Topic' collection in the MongoDB database
/**
 * Schema Definitions
 *
 */
exports.default = _mongoose2.default.model('Device', DeviceSchema);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogSchema = new _mongoose2.default.Schema({
  _id: String,
  model: String,
  id: String,
  userId: String,
  name: String,
  err: String
}, {
  "timestamps": true
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Topic' collection in the MongoDB database
/**
 * Schema Definitions
 *
 */
exports.default = _mongoose2.default.model('Log', LogSchema);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadModels;
function loadModels() {
  __webpack_require__(10);
  __webpack_require__(14);
  __webpack_require__(12);
  __webpack_require__(26);
  __webpack_require__(15);
  __webpack_require__(16);
  __webpack_require__(17);
  //require('./TestCollection');
  __webpack_require__(13);
  __webpack_require__(11);
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var middleware = function middleware(store) {
  return function (next) {
    return function (action) {

      if (action.type != 'PROMISE') {

        /*  store.dispatch({
            type:successAction,
            payload: action.payload
          });*/
        console.log('not promise_redux');
        return next(action);
      }
      console.log('promise_redux');

      var _action$actions = _slicedToArray(action.actions, 3),
          startAction = _action$actions[0],
          successAction = _action$actions[1],
          failureAction = _action$actions[2];

      store.dispatch({
        type: startAction
      });
      action.payload.then(function (data) {
        return store.dispatch({
          type: successAction,
          payload: data
        });
      }, function (error) {
        return store.dispatch({
          type: failureAction,
          payload: error });
      });
    };
  };
};
exports.default = middleware;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var middleware = function middleware(store) {
  return function (next) {
    return function (action) {

      if (action.type == 'DB') {
        var _action$actions = _slicedToArray(action.actions, 3),
            startAction = _action$actions[0],
            successAction = _action$actions[1],
            failureAction = _action$actions[2];

        store.dispatch({
          type: successAction,
          payload: action.payload
        });
      } else {
        return next(action);
      }
    };
  };
};
exports.default = middleware;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(18);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(57);

var _server2 = _interopRequireDefault(_server);

var _reactRouter = __webpack_require__(2);

var _routes = __webpack_require__(54);

var _routes2 = _interopRequireDefault(_routes);

var _index = __webpack_require__(51);

var _index2 = _interopRequireDefault(_index);

var _redux = __webpack_require__(20);

var _reactRedux = __webpack_require__(9);

var _list_actions = __webpack_require__(8);

var _reduxLogger = __webpack_require__(58);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _numbers = __webpack_require__(24);

var _numbers2 = _interopRequireDefault(_numbers);

var _initialData = __webpack_require__(28);

var _initialData2 = _interopRequireDefault(_initialData);

var _testMiddleware = __webpack_require__(29);

var _testMiddleware2 = _interopRequireDefault(_testMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/*function getValue(){
    var val;
    initialDb().then(function(res){
       val = res.val;
    });
    return val;
}*/
//import {getIssues,getData} from '../api';

var router = _express2.default.Router();

router.get('/', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        /*
                        Here we are first matching if the current url exists in the react router routes
                         */
                        (0, _reactRouter.match)({ routes: _routes2.default, location: req.originalUrl }, function (error, redirectLocation, renderProps) {
                            if (error) {
                                res.status(500).send(error.message);
                            } else if (redirectLocation) {
                                res.redirect(302, redirectLocation.pathname + redirectLocation.search);
                            } else if (renderProps) {

                                /*
                                       http://redux.js.org/docs/recipes/ServerRendering.html
                                 */
                                //let data=0;

                                //initialDb().then((d)=>{data=d});
                                //console.log(data);

                                var initialState = { salex: { initial: {} } };

                                var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_initialData2.default, _testMiddleware2.default, _reduxLogger2.default)(_redux.createStore);
                                var store = createStoreWithMiddleware(_index2.default, initialState);
                                //const store = createStore(reducers);


                                /*
                                We can dispatch actions from server side as well. This can be very useful if you want
                                to inject some initial data into the app. For example, if you have some articles that
                                you have fetched from database and you want to load immediately after the user has loaded
                                the webpage, you can do so in here.
                                		Here we are inject an list item into our app. Normally once the user has loaded the webpage
                                we would make a request to the server and get the latest item list. But in the server we have
                                instant connection to a database (for example, if you have a mongoDB or MySQL database installed
                                in the server which contains all you items). So you can quickly fetch and inject it into the webpage.
                                		This will help SEO as well. If you load the webpage and make a request to the server to get all the
                                latest items/articles, by the time Google Search Engine may not see all the updated items/articles.
                                export const ADD_ITEM = 'ADD_ITEM';
                                But if you inject the latest items/articles before it reaches the user, the Search Engine will see the
                                item/article immediately.
                                 */

                                /*   store.dispatch({
                                   type: 'DDD',
                                      payload: {
                                             name: '11111',
                                                description: '22222222'
                                               }
                                   });*/

                                /* initialDb().then((data)=>{	store.dispatch({
                                    type: 'DB',
                                       actions: ['INITIAL_LOADING','INITIAL_LOADED','INITIAL_FALURE_LOADED'],
                                       payload: data,
                                   })});*/

                                store.dispatch({
                                    type: 'PROMISE',
                                    actions: ['INITIAL_LOADING', 'INITIAL_LOADED', 'INITIAL_FALURE_LOADED'],
                                    payload: (0, _numbers2.default)()
                                });

                                store.subscribe(function () {
                                    var html = _server2.default.renderToString(_react2.default.createElement(
                                        _reactRedux.Provider,
                                        { store: store },
                                        _react2.default.createElement(_reactRouter.RouterContext, renderProps)
                                    ));
                                    //console.log(finalState);
                                    console.log('subscribe');
                                    var finalState = store.getState();
                                    //console.log(store.getState());
                                    res.status(200).send(renderFullPage(html, finalState));
                                    //res.json(finalState);
                                });
                                //topics();
                                //console.log(topics());
                                console.log("flag");
                                //topics();
                                //console.log(store.getState());
                                ;
                                //res.status(200).send(renderFullPage(html, finalState));
                            } else {
                                res.status(404).send('Not found');
                            }
                        });

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());

/*
In this function, you can render you html part of the webpage. You can add some meta tags or Opern Graph tags
using JS variables.
 */
function renderFullPage(html, initialState) {
    return '\n  <!DOCTYPE html>\n  <html lang="en">\n    <head>\n      <style>#loading .svg-icon-loader {position: absolute;top: 50%;left: 50%;margin: -50px 0 0 -50px;}</style>\n      <meta charset="UTF-8"><!--[if IE]><meta http-equiv=\'X-UA-Compatible\' content=\'IE=edge,chrome=1\'><![endif]--><title>Delight - Bootstrap Material Design Admin Template</title>\n      <meta name="description" content="">\n      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../bin/assets/images/icons/apple-touch-icon-144-precomposed.png">\n      <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../bin/assets/images/icons/apple-touch-icon-114-precomposed.png">\n      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../bin/assets/images/icons/apple-touch-icon-72-precomposed.png">\n      <link rel="apple-touch-icon-precomposed" href="../bin/assets/images/icons/apple-touch-icon-57-precomposed.png">\n      <link rel="shortcut icon" href="../bin/assets/images/icons/favicon.png">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/animate.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/boilerplate.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/border-radius.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/grid.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/page-transitions.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/spacing.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/typography.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/utils.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/colors.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/material/ripple.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/badges.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/buttons.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/content-box.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/dashboard-box.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/forms.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/images.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/info-box.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/invoice.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/loading-indicators.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/menus.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/panel-box.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/response-messages.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/responsive-tables.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/ribbon.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/social-box.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/tables.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/tile-box.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/timeline.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/icons/fontawesome/fontawesome.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/icons/linecons/linecons.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/icons/spinnericon/spinnericon.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/accordion-ui/accordion.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/calendar/calendar.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/carousel/carousel.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/charts/justgage/justgage.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/charts/morris/morris.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/charts/piegage/piegage.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/charts/xcharts/xcharts.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/chosen/chosen.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/colorpicker/colorpicker.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/datatable/datatable.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/datepicker/datepicker.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/datepicker-ui/datepicker.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/daterangepicker/daterangepicker.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/dialog/dialog.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/dropdown/dropdown.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/dropzone/dropzone.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/file-input/fileinput.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/input-switch/inputswitch.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/input-switch/inputswitch-alt.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/ionrangeslider/ionrangeslider.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/jcrop/jcrop.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/jgrowl-notifications/jgrowl.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/loading-bar/loadingbar.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/maps/vectormaps.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/markdown/markdown.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/modal/modal.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/multi-select/multiselect.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/multi-upload/fileupload.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/nestable/nestable.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/noty-notifications/noty.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/popover/popover.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/pretty-photo/prettyphoto.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/progressbar/progressbar.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/range-slider/rangeslider.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/slidebars/slidebars.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/slider-ui/slider.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/summernote-wysiwyg/summernote-wysiwyg.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/tabs-ui/tabs.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/timepicker/timepicker.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/tocify/tocify.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/tooltip/tooltip.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/touchspin/touchspin.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/uniform/uniform.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/wizard/wizard.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/xeditable/xeditable.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/chat.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/files-box.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/login-box.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/notification-box.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/progress-box.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/todo.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/user-profile.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/mobile-navigation.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/application/mailbox.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/themes/admin/layout.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/themes/admin/color-schemes/default.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/themes/components/default.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/themes/components/border-radius.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/responsive-elements.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/admin-responsive.css">\n      <script type="text/javascript" src="../bin/assets/js-core/jquery-core.js"></script>\n      <script type="text/javascript" src="../bin/assets/js-core/jquery-ui-core.js"></script>\n      <script type="text/javascript" src="../bin/assets/js-core/jquery-ui-widget.js"></script>\n      <script type="text/javascript" src="../bin/assets/js-core/jquery-ui-mouse.js"></script>\n      <script type="text/javascript" src="../bin/assets/js-core/jquery-ui-position.js"></script>\n      <script type="text/javascript" src="../bin/assets/js-core/transition.js"></script>\n      <script type="text/javascript" src="../bin/assets/js-core/modernizr.js"></script>\n      <script type="text/javascript" src="../bin/assets/js-core/jquery-cookie.js"></script>\n\t\t\t<script type="text/javascript" src="../bin/assets/widgets/datepicker/datepicker.js"></script>\n\t\t\t<script type="text/javascript" src="../bin/assets/widgets/spinner/spinner.js"></script>\n\n\n\n\n\t\t\t<script type="text/javascript" src="../bin/assets/widgets/uniform/uniform.js"></script>\n\t    <script type="text/javascript" src="../bin/assets/widgets/uniform/uniform-demo.js"></script>\n\t    <script type="text/javascript" src="../bin/assets/widgets/chosen/chosen.js"></script>\n\n\n\n\n\n\n\n\n\n      <script type="text/javascript">$(window).load(function(){\n            setTimeout(function() {\n                $(\'#loading\').fadeOut( 400, "linear" );\n            }, 300);\n        });</script>\n      </head>\n\n      <body>\n        <div id="sb-site">\n          <div>' + html + '</div>\n        </div>\n          <script>\n            window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + '\n          </script>\n\n\n    \t<!-- jQuery first, then Bootstrap JS. -->\n\n\n      <script type="text/javascript" src="../bin/assets/widgets/skycons/skycons.js"></script>\n      <script type="text/javascript" src="../bin/assets/widgets/datatable/datatable.js"></script>\n      <script type="text/javascript" src="../bin/assets/widgets/datatable/datatable-bootstrap.js"></script>\n      <script type="text/javascript" src="../bin/assets/widgets/datatable/datatable-tabletools.js"></script>\n      <script type="text/javascript">/* Datatables basic */\n\n        $(document).ready(function() {\n            $(\'#datatable-example\').dataTable();\n        });\n\n        /* Datatables hide columns */\n\n        $(document).ready(function() {\n            var table = $(\'#datatable-hide-columns\').DataTable( {\n                "scrollY": "300px",\n                "paging": false\n            } );\n\n            $(\'#datatable-hide-columns_filter\').hide();\n\n            $(\'a.toggle-vis\').on( \'click\', function (e) {\n                e.preventDefault();\n\n                // Get the column API object\n                var column = table.column( $(this).attr(\'data-column\') );\n\n                // Toggle the visibility\n                column.visible( ! column.visible() );\n            } );\n        } );\n\n        /* Datatable row highlight */\n\n        $(document).ready(function() {\n            var table = $(\'#datatable-row-highlight\').DataTable();\n\n            $(\'#datatable-row-highlight tbody\').on( \'click\', \'tr\', function () {\n                $(this).toggleClass(\'tr-selected\');\n            } );\n        });\n\n\n\n        $(document).ready(function() {\n            $(\'.dataTables_filter input\').attr("placeholder", "Search...");\n        });\n\n\n\t\t\t\t$(function() {\n\t\t            var toc = $("#tocify-menu").tocify({context: ".toc-tocify", showEffect: "fadeIn",extendPage:false,selectors: "h2, h3, h4" });\n\t\t        });\n\t\t        jQuery(document).ready(function($) {\n\n\t\t        /* Sticky bars */\n\n\t\t        $(function() { "use strict";\n\n\t\t            $(\'.sticky-nav\').hcSticky({\n\t\t                top: 50,\n\t\t                innerTop: 50,\n\t\t                stickTo: \'document\'\n\t\t            });\n\t\t\t\t\t\t\t});\n\t\t        });\n\n\n\t\t\t\t\t\t$(function() { "use strict";\n\t\t\t\t\t\t        $(\'.bootstrap-datepicker\').bsdatepicker({\n\t\t\t\t\t\t            format: \'mm-dd-yyyy\'\n\t\t\t\t\t\t        });\n\t\t\t\t\t\t    });\n\n\t\t\t\t\t\t\t\t$(function() { "use strict";\n        $(".spinner-input").spinner();\n    });</script>\n\n\t\t\t\t</script>\n\n\n\t\t\t\t<script type="text/javascript" src="../bin/assets/widgets/sticky/sticky.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/tocify/tocify.js"></script>\n\n\n        <script type="text/javascript" src="../bin/assets/widgets/charts/sparklines/sparklines.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/charts/sparklines/sparklines-demo.js"></script>\n        <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/owlcarousel/owlcarousel.css">\n        <script type="text/javascript" src="../bin/assets/widgets/owlcarousel/owlcarousel.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/owlcarousel/owlcarousel-demo.js"></script>\n\n\n\n      \t<script type="text/javascript" src="../bin/assets/widgets/tabs/tabs.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/dropdown/dropdown.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/tooltip/tooltip.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/popover/popover.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/progressbar/progressbar.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/button/button.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/collapse/collapse.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/superclick/superclick.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/input-switch/inputswitch-alt.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/slimscroll/slimscroll.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/slidebars/slidebars.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/slidebars/slidebars-demo.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/charts/piegage/piegage.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/charts/piegage/piegage-demo.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/screenfull/screenfull.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/content-box/contentbox.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/material/material.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/material/ripples.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/overlay/overlay.js"></script>\n        <script type="text/javascript" src="../bin/assets/js-init/widgets-init.js"></script>\n        <script type="text/javascript" src="../bin/assets/themes/admin/layout.js"></script>\n      \t<script src="../bin/app.bundle.js"></script>\n        </div>\n      </body>\n    </html>\n    ';
}

exports.default = router;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _SBleft = __webpack_require__(5);

var _SBleft2 = _interopRequireDefault(_SBleft);

var _SBright = __webpack_require__(6);

var _SBright2 = _interopRequireDefault(_SBright);

var _Navbar = __webpack_require__(4);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Topbar = __webpack_require__(7);

var _Topbar2 = _interopRequireDefault(_Topbar);

var _Infobar = __webpack_require__(3);

var _Infobar2 = _interopRequireDefault(_Infobar);

var _Menuengine = __webpack_require__(36);

var _Menuengine2 = _interopRequireDefault(_Menuengine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Sidebar from '../components/Sidebar';
//import Mainbar from '../components/Mainbar';


var Automenu = function (_Component) {
  _inherits(Automenu, _Component);

  function Automenu() {
    _classCallCheck(this, Automenu);

    return _possibleConstructorReturn(this, (Automenu.__proto__ || Object.getPrototypeOf(Automenu)).apply(this, arguments));
  }

  _createClass(Automenu, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SBleft2.default, null),
        _react2.default.createElement(_SBright2.default, null),
        _react2.default.createElement(
          'div',
          { id: 'loading' },
          _react2.default.createElement(
            'div',
            { className: 'svg-icon-loader' },
            _react2.default.createElement('img', { src: '../bin/assets/images/svg-loaders/bars.svg', width: '40', alt: '' })
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'page-wrapper' },
          _react2.default.createElement(
            'div',
            { id: 'mobile-navigation' },
            _react2.default.createElement(
              'button',
              { id: 'nav-toggle', className: 'collapsed', 'data-toggle': 'collapse', 'data-target': '#page-sidebar' },
              _react2.default.createElement('span', null)
            )
          ),
          _react2.default.createElement(_Navbar2.default, null),
          _react2.default.createElement(
            'div',
            { id: 'page-content-wrapper' },
            _react2.default.createElement(
              'div',
              { id: 'page-content' },
              _react2.default.createElement(_Topbar2.default, null),
              _react2.default.createElement(_Infobar2.default, null),
              _react2.default.createElement(_Menuengine2.default, null)
            )
          )
        )
      );
    }
  }]);

  return Automenu;
}(_react.Component);

exports.default = Automenu;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _SBleft = __webpack_require__(5);

var _SBleft2 = _interopRequireDefault(_SBleft);

var _SBright = __webpack_require__(6);

var _SBright2 = _interopRequireDefault(_SBright);

var _Navbar = __webpack_require__(4);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Topbar = __webpack_require__(7);

var _Topbar2 = _interopRequireDefault(_Topbar);

var _Infobar = __webpack_require__(3);

var _Infobar2 = _interopRequireDefault(_Infobar);

var _Lablengine = __webpack_require__(38);

var _Lablengine2 = _interopRequireDefault(_Lablengine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Sidebar from '../components/Sidebar';
//import Mainbar from '../components/Mainbar';


var Label = function (_Component) {
  _inherits(Label, _Component);

  function Label() {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).apply(this, arguments));
  }

  _createClass(Label, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SBleft2.default, null),
        _react2.default.createElement(_SBright2.default, null),
        _react2.default.createElement(
          'div',
          { id: 'loading' },
          _react2.default.createElement(
            'div',
            { className: 'svg-icon-loader' },
            _react2.default.createElement('img', { src: '../bin/assets/images/svg-loaders/bars.svg', width: '40', alt: '' })
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'page-wrapper' },
          _react2.default.createElement(
            'div',
            { id: 'mobile-navigation' },
            _react2.default.createElement(
              'button',
              { id: 'nav-toggle', className: 'collapsed', 'data-toggle': 'collapse', 'data-target': '#page-sidebar' },
              _react2.default.createElement('span', null)
            )
          ),
          _react2.default.createElement(_Navbar2.default, null),
          _react2.default.createElement(
            'div',
            { id: 'page-content-wrapper' },
            _react2.default.createElement(
              'div',
              { id: 'page-content' },
              _react2.default.createElement(_Topbar2.default, null),
              _react2.default.createElement(_Infobar2.default, null),
              _react2.default.createElement(_Lablengine2.default, null)
            )
          )
        )
      );
    }
  }]);

  return Label;
}(_react.Component);

exports.default = Label;

/*

<div>

<div className="sb-slidebar bg-black sb-left sb-style-overlay">
    <div className="scrollable-content scrollable-slim-sidebar">
      <div className="pad10A">
        <div className="divider-header">Online</div>
        <ul className="chat-box">
          <li>
            <div className="status-badge">
              <img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial1.jpg" alt=""/>
              <div className="small-badge bg-green"></div>
            </div><b>Grace Padilla</b><p>On the other hand, we denounce...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a>
          </li>
          <li>
            <div className="status-badge">
              <img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial2.jpg" alt=""/>
              <div className="small-badge bg-green"></div>
            </div><b>Carl Gamble</b><p>Dislike men who are so beguiled...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a>
          </li>
          <li>
            <div className="status-badge">
              <img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial3.jpg" alt=""/>
              <div className="small-badge bg-green"></div>
            </div><b>Michael Poole</b><p>Of pleasure of the moment, so...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a>
          </li>
          <li>
            <div className="status-badge">
              <img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial4.jpg" alt=""/>
              <div className="small-badge bg-green"></div>
            </div><b>Bill Green</b><p>That they cannot foresee the...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a>
          </li>
          <li>
            <div className="status-badge">
              <img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial5.jpg" alt=""/>
              <div className="small-badge bg-green"></div>
            </div><b>Cheryl Soucy</b><p>Pain and trouble that are bound...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a>
          </li>
        </ul>
        <div className="divider-header">Idle</div>
        <ul className="chat-box">
          <li>
            <div className="status-badge">
              <img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial6.jpg" alt=""/>
              <div className="small-badge bg-orange"></div>
            </div><b>Jose Kramer</b><p>Equal blame belongs to those...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a>
          </li>
          <li>
            <div className="status-badge">
              <img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial7.jpg" alt=""/>
              <div className="small-badge bg-orange"></div>
            </div><b>Dan Garcia</b><p>Weakness of will, which is same...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a>
          </li>
          <li>
            <div className="status-badge">
              <img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial8.jpg" alt=""/>
              <div className="small-badge bg-orange"></div>
            </div><b>Edward Bridges</b><p>These cases are perfectly simple...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a>
          </li>
        </ul>
        <div className="divider-header">Offline</div>
        <ul className="chat-box">
          <li>
            <div className="status-badge">
              <img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial1.jpg" alt=""/>
              <div className="small-badge bg-red"></div>
            </div><b>Randy Herod</b><p>In a free hour, when our power...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a>
          </li>
          <li>
            <div className="status-badge">
              <img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial2.jpg" alt=""/>
              <div className="small-badge bg-red"></div>
            </div><b>Patricia Bagley</b><p>when nothing prevents our being...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="sb-slidebar bg-black sb-right sb-style-overlay">
    <div className="scrollable-content scrollable-slim-sidebar">
      <div className="pad15A">
        <a href="#" title="" data-toggle="collapse" data-target="#sidebar-toggle-1" className="popover-title">Cloud status <span className="caret"></span></a>
        <div id="sidebar-toggle-1" className="collapse in">
          <div className="pad15A">
            <div className="row">
              <div className="col-md-4">
                <div className="text-center font-gray pad5B text-transform-upr font-size-12">New visits</div>
                <div className="chart-alt-3 font-gray-dark" data-percent="55"><span>55</span>%</div>
              </div>
              <div className="col-md-4">
                <div className="text-center font-gray pad5B text-transform-upr font-size-12">Bounce rate</div>
                <div className="chart-alt-3 font-gray-dark" data-percent="46"><span>46</span>%</div>
              </div>
              <div className="col-md-4">
                <div className="text-center font-gray pad5B text-transform-upr font-size-12">Server load</div>
                <div className="chart-alt-3 font-gray-dark" data-percent="92"><span>92</span>%</div>
              </div>
            </div>
            <div className="divider mrg15T mrg15B"></div>
            <div className="text-center"><a href="#" className="btn center-div btn-info mrg5T btn-sm text-transform-upr updateEasyPieChart"><i className="glyph-icon icon-refresh"></i> Update charts</a></div>
          </div>
        </div>
        <div className="clear"></div>
        <a href="#" title="" data-toggle="collapse" data-target="#sidebar-toggle-6" className="popover-title">Latest transfers <span className="caret"></span></a>
        <div id="sidebar-toggle-6" className="collapse in">
          <ul className="files-box">
            <li><i className="files-icon glyph-icon font-red icon-file-archive-o"></i><div className="files-content"><b>blog_export.zip</b><div className="files-date"><i className="glyph-icon icon-clock-o"></i> added on <b>22.10.2014</b></div></div><div className="files-buttons"><a href="#" className="btn btn-xs hover-info tooltip-button" data-placement="left" title="Download"><i className="glyph-icon icon-cloud-download"></i></a> <a href="#" className="btn btn-xs hover-danger tooltip-button" data-placement="left" title="Delete"><i className="glyph-icon icon-times"></i></a></div></li>
            <li className="divider"></li>
            <li><i className="files-icon glyph-icon icon-file-code-o"></i><div className="files-content"><b>homepage-test.html</b><div className="files-date"><i className="glyph-icon icon-clock-o"></i> added <b>19.10.2014</b></div></div><div className="files-buttons"><a href="#" className="btn btn-xs hover-info tooltip-button" data-placement="left" title="Download"><i className="glyph-icon icon-cloud-download"></i></a> <a href="#" className="btn btn-xs hover-danger tooltip-button" data-placement="left" title="Delete"><i className="glyph-icon icon-times"></i></a></div></li>
            <li className="divider"></li>
            <li><i className="files-icon glyph-icon font-yellow icon-file-image-o"></i><div className="files-content"><b>monthlyReport.jpg</b><div className="files-date"><i className="glyph-icon icon-clock-o"></i> added on <b>10.9.2014</b></div></div><div className="files-buttons"><a href="#" className="btn btn-xs hover-info tooltip-button" data-placement="left" title="Download"><i className="glyph-icon icon-cloud-download"></i></a> <a href="#" className="btn btn-xs hover-danger tooltip-button" data-placement="left" title="Delete"><i className="glyph-icon icon-times"></i></a></div></li>
            <li className="divider"></li>
            <li><i className="files-icon glyph-icon font-green icon-file-word-o"></i><div className="files-content"><b>new_presentation.doc</b><div className="files-date"><i className="glyph-icon icon-clock-o"></i> added on <b>5.9.2014</b></div></div><div className="files-buttons"><a href="#" className="btn btn-xs hover-info tooltip-button" data-placement="left" title="Download"><i className="glyph-icon icon-cloud-download"></i></a> <a href="#" className="btn btn-xs hover-danger tooltip-button" data-placement="left" title="Delete"><i className="glyph-icon icon-times"></i></a></div></li>
          </ul>
        </div>
        <div className="clear"></div>
        <a href="#" title="" data-toggle="collapse" data-target="#sidebar-toggle-3" className="popover-title">Tasks for today <span className="caret"></span></a>
        <div id="sidebar-toggle-3" className="collapse in">
          <ul className="progress-box">
            <li>
              <div className="progress-title">New features development <b>87%</b></div>
              <div className="progressbar-smaller progressbar" data-value="87">
                <div className="progressbar-value bg-azure">
                  <div className="progressbar-overlay"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="progress-title">Finishing uploading files <b>66%</b></div>
              <div className="progressbar-smaller progressbar" data-value="66">
                <div className="progressbar-value bg-red">
                  <div className="progressbar-overlay"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="progress-title">Creating tutorials <b>58%</b></div>
              <div className="progressbar-smaller progressbar" data-value="58">
                <div className="progressbar-value bg-blue-alt"></div>
              </div>
            </li>
            <li>
              <div className="progress-title">Frontend bonus theme <b>74%</b></div>
              <div className="progressbar-smaller progressbar" data-value="74">
                <div className="progressbar-value bg-purple"></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="clear"></div>
        <a href="#" title="" data-toggle="collapse" data-target="#sidebar-toggle-4" className="popover-title">Pending notifications <span className="bs-label bg-orange tooltip-button" title="Label example">New</span> <span className="caret"></span></a>
        <div id="sidebar-toggle-4" className="collapse in">
          <ul className="notifications-box notifications-box-alt">
            <li><span className="bg-purple icon-notification glyph-icon icon-users"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div><a href="#" className="notification-btn btn btn-xs btn-black tooltip-button" data-placement="left" title="View details"><i className="glyph-icon icon-arrow-right"></i></a></li>
            <li><span className="bg-warning icon-notification glyph-icon icon-ticket"></span> <span className="notification-text">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div><a href="#" className="notification-btn btn btn-xs btn-black tooltip-button" data-placement="left" title="View details"><i className="glyph-icon icon-arrow-right"></i></a></li>
            <li><span className="bg-green icon-notification glyph-icon icon-random"></span> <span className="notification-text font-green">A success message example.</span><div className="notification-time"><b>2 hours</b> ago <span className="glyph-icon icon-clock-o"></span></div><a href="#" className="notification-btn btn btn-xs btn-black tooltip-button" data-placement="left" title="View details"><i className="glyph-icon icon-arrow-right"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div id="loading">
    <div className="svg-icon-loader">
      <img src="../bin/assets/images/svg-loaders/bars.svg" width="40" alt=""/>
    </div>
  </div>
  <div id="page-wrapper">
    <div id="mobile-navigation">
      <button id="nav-toggle" className="collapsed" data-toggle="collapse" data-target="#page-sidebar"><span></span></button>
    </div>

<Navigate/>


    <div id="page-content-wrapper">
        <div id="page-content">
          <div id="page-header">
            <div id="header-nav-left"><a className="header-btn" id="logout-btn" href="lockscreen-3.html" title="Lockscreen page example"><i className="glyph-icon icon-linecons-lock"></i></a>
              <div className="user-account-btn dropdown"><a href="#" title="My Account" className="user-profile clearfix" data-toggle="dropdown">
                <img width="28" src="../bin/assets/image-resources/gravatar.jpg" alt="Profile image"/> <span>Michael Lee</span> <i className="glyph-icon icon-angle-down"></i></a>
                <div className="dropdown-menu float-right">
                  <div className="box-sm">
                    <div className="login-box clearfix">
                      <div className="user-img"><a href="#" title="" className="change-img">Change photo</a>
                        <img src="../bin/assets/image-resources/gravatar.jpg" alt=""/></div>
                        <div className="user-info"><span>Michael Lee <i>UX/UI developer</i></span> <a href="#" title="Edit profile">Edit profile</a> <a href="#" title="View notifications">View notifications</a></div>
                      </div>
                      <div className="divider"></div>
                      <ul className="reset-ul mrg5B">
                        <li><a href="#">View login page example <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                        <li><a href="#">View lockscreen example <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                        <li><a href="#">View account details <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                      </ul>
                      <div className="button-pane button-pane-alt pad5L pad5R text-center"><a href="#" className="btn btn-flat display-block font-normal btn-danger"><i className="glyph-icon icon-power-off"></i> Logout</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="header-nav-right"><a href="#" className="hdr-btn popover-button" title="Search" data-placement="bottom" data-id="#popover-search"><i className="glyph-icon icon-search"></i></a>
                <div className="hide" id="popover-search">
                  <div className="pad5A box-md">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search terms here ..."/>
                      <span className="input-group-btn"><a className="btn btn-primary" href="#">Search</a></span>
                    </div>
                  </div>
                </div>
                <div className="dropdown" id="dashnav-btn"><a href="#" data-toggle="dropdown" data-placement="bottom" className="popover-button-header tooltip-button" title="Dashboard Quick Menu"><i className="glyph-icon icon-linecons-cog"></i></a>
                  <div className="dropdown-menu float-left">
                    <div className="box-sm">
                      <div className="pad5T pad5B pad10L pad10R dashboard-buttons clearfix">
                        <a href="#" className="btn vertical-button hover-blue-alt" title="">
                          <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-dashboard opacity-80 font-size-20"></i></span> Dashboard
                        </a>
                        <a href="#" className="btn vertical-button hover-green" title="">
                          <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-tags opacity-80 font-size-20"></i></span> Widgets
                        </a>
                        <a href="#" className="btn vertical-button hover-orange" title="">
                          <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-fire opacity-80 font-size-20"></i></span> Tables
                        </a>
                        <a href="#" className="btn vertical-button hover-orange" title="">
                          <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-bar-chart-o opacity-80 font-size-20"></i></span> Charts
                        </a>
                        <a href="#" className="btn vertical-button hover-purple" title="">
                          <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-laptop opacity-80 font-size-20"></i></span> Buttons
                        </a>
                        <a href="#" className="btn vertical-button hover-azure" title="">
                          <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-code opacity-80 font-size-20"></i></span> Panels
                        </a>
                      </div>
                      <div className="divider"></div>
                      <div className="pad5T pad5B pad10L pad10R dashboard-buttons clearfix"><a href="#" className="btn vertical-button remove-border btn-info" title="">
                        <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-dashboard opacity-80 font-size-20"></i></span> Dashboard</a>
                        <a href="#" className="btn vertical-button remove-border btn-danger" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-tags opacity-80 font-size-20"></i></span> Widgets</a>
                        <a href="#" className="btn vertical-button remove-border btn-purple" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-fire opacity-80 font-size-20"></i></span> Tables</a>
                        <a href="#" className="btn vertical-button remove-border btn-azure" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-bar-chart-o opacity-80 font-size-20"></i></span> Charts</a>
                        <a href="#" className="btn vertical-button remove-border btn-yellow" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-laptop opacity-80 font-size-20"></i></span> Buttons</a>
                        <a href="#" className="btn vertical-button remove-border btn-warning" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-code opacity-80 font-size-20"></i></span> Panels</a>
                      </div>
                    </div>
                  </div>
                </div><a href="#" className="hdr-btn" id="fullscreen-btn" title="Fullscreen"><i className="glyph-icon icon-arrows-alt"></i></a> <a href="#" className="hdr-btn sb-toggle-left" id="chatbox-btn" title="Chat sidebar"><i className="glyph-icon icon-linecons-paper-plane"></i></a>
                <div className="dropdown" id="notifications-btn">
                  <a data-toggle="dropdown" href="#" title="">
                    <span className="small-badge bg-yellow"></span>
                    <i className="glyph-icon icon-linecons-megaphone"></i></a>
                    <div className="dropdown-menu box-md float-left">
                      <div className="popover-title display-block clearfix pad10A">Notifications <a className="text-transform-cap font-primary font-normal btn-link float-right" href="#" title="View more options">More options...</a></div>
                      <div className="scrollable-content scrollable-slim-box">
                        <ul className="no-border notifications-box">
                          <li><span className="bg-danger icon-notification glyph-icon icon-bullhorn"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                          <li><span className="bg-warning icon-notification glyph-icon icon-users"></span> <span className="notification-text font-blue">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                          <li><span className="bg-green icon-notification glyph-icon icon-sitemap"></span> <span className="notification-text font-green">A success message example.</span><div className="notification-time"><b>2 hours</b> ago <span className="glyph-icon icon-clock-o"></span></div></li>
                          <li><span className="bg-azure icon-notification glyph-icon icon-random"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                          <li><span className="bg-warning icon-notification glyph-icon icon-ticket"></span> <span className="notification-text">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                          <li><span className="bg-blue icon-notification glyph-icon icon-user"></span> <span className="notification-text font-blue">Alternate notification styling.</span><div className="notification-time"><b>2 hours</b> ago <span className="glyph-icon icon-clock-o"></span></div></li>
                          <li><span className="bg-purple icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                          <li><span className="bg-warning icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                          <li><span className="bg-green icon-notification glyph-icon icon-user"></span> <span className="notification-text font-green">A success message example.</span><div className="notification-time"><b>2 hours</b> ago <span className="glyph-icon icon-clock-o"></span></div></li>
                          <li><span className="bg-purple icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                          <li><span className="bg-warning icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                        </ul>
                      </div>
                      <div className="button-pane button-pane-alt pad5T pad5L pad5R text-center">
                        <a href="#" className="btn btn-flat btn-primary" title="View all notifications">View all notifications</a>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown" id="progress-btn">
                    <a data-toggle="dropdown" href="#" title=""><span className="small-badge bg-azure"></span> <i className="glyph-icon icon-linecons-params"></i></a>
                    <div className="dropdown-menu pad0A box-sm float-left" id="progress-dropdown">
                      <div className="scrollable-content scrollable-slim-box">
                        <ul className="no-border progress-box progress-box-links">
                          <li><a href="#" title=""><div className="progress-title">Finishing uploading files <b>23%</b></div><div className="progressbar-smaller progressbar" data-value="23"><div className="progressbar-value bg-blue-alt"><div className="progressbar-overlay"></div></div></div></a></li>
                          <li><a href="#" title=""><div className="progress-title">Roadmap progress <b>91%</b></div><div className="progressbar-smaller progressbar" data-value="91"><div className="progressbar-value bg-red"><div className="progressbar-overlay"></div></div></div></a></li>
                          <li><a href="#" title=""><div className="progress-title">Images upload <b>58%</b></div><div className="progressbar-smaller progressbar" data-value="58"><div className="progressbar-value bg-green"></div></div></a></li>
                          <li><a href="#" title=""><div className="progress-title">WordPress migration <b>74%</b></div><div className="progressbar-smaller progressbar" data-value="74"><div className="progressbar-value bg-purple"></div></div></a></li>
                          <li><a href="#" title=""><div className="progress-title">Agile development procedures <b>91%</b></div><div className="progressbar-smaller progressbar" data-value="91"><div className="progressbar-value bg-black"><div className="progressbar-overlay"></div></div></div></a></li>
                          <li><a href="#" title=""><div className="progress-title">Systems integration <b>58%</b></div><div className="progressbar-smaller progressbar" data-value="58"><div className="progressbar-value bg-azure"></div></div></a></li>
                          <li><a href="#" title=""><div className="progress-title">Code optimizations <b>97%</b></div><div className="progressbar-smaller progressbar" data-value="97"><div className="progressbar-value bg-yellow"></div></div></a></li>
                        </ul>
                      </div>
                      <div className="button-pane button-pane-alt pad5A text-center"><a href="#" className="btn btn-flat display-block font-normal hover-green" title="View all notifications">View all notifications</a></div>
                    </div>
                  </div>
                  <div className="dropdown" id="cloud-btn"><a href="#" data-placement="bottom" className="tooltip-button sb-toggle-right" title="Statistics Sidebar"><i className="glyph-icon icon-linecons-cloud"></i></a></div>
                </div>
              </div>
              <script type="text/javascript" src="../bin/assets/widgets/tabs/tabs.js"></script>
              <div id="page-title">
                <h2>FAQ Section</h2>
                <p className="mrg15B">Example FAQ section created using the components available in DelightUI</p>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <ul className="list-group">
                    <li className="mrg10B"><a href="#faq-tab-1" data-toggle="tab" className="list-group-item bg-white">How to get paid <i className="glyph-icon icon-angle-right mrg0A"></i></a></li>
                    <li className="mrg10B"><a href="#faq-tab-2" data-toggle="tab" className="list-group-item bg-white">ThemeForest related <i className="glyph-icon font-green icon-angle-right mrg0A"></i></a></li>
                    <li className="mrg10B"><a href="#faq-tab-3" data-toggle="tab" className="list-group-item bg-white">Common questions <i className="glyph-icon icon-angle-right mrg0A"></i></a></li>
                    <li className="mrg10B"><a href="#faq-tab-4" data-toggle="tab" className="list-group-item bg-white">Terms of service <i className="glyph-icon icon-angle-right mrg0A"></i></a></li>
                  </ul>
                </div>
                <div className="col-md-9">
                  <div className="tab-content">
                    <div className="tab-pane fade active in pad0A" id="faq-tab-1">
                      <div className="panel-group" id="accordion5">
                        <div className="panel">
                          <div className="panel-heading">
                            <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion5" href="#collapseOne">Collapsible Group Item #1</a></h4>
                          </div>
                          <div id="collapseOne" className="panel-collapse collapse in">
                            <div className="panel-body pad0B">
                              <p className="mrg15B">The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.</p>
                              <p className="mrg15B">For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                              <p className="mrg15B">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.</p>
                            </div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="panel-heading">
                            <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion5" href="#collapseTwo">Collapsible Group Item #2</a></h4>
                          </div>
                          <div id="collapseTwo" className="panel-collapse collapse">
                            <div className="panel-body pad0B">
                              <p className="mrg15B">For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                              <p className="mrg15B">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                            </div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="panel-heading">
                            <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion5" href="#collapseThree">Collapsible Group Item #3</a></h4>
                          </div>
                          <div id="collapseThree" className="panel-collapse collapse">
                            <div className="panel-body pad0B">
                              <p className="mrg15B">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                              <p className="mrg15B">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade pad0A" id="faq-tab-2">
                      <div className="panel-group" id="accordion1">
                        <div className="panel">
                          <div className="panel-heading">
                            <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion1" href="#collapseOne1">Collapsible Group Item #1</a></h4>
                          </div>
                          <div id="collapseOne1" className="panel-collapse collapse in">
                            <div className="panel-body pad0B">
                              <p className="mrg15B">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                              <p className="mrg15B">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                            </div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="panel-heading">
                            <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion1" href="#collapseTwo1">Collapsible Group Item #2</a></h4>
                          </div>
                          <div id="collapseTwo1" className="panel-collapse collapse">
                            <div className="panel-body pad0B">
                              <p className="mrg15B">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                              <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
                            </div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="panel-heading">
                            <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion1" href="#collapseThree1">Collapsible Group Item #3</a></h4>
                          </div>
                          <div id="collapseThree1" className="panel-collapse collapse">
                            <div className="panel-body pad0B">
                              <p className="mrg15B">The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.</p>
                              <p className="mrg15B">For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                              <p className="mrg15B">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade pad0A" id="faq-tab-3">
                      <div className="panel-group" id="accordion2">
                        <div className="panel">
                          <div className="panel-heading">
                            <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion2" href="#collapseOne2">Collapsible Group Item #1</a></h4>
                          </div>
                          <div id="collapseOne2" className="panel-collapse collapse in">
                            <div className="panel-body pad0B">
                              <p className="mrg15B">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                              <p className="mrg15B">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                            </div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="panel-heading">
                            <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo2">Collapsible Group Item #2</a></h4>
                          </div>
                          <div id="collapseTwo2" className="panel-collapse collapse">
                            <div className="panel-body pad0B">
                              <p className="mrg15B">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                              <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                            </div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="panel-heading">
                            <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion2" href="#collapseThree2">Collapsible Group Item #3</a></h4>
                          </div>
                          <div id="collapseThree2" className="panel-collapse collapse">
                            <div className="panel-body pad0B">
                              <p className="mrg15B">It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                              <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade pad0A" id="faq-tab-4">
                      <div className="panel-group" id="accordion3">
                        <div className="panel">
                          <div className="panel-heading">
                            <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseOne4">Collapsible Group Item #1</a></h4>
                          </div>
                          <div id="collapseOne4" className="panel-collapse collapse in">
                            <div className="panel-body pad0B">
                              <p className="mrg15B">It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                              <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                            </div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="panel-heading">
                            <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo4">Collapsible Group Item #2</a></h4>
                          </div>
                          <div id="collapseTwo4" className="panel-collapse collapse">
                            <div className="panel-body pad0B">
                              <p className="mrg15B">It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                              <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                            </div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="panel-heading">
                            <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseThree4">Collapsible Group Item #3</a></h4>
                          </div>
                          <div id="collapseThree4" className="panel-collapse collapse">
                            <div className="panel-body pad0B">
                              <p className="mrg15B">It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                              <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
     </div>
</div>
*/

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Sidebar from '../components/Sidebar';
//import Mainbar from '../components/Mainbar';
var Logo = function (_Component) {
  _inherits(Logo, _Component);

  function Logo() {
    _classCallCheck(this, Logo);

    return _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments));
  }

  _createClass(Logo, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "header-logo", className: "logo-bg" },
        _react2.default.createElement(
          "a",
          { href: "/", className: "logo-content-big", title: "DelightUI" },
          "Delight ",
          _react2.default.createElement(
            "i",
            null,
            "UI"
          ),
          " ",
          _react2.default.createElement(
            "span",
            null,
            "Material Design Dashboard Template"
          )
        ),
        _react2.default.createElement(
          "a",
          { href: "/", className: "logo-content-small", title: "DelightUI" },
          "Delight ",
          _react2.default.createElement(
            "i",
            null,
            "UI"
          ),
          " ",
          _react2.default.createElement(
            "span",
            null,
            "Material Design Dashboard Template"
          )
        ),
        _react2.default.createElement(
          "a",
          { id: "close-sidebar", href: "#", title: "Close sidebar" },
          _react2.default.createElement("i", { className: "glyph-icon icon-outdent" })
        )
      );
    }
  }]);

  return Logo;
}(_react.Component);

exports.default = Logo;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _SBleft = __webpack_require__(5);

var _SBleft2 = _interopRequireDefault(_SBleft);

var _SBright = __webpack_require__(6);

var _SBright2 = _interopRequireDefault(_SBright);

var _Navbar = __webpack_require__(4);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Topbar = __webpack_require__(7);

var _Topbar2 = _interopRequireDefault(_Topbar);

var _Infobar = __webpack_require__(3);

var _Infobar2 = _interopRequireDefault(_Infobar);

var _Topbox = __webpack_require__(46);

var _Topbox2 = _interopRequireDefault(_Topbox);

var _Weekgraf = __webpack_require__(47);

var _Weekgraf2 = _interopRequireDefault(_Weekgraf);

var _Temperature = __webpack_require__(45);

var _Temperature2 = _interopRequireDefault(_Temperature);

var _Tabledata = __webpack_require__(44);

var _Tabledata2 = _interopRequireDefault(_Tabledata);

var _Maincarousel = __webpack_require__(43);

var _Maincarousel2 = _interopRequireDefault(_Maincarousel);

var _Dashstatic = __webpack_require__(41);

var _Dashstatic2 = _interopRequireDefault(_Dashstatic);

var _Contentbox = __webpack_require__(40);

var _Contentbox2 = _interopRequireDefault(_Contentbox);

var _Followers = __webpack_require__(42);

var _Followers2 = _interopRequireDefault(_Followers);

var _Activity = __webpack_require__(39);

var _Activity2 = _interopRequireDefault(_Activity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Sidebar from '../components/Sidebar';
//import Mainbar from '../components/Mainbar';

//import './chart-demo-1.js'


var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this));

    _this.state = {
      chartData: {}
    };
    return _this;
  }

  _createClass(Main, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getChartData();
    }
  }, {
    key: 'getChartData',
    value: function getChartData() {
      this.setState({
        chartData: {
          labels: ['GUK', 'OSC', 'Hedelberg', 'Letus', 'IBM'],
          datasets: [{
            label: 'Population',
            data: [287, 435, 13, 44, 120],
            backgroundColor: ['rgba(215,59,112,0.6)', 'rgba(255,99,132,0.6)', 'rgba(54,162,235,0.6)', 'rgba(255,206,86,0.6)', 'rgba(75,192,192,0.6)']
          }]
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SBleft2.default, null),
        _react2.default.createElement(_SBright2.default, null),
        _react2.default.createElement(
          'div',
          { id: 'loading' },
          _react2.default.createElement(
            'div',
            { className: 'svg-icon-loader' },
            _react2.default.createElement('img', { src: '../bin/assets/images/svg-loaders/bars.svg', width: '40', alt: '' })
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'page-wrapper' },
          _react2.default.createElement(
            'div',
            { id: 'mobile-navigation' },
            _react2.default.createElement(
              'button',
              { id: 'nav-toggle', className: 'collapsed', 'data-toggle': 'collapse', 'data-target': '#page-sidebar' },
              _react2.default.createElement('span', null)
            )
          ),
          _react2.default.createElement(_Navbar2.default, null),
          _react2.default.createElement(
            'div',
            { id: 'page-content-wrapper' },
            _react2.default.createElement(
              'div',
              { id: 'page-content' },
              _react2.default.createElement(_Topbar2.default, null),
              _react2.default.createElement(_Infobar2.default, null),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-8' },
                  _react2.default.createElement(_Topbox2.default, null),
                  _react2.default.createElement(_Weekgraf2.default, null),
                  _react2.default.createElement(_Temperature2.default, null),
                  _react2.default.createElement(_Tabledata2.default, null),
                  _react2.default.createElement(_Maincarousel2.default, null)
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-4' },
                  _react2.default.createElement(_Dashstatic2.default, null),
                  _react2.default.createElement(_Contentbox2.default, { chartData: this.state.chartData }),
                  _react2.default.createElement(_Followers2.default, null),
                  _react2.default.createElement(_Activity2.default, null)
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Main;
}(_react.Component);

exports.default = Main;

//////////////////////////////////////////////////

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SBleft = __webpack_require__(5);

var _SBleft2 = _interopRequireDefault(_SBleft);

var _SBright = __webpack_require__(6);

var _SBright2 = _interopRequireDefault(_SBright);

var _Navbar = __webpack_require__(4);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Topbar = __webpack_require__(7);

var _Topbar2 = _interopRequireDefault(_Topbar);

var _Infobar = __webpack_require__(3);

var _Infobar2 = _interopRequireDefault(_Infobar);

var _Neworder = __webpack_require__(48);

var _Neworder2 = _interopRequireDefault(_Neworder);

var _Orderlist = __webpack_require__(49);

var _Orderlist2 = _interopRequireDefault(_Orderlist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Sidebar from '../components/Sidebar';
//import Mainbar from '../components/Mainbar';

var Orders = function (_Component) {
  _inherits(Orders, _Component);

  function Orders() {
    _classCallCheck(this, Orders);

    return _possibleConstructorReturn(this, (Orders.__proto__ || Object.getPrototypeOf(Orders)).apply(this, arguments));
  }

  _createClass(Orders, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SBleft2.default, null),
        _react2.default.createElement(_SBright2.default, null),
        _react2.default.createElement(
          'div',
          { id: 'loading' },
          _react2.default.createElement(
            'div',
            { className: 'svg-icon-loader' },
            _react2.default.createElement('img', { src: '../bin/assets/images/svg-loaders/bars.svg', width: '40', alt: '' })
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'page-wrapper' },
          _react2.default.createElement(
            'div',
            { id: 'mobile-navigation' },
            _react2.default.createElement(
              'button',
              { id: 'nav-toggle', className: 'collapsed', 'data-toggle': 'collapse', 'data-target': '#page-sidebar' },
              _react2.default.createElement('span', null)
            )
          ),
          _react2.default.createElement(_Navbar2.default, null),
          _react2.default.createElement(
            'div',
            { id: 'page-content-wrapper' },
            _react2.default.createElement(
              'div',
              { id: 'page-content' },
              _react2.default.createElement(_Topbar2.default, null),
              _react2.default.createElement(_Infobar2.default, null),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-12' },
                  _react2.default.createElement(_Orderlist2.default, null),
                  _react2.default.createElement(_Neworder2.default, null)
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Orders;
}(_react.Component);

exports.default = Orders;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Sidebar from '../components/Sidebar';
//import Mainbar from '../components/Mainbar';
var Menuengine = function (_Component) {
  _inherits(Menuengine, _Component);

  function Menuengine() {
    _classCallCheck(this, Menuengine);

    return _possibleConstructorReturn(this, (Menuengine.__proto__ || Object.getPrototypeOf(Menuengine)).apply(this, arguments));
  }

  _createClass(Menuengine, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col-md-3" },
          _react2.default.createElement(
            "div",
            { className: "sticky-nav" },
            _react2.default.createElement("div", { id: "tocify-menu" })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col-md-9" },
          _react2.default.createElement(
            "div",
            { className: "panel panel-default" },
            _react2.default.createElement(
              "div",
              { className: "panel-body" },
              _react2.default.createElement(
                "div",
                { className: "toc-tocify" },
                _react2.default.createElement(
                  "h2",
                  { className: "mrg20B" },
                  "Lorem ipsum dolor sit amet"
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Consectetur adipiscing elit. Curabitur tempor elit metus, id tincidunt sapien molestie id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer in porttitor enim. Aenean tortor risus, porta eu vehicula et, scelerisque quis lorem. Maecenas ultrices volutpat ex. Sed ultrices, diam ac condimentum sagittis, nisl lectus pulvinar lorem, vel commodo purus mi eu turpis. Curabitur justo sapien, facilisis ac leo et, elementum porta diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum feugiat neque at magna aliquet fringilla. Ut a varius nunc, at commodo dui. Fusce iaculis ante sem, nec accumsan massa venenatis vel. Nam pulvinar mauris quis nisi interdum finibus. Etiam enim risus, imperdiet vitae ante quis, dapibus dictum quam."
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Proin tempus gravida ultricies. Integer mi nibh, eleifend id nibh eu, consequat feugiat nisl. Curabitur odio dui, faucibus ac eleifend ac, dapibus quis lacus. Nam a tortor tortor. Curabitur eu venenatis justo, at malesuada leo. Nullam fermentum interdum ante blandit tempor. Nam blandit massa tellus, eget convallis metus imperdiet a. Cras efficitur placerat nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus posuere nibh nec iaculis sollicitudin. Praesent mi elit, interdum a rhoncus elementum, lacinia vitae mi. In quis feugiat purus."
                ),
                _react2.default.createElement(
                  "h2",
                  { className: "mrg20B" },
                  "Duis auctor in nisl quis commodo"
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "In hac habitasse platea dictumst. Proin sit amet dui lorem. Mauris tempor vehicula massa a venenatis. Morbi auctor nunc leo, sed blandit urna mollis ac. Nunc sapien mi, aliquet vitae viverra in, euismod id ligula. Etiam laoreet arcu eros, vitae consectetur nulla auctor vitae. Aenean dictum venenatis lacus ac luctus. Pellentesque ac metus sed nibh lobortis sodales euismod eu mauris. Nam nec tellus nisl. Nullam faucibus, felis in convallis eleifend, tortor arcu sagittis tortor, a aliquam neque libero ut nibh. Duis venenatis faucibus lobortis. Etiam dignissim ante quis turpis egestas fringilla at consequat purus. Duis ornare congue sapien eget pharetra. Donec sit amet consectetur nulla. Morbi fermentum auctor erat, ac dignissim justo tincidunt nec."
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Suspendisse fermentum mollis pellentesque. Fusce mattis rutrum mi, nec dictum libero. Fusce quis lacus purus. Donec vehicula, arcu eget viverra aliquam, tortor libero ultrices lorem, non sagittis est elit eu nulla. Vestibulum nunc erat, varius ut consequat sed, pharetra vel velit. Integer hendrerit justo ac facilisis pulvinar. Praesent luctus condimentum enim, sit amet bibendum ipsum dignissim non. Morbi nec vulputate orci. Curabitur a porttitor eros, vel pharetra diam."
                ),
                _react2.default.createElement(
                  "h2",
                  { className: "mrg20B" },
                  "Sed consectetur ullamcorper nibh"
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Eget elementum ipsum semper in. Pellentesque vel dignissim enim. Aliquam volutpat placerat felis, vel condimentum elit ultrices at. Donec sed semper risus, tempor convallis massa. Duis lectus velit, efficitur et dolor ac, consectetur placerat lacus. Donec volutpat commodo tellus et interdum. Suspendisse urna lectus, lobortis id aliquet in, congue at felis. Suspendisse eget sollicitudin elit."
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Quisque gravida, nulla ac euismod vestibulum, libero odio mollis nunc, vitae ultricies ante velit eu lectus. In hac habitasse platea dictumst. Morbi luctus nisi commodo risus tincidunt, a sagittis quam placerat. Phasellus lobortis diam non molestie gravida. Praesent gravida velit eget lacus iaculis dapibus. Nulla facilisi. Nam cursus mattis orci, in malesuada lectus. Cras laoreet suscipit pulvinar. Donec metus nulla, malesuada eu leo sit amet, tempus pretium leo. Quisque lacinia leo a mauris iaculis malesuada. Aliquam non mauris lacus. Quisque ut mauris cursus, congue metus non, tincidunt lorem. Pellentesque volutpat aliquet sem eget aliquet. Pellentesque vehicula eu est eget porttitor. Donec lorem nulla, pharetra ut molestie et, commodo vitae ipsum. Nullam dictum finibus orci ut tincidunt."
                ),
                _react2.default.createElement(
                  "h3",
                  { className: "mrg20B" },
                  "Aenean tincidunt dolor"
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Nulla condimentum laoreet interdum. Phasellus sit amet libero tempus, convallis lectus vitae, dictum libero. Donec mauris ante, fermentum vel est eget, aliquam lacinia enim. Duis ultrices est bibendum neque condimentum, eu luctus nisl vehicula. Nam facilisis felis luctus dolor ultricies posuere. Nam nec semper dolor. Aenean vitae ante et nunc placerat venenatis. Proin est neque, volutpat ut massa id, sollicitudin rhoncus ipsum."
                ),
                _react2.default.createElement(
                  "h3",
                  { className: "mrg20B" },
                  "In hac habitasse platea dictumst"
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Phasellus commodo, orci sit amet pharetra semper, sem neque placerat arcu, vitae interdum turpis magna at ante. In hac habitasse platea dictumst. In sed vehicula est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus urna est, rhoncus eget nibh quis, tempus vestibulum justo. Vivamus eu ligula vel odio porttitor fermentum. Nullam iaculis porta felis, a malesuada magna porttitor eget. Ut pulvinar est at nisl commodo, blandit pulvinar ipsum porttitor. Aenean pellentesque, mi vel maximus egestas, enim massa accumsan risus, vitae ornare eros mauris vitae nunc. Etiam in placerat lacus. Sed in fringilla orci. Sed elit felis, rutrum non nisl eget, auctor pretium libero. Nullam ac massa lacinia, volutpat orci eget, elementum velit. Sed justo dolor, tempor vel tristique ut, posuere et magna. Donec volutpat purus pellentesque orci efficitur, ut egestas ligula viverra."
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Vivamus quis vehicula metus, tristique facilisis nunc. Mauris sollicitudin commodo lectus, at dapibus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas ac lacus massa. Curabitur tincidunt orci ligula, fermentum placerat mauris rhoncus vel. Curabitur felis urna, consectetur vel euismod nec, vestibulum id nisl. Suspendisse arcu nulla, elementum ac commodo id, auctor sit amet lacus. Aliquam erat volutpat. Praesent lobortis turpis a tellus vehicula molestie. Phasellus rhoncus felis elit."
                ),
                _react2.default.createElement(
                  "h2",
                  { className: "mrg20B" },
                  "Praesent vel sollicitudin arcu"
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Nam enim est, porta at velit ac, interdum sollicitudin massa. Duis mauris turpis, dictum vitae ante sed, lobortis tincidunt velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut a nulla feugiat, pellentesque quam ac, porta magna. Donec commodo, odio in scelerisque pretium, orci risus tempor massa, vitae scelerisque nisi nisi eget dui. Donec condimentum eu odio vitae interdum. Suspendisse ut semper leo. Sed laoreet volutpat congue. Mauris dolor risus, ultricies vel malesuada in, dignissim eu quam. Sed varius iaculis urna, ac convallis tortor pellentesque eget."
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Donec blandit tellus felis, et tempus odio feugiat vitae. Sed eu consectetur lacus. Nullam nibh ligula, scelerisque non convallis eu, euismod eget tellus. Integer hendrerit et turpis et porttitor. Aliquam at maximus diam. Mauris finibus efficitur consectetur. In nisl metus, pharetra ac elit non, egestas semper metus. Proin faucibus lacus nec est ultricies, at efficitur justo volutpat. Vestibulum condimentum sodales purus, pulvinar gravida lorem porttitor ac. Cras eget arcu a sapien tincidunt pretium. Maecenas a lectus dolor. Nulla non luctus ante. In vestibulum, mauris id bibendum viverra, lectus mauris eleifend felis, ac consectetur massa ante sit amet enim. Phasellus aliquam est justo, in facilisis tellus volutpat in. Fusce cursus magna ipsum, et aliquet urna pretium eget. Ut lacinia neque ut purus pulvinar, eget hendrerit massa scelerisque."
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Morbi a augue at velit porttitor tempus sit amet sit amet nisl. Suspendisse neque nisl, sagittis ut vulputate sed, ullamcorper eu neque. Integer ac elementum sem, a vestibulum mauris. Fusce lacus erat, laoreet quis nibh ultrices, vulputate consequat nibh. Vestibulum nisl diam, porta quis turpis fermentum, laoreet pretium justo. Vestibulum faucibus massa lectus, pulvinar ultricies sapien varius vel. Pellentesque odio elit, tincidunt facilisis enim nec, venenatis imperdiet justo. Etiam varius sed velit at blandit."
                ),
                _react2.default.createElement(
                  "h2",
                  { className: "mrg20B" },
                  "Morbi at eros non risus lacinia placerat"
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Nam suscipit est quis ligula venenatis, pellentesque venenatis erat porta. Nunc iaculis mauris ut quam hendrerit, eu pretium nisi tempus. Sed nec enim sem. Morbi cursus pellentesque lorem, sit amet egestas nibh tempor ut. Sed felis arcu, porttitor vel felis ut, porta venenatis neque. Aenean pharetra eleifend nisl. Nullam lacinia metus sit amet nunc varius, id aliquam neque congue."
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Pellentesque cursus a tortor ut euismod. Phasellus in lacinia mauris. Aliquam accumsan dui at orci tempus, non viverra leo pellentesque. Sed at nibh posuere lacus ullamcorper pellentesque quis et nisl. Pellentesque laoreet quam id scelerisque bibendum. Phasellus viverra porta urna eu elementum. Mauris dapibus vulputate sapien, at congue ex rutrum ac. Donec ullamcorper augue non augue condimentum, non rhoncus quam viverra. Mauris feugiat convallis viverra. Curabitur non facilisis mi. Sed ullamcorper arcu sed risus dictum cursus. Sed malesuada lacus ac justo finibus cursus. Fusce pulvinar enim non mauris vehicula, sit amet rhoncus leo mollis. Pellentesque sem elit, placerat sit amet nisl non, mattis accumsan lectus. Etiam sodales risus nisi, id tempor tellus tincidunt id. Nullam enim mauris, mollis vulputate laoreet ut, aliquet a justo."
                ),
                _react2.default.createElement(
                  "h2",
                  { className: "mrg20B" },
                  "Curabitur tortor purus"
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Sagittis a pharetra fringilla, eleifend quis est. Quisque purus dolor, eleifend et orci eu, eleifend euismod nulla. Cras hendrerit tellus eget ipsum efficitur, et faucibus augue laoreet. Sed sed sagittis ipsum. Proin et elit a sapien vestibulum accumsan. Nam sed luctus est. Aenean sed dui sodales, egestas purus vel, elementum elit. Proin iaculis magna eget ante iaculis, id dignissim mauris ullamcorper."
                ),
                _react2.default.createElement(
                  "h3",
                  { className: "mrg20B" },
                  "Donec sit amet nunc"
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Ac ante porta tempus at eget dolor. In euismod iaculis egestas. Integer felis purus, blandit quis nisl vel, pellentesque varius enim. Ut et rutrum purus. Pellentesque suscipit ex vitae urna fermentum ornare nec non elit. Morbi vel ornare tortor. In eleifend lacus ut purus euismod, vitae cursus velit sagittis. Nam tincidunt ac neque quis eleifend. Praesent pharetra, urna laoreet rutrum sagittis, elit nulla aliquam nunc, in aliquet tortor metus nec tellus. Nullam eu justo neque."
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Proin lobortis tempor arcu ut ornare. Praesent bibendum nibh sodales, congue nisi vitae, convallis enim. Sed sed mollis leo, nec malesuada eros. Praesent convallis nisl augue, et congue magna interdum a. Nunc tellus mi, dapibus nec orci sed, scelerisque maximus urna. Nulla a orci eget enim vulputate tristique dignissim quis odio. Aenean tristique fermentum sapien. Nunc non ligula convallis, aliquet mauris eu, bibendum ex. Sed id imperdiet lacus, vitae semper magna. Phasellus risus ipsum, ullamcorper vel elit nec, convallis vehicula elit."
                ),
                _react2.default.createElement(
                  "h3",
                  { className: "mrg20B" },
                  "Cras sed sodales nunc"
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Pellentesque a risus luctus, ullamcorper magna ut, fringilla quam. Fusce lacinia ipsum sem, sed vulputate lacus molestie a. Maecenas ullamcorper interdum maximus. Integer sed maximus orci. Proin vitae nulla sed augue laoreet vulputate. Maecenas odio lectus, pretium in molestie et, facilisis nec urna. Nunc luctus mollis metus lobortis ornare. Vestibulum viverra accumsan leo in pharetra. Nulla id enim non ipsum lobortis sagittis. Vivamus ac dolor ac nisl lacinia vulputate."
                ),
                _react2.default.createElement(
                  "h3",
                  { className: "mrg20B" },
                  "Aliquam eget tempor mauris"
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Vestibulum euismod dolor et lectus porta, maximus vestibulum velit tristique. Morbi ornare ultricies nibh in bibendum. Vestibulum laoreet porttitor libero luctus ultricies. In hac habitasse platea dictumst. Quisque blandit velit eget magna luctus mattis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse feugiat imperdiet magna, eu auctor massa facilisis in. Curabitur accumsan mi et ligula fermentum, sollicitudin fermentum lacus ullamcorper. Proin malesuada quis sapien ac auctor. Nulla facilisi. Etiam viverra dictum quam, ut sollicitudin nisl fringilla vitae."
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Suspendisse mollis, sapien eget scelerisque malesuada, tortor ex pharetra elit, et elementum mauris libero a felis. In quis risus facilisis, commodo magna eleifend, varius metus. Aenean quis lorem enim. Cras aliquet, quam vehicula sodales vulputate, odio mi pretium lorem, sit amet vestibulum ipsum nisl ut massa. Vestibulum pharetra est in orci mollis, sit amet condimentum eros convallis. Sed in elit dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet nibh et nibh vestibulum vestibulum. Curabitur maximus dignissim sem, sit amet vulputate nisl ultrices sit amet."
                ),
                _react2.default.createElement(
                  "h2",
                  { className: "mrg20B" },
                  "In id tempus metus"
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Mauris pretium dignissim pulvinar. Vivamus lectus ante, ullamcorper in turpis eu, tristique gravida dui. Nullam mattis lacus et nisl consequat, id sodales metus luctus. In placerat sed urna at tempor. Duis commodo ut mauris eget scelerisque. Nunc laoreet purus a lacus sagittis, vitae tempor lorem lobortis. Sed vitae diam arcu. Ut sit amet tellus quam. Aliquam tristique velit mauris. Mauris tempor neque eget diam laoreet volutpat. Fusce a gravida lectus, faucibus condimentum nibh. Aenean ac metus vitae nisl laoreet faucibus. Sed suscipit vel magna id sodales."
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Donec congue cursus metus, eget sodales nisl gravida in. Phasellus molestie massa nec ex efficitur, mattis tempus sem luctus. Morbi cursus fringilla elementum. Phasellus bibendum turpis nec eros tristique venenatis. Ut fermentum et lacus luctus congue. Pellentesque mattis nunc sapien, bibendum malesuada nisi ultricies ut. Sed ut rhoncus metus. Nulla ultrices ut orci sit amet faucibus. Nam et ultricies tortor. Mauris ornare ultricies enim, sit amet tempus libero hendrerit a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin vitae lorem lacus."
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Vestibulum sagittis sapien eget eros commodo, in iaculis nisi tristique. Vivamus ultrices, ex id auctor semper, ante metus aliquet lacus, eget vulputate ante risus in dui. Cras id lacus ac enim efficitur aliquet. Vestibulum sed tempor odio, sed laoreet tellus. In hac habitasse platea dictumst. Mauris cursus auctor sapien, eget dictum odio ornare eget. Pellentesque vestibulum aliquet est, maximus sodales libero sodales vitae. Curabitur dictum ante nunc, vitae pharetra tellus tincidunt eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "In varius erat pharetra, cursus lorem quis, aliquam eros. Cras aliquet aliquet mattis. Duis id posuere quam, non ornare ligula. Phasellus non odio felis. Nunc quis velit et lorem euismod congue id ac nunc. Aenean ut orci in tortor pulvinar ornare at ac risus. Cras dictum, arcu eleifend semper fermentum, arcu leo ullamcorper est, at porttitor nisl dui id dolor. Vestibulum urna felis, euismod in egestas sed, hendrerit in tortor. Phasellus in tellus sapien. Integer mattis nisi orci, eu mollis risus imperdiet non. Curabitur id semper ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec lorem est, bibendum sit amet nulla quis, bibendum sagittis risus. Integer vel nisl aliquet, placerat dui vitae, pretium nisl."
                ),
                _react2.default.createElement(
                  "h3",
                  { className: "mrg20B" },
                  "Maecenas hendrerit rutrum feugiat"
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Nullam id erat ut nibh accumsan luctus ut sit amet eros. Etiam vitae tempor odio, egestas congue ex. Donec in vestibulum tortor. Sed condimentum libero sit amet ipsum volutpat, ac mattis leo porttitor. Suspendisse cursus tempus metus at molestie. Etiam sagittis, massa nec tincidunt convallis, nunc augue ultricies magna, sit amet consectetur nisl nisi quis justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce odio felis, vestibulum nec volutpat at, iaculis in mauris."
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Morbi pharetra sit amet lectus et egestas. Ut augue nibh, pellentesque nec justo vitae, ornare volutpat sem. Mauris quis posuere est, varius faucibus nisi. Praesent dignissim dolor vitae risus auctor porta eget venenatis risus. Fusce posuere metus ac magna posuere commodo. Praesent placerat purus sit amet diam euismod, non tristique urna maximus. Proin egestas, mi non scelerisque iaculis, ipsum lectus porta massa, a viverra ante urna non nisi. Nulla lorem odio, feugiat quis iaculis vel, aliquet ut felis. Praesent ultrices tortor ut ipsum molestie, sed hendrerit nunc sagittis. Etiam luctus sapien eu risus imperdiet, sit amet dapibus quam efficitur."
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Donec lacinia orci urna, at mollis sem tempor at. Nulla interdum ultrices eros, et scelerisque lectus sodales at. Donec eu vehicula ex, vitae pellentesque sem. Praesent placerat ut nunc ac bibendum. In eget finibus neque. Aliquam pellentesque nisi pulvinar purus molestie, non porta ipsum blandit. Proin pretium sapien justo, id molestie nisi finibus at. Sed tempor finibus urna, eu posuere orci tincidunt dignissim. Donec eget lacus et nulla egestas auctor. Ut bibendum eget eros et efficitur. Aliquam egestas mauris non fringilla sagittis. Aliquam nec libero eu leo auctor sagittis. Aenean facilisis pretium porttitor. Vivamus mattis interdum augue nec convallis."
                ),
                _react2.default.createElement(
                  "h3",
                  { className: "mrg20B" },
                  "Mauris eget tincidunt nisi"
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Donec a lacinia lectus. Curabitur fermentum tortor quis elit varius, suscipit consequat nunc lacinia. Donec at sem augue. Mauris auctor eros non bibendum vulputate. Sed non nisi vitae lorem cursus ultrices. Donec ullamcorper congue finibus."
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Etiam porttitor fringilla libero sit amet scelerisque. Maecenas maximus nunc quis odio laoreet fermentum. Nulla ultricies fermentum convallis. Ut iaculis, diam quis elementum egestas, tortor elit malesuada risus, ut fermentum tortor nisl sit amet metus. Sed risus leo, blandit et pharetra a, pretium eu risus. Vivamus porttitor varius elit quis convallis. Aliquam a libero egestas, suscipit libero sed, euismod urna. Cras dapibus ultricies dui, id congue urna vestibulum non. Phasellus maximus erat quis tellus aliquet, eu tincidunt diam laoreet. Etiam vestibulum ex ac tempor tincidunt. Phasellus vestibulum quam lacinia nibh dapibus, non facilisis quam volutpat. Nullam nec fringilla quam. Sed condimentum ut est vitae blandit. Morbi aliquam, risus sit amet sollicitudin vulputate, ante sem volutpat elit, vestibulum tristique risus lacus nec elit. Sed laoreet est sed purus congue viverra. Donec tellus dolor, ultrices a venenatis id, pellentesque quis odio."
                ),
                _react2.default.createElement(
                  "p",
                  { className: "mrg20B font-gray-dark", style: { lineHeight: '2em' } },
                  "Donec eget consectetur diam. Etiam id dolor mollis est dictum scelerisque eu at nunc. Sed congue viverra sapien eget feugiat. Integer ut molestie eros, eget sagittis mauris. Maecenas ullamcorper sit amet quam sit amet tristique. Etiam placerat venenatis dui, eget convallis sem iaculis convallis. Quisque molestie justo et vestibulum porttitor. Suspendisse potenti. Sed et ligula nec tortor egestas cursus."
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Menuengine;
}(_react.Component);

exports.default = Menuengine;

/*
<div className="row">
      <div className="col-md-3">
        <div className="sticky-nav">
          <div id="tocify-menu"></div>
        </div>
      </div>
    <div className="col-md-9">
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="toc-tocify">
            <h2 className="mrg20B">Lorem ipsum dolor sit amet</h2>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Consectetur adipiscing elit. Curabitur tempor elit metus, id tincidunt sapien molestie id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer in porttitor enim. Aenean tortor risus, porta eu vehicula et, scelerisque quis lorem. Maecenas ultrices volutpat ex. Sed ultrices, diam ac condimentum sagittis, nisl lectus pulvinar lorem, vel commodo purus mi eu turpis. Curabitur justo sapien, facilisis ac leo et, elementum porta diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum feugiat neque at magna aliquet fringilla. Ut a varius nunc, at commodo dui. Fusce iaculis ante sem, nec accumsan massa venenatis vel. Nam pulvinar mauris quis nisi interdum finibus. Etiam enim risus, imperdiet vitae ante quis, dapibus dictum quam.</p>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Proin tempus gravida ultricies. Integer mi nibh, eleifend id nibh eu, consequat feugiat nisl. Curabitur odio dui, faucibus ac eleifend ac, dapibus quis lacus. Nam a tortor tortor. Curabitur eu venenatis justo, at malesuada leo. Nullam fermentum interdum ante blandit tempor. Nam blandit massa tellus, eget convallis metus imperdiet a. Cras efficitur placerat nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus posuere nibh nec iaculis sollicitudin. Praesent mi elit, interdum a rhoncus elementum, lacinia vitae mi. In quis feugiat purus.</p>
            <h2 className="mrg20B">Duis auctor in nisl quis commodo</h2>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>In hac habitasse platea dictumst. Proin sit amet dui lorem. Mauris tempor vehicula massa a venenatis. Morbi auctor nunc leo, sed blandit urna mollis ac. Nunc sapien mi, aliquet vitae viverra in, euismod id ligula. Etiam laoreet arcu eros, vitae consectetur nulla auctor vitae. Aenean dictum venenatis lacus ac luctus. Pellentesque ac metus sed nibh lobortis sodales euismod eu mauris. Nam nec tellus nisl. Nullam faucibus, felis in convallis eleifend, tortor arcu sagittis tortor, a aliquam neque libero ut nibh. Duis venenatis faucibus lobortis. Etiam dignissim ante quis turpis egestas fringilla at consequat purus. Duis ornare congue sapien eget pharetra. Donec sit amet consectetur nulla. Morbi fermentum auctor erat, ac dignissim justo tincidunt nec.</p>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Suspendisse fermentum mollis pellentesque. Fusce mattis rutrum mi, nec dictum libero. Fusce quis lacus purus. Donec vehicula, arcu eget viverra aliquam, tortor libero ultrices lorem, non sagittis est elit eu nulla. Vestibulum nunc erat, varius ut consequat sed, pharetra vel velit. Integer hendrerit justo ac facilisis pulvinar. Praesent luctus condimentum enim, sit amet bibendum ipsum dignissim non. Morbi nec vulputate orci. Curabitur a porttitor eros, vel pharetra diam.</p>
            <h2 className="mrg20B">Sed consectetur ullamcorper nibh</h2>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Eget elementum ipsum semper in. Pellentesque vel dignissim enim. Aliquam volutpat placerat felis, vel condimentum elit ultrices at. Donec sed semper risus, tempor convallis massa. Duis lectus velit, efficitur et dolor ac, consectetur placerat lacus. Donec volutpat commodo tellus et interdum. Suspendisse urna lectus, lobortis id aliquet in, congue at felis. Suspendisse eget sollicitudin elit.</p>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Quisque gravida, nulla ac euismod vestibulum, libero odio mollis nunc, vitae ultricies ante velit eu lectus. In hac habitasse platea dictumst. Morbi luctus nisi commodo risus tincidunt, a sagittis quam placerat. Phasellus lobortis diam non molestie gravida. Praesent gravida velit eget lacus iaculis dapibus. Nulla facilisi. Nam cursus mattis orci, in malesuada lectus. Cras laoreet suscipit pulvinar. Donec metus nulla, malesuada eu leo sit amet, tempus pretium leo. Quisque lacinia leo a mauris iaculis malesuada. Aliquam non mauris lacus. Quisque ut mauris cursus, congue metus non, tincidunt lorem. Pellentesque volutpat aliquet sem eget aliquet. Pellentesque vehicula eu est eget porttitor. Donec lorem nulla, pharetra ut molestie et, commodo vitae ipsum. Nullam dictum finibus orci ut tincidunt.</p>
            <h3 className="mrg20B">Aenean tincidunt dolor</h3>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Nulla condimentum laoreet interdum. Phasellus sit amet libero tempus, convallis lectus vitae, dictum libero. Donec mauris ante, fermentum vel est eget, aliquam lacinia enim. Duis ultrices est bibendum neque condimentum, eu luctus nisl vehicula. Nam facilisis felis luctus dolor ultricies posuere. Nam nec semper dolor. Aenean vitae ante et nunc placerat venenatis. Proin est neque, volutpat ut massa id, sollicitudin rhoncus ipsum.</p>
            <h3 className="mrg20B">In hac habitasse platea dictumst</h3>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Phasellus commodo, orci sit amet pharetra semper, sem neque placerat arcu, vitae interdum turpis magna at ante. In hac habitasse platea dictumst. In sed vehicula est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus urna est, rhoncus eget nibh quis, tempus vestibulum justo. Vivamus eu ligula vel odio porttitor fermentum. Nullam iaculis porta felis, a malesuada magna porttitor eget. Ut pulvinar est at nisl commodo, blandit pulvinar ipsum porttitor. Aenean pellentesque, mi vel maximus egestas, enim massa accumsan risus, vitae ornare eros mauris vitae nunc. Etiam in placerat lacus. Sed in fringilla orci. Sed elit felis, rutrum non nisl eget, auctor pretium libero. Nullam ac massa lacinia, volutpat orci eget, elementum velit. Sed justo dolor, tempor vel tristique ut, posuere et magna. Donec volutpat purus pellentesque orci efficitur, ut egestas ligula viverra.</p>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Vivamus quis vehicula metus, tristique facilisis nunc. Mauris sollicitudin commodo lectus, at dapibus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas ac lacus massa. Curabitur tincidunt orci ligula, fermentum placerat mauris rhoncus vel. Curabitur felis urna, consectetur vel euismod nec, vestibulum id nisl. Suspendisse arcu nulla, elementum ac commodo id, auctor sit amet lacus. Aliquam erat volutpat. Praesent lobortis turpis a tellus vehicula molestie. Phasellus rhoncus felis elit.</p>
            <h2 className="mrg20B">Praesent vel sollicitudin arcu</h2>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Nam enim est, porta at velit ac, interdum sollicitudin massa. Duis mauris turpis, dictum vitae ante sed, lobortis tincidunt velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut a nulla feugiat, pellentesque quam ac, porta magna. Donec commodo, odio in scelerisque pretium, orci risus tempor massa, vitae scelerisque nisi nisi eget dui. Donec condimentum eu odio vitae interdum. Suspendisse ut semper leo. Sed laoreet volutpat congue. Mauris dolor risus, ultricies vel malesuada in, dignissim eu quam. Sed varius iaculis urna, ac convallis tortor pellentesque eget.</p>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Donec blandit tellus felis, et tempus odio feugiat vitae. Sed eu consectetur lacus. Nullam nibh ligula, scelerisque non convallis eu, euismod eget tellus. Integer hendrerit et turpis et porttitor. Aliquam at maximus diam. Mauris finibus efficitur consectetur. In nisl metus, pharetra ac elit non, egestas semper metus. Proin faucibus lacus nec est ultricies, at efficitur justo volutpat. Vestibulum condimentum sodales purus, pulvinar gravida lorem porttitor ac. Cras eget arcu a sapien tincidunt pretium. Maecenas a lectus dolor. Nulla non luctus ante. In vestibulum, mauris id bibendum viverra, lectus mauris eleifend felis, ac consectetur massa ante sit amet enim. Phasellus aliquam est justo, in facilisis tellus volutpat in. Fusce cursus magna ipsum, et aliquet urna pretium eget. Ut lacinia neque ut purus pulvinar, eget hendrerit massa scelerisque.</p>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Morbi a augue at velit porttitor tempus sit amet sit amet nisl. Suspendisse neque nisl, sagittis ut vulputate sed, ullamcorper eu neque. Integer ac elementum sem, a vestibulum mauris. Fusce lacus erat, laoreet quis nibh ultrices, vulputate consequat nibh. Vestibulum nisl diam, porta quis turpis fermentum, laoreet pretium justo. Vestibulum faucibus massa lectus, pulvinar ultricies sapien varius vel. Pellentesque odio elit, tincidunt facilisis enim nec, venenatis imperdiet justo. Etiam varius sed velit at blandit.</p>
            <h2 className="mrg20B">Morbi at eros non risus lacinia placerat</h2>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Nam suscipit est quis ligula venenatis, pellentesque venenatis erat porta. Nunc iaculis mauris ut quam hendrerit, eu pretium nisi tempus. Sed nec enim sem. Morbi cursus pellentesque lorem, sit amet egestas nibh tempor ut. Sed felis arcu, porttitor vel felis ut, porta venenatis neque. Aenean pharetra eleifend nisl. Nullam lacinia metus sit amet nunc varius, id aliquam neque congue.</p>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Pellentesque cursus a tortor ut euismod. Phasellus in lacinia mauris. Aliquam accumsan dui at orci tempus, non viverra leo pellentesque. Sed at nibh posuere lacus ullamcorper pellentesque quis et nisl. Pellentesque laoreet quam id scelerisque bibendum. Phasellus viverra porta urna eu elementum. Mauris dapibus vulputate sapien, at congue ex rutrum ac. Donec ullamcorper augue non augue condimentum, non rhoncus quam viverra. Mauris feugiat convallis viverra. Curabitur non facilisis mi. Sed ullamcorper arcu sed risus dictum cursus. Sed malesuada lacus ac justo finibus cursus. Fusce pulvinar enim non mauris vehicula, sit amet rhoncus leo mollis. Pellentesque sem elit, placerat sit amet nisl non, mattis accumsan lectus. Etiam sodales risus nisi, id tempor tellus tincidunt id. Nullam enim mauris, mollis vulputate laoreet ut, aliquet a justo.</p>
            <h2 className="mrg20B">Curabitur tortor purus</h2>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Sagittis a pharetra fringilla, eleifend quis est. Quisque purus dolor, eleifend et orci eu, eleifend euismod nulla. Cras hendrerit tellus eget ipsum efficitur, et faucibus augue laoreet. Sed sed sagittis ipsum. Proin et elit a sapien vestibulum accumsan. Nam sed luctus est. Aenean sed dui sodales, egestas purus vel, elementum elit. Proin iaculis magna eget ante iaculis, id dignissim mauris ullamcorper.</p>
            <h3 className="mrg20B">Donec sit amet nunc</h3>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Ac ante porta tempus at eget dolor. In euismod iaculis egestas. Integer felis purus, blandit quis nisl vel, pellentesque varius enim. Ut et rutrum purus. Pellentesque suscipit ex vitae urna fermentum ornare nec non elit. Morbi vel ornare tortor. In eleifend lacus ut purus euismod, vitae cursus velit sagittis. Nam tincidunt ac neque quis eleifend. Praesent pharetra, urna laoreet rutrum sagittis, elit nulla aliquam nunc, in aliquet tortor metus nec tellus. Nullam eu justo neque.</p>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Proin lobortis tempor arcu ut ornare. Praesent bibendum nibh sodales, congue nisi vitae, convallis enim. Sed sed mollis leo, nec malesuada eros. Praesent convallis nisl augue, et congue magna interdum a. Nunc tellus mi, dapibus nec orci sed, scelerisque maximus urna. Nulla a orci eget enim vulputate tristique dignissim quis odio. Aenean tristique fermentum sapien. Nunc non ligula convallis, aliquet mauris eu, bibendum ex. Sed id imperdiet lacus, vitae semper magna. Phasellus risus ipsum, ullamcorper vel elit nec, convallis vehicula elit.</p>
            <h3 className="mrg20B">Cras sed sodales nunc</h3>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Pellentesque a risus luctus, ullamcorper magna ut, fringilla quam. Fusce lacinia ipsum sem, sed vulputate lacus molestie a. Maecenas ullamcorper interdum maximus. Integer sed maximus orci. Proin vitae nulla sed augue laoreet vulputate. Maecenas odio lectus, pretium in molestie et, facilisis nec urna. Nunc luctus mollis metus lobortis ornare. Vestibulum viverra accumsan leo in pharetra. Nulla id enim non ipsum lobortis sagittis. Vivamus ac dolor ac nisl lacinia vulputate.</p>
            <h3 className="mrg20B">Aliquam eget tempor mauris</h3>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Vestibulum euismod dolor et lectus porta, maximus vestibulum velit tristique. Morbi ornare ultricies nibh in bibendum. Vestibulum laoreet porttitor libero luctus ultricies. In hac habitasse platea dictumst. Quisque blandit velit eget magna luctus mattis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse feugiat imperdiet magna, eu auctor massa facilisis in. Curabitur accumsan mi et ligula fermentum, sollicitudin fermentum lacus ullamcorper. Proin malesuada quis sapien ac auctor. Nulla facilisi. Etiam viverra dictum quam, ut sollicitudin nisl fringilla vitae.</p>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Suspendisse mollis, sapien eget scelerisque malesuada, tortor ex pharetra elit, et elementum mauris libero a felis. In quis risus facilisis, commodo magna eleifend, varius metus. Aenean quis lorem enim. Cras aliquet, quam vehicula sodales vulputate, odio mi pretium lorem, sit amet vestibulum ipsum nisl ut massa. Vestibulum pharetra est in orci mollis, sit amet condimentum eros convallis. Sed in elit dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet nibh et nibh vestibulum vestibulum. Curabitur maximus dignissim sem, sit amet vulputate nisl ultrices sit amet.</p>
            <h2 className="mrg20B">In id tempus metus</h2>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Mauris pretium dignissim pulvinar. Vivamus lectus ante, ullamcorper in turpis eu, tristique gravida dui. Nullam mattis lacus et nisl consequat, id sodales metus luctus. In placerat sed urna at tempor. Duis commodo ut mauris eget scelerisque. Nunc laoreet purus a lacus sagittis, vitae tempor lorem lobortis. Sed vitae diam arcu. Ut sit amet tellus quam. Aliquam tristique velit mauris. Mauris tempor neque eget diam laoreet volutpat. Fusce a gravida lectus, faucibus condimentum nibh. Aenean ac metus vitae nisl laoreet faucibus. Sed suscipit vel magna id sodales.</p>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Donec congue cursus metus, eget sodales nisl gravida in. Phasellus molestie massa nec ex efficitur, mattis tempus sem luctus. Morbi cursus fringilla elementum. Phasellus bibendum turpis nec eros tristique venenatis. Ut fermentum et lacus luctus congue. Pellentesque mattis nunc sapien, bibendum malesuada nisi ultricies ut. Sed ut rhoncus metus. Nulla ultrices ut orci sit amet faucibus. Nam et ultricies tortor. Mauris ornare ultricies enim, sit amet tempus libero hendrerit a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin vitae lorem lacus.</p>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Vestibulum sagittis sapien eget eros commodo, in iaculis nisi tristique. Vivamus ultrices, ex id auctor semper, ante metus aliquet lacus, eget vulputate ante risus in dui. Cras id lacus ac enim efficitur aliquet. Vestibulum sed tempor odio, sed laoreet tellus. In hac habitasse platea dictumst. Mauris cursus auctor sapien, eget dictum odio ornare eget. Pellentesque vestibulum aliquet est, maximus sodales libero sodales vitae. Curabitur dictum ante nunc, vitae pharetra tellus tincidunt eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>In varius erat pharetra, cursus lorem quis, aliquam eros. Cras aliquet aliquet mattis. Duis id posuere quam, non ornare ligula. Phasellus non odio felis. Nunc quis velit et lorem euismod congue id ac nunc. Aenean ut orci in tortor pulvinar ornare at ac risus. Cras dictum, arcu eleifend semper fermentum, arcu leo ullamcorper est, at porttitor nisl dui id dolor. Vestibulum urna felis, euismod in egestas sed, hendrerit in tortor. Phasellus in tellus sapien. Integer mattis nisi orci, eu mollis risus imperdiet non. Curabitur id semper ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec lorem est, bibendum sit amet nulla quis, bibendum sagittis risus. Integer vel nisl aliquet, placerat dui vitae, pretium nisl.</p>
            <h3 className="mrg20B">Maecenas hendrerit rutrum feugiat</h3>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Nullam id erat ut nibh accumsan luctus ut sit amet eros. Etiam vitae tempor odio, egestas congue ex. Donec in vestibulum tortor. Sed condimentum libero sit amet ipsum volutpat, ac mattis leo porttitor. Suspendisse cursus tempus metus at molestie. Etiam sagittis, massa nec tincidunt convallis, nunc augue ultricies magna, sit amet consectetur nisl nisi quis justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce odio felis, vestibulum nec volutpat at, iaculis in mauris.</p>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Morbi pharetra sit amet lectus et egestas. Ut augue nibh, pellentesque nec justo vitae, ornare volutpat sem. Mauris quis posuere est, varius faucibus nisi. Praesent dignissim dolor vitae risus auctor porta eget venenatis risus. Fusce posuere metus ac magna posuere commodo. Praesent placerat purus sit amet diam euismod, non tristique urna maximus. Proin egestas, mi non scelerisque iaculis, ipsum lectus porta massa, a viverra ante urna non nisi. Nulla lorem odio, feugiat quis iaculis vel, aliquet ut felis. Praesent ultrices tortor ut ipsum molestie, sed hendrerit nunc sagittis. Etiam luctus sapien eu risus imperdiet, sit amet dapibus quam efficitur.</p>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Donec lacinia orci urna, at mollis sem tempor at. Nulla interdum ultrices eros, et scelerisque lectus sodales at. Donec eu vehicula ex, vitae pellentesque sem. Praesent placerat ut nunc ac bibendum. In eget finibus neque. Aliquam pellentesque nisi pulvinar purus molestie, non porta ipsum blandit. Proin pretium sapien justo, id molestie nisi finibus at. Sed tempor finibus urna, eu posuere orci tincidunt dignissim. Donec eget lacus et nulla egestas auctor. Ut bibendum eget eros et efficitur. Aliquam egestas mauris non fringilla sagittis. Aliquam nec libero eu leo auctor sagittis. Aenean facilisis pretium porttitor. Vivamus mattis interdum augue nec convallis.</p>
            <h3 className="mrg20B">Mauris eget tincidunt nisi</h3>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Donec a lacinia lectus. Curabitur fermentum tortor quis elit varius, suscipit consequat nunc lacinia. Donec at sem augue. Mauris auctor eros non bibendum vulputate. Sed non nisi vitae lorem cursus ultrices. Donec ullamcorper congue finibus.</p>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Etiam porttitor fringilla libero sit amet scelerisque. Maecenas maximus nunc quis odio laoreet fermentum. Nulla ultricies fermentum convallis. Ut iaculis, diam quis elementum egestas, tortor elit malesuada risus, ut fermentum tortor nisl sit amet metus. Sed risus leo, blandit et pharetra a, pretium eu risus. Vivamus porttitor varius elit quis convallis. Aliquam a libero egestas, suscipit libero sed, euismod urna. Cras dapibus ultricies dui, id congue urna vestibulum non. Phasellus maximus erat quis tellus aliquet, eu tincidunt diam laoreet. Etiam vestibulum ex ac tempor tincidunt. Phasellus vestibulum quam lacinia nibh dapibus, non facilisis quam volutpat. Nullam nec fringilla quam. Sed condimentum ut est vitae blandit. Morbi aliquam, risus sit amet sollicitudin vulputate, ante sem volutpat elit, vestibulum tristique risus lacus nec elit. Sed laoreet est sed purus congue viverra. Donec tellus dolor, ultrices a venenatis id, pellentesque quis odio.</p>
            <p className="mrg20B font-gray-dark" style={{lineHeight: '2em'}}>Donec eget consectetur diam. Etiam id dolor mollis est dictum scelerisque eu at nunc. Sed congue viverra sapien eget feugiat. Integer ut molestie eros, eget sagittis mauris. Maecenas ullamcorper sit amet quam sit amet tristique. Etiam placerat venenatis dui, eget convallis sem iaculis convallis. Quisque molestie justo et vestibulum porttitor. Suspendisse potenti. Sed et ligula nec tortor egestas cursus.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  */

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return (
                /*  <div style={{ marginTop: 20 }}>
                      <h1>React Redux Router</h1>
                      { this.props.children }
                  </div>*/
                _react2.default.createElement(
                    'div',
                    null,
                    this.props.children
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Sidebar from '../components/Sidebar';
//import Mainbar from '../components/Mainbar';
var Lablengine = function (_Component) {
  _inherits(Lablengine, _Component);

  function Lablengine() {
    _classCallCheck(this, Lablengine);

    return _possibleConstructorReturn(this, (Lablengine.__proto__ || Object.getPrototypeOf(Lablengine)).apply(this, arguments));
  }

  _createClass(Lablengine, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col-md-3" },
          _react2.default.createElement(
            "ul",
            { className: "list-group" },
            _react2.default.createElement(
              "li",
              { className: "mrg10B" },
              _react2.default.createElement(
                "a",
                { href: "#faq-tab-1", "data-toggle": "tab", className: "list-group-item bg-white" },
                "How to get paid ",
                _react2.default.createElement("i", { className: "glyph-icon icon-angle-right mrg0A" })
              )
            ),
            _react2.default.createElement(
              "li",
              { className: "mrg10B" },
              _react2.default.createElement(
                "a",
                { href: "#faq-tab-2", "data-toggle": "tab", className: "list-group-item bg-white" },
                "ThemeForest related ",
                _react2.default.createElement("i", { className: "glyph-icon font-green icon-angle-right mrg0A" })
              )
            ),
            _react2.default.createElement(
              "li",
              { className: "mrg10B" },
              _react2.default.createElement(
                "a",
                { href: "#faq-tab-3", "data-toggle": "tab", className: "list-group-item bg-white" },
                "Common questions ",
                _react2.default.createElement("i", { className: "glyph-icon icon-angle-right mrg0A" })
              )
            ),
            _react2.default.createElement(
              "li",
              { className: "mrg10B" },
              _react2.default.createElement(
                "a",
                { href: "#faq-tab-4", "data-toggle": "tab", className: "list-group-item bg-white" },
                "Terms of service ",
                _react2.default.createElement("i", { className: "glyph-icon icon-angle-right mrg0A" })
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col-md-9" },
          _react2.default.createElement(
            "div",
            { className: "tab-content" },
            _react2.default.createElement(
              "div",
              { className: "tab-pane fade active in pad0A", id: "faq-tab-1" },
              _react2.default.createElement(
                "div",
                { className: "panel-group", id: "accordion5" },
                _react2.default.createElement(
                  "div",
                  { className: "panel" },
                  _react2.default.createElement(
                    "div",
                    { className: "panel-heading" },
                    _react2.default.createElement(
                      "h4",
                      { className: "panel-title" },
                      _react2.default.createElement(
                        "a",
                        { "data-toggle": "collapse", "data-parent": "#accordion5", href: "#collapseOne" },
                        "Collapsible Group Item #1"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { id: "collapseOne", className: "panel-collapse collapse in" },
                    _react2.default.createElement(
                      "div",
                      { className: "panel-body pad0B" },
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth."
                      ),
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words."
                      ),
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is."
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "panel" },
                  _react2.default.createElement(
                    "div",
                    { className: "panel-heading" },
                    _react2.default.createElement(
                      "h4",
                      { className: "panel-title" },
                      _react2.default.createElement(
                        "a",
                        { "data-toggle": "collapse", "data-parent": "#accordion5", href: "#collapseTwo" },
                        "Collapsible Group Item #2"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { id: "collapseTwo", className: "panel-collapse collapse" },
                    _react2.default.createElement(
                      "div",
                      { className: "panel-body pad0B" },
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words."
                      ),
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators."
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "panel" },
                  _react2.default.createElement(
                    "div",
                    { className: "panel-heading" },
                    _react2.default.createElement(
                      "h4",
                      { className: "panel-title" },
                      _react2.default.createElement(
                        "a",
                        { "data-toggle": "collapse", "data-parent": "#accordion5", href: "#collapseThree" },
                        "Collapsible Group Item #3"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { id: "collapseThree", className: "panel-collapse collapse" },
                    _react2.default.createElement(
                      "div",
                      { className: "panel-body pad0B" },
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators."
                      ),
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental."
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "tab-pane fade pad0A", id: "faq-tab-2" },
              _react2.default.createElement(
                "div",
                { className: "panel-group", id: "accordion1" },
                _react2.default.createElement(
                  "div",
                  { className: "panel" },
                  _react2.default.createElement(
                    "div",
                    { className: "panel-heading" },
                    _react2.default.createElement(
                      "h4",
                      { className: "panel-title" },
                      _react2.default.createElement(
                        "a",
                        { "data-toggle": "collapse", "data-parent": "#accordion1", href: "#collapseOne1" },
                        "Collapsible Group Item #1"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { id: "collapseOne1", className: "panel-collapse collapse in" },
                    _react2.default.createElement(
                      "div",
                      { className: "panel-body pad0B" },
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators."
                      ),
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental."
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "panel" },
                  _react2.default.createElement(
                    "div",
                    { className: "panel-heading" },
                    _react2.default.createElement(
                      "h4",
                      { className: "panel-title" },
                      _react2.default.createElement(
                        "a",
                        { "data-toggle": "collapse", "data-parent": "#accordion1", href: "#collapseTwo1" },
                        "Collapsible Group Item #2"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { id: "collapseTwo1", className: "panel-collapse collapse" },
                    _react2.default.createElement(
                      "div",
                      { className: "panel-body pad0B" },
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words."
                      ),
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages."
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "panel" },
                  _react2.default.createElement(
                    "div",
                    { className: "panel-heading" },
                    _react2.default.createElement(
                      "h4",
                      { className: "panel-title" },
                      _react2.default.createElement(
                        "a",
                        { "data-toggle": "collapse", "data-parent": "#accordion1", href: "#collapseThree1" },
                        "Collapsible Group Item #3"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { id: "collapseThree1", className: "panel-collapse collapse" },
                    _react2.default.createElement(
                      "div",
                      { className: "panel-body pad0B" },
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth."
                      ),
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words."
                      ),
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is."
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "tab-pane fade pad0A", id: "faq-tab-3" },
              _react2.default.createElement(
                "div",
                { className: "panel-group", id: "accordion2" },
                _react2.default.createElement(
                  "div",
                  { className: "panel" },
                  _react2.default.createElement(
                    "div",
                    { className: "panel-heading" },
                    _react2.default.createElement(
                      "h4",
                      { className: "panel-title" },
                      _react2.default.createElement(
                        "a",
                        { "data-toggle": "collapse", "data-parent": "#accordion2", href: "#collapseOne2" },
                        "Collapsible Group Item #1"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { id: "collapseOne2", className: "panel-collapse collapse in" },
                    _react2.default.createElement(
                      "div",
                      { className: "panel-body pad0B" },
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators."
                      ),
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental."
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "panel" },
                  _react2.default.createElement(
                    "div",
                    { className: "panel-heading" },
                    _react2.default.createElement(
                      "h4",
                      { className: "panel-title" },
                      _react2.default.createElement(
                        "a",
                        { "data-toggle": "collapse", "data-parent": "#accordion2", href: "#collapseTwo2" },
                        "Collapsible Group Item #2"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { id: "collapseTwo2", className: "panel-collapse collapse" },
                    _react2.default.createElement(
                      "div",
                      { className: "panel-body pad0B" },
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words."
                      ),
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages."
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "panel" },
                  _react2.default.createElement(
                    "div",
                    { className: "panel-heading" },
                    _react2.default.createElement(
                      "h4",
                      { className: "panel-title" },
                      _react2.default.createElement(
                        "a",
                        { "data-toggle": "collapse", "data-parent": "#accordion2", href: "#collapseThree2" },
                        "Collapsible Group Item #3"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { id: "collapseThree2", className: "panel-collapse collapse" },
                    _react2.default.createElement(
                      "div",
                      { className: "panel-body pad0B" },
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words."
                      ),
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages."
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "tab-pane fade pad0A", id: "faq-tab-4" },
              _react2.default.createElement(
                "div",
                { className: "panel-group", id: "accordion3" },
                _react2.default.createElement(
                  "div",
                  { className: "panel" },
                  _react2.default.createElement(
                    "div",
                    { className: "panel-heading" },
                    _react2.default.createElement(
                      "h4",
                      { className: "panel-title" },
                      _react2.default.createElement(
                        "a",
                        { "data-toggle": "collapse", "data-parent": "#accordion", href: "#collapseOne4" },
                        "Collapsible Group Item #1"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { id: "collapseOne4", className: "panel-collapse collapse in" },
                    _react2.default.createElement(
                      "div",
                      { className: "panel-body pad0B" },
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words."
                      ),
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages."
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "panel" },
                  _react2.default.createElement(
                    "div",
                    { className: "panel-heading" },
                    _react2.default.createElement(
                      "h4",
                      { className: "panel-title" },
                      _react2.default.createElement(
                        "a",
                        { "data-toggle": "collapse", "data-parent": "#accordion", href: "#collapseTwo4" },
                        "Collapsible Group Item #2"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { id: "collapseTwo4", className: "panel-collapse collapse" },
                    _react2.default.createElement(
                      "div",
                      { className: "panel-body pad0B" },
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words."
                      ),
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages."
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "panel" },
                  _react2.default.createElement(
                    "div",
                    { className: "panel-heading" },
                    _react2.default.createElement(
                      "h4",
                      { className: "panel-title" },
                      _react2.default.createElement(
                        "a",
                        { "data-toggle": "collapse", "data-parent": "#accordion", href: "#collapseThree4" },
                        "Collapsible Group Item #3"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { id: "collapseThree4", className: "panel-collapse collapse" },
                    _react2.default.createElement(
                      "div",
                      { className: "panel-body pad0B" },
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words."
                      ),
                      _react2.default.createElement(
                        "p",
                        { className: "mrg15B" },
                        "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental."
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Lablengine;
}(_react.Component);

exports.default = Lablengine;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Activity = function (_Component) {
  _inherits(Activity, _Component);

  function Activity() {
    _classCallCheck(this, Activity);

    return _possibleConstructorReturn(this, (Activity.__proto__ || Object.getPrototypeOf(Activity)).apply(this, arguments));
  }

  _createClass(Activity, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "panel" },
        _react2.default.createElement(
          "div",
          { className: "panel-body" },
          _react2.default.createElement(
            "h3",
            { className: "title-hero" },
            "Users activity"
          ),
          _react2.default.createElement(
            "div",
            { className: "example-box-wrapper" },
            _react2.default.createElement(
              "div",
              { className: "timeline-box timeline-box-left" },
              _react2.default.createElement(
                "div",
                { className: "tl-row" },
                _react2.default.createElement(
                  "div",
                  { className: "tl-item float-right" },
                  _react2.default.createElement(
                    "div",
                    { className: "tl-icon bg-red" },
                    _react2.default.createElement("i", { className: "glyph-icon icon-toggle-on" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "popover right" },
                    _react2.default.createElement("div", { className: "arrow" }),
                    _react2.default.createElement(
                      "div",
                      { className: "popover-content" },
                      _react2.default.createElement(
                        "div",
                        { className: "tl-label bs-label label-info" },
                        "Appointment"
                      ),
                      _react2.default.createElement(
                        "p",
                        { className: "tl-content" },
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio."
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "tl-time" },
                        _react2.default.createElement("i", { className: "glyph-icon icon-clock-o" }),
                        " a few seconds ago"
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "tl-row" },
                _react2.default.createElement(
                  "div",
                  { className: "tl-item float-right" },
                  _react2.default.createElement(
                    "div",
                    { className: "tl-icon bg-primary" },
                    _react2.default.createElement("i", { className: "glyph-icon icon-wifi" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "popover right" },
                    _react2.default.createElement("div", { className: "arrow" }),
                    _react2.default.createElement(
                      "div",
                      { className: "popover-content" },
                      _react2.default.createElement(
                        "div",
                        { className: "tl-label bs-label bg-yellow" },
                        "Teleconference"
                      ),
                      _react2.default.createElement(
                        "p",
                        { className: "tl-content" },
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio."
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "tl-time" },
                        _react2.default.createElement("i", { className: "glyph-icon icon-clock-o" }),
                        " a few seconds ago"
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "tl-row" },
                _react2.default.createElement(
                  "div",
                  { className: "tl-item float-right" },
                  _react2.default.createElement(
                    "div",
                    { className: "tl-icon bg-black" },
                    _react2.default.createElement("i", { className: "glyph-icon icon-headphones" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "popover right" },
                    _react2.default.createElement("div", { className: "arrow" }),
                    _react2.default.createElement(
                      "div",
                      { className: "popover-content" },
                      _react2.default.createElement(
                        "div",
                        { className: "tl-label bs-label label-danger" },
                        "Meeting"
                      ),
                      _react2.default.createElement(
                        "p",
                        { className: "tl-content" },
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio."
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "tl-time" },
                        _react2.default.createElement("i", { className: "glyph-icon icon-clock-o" }),
                        " a few seconds ago"
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Activity;
}(_react.Component);

exports.default = Activity;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = __webpack_require__(56);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contentbox = function (_Component) {
  _inherits(Contentbox, _Component);

  function Contentbox(props) {
    _classCallCheck(this, Contentbox);

    var _this = _possibleConstructorReturn(this, (Contentbox.__proto__ || Object.getPrototypeOf(Contentbox)).call(this, props));

    _this.state = {
      chartData: props.chartData
    };
    return _this;
  }
  /*  static defaultProps={
    displayTitle:false,
    displayLegend:false,
    legendPosition:'none'
  }*/

  _createClass(Contentbox, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'content-box' },
        _react2.default.createElement(
          'h3',
          { className: 'content-box-header bg-default' },
          _react2.default.createElement('i', { className: 'glyph-icon icon-cog' }),
          ' Live server status',
          _react2.default.createElement(
            'span',
            { className: 'header-buttons-separator' },
            _react2.default.createElement(
              'a',
              { href: '#', className: 'icon-separator remove-button', 'data-animation': 'flipOutX' },
              _react2.default.createElement('i', { className: 'glyph-icon icon-times' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'content-box-wrapper pad0A' },
          _react2.default.createElement(
            'div',
            { className: 'mrg20A' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-7 center-margin pad0A' },
                _react2.default.createElement(_reactChartjs.Doughnut, { data: this.state.chartData, height: 400 })
              )
            )
          ),
          _react2.default.createElement(
            'table',
            { className: 'table remove-background' },
            _react2.default.createElement(
              'tbody',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  { className: 'text-left size-sm' },
                  _react2.default.createElement('div', { className: 'badge mrg10L badge-small mrg5R bg-azure' }),
                  'New user registrations'
                ),
                _react2.default.createElement(
                  'td',
                  { className: 'text-right' },
                  _react2.default.createElement(
                    'a',
                    { href: '#', className: 'btn btn-sm hover-yellow tooltip-button', 'data-placement': 'top', title: 'Flag' },
                    _react2.default.createElement('i', { className: 'glyph-icon icon-flag' })
                  ),
                  _react2.default.createElement(
                    'a',
                    { href: '#', className: 'btn btn-sm hover-blue-alt tooltip-button', 'data-placement': 'top', title: 'Edit' },
                    _react2.default.createElement('i', { className: 'glyph-icon icon-edit' })
                  ),
                  _react2.default.createElement(
                    'a',
                    { href: '#', className: 'btn btn-sm hover-red tooltip-button', 'data-placement': 'top', title: 'Remove' },
                    _react2.default.createElement('i', { className: 'glyph-icon icon-remove' })
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  { className: 'text-left size-sm' },
                  _react2.default.createElement('div', { className: 'badge mrg10L badge-small mrg5R bg-orange' }),
                  'Returning visitors'
                ),
                _react2.default.createElement(
                  'td',
                  { className: 'text-right' },
                  _react2.default.createElement(
                    'a',
                    { href: '#', className: 'btn btn-sm hover-yellow tooltip-button', 'data-placement': 'top', title: 'Flag' },
                    _react2.default.createElement('i', { className: 'glyph-icon icon-flag' })
                  ),
                  _react2.default.createElement(
                    'a',
                    { href: '#', className: 'btn btn-sm hover-blue-alt tooltip-button', 'data-placement': 'top', title: 'Edit' },
                    _react2.default.createElement('i', { className: 'glyph-icon icon-edit' })
                  ),
                  _react2.default.createElement(
                    'a',
                    { href: '#', className: 'btn btn-sm hover-red tooltip-button', 'data-placement': 'top', title: 'Remove' },
                    _react2.default.createElement('i', { className: 'glyph-icon icon-remove' })
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  { className: 'text-left size-sm' },
                  _react2.default.createElement('div', { className: 'badge mrg10L badge-small mrg5R bg-gray' }),
                  'Page views'
                ),
                _react2.default.createElement(
                  'td',
                  { className: 'text-right' },
                  _react2.default.createElement(
                    'a',
                    { href: '#', className: 'btn btn-sm hover-yellow tooltip-button', 'data-placement': 'top', title: 'Flag' },
                    _react2.default.createElement('i', { className: 'glyph-icon icon-flag' })
                  ),
                  _react2.default.createElement(
                    'a',
                    { href: '#', className: 'btn btn-sm hover-blue-alt tooltip-button', 'data-placement': 'top', title: 'Edit' },
                    _react2.default.createElement('i', { className: 'glyph-icon icon-edit' })
                  ),
                  _react2.default.createElement(
                    'a',
                    { href: '#', className: 'btn btn-sm hover-red tooltip-button', 'data-placement': 'top', title: 'Remove' },
                    _react2.default.createElement('i', { className: 'glyph-icon icon-remove' })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Contentbox;
}(_react.Component);

exports.default = Contentbox;

/*

import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';


class Contentbox extends Component{
  render(){
    return(
      <div className="content-box">
        <h3 className="content-box-header bg-default"><i className="glyph-icon icon-cog"></i> Live server status <span className="header-buttons-separator">
          <a href="#" className="icon-separator remove-button" data-animation="flipOutX"><i className="glyph-icon icon-times"></i></a></span>
        </h3>
        <div className="content-box-wrapper pad0A">
          <div className="mrg20A">
            <div className="row">
              <div className="col-md-7 center-margin pad0A">
                <canvas id="chart-area" width="150" height="150"></canvas>
              </div>
            </div>
          </div>
          <table className="table remove-background">
            <tbody>
              <tr>
                <td className="text-left size-sm"><div className="badge mrg10L badge-small mrg5R bg-azure"></div>New user registrations</td>
                <td className="text-right"><a href="#" className="btn btn-sm hover-yellow tooltip-button" data-placement="top" title="Flag"><i className="glyph-icon icon-flag"></i></a> <a href="#" className="btn btn-sm hover-blue-alt tooltip-button" data-placement="top" title="Edit"><i className="glyph-icon icon-edit"></i></a> <a href="#" className="btn btn-sm hover-red tooltip-button" data-placement="top" title="Remove"><i className="glyph-icon icon-remove"></i></a></td>
              </tr>
              <tr>
                <td className="text-left size-sm"><div className="badge mrg10L badge-small mrg5R bg-orange"></div>Returning visitors</td>
                <td className="text-right"><a href="#" className="btn btn-sm hover-yellow tooltip-button" data-placement="top" title="Flag"><i className="glyph-icon icon-flag"></i></a> <a href="#" className="btn btn-sm hover-blue-alt tooltip-button" data-placement="top" title="Edit"><i className="glyph-icon icon-edit"></i></a> <a href="#" className="btn btn-sm hover-red tooltip-button" data-placement="top" title="Remove"><i className="glyph-icon icon-remove"></i></a></td>
              </tr>
              <tr>
                <td className="text-left size-sm"><div className="badge mrg10L badge-small mrg5R bg-gray"></div>Page views</td>
                <td className="text-right"><a href="#" className="btn btn-sm hover-yellow tooltip-button" data-placement="top" title="Flag"><i className="glyph-icon icon-flag"></i></a> <a href="#" className="btn btn-sm hover-blue-alt tooltip-button" data-placement="top" title="Edit"><i className="glyph-icon icon-edit"></i></a> <a href="#" className="btn btn-sm hover-red tooltip-button" data-placement="top" title="Remove"><i className="glyph-icon icon-remove"></i></a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
          )
        }
      }
export default Contentbox;


*/

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashstatic = function (_Component) {
  _inherits(Dashstatic, _Component);

  function Dashstatic() {
    _classCallCheck(this, Dashstatic);

    return _possibleConstructorReturn(this, (Dashstatic.__proto__ || Object.getPrototypeOf(Dashstatic)).apply(this, arguments));
  }

  _createClass(Dashstatic, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "dashboard-box dashboard-box-chart bg-white content-box" },
        _react2.default.createElement(
          "div",
          { className: "content-wrapper" },
          _react2.default.createElement(
            "div",
            { className: "header" },
            "8960 ",
            _react2.default.createElement(
              "span",
              null,
              "Total Downloads",
              _react2.default.createElement(
                "b",
                null,
                "in last"
              ),
              " 6 years"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "bs-label bg-orange" },
            "~51%"
          ),
          _react2.default.createElement(
            "div",
            { className: "center-div sparkline-big-alt" },
            "2210,2310,2010,2310,2123,2350"
          ),
          _react2.default.createElement(
            "div",
            { className: "row list-grade" },
            _react2.default.createElement(
              "div",
              { className: "col-md-2" },
              "2009"
            ),
            _react2.default.createElement(
              "div",
              { className: "col-md-2" },
              "2010"
            ),
            _react2.default.createElement(
              "div",
              { className: "col-md-2" },
              "2011"
            ),
            _react2.default.createElement(
              "div",
              { className: "col-md-2" },
              "2012"
            ),
            _react2.default.createElement(
              "div",
              { className: "col-md-2" },
              "2013"
            ),
            _react2.default.createElement(
              "div",
              { className: "col-md-2" },
              "2014"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "button-pane" },
          _react2.default.createElement(
            "div",
            { className: "size-md float-left" },
            _react2.default.createElement(
              "a",
              { href: "#", title: "" },
              "View more details"
            )
          ),
          _react2.default.createElement(
            "a",
            { href: "#", className: "btn btn-primary float-right tooltip-button", "data-placement": "top", title: "View details" },
            _react2.default.createElement("i", { className: "glyph-icon icon-caret-right" })
          )
        )
      );
    }
  }]);

  return Dashstatic;
}(_react.Component);

exports.default = Dashstatic;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Followers = function (_Component) {
  _inherits(Followers, _Component);

  function Followers() {
    _classCallCheck(this, Followers);

    return _possibleConstructorReturn(this, (Followers.__proto__ || Object.getPrototypeOf(Followers)).apply(this, arguments));
  }

  _createClass(Followers, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col-md-6" },
          _react2.default.createElement(
            "div",
            { className: "panel-layout" },
            _react2.default.createElement(
              "div",
              { className: "panel-box" },
              _react2.default.createElement(
                "div",
                { className: "panel-content bg-facebook" },
                _react2.default.createElement("i", { className: "glyph-icon font-size-35 icon-facebook" })
              ),
              _react2.default.createElement(
                "div",
                { className: "panel-content pad15A bg-white" },
                _react2.default.createElement(
                  "div",
                  { className: "center-vertical" },
                  _react2.default.createElement(
                    "ul",
                    { className: "center-content list-group list-group-separator row mrg0A" },
                    _react2.default.createElement(
                      "li",
                      { className: "col-md-6" },
                      _react2.default.createElement(
                        "b",
                        null,
                        "1,456"
                      ),
                      _react2.default.createElement(
                        "p",
                        { className: "font-gray" },
                        "Friends"
                      )
                    ),
                    _react2.default.createElement(
                      "li",
                      { className: "col-md-6" },
                      _react2.default.createElement(
                        "b",
                        null,
                        "593"
                      ),
                      _react2.default.createElement(
                        "p",
                        { className: "font-gray" },
                        "Likes"
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col-md-6" },
          _react2.default.createElement(
            "div",
            { className: "panel-layout" },
            _react2.default.createElement(
              "div",
              { className: "panel-box" },
              _react2.default.createElement(
                "div",
                { className: "panel-content bg-twitter" },
                _react2.default.createElement("i", { className: "glyph-icon font-size-35 icon-twitter" })
              ),
              _react2.default.createElement(
                "div",
                { className: "panel-content pad15A bg-white" },
                _react2.default.createElement(
                  "div",
                  { className: "center-vertical" },
                  _react2.default.createElement(
                    "ul",
                    { className: "center-content list-group list-group-separator row mrg0A" },
                    _react2.default.createElement(
                      "li",
                      { className: "col-md-6" },
                      _react2.default.createElement(
                        "b",
                        null,
                        "356"
                      ),
                      _react2.default.createElement(
                        "p",
                        { className: "font-gray" },
                        "Followers"
                      )
                    ),
                    _react2.default.createElement(
                      "li",
                      { className: "col-md-6" },
                      _react2.default.createElement(
                        "b",
                        null,
                        "981"
                      ),
                      _react2.default.createElement(
                        "p",
                        { className: "font-gray" },
                        "Tweets"
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Followers;
}(_react.Component);

exports.default = Followers;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Maincarousel = function (_Component) {
  _inherits(Maincarousel, _Component);

  function Maincarousel() {
    _classCallCheck(this, Maincarousel);

    return _possibleConstructorReturn(this, (Maincarousel.__proto__ || Object.getPrototypeOf(Maincarousel)).apply(this, arguments));
  }

  _createClass(Maincarousel, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "panel" },
        _react2.default.createElement(
          "div",
          { className: "panel-body" },
          _react2.default.createElement(
            "h3",
            { className: "title-hero" },
            "Alternate carousel"
          ),
          _react2.default.createElement(
            "div",
            { className: "example-box-wrapper" },
            _react2.default.createElement(
              "div",
              { className: "owl-carousel-4 slider-wrapper inverse arrows-outside carousel-wrapper" },
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "div",
                  { className: "thumbnail-box-wrapper mrg5A" },
                  _react2.default.createElement(
                    "div",
                    { className: "thumbnail-box" },
                    _react2.default.createElement("a", { className: "thumb-link", href: "#", title: "" }),
                    _react2.default.createElement(
                      "div",
                      { className: "thumb-content" },
                      _react2.default.createElement(
                        "div",
                        { className: "center-vertical" },
                        _react2.default.createElement(
                          "div",
                          { className: "center-content" },
                          _react2.default.createElement("i", { className: "icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera" })
                        )
                      )
                    ),
                    _react2.default.createElement("div", { className: "thumb-overlay bg-black" }),
                    _react2.default.createElement("img", { src: "../bin/assets/image-resources/stock-images/img-17.jpg", alt: "" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "thumb-pane" },
                    _react2.default.createElement(
                      "h3",
                      { className: "thumb-heading animated rollIn" },
                      _react2.default.createElement(
                        "a",
                        { href: "#", title: "" },
                        "Working in the morning"
                      ),
                      _react2.default.createElement(
                        "small",
                        null,
                        "12 March 2015"
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "div",
                  { className: "thumbnail-box-wrapper mrg5A" },
                  _react2.default.createElement(
                    "div",
                    { className: "thumbnail-box" },
                    _react2.default.createElement("a", { className: "thumb-link", href: "#", title: "" }),
                    _react2.default.createElement(
                      "div",
                      { className: "thumb-content" },
                      _react2.default.createElement(
                        "div",
                        { className: "center-vertical" },
                        _react2.default.createElement(
                          "div",
                          { className: "center-content" },
                          _react2.default.createElement("i", { className: "icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera" })
                        )
                      )
                    ),
                    _react2.default.createElement("div", { className: "thumb-overlay bg-black" }),
                    _react2.default.createElement("img", { src: "../bin/assets/image-resources/stock-images/img-18.jpg", alt: "" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "thumb-pane" },
                    _react2.default.createElement(
                      "h3",
                      { className: "thumb-heading animated rollIn" },
                      _react2.default.createElement(
                        "a",
                        { href: "#", title: "" },
                        "Working in the morning"
                      ),
                      _react2.default.createElement(
                        "small",
                        null,
                        "12 March 2015"
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "div",
                  { className: "thumbnail-box-wrapper mrg5A" },
                  _react2.default.createElement(
                    "div",
                    { className: "thumbnail-box" },
                    _react2.default.createElement("a", { className: "thumb-link", href: "#", title: "" }),
                    _react2.default.createElement(
                      "div",
                      { className: "thumb-content" },
                      _react2.default.createElement(
                        "div",
                        { className: "center-vertical" },
                        _react2.default.createElement(
                          "div",
                          { className: "center-content" },
                          _react2.default.createElement("i", { className: "icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera" })
                        )
                      )
                    ),
                    _react2.default.createElement("div", { className: "thumb-overlay bg-black" }),
                    _react2.default.createElement("img", { src: "../bin/assets/image-resources/stock-images/img-19.jpg", alt: "" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "thumb-pane" },
                    _react2.default.createElement(
                      "h3",
                      { className: "thumb-heading animated rollIn" },
                      _react2.default.createElement(
                        "a",
                        { href: "#", title: "" },
                        "Working in the morning"
                      ),
                      _react2.default.createElement(
                        "small",
                        null,
                        "12 March 2015"
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "div",
                  { className: "thumbnail-box-wrapper mrg5A" },
                  _react2.default.createElement(
                    "div",
                    { className: "thumbnail-box" },
                    _react2.default.createElement("a", { className: "thumb-link", href: "#", title: "" }),
                    _react2.default.createElement(
                      "div",
                      { className: "thumb-content" },
                      _react2.default.createElement(
                        "div",
                        { className: "center-vertical" },
                        _react2.default.createElement(
                          "div",
                          { className: "center-content" },
                          _react2.default.createElement("i", { className: "icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera" })
                        )
                      )
                    ),
                    _react2.default.createElement("div", { className: "thumb-overlay bg-black" }),
                    _react2.default.createElement("img", { src: "../bin/assets/image-resources/stock-images/img-20.jpg", alt: "" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "thumb-pane" },
                    _react2.default.createElement(
                      "h3",
                      { className: "thumb-heading animated rollIn" },
                      _react2.default.createElement(
                        "a",
                        { href: "#", title: "" },
                        "Working in the morning"
                      ),
                      _react2.default.createElement(
                        "small",
                        null,
                        "12 March 2015"
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "div",
                  { className: "thumbnail-box-wrapper mrg5A" },
                  _react2.default.createElement(
                    "div",
                    { className: "thumbnail-box" },
                    _react2.default.createElement("a", { className: "thumb-link", href: "#", title: "" }),
                    _react2.default.createElement(
                      "div",
                      { className: "thumb-content" },
                      _react2.default.createElement(
                        "div",
                        { className: "center-vertical" },
                        _react2.default.createElement(
                          "div",
                          { className: "center-content" },
                          _react2.default.createElement("i", { className: "icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera" })
                        )
                      )
                    ),
                    _react2.default.createElement("div", { className: "thumb-overlay bg-black" }),
                    _react2.default.createElement("img", { src: "../bin/assets/image-resources/stock-images/img-23.jpg", alt: "" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "thumb-pane" },
                    _react2.default.createElement(
                      "h3",
                      { className: "thumb-heading animated rollIn" },
                      _react2.default.createElement(
                        "a",
                        { href: "#", title: "" },
                        "Working in the morning"
                      ),
                      _react2.default.createElement(
                        "small",
                        null,
                        "12 March 2015"
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "div",
                  { className: "thumbnail-box-wrapper mrg5A" },
                  _react2.default.createElement(
                    "div",
                    { className: "thumbnail-box" },
                    _react2.default.createElement("a", { className: "thumb-link", href: "#", title: "" }),
                    _react2.default.createElement(
                      "div",
                      { className: "thumb-content" },
                      _react2.default.createElement(
                        "div",
                        { className: "center-vertical" },
                        _react2.default.createElement(
                          "div",
                          { className: "center-content" },
                          _react2.default.createElement("i", { className: "icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera" })
                        )
                      )
                    ),
                    _react2.default.createElement("div", { className: "thumb-overlay bg-black" }),
                    _react2.default.createElement("img", { src: "../bin/assets/image-resources/stock-images/img-24.jpg", alt: "" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "thumb-pane" },
                    _react2.default.createElement(
                      "h3",
                      { className: "thumb-heading animated rollIn" },
                      _react2.default.createElement(
                        "a",
                        { href: "#", title: "" },
                        "Working in the morning"
                      ),
                      _react2.default.createElement(
                        "small",
                        null,
                        "12 March 2015"
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Maincarousel;
}(_react.Component);

exports.default = Maincarousel;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabledata = function (_Component) {
  _inherits(Tabledata, _Component);

  function Tabledata() {
    _classCallCheck(this, Tabledata);

    return _possibleConstructorReturn(this, (Tabledata.__proto__ || Object.getPrototypeOf(Tabledata)).apply(this, arguments));
  }

  _createClass(Tabledata, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "panel" },
        _react2.default.createElement(
          "div",
          { className: "panel-body" },
          _react2.default.createElement(
            "h3",
            { className: "title-hero" },
            "Basic"
          ),
          _react2.default.createElement(
            "div",
            { className: "example-box-wrapper" },
            _react2.default.createElement(
              "table",
              { cellPadding: "0", cellSpacing: "0", className: "table table-striped table-bordered", id: "datatable-example" },
              _react2.default.createElement(
                "thead",
                null,
                _react2.default.createElement(
                  "tr",
                  null,
                  _react2.default.createElement(
                    "th",
                    null,
                    "Browser"
                  ),
                  _react2.default.createElement(
                    "th",
                    null,
                    "Platform(s)"
                  ),
                  _react2.default.createElement(
                    "th",
                    null,
                    "Engine version"
                  )
                )
              ),
              _react2.default.createElement(
                "tbody",
                null,
                _react2.default.createElement(
                  "tr",
                  { className: "odd gradeX" },
                  _react2.default.createElement(
                    "td",
                    null,
                    "Internet Explorer 4.0"
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    "Win 95+"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: "center" },
                    "4"
                  )
                ),
                _react2.default.createElement(
                  "tr",
                  { className: "even gradeC" },
                  _react2.default.createElement(
                    "td",
                    null,
                    "Internet Explorer 5.0"
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    "Win 95+"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: "center" },
                    "5"
                  )
                ),
                _react2.default.createElement(
                  "tr",
                  { className: "odd gradeA" },
                  _react2.default.createElement(
                    "td",
                    null,
                    "Internet Explorer 5.5"
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    "Win 95+"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: "center" },
                    "5.5"
                  )
                ),
                _react2.default.createElement(
                  "tr",
                  { className: "even gradeA" },
                  _react2.default.createElement(
                    "td",
                    null,
                    "Internet Explorer 6"
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    "Win 98+"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: "center" },
                    "6"
                  )
                ),
                _react2.default.createElement(
                  "tr",
                  { className: "odd gradeA" },
                  _react2.default.createElement(
                    "td",
                    null,
                    "Internet Explorer 7"
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    "Win XP SP2+"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: "center" },
                    "7"
                  )
                ),
                _react2.default.createElement(
                  "tr",
                  { className: "even gradeA" },
                  _react2.default.createElement(
                    "td",
                    null,
                    "AOL browser (AOL desktop)"
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    "Win XP"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: "center" },
                    "6"
                  )
                ),
                _react2.default.createElement(
                  "tr",
                  { className: "gradeA" },
                  _react2.default.createElement(
                    "td",
                    null,
                    "Firefox 1.0"
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    "Win 98+ / OSX.2+"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: "center" },
                    "1.7"
                  )
                ),
                _react2.default.createElement(
                  "tr",
                  { className: "gradeA" },
                  _react2.default.createElement(
                    "td",
                    null,
                    "Firefox 1.5"
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    "Win 98+ / OSX.2+"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: "center" },
                    "1.8"
                  )
                ),
                _react2.default.createElement(
                  "tr",
                  { className: "gradeA" },
                  _react2.default.createElement(
                    "td",
                    null,
                    "Firefox 2.0"
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    "Win 98+ / OSX.2+"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: "center" },
                    "1.8"
                  )
                ),
                _react2.default.createElement(
                  "tr",
                  { className: "gradeA" },
                  _react2.default.createElement(
                    "td",
                    null,
                    "Firefox 3.0"
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    "Win 2k+ / OSX.3+"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: "center" },
                    "1.9"
                  )
                ),
                _react2.default.createElement(
                  "tr",
                  { className: "gradeA" },
                  _react2.default.createElement(
                    "td",
                    null,
                    "Camino 1.0"
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    "OSX.2+"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: "center" },
                    "1.8"
                  )
                ),
                _react2.default.createElement(
                  "tr",
                  { className: "gradeA" },
                  _react2.default.createElement(
                    "td",
                    null,
                    "Camino 1.5"
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    "OSX.3+"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: "center" },
                    "1.8"
                  )
                ),
                _react2.default.createElement(
                  "tr",
                  { className: "gradeU" },
                  _react2.default.createElement(
                    "td",
                    null,
                    "All others"
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    "-"
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: "center" },
                    "-"
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Tabledata;
}(_react.Component);

exports.default = Tabledata;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Temperature = function (_Component) {
  _inherits(Temperature, _Component);

  function Temperature() {
    _classCallCheck(this, Temperature);

    return _possibleConstructorReturn(this, (Temperature.__proto__ || Object.getPrototypeOf(Temperature)).apply(this, arguments));
  }

  _createClass(Temperature, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "panel-layout" },
        _react2.default.createElement(
          "div",
          { className: "panel-box col-xs-6" },
          _react2.default.createElement(
            "div",
            { className: "panel-content bg-white" },
            _react2.default.createElement("canvas", { id: "icon-cloud", width: "80", height: "80" })
          ),
          _react2.default.createElement(
            "div",
            { className: "panel-content bg-black" },
            _react2.default.createElement(
              "div",
              { className: "center-vertical" },
              _react2.default.createElement(
                "ul",
                { className: "center-content nav nav-justified" },
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "h4",
                    null,
                    _react2.default.createElement("i", { className: "glyph-icon font-green opacity-80 icon-chevron-down" }),
                    " 7 \xBA"
                  ),
                  _react2.default.createElement(
                    "p",
                    { className: "opacity-80 text-transform-upr font-size-11 mrg5T" },
                    "Low"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "h4",
                    null,
                    _react2.default.createElement("i", { className: "glyph-icon font-red opacity-80 icon-chevron-up" }),
                    " 21 \xBA"
                  ),
                  _react2.default.createElement(
                    "p",
                    { className: "opacity-80 text-transform-upr font-size-11 mrg5T" },
                    "High"
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "panel-box col-xs-6 bg-blue-alt" },
          _react2.default.createElement(
            "div",
            { className: "panel-content" },
            _react2.default.createElement(
              "h3",
              null,
              "San Francisco"
            ),
            _react2.default.createElement(
              "h4",
              { className: "opacity-60" },
              "California"
            )
          )
        )
      );
    }
  }]);

  return Temperature;
}(_react.Component);

exports.default = Temperature;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Topbox = function (_Component) {
  _inherits(Topbox, _Component);

  function Topbox() {
    _classCallCheck(this, Topbox);

    return _possibleConstructorReturn(this, (Topbox.__proto__ || Object.getPrototypeOf(Topbox)).apply(this, arguments));
  }

  _createClass(Topbox, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col-md-3" },
          _react2.default.createElement(
            "a",
            { href: "#", title: "Example tile shortcut", className: "tile-box tile-box-shortcut btn-danger" },
            _react2.default.createElement(
              "span",
              { className: "bs-badge badge-absolute" },
              "1"
            ),
            _react2.default.createElement(
              "div",
              { className: "tile-header" },
              "Reach"
            ),
            _react2.default.createElement(
              "div",
              { className: "tile-content-wrapper" },
              _react2.default.createElement("i", { className: "glyph-icon icon-file-photo-o" })
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col-md-3" },
          _react2.default.createElement(
            "a",
            { href: "#", title: "Example tile shortcut", className: "tile-box tile-box-shortcut btn-success" },
            _react2.default.createElement(
              "div",
              { className: "tile-header" },
              "Comments"
            ),
            _react2.default.createElement(
              "div",
              { className: "tile-content-wrapper" },
              _react2.default.createElement("i", { className: "glyph-icon icon-desktop" })
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col-md-3" },
          _react2.default.createElement(
            "a",
            { href: "#", title: "Example tile shortcut", className: "tile-box tile-box-shortcut btn-info" },
            _react2.default.createElement(
              "span",
              { className: "bs-badge badge-absolute" },
              "2"
            ),
            _react2.default.createElement(
              "div",
              { className: "tile-header" },
              "Reviews"
            ),
            _react2.default.createElement(
              "div",
              { className: "tile-content-wrapper" },
              _react2.default.createElement("i", { className: "glyph-icon icon-download" })
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col-md-3" },
          _react2.default.createElement(
            "a",
            { href: "#", title: "Example tile shortcut", className: "tile-box tile-box-shortcut btn-warning" },
            _react2.default.createElement(
              "div",
              { className: "tile-header" },
              "Visitors"
            ),
            _react2.default.createElement(
              "div",
              { className: "tile-content-wrapper" },
              _react2.default.createElement("i", { className: "glyph-icon icon-code-fork" })
            )
          )
        )
      );
    }
  }]);

  return Topbox;
}(_react.Component);

exports.default = Topbox;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Weekgraf = function (_Component) {
  _inherits(Weekgraf, _Component);

  function Weekgraf() {
    _classCallCheck(this, Weekgraf);

    return _possibleConstructorReturn(this, (Weekgraf.__proto__ || Object.getPrototypeOf(Weekgraf)).apply(this, arguments));
  }

  _createClass(Weekgraf, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "panel mrg20T" },
        _react2.default.createElement(
          "div",
          { className: "panel-body" },
          _react2.default.createElement(
            "h3",
            { className: "title-hero" },
            "Weekly Sales"
          ),
          _react2.default.createElement(
            "div",
            { className: "example-box-wrapper" },
            _react2.default.createElement("div", { id: "data-example-1", className: "mrg20B", style: { width: '100%', height: '300px' } })
          )
        )
      );
    }
  }]);

  return Weekgraf;
}(_react.Component);

exports.default = Weekgraf;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Sidebar from '../components/Sidebar';
//import Mainbar from '../components/Mainbar';
var Neworder = function (_Component) {
  _inherits(Neworder, _Component);

  function Neworder() {
    _classCallCheck(this, Neworder);

    return _possibleConstructorReturn(this, (Neworder.__proto__ || Object.getPrototypeOf(Neworder)).apply(this, arguments));
  }

  _createClass(Neworder, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "panel" },
        _react2.default.createElement(
          "div",
          { className: "panel-body" },
          _react2.default.createElement(
            "h3",
            { className: "title-hero" },
            "New order"
          ),
          _react2.default.createElement(
            "div",
            { className: "example-box-wrapper" },
            _react2.default.createElement(
              "div",
              { className: "row" },
              _react2.default.createElement(
                "div",
                { className: "col-md-12" },
                _react2.default.createElement(
                  "button",
                  { type: "button", className: "btn btn-info mrg20B collapsed", "data-toggle": "collapse", "data-target": "#demo-2" },
                  "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437"
                ),
                _react2.default.createElement(
                  "div",
                  { id: "demo-2", className: "collapse" },
                  _react2.default.createElement(
                    "div",
                    { className: "panel" },
                    _react2.default.createElement(
                      "div",
                      { className: "panel-heading" },
                      _react2.default.createElement(
                        "h3",
                        { className: "panel-title" },
                        "Panel title"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "panel-body" },
                      _react2.default.createElement(
                        "form",
                        { className: "form-horizontal bordered-row" },
                        _react2.default.createElement(
                          "div",
                          { className: "form-group" },
                          _react2.default.createElement(
                            "label",
                            { className: "col-sm-1 control-label" },
                            "\u0410\u0440\u0442\u0438\u043A\u0443\u043B"
                          ),
                          _react2.default.createElement(
                            "div",
                            { className: "col-sm-9" },
                            _react2.default.createElement(
                              "select",
                              { name: "", className: "custom-select" },
                              _react2.default.createElement(
                                "option",
                                null,
                                "Option 1"
                              ),
                              _react2.default.createElement(
                                "option",
                                null,
                                "Option 2"
                              ),
                              _react2.default.createElement(
                                "option",
                                null,
                                "Option 3"
                              ),
                              _react2.default.createElement(
                                "option",
                                null,
                                "Option 4"
                              )
                            )
                          )
                        ),
                        _react2.default.createElement(
                          "div",
                          { className: "form-group" },
                          _react2.default.createElement(
                            "label",
                            { className: "col-sm-1 control-label" },
                            "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E"
                          ),
                          _react2.default.createElement(
                            "div",
                            { className: "col-sm-9" },
                            _react2.default.createElement("input", { type: "text", name: "", className: "form-control spinner-input" })
                          )
                        ),
                        _react2.default.createElement(
                          "div",
                          { className: "form-group" },
                          _react2.default.createElement(
                            "label",
                            { className: "col-sm-1 control-label" },
                            "\u041D\u043E\u043C\u0435\u0440 \u043F\u0430\u0440\u0442\u0438\u0438"
                          ),
                          _react2.default.createElement(
                            "div",
                            { className: "col-sm-9" },
                            _react2.default.createElement("input", { type: "text", className: "form-control", id: "", placeholder: "Example placeholder..." })
                          )
                        ),
                        _react2.default.createElement(
                          "div",
                          { className: "form-group" },
                          _react2.default.createElement(
                            "label",
                            { htmlFor: "", className: "col-sm-1 control-label" },
                            "\u0421\u0440\u043E\u043A \u0433\u043E\u0434\u043D\u043E\u0441\u0442\u0438 (\u0434\u0430\u0442\u0430)"
                          ),
                          _react2.default.createElement(
                            "div",
                            { className: "col-sm-9" },
                            _react2.default.createElement(
                              "div",
                              { className: "input-prepend input-group" },
                              _react2.default.createElement(
                                "span",
                                { className: "add-on input-group-addon" },
                                _react2.default.createElement("i", { className: "glyph-icon icon-calendar" })
                              ),
                              _react2.default.createElement("input", { type: "text", className: "bootstrap-datepicker form-control", "data-date-format": "mm/dd/yy" })
                            )
                          )
                        ),
                        _react2.default.createElement(
                          "div",
                          { className: "form-group" },
                          _react2.default.createElement(
                            "label",
                            { className: "col-sm-1 control-label" },
                            "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
                          ),
                          _react2.default.createElement(
                            "div",
                            { className: "col-sm-9" },
                            _react2.default.createElement("input", { type: "text", className: "form-control", id: "", placeholder: "Example placeholder..." })
                          )
                        ),
                        _react2.default.createElement(
                          "div",
                          { className: "form-group" },
                          _react2.default.createElement(
                            "label",
                            { className: "col-sm-1 control-label" },
                            "\u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u0435"
                          ),
                          _react2.default.createElement(
                            "div",
                            { className: "col-sm-9" },
                            _react2.default.createElement("textarea", { name: "", id: "", className: "form-control" })
                          )
                        ),
                        _react2.default.createElement(
                          "div",
                          { className: "form-group" },
                          _react2.default.createElement("div", { className: "col-sm-1 control-label" }),
                          _react2.default.createElement(
                            "div",
                            { className: "col-sm-1" },
                            _react2.default.createElement(
                              "button",
                              { className: "btn btn-success" },
                              "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
                            )
                          ),
                          _react2.default.createElement(
                            "div",
                            { className: "col-sm-1" },
                            _react2.default.createElement(
                              "button",
                              { className: "btn btn-danger" },
                              "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Neworder;
}(_react.Component);

exports.default = Neworder;

/*

<div className="panel">
  <div className="panel-body">
    <h3 className="title-hero">New order</h3>
    <div className="example-box-wrapper">
      <div className="row">
        <div className="col-md-12">
          <button type="button" className="btn btn-info mrg20B collapsed" data-toggle="collapse" data-target="#demo-2">Slide collapsible</button>
          <div id="demo-2" className="collapse">
            <div className="panel">
              <div className="panel-heading">
                <h3 className="panel-title">Panel title</h3>
              </div>
              <div className="panel-body">

              <form className="form-horizontal bordered-row">
                <div className="form-group">
                  <label className="col-sm-3 control-label">Input</label>
                  <div className="col-sm-6">
                    <input type="text" className="form-control" id="" placeholder="Example placeholder..."/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Disabled input</label>
                  <div className="col-sm-6">
                    <input type="text" className="form-control" id="" disabled="disabled" placeholder="Disabled input ..."/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Popover input</label>
                  <div className="col-sm-6">
                    <input type="text" className="form-control popover-button-default" placeholder="Input focus trigger popover" data-content="Popover content from &lt;b&gt;data-content&lt;/b&gt; attribute 3" title="Top popover" data-trigger="focus" data-placement="top"/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Select</label>
                  <div className="col-sm-6">
                    <select className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Select disabled</label>
                  <div className="col-sm-6">
                    <select className="form-control" disabled="disabled">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Custom select</label>
                  <div className="col-sm-6">
                    <select name="" className="custom-select">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                    </select>
                  </div>
                </div>
              </form>




              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


*/

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _lodash = __webpack_require__(19);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Sidebar from '../components/Sidebar';
//import Mainbar from '../components/Mainbar';
var Neworder = function (_Component) {
  _inherits(Neworder, _Component);

  function Neworder() {
    _classCallCheck(this, Neworder);

    return _possibleConstructorReturn(this, (Neworder.__proto__ || Object.getPrototypeOf(Neworder)).apply(this, arguments));
  }

  _createClass(Neworder, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
    //console.log('___+++++++++++++___');
    //  console.log(this.props.orders.initial);
    //console.log(typeof this.props.orders.initial);
    //this.props.orders.initial.then((data)=>{data.order.map((d)=>{console.log('___@___')})});


    //    {this.props.orders.map((d)=><tr><td>#</td><td></td><td>Row 2</td><td>Row 3</td><td>Row 3</td><td>Row 3</td></tr>)}<tr><td>#</td><td></td><td>Row 2</td><td>Row 3</td><td>Row 3</td><td>Row 3</td></tr>

  }, {
    key: 'render',
    value: function render() {
      console.log('________________');
      //  console.log(this.props.orders.initial);
      //const mass=this.props.orders.order;   {mass.map((p)=><tr><th>Статус</th><th>Артикул</th><th>Серия</th><th>Количество</th><th>Название</th><th>Создан</th></tr>)}
      return _react2.default.createElement(
        'div',
        { className: 'panel' },
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          _react2.default.createElement(
            'h3',
            { className: 'title-hero' },
            'Order list'
          ),
          _react2.default.createElement(
            'div',
            { className: 'example-box-wrapper' },
            _react2.default.createElement(
              'table',
              { className: 'table table-hover' },
              _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement('th', null),
                  _react2.default.createElement(
                    'th',
                    null,
                    '\u0421\u0442\u0430\u0442\u0443\u0441'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    '\u0410\u0440\u0442\u0438\u043A\u0443\u043B'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    '\u0421\u0435\u0440\u0438\u044F'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    '\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    '\u0421\u043E\u0437\u0434\u0430\u043D'
                  )
                )
              ),
              _react2.default.createElement(
                'tbody',
                null,
                this.props.orders.initial.order.map(function (data, i) {
                  return _react2.default.createElement(
                    'tr',
                    { key: i },
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('i', { className: 'fa fa-address-card', 'aria-hidden': 'true' })
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      data.status.name
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      data.article.name
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      data.batchNumber
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      data.quantity
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      data.name
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      data.created.toDateString()
                    )
                  );
                })
              )
            )
          )
        )
      );
    }
  }]);

  return Neworder;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return { 'orders': state.salex };
})(Neworder);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _list_actions = __webpack_require__(8);

var _reactRouter = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowListItem = function (_Component) {
	_inherits(ShowListItem, _Component);

	function ShowListItem() {
		_classCallCheck(this, ShowListItem);

		return _possibleConstructorReturn(this, (ShowListItem.__proto__ || Object.getPrototypeOf(ShowListItem)).apply(this, arguments));
	}

	_createClass(ShowListItem, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.getListItem(this.props.params.name);
		}
	}, {
		key: 'render',
		value: function render() {
			var item = this.props.item;

			if (!item) {
				return _react2.default.createElement(
					'div',
					null,
					'Loading...'
				);
			}

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_reactRouter.Link,
					{ to: "/" },
					_react2.default.createElement(
						'button',
						{ type: 'button', className: 'btn btn-primary', style: { marginTop: 10, marginBottom: 10 } },
						'Go Back'
					)
				),
				_react2.default.createElement(
					'h1',
					null,
					item.name
				),
				_react2.default.createElement(
					'p',
					null,
					item.description
				)
			);
		}
	}]);

	return ShowListItem;
}(_react.Component);

/*
 This is a redux specific function.
 What is does is: It gets the state specified in here from the global redux state.
 For example, here we are retrieving the list of items from the redux store.
 Whenever this list changes, any component that is using this list of item will re-render.
 */


function mapStateToProps(state) {
	return {
		item: state.lists.item
	};
}

/*
 Here we are creating a Higher order component
 https://facebook.github.io/react/docs/higher-order-components.html
 */
exports.default = (0, _reactRedux.connect)(mapStateToProps, { getListItem: _list_actions.getListItem })(ShowListItem);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(20);

var _lists = __webpack_require__(52);

var _lists2 = _interopRequireDefault(_lists);

var _salex = __webpack_require__(53);

var _salex2 = _interopRequireDefault(_salex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
    lists: _lists2.default,
    salex: _salex2.default
});

exports.default = rootReducer;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case _list_actions.ITEM_CLICKED:
            return _extends({}, state, { item: action.payload });
        case _list_actions.ADD_ITEM:
            return _extends({}, state, { all: [].concat(_toConsumableArray(state.all), [action.payload]) });
        case _list_actions.ITEM_VIEW:
            switch (action.payload) {
                case 'Actions':
                    return _extends({}, state, { item: ListItems[0] });
                case 'Containers':
                    return _extends({}, state, { item: ListItems[1] });
                case 'Reducers':
                    return _extends({}, state, { item: ListItems[2] });
            }
        /*  case 'INITIAL_LOADED':
              return {...state, salex: action.payload };*/
    }
    return state;
};

var _list_actions = __webpack_require__(8);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ListItems = [{ name: 'Actions', description: 'Description for actions' }, { name: 'Containers', description: 'Description for containers' }, { name: 'Reducers', description: 'Description for reducer' }];

var INITIAL_STATE = { all: ListItems, item: null, salex: { order: 1, line: 1, article: 1 } };

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case 'INITIAL_LOADED':
            return _extends({}, state, { initial: action.payload });
    }
    return state;
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _show_list_item = __webpack_require__(50);

var _show_list_item2 = _interopRequireDefault(_show_list_item);

var _header = __webpack_require__(37);

var _header2 = _interopRequireDefault(_header);

var _Main = __webpack_require__(34);

var _Main2 = _interopRequireDefault(_Main);

var _Label = __webpack_require__(32);

var _Label2 = _interopRequireDefault(_Label);

var _Automenu = __webpack_require__(31);

var _Automenu2 = _interopRequireDefault(_Automenu);

var _Orders = __webpack_require__(35);

var _Orders2 = _interopRequireDefault(_Orders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(
        _reactRouter.Route,
        { path: '/', component: _Main2.default },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: _Main2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/plans', component: _header2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/store', component: _header2.default })
    ),
    _react2.default.createElement(_reactRouter.Route, { path: '/salex', component: _Label2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/automenu', component: _Automenu2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/orders', component: _Orders2.default })
);

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(22);
module.exports = __webpack_require__(21);


/***/ })
/******/ ]);