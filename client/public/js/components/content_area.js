webpackJsonp([0],{

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'button',
        { type: 'button', className: this.props.classType },
        this.props.text
      );
    }
  }]);

  return Button;
}(_react.Component);

exports.default = Button;

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionDisplayer = function (_Component) {
  _inherits(OptionDisplayer, _Component);

  function OptionDisplayer() {
    _classCallCheck(this, OptionDisplayer);

    return _possibleConstructorReturn(this, (OptionDisplayer.__proto__ || Object.getPrototypeOf(OptionDisplayer)).apply(this, arguments));
  }

  _createClass(OptionDisplayer, [{
    key: 'render',
    value: function render() {
      var items = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.props.options.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              index = _step$value[0],
              value = _step$value[1];

          items.push(_react2.default.createElement(
            'option',
            { key: index, value: value },
            value
          ));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return _react2.default.createElement(
        'div',
        { id: 'optionDisplayer' },
        _react2.default.createElement(
          'h3',
          null,
          this.props.title
        ),
        _react2.default.createElement(
          'label',
          { htmlFor: 'options' },
          'Choose an option:'
        ),
        _react2.default.createElement(
          'select',
          { id: 'options', className: 'browser-default custom-select' },
          items
        ),
        _react2.default.createElement('br', null)
      );
      {
        /*
        These component is composed of different options for the user to select
        when interacting with the UML diagram
        */
      }
    }
  }]);

  return OptionDisplayer;
}(_react.Component);

exports.default = OptionDisplayer;

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _uml = __webpack_require__(290);

var _uml2 = _interopRequireDefault(_uml);

var _valuesForm = __webpack_require__(292);

var _valuesForm2 = _interopRequireDefault(_valuesForm);

var _umlStyler = __webpack_require__(291);

var _umlStyler2 = _interopRequireDefault(_umlStyler);

var _network = __webpack_require__(285);

var _network2 = _interopRequireDefault(_network);

var _plot = __webpack_require__(287);

var _plot2 = _interopRequireDefault(_plot);

var _plot3 = __webpack_require__(288);

var _plot4 = _interopRequireDefault(_plot3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_Component) {
  _inherits(Container, _Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(
          'div',
          { className: 'row big-row' },
          _react2.default.createElement(
            'div',
            { className: 'col-5' },
            _react2.default.createElement(_uml2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-4' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(_plot2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(_plot4.default, null)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-3' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(_valuesForm2.default, { formTitle: 'UML Generator', elements: ['Abstract', 'Interface', 'Library', 'All'] })
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(_umlStyler2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(_network2.default, null)
            )
          )
        )
      );
      {
        /*
          This component contains the main structure of the content area
          The html structure is specified, using other components.
        */
      }
    }
  }]);

  return Container;
}(_react.Component);

exports.default = Container;

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Heading = function (_Component) {
  _inherits(Heading, _Component);

  function Heading() {
    _classCallCheck(this, Heading);

    return _possibleConstructorReturn(this, (Heading.__proto__ || Object.getPrototypeOf(Heading)).apply(this, arguments));
  }

  _createClass(Heading, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'heading' },
        _react2.default.createElement(
          'h1',
          null,
          this.props.title
        ),
        _react2.default.createElement(
          'p',
          null,
          this.props.description
        )
      );
    }
  }]);

  return Heading;
}(_react.Component);

exports.default = Heading;

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _heading = __webpack_require__(258);

var _heading2 = _interopRequireDefault(_heading);

var _containerFluid = __webpack_require__(257);

var _containerFluid2 = _interopRequireDefault(_containerFluid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentArea = function (_Component) {
  _inherits(ContentArea, _Component);

  function ContentArea() {
    _classCallCheck(this, ContentArea);

    return _possibleConstructorReturn(this, (ContentArea.__proto__ || Object.getPrototypeOf(ContentArea)).apply(this, arguments));
  }

  _createClass(ContentArea, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_heading2.default, { title: 'Smart Contracts Analysis Dashboard', description: 'This dashboard was developed to aid Ethereum developers in visually statically and dynamically analyzing their Smart Contracts' }),
        _react2.default.createElement(_containerFluid2.default, null)
      );
    }
  }]);

  return ContentArea;
}(_react.Component);

var content_area = document.getElementById('content-area');

_reactDom2.default.render(_react2.default.createElement(ContentArea, null), content_area);

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _button = __webpack_require__(117);

var _button2 = _interopRequireDefault(_button);

var _optionDisplay = __webpack_require__(175);

var _optionDisplay2 = _interopRequireDefault(_optionDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var abiDecoder = __webpack_require__(283);

var Network = function (_Component) {
  _inherits(Network, _Component);

  function Network() {
    _classCallCheck(this, Network);

    return _possibleConstructorReturn(this, (Network.__proto__ || Object.getPrototypeOf(Network)).apply(this, arguments));
  }

  _createClass(Network, [{
    key: 'getInput',


    // this function reads the absolute path to the input data in the localhost
    value: function getInput(_htmlId) {
      var userInput = document.getElementById(_htmlId).value;
      return userInput;
    }

    // this function adds the passed ABI to the ABIDecoder for further usage when analyzing called functions in the input data

  }, {
    key: 'addAbi',
    value: function addAbi(_abi) {
      abiDecoder.addABI(_abi);
    }

    // this function parses all the content in the nodes (contracts) of the UML diagram

  }, {
    key: 'getMethodsFromUML',
    value: function getMethodsFromUML(_htmlId) {
      // obj[] has key>contract, value> contract content in string format
      var obj = [];
      var data = d3.select(_htmlId).select("svg").selectAll("g");
      //all contracts
      data._groups.forEach(function (d) {
        d.forEach(function (element) {
          //each of the elements
          obj[element.id] = element.textContent;
        });
      });
      return obj;
    }

    // this function looks for a specific method in the UML Diagram+

  }, {
    key: 'findMethodInUML',
    value: function findMethodInUML(_method, _htmlId) {
      var _obj = this.getMethodsFromUML(_htmlId);
      //result contains the contracts were the method appears
      var result = [];
      Object.keys(_obj).forEach(function (data) {
        // if we find a matching method in the string, search() returns a value > 0
        if (_obj[data].search(_method) >= 0) {
          result.push(data);
        }
      });
      // we return[2] beacuse the first nodes to contain the method, are graph0 and the UML full diagram (parent nodes)
      return result[2];
    }

    // this function computes the logic to find out how many times a function has been called in the input data

  }, {
    key: 'methodNumberOfCalls',
    value: function methodNumberOfCalls(_data) {

      // _mapping contains a mapping of method -> # of calls
      var _mapping = new Map();
      // _mapping2 contains a mapping of method -> average gas consumed
      var _mapping2 = new Map();
      //array containing the methods parsed
      var contractMethods = [];
      // obj is the object format of _mapping
      var obj = {};
      // obj2 is the object format of _mapping2
      var obj2 = {};

      for (var i = 0; i < _data.length; i++) {
        // decodedData. is the name of the function we extract with the abiDecoder from the raw input_hex
        // `(0x${_data[i].input_hex}`).name -> format of the input hex data
        var decodedData = abiDecoder.decodeMethod('0x' + _data[i].input_hex).name;
        if (!contractMethods.includes(decodedData)) {
          contractMethods.push(decodedData);
          _mapping.set(decodedData, 1);
          _mapping2.set(decodedData, parseInt(_data[i].gas_used));
        } else {
          _mapping.set(decodedData, _mapping.get(decodedData) + 1);
          _mapping2.set(decodedData, _mapping2.get(decodedData) + parseInt(_data[i].gas_used));
        }
      }
      // _mappings -> objects
      var cont = 0;
      contractMethods.forEach(function (d) {
        obj[d] = _mapping.get(d);
        obj2[d] = _mapping2.get(d) / _mapping.get(d);
      });

      return [obj, obj2];
    }

    // get ABI from .json file

  }, {
    key: 'getAbi',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_AbiFileName) {
        var result, response, jsonResponse, i;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                result = [];
                _context.prev = 1;
                _context.next = 4;
                return fetch(_AbiFileName);

              case 4:
                response = _context.sent;

                if (!response.ok) {
                  _context.next = 12;
                  break;
                }

                _context.next = 8;
                return response.json();

              case 8:
                jsonResponse = _context.sent;

                console.log('JSON parsed successfully...');
                for (i in jsonResponse) {
                  result.push(jsonResponse[i]);
                }
                return _context.abrupt('return', result);

              case 12:
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](1);

                console.log(_context.t0);

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 14]]);
      }));

      function getAbi(_x) {
        return _ref.apply(this, arguments);
      }

      return getAbi;
    }()

    // View Type -> BarChart

  }, {
    key: 'drawBarChart',
    value: function drawBarChart(_data, _htmlId, _width, _height) {
      // set the dimensions and margins of the graph
      var color = d3.scaleOrdinal().domain(Object.keys(_data)).range(d3.schemeDark2);
      var margin = { top: 5, right: 5, bottom: 5, left: 5 },
          width = _width - margin.left - margin.right,
          height = _height - margin.top - margin.bottom;

      var tooltip = d3.select("body").append("div").style("position", "absolute").style("z-index", "10").style("visibility", "hidden").style("color", "white").style("background-color", "black").style("border-radius", "6px").style("padding", "5px 5px 5px 5px");

      // set the ranges
      var x = d3.scaleBand().range([0, width]).padding(0.1);

      var y = d3.scaleLinear().range([height, 0]);

      // append the svg object to the body of the page
      // append a 'group' element to 'svg'
      // moves the 'group' element to the top left margin
      d3.select(_htmlId).html("");
      var svg = d3.select(_htmlId).append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      var data = _data;
      // Scale the range of the data in the domains
      x.domain(Object.keys(data).map(function (d) {
        return d;
      }));
      y.domain([0, d3.max(Object.values(data))]);

      // append the rectangles for the bar chart
      Object.keys(data).forEach(function (key) {
        svg.append("rect").attr("class", "bar").attr("x", x(key)).attr("width", x.bandwidth()).attr("y", y(data[key])).attr("height", height - y(data[key])).attr("id", key).attr("fill", color(key)).on("mouseover", function (d) {

          tooltip.text('Function: ' + key + '() | Medium amount of gas: ' + data[key]);
          return tooltip.style("visibility", "visible");
        }).on("mousemove", function () {
          return tooltip.style("top", event.pageY - 10 + "px").style("left", event.pageX + 10 + "px");
        }).on("mouseout", function () {
          return tooltip.style("visibility", "hidden");
        });
      });
      // add the x Axis
      svg.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x)).selectAll("text").text("");
      // add the y Axis
      svg.append("g").call(d3.axisLeft(y));
    }
    // View Type -> Pie chart

  }, {
    key: 'drawPieChart',
    value: function drawPieChart(_width, _height, _margin, _htmlId, _data, _radius, _content) {
      //create object from mapping
      // set the dimensions and margins of the graph
      var width = _width;
      var height = _height;
      var margin = _margin;
      // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
      //var radius = Math.min(width, height) / 2 - margin
      var radius = _radius;

      // append the svg object to the div called 'my_dataviz'
      d3.select(_htmlId).html("");
      var svg = d3.select(_htmlId).append("svg").attr("width", width).attr("height", height).append("g").attr("max-width", width).attr("max-height", height)
      /*.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");*/
      .attr("transform", "translate(200,200)");

      // Create dummy data
      // set the color scale
      var tooltip = d3.select("body").append("div").style("position", "absolute").style("z-index", "10").style("visibility", "hidden").style("color", "white").style("background-color", "black").style("border-radius", "6px").style("padding", "5px 5px 5px 5px");

      var color = d3.scaleOrdinal().domain(Object.keys(_data)).range(d3.schemeDark2);
      // Compute the position of each group on the pie:
      var pie = d3.pie().sort(null) // Do not sort group by size
      .value(function (d) {
        return d.value;
      });
      var data_ready = pie(d3.entries(_data));
      // The arc generator
      var arc = d3.arc().innerRadius(radius * 0.5) // This is the size of the donut hole
      .outerRadius(radius * 0.8);
      // Another arc that won't be drawn. Just for labels positioning
      var outerArc = d3.arc().innerRadius(radius * 0.9).outerRadius(radius * 0.9);
      // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
      svg.selectAll('allSlices').data(data_ready).enter().append('path').on("mouseover", function (d) {

        tooltip.text('Function: ' + d.data.key + '() | ' + _content + ': ' + d.data.value);
        return tooltip.style("visibility", "visible");
      }).on("mousemove", function () {
        return tooltip.style("top", event.pageY - 10 + "px").style("left", event.pageX + 10 + "px");
      }).on("mouseout", function () {
        return tooltip.style("visibility", "hidden");
      }).attr("id", function (d) {
        return d.data.key;
      }).attr('d', arc).attr('fill', function (d) {
        return color(d.data.key);
      }).attr("stroke", "white").style("stroke-width", "2px").style("opacity", 0.7);

      // Add the polylines between chart and labels:
      /*svg
        .selectAll('allPolylines')
        .data(data_ready)
        .enter()
        .append('polyline')
          .attr("stroke", "black")
          .style("fill", "none")
          .attr("stroke-width", 1)
          .attr('points', function(d) {
            var posA = arc.centroid(d) // line insertion in the slice
            var posB = outerArc.centroid(d) // line break: we use the other arc generator that has been built only for that
            var posC = outerArc.centroid(d); // Label position = almost the same as posB
            var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
            posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
            return [posA, posB, posC]
          })*/

      // Add the polylines between chart and labels:
      /*svg
        .selectAll('allLabels')
        .data(data_ready)
        .enter()
        .append('text')
          .text( function(d) { return `${d.data.key}(${d.data.value})` } )
          .attr('transform', function(d) {
              var pos = outerArc.centroid(d);
              var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
              pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
              return 'translate(' + pos + ')';
          })
          .style('text-anchor', function(d) {
              var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
              return (midangle < Math.PI ? 'start' : 'end')
          })*/
    }

    // this function establishes a 'clickable' relationship between the UML and the Graphs

  }, {
    key: 'relateToUml',
    value: function relateToUml(_methods, _htmlId) {
      var _this2 = this;

      // _methods contains the parsed methods of the input data

      _methods.forEach(function (element) {
        //p is the html <> created for each function, it has the id with the function name
        var p = d3.selectAll('#' + element);
        // addEvenetListeners to each html <>
        p.on("click", function () {
          var id = _this2.findMethodInUML(element, _htmlId);
          var contract = d3.select(_htmlId).select('#' + id).select("polygon");
          if (id === 'Not found') {};
          if (contract.attr("fill") === "red") {
            contract.attr("fill", "#f2f2f2");
          } else {
            contract.attr("fill", "red");
          }
        });
      });
    }

    // this is the function called when the 'graph' button is pressed
    // it parses de ABI, reads the input data, computes logic on raw data and plots

  }, {
    key: 'getData',
    value: function getData() {
      var _this3 = this;

      this.getAbi('/input_abi/' + this.getInput("sourceAbi")).then(function (data) {
        _this3.addAbi(data);
      }).then(function () {
        d3.csv('/input_data/' + _this3.getInput("sourceData")).then(function (data) {
          return _this3.methodNumberOfCalls(data);
        }).then(function (data) {
          // data [0] is the # of functions calls
          // data [1] is the average gas expense
          _this3.drawPieChart(410, 400, 0, "#plot1", data[0], 200, "Number of calls");
          _this3.drawPieChart(410, 400, 0, "#plot2", data[1], 200, "Average Gas expense");
          //this.drawBarChart(data[1], "#plot2", 400, 400);
          _this3.relateToUml(Object.keys(data[0]), "#uml");
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_optionDisplay2.default, { title: 'Network Analysis', options: ['Function calls and gas expenses'] }),
        _react2.default.createElement(
          'div',
          { className: 'input-group md-form form-sm form-2 pl-0' },
          _react2.default.createElement('input', { id: 'sourceData', className: 'form-control my-0 py-1 red-border', type: 'text', placeholder: 'Add PATH to source data', 'aria-label': 'Search' }),
          _react2.default.createElement('input', { id: 'sourceAbi', className: 'form-control my-0 py-1 red-border', type: 'text', placeholder: 'Add PATH to source ABI', 'aria-label': 'Search' })
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.getData.bind(this), type: 'button', className: 'btn btn-success' },
          'Graph'
        )
      );
    }
  }]);

  return Network;
}(_react.Component);

exports.default = Network;

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = function (_Component) {
  _inherits(Option, _Component);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', { type: this.props.type, name: this.props.name, id: this.props.id, value: this.props.value, className: 'checkmark' }),
        _react2.default.createElement(
          'label',
          { htmlFor: this.props.id },
          this.props.value
        )
      );
    }
  }]);

  return Option;
}(_react.Component);

exports.default = Option;

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Plot1 = function (_Component) {
  _inherits(Plot1, _Component);

  function Plot1() {
    _classCallCheck(this, Plot1);

    return _possibleConstructorReturn(this, (Plot1.__proto__ || Object.getPrototypeOf(Plot1)).apply(this, arguments));
  }

  _createClass(Plot1, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'plot1' },
        _react2.default.createElement(
          'p',
          null,
          ' Pending to Generate Plot . . . '
        )
      );
    }
  }]);

  return Plot1;
}(_react.Component);

exports.default = Plot1;

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Plot2 = function (_Component) {
  _inherits(Plot2, _Component);

  function Plot2() {
    _classCallCheck(this, Plot2);

    return _possibleConstructorReturn(this, (Plot2.__proto__ || Object.getPrototypeOf(Plot2)).apply(this, arguments));
  }

  _createClass(Plot2, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'plot2' },
        _react2.default.createElement(
          'p',
          null,
          ' Pending to Generate Plot . . . '
        )
      );
    }
  }]);

  return Plot2;
}(_react.Component);

exports.default = Plot2;

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Uml = function (_Component) {
  _inherits(Uml, _Component);

  function Uml() {
    _classCallCheck(this, Uml);

    return _possibleConstructorReturn(this, (Uml.__proto__ || Object.getPrototypeOf(Uml)).apply(this, arguments));
  }

  _createClass(Uml, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'uml' },
        _react2.default.createElement(
          'p',
          null,
          ' Pending to Generate Diagram . . . '
        )
      );
    }
  }]);

  return Uml;
}(_react.Component);

exports.default = Uml;

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _button = __webpack_require__(117);

var _button2 = _interopRequireDefault(_button);

var _optionDisplay = __webpack_require__(175);

var _optionDisplay2 = _interopRequireDefault(_optionDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UmlStyler = function (_Component) {
  _inherits(UmlStyler, _Component);

  function UmlStyler() {
    _classCallCheck(this, UmlStyler);

    return _possibleConstructorReturn(this, (UmlStyler.__proto__ || Object.getPrototypeOf(UmlStyler)).apply(this, arguments));
  }

  _createClass(UmlStyler, [{
    key: 'getInput',
    value: function getInput() {
      var userInput = document.getElementById("contractSearch").value;
      return userInput;
    }
  }, {
    key: 'selectContract',
    value: function selectContract() {
      var contract = '#' + this.getInput();
      return contract;
    }
  }, {
    key: 'findContract',
    value: function findContract() {
      d3.select(this.selectContract()).select("polygon").attr("fill", "red");
    }
  }, {
    key: 'clearSearch',
    value: function clearSearch() {
      d3.select(this.selectContract()).select("polygon").attr("fill", "#f2f2f2");
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_optionDisplay2.default, { title: 'Diagram Interactivity', options: ['Select Element'] }),
        _react2.default.createElement(
          'div',
          { className: 'input-group md-form form-sm form-2 pl-0' },
          _react2.default.createElement('input', { id: 'contractSearch', className: 'form-control my-0 py-1 red-border', type: 'text', placeholder: 'Search', 'aria-label': 'Search' })
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.findContract.bind(this), type: 'button', className: 'btn btn-success' },
          'Find!'
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.clearSearch.bind(this), type: 'button', className: 'btn btn-danger' },
          'Clear'
        )
      );
    }
  }]);

  return UmlStyler;
}(_react.Component);

exports.default = UmlStyler;

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _option = __webpack_require__(286);

var _option2 = _interopRequireDefault(_option);

var _button = __webpack_require__(117);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ValuesForm = function (_Component) {
  _inherits(ValuesForm, _Component);

  function ValuesForm() {
    _classCallCheck(this, ValuesForm);

    return _possibleConstructorReturn(this, (ValuesForm.__proto__ || Object.getPrototypeOf(ValuesForm)).apply(this, arguments));
  }

  _createClass(ValuesForm, [{
    key: 'readInput',
    value: function readInput() {
      var userInput = document.getElementById("insertName").value;
      return userInput;
    }
  }, {
    key: 'enableZoom',
    value: function enableZoom(_id) {
      var svgElement = document.getElementById(_id);
      var panZoomTiger = svgPanZoom(svgElement);
    }
  }, {
    key: 'appendData',
    value: function appendData(_data) {
      d3.select("#uml").html("");
      d3.select("#uml").append('div').html(_data);
      d3.select("svg").attr("id", "svgUml");
    }
  }, {
    key: 'checkedElements',
    value: function checkedElements() {
      // The selected are the ones the user wishes to hide
      var selected = [];
      var item = void 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.props.elements.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              index = _step$value[0],
              value = _step$value[1];

          item = document.getElementById(value);
          if (item.checked) {
            selected.push(value);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return selected;
    }
  }, {
    key: 'createQuery',
    value: function createQuery() {
      var query = 'http://localhost:8080/?address=' + this.readInput();
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.checkedElements().entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              index = _step2$value[0],
              value = _step2$value[1];

          query += '&option' + index + '=' + value;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return query;
    }
  }, {
    key: 'getData',
    value: function getData() {
      var _this2 = this;

      this.createQuery();
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('load', function () {
        // console.log(xhr.response);
        _this2.appendData(xhr.response);
        _this2.enableZoom("svgUml");
      });
      xhr.open('GET', this.createQuery());
      xhr.send();
    }
  }, {
    key: 'render',
    value: function render() {

      var items = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.props.elements.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _step3$value = _slicedToArray(_step3.value, 2),
              index = _step3$value[0],
              value = _step3$value[1];

          items.push(_react2.default.createElement(_option2.default, { key: value, type: 'checkbox', id: value, name: value, value: this.props.elements[index] }));
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return _react2.default.createElement(
        'div',
        { id: 'valuesForm' },
        _react2.default.createElement(
          'h3',
          null,
          this.props.formTitle
        ),
        _react2.default.createElement(
          'div',
          { className: 'input-group md-form form-sm form-2 pl-0' },
          _react2.default.createElement('input', { id: 'insertName', className: 'form-control my-0 py-1 red-border', type: 'text', placeholder: 'Insert Address / absolute PATH', 'aria-label': 'Search' })
        ),
        _react2.default.createElement(
          'p',
          null,
          'Which type of contract do you want to hide?'
        ),
        _react2.default.createElement(
          'form',
          null,
          items
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'button',
          { onClick: this.getData.bind(this), type: 'button', className: 'btn btn-primary' },
          'Generate Diagram!'
        )
      );
    }
  }]);

  return ValuesForm;
}(_react.Component);

exports.default = ValuesForm;

/***/ }),

/***/ 641:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[284]);