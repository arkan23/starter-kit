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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(14);

var _server2 = _interopRequireDefault(_server);

var _reactRouter = __webpack_require__(2);

var _routes = __webpack_require__(13);

var _routes2 = _interopRequireDefault(_routes);

var _index = __webpack_require__(11);

var _index2 = _interopRequireDefault(_index);

var _redux = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _list_actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
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
            var store = (0, _redux.createStore)(_index2.default);

            var html = _server2.default.renderToString(_react2.default.createElement(
                _reactRedux.Provider,
                { store: store },
                _react2.default.createElement(_reactRouter.RouterContext, renderProps)
            ));

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
            	But if you inject the latest items/articles before it reaches the user, the Search Engine will see the
            item/article immediately.
             */
            store.dispatch({
                type: _list_actions.ADD_ITEM,
                payload: {
                    name: 'Components',
                    description: 'Description for components'
                }
            });

            var finalState = store.getState();

            res.status(200).send(renderFullPage(html, finalState));
        } else {
            res.status(404).send('Not found');
        }
    });
});

/*
In this function, you can render you html part of the webpage. You can add some meta tags or Opern Graph tags
using JS variables.
 */
function renderFullPage(html, initialState) {
    return '\n  <!DOCTYPE html>\n  <html lang="en">\n    <head>\n      <style>#loading .svg-icon-loader {position: absolute;top: 50%;left: 50%;margin: -50px 0 0 -50px;}</style>\n      <meta charset="UTF-8"><!--[if IE]><meta http-equiv=\'X-UA-Compatible\' content=\'IE=edge,chrome=1\'><![endif]--><title>Delight - Bootstrap Material Design Admin Template</title>\n      <meta name="description" content="">\n      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../bin/assets/images/icons/apple-touch-icon-144-precomposed.png">\n      <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../bin/assets/images/icons/apple-touch-icon-114-precomposed.png">\n      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../bin/assets/images/icons/apple-touch-icon-72-precomposed.png">\n      <link rel="apple-touch-icon-precomposed" href="../bin/assets/images/icons/apple-touch-icon-57-precomposed.png">\n      <link rel="shortcut icon" href="../bin/assets/images/icons/favicon.png">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/animate.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/boilerplate.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/border-radius.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/grid.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/page-transitions.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/spacing.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/typography.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/utils.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/colors.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/material/ripple.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/badges.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/buttons.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/content-box.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/dashboard-box.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/forms.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/images.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/info-box.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/invoice.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/loading-indicators.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/menus.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/panel-box.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/response-messages.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/responsive-tables.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/ribbon.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/social-box.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/tables.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/tile-box.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/timeline.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/icons/fontawesome/fontawesome.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/icons/linecons/linecons.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/icons/spinnericon/spinnericon.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/accordion-ui/accordion.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/calendar/calendar.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/carousel/carousel.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/charts/justgage/justgage.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/charts/morris/morris.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/charts/piegage/piegage.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/charts/xcharts/xcharts.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/chosen/chosen.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/colorpicker/colorpicker.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/datatable/datatable.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/datepicker/datepicker.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/datepicker-ui/datepicker.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/daterangepicker/daterangepicker.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/dialog/dialog.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/dropdown/dropdown.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/dropzone/dropzone.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/file-input/fileinput.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/input-switch/inputswitch.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/input-switch/inputswitch-alt.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/ionrangeslider/ionrangeslider.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/jcrop/jcrop.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/jgrowl-notifications/jgrowl.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/loading-bar/loadingbar.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/maps/vectormaps.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/markdown/markdown.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/modal/modal.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/multi-select/multiselect.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/multi-upload/fileupload.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/nestable/nestable.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/noty-notifications/noty.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/popover/popover.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/pretty-photo/prettyphoto.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/progressbar/progressbar.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/range-slider/rangeslider.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/slidebars/slidebars.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/slider-ui/slider.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/summernote-wysiwyg/summernote-wysiwyg.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/tabs-ui/tabs.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/timepicker/timepicker.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/tocify/tocify.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/tooltip/tooltip.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/touchspin/touchspin.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/uniform/uniform.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/wizard/wizard.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/xeditable/xeditable.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/chat.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/files-box.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/login-box.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/notification-box.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/progress-box.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/todo.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/user-profile.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/mobile-navigation.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/application/mailbox.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/themes/admin/layout.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/themes/admin/color-schemes/default.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/themes/components/default.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/themes/components/border-radius.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/responsive-elements.css">\n      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/admin-responsive.css">\n      <script type="text/javascript" src="../bin/assets/js-core/jquery-core.js"></script>\n      <script type="text/javascript" src="../bin/assets/js-core/jquery-ui-core.js"></script>\n      <script type="text/javascript" src="../bin/assets/js-core/jquery-ui-widget.js"></script>\n      <script type="text/javascript" src="../bin/assets/js-core/jquery-ui-mouse.js"></script>\n      <script type="text/javascript" src="../bin/assets/js-core/jquery-ui-position.js"></script>\n      <script type="text/javascript" src="../bin/assets/js-core/transition.js"></script>\n      <script type="text/javascript" src="../bin/assets/js-core/modernizr.js"></script>\n      <script type="text/javascript" src="../bin/assets/js-core/jquery-cookie.js"></script>\n      <script type="text/javascript">$(window).load(function(){\n            setTimeout(function() {\n                $(\'#loading\').fadeOut( 400, "linear" );\n            }, 300);\n        });</script>\n      </head>\n\n      <body>\n        <div id="sb-site">\n          <div>' + html + '</div>\n        </div>\n          <script>\n            window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + '\n          </script>\n\n\n    \t<!-- jQuery first, then Bootstrap JS. -->\n\n\n      <script type="text/javascript" src="../bin/assets/widgets/skycons/skycons.js"></script>\n      <script type="text/javascript" src="../bin/assets/widgets/datatable/datatable.js"></script>\n      <script type="text/javascript" src="../bin/assets/widgets/datatable/datatable-bootstrap.js"></script>\n      <script type="text/javascript" src="../bin/assets/widgets/datatable/datatable-tabletools.js"></script>\n      <script type="text/javascript">/* Datatables basic */\n\n        $(document).ready(function() {\n            $(\'#datatable-example\').dataTable();\n        });\n\n        /* Datatables hide columns */\n\n        $(document).ready(function() {\n            var table = $(\'#datatable-hide-columns\').DataTable( {\n                "scrollY": "300px",\n                "paging": false\n            } );\n\n            $(\'#datatable-hide-columns_filter\').hide();\n\n            $(\'a.toggle-vis\').on( \'click\', function (e) {\n                e.preventDefault();\n\n                // Get the column API object\n                var column = table.column( $(this).attr(\'data-column\') );\n\n                // Toggle the visibility\n                column.visible( ! column.visible() );\n            } );\n        } );\n\n        /* Datatable row highlight */\n\n        $(document).ready(function() {\n            var table = $(\'#datatable-row-highlight\').DataTable();\n\n            $(\'#datatable-row-highlight tbody\').on( \'click\', \'tr\', function () {\n                $(this).toggleClass(\'tr-selected\');\n            } );\n        });\n\n\n\n        $(document).ready(function() {\n            $(\'.dataTables_filter input\').attr("placeholder", "Search...");\n        });</script>\n        <script type="text/javascript" src="../bin/assets/widgets/charts/chart-js/chart-core.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/charts/chart-js/chart-doughnut.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/charts/chart-js/chart-demo-1.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/charts/flot/flot.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/charts/flot/flot-resize.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/charts/flot/flot-stack.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/charts/flot/flot-pie.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/charts/flot/flot-tooltip.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/charts/flot/flot-demo-1.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/charts/sparklines/sparklines.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/charts/sparklines/sparklines-demo.js"></script>\n        <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/owlcarousel/owlcarousel.css">\n        <script type="text/javascript" src="../bin/assets/widgets/owlcarousel/owlcarousel.js"></script>\n        <script type="text/javascript" src="../bin/assets/widgets/owlcarousel/owlcarousel-demo.js"></script>\n\n\n\n\n  <script type="text/javascript" src="../bin/assets/widgets/dropdown/dropdown.js"></script>\n  <script type="text/javascript" src="../bin/assets/widgets/tooltip/tooltip.js"></script>\n  <script type="text/javascript" src="../bin/assets/widgets/popover/popover.js"></script>\n  <script type="text/javascript" src="../bin/assets/widgets/progressbar/progressbar.js"></script>\n  <script type="text/javascript" src="../bin/assets/widgets/button/button.js"></script>\n  <script type="text/javascript" src="../bin/assets/widgets/collapse/collapse.js"></script>\n  <script type="text/javascript" src="../bin/assets/widgets/superclick/superclick.js"></script>\n  <script type="text/javascript" src="../bin/assets/widgets/input-switch/inputswitch-alt.js"></script>\n  <script type="text/javascript" src="../bin/assets/widgets/slimscroll/slimscroll.js"></script>\n  <script type="text/javascript" src="../bin/assets/widgets/slidebars/slidebars.js"></script>\n  <script type="text/javascript" src="../bin/assets/widgets/slidebars/slidebars-demo.js"></script>\n  <script type="text/javascript" src="../bin/assets/widgets/charts/piegage/piegage.js"></script>\n  <script type="text/javascript" src="../bin/assets/widgets/charts/piegage/piegage-demo.js"></script>\n  <script type="text/javascript" src="../bin/assets/widgets/screenfull/screenfull.js"></script>\n  <script type="text/javascript" src="../bin/assets/widgets/content-box/contentbox.js"></script>\n  <script type="text/javascript" src="../bin/assets/widgets/material/material.js"></script>\n  <script type="text/javascript" src="../bin/assets/widgets/material/ripples.js"></script>\n  <script type="text/javascript" src="../bin/assets/widgets/overlay/overlay.js"></script>\n  <script type="text/javascript" src="../bin/assets/js-init/widgets-init.js"></script>\n  <script type="text/javascript" src="../bin/assets/themes/admin/layout.js"></script>\n\t<script src="../bin/app.bundle.js"></script>\n</div>\n</body>\n</html>\n    ';
}

exports.default = router;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/bin', _express2.default.static('./bin'));
app.use('/stylesheets', _express2.default.static('./public/stylesheets'));

app.use('/', _index2.default);
app.use('/view/*', _index2.default);
app.use('/plans', _index2.default);
app.use('/store', _index2.default);

app.listen(3002, function () {
	console.log('Hello World listening on port 3000!');
});

/// comment

/// comment___2


///whith new stage-1

/***/ }),
/* 8 */
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

var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
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
        ),
        _react2.default.createElement(
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
        ),
        _react2.default.createElement(
          "div",
          { id: "loading" },
          _react2.default.createElement(
            "div",
            { className: "svg-icon-loader" },
            _react2.default.createElement("img", { src: "../bin/assets/images/svg-loaders/bars.svg", width: "40", alt: "" })
          )
        ),
        _react2.default.createElement(
          "div",
          { id: "page-wrapper" },
          _react2.default.createElement(
            "div",
            { id: "mobile-navigation" },
            _react2.default.createElement(
              "button",
              { id: "nav-toggle", className: "collapsed", "data-toggle": "collapse", "data-target": "#page-sidebar" },
              _react2.default.createElement("span", null)
            )
          ),
          _react2.default.createElement(
            "div",
            { id: "page-sidebar" },
            _react2.default.createElement(
              "div",
              { id: "header-logo", className: "logo-bg" },
              _react2.default.createElement(
                "a",
                { href: "index.html", className: "logo-content-big", title: "DelightUI" },
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
                { href: "index.html", className: "logo-content-small", title: "DelightUI" },
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
            ),
            _react2.default.createElement(
              "div",
              { className: "scroll-sidebar" },
              _react2.default.createElement(
                "ul",
                { id: "sidebar-menu" },
                _react2.default.createElement(
                  "li",
                  { className: "header" },
                  _react2.default.createElement(
                    "span",
                    null,
                    "Overview"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "index.html", title: "Admin Dashboard" },
                    _react2.default.createElement("i", { className: "glyph-icon icon-linecons-tv" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      null,
                      "Admin dashboard"
                    )
                  )
                ),
                _react2.default.createElement(
                  "li",
                  { className: "header" },
                  _react2.default.createElement(
                    "span",
                    null,
                    "Components"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "javascript:void(0);", title: "Elements" },
                    _react2.default.createElement("i", { className: "glyph-icon icon-linecons-diamond" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      null,
                      "Elements"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "sidebar-submenu" },
                    _react2.default.createElement(
                      "ul",
                      null,
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "buttons.html", title: "Buttons" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Buttons"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "labels-badges.html", title: "Labels & Badges" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Labels & Badges"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "content-boxes.html", title: "Content boxes" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Content boxes"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "icons.html", title: "Icons" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Icons"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "nav-menus.html", title: "Navigation menus" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Navigation menus"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "response-messages.html", title: "Response messages" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Response messages"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "images.html", title: "Images" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Images"
                          )
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "javascript:void(0);", title: "Dashboard boxes" },
                    _react2.default.createElement("i", { className: "glyph-icon icon-linecons-lightbulb" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      null,
                      "Dashboard boxes"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "sidebar-submenu" },
                    _react2.default.createElement(
                      "ul",
                      null,
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "chart-boxes.html", title: "Chart boxes" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Chart boxes"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "tile-boxes.html", title: "Tile boxes" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Tile boxes"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "social-boxes.html", title: "Social boxes" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Social boxes"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "panel-boxes.html", title: "Panel boxes" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Panel boxes"
                          )
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "javascript:void(0);", title: "Widgets" },
                    _react2.default.createElement("i", { className: "glyph-icon icon-linecons-wallet" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      null,
                      "Widgets"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "sidebar-submenu" },
                    _react2.default.createElement(
                      "ul",
                      null,
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "tabs.html", title: "Responsive tabs" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Responsive tabs"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "collapsable.html", title: "Collapsables" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Collapsable accordions"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "bs-carousel.html", title: "Bootstrap Carousel" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Bootstrap carousel"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "calendar.html", title: "Calendar" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Calendar"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "scrollbars.html", title: "Custom scrollbars" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Custom scrollbars"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "modals.html", title: "Modals" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Modals"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "notifications.html", title: "Notifications" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Notifications"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "lazyload.html", title: "Lazyload" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Lazyload"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "loading-feedback.html", title: "Loading feedback" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Loading feedback"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "popovers-tooltips.html", title: "Popovers & Tooltips" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Popovers & Tooltips"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "progress-bars.html", title: "Progress bars" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Progress bars"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "sortable-elements.html", title: "Sortable elements" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Sortable elements"
                          )
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "javascript:void(0);", title: "Forms UI" },
                    _react2.default.createElement("i", { className: "glyph-icon icon-linecons-eye" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      null,
                      "Forms UI"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "sidebar-submenu" },
                    _react2.default.createElement(
                      "ul",
                      null,
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "forms-elements.html", title: "Form elements" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Form elements"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "forms-validation.html", title: "Form validation" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Form validation"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "pickers.html", title: "Pickers" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Pickers"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "sliders.html", title: "Sliders" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Sliders"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "forms-wizard.html", title: "Form wizards" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Form wizards"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "forms-masks.html", title: "Form input masks" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Form input masks"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "image-crop.html", title: "Image crop" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Image crop"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "dropzone-uploader.html", title: "Dropzone uploader" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Dropzone uploader"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "multi-uploader.html", title: "Multi uploader" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Multi uploader"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "input-knobs.html", title: "Input knobs" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Input knobs"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "ckeditor.html", title: "Ckeditor" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Ckeditor"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "summernote.html", title: "Summernote" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Summernote"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "markdown.html", title: "Markdown editor" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Markdown editor"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "inline-editor.html", title: "Inline editor" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Inline editor"
                          )
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "javascript:void(0);", title: "Advanced tables" },
                    _react2.default.createElement("i", { className: "glyph-icon icon-linecons-megaphone" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      null,
                      "Advanced tables"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "sidebar-submenu" },
                    _react2.default.createElement(
                      "ul",
                      null,
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "tables.html", title: "Basic tables" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Basic tables"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "responsive-tables.html", title: "Responsive tables" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Responsive tables"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "data-tables.html", title: "Data tables" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Data tables"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "advanced-datatables.html", title: "Advanced data tables" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Advanced data tables"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "fixed-datatables.html", title: "Fixed data tables" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Fixed data tables"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "responsive-datatables.html", title: "Responsive data tables" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Responsive data tables"
                          )
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "javascript:void(0);", title: "Charts" },
                    _react2.default.createElement("i", { className: "glyph-icon icon-linecons-paper-plane" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      null,
                      "Charts"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "sidebar-submenu" },
                    _react2.default.createElement(
                      "ul",
                      null,
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "flot-charts.html", title: "Flot charts" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Flot charts"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "sparklines.html", title: "Sparklines" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Sparklines"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "pie-gages.html", title: "PieGages" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "PieGages"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "just-gage.html", title: "justGage" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "justGage"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "morris-charts.html", title: "Morris charts" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Morris charts"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "xcharts.html", title: "xCharts" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "xCharts"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "chart-js.html", title: "Chart.js" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Chart.js"
                          )
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "javascript:void(0);", title: "Maps" },
                    _react2.default.createElement("i", { className: "glyph-icon icon-linecons-sound" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      null,
                      "Maps"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "sidebar-submenu" },
                    _react2.default.createElement(
                      "ul",
                      null,
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "gmaps.html", title: "gMaps" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "gMaps"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "vector-maps.html", title: "Vector maps" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Vector maps"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "mapael.html", title: "Mapael" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Mapael"
                          )
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "li",
                  { className: "header" },
                  _react2.default.createElement(
                    "span",
                    null,
                    "Extra"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "javascript:void(0);", title: "Pages" },
                    _react2.default.createElement("i", { className: "glyph-icon icon-linecons-fire" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      null,
                      "Pages"
                    ),
                    " ",
                    _react2.default.createElement(
                      "span",
                      { className: "bs-label badge-yellow" },
                      "NEW"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "sidebar-submenu" },
                    _react2.default.createElement(
                      "ul",
                      null,
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "index-alt.html", title: "Alternate dashboard" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Alternate dashboard"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "view-profile.html", title: "View profile" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "View profile"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "faq-section.html", title: "FAQ section" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "FAQ section"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "auto-menu.html", title: "Auto menu" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Auto menu"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "invoice.html", title: "Invoice" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Invoice"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "admin-blog.html", title: "Blog posts list" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Blog posts list"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "admin-pricing.html", title: "Pricing tables" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Pricing tables"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "portfolio-gallery.html", title: "Portfolio gallery" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Portfolio gallery"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "portfolio-masonry.html", title: "Portfolio masonry" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Portfolio masonry"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "slidebars.html", title: "Slidebars" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Slidebars"
                          )
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "javascript:void(0);", title: "Other Pages" },
                    _react2.default.createElement("i", { className: "glyph-icon icon-linecons-cup" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      null,
                      "Other Pages"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "sidebar-submenu" },
                    _react2.default.createElement(
                      "ul",
                      null,
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "login-1.html", target: "_blank", title: "Login page 1" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Login page 1"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "login-2.html", target: "_blank", title: "Login page 2" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Login page 2"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "login-3.html", target: "_blank", title: "Login page 3" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Login page 3"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "login-4.html", target: "_blank", title: "Login page 4" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Login page 4"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "login-5.html", target: "_blank", title: "Login page 5" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Login page 5"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "lockscreen-1.html", target: "_blank", title: "Lockscreen page 1" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Lockscreen page 1"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "lockscreen-2.html", target: "_blank", title: "Lockscreen page 2" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Lockscreen page 2"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "lockscreen-3.html", target: "_blank", title: "Lockscreen page 3" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Lockscreen page 3"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "server-1.html", target: "_blank", title: "Server page 1" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Error 404 page"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "server-2.html", target: "_blank", title: "Server page 2" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Error 404 alternate"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "server-3.html", target: "_blank", title: "Server page 3" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Server 500 error"
                          )
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "javascript:void(0);", title: "Mailbox" },
                    _react2.default.createElement("i", { className: "glyph-icon icon-linecons-mail" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      null,
                      "Mailbox"
                    ),
                    " ",
                    _react2.default.createElement(
                      "span",
                      { className: "bs-badge badge-danger" },
                      "3"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "sidebar-submenu" },
                    _react2.default.createElement(
                      "ul",
                      null,
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "mailbox-inbox.html", title: "Inbox" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Inbox"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "mailbox-compose.html", title: "Compose message" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Compose message"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "mailbox-single.html", title: "Single message" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Single message"
                          )
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "javascript:void(0);", title: "Snippets" },
                    _react2.default.createElement("i", { className: "glyph-icon icon-linecons-cd" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      null,
                      "Snippets"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "sidebar-submenu" },
                    _react2.default.createElement(
                      "ul",
                      null,
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "timeline.html", title: "Timeline" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Timeline"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "chat.html", title: "Chat" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Chat"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "checklist.html", title: "Checklist" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Checklist"
                          )
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "javascript:void(0);", title: "Helpers" },
                    _react2.default.createElement("i", { className: "glyph-icon icon-linecons-doc" }),
                    " ",
                    _react2.default.createElement(
                      "span",
                      null,
                      "Helpers"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "sidebar-submenu" },
                    _react2.default.createElement(
                      "ul",
                      null,
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "helper-classes.html", title: "Helper classes" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Helper classes"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "page-transitions.html", title: "Page transitions" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Page transitions"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "animations.html", title: "Animations" },
                          _react2.default.createElement(
                            "span",
                            null,
                            "Animations"
                          )
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
            { id: "page-content-wrapper" },
            _react2.default.createElement(
              "div",
              { id: "page-content" },
              _react2.default.createElement(
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
                      " ",
                      _react2.default.createElement(
                        "span",
                        null,
                        "Michael Lee"
                      ),
                      " ",
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
                            " ",
                            _react2.default.createElement(
                              "a",
                              { href: "#", title: "Edit profile" },
                              "Edit profile"
                            ),
                            " ",
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
                        " ",
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
                        "Notifications",
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
              ),
              _react2.default.createElement(
                "div",
                { id: "page-title" },
                _react2.default.createElement(
                  "h2",
                  null,
                  "Dashboard"
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "The most complete user interface framework that can be used to create stunning admin dashboards and presentation websites."
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "row" },
                _react2.default.createElement(
                  "div",
                  { className: "col-md-8" },
                  _react2.default.createElement(
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
                  ),
                  _react2.default.createElement(
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
                  ),
                  _react2.default.createElement(
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
                  ),
                  _react2.default.createElement(
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
                  ),
                  _react2.default.createElement(
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
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col-md-4" },
                  _react2.default.createElement(
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
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "content-box" },
                    _react2.default.createElement(
                      "h3",
                      { className: "content-box-header bg-default" },
                      _react2.default.createElement("i", { className: "glyph-icon icon-cog" }),
                      " Live server status ",
                      _react2.default.createElement(
                        "span",
                        { className: "header-buttons-separator" },
                        _react2.default.createElement(
                          "a",
                          { href: "#", className: "icon-separator remove-button", "data-animation": "flipOutX" },
                          _react2.default.createElement("i", { className: "glyph-icon icon-times" })
                        )
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "content-box-wrapper pad0A" },
                      _react2.default.createElement(
                        "div",
                        { className: "mrg20A" },
                        _react2.default.createElement(
                          "div",
                          { className: "row" },
                          _react2.default.createElement(
                            "div",
                            { className: "col-md-7 center-margin pad0A" },
                            _react2.default.createElement("canvas", { id: "chart-area", width: "150", height: "150" })
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "table",
                        { className: "table remove-background" },
                        _react2.default.createElement(
                          "tbody",
                          null,
                          _react2.default.createElement(
                            "tr",
                            null,
                            _react2.default.createElement(
                              "td",
                              { className: "text-left size-sm" },
                              _react2.default.createElement("div", { className: "badge mrg10L badge-small mrg5R bg-azure" }),
                              "New user registrations"
                            ),
                            _react2.default.createElement(
                              "td",
                              { className: "text-right" },
                              _react2.default.createElement(
                                "a",
                                { href: "#", className: "btn btn-sm hover-yellow tooltip-button", "data-placement": "top", title: "Flag" },
                                _react2.default.createElement("i", { className: "glyph-icon icon-flag" })
                              ),
                              " ",
                              _react2.default.createElement(
                                "a",
                                { href: "#", className: "btn btn-sm hover-blue-alt tooltip-button", "data-placement": "top", title: "Edit" },
                                _react2.default.createElement("i", { className: "glyph-icon icon-edit" })
                              ),
                              " ",
                              _react2.default.createElement(
                                "a",
                                { href: "#", className: "btn btn-sm hover-red tooltip-button", "data-placement": "top", title: "Remove" },
                                _react2.default.createElement("i", { className: "glyph-icon icon-remove" })
                              )
                            )
                          ),
                          _react2.default.createElement(
                            "tr",
                            null,
                            _react2.default.createElement(
                              "td",
                              { className: "text-left size-sm" },
                              _react2.default.createElement("div", { className: "badge mrg10L badge-small mrg5R bg-orange" }),
                              "Returning visitors"
                            ),
                            _react2.default.createElement(
                              "td",
                              { className: "text-right" },
                              _react2.default.createElement(
                                "a",
                                { href: "#", className: "btn btn-sm hover-yellow tooltip-button", "data-placement": "top", title: "Flag" },
                                _react2.default.createElement("i", { className: "glyph-icon icon-flag" })
                              ),
                              " ",
                              _react2.default.createElement(
                                "a",
                                { href: "#", className: "btn btn-sm hover-blue-alt tooltip-button", "data-placement": "top", title: "Edit" },
                                _react2.default.createElement("i", { className: "glyph-icon icon-edit" })
                              ),
                              " ",
                              _react2.default.createElement(
                                "a",
                                { href: "#", className: "btn btn-sm hover-red tooltip-button", "data-placement": "top", title: "Remove" },
                                _react2.default.createElement("i", { className: "glyph-icon icon-remove" })
                              )
                            )
                          ),
                          _react2.default.createElement(
                            "tr",
                            null,
                            _react2.default.createElement(
                              "td",
                              { className: "text-left size-sm" },
                              _react2.default.createElement("div", { className: "badge mrg10L badge-small mrg5R bg-gray" }),
                              "Page views"
                            ),
                            _react2.default.createElement(
                              "td",
                              { className: "text-right" },
                              _react2.default.createElement(
                                "a",
                                { href: "#", className: "btn btn-sm hover-yellow tooltip-button", "data-placement": "top", title: "Flag" },
                                _react2.default.createElement("i", { className: "glyph-icon icon-flag" })
                              ),
                              " ",
                              _react2.default.createElement(
                                "a",
                                { href: "#", className: "btn btn-sm hover-blue-alt tooltip-button", "data-placement": "top", title: "Edit" },
                                _react2.default.createElement("i", { className: "glyph-icon icon-edit" })
                              ),
                              " ",
                              _react2.default.createElement(
                                "a",
                                { href: "#", className: "btn btn-sm hover-red tooltip-button", "data-placement": "top", title: "Remove" },
                                _react2.default.createElement("i", { className: "glyph-icon icon-remove" })
                              )
                            )
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
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
                  ),
                  _react2.default.createElement(
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
                  )
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
/*
<div className="sb-slidebar bg-black sb-left sb-style-overlay">
    <div className="scrollable-content scrollable-slim-sidebar">
        <div className="pad10A">
          <div className="divider-header">Online</div>
          <ul className="chat-box">
            <li><div className="status-badge"><img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial1.jpg" alt=""/><div className="small-badge bg-green"></div></div><b>Grace Padilla</b><p>On the other hand, we denounce...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a></li>
            <li><div className="status-badge"><img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial2.jpg" alt=""/><div className="small-badge bg-green"></div></div><b>Carl Gamble</b><p>Dislike men who are so beguiled...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a></li>
            <li><div className="status-badge"><img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial3.jpg" alt=""/><div className="small-badge bg-green"></div></div><b>Michael Poole</b><p>Of pleasure of the moment, so...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a></li>
            <li><div className="status-badge"><img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial4.jpg" alt=""/><div className="small-badge bg-green"></div></div><b>Bill Green</b><p>That they cannot foresee the...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a></li>
            <li><div className="status-badge"><img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial5.jpg" alt=""/><div className="small-badge bg-green"></div></div><b>Cheryl Soucy</b><p>Pain and trouble that are bound...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a></li>
          </ul>
          <div className="divider-header">Idle</div>
          <ul className="chat-box">
            <li><div className="status-badge"><img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial6.jpg" alt=""/><div className="small-badge bg-orange"></div></div><b>Jose Kramer</b><p>Equal blame belongs to those...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a></li>
            <li><div className="status-badge"><img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial7.jpg" alt=""/><div className="small-badge bg-orange"></div></div><b>Dan Garcia</b><p>Weakness of will, which is same...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a></li>
            <li><div className="status-badge"><img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial8.jpg" alt=""/><div className="small-badge bg-orange"></div></div><b>Edward Bridges</b><p>These cases are perfectly simple...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a></li>
          </ul>
          <div className="divider-header">Offline</div>
          <ul className="chat-box">
            <li><div className="status-badge"><img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial1.jpg" alt=""/><div className="small-badge bg-red"></div></div><b>Randy Herod</b><p>In a free hour, when our power...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a></li>
            <li><div className="status-badge"><img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial2.jpg" alt=""/><div className="small-badge bg-red"></div></div><b>Patricia Bagley</b><p>when nothing prevents our being...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a></li>
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
            <div className="text-center">
              <a href="#" className="btn center-div btn-info mrg5T btn-sm text-transform-upr updateEasyPieChart"><i className="glyph-icon icon-refresh"></i> Update charts</a></div></div></div><div className="clear"></div><a href="#" title="" data-toggle="collapse" data-target="#sidebar-toggle-6" className="popover-title">Latest transfers <span className="caret"></span></a>
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
                  <li><div className="progress-title">New features development <b>87%</b></div><div className="progressbar-smaller progressbar" data-value="87"><div className="progressbar-value bg-azure"><div className="progressbar-overlay"></div></div></div></li>
                  <li><div className="progress-title">Finishing uploading files <b>66%</b></div><div className="progressbar-smaller progressbar" data-value="66"><div className="progressbar-value bg-red"><div className="progressbar-overlay"></div></div></div></li>
                  <li><div className="progress-title">Creating tutorials <b>58%</b></div><div className="progressbar-smaller progressbar" data-value="58"><div className="progressbar-value bg-blue-alt"></div></div></li>
                  <li><div className="progress-title">Frontend bonus theme <b>74%</b></div><div className="progressbar-smaller progressbar" data-value="74"><div className="progressbar-value bg-purple"></div></div></li>
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
          <div id="page-sidebar">
            <div id="header-logo" className="logo-bg">
              <a href="index.html" className="logo-content-big" title="DelightUI">Delight <i>UI</i> <span>Material Design Dashboard Template</span></a>
               <a href="index.html" className="logo-content-small" title="DelightUI">Delight <i>UI</i> <span>Material Design Dashboard Template</span></a>
              <a id="close-sidebar" href="#" title="Close sidebar"><i className="glyph-icon icon-outdent"></i></a>
            </div>
            <div className="scroll-sidebar">
              <ul id="sidebar-menu">
                <li className="header"><span>Overview</span></li>
                <li><a href="index.html" title="Admin Dashboard"><i className="glyph-icon icon-linecons-tv"></i> <span>Admin dashboard</span></a></li>
                <li className="header"><span>Components</span></li>
                <li><a href="javascript:void(0);" title="Elements"><i className="glyph-icon icon-linecons-diamond"></i> <span>Elements</span></a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li><a href="buttons.html" title="Buttons"><span>Buttons</span></a></li>
                      <li><a href="labels-badges.html" title="Labels &amp; Badges"><span>Labels &amp; Badges</span></a></li>
                      <li><a href="content-boxes.html" title="Content boxes"><span>Content boxes</span></a></li>
                      <li><a href="icons.html" title="Icons"><span>Icons</span></a></li>
                      <li><a href="nav-menus.html" title="Navigation menus"><span>Navigation menus</span></a></li>
                      <li><a href="response-messages.html" title="Response messages"><span>Response messages</span></a></li>
                      <li><a href="images.html" title="Images"><span>Images</span></a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="javascript:void(0);" title="Dashboard boxes"><i className="glyph-icon icon-linecons-lightbulb"></i> <span>Dashboard boxes</span></a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li><a href="chart-boxes.html" title="Chart boxes"><span>Chart boxes</span></a></li>
                      <li><a href="tile-boxes.html" title="Tile boxes"><span>Tile boxes</span></a></li>
                      <li><a href="social-boxes.html" title="Social boxes"><span>Social boxes</span></a></li>
                      <li><a href="panel-boxes.html" title="Panel boxes"><span>Panel boxes</span></a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="javascript:void(0);" title="Widgets"><i className="glyph-icon icon-linecons-wallet"></i> <span>Widgets</span></a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li><a href="tabs.html" title="Responsive tabs"><span>Responsive tabs</span></a></li>
                      <li><a href="collapsable.html" title="Collapsables"><span>Collapsable accordions</span></a></li>
                      <li><a href="bs-carousel.html" title="Bootstrap Carousel"><span>Bootstrap carousel</span></a></li>
                      <li><a href="calendar.html" title="Calendar"><span>Calendar</span></a></li>
                      <li><a href="scrollbars.html" title="Custom scrollbars"><span>Custom scrollbars</span></a></li>
                      <li><a href="modals.html" title="Modals"><span>Modals</span></a></li>
                      <li><a href="notifications.html" title="Notifications"><span>Notifications</span></a></li>
                      <li><a href="lazyload.html" title="Lazyload"><span>Lazyload</span></a></li>
                      <li><a href="loading-feedback.html" title="Loading feedback"><span>Loading feedback</span></a></li>
                      <li><a href="popovers-tooltips.html" title="Popovers &amp; Tooltips"><span>Popovers & Tooltips</span></a></li>
                      <li><a href="progress-bars.html" title="Progress bars"><span>Progress bars</span></a></li>
                      <li><a href="sortable-elements.html" title="Sortable elements"><span>Sortable elements</span></a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="javascript:void(0);" title="Forms UI"><i className="glyph-icon icon-linecons-eye"></i> <span>Forms UI</span></a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li><a href="forms-elements.html" title="Form elements"><span>Form elements</span></a></li>
                      <li><a href="forms-validation.html" title="Form validation"><span>Form validation</span></a></li>
                      <li><a href="pickers.html" title="Pickers"><span>Pickers</span></a></li>
                      <li><a href="sliders.html" title="Sliders"><span>Sliders</span></a></li>
                      <li><a href="forms-wizard.html" title="Form wizards"><span>Form wizards</span></a></li>
                      <li><a href="forms-masks.html" title="Form input masks"><span>Form input masks</span></a></li>
                      <li><a href="image-crop.html" title="Image crop"><span>Image crop</span></a></li>
                      <li><a href="dropzone-uploader.html" title="Dropzone uploader"><span>Dropzone uploader</span></a></li>
                      <li><a href="multi-uploader.html" title="Multi uploader"><span>Multi uploader</span></a></li>
                      <li><a href="input-knobs.html" title="Input knobs"><span>Input knobs</span></a></li>
                      <li><a href="ckeditor.html" title="Ckeditor"><span>Ckeditor</span></a></li>
                      <li><a href="summernote.html" title="Summernote"><span>Summernote</span></a></li>
                      <li><a href="markdown.html" title="Markdown editor"><span>Markdown editor</span></a></li>
                      <li><a href="inline-editor.html" title="Inline editor"><span>Inline editor</span></a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="javascript:void(0);" title="Advanced tables"><i className="glyph-icon icon-linecons-megaphone"></i> <span>Advanced tables</span></a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li><a href="tables.html" title="Basic tables"><span>Basic tables</span></a></li>
                      <li><a href="responsive-tables.html" title="Responsive tables"><span>Responsive tables</span></a></li>
                      <li><a href="data-tables.html" title="Data tables"><span>Data tables</span></a></li>
                      <li><a href="advanced-datatables.html" title="Advanced data tables"><span>Advanced data tables</span></a></li>
                      <li><a href="fixed-datatables.html" title="Fixed data tables"><span>Fixed data tables</span></a></li>
                      <li><a href="responsive-datatables.html" title="Responsive data tables"><span>Responsive data tables</span></a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="javascript:void(0);" title="Charts"><i className="glyph-icon icon-linecons-paper-plane"></i> <span>Charts</span></a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li><a href="flot-charts.html" title="Flot charts"><span>Flot charts</span></a></li>
                      <li><a href="sparklines.html" title="Sparklines"><span>Sparklines</span></a></li>
                      <li><a href="pie-gages.html" title="PieGages"><span>PieGages</span></a></li>
                      <li><a href="just-gage.html" title="justGage"><span>justGage</span></a></li>
                      <li><a href="morris-charts.html" title="Morris charts"><span>Morris charts</span></a></li>
                      <li><a href="xcharts.html" title="xCharts"><span>xCharts</span></a></li>
                      <li><a href="chart-js.html" title="Chart.js"><span>Chart.js</span></a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="javascript:void(0);" title="Maps"><i className="glyph-icon icon-linecons-sound"></i> <span>Maps</span></a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li><a href="gmaps.html" title="gMaps"><span>gMaps</span></a></li>
                      <li><a href="vector-maps.html" title="Vector maps"><span>Vector maps</span></a></li>
                      <li><a href="mapael.html" title="Mapael"><span>Mapael</span></a></li>
                    </ul>
                  </div>
                </li>
                <li className="header"><span>Extra</span></li>
                <li><a href="javascript:void(0);" title="Pages"><i className="glyph-icon icon-linecons-fire"></i> <span>Pages</span> <span className="bs-label badge-yellow">NEW</span></a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li><a href="index-alt.html" title="Alternate dashboard"><span>Alternate dashboard</span></a></li>
                      <li><a href="view-profile.html" title="View profile"><span>View profile</span></a></li>
                      <li><a href="faq-section.html" title="FAQ section"><span>FAQ section</span></a></li>
                      <li><a href="auto-menu.html" title="Auto menu"><span>Auto menu</span></a></li>
                      <li><a href="invoice.html" title="Invoice"><span>Invoice</span></a></li>
                      <li><a href="admin-blog.html" title="Blog posts list"><span>Blog posts list</span></a></li>
                      <li><a href="admin-pricing.html" title="Pricing tables"><span>Pricing tables</span></a></li>
                      <li><a href="portfolio-gallery.html" title="Portfolio gallery"><span>Portfolio gallery</span></a></li>
                      <li><a href="portfolio-masonry.html" title="Portfolio masonry"><span>Portfolio masonry</span></a></li>
                      <li><a href="slidebars.html" title="Slidebars"><span>Slidebars</span></a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="javascript:void(0);" title="Other Pages"><i className="glyph-icon icon-linecons-cup"></i> <span>Other Pages</span></a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li><a href="login-1.html" target="_blank" title="Login page 1"><span>Login page 1</span></a></li>
                      <li><a href="login-2.html" target="_blank" title="Login page 2"><span>Login page 2</span></a></li>
                      <li><a href="login-3.html" target="_blank" title="Login page 3"><span>Login page 3</span></a></li>
                      <li><a href="login-4.html" target="_blank" title="Login page 4"><span>Login page 4</span></a></li>
                      <li><a href="login-5.html" target="_blank" title="Login page 5"><span>Login page 5</span></a></li>
                      <li><a href="lockscreen-1.html" target="_blank" title="Lockscreen page 1"><span>Lockscreen page 1</span></a></li>
                      <li><a href="lockscreen-2.html" target="_blank" title="Lockscreen page 2"><span>Lockscreen page 2</span></a></li>
                      <li><a href="lockscreen-3.html" target="_blank" title="Lockscreen page 3"><span>Lockscreen page 3</span></a></li>
                      <li><a href="server-1.html" target="_blank" title="Server page 1"><span>Error 404 page</span></a></li>
                      <li><a href="server-2.html" target="_blank" title="Server page 2"><span>Error 404 alternate</span></a></li>
                      <li><a href="server-3.html" target="_blank" title="Server page 3"><span>Server 500 error</span></a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="javascript:void(0);" title="Mailbox"><i className="glyph-icon icon-linecons-mail"></i> <span>Mailbox</span> <span className="bs-badge badge-danger">3</span></a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li><a href="mailbox-inbox.html" title="Inbox"><span>Inbox</span></a></li>
                      <li><a href="mailbox-compose.html" title="Compose message"><span>Compose message</span></a></li>
                      <li><a href="mailbox-single.html" title="Single message"><span>Single message</span></a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="javascript:void(0);" title="Snippets"><i className="glyph-icon icon-linecons-cd"></i> <span>Snippets</span></a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li><a href="timeline.html" title="Timeline"><span>Timeline</span></a></li>
                      <li><a href="chat.html" title="Chat"><span>Chat</span></a></li>
                      <li><a href="checklist.html" title="Checklist"><span>Checklist</span></a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="javascript:void(0);" title="Helpers"><i className="glyph-icon icon-linecons-doc"></i> <span>Helpers</span></a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li><a href="helper-classes.html" title="Helper classes"><span>Helper classes</span></a></li>
                      <li><a href="page-transitions.html" title="Page transitions"><span>Page transitions</span></a></li>
                      <li><a href="animations.html" title="Animations"><span>Animations</span></a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div id="page-content-wrapper">
            <div id="page-content">
              <div id="page-header">
                <div id="header-nav-left">
                  <a className="header-btn" id="logout-btn" href="lockscreen-3.html" title="Lockscreen page example"><i className="glyph-icon icon-linecons-lock"></i></a>
                  <div className="user-account-btn dropdown">
                    <a href="#" title="My Account" className="user-profile clearfix" data-toggle="dropdown">
                      <img width="28" src="../bin/assets/image-resources/gravatar.jpg" alt="Profile image"/> <span>Michael Lee</span> <i className="glyph-icon icon-angle-down"></i></a><div className="dropdown-menu float-right"><div className="box-sm"><div className="login-box clearfix">
                        <div className="user-img"><a href="#" title="" className="change-img">Change photo</a>
                          <img src="../bin/assets/image-resources/gravatar.jpg" alt=""/>
                        </div>
                        <div className="user-info"><span>Michael Lee <i>UX/UI developer</i></span> <a href="#" title="Edit profile">Edit profile</a> <a href="#" title="View notifications">View notifications</a></div>
                      </div>
                      <div className="divider"></div>
                      <ul className="reset-ul mrg5B">
                        <li><a href="#">View login page example <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                        <li><a href="#">View lockscreen example <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                        <li><a href="#">View account details <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                      </ul>
                      <div className="button-pane button-pane-alt pad5L pad5R text-center">
                        <a href="#" className="btn btn-flat display-block font-normal btn-danger"><i className="glyph-icon icon-power-off"></i> Logout</a></div></div></div></div></div><div id="header-nav-right"><a href="#" className="hdr-btn popover-button" title="Search" data-placement="bottom" data-id="#popover-search"><i className="glyph-icon icon-search"></i></a>
                          <div className="hide" id="popover-search">
                            <div className="pad5A box-md">
                              <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search terms here ..."/> <span className="input-group-btn"><a className="btn btn-primary" href="#">Search</a></span></div></div></div><div className="dropdown" id="dashnav-btn"><a href="#" data-toggle="dropdown" data-placement="bottom" className="popover-button-header tooltip-button" title="Dashboard Quick Menu"><i className="glyph-icon icon-linecons-cog"></i></a>
                                  <div className="dropdown-menu float-left">
                                    <div className="box-sm">
                                      <div className="pad5T pad5B pad10L pad10R dashboard-buttons clearfix">
                                        <a href="#" className="btn vertical-button hover-blue-alt" title="">
                                          <span className="glyph-icon icon-separator-vertical pad0A medium">
                                            <i className="glyph-icon icon-dashboard opacity-80 font-size-20"></i>
                                          </span> Dashboard
                                        </a>
                                        <a href="#" className="btn vertical-button hover-green" title="">
                                          <span className="glyph-icon icon-separator-vertical pad0A medium">
                                            <i className="glyph-icon icon-tags opacity-80 font-size-20"></i>
                                          </span> Widgets
                                        </a>
                                        <a href="#" className="btn vertical-button hover-orange" title="">
                                          <span className="glyph-icon icon-separator-vertical pad0A medium">
                                            <i className="glyph-icon icon-fire opacity-80 font-size-20"></i>
                                          </span> Tables
                                        </a>
                                        <a href="#" className="btn vertical-button hover-orange" title="">
                                          <span className="glyph-icon icon-separator-vertical pad0A medium">
                                            <i className="glyph-icon icon-bar-chart-o opacity-80 font-size-20"></i>
                                          </span> Charts
                                        </a>
                                        <a href="#" className="btn vertical-button hover-purple" title="">
                                          <span className="glyph-icon icon-separator-vertical pad0A medium">
                                            <i className="glyph-icon icon-laptop opacity-80 font-size-20"></i>
                                          </span> Buttons
                                        </a>
                                        <a href="#" className="btn vertical-button hover-azure" title="">
                                          <span className="glyph-icon icon-separator-vertical pad0A medium">
                                            <i className="glyph-icon icon-code opacity-80 font-size-20"></i>
                                          </span> Panels
                                        </a>
                                      </div>
                                      <div className="divider"></div>
                                      <div className="pad5T pad5B pad10L pad10R dashboard-buttons clearfix">
                                        <a href="#" className="btn vertical-button remove-border btn-info" title="">
                                          <span className="glyph-icon icon-separator-vertical pad0A medium">
                                            <i className="glyph-icon icon-dashboard opacity-80 font-size-20"></i>
                                          </span> Dashboard
                                        </a>
                                        <a href="#" className="btn vertical-button remove-border btn-danger" title="">
                                          <span className="glyph-icon icon-separator-vertical pad0A medium">
                                            <i className="glyph-icon icon-tags opacity-80 font-size-20"></i>
                                          </span> Widgets
                                        </a>
                                        <a href="#" className="btn vertical-button remove-border btn-purple" title="">
                                          <span className="glyph-icon icon-separator-vertical pad0A medium">
                                            <i className="glyph-icon icon-fire opacity-80 font-size-20"></i>
                                          </span> Tables
                                        </a>
                                        <a href="#" className="btn vertical-button remove-border btn-azure" title="">
                                          <span className="glyph-icon icon-separator-vertical pad0A medium">
                                            <i className="glyph-icon icon-bar-chart-o opacity-80 font-size-20"></i>
                                          </span> Charts
                                        </a>
                                        <a href="#" className="btn vertical-button remove-border btn-yellow" title="">
                                          <span className="glyph-icon icon-separator-vertical pad0A medium">
                                            <i className="glyph-icon icon-laptop opacity-80 font-size-20"></i>
                                          </span> Buttons
                                        </a>
                                        <a href="#" className="btn vertical-button remove-border btn-warning" title="">
                                          <span className="glyph-icon icon-separator-vertical pad0A medium">
                                            <i className="glyph-icon icon-code opacity-80 font-size-20"></i>
                                          </span> Panels
                                        </a>
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
                                    <div className="popover-title display-block clearfix pad10A">Notifications
                                      <a className="text-transform-cap font-primary font-normal btn-link float-right" href="#" title="View more options">More options...</a>
                                    </div>
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
                                    <div className="button-pane button-pane-alt pad5A text-center">
                                      <a href="#" className="btn btn-flat display-block font-normal hover-green" title="View all notifications">View all notifications</a></div></div></div><div className="dropdown" id="cloud-btn"><a href="#" data-placement="bottom" className="tooltip-button sb-toggle-right" title="Statistics Sidebar"><i className="glyph-icon icon-linecons-cloud"></i></a>
                                      </div></div>



                                      <div id="page-title"><h2>Dashboard</h2><p>The most complete user interface framework that can be used to create stunning admin dashboards and presentation websites.</p></div>
<div className="row"><div className="col-md-8">
<div className="row">
<div className="col-md-3">
<a href="#" title="Example tile shortcut" className="tile-box tile-box-shortcut btn-danger">
  <span className="bs-badge badge-absolute">1</span>
    <div className="tile-header">Reach</div>
    <div className="tile-content-wrapper">
      <i className="glyph-icon icon-file-photo-o"></i>
    </div>
  </a>
</div>
<div className="col-md-3">
  <a href="#" title="Example tile shortcut" className="tile-box tile-box-shortcut btn-success">
    <div className="tile-header">Comments</div>
    <div className="tile-content-wrapper">
      <i className="glyph-icon icon-desktop"></i>
    </div>
  </a>
</div>
<div className="col-md-3">
  <a href="#" title="Example tile shortcut" className="tile-box tile-box-shortcut btn-info">
    <span className="bs-badge badge-absolute">2</span>
    <div className="tile-header">Reviews</div>
    <div className="tile-content-wrapper">
      <i className="glyph-icon icon-download"></i>
    </div>
  </a>
</div>
<div className="col-md-3">
  <a href="#" title="Example tile shortcut" className="tile-box tile-box-shortcut btn-warning">
    <div className="tile-header">Visitors</div>
    <div className="tile-content-wrapper">
      <i className="glyph-icon icon-code-fork"></i>
    </div>
  </a>
</div>
</div>
<div className="panel mrg20T">
<div className="panel-body">
  <h3 className="title-hero">Weekly Sales</h3>
  <div className="example-box-wrapper">
    <div id="data-example-1" className="mrg20B" style={{width: '100%', height: '300px'}}></div>
  </div>
</div>
</div>
<div className="panel-layout">
<div className="panel-box col-xs-6">
  <div className="panel-content bg-white">
    <canvas id="icon-cloud" width="80" height="80"></canvas>
  </div><div className="panel-content bg-black">
    <div className="center-vertical">
      <ul className="center-content nav nav-justified">
        <li><h4><i className="glyph-icon font-green opacity-80 icon-chevron-down"></i> 7 º</h4><p className="opacity-80 text-transform-upr font-size-11 mrg5T">Low</p></li>
        <li><h4><i className="glyph-icon font-red opacity-80 icon-chevron-up"></i> 21 º</h4><p className="opacity-80 text-transform-upr font-size-11 mrg5T">High</p></li>
      </ul>
    </div>
  </div>
</div>
<div className="panel-box col-xs-6 bg-blue-alt">
  <div className="panel-content">
    <h3>San Francisco</h3>
    <h4 className="opacity-60">California</h4>
  </div>
</div>
</div>
<div className="panel">
  <div className="panel-body">
    <h3 className="title-hero">Basic</h3>
    <div className="example-box-wrapper">
      <table cellpadding="0" cellspacing="0" border="0" className="table table-striped table-bordered" id="datatable-example">
        <thead>
          <tr><th>Browser</th><th>Platform(s)</th><th>Engine version</th></tr>
        </thead>
        <tbody>
          <tr className="odd gradeX"><td>Internet Explorer 4.0</td><td>Win 95+</td><td className="center">4</td></tr>
          <tr className="even gradeC"><td>Internet Explorer 5.0</td><td>Win 95+</td><td className="center">5</td></tr>
          <tr className="odd gradeA"><td>Internet Explorer 5.5</td><td>Win 95+</td><td className="center">5.5</td></tr>
          <tr className="even gradeA"><td>Internet Explorer 6</td><td>Win 98+</td><td className="center">6</td></tr>
          <tr className="odd gradeA"><td>Internet Explorer 7</td><td>Win XP SP2+</td><td className="center">7</td></tr>
          <tr className="even gradeA"><td>AOL browser (AOL desktop)</td><td>Win XP</td><td className="center">6</td></tr>
          <tr className="gradeA"><td>Firefox 1.0</td><td>Win 98+ / OSX.2+</td><td className="center">1.7</td></tr>
          <tr className="gradeA"><td>Firefox 1.5</td><td>Win 98+ / OSX.2+</td><td className="center">1.8</td></tr>
          <tr className="gradeA"><td>Firefox 2.0</td><td>Win 98+ / OSX.2+</td><td className="center">1.8</td></tr>
          <tr className="gradeA"><td>Firefox 3.0</td><td>Win 2k+ / OSX.3+</td><td className="center">1.9</td></tr>
          <tr className="gradeA"><td>Camino 1.0</td><td>OSX.2+</td><td className="center">1.8</td></tr>
          <tr className="gradeA"><td>Camino 1.5</td><td>OSX.3+</td><td className="center">1.8</td></tr>
          <tr className="gradeU"><td>All others</td><td>-</td><td className="center">-</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
<div className="panel">
  <div className="panel-body">
    <h3 className="title-hero">Alternate carousel</h3>
    <div className="example-box-wrapper">
      <div className="owl-carousel-4 slider-wrapper inverse arrows-outside carousel-wrapper">
        <div>
          <div className="thumbnail-box-wrapper mrg5A">
            <div className="thumbnail-box">
              <a className="thumb-link" href="#" title=""></a>
              <div className="thumb-content">
                <div className="center-vertical">
                  <div className="center-content">
                    <i className="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera"></i>
                  </div>
                </div>
              </div>
              <div className="thumb-overlay bg-black"></div>
              <img src="../bin/assets/image-resources/stock-images/img-17.jpg" alt=""/>
            </div>
              <div className="thumb-pane">
                <h3 className="thumb-heading animated rollIn">
                  <a href="#" title="">Working in the morning</a>
                  <small>12 March 2015</small>
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div className="thumbnail-box-wrapper mrg5A">
              <div className="thumbnail-box">
                <a className="thumb-link" href="#" title=""></a>
                <div className="thumb-content">
                  <div className="center-vertical">
                    <div className="center-content">
                      <i className="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera"></i>
                    </div>
                  </div>
                </div>
                <div className="thumb-overlay bg-black"></div>
                <img src="../bin/assets/image-resources/stock-images/img-18.jpg" alt=""/>
              </div>
              <div className="thumb-pane">
                <h3 className="thumb-heading animated rollIn">
                  <a href="#" title="">Working in the morning</a>
                  <small>12 March 2015</small>
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div className="thumbnail-box-wrapper mrg5A">
              <div className="thumbnail-box">
                <a className="thumb-link" href="#" title=""></a>
                <div className="thumb-content">
                  <div className="center-vertical">
                    <div className="center-content">
                      <i className="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera"></i>
                    </div>
                  </div>
                </div>
                <div className="thumb-overlay bg-black"></div>
                <img src="../bin/assets/image-resources/stock-images/img-19.jpg" alt=""/>
              </div>
              <div className="thumb-pane">
                <h3 className="thumb-heading animated rollIn">
                  <a href="#" title="">Working in the morning</a>
                        <small>12 March 2015</small>
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div className="thumbnail-box-wrapper mrg5A">
              <div className="thumbnail-box">
                <a className="thumb-link" href="#" title=""></a>
                <div className="thumb-content">
                  <div className="center-vertical">
                    <div className="center-content">
                      <i className="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera"></i>
                    </div>
                  </div>
                </div>
                <div className="thumb-overlay bg-black"></div>
                <img src="../bin/assets/image-resources/stock-images/img-20.jpg" alt=""/>
              </div>
              <div className="thumb-pane">
                <h3 className="thumb-heading animated rollIn">
                  <a href="#" title="">Working in the morning</a>
                  <small>12 March 2015</small>
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div className="thumbnail-box-wrapper mrg5A">
              <div className="thumbnail-box">
                <a className="thumb-link" href="#" title=""></a>
                <div className="thumb-content">
                  <div className="center-vertical">
                    <div className="center-content">
                      <i className="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera"></i>
                    </div>
                  </div>
                </div>
                <div className="thumb-overlay bg-black"></div>
                <img src="../bin/assets/image-resources/stock-images/img-23.jpg" alt=""/>
              </div>
              <div className="thumb-pane">
                <h3 className="thumb-heading animated rollIn">
                  <a href="#" title="">Working in the morning</a>
                  <small>12 March 2015</small>
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div className="thumbnail-box-wrapper mrg5A">
              <div className="thumbnail-box">
                <a className="thumb-link" href="#" title=""></a>
                <div className="thumb-content">
                  <div className="center-vertical">
                    <div className="center-content">
                      <i className="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera"></i>
                    </div>
                  </div>
                </div>
                <div className="thumb-overlay bg-black"></div>
                <img src="../bin/assets/image-resources/stock-images/img-24.jpg" alt=""/>
              </div>
              <div className="thumb-pane">
                <h3 className="thumb-heading animated rollIn">
                  <a href="#" title="">Working in the morning</a>
                  <small>12 March 2015</small>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="col-md-4">
  <div className="dashboard-box dashboard-box-chart bg-white content-box">
    <div className="content-wrapper">
      <div className="header">8960 <span>Total Downloads<b>in last</b> 6 years</span></div>
      <div className="bs-label bg-orange">~51%</div>
      <div className="center-div sparkline-big-alt">2210,2310,2010,2310,2123,2350</div>
      <div className="row list-grade">
        <div className="col-md-2">2009</div>
        <div className="col-md-2">2010</div>
        <div className="col-md-2">2011</div>
        <div className="col-md-2">2012</div>
        <div className="col-md-2">2013</div>
        <div className="col-md-2">2014</div>
      </div>
    </div>
    <div className="button-pane">
        <div className="size-md float-left">
          <a href="#" title="">View more details</a>
        </div>
        <a href="#" className="btn btn-primary float-right tooltip-button" data-placement="top" title="View details"><i className="glyph-icon icon-caret-right"></i></a>
      </div>
    </div>
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
    <div className="row">
      <div className="col-md-6">
        <div className="panel-layout">
          <div className="panel-box">
            <div className="panel-content bg-facebook"><i className="glyph-icon font-size-35 icon-facebook"></i></div>
            <div className="panel-content pad15A bg-white">
              <div className="center-vertical">
                <ul className="center-content list-group list-group-separator row mrg0A">
                  <li className="col-md-6"><b>1,456</b><p className="font-gray">Friends</p></li>
                  <li className="col-md-6"><b>593</b><p className="font-gray">Likes</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="panel-layout">
          <div className="panel-box">
            <div className="panel-content bg-twitter"><i className="glyph-icon font-size-35 icon-twitter"></i></div>
            <div className="panel-content pad15A bg-white">
              <div className="center-vertical">
                <ul className="center-content list-group list-group-separator row mrg0A">
                  <li className="col-md-6"><b>356</b><p className="font-gray">Followers</p></li>
                  <li className="col-md-6"><b>981</b><p className="font-gray">Tweets</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="panel">
      <div className="panel-body">
        <h3 className="title-hero">Users activity</h3>
        <div className="example-box-wrapper">
          <div className="timeline-box timeline-box-left">
            <div className="tl-row">
              <div className="tl-item float-right">
                <div className="tl-icon bg-red">
                  <i className="glyph-icon icon-toggle-on"></i>
                </div>
                <div className="popover right">
                  <div className="arrow"></div>
                  <div className="popover-content">
                    <div className="tl-label bs-label label-info">Appointment</div>
                    <p className="tl-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.</p>
                    <div className="tl-time"><i className="glyph-icon icon-clock-o"></i> a few seconds ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-row">
              <div className="tl-item float-right">
                <div className="tl-icon bg-primary">
                  <i className="glyph-icon icon-wifi"></i>
                </div>
                <div className="popover right">
                  <div className="arrow"></div>
                  <div className="popover-content">
                    <div className="tl-label bs-label bg-yellow">Teleconference</div>
                    <p className="tl-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.</p>
                    <div className="tl-time"><i className="glyph-icon icon-clock-o"></i> a few seconds ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-row">
              <div className="tl-item float-right">
                <div className="tl-icon bg-black">
                  <i className="glyph-icon icon-headphones"></i>
                </div>
                <div className="popover right">
                  <div className="arrow"></div>
                  <div className="popover-content">
                    <div className="tl-label bs-label label-danger">Meeting</div>
                    <p className="tl-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.</p>
                    <div className="tl-time"><i className="glyph-icon icon-clock-o"></i> a few seconds ago</div>
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
</div>
</div>

*/

///////////////////////////////////////////////////
/*
<div className="container-fluid" id="display_sructure">
  <div className="row dtr">
  <Sidebar/>
  <Mainbar/>

  </div>
</div>*/

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _list_actions = __webpack_require__(1);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(5);

var _lists = __webpack_require__(12);

var _lists2 = _interopRequireDefault(_lists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
    lists: _lists2.default
});

exports.default = rootReducer;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
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
    }
    return state;
};

var _list_actions = __webpack_require__(1);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ListItems = [{ name: 'Actions', description: 'Description for actions' }, { name: 'Containers', description: 'Description for containers' }, { name: 'Reducers', description: 'Description for reducer' }];

var INITIAL_STATE = { all: ListItems, item: null };

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _show_list_item = __webpack_require__(10);

var _show_list_item2 = _interopRequireDefault(_show_list_item);

var _header = __webpack_require__(9);

var _header2 = _interopRequireDefault(_header);

var _Main = __webpack_require__(8);

var _Main2 = _interopRequireDefault(_Main);

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
    )
);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ })
/******/ ]);