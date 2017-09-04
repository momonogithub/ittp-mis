webpackHotUpdate(5,{

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__(798);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createProvider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createFieldProps__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_onChangeValue__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_eventConsts__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__structure_plain__ = __webpack_require__(553);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var propsToNotUpdateFor = ['_reduxForm'];

var isObject = function isObject(entity) {
  return entity && (typeof entity === 'undefined' ? 'undefined' : _typeof(entity)) === 'object';
};

var isFunction = function isFunction(entity) {
  return entity && typeof entity === 'function';
};

var eventPreventDefault = function eventPreventDefault(event) {
  if (isObject(event) && isFunction(event.preventDefault)) {
    event.preventDefault();
  }
};

var eventDataTransferGetData = function eventDataTransferGetData(event, key) {
  if (isObject(event) && isObject(event.dataTransfer) && isFunction(event.dataTransfer.getData)) {
    return event.dataTransfer.getData(key);
  }
};

var eventDataTransferSetData = function eventDataTransferSetData(event, key, value) {
  if (isObject(event) && isObject(event.dataTransfer) && isFunction(event.dataTransfer.setData)) {
    event.dataTransfer.setData(key, value);
  }
};

var createConnectedField = function createConnectedField(structure) {
  var deepEqual = structure.deepEqual,
      getIn = structure.getIn;

  var getSyncError = function getSyncError(syncErrors, name) {
    var error = __WEBPACK_IMPORTED_MODULE_6__structure_plain__["a" /* default */].getIn(syncErrors, name);
    // Because the error for this field might not be at a level in the error structure where
    // it can be set directly, it might need to be unwrapped from the _error property
    return error && error._error ? error._error : error;
  };

  var getSyncWarning = function getSyncWarning(syncWarnings, name) {
    var warning = getIn(syncWarnings, name);
    // Because the warning for this field might not be at a level in the warning structure where
    // it can be set directly, it might need to be unwrapped from the _warning property
    return warning && warning._warning ? warning._warning : warning;
  };

  var ConnectedField = function (_Component) {
    _inherits(ConnectedField, _Component);

    function ConnectedField() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, ConnectedField);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ConnectedField.__proto__ || Object.getPrototypeOf(ConnectedField)).call.apply(_ref, [this].concat(args))), _this), _this.saveRef = function (ref) {
        return _this.ref = ref;
      }, _this.isPristine = function () {
        return _this.props.pristine;
      }, _this.getValue = function () {
        return _this.props.value;
      }, _this.handleChange = function (event) {
        var _this$props = _this.props,
            name = _this$props.name,
            dispatch = _this$props.dispatch,
            parse = _this$props.parse,
            normalize = _this$props.normalize,
            onChange = _this$props.onChange,
            _reduxForm = _this$props._reduxForm,
            previousValue = _this$props.value;

        var newValue = Object(__WEBPACK_IMPORTED_MODULE_4__events_onChangeValue__["a" /* default */])(event, { name: name, parse: parse, normalize: normalize });

        var defaultPrevented = false;
        if (onChange) {
          onChange(_extends({}, event, {
            preventDefault: function preventDefault() {
              defaultPrevented = true;
              return eventPreventDefault(event);
            }
          }), newValue, previousValue);
        }
        if (!defaultPrevented) {
          // dispatch change action
          dispatch(_reduxForm.change(name, newValue));
        }
      }, _this.handleFocus = function (event) {
        var _this$props2 = _this.props,
            name = _this$props2.name,
            dispatch = _this$props2.dispatch,
            onFocus = _this$props2.onFocus,
            _reduxForm = _this$props2._reduxForm;


        var defaultPrevented = false;
        if (onFocus) {
          onFocus(_extends({}, event, {
            preventDefault: function preventDefault() {
              defaultPrevented = true;
              return eventPreventDefault(event);
            }
          }));
        }

        if (!defaultPrevented) {
          dispatch(_reduxForm.focus(name));
        }
      }, _this.handleBlur = function (event) {
        var _this$props3 = _this.props,
            name = _this$props3.name,
            dispatch = _this$props3.dispatch,
            parse = _this$props3.parse,
            normalize = _this$props3.normalize,
            onBlur = _this$props3.onBlur,
            _reduxForm = _this$props3._reduxForm,
            _value = _this$props3._value,
            previousValue = _this$props3.value;

        var newValue = Object(__WEBPACK_IMPORTED_MODULE_4__events_onChangeValue__["a" /* default */])(event, { name: name, parse: parse, normalize: normalize });

        // for checkbox and radio, if the value property of checkbox or radio equals
        // the value passed by blur event, then fire blur action with previousValue.
        if (newValue === _value && _value !== undefined) {
          newValue = previousValue;
        }

        var defaultPrevented = false;
        if (onBlur) {
          onBlur(_extends({}, event, {
            preventDefault: function preventDefault() {
              defaultPrevented = true;
              return eventPreventDefault(event);
            }
          }), newValue, previousValue);
        }

        if (!defaultPrevented) {
          // dispatch blur action
          dispatch(_reduxForm.blur(name, newValue));

          // call post-blur callback
          if (_reduxForm.asyncValidate) {
            _reduxForm.asyncValidate(name, newValue);
          }
        }
      }, _this.handleDragStart = function (event) {
        var _this$props4 = _this.props,
            onDragStart = _this$props4.onDragStart,
            value = _this$props4.value;

        eventDataTransferSetData(event, __WEBPACK_IMPORTED_MODULE_5__util_eventConsts__["a" /* dataKey */], value == null ? '' : value);

        if (onDragStart) {
          onDragStart(event);
        }
      }, _this.handleDrop = function (event) {
        var _this$props5 = _this.props,
            name = _this$props5.name,
            dispatch = _this$props5.dispatch,
            onDrop = _this$props5.onDrop,
            _reduxForm = _this$props5._reduxForm,
            previousValue = _this$props5.value;

        var newValue = eventDataTransferGetData(event, __WEBPACK_IMPORTED_MODULE_5__util_eventConsts__["a" /* dataKey */]);

        var defaultPrevented = false;
        if (onDrop) {
          onDrop(_extends({}, event, {
            preventDefault: function preventDefault() {
              defaultPrevented = true;
              return eventPreventDefault(event);
            }
          }), newValue, previousValue);
        }

        if (!defaultPrevented) {
          // dispatch change action
          dispatch(_reduxForm.change(name, newValue));
          eventPreventDefault(event);
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ConnectedField, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        var _this2 = this;

        var nextPropsKeys = Object.keys(nextProps);
        var thisPropsKeys = Object.keys(this.props);
        return nextPropsKeys.length !== thisPropsKeys.length || nextPropsKeys.some(function (prop) {
          return !~propsToNotUpdateFor.indexOf(prop) && !deepEqual(_this2.props[prop], nextProps[prop]);
        });
      }
    }, {
      key: 'getRenderedComponent',
      value: function getRenderedComponent() {
        return this.ref;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            component = _props.component,
            withRef = _props.withRef,
            name = _props.name,
            _reduxForm = _props._reduxForm,
            normalize = _props.normalize,
            onBlur = _props.onBlur,
            onChange = _props.onChange,
            onFocus = _props.onFocus,
            onDragStart = _props.onDragStart,
            onDrop = _props.onDrop,
            rest = _objectWithoutProperties(_props, ['component', 'withRef', 'name', '_reduxForm', 'normalize', 'onBlur', 'onChange', 'onFocus', 'onDragStart', 'onDrop']);

        var _createFieldProps = Object(__WEBPACK_IMPORTED_MODULE_3__createFieldProps__["a" /* default */])(structure, name, _extends({}, rest, {
          form: _reduxForm.form,
          onBlur: this.handleBlur,
          onChange: this.handleChange,
          onDrop: this.handleDrop,
          onDragStart: this.handleDragStart,
          onFocus: this.handleFocus
        })),
            custom = _createFieldProps.custom,
            props = _objectWithoutProperties(_createFieldProps, ['custom']);

        if (withRef) {
          custom.ref = this.saveRef;
        }
        if (typeof component === 'string') {
          var input = props.input,
              meta = props.meta; // eslint-disable-line no-unused-vars
          // flatten input into other props

          return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(component, _extends({}, input, custom));
        } else {
          return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(component, _extends({}, props, custom));
        }
      }
    }]);

    return ConnectedField;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  ConnectedField.propTypes = {
    component: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]).isRequired,
    props: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  };

  var connector = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state, ownProps) {
    var name = ownProps.name,
        _ownProps$_reduxForm = ownProps._reduxForm,
        initialValues = _ownProps$_reduxForm.initialValues,
        getFormState = _ownProps$_reduxForm.getFormState;

    var formState = getFormState(state);
    var initialState = getIn(formState, 'initial.' + name);
    var initial = initialState !== undefined ? initialState : initialValues && getIn(initialValues, name);
    var value = getIn(formState, 'values.' + name);
    var submitting = getIn(formState, 'submitting');
    var syncError = getSyncError(getIn(formState, 'syncErrors'), name);
    var syncWarning = getSyncWarning(getIn(formState, 'syncWarnings'), name);
    var pristine = deepEqual(value, initial);
    return {
      asyncError: getIn(formState, 'asyncErrors.' + name),
      asyncValidating: getIn(formState, 'asyncValidating') === name,
      dirty: !pristine,
      pristine: pristine,
      state: getIn(formState, 'fields.' + name),
      submitError: getIn(formState, 'submitErrors.' + name),
      submitFailed: getIn(formState, 'submitFailed'),
      submitting: submitting,
      syncError: syncError,
      syncWarning: syncWarning,
      initial: initial,
      value: value,
      _value: ownProps.value // save value passed in (for checkboxes)
    };
  }, undefined, undefined, { withRef: true });
  return connector(ConnectedField);
};

/* harmony default export */ __webpack_exports__["a"] = (createConnectedField);

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createProvider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(578);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  Object(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  if (true) {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);

  return Provider;
}

/* harmony default export */ __webpack_exports__["b"] = (createProvider());

/***/ }),

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createFieldProps__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__structure_plain__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_onChangeValue__ = __webpack_require__(616);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var propsToNotUpdateFor = ['_reduxForm'];

var createConnectedFields = function createConnectedFields(structure) {
  var deepEqual = structure.deepEqual,
      getIn = structure.getIn,
      size = structure.size;


  var getSyncError = function getSyncError(syncErrors, name) {
    // Because the error for this field might not be at a level in the error structure where
    // it can be set directly, it might need to be unwrapped from the _error property
    return __WEBPACK_IMPORTED_MODULE_4__structure_plain__["a" /* default */].getIn(syncErrors, name + '._error') || __WEBPACK_IMPORTED_MODULE_4__structure_plain__["a" /* default */].getIn(syncErrors, name);
  };

  var getSyncWarning = function getSyncWarning(syncWarnings, name) {
    var warning = getIn(syncWarnings, name);
    // Because the warning for this field might not be at a level in the warning structure where
    // it can be set directly, it might need to be unwrapped from the _warning property
    return warning && warning._warning ? warning._warning : warning;
  };

  var ConnectedFields = function (_Component) {
    _inherits(ConnectedFields, _Component);

    function ConnectedFields(props) {
      _classCallCheck(this, ConnectedFields);

      var _this = _possibleConstructorReturn(this, (ConnectedFields.__proto__ || Object.getPrototypeOf(ConnectedFields)).call(this, props));

      _this.onChangeFns = {};
      _this.onFocusFns = {};
      _this.onBlurFns = {};

      _this.prepareEventHandlers = function (_ref) {
        var names = _ref.names;
        return names.forEach(function (name) {
          _this.onChangeFns[name] = function (event) {
            return _this.handleChange(name, event);
          };
          _this.onFocusFns[name] = function () {
            return _this.handleFocus(name);
          };
          _this.onBlurFns[name] = function (event) {
            return _this.handleBlur(name, event);
          };
        });
      };

      _this.handleChange = function (name, event) {
        var _this$props = _this.props,
            dispatch = _this$props.dispatch,
            parse = _this$props.parse,
            _reduxForm = _this$props._reduxForm;

        var value = Object(__WEBPACK_IMPORTED_MODULE_5__events_onChangeValue__["a" /* default */])(event, { name: name, parse: parse });

        dispatch(_reduxForm.change(name, value));
      };

      _this.handleFocus = function (name) {
        var _this$props2 = _this.props,
            dispatch = _this$props2.dispatch,
            _reduxForm = _this$props2._reduxForm;

        dispatch(_reduxForm.focus(name));
      };

      _this.handleBlur = function (name, event) {
        var _this$props3 = _this.props,
            dispatch = _this$props3.dispatch,
            parse = _this$props3.parse,
            _reduxForm = _this$props3._reduxForm;

        var value = Object(__WEBPACK_IMPORTED_MODULE_5__events_onChangeValue__["a" /* default */])(event, { name: name, parse: parse });

        // dispatch blur action
        dispatch(_reduxForm.blur(name, value));

        // call post-blur callback
        if (_reduxForm.asyncValidate) {
          _reduxForm.asyncValidate(name, value);
        }
      };

      _this.prepareEventHandlers(props);
      return _this;
    }

    _createClass(ConnectedFields, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (this.props.names !== nextProps.names && (size(this.props.names) !== size(nextProps.names) || nextProps.names.some(function (nextName) {
          return !_this2.props._fields[nextName];
        }))) {
          // names has changed. The cached event handlers need to be updated
          this.prepareEventHandlers(nextProps);
        }
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        var _this3 = this;

        var nextPropsKeys = Object.keys(nextProps);
        var thisPropsKeys = Object.keys(this.props);
        return nextPropsKeys.length !== thisPropsKeys.length || nextPropsKeys.some(function (prop) {
          return !~propsToNotUpdateFor.indexOf(prop) && !deepEqual(_this3.props[prop], nextProps[prop]);
        });
      }
    }, {
      key: 'isDirty',
      value: function isDirty() {
        var _fields = this.props._fields;

        return Object.keys(_fields).some(function (name) {
          return _fields[name].dirty;
        });
      }
    }, {
      key: 'getValues',
      value: function getValues() {
        var _fields = this.props._fields;

        return Object.keys(_fields).reduce(function (accumulator, name) {
          return __WEBPACK_IMPORTED_MODULE_4__structure_plain__["a" /* default */].setIn(accumulator, name, _fields[name].value);
        }, {});
      }
    }, {
      key: 'getRenderedComponent',
      value: function getRenderedComponent() {
        return this.refs.renderedComponent;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;

        var _props = this.props,
            component = _props.component,
            withRef = _props.withRef,
            _fields = _props._fields,
            _reduxForm = _props._reduxForm,
            rest = _objectWithoutProperties(_props, ['component', 'withRef', '_fields', '_reduxForm']);

        var sectionPrefix = _reduxForm.sectionPrefix,
            form = _reduxForm.form;

        var _Object$keys$reduce = Object.keys(_fields).reduce(function (accumulator, name) {
          var connectedProps = _fields[name];

          var _createFieldProps = Object(__WEBPACK_IMPORTED_MODULE_3__createFieldProps__["a" /* default */])(structure, name, _extends({}, connectedProps, rest, {
            form: form,
            onBlur: _this4.onBlurFns[name],
            onChange: _this4.onChangeFns[name],
            onFocus: _this4.onFocusFns[name]
          })),
              custom = _createFieldProps.custom,
              fieldProps = _objectWithoutProperties(_createFieldProps, ['custom']);

          accumulator.custom = custom;
          var fieldName = sectionPrefix ? name.replace(sectionPrefix + '.', '') : name;
          return __WEBPACK_IMPORTED_MODULE_4__structure_plain__["a" /* default */].setIn(accumulator, fieldName, fieldProps);
        }, {}),
            custom = _Object$keys$reduce.custom,
            props = _objectWithoutProperties(_Object$keys$reduce, ['custom']);

        if (withRef) {
          props.ref = 'renderedComponent';
        }

        return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(component, _extends({}, props, custom));
      }
    }]);

    return ConnectedFields;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  ConnectedFields.propTypes = {
    component: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]).isRequired,
    _fields: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
    props: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  };

  var connector = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state, ownProps) {
    var names = ownProps.names,
        _ownProps$_reduxForm = ownProps._reduxForm,
        initialValues = _ownProps$_reduxForm.initialValues,
        getFormState = _ownProps$_reduxForm.getFormState;

    var formState = getFormState(state);
    return {
      _fields: names.reduce(function (accumulator, name) {
        var initialState = getIn(formState, 'initial.' + name);
        var initial = initialState !== undefined ? initialState : initialValues && getIn(initialValues, name);
        var value = getIn(formState, 'values.' + name);
        var syncError = getSyncError(getIn(formState, 'syncErrors'), name);
        var syncWarning = getSyncWarning(getIn(formState, 'syncWarnings'), name);
        var submitting = getIn(formState, 'submitting');
        var pristine = value === initial;
        accumulator[name] = {
          asyncError: getIn(formState, 'asyncErrors.' + name),
          asyncValidating: getIn(formState, 'asyncValidating') === name,
          dirty: !pristine,
          initial: initial,
          pristine: pristine,
          state: getIn(formState, 'fields.' + name),
          submitError: getIn(formState, 'submitErrors.' + name),
          submitFailed: getIn(formState, 'submitFailed'),
          submitting: submitting,
          syncError: syncError,
          syncWarning: syncWarning,
          value: value,
          _value: ownProps.value // save value passed in (for checkboxes)
        };
        return accumulator;
      }, {})
    };
  }, undefined, undefined, { withRef: true });
  return connector(ConnectedFields);
};

/* harmony default export */ __webpack_exports__["a"] = (createConnectedFields);

/***/ }),

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_mapValues__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__createFieldArrayProps__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__structure_plain__ = __webpack_require__(553);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var propsToNotUpdateFor = ['_reduxForm', 'value'];

var createConnectedFieldArray = function createConnectedFieldArray(structure) {
  var deepEqual = structure.deepEqual,
      getIn = structure.getIn,
      size = structure.size;

  var getSyncError = function getSyncError(syncErrors, name) {
    // For an array, the error can _ONLY_ be under _error.
    // This is why this getSyncError is not the same as the
    // one in Field.
    return __WEBPACK_IMPORTED_MODULE_6__structure_plain__["a" /* default */].getIn(syncErrors, name + '._error');
  };

  var getSyncWarning = function getSyncWarning(syncWarnings, name) {
    // For an array, the warning can _ONLY_ be under _warning.
    // This is why this getSyncError is not the same as the
    // one in Field.
    return getIn(syncWarnings, name + '._warning');
  };

  var ConnectedFieldArray = function (_Component) {
    _inherits(ConnectedFieldArray, _Component);

    function ConnectedFieldArray() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, ConnectedFieldArray);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ConnectedFieldArray.__proto__ || Object.getPrototypeOf(ConnectedFieldArray)).call.apply(_ref, [this].concat(args))), _this), _this.saveRef = function (ref) {
        return _this.ref = ref;
      }, _this.getValue = function (index) {
        return _this.props.value && getIn(_this.props.value, String(index));
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ConnectedFieldArray, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        var _this2 = this;

        // Update if the elements of the value array was updated.
        var thisValue = this.props.value;
        var nextValue = nextProps.value;

        if (thisValue && nextValue) {
          if (thisValue.length !== nextValue.length || nextProps.rerenderOnEveryChange && thisValue.some(function (val, index) {
            return !deepEqual(val, nextValue[index]);
          })) {
            return true;
          }
        }

        var nextPropsKeys = Object.keys(nextProps);
        var thisPropsKeys = Object.keys(this.props);
        return nextPropsKeys.length !== thisPropsKeys.length || nextPropsKeys.some(function (prop) {
          // useful to debug rerenders
          // if (!plain.deepEqual(this.props[ prop ], nextProps[ prop ])) {
          //   console.info(prop, 'changed', this.props[ prop ], '==>', nextProps[ prop ])
          // }
          return !~propsToNotUpdateFor.indexOf(prop) && !deepEqual(_this2.props[prop], nextProps[prop]);
        });
      }
    }, {
      key: 'getRenderedComponent',
      value: function getRenderedComponent() {
        return this.ref;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            component = _props.component,
            withRef = _props.withRef,
            name = _props.name,
            _reduxForm = _props._reduxForm,
            validate = _props.validate,
            warn = _props.warn,
            rerenderOnEveryChange = _props.rerenderOnEveryChange,
            rest = _objectWithoutProperties(_props, ['component', 'withRef', 'name', '_reduxForm', 'validate', 'warn', 'rerenderOnEveryChange']);

        var props = Object(__WEBPACK_IMPORTED_MODULE_5__createFieldArrayProps__["a" /* default */])(structure, name, _reduxForm.form, _reduxForm.sectionPrefix, this.getValue, rest);
        if (withRef) {
          props.ref = this.saveRef;
        }
        return Object(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"])(component, props);
      }
    }, {
      key: 'dirty',
      get: function get() {
        return this.props.dirty;
      }
    }, {
      key: 'pristine',
      get: function get() {
        return this.props.pristine;
      }
    }, {
      key: 'value',
      get: function get() {
        return this.props.value;
      }
    }]);

    return ConnectedFieldArray;
  }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

  ConnectedFieldArray.propTypes = {
    component: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string]).isRequired,
    props: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
    rerenderOnEveryChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
  };

  ConnectedFieldArray.defaultProps = {
    rerenderOnEveryChange: false
  };

  ConnectedFieldArray.contextTypes = {
    _reduxForm: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object
  };

  var connector = Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(function (state, ownProps) {
    var name = ownProps.name,
        _ownProps$_reduxForm = ownProps._reduxForm,
        initialValues = _ownProps$_reduxForm.initialValues,
        getFormState = _ownProps$_reduxForm.getFormState;

    var formState = getFormState(state);
    var initial = getIn(formState, 'initial.' + name) || initialValues && getIn(initialValues, name);
    var value = getIn(formState, 'values.' + name);
    var submitting = getIn(formState, 'submitting');
    var syncError = getSyncError(getIn(formState, 'syncErrors'), name);
    var syncWarning = getSyncWarning(getIn(formState, 'syncWarnings'), name);
    var pristine = deepEqual(value, initial);
    return {
      asyncError: getIn(formState, 'asyncErrors.' + name + '._error'),
      dirty: !pristine,
      pristine: pristine,
      state: getIn(formState, 'fields.' + name),
      submitError: getIn(formState, 'submitErrors.' + name + '._error'),
      submitFailed: getIn(formState, 'submitFailed'),
      submitting: submitting,
      syncError: syncError,
      syncWarning: syncWarning,
      value: value,
      length: size(value)
    };
  }, function (dispatch, ownProps) {
    var name = ownProps.name,
        _reduxForm = ownProps._reduxForm;
    var arrayInsert = _reduxForm.arrayInsert,
        arrayMove = _reduxForm.arrayMove,
        arrayPop = _reduxForm.arrayPop,
        arrayPush = _reduxForm.arrayPush,
        arrayRemove = _reduxForm.arrayRemove,
        arrayRemoveAll = _reduxForm.arrayRemoveAll,
        arrayShift = _reduxForm.arrayShift,
        arraySplice = _reduxForm.arraySplice,
        arraySwap = _reduxForm.arraySwap,
        arrayUnshift = _reduxForm.arrayUnshift;

    return Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_mapValues__["a" /* default */])({
      arrayInsert: arrayInsert,
      arrayMove: arrayMove,
      arrayPop: arrayPop,
      arrayPush: arrayPush,
      arrayRemove: arrayRemove,
      arrayRemoveAll: arrayRemoveAll,
      arrayShift: arrayShift,
      arraySplice: arraySplice,
      arraySwap: arraySwap,
      arrayUnshift: arrayUnshift
    }, function (actionCreator) {
      return Object(__WEBPACK_IMPORTED_MODULE_4_redux__["bindActionCreators"])(actionCreator.bind(null, name), dispatch);
    });
  }, undefined, { withRef: true });
  return connector(ConnectedFieldArray);
};

/* harmony default export */ __webpack_exports__["a"] = (createConnectedFieldArray);

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_prefixName__ = __webpack_require__(562);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }







var createValues = function createValues(_ref) {
  var getIn = _ref.getIn;
  return function (firstArg) {
    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    var valuesMap = void 0;

    if (typeof firstArg === 'string') {
      valuesMap = [firstArg].concat(_toConsumableArray(rest)).map(function (k) {
        return {
          prop: k,
          path: k
        };
      });
    } else {
      var config = firstArg;
      valuesMap = Object.keys(config).map(function (k) {
        return {
          prop: k,
          path: config[k]
        };
      });
    }
    if (!valuesMap.length) {
      throw new Error('formValues(): You must specify values to get as formValues(name1, name2, ...) or formValues({propName1: propPath1, ...})');
    }

    // create a class that reads current form name and creates a selector
    // return
    return function (Component) {
      var FormValues = function (_React$Component) {
        _inherits(FormValues, _React$Component);

        function FormValues(props, context) {
          _classCallCheck(this, FormValues);

          var _this = _possibleConstructorReturn(this, (FormValues.__proto__ || Object.getPrototypeOf(FormValues)).call(this, props, context));

          if (!context._reduxForm) {
            throw new Error('formValues() must be used inside a React tree decorated with reduxForm()');
          }
          var formValuesSelector = function formValuesSelector(_, _ref2) {
            var sectionPrefix = _ref2.sectionPrefix;

            // Yes, we're only using connect() for listening to updates.
            // The second argument needs to be there so that connect calls
            // the selector when props change
            var getValues = _this.context._reduxForm.getValues;

            var props = {};
            var values = getValues();
            valuesMap.forEach(function (_ref3) {
              var prop = _ref3.prop,
                  path = _ref3.path;
              return props[prop] = getIn(values, Object(__WEBPACK_IMPORTED_MODULE_3__util_prefixName__["a" /* default */])(_this.context, path));
            });
            return props;
          };
          _this.Component = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(formValuesSelector, function () {
            return {};
          } // ignore dispatch
          )(function (_ref4) {
            var sectionPrefix = _ref4.sectionPrefix,
                otherProps = _objectWithoutProperties(_ref4, ['sectionPrefix']);

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, otherProps);
          });
          return _this;
        }

        _createClass(FormValues, [{
          key: 'render',
          value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(this.Component, _extends({
              // so that the connected component updates props when sectionPrefix has changed
              sectionPrefix: this.context._reduxForm.sectionPrefix
            }, this.props));
          }
        }]);

        return FormValues;
      }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

      FormValues.contextTypes = {
        _reduxForm: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
      };
      return FormValues;
    };
  };
};

/* harmony default export */ __webpack_exports__["a"] = (createValues);

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_merge__ = __webpack_require__(928);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_mapValues__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_is_promise__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_is_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_is_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_redux__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__asyncValidation__ = __webpack_require__(951);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__defaultShouldAsyncValidate__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__defaultShouldValidate__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__events_silenceEvent__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__events_silenceEvents__ = __webpack_require__(952);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__generateValidator__ = __webpack_require__(953);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__handleSubmit__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__selectors_isValid__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__structure_plain__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__util_getDisplayName__ = __webpack_require__(955);



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }





















var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && _typeof(Component.prototype.isReactComponent) === 'object');
};

// extract field-specific actions

var arrayInsert = __WEBPACK_IMPORTED_MODULE_8__actions__["a" /* default */].arrayInsert,
    arrayMove = __WEBPACK_IMPORTED_MODULE_8__actions__["a" /* default */].arrayMove,
    arrayPop = __WEBPACK_IMPORTED_MODULE_8__actions__["a" /* default */].arrayPop,
    arrayPush = __WEBPACK_IMPORTED_MODULE_8__actions__["a" /* default */].arrayPush,
    arrayRemove = __WEBPACK_IMPORTED_MODULE_8__actions__["a" /* default */].arrayRemove,
    arrayRemoveAll = __WEBPACK_IMPORTED_MODULE_8__actions__["a" /* default */].arrayRemoveAll,
    arrayShift = __WEBPACK_IMPORTED_MODULE_8__actions__["a" /* default */].arrayShift,
    arraySplice = __WEBPACK_IMPORTED_MODULE_8__actions__["a" /* default */].arraySplice,
    arraySwap = __WEBPACK_IMPORTED_MODULE_8__actions__["a" /* default */].arraySwap,
    arrayUnshift = __WEBPACK_IMPORTED_MODULE_8__actions__["a" /* default */].arrayUnshift,
    blur = __WEBPACK_IMPORTED_MODULE_8__actions__["a" /* default */].blur,
    change = __WEBPACK_IMPORTED_MODULE_8__actions__["a" /* default */].change,
    focus = __WEBPACK_IMPORTED_MODULE_8__actions__["a" /* default */].focus,
    formActions = _objectWithoutProperties(__WEBPACK_IMPORTED_MODULE_8__actions__["a" /* default */], ['arrayInsert', 'arrayMove', 'arrayPop', 'arrayPush', 'arrayRemove', 'arrayRemoveAll', 'arrayShift', 'arraySplice', 'arraySwap', 'arrayUnshift', 'blur', 'change', 'focus']);

var arrayActions = {
  arrayInsert: arrayInsert,
  arrayMove: arrayMove,
  arrayPop: arrayPop,
  arrayPush: arrayPush,
  arrayRemove: arrayRemove,
  arrayRemoveAll: arrayRemoveAll,
  arrayShift: arrayShift,
  arraySplice: arraySplice,
  arraySwap: arraySwap,
  arrayUnshift: arrayUnshift
};

var propsToNotUpdateFor = [].concat(_toConsumableArray(Object.keys(__WEBPACK_IMPORTED_MODULE_8__actions__["a" /* default */])), ['array', 'asyncErrors', 'initialValues', 'syncErrors', 'syncWarnings', 'values', 'registeredFields']);

var checkSubmit = function checkSubmit(submit) {
  if (!submit || typeof submit !== 'function') {
    throw new Error('You must either pass handleSubmit() an onSubmit function or pass onSubmit as a prop');
  }
  return submit;
};

/**
 * The decorator that is the main API to redux-form
 */
var createReduxForm = function createReduxForm(structure) {
  var deepEqual = structure.deepEqual,
      empty = structure.empty,
      getIn = structure.getIn,
      setIn = structure.setIn,
      keys = structure.keys,
      fromJS = structure.fromJS;

  var isValid = Object(__WEBPACK_IMPORTED_MODULE_16__selectors_isValid__["a" /* default */])(structure);
  return function (initialConfig) {
    var config = _extends({
      touchOnBlur: true,
      touchOnChange: false,
      persistentSubmitErrors: false,
      destroyOnUnmount: true,
      shouldAsyncValidate: __WEBPACK_IMPORTED_MODULE_10__defaultShouldAsyncValidate__["a" /* default */],
      shouldValidate: __WEBPACK_IMPORTED_MODULE_11__defaultShouldValidate__["a" /* default */],
      enableReinitialize: false,
      keepDirtyOnReinitialize: false,
      getFormState: function getFormState(state) {
        return getIn(state, 'form');
      },
      pure: true,
      forceUnregisterOnUnmount: false
    }, initialConfig);

    return function (WrappedComponent) {
      var Form = function (_Component) {
        _inherits(Form, _Component);

        function Form() {
          var _ref;

          var _temp, _this, _ret;

          _classCallCheck(this, Form);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.destroyed = false, _this.fieldValidators = {}, _this.lastFieldValidatorKeys = [], _this.fieldWarners = {}, _this.lastFieldWarnerKeys = [], _this.innerOnSubmit = undefined, _this.submitPromise = undefined, _this.getValues = function () {
            return _this.props.values;
          }, _this.isValid = function () {
            return _this.props.valid;
          }, _this.isPristine = function () {
            return _this.props.pristine;
          }, _this.register = function (name, type, getValidator, getWarner) {
            _this.props.registerField(name, type);
            if (getValidator) {
              _this.fieldValidators[name] = getValidator;
            }
            if (getWarner) {
              _this.fieldWarners[name] = getWarner;
            }
          }, _this.unregister = function (name) {
            if (!_this.destroyed) {
              if (_this.props.destroyOnUnmount || _this.props.forceUnregisterOnUnmount) {
                _this.props.unregisterField(name);
                delete _this.fieldValidators[name];
                delete _this.fieldWarners[name];
              } else {
                _this.props.unregisterField(name, false);
              }
            }
          }, _this.getFieldList = function (options) {
            var registeredFields = _this.props.registeredFields;
            var list = [];
            if (!registeredFields) {
              return list;
            }
            var keySeq = keys(registeredFields);
            if (options && options.excludeFieldArray) {
              keySeq = keySeq.filter(function (name) {
                return getIn(registeredFields, '[\'' + name + '\'].type') !== 'FieldArray';
              });
            }
            return fromJS(keySeq.reduce(function (acc, key) {
              acc.push(key);
              return acc;
            }, list));
          }, _this.getValidators = function () {
            var validators = {};
            Object.keys(_this.fieldValidators).forEach(function (name) {
              var validator = _this.fieldValidators[name]();
              if (validator) {
                validators[name] = validator;
              }
            });
            return validators;
          }, _this.generateValidator = function () {
            var validators = _this.getValidators();
            return Object.keys(validators).length ? Object(__WEBPACK_IMPORTED_MODULE_14__generateValidator__["a" /* default */])(validators, structure) : undefined;
          }, _this.getWarners = function () {
            var warners = {};
            Object.keys(_this.fieldWarners).forEach(function (name) {
              var warner = _this.fieldWarners[name]();
              if (warner) {
                warners[name] = warner;
              }
            });
            return warners;
          }, _this.generateWarner = function () {
            var warners = _this.getWarners();
            return Object.keys(warners).length ? Object(__WEBPACK_IMPORTED_MODULE_14__generateValidator__["a" /* default */])(warners, structure) : undefined;
          }, _this.asyncValidate = function (name, value) {
            var _this$props = _this.props,
                asyncBlurFields = _this$props.asyncBlurFields,
                asyncErrors = _this$props.asyncErrors,
                asyncValidate = _this$props.asyncValidate,
                dispatch = _this$props.dispatch,
                initialized = _this$props.initialized,
                pristine = _this$props.pristine,
                shouldAsyncValidate = _this$props.shouldAsyncValidate,
                startAsyncValidation = _this$props.startAsyncValidation,
                stopAsyncValidation = _this$props.stopAsyncValidation,
                syncErrors = _this$props.syncErrors,
                values = _this$props.values;

            var submitting = !name;
            if (asyncValidate) {
              var valuesToValidate = submitting ? values : setIn(values, name, value);
              var syncValidationPasses = submitting || !getIn(syncErrors, name);
              var isBlurredField = !submitting && (!asyncBlurFields || ~asyncBlurFields.indexOf(name.replace(/\[[0-9]+\]/g, '[]')));
              if ((isBlurredField || submitting) && shouldAsyncValidate({
                asyncErrors: asyncErrors,
                initialized: initialized,
                trigger: submitting ? 'submit' : 'blur',
                blurredField: name,
                pristine: pristine,
                syncValidationPasses: syncValidationPasses
              })) {
                return Object(__WEBPACK_IMPORTED_MODULE_9__asyncValidation__["a" /* default */])(function () {
                  return asyncValidate(valuesToValidate, dispatch, _this.props, name);
                }, startAsyncValidation, stopAsyncValidation, name);
              }
            }
          }, _this.submitCompleted = function (result) {
            delete _this.submitPromise;
            return result;
          }, _this.submitFailed = function (error) {
            delete _this.submitPromise;
            return error;
          }, _this.listenToSubmit = function (promise) {
            if (!__WEBPACK_IMPORTED_MODULE_3_is_promise___default()(promise)) {
              return promise;
            }
            _this.submitPromise = promise;
            return promise.then(_this.submitCompleted, _this.submitFailed);
          }, _this.submit = function (submitOrEvent) {
            var _this$props2 = _this.props,
                onSubmit = _this$props2.onSubmit,
                blur = _this$props2.blur,
                change = _this$props2.change,
                dispatch = _this$props2.dispatch;


            if (!submitOrEvent || Object(__WEBPACK_IMPORTED_MODULE_12__events_silenceEvent__["a" /* default */])(submitOrEvent)) {
              // submitOrEvent is an event: fire submit if not already submitting
              if (!_this.submitPromise) {
                // avoid recursive stack trace if use Form with onSubmit as handleSubmit
                if (_this.innerOnSubmit && _this.innerOnSubmit !== _this.submit) {
                  // will call "submitOrEvent is the submit function" block below
                  return _this.innerOnSubmit();
                } else {
                  return _this.listenToSubmit(Object(__WEBPACK_IMPORTED_MODULE_15__handleSubmit__["a" /* default */])(checkSubmit(onSubmit), _extends({}, _this.props, Object(__WEBPACK_IMPORTED_MODULE_7_redux__["bindActionCreators"])({ blur: blur, change: change }, dispatch)), _this.props.validExceptSubmit, _this.asyncValidate, _this.getFieldList({ excludeFieldArray: true })));
                }
              }
            } else {
              // submitOrEvent is the submit function: return deferred submit thunk
              return Object(__WEBPACK_IMPORTED_MODULE_13__events_silenceEvents__["a" /* default */])(function () {
                return !_this.submitPromise && _this.listenToSubmit(Object(__WEBPACK_IMPORTED_MODULE_15__handleSubmit__["a" /* default */])(checkSubmit(submitOrEvent), _extends({}, _this.props, Object(__WEBPACK_IMPORTED_MODULE_7_redux__["bindActionCreators"])({ blur: blur, change: change }, dispatch)), _this.props.validExceptSubmit, _this.asyncValidate, _this.getFieldList({ excludeFieldArray: true })));
              });
            }
          }, _this.reset = function () {
            return _this.props.reset();
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(Form, [{
          key: 'getChildContext',
          value: function getChildContext() {
            var _this2 = this;

            return {
              _reduxForm: _extends({}, this.props, {
                getFormState: function getFormState(state) {
                  return getIn(_this2.props.getFormState(state), _this2.props.form);
                },
                asyncValidate: this.asyncValidate,
                getValues: this.getValues,
                sectionPrefix: undefined,
                register: this.register,
                unregister: this.unregister,
                registerInnerOnSubmit: function registerInnerOnSubmit(innerOnSubmit) {
                  return _this2.innerOnSubmit = innerOnSubmit;
                }
              })
            };
          }
        }, {
          key: 'initIfNeeded',
          value: function initIfNeeded(nextProps) {
            var enableReinitialize = this.props.enableReinitialize;

            if (nextProps) {
              if ((enableReinitialize || !nextProps.initialized) && !deepEqual(this.props.initialValues, nextProps.initialValues)) {
                var _keepDirty = nextProps.initialized && this.props.keepDirtyOnReinitialize;
                this.props.initialize(nextProps.initialValues, _keepDirty, {
                  lastInitialValues: this.props.initialValues
                });
              }
            } else if (this.props.initialValues && (!this.props.initialized || enableReinitialize)) {
              this.props.initialize(this.props.initialValues, this.props.keepDirtyOnReinitialize);
            }
          }
        }, {
          key: 'updateSyncErrorsIfNeeded',
          value: function updateSyncErrorsIfNeeded(nextSyncErrors, nextError, lastSyncErrors) {
            var _props = this.props,
                error = _props.error,
                updateSyncErrors = _props.updateSyncErrors;

            var noErrors = (!lastSyncErrors || !Object.keys(lastSyncErrors).length) && !error;
            var nextNoErrors = (!nextSyncErrors || !Object.keys(nextSyncErrors).length) && !nextError;
            if (!(noErrors && nextNoErrors) && (!__WEBPACK_IMPORTED_MODULE_17__structure_plain__["a" /* default */].deepEqual(lastSyncErrors, nextSyncErrors) || !__WEBPACK_IMPORTED_MODULE_17__structure_plain__["a" /* default */].deepEqual(error, nextError))) {
              updateSyncErrors(nextSyncErrors, nextError);
            }
          }
        }, {
          key: 'clearSubmitPromiseIfNeeded',
          value: function clearSubmitPromiseIfNeeded(nextProps) {
            var submitting = this.props.submitting;

            if (this.submitPromise && submitting && !nextProps.submitting) {
              delete this.submitPromise;
            }
          }
        }, {
          key: 'submitIfNeeded',
          value: function submitIfNeeded(nextProps) {
            var _props2 = this.props,
                clearSubmit = _props2.clearSubmit,
                triggerSubmit = _props2.triggerSubmit;

            if (!triggerSubmit && nextProps.triggerSubmit) {
              clearSubmit();
              this.submit();
            }
          }
        }, {
          key: 'validateIfNeeded',
          value: function validateIfNeeded(nextProps) {
            var _props3 = this.props,
                shouldValidate = _props3.shouldValidate,
                validate = _props3.validate,
                values = _props3.values;

            var fieldLevelValidate = this.generateValidator();
            if (validate || fieldLevelValidate) {
              var initialRender = nextProps === undefined;
              var fieldValidatorKeys = Object.keys(this.getValidators());
              var shouldValidateResult = shouldValidate({
                values: values,
                nextProps: nextProps,
                props: this.props,
                initialRender: initialRender,
                lastFieldValidatorKeys: this.lastFieldValidatorKeys,
                fieldValidatorKeys: fieldValidatorKeys,
                structure: structure
              });

              if (shouldValidateResult) {
                var propsToValidate = initialRender || !nextProps ? this.props : nextProps;

                var _merge2 = Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_merge__["a" /* default */])(validate ? validate(propsToValidate.values, propsToValidate) || {} : {}, fieldLevelValidate ? fieldLevelValidate(propsToValidate.values, propsToValidate) || {} : {}),
                    _error = _merge2._error,
                    nextSyncErrors = _objectWithoutProperties(_merge2, ['_error']);

                this.lastFieldValidatorKeys = fieldValidatorKeys;
                this.updateSyncErrorsIfNeeded(nextSyncErrors, _error, propsToValidate.syncErrors);
              }
            }
          }
        }, {
          key: 'updateSyncWarningsIfNeeded',
          value: function updateSyncWarningsIfNeeded(nextSyncWarnings, nextWarning, lastSyncWarnings) {
            var _props4 = this.props,
                warning = _props4.warning,
                syncWarnings = _props4.syncWarnings,
                updateSyncWarnings = _props4.updateSyncWarnings;

            var noWarnings = (!syncWarnings || !Object.keys(syncWarnings).length) && !warning;
            var nextNoWarnings = (!nextSyncWarnings || !Object.keys(nextSyncWarnings).length) && !nextWarning;
            if (!(noWarnings && nextNoWarnings) && (!__WEBPACK_IMPORTED_MODULE_17__structure_plain__["a" /* default */].deepEqual(lastSyncWarnings, nextSyncWarnings) || !__WEBPACK_IMPORTED_MODULE_17__structure_plain__["a" /* default */].deepEqual(warning, nextWarning))) {
              updateSyncWarnings(nextSyncWarnings, nextWarning);
            }
          }
        }, {
          key: 'warnIfNeeded',
          value: function warnIfNeeded(nextProps) {
            var _props5 = this.props,
                shouldValidate = _props5.shouldValidate,
                warn = _props5.warn,
                values = _props5.values;

            var fieldLevelWarn = this.generateWarner();
            if (warn || fieldLevelWarn) {
              var initialRender = nextProps === undefined;
              var fieldWarnerKeys = Object.keys(this.getWarners());
              var shouldWarnResult = shouldValidate({
                values: values,
                nextProps: nextProps,
                props: this.props,
                initialRender: initialRender,
                lastFieldValidatorKeys: this.lastFieldWarnerKeys,
                fieldValidatorKeys: fieldWarnerKeys,
                structure: structure
              });

              if (shouldWarnResult) {
                var propsToWarn = initialRender || !nextProps ? this.props : nextProps;

                var _merge3 = Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_merge__["a" /* default */])(warn ? warn(propsToWarn.values, propsToWarn) : {}, fieldLevelWarn ? fieldLevelWarn(propsToWarn.values, propsToWarn) : {}),
                    _warning = _merge3._warning,
                    nextSyncWarnings = _objectWithoutProperties(_merge3, ['_warning']);

                this.lastFieldWarnerKeys = fieldWarnerKeys;
                this.updateSyncWarningsIfNeeded(nextSyncWarnings, _warning, propsToWarn.syncWarnings);
              }
            }
          }
        }, {
          key: 'componentWillMount',
          value: function componentWillMount() {
            this.initIfNeeded();
            this.validateIfNeeded();
            this.warnIfNeeded();
          }
        }, {
          key: 'componentWillReceiveProps',
          value: function componentWillReceiveProps(nextProps) {
            this.initIfNeeded(nextProps);
            this.validateIfNeeded(nextProps);
            this.warnIfNeeded(nextProps);
            this.clearSubmitPromiseIfNeeded(nextProps);
            this.submitIfNeeded(nextProps);
            var onChange = nextProps.onChange,
                values = nextProps.values,
                dispatch = nextProps.dispatch;

            if (onChange && !deepEqual(values, this.props.values)) {
              onChange(values, dispatch, nextProps);
            }
          }
        }, {
          key: 'shouldComponentUpdate',
          value: function shouldComponentUpdate(nextProps) {
            var _this3 = this;

            if (!this.props.pure) return true;
            var _config$immutableProp = config.immutableProps,
                immutableProps = _config$immutableProp === undefined ? [] : _config$immutableProp;

            return Object.keys(nextProps).some(function (prop) {
              // useful to debug rerenders
              // if (!plain.deepEqual(this.props[ prop ], nextProps[ prop ])) {
              //   console.info(prop, 'changed', this.props[ prop ], '==>', nextProps[ prop ])
              // }
              if (~immutableProps.indexOf(prop)) {
                return _this3.props[prop] !== nextProps[prop];
              }
              return !~propsToNotUpdateFor.indexOf(prop) && !deepEqual(_this3.props[prop], nextProps[prop]);
            });
          }
        }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            var _props6 = this.props,
                destroyOnUnmount = _props6.destroyOnUnmount,
                destroy = _props6.destroy;

            if (destroyOnUnmount) {
              this.destroyed = true;
              destroy();
            }
          }
        }, {
          key: 'render',
          value: function render() {
            // remove some redux-form config-only props
            /* eslint-disable no-unused-vars */
            var _props7 = this.props,
                anyTouched = _props7.anyTouched,
                arrayInsert = _props7.arrayInsert,
                arrayMove = _props7.arrayMove,
                arrayPop = _props7.arrayPop,
                arrayPush = _props7.arrayPush,
                arrayRemove = _props7.arrayRemove,
                arrayRemoveAll = _props7.arrayRemoveAll,
                arrayShift = _props7.arrayShift,
                arraySplice = _props7.arraySplice,
                arraySwap = _props7.arraySwap,
                arrayUnshift = _props7.arrayUnshift,
                asyncErrors = _props7.asyncErrors,
                asyncValidate = _props7.asyncValidate,
                asyncValidating = _props7.asyncValidating,
                blur = _props7.blur,
                change = _props7.change,
                clearSubmit = _props7.clearSubmit,
                destroy = _props7.destroy,
                destroyOnUnmount = _props7.destroyOnUnmount,
                forceUnregisterOnUnmount = _props7.forceUnregisterOnUnmount,
                dirty = _props7.dirty,
                dispatch = _props7.dispatch,
                enableReinitialize = _props7.enableReinitialize,
                error = _props7.error,
                focus = _props7.focus,
                form = _props7.form,
                getFormState = _props7.getFormState,
                initialize = _props7.initialize,
                initialized = _props7.initialized,
                initialValues = _props7.initialValues,
                invalid = _props7.invalid,
                keepDirtyOnReinitialize = _props7.keepDirtyOnReinitialize,
                pristine = _props7.pristine,
                propNamespace = _props7.propNamespace,
                registeredFields = _props7.registeredFields,
                registerField = _props7.registerField,
                reset = _props7.reset,
                setSubmitFailed = _props7.setSubmitFailed,
                setSubmitSucceeded = _props7.setSubmitSucceeded,
                shouldAsyncValidate = _props7.shouldAsyncValidate,
                shouldValidate = _props7.shouldValidate,
                startAsyncValidation = _props7.startAsyncValidation,
                startSubmit = _props7.startSubmit,
                stopAsyncValidation = _props7.stopAsyncValidation,
                stopSubmit = _props7.stopSubmit,
                submitting = _props7.submitting,
                submitFailed = _props7.submitFailed,
                submitSucceeded = _props7.submitSucceeded,
                touch = _props7.touch,
                touchOnBlur = _props7.touchOnBlur,
                touchOnChange = _props7.touchOnChange,
                persistentSubmitErrors = _props7.persistentSubmitErrors,
                syncErrors = _props7.syncErrors,
                syncWarnings = _props7.syncWarnings,
                unregisterField = _props7.unregisterField,
                untouch = _props7.untouch,
                updateSyncErrors = _props7.updateSyncErrors,
                updateSyncWarnings = _props7.updateSyncWarnings,
                valid = _props7.valid,
                validExceptSubmit = _props7.validExceptSubmit,
                values = _props7.values,
                warning = _props7.warning,
                rest = _objectWithoutProperties(_props7, ['anyTouched', 'arrayInsert', 'arrayMove', 'arrayPop', 'arrayPush', 'arrayRemove', 'arrayRemoveAll', 'arrayShift', 'arraySplice', 'arraySwap', 'arrayUnshift', 'asyncErrors', 'asyncValidate', 'asyncValidating', 'blur', 'change', 'clearSubmit', 'destroy', 'destroyOnUnmount', 'forceUnregisterOnUnmount', 'dirty', 'dispatch', 'enableReinitialize', 'error', 'focus', 'form', 'getFormState', 'initialize', 'initialized', 'initialValues', 'invalid', 'keepDirtyOnReinitialize', 'pristine', 'propNamespace', 'registeredFields', 'registerField', 'reset', 'setSubmitFailed', 'setSubmitSucceeded', 'shouldAsyncValidate', 'shouldValidate', 'startAsyncValidation', 'startSubmit', 'stopAsyncValidation', 'stopSubmit', 'submitting', 'submitFailed', 'submitSucceeded', 'touch', 'touchOnBlur', 'touchOnChange', 'persistentSubmitErrors', 'syncErrors', 'syncWarnings', 'unregisterField', 'untouch', 'updateSyncErrors', 'updateSyncWarnings', 'valid', 'validExceptSubmit', 'values', 'warning']);
            /* eslint-enable no-unused-vars */


            var reduxFormProps = _extends({
              anyTouched: anyTouched,
              asyncValidate: this.asyncValidate,
              asyncValidating: asyncValidating
            }, Object(__WEBPACK_IMPORTED_MODULE_7_redux__["bindActionCreators"])({ blur: blur, change: change }, dispatch), {
              clearSubmit: clearSubmit,
              destroy: destroy,
              dirty: dirty,
              dispatch: dispatch,
              error: error,
              form: form,
              handleSubmit: this.submit,
              initialize: initialize,
              initialized: initialized,
              initialValues: initialValues,
              invalid: invalid,
              pristine: pristine,
              reset: reset,
              submitting: submitting,
              submitFailed: submitFailed,
              submitSucceeded: submitSucceeded,
              touch: touch,
              untouch: untouch,
              valid: valid,
              warning: warning
            });
            var propsToPass = _extends({}, propNamespace ? _defineProperty({}, propNamespace, reduxFormProps) : reduxFormProps, rest);
            if (isClassComponent(WrappedComponent)) {
              propsToPass.ref = 'wrapped';
            }
            return Object(__WEBPACK_IMPORTED_MODULE_5_react__["createElement"])(WrappedComponent, propsToPass);
          }
        }]);

        return Form;
      }(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

      Form.displayName = 'Form(' + Object(__WEBPACK_IMPORTED_MODULE_18__util_getDisplayName__["a" /* default */])(WrappedComponent) + ')';
      Form.WrappedComponent = WrappedComponent;
      Form.childContextTypes = {
        _reduxForm: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object.isRequired
      };
      Form.propTypes = {
        destroyOnUnmount: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
        forceUnregisterOnUnmount: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
        form: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string.isRequired,
        initialValues: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object]),
        getFormState: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
        onSubmitFail: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
        onSubmitSuccess: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
        propNamespace: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
        validate: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
        warn: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
        touchOnBlur: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
        touchOnChange: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
        triggerSubmit: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
        persistentSubmitErrors: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
        registeredFields: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any
      };

      var connector = Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["connect"])(function (state, props) {
        var form = props.form,
            getFormState = props.getFormState,
            initialValues = props.initialValues,
            enableReinitialize = props.enableReinitialize,
            keepDirtyOnReinitialize = props.keepDirtyOnReinitialize;

        var formState = getIn(getFormState(state) || empty, form) || empty;
        var stateInitial = getIn(formState, 'initial');
        var initialized = !!stateInitial;

        var shouldUpdateInitialValues = enableReinitialize && initialized && !deepEqual(initialValues, stateInitial);
        var shouldResetValues = shouldUpdateInitialValues && !keepDirtyOnReinitialize;

        var initial = initialValues || stateInitial || empty;

        if (shouldUpdateInitialValues) {
          initial = stateInitial || empty;
        }

        var values = getIn(formState, 'values') || initial;

        if (shouldResetValues) {
          values = initial;
        }

        var pristine = shouldResetValues || deepEqual(initial, values);
        var asyncErrors = getIn(formState, 'asyncErrors');
        var syncErrors = getIn(formState, 'syncErrors') || {};
        var syncWarnings = getIn(formState, 'syncWarnings') || {};
        var registeredFields = getIn(formState, 'registeredFields');
        var valid = isValid(form, getFormState, false)(state);
        var validExceptSubmit = isValid(form, getFormState, true)(state);
        var anyTouched = !!getIn(formState, 'anyTouched');
        var submitting = !!getIn(formState, 'submitting');
        var submitFailed = !!getIn(formState, 'submitFailed');
        var submitSucceeded = !!getIn(formState, 'submitSucceeded');
        var error = getIn(formState, 'error');
        var warning = getIn(formState, 'warning');
        var triggerSubmit = getIn(formState, 'triggerSubmit');
        return {
          anyTouched: anyTouched,
          asyncErrors: asyncErrors,
          asyncValidating: getIn(formState, 'asyncValidating') || false,
          dirty: !pristine,
          error: error,
          initialized: initialized,
          invalid: !valid,
          pristine: pristine,
          registeredFields: registeredFields,
          submitting: submitting,
          submitFailed: submitFailed,
          submitSucceeded: submitSucceeded,
          syncErrors: syncErrors,
          syncWarnings: syncWarnings,
          triggerSubmit: triggerSubmit,
          values: values,
          valid: valid,
          validExceptSubmit: validExceptSubmit,
          warning: warning
        };
      }, function (dispatch, initialProps) {
        var bindForm = function bindForm(actionCreator) {
          return actionCreator.bind(null, initialProps.form);
        };

        // Bind the first parameter on `props.form`
        var boundFormACs = Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_mapValues__["a" /* default */])(formActions, bindForm);
        var boundArrayACs = Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_mapValues__["a" /* default */])(arrayActions, bindForm);
        var boundBlur = function boundBlur(field, value) {
          return blur(initialProps.form, field, value, !!initialProps.touchOnBlur);
        };
        var boundChange = function boundChange(field, value) {
          return change(initialProps.form, field, value, !!initialProps.touchOnChange, !!initialProps.persistentSubmitErrors);
        };
        var boundFocus = bindForm(focus);

        // Wrap action creators with `dispatch`
        var connectedFormACs = Object(__WEBPACK_IMPORTED_MODULE_7_redux__["bindActionCreators"])(boundFormACs, dispatch);
        var connectedArrayACs = {
          insert: Object(__WEBPACK_IMPORTED_MODULE_7_redux__["bindActionCreators"])(boundArrayACs.arrayInsert, dispatch),
          move: Object(__WEBPACK_IMPORTED_MODULE_7_redux__["bindActionCreators"])(boundArrayACs.arrayMove, dispatch),
          pop: Object(__WEBPACK_IMPORTED_MODULE_7_redux__["bindActionCreators"])(boundArrayACs.arrayPop, dispatch),
          push: Object(__WEBPACK_IMPORTED_MODULE_7_redux__["bindActionCreators"])(boundArrayACs.arrayPush, dispatch),
          remove: Object(__WEBPACK_IMPORTED_MODULE_7_redux__["bindActionCreators"])(boundArrayACs.arrayRemove, dispatch),
          removeAll: Object(__WEBPACK_IMPORTED_MODULE_7_redux__["bindActionCreators"])(boundArrayACs.arrayRemoveAll, dispatch),
          shift: Object(__WEBPACK_IMPORTED_MODULE_7_redux__["bindActionCreators"])(boundArrayACs.arrayShift, dispatch),
          splice: Object(__WEBPACK_IMPORTED_MODULE_7_redux__["bindActionCreators"])(boundArrayACs.arraySplice, dispatch),
          swap: Object(__WEBPACK_IMPORTED_MODULE_7_redux__["bindActionCreators"])(boundArrayACs.arraySwap, dispatch),
          unshift: Object(__WEBPACK_IMPORTED_MODULE_7_redux__["bindActionCreators"])(boundArrayACs.arrayUnshift, dispatch)
        };

        var computedActions = _extends({}, connectedFormACs, boundArrayACs, {
          blur: boundBlur,
          change: boundChange,
          array: connectedArrayACs,
          focus: boundFocus,
          dispatch: dispatch
        });

        return function () {
          return computedActions;
        };
      }, undefined, { withRef: true });
      var ConnectedForm = __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default()(connector(Form), WrappedComponent);
      ConnectedForm.defaultProps = config;

      // build outer component to expose instance api
      return function (_Component2) {
        _inherits(ReduxForm, _Component2);

        function ReduxForm() {
          _classCallCheck(this, ReduxForm);

          return _possibleConstructorReturn(this, (ReduxForm.__proto__ || Object.getPrototypeOf(ReduxForm)).apply(this, arguments));
        }

        _createClass(ReduxForm, [{
          key: 'submit',
          value: function submit() {
            return this.refs.wrapped.getWrappedInstance().submit();
          }
        }, {
          key: 'reset',
          value: function reset() {
            return this.refs.wrapped.getWrappedInstance().reset();
          }
        }, {
          key: 'render',
          value: function render() {
            var _props8 = this.props,
                initialValues = _props8.initialValues,
                rest = _objectWithoutProperties(_props8, ['initialValues']);

            return Object(__WEBPACK_IMPORTED_MODULE_5_react__["createElement"])(ConnectedForm, _extends({}, rest, {
              ref: 'wrapped',
              // convert initialValues if need to
              initialValues: fromJS(initialValues)
            }));
          }
        }, {
          key: 'valid',
          get: function get() {
            return this.refs.wrapped.getWrappedInstance().isValid();
          }
        }, {
          key: 'invalid',
          get: function get() {
            return !this.valid;
          }
        }, {
          key: 'pristine',
          get: function get() {
            return this.refs.wrapped.getWrappedInstance().isPristine();
          }
        }, {
          key: 'dirty',
          get: function get() {
            return !this.pristine;
          }
        }, {
          key: 'values',
          get: function get() {
            return this.refs.wrapped.getWrappedInstance().getValues();
          }
        }, {
          key: 'fieldList',
          get: function get() {
            // mainly provided for testing
            return this.refs.wrapped.getWrappedInstance().getFieldList();
          }
        }, {
          key: 'wrappedInstance',
          get: function get() {
            // for testing
            return this.refs.wrapped.getWrappedInstance().refs.wrapped;
          }
        }]);

        return ReduxForm;
      }(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);
    };
  };
};

/* harmony default export */ __webpack_exports__["a"] = (createReduxForm);

/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(561);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var createValues = function createValues(_ref) {
  var getIn = _ref.getIn;
  return function (config) {
    var _prop$getFormState$co = _extends({
      prop: 'values',
      getFormState: function getFormState(state) {
        return getIn(state, 'form');
      }
    }, config),
        form = _prop$getFormState$co.form,
        prop = _prop$getFormState$co.prop,
        getFormState = _prop$getFormState$co.getFormState;

    return Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(function (state) {
      return _defineProperty({}, prop, getIn(getFormState(state), form + '.values'));
    }
    // ignore dispatch
    );
  };
};

/* harmony default export */ __webpack_exports__["a"] = (createValues);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lNmE2NmQ4ZTczZjc1NWYzZmZlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2luZGV4LmpzPzhhZjc0ZWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4LWZvcm0vZXMvQ29ubmVjdGVkRmllbGQuanM/YWRkYWMzZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29tcG9uZW50cy9Qcm92aWRlci5qcz9hZGRhYzNlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC1mb3JtL2VzL0Nvbm5lY3RlZEZpZWxkcy5qcz9hZGRhYzNlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC1mb3JtL2VzL0Nvbm5lY3RlZEZpZWxkQXJyYXkuanM/YWRkYWMzZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtZm9ybS9lcy9jcmVhdGVGb3JtVmFsdWVzLmpzP2FkZGFjM2UiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4LWZvcm0vZXMvY3JlYXRlUmVkdXhGb3JtLmpzP2FkZGFjM2UiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4LWZvcm0vZXMvY3JlYXRlVmFsdWVzLmpzP2FkZGFjM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3ZpZGVyLCB7IGNyZWF0ZVByb3ZpZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL1Byb3ZpZGVyJztcbmltcG9ydCBjb25uZWN0QWR2YW5jZWQgZnJvbSAnLi9jb21wb25lbnRzL2Nvbm5lY3RBZHZhbmNlZCc7XG5pbXBvcnQgY29ubmVjdCBmcm9tICcuL2Nvbm5lY3QvY29ubmVjdCc7XG5cbmV4cG9ydCB7IFByb3ZpZGVyLCBjcmVhdGVQcm92aWRlciwgY29ubmVjdEFkdmFuY2VkLCBjb25uZWN0IH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDUgNiIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCB7IENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNyZWF0ZUZpZWxkUHJvcHMgZnJvbSAnLi9jcmVhdGVGaWVsZFByb3BzJztcbmltcG9ydCBvbkNoYW5nZVZhbHVlIGZyb20gJy4vZXZlbnRzL29uQ2hhbmdlVmFsdWUnO1xuaW1wb3J0IHsgZGF0YUtleSB9IGZyb20gJy4vdXRpbC9ldmVudENvbnN0cyc7XG5pbXBvcnQgcGxhaW4gZnJvbSAnLi9zdHJ1Y3R1cmUvcGxhaW4nO1xuXG5cbnZhciBwcm9wc1RvTm90VXBkYXRlRm9yID0gWydfcmVkdXhGb3JtJ107XG5cbnZhciBpc09iamVjdCA9IGZ1bmN0aW9uIGlzT2JqZWN0KGVudGl0eSkge1xuICByZXR1cm4gZW50aXR5ICYmICh0eXBlb2YgZW50aXR5ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihlbnRpdHkpKSA9PT0gJ29iamVjdCc7XG59O1xuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24oZW50aXR5KSB7XG4gIHJldHVybiBlbnRpdHkgJiYgdHlwZW9mIGVudGl0eSA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cbnZhciBldmVudFByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gZXZlbnRQcmV2ZW50RGVmYXVsdChldmVudCkge1xuICBpZiAoaXNPYmplY3QoZXZlbnQpICYmIGlzRnVuY3Rpb24oZXZlbnQucHJldmVudERlZmF1bHQpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufTtcblxudmFyIGV2ZW50RGF0YVRyYW5zZmVyR2V0RGF0YSA9IGZ1bmN0aW9uIGV2ZW50RGF0YVRyYW5zZmVyR2V0RGF0YShldmVudCwga2V5KSB7XG4gIGlmIChpc09iamVjdChldmVudCkgJiYgaXNPYmplY3QoZXZlbnQuZGF0YVRyYW5zZmVyKSAmJiBpc0Z1bmN0aW9uKGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKSkge1xuICAgIHJldHVybiBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShrZXkpO1xuICB9XG59O1xuXG52YXIgZXZlbnREYXRhVHJhbnNmZXJTZXREYXRhID0gZnVuY3Rpb24gZXZlbnREYXRhVHJhbnNmZXJTZXREYXRhKGV2ZW50LCBrZXksIHZhbHVlKSB7XG4gIGlmIChpc09iamVjdChldmVudCkgJiYgaXNPYmplY3QoZXZlbnQuZGF0YVRyYW5zZmVyKSAmJiBpc0Z1bmN0aW9uKGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKSkge1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKGtleSwgdmFsdWUpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ29ubmVjdGVkRmllbGQgPSBmdW5jdGlvbiBjcmVhdGVDb25uZWN0ZWRGaWVsZChzdHJ1Y3R1cmUpIHtcbiAgdmFyIGRlZXBFcXVhbCA9IHN0cnVjdHVyZS5kZWVwRXF1YWwsXG4gICAgICBnZXRJbiA9IHN0cnVjdHVyZS5nZXRJbjtcblxuICB2YXIgZ2V0U3luY0Vycm9yID0gZnVuY3Rpb24gZ2V0U3luY0Vycm9yKHN5bmNFcnJvcnMsIG5hbWUpIHtcbiAgICB2YXIgZXJyb3IgPSBwbGFpbi5nZXRJbihzeW5jRXJyb3JzLCBuYW1lKTtcbiAgICAvLyBCZWNhdXNlIHRoZSBlcnJvciBmb3IgdGhpcyBmaWVsZCBtaWdodCBub3QgYmUgYXQgYSBsZXZlbCBpbiB0aGUgZXJyb3Igc3RydWN0dXJlIHdoZXJlXG4gICAgLy8gaXQgY2FuIGJlIHNldCBkaXJlY3RseSwgaXQgbWlnaHQgbmVlZCB0byBiZSB1bndyYXBwZWQgZnJvbSB0aGUgX2Vycm9yIHByb3BlcnR5XG4gICAgcmV0dXJuIGVycm9yICYmIGVycm9yLl9lcnJvciA/IGVycm9yLl9lcnJvciA6IGVycm9yO1xuICB9O1xuXG4gIHZhciBnZXRTeW5jV2FybmluZyA9IGZ1bmN0aW9uIGdldFN5bmNXYXJuaW5nKHN5bmNXYXJuaW5ncywgbmFtZSkge1xuICAgIHZhciB3YXJuaW5nID0gZ2V0SW4oc3luY1dhcm5pbmdzLCBuYW1lKTtcbiAgICAvLyBCZWNhdXNlIHRoZSB3YXJuaW5nIGZvciB0aGlzIGZpZWxkIG1pZ2h0IG5vdCBiZSBhdCBhIGxldmVsIGluIHRoZSB3YXJuaW5nIHN0cnVjdHVyZSB3aGVyZVxuICAgIC8vIGl0IGNhbiBiZSBzZXQgZGlyZWN0bHksIGl0IG1pZ2h0IG5lZWQgdG8gYmUgdW53cmFwcGVkIGZyb20gdGhlIF93YXJuaW5nIHByb3BlcnR5XG4gICAgcmV0dXJuIHdhcm5pbmcgJiYgd2FybmluZy5fd2FybmluZyA/IHdhcm5pbmcuX3dhcm5pbmcgOiB3YXJuaW5nO1xuICB9O1xuXG4gIHZhciBDb25uZWN0ZWRGaWVsZCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKENvbm5lY3RlZEZpZWxkLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIENvbm5lY3RlZEZpZWxkKCkge1xuICAgICAgdmFyIF9yZWY7XG5cbiAgICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb25uZWN0ZWRGaWVsZCk7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBDb25uZWN0ZWRGaWVsZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbm5lY3RlZEZpZWxkKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc2F2ZVJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlZiA9IHJlZjtcbiAgICAgIH0sIF90aGlzLmlzUHJpc3RpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5wcmlzdGluZTtcbiAgICAgIH0sIF90aGlzLmdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMucHJvcHMudmFsdWU7XG4gICAgICB9LCBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBuYW1lID0gX3RoaXMkcHJvcHMubmFtZSxcbiAgICAgICAgICAgIGRpc3BhdGNoID0gX3RoaXMkcHJvcHMuZGlzcGF0Y2gsXG4gICAgICAgICAgICBwYXJzZSA9IF90aGlzJHByb3BzLnBhcnNlLFxuICAgICAgICAgICAgbm9ybWFsaXplID0gX3RoaXMkcHJvcHMubm9ybWFsaXplLFxuICAgICAgICAgICAgb25DaGFuZ2UgPSBfdGhpcyRwcm9wcy5vbkNoYW5nZSxcbiAgICAgICAgICAgIF9yZWR1eEZvcm0gPSBfdGhpcyRwcm9wcy5fcmVkdXhGb3JtLFxuICAgICAgICAgICAgcHJldmlvdXNWYWx1ZSA9IF90aGlzJHByb3BzLnZhbHVlO1xuXG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IG9uQ2hhbmdlVmFsdWUoZXZlbnQsIHsgbmFtZTogbmFtZSwgcGFyc2U6IHBhcnNlLCBub3JtYWxpemU6IG5vcm1hbGl6ZSB9KTtcblxuICAgICAgICB2YXIgZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlO1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZShfZXh0ZW5kcyh7fSwgZXZlbnQsIHtcbiAgICAgICAgICAgIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHJldHVybiBldmVudFByZXZlbnREZWZhdWx0KGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSwgbmV3VmFsdWUsIHByZXZpb3VzVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIC8vIGRpc3BhdGNoIGNoYW5nZSBhY3Rpb25cbiAgICAgICAgICBkaXNwYXRjaChfcmVkdXhGb3JtLmNoYW5nZShuYW1lLCBuZXdWYWx1ZSkpO1xuICAgICAgICB9XG4gICAgICB9LCBfdGhpcy5oYW5kbGVGb2N1cyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBuYW1lID0gX3RoaXMkcHJvcHMyLm5hbWUsXG4gICAgICAgICAgICBkaXNwYXRjaCA9IF90aGlzJHByb3BzMi5kaXNwYXRjaCxcbiAgICAgICAgICAgIG9uRm9jdXMgPSBfdGhpcyRwcm9wczIub25Gb2N1cyxcbiAgICAgICAgICAgIF9yZWR1eEZvcm0gPSBfdGhpcyRwcm9wczIuX3JlZHV4Rm9ybTtcblxuXG4gICAgICAgIHZhciBkZWZhdWx0UHJldmVudGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChvbkZvY3VzKSB7XG4gICAgICAgICAgb25Gb2N1cyhfZXh0ZW5kcyh7fSwgZXZlbnQsIHtcbiAgICAgICAgICAgIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHJldHVybiBldmVudFByZXZlbnREZWZhdWx0KGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICBkaXNwYXRjaChfcmVkdXhGb3JtLmZvY3VzKG5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgfSwgX3RoaXMuaGFuZGxlQmx1ciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBuYW1lID0gX3RoaXMkcHJvcHMzLm5hbWUsXG4gICAgICAgICAgICBkaXNwYXRjaCA9IF90aGlzJHByb3BzMy5kaXNwYXRjaCxcbiAgICAgICAgICAgIHBhcnNlID0gX3RoaXMkcHJvcHMzLnBhcnNlLFxuICAgICAgICAgICAgbm9ybWFsaXplID0gX3RoaXMkcHJvcHMzLm5vcm1hbGl6ZSxcbiAgICAgICAgICAgIG9uQmx1ciA9IF90aGlzJHByb3BzMy5vbkJsdXIsXG4gICAgICAgICAgICBfcmVkdXhGb3JtID0gX3RoaXMkcHJvcHMzLl9yZWR1eEZvcm0sXG4gICAgICAgICAgICBfdmFsdWUgPSBfdGhpcyRwcm9wczMuX3ZhbHVlLFxuICAgICAgICAgICAgcHJldmlvdXNWYWx1ZSA9IF90aGlzJHByb3BzMy52YWx1ZTtcblxuICAgICAgICB2YXIgbmV3VmFsdWUgPSBvbkNoYW5nZVZhbHVlKGV2ZW50LCB7IG5hbWU6IG5hbWUsIHBhcnNlOiBwYXJzZSwgbm9ybWFsaXplOiBub3JtYWxpemUgfSk7XG5cbiAgICAgICAgLy8gZm9yIGNoZWNrYm94IGFuZCByYWRpbywgaWYgdGhlIHZhbHVlIHByb3BlcnR5IG9mIGNoZWNrYm94IG9yIHJhZGlvIGVxdWFsc1xuICAgICAgICAvLyB0aGUgdmFsdWUgcGFzc2VkIGJ5IGJsdXIgZXZlbnQsIHRoZW4gZmlyZSBibHVyIGFjdGlvbiB3aXRoIHByZXZpb3VzVmFsdWUuXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gX3ZhbHVlICYmIF92YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBwcmV2aW91c1ZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKG9uQmx1cikge1xuICAgICAgICAgIG9uQmx1cihfZXh0ZW5kcyh7fSwgZXZlbnQsIHtcbiAgICAgICAgICAgIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHJldHVybiBldmVudFByZXZlbnREZWZhdWx0KGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSwgbmV3VmFsdWUsIHByZXZpb3VzVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgLy8gZGlzcGF0Y2ggYmx1ciBhY3Rpb25cbiAgICAgICAgICBkaXNwYXRjaChfcmVkdXhGb3JtLmJsdXIobmFtZSwgbmV3VmFsdWUpKTtcblxuICAgICAgICAgIC8vIGNhbGwgcG9zdC1ibHVyIGNhbGxiYWNrXG4gICAgICAgICAgaWYgKF9yZWR1eEZvcm0uYXN5bmNWYWxpZGF0ZSkge1xuICAgICAgICAgICAgX3JlZHV4Rm9ybS5hc3luY1ZhbGlkYXRlKG5hbWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIF90aGlzLmhhbmRsZURyYWdTdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBvbkRyYWdTdGFydCA9IF90aGlzJHByb3BzNC5vbkRyYWdTdGFydCxcbiAgICAgICAgICAgIHZhbHVlID0gX3RoaXMkcHJvcHM0LnZhbHVlO1xuXG4gICAgICAgIGV2ZW50RGF0YVRyYW5zZmVyU2V0RGF0YShldmVudCwgZGF0YUtleSwgdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWUpO1xuXG4gICAgICAgIGlmIChvbkRyYWdTdGFydCkge1xuICAgICAgICAgIG9uRHJhZ1N0YXJ0KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSwgX3RoaXMuaGFuZGxlRHJvcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBuYW1lID0gX3RoaXMkcHJvcHM1Lm5hbWUsXG4gICAgICAgICAgICBkaXNwYXRjaCA9IF90aGlzJHByb3BzNS5kaXNwYXRjaCxcbiAgICAgICAgICAgIG9uRHJvcCA9IF90aGlzJHByb3BzNS5vbkRyb3AsXG4gICAgICAgICAgICBfcmVkdXhGb3JtID0gX3RoaXMkcHJvcHM1Ll9yZWR1eEZvcm0sXG4gICAgICAgICAgICBwcmV2aW91c1ZhbHVlID0gX3RoaXMkcHJvcHM1LnZhbHVlO1xuXG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IGV2ZW50RGF0YVRyYW5zZmVyR2V0RGF0YShldmVudCwgZGF0YUtleSk7XG5cbiAgICAgICAgdmFyIGRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKG9uRHJvcCkge1xuICAgICAgICAgIG9uRHJvcChfZXh0ZW5kcyh7fSwgZXZlbnQsIHtcbiAgICAgICAgICAgIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHJldHVybiBldmVudFByZXZlbnREZWZhdWx0KGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSwgbmV3VmFsdWUsIHByZXZpb3VzVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgLy8gZGlzcGF0Y2ggY2hhbmdlIGFjdGlvblxuICAgICAgICAgIGRpc3BhdGNoKF9yZWR1eEZvcm0uY2hhbmdlKG5hbWUsIG5ld1ZhbHVlKSk7XG4gICAgICAgICAgZXZlbnRQcmV2ZW50RGVmYXVsdChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDb25uZWN0ZWRGaWVsZCwgW3tcbiAgICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgbmV4dFByb3BzS2V5cyA9IE9iamVjdC5rZXlzKG5leHRQcm9wcyk7XG4gICAgICAgIHZhciB0aGlzUHJvcHNLZXlzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcyk7XG4gICAgICAgIHJldHVybiBuZXh0UHJvcHNLZXlzLmxlbmd0aCAhPT0gdGhpc1Byb3BzS2V5cy5sZW5ndGggfHwgbmV4dFByb3BzS2V5cy5zb21lKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgcmV0dXJuICF+cHJvcHNUb05vdFVwZGF0ZUZvci5pbmRleE9mKHByb3ApICYmICFkZWVwRXF1YWwoX3RoaXMyLnByb3BzW3Byb3BdLCBuZXh0UHJvcHNbcHJvcF0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXRSZW5kZXJlZENvbXBvbmVudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UmVuZGVyZWRDb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjb21wb25lbnQgPSBfcHJvcHMuY29tcG9uZW50LFxuICAgICAgICAgICAgd2l0aFJlZiA9IF9wcm9wcy53aXRoUmVmLFxuICAgICAgICAgICAgbmFtZSA9IF9wcm9wcy5uYW1lLFxuICAgICAgICAgICAgX3JlZHV4Rm9ybSA9IF9wcm9wcy5fcmVkdXhGb3JtLFxuICAgICAgICAgICAgbm9ybWFsaXplID0gX3Byb3BzLm5vcm1hbGl6ZSxcbiAgICAgICAgICAgIG9uQmx1ciA9IF9wcm9wcy5vbkJsdXIsXG4gICAgICAgICAgICBvbkNoYW5nZSA9IF9wcm9wcy5vbkNoYW5nZSxcbiAgICAgICAgICAgIG9uRm9jdXMgPSBfcHJvcHMub25Gb2N1cyxcbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0ID0gX3Byb3BzLm9uRHJhZ1N0YXJ0LFxuICAgICAgICAgICAgb25Ecm9wID0gX3Byb3BzLm9uRHJvcCxcbiAgICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NvbXBvbmVudCcsICd3aXRoUmVmJywgJ25hbWUnLCAnX3JlZHV4Rm9ybScsICdub3JtYWxpemUnLCAnb25CbHVyJywgJ29uQ2hhbmdlJywgJ29uRm9jdXMnLCAnb25EcmFnU3RhcnQnLCAnb25Ecm9wJ10pO1xuXG4gICAgICAgIHZhciBfY3JlYXRlRmllbGRQcm9wcyA9IGNyZWF0ZUZpZWxkUHJvcHMoc3RydWN0dXJlLCBuYW1lLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgICAgIGZvcm06IF9yZWR1eEZvcm0uZm9ybSxcbiAgICAgICAgICBvbkJsdXI6IHRoaXMuaGFuZGxlQmx1cixcbiAgICAgICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgb25Ecm9wOiB0aGlzLmhhbmRsZURyb3AsXG4gICAgICAgICAgb25EcmFnU3RhcnQ6IHRoaXMuaGFuZGxlRHJhZ1N0YXJ0LFxuICAgICAgICAgIG9uRm9jdXM6IHRoaXMuaGFuZGxlRm9jdXNcbiAgICAgICAgfSkpLFxuICAgICAgICAgICAgY3VzdG9tID0gX2NyZWF0ZUZpZWxkUHJvcHMuY3VzdG9tLFxuICAgICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX2NyZWF0ZUZpZWxkUHJvcHMsIFsnY3VzdG9tJ10pO1xuXG4gICAgICAgIGlmICh3aXRoUmVmKSB7XG4gICAgICAgICAgY3VzdG9tLnJlZiA9IHRoaXMuc2F2ZVJlZjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB2YXIgaW5wdXQgPSBwcm9wcy5pbnB1dCxcbiAgICAgICAgICAgICAgbWV0YSA9IHByb3BzLm1ldGE7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAvLyBmbGF0dGVuIGlucHV0IGludG8gb3RoZXIgcHJvcHNcblxuICAgICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgX2V4dGVuZHMoe30sIGlucHV0LCBjdXN0b20pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChjb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywgY3VzdG9tKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ29ubmVjdGVkRmllbGQ7XG4gIH0oQ29tcG9uZW50KTtcblxuICBDb25uZWN0ZWRGaWVsZC5wcm9wVHlwZXMgPSB7XG4gICAgY29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gICAgcHJvcHM6IFByb3BUeXBlcy5vYmplY3RcbiAgfTtcblxuICB2YXIgY29ubmVjdG9yID0gY29ubmVjdChmdW5jdGlvbiAoc3RhdGUsIG93blByb3BzKSB7XG4gICAgdmFyIG5hbWUgPSBvd25Qcm9wcy5uYW1lLFxuICAgICAgICBfb3duUHJvcHMkX3JlZHV4Rm9ybSA9IG93blByb3BzLl9yZWR1eEZvcm0sXG4gICAgICAgIGluaXRpYWxWYWx1ZXMgPSBfb3duUHJvcHMkX3JlZHV4Rm9ybS5pbml0aWFsVmFsdWVzLFxuICAgICAgICBnZXRGb3JtU3RhdGUgPSBfb3duUHJvcHMkX3JlZHV4Rm9ybS5nZXRGb3JtU3RhdGU7XG5cbiAgICB2YXIgZm9ybVN0YXRlID0gZ2V0Rm9ybVN0YXRlKHN0YXRlKTtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gZ2V0SW4oZm9ybVN0YXRlLCAnaW5pdGlhbC4nICsgbmFtZSk7XG4gICAgdmFyIGluaXRpYWwgPSBpbml0aWFsU3RhdGUgIT09IHVuZGVmaW5lZCA/IGluaXRpYWxTdGF0ZSA6IGluaXRpYWxWYWx1ZXMgJiYgZ2V0SW4oaW5pdGlhbFZhbHVlcywgbmFtZSk7XG4gICAgdmFyIHZhbHVlID0gZ2V0SW4oZm9ybVN0YXRlLCAndmFsdWVzLicgKyBuYW1lKTtcbiAgICB2YXIgc3VibWl0dGluZyA9IGdldEluKGZvcm1TdGF0ZSwgJ3N1Ym1pdHRpbmcnKTtcbiAgICB2YXIgc3luY0Vycm9yID0gZ2V0U3luY0Vycm9yKGdldEluKGZvcm1TdGF0ZSwgJ3N5bmNFcnJvcnMnKSwgbmFtZSk7XG4gICAgdmFyIHN5bmNXYXJuaW5nID0gZ2V0U3luY1dhcm5pbmcoZ2V0SW4oZm9ybVN0YXRlLCAnc3luY1dhcm5pbmdzJyksIG5hbWUpO1xuICAgIHZhciBwcmlzdGluZSA9IGRlZXBFcXVhbCh2YWx1ZSwgaW5pdGlhbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFzeW5jRXJyb3I6IGdldEluKGZvcm1TdGF0ZSwgJ2FzeW5jRXJyb3JzLicgKyBuYW1lKSxcbiAgICAgIGFzeW5jVmFsaWRhdGluZzogZ2V0SW4oZm9ybVN0YXRlLCAnYXN5bmNWYWxpZGF0aW5nJykgPT09IG5hbWUsXG4gICAgICBkaXJ0eTogIXByaXN0aW5lLFxuICAgICAgcHJpc3RpbmU6IHByaXN0aW5lLFxuICAgICAgc3RhdGU6IGdldEluKGZvcm1TdGF0ZSwgJ2ZpZWxkcy4nICsgbmFtZSksXG4gICAgICBzdWJtaXRFcnJvcjogZ2V0SW4oZm9ybVN0YXRlLCAnc3VibWl0RXJyb3JzLicgKyBuYW1lKSxcbiAgICAgIHN1Ym1pdEZhaWxlZDogZ2V0SW4oZm9ybVN0YXRlLCAnc3VibWl0RmFpbGVkJyksXG4gICAgICBzdWJtaXR0aW5nOiBzdWJtaXR0aW5nLFxuICAgICAgc3luY0Vycm9yOiBzeW5jRXJyb3IsXG4gICAgICBzeW5jV2FybmluZzogc3luY1dhcm5pbmcsXG4gICAgICBpbml0aWFsOiBpbml0aWFsLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgX3ZhbHVlOiBvd25Qcm9wcy52YWx1ZSAvLyBzYXZlIHZhbHVlIHBhc3NlZCBpbiAoZm9yIGNoZWNrYm94ZXMpXG4gICAgfTtcbiAgfSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHsgd2l0aFJlZjogdHJ1ZSB9KTtcbiAgcmV0dXJuIGNvbm5lY3RvcihDb25uZWN0ZWRGaWVsZCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb25uZWN0ZWRGaWVsZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC1mb3JtL2VzL0Nvbm5lY3RlZEZpZWxkLmpzXG4vLyBtb2R1bGUgaWQgPSA3OTVcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCB7IENvbXBvbmVudCwgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgc3RvcmVTaGFwZSwgc3Vic2NyaXB0aW9uU2hhcGUgfSBmcm9tICcuLi91dGlscy9Qcm9wVHlwZXMnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi4vdXRpbHMvd2FybmluZyc7XG5cbnZhciBkaWRXYXJuQWJvdXRSZWNlaXZpbmdTdG9yZSA9IGZhbHNlO1xuZnVuY3Rpb24gd2FybkFib3V0UmVjZWl2aW5nU3RvcmUoKSB7XG4gIGlmIChkaWRXYXJuQWJvdXRSZWNlaXZpbmdTdG9yZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBkaWRXYXJuQWJvdXRSZWNlaXZpbmdTdG9yZSA9IHRydWU7XG5cbiAgd2FybmluZygnPFByb3ZpZGVyPiBkb2VzIG5vdCBzdXBwb3J0IGNoYW5naW5nIGBzdG9yZWAgb24gdGhlIGZseS4gJyArICdJdCBpcyBtb3N0IGxpa2VseSB0aGF0IHlvdSBzZWUgdGhpcyBlcnJvciBiZWNhdXNlIHlvdSB1cGRhdGVkIHRvICcgKyAnUmVkdXggMi54IGFuZCBSZWFjdCBSZWR1eCAyLnggd2hpY2ggbm8gbG9uZ2VyIGhvdCByZWxvYWQgcmVkdWNlcnMgJyArICdhdXRvbWF0aWNhbGx5LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtcmVkdXgvcmVsZWFzZXMvJyArICd0YWcvdjIuMC4wIGZvciB0aGUgbWlncmF0aW9uIGluc3RydWN0aW9ucy4nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb3ZpZGVyKCkge1xuICB2YXIgX1Byb3ZpZGVyJGNoaWxkQ29udGV4O1xuXG4gIHZhciBzdG9yZUtleSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ3N0b3JlJztcbiAgdmFyIHN1YktleSA9IGFyZ3VtZW50c1sxXTtcblxuICB2YXIgc3Vic2NyaXB0aW9uS2V5ID0gc3ViS2V5IHx8IHN0b3JlS2V5ICsgJ1N1YnNjcmlwdGlvbic7XG5cbiAgdmFyIFByb3ZpZGVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoUHJvdmlkZXIsIF9Db21wb25lbnQpO1xuXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgIHZhciBfcmVmO1xuXG4gICAgICByZXR1cm4gX3JlZiA9IHt9LCBfcmVmW3N0b3JlS2V5XSA9IHRoaXNbc3RvcmVLZXldLCBfcmVmW3N1YnNjcmlwdGlvbktleV0gPSBudWxsLCBfcmVmO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBQcm92aWRlcihwcm9wcywgY29udGV4dCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByb3ZpZGVyKTtcblxuICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICAgIF90aGlzW3N0b3JlS2V5XSA9IHByb3BzLnN0b3JlO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFByb3ZpZGVyO1xuICB9KENvbXBvbmVudCk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBQcm92aWRlci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIChuZXh0UHJvcHMpIHtcbiAgICAgIGlmICh0aGlzW3N0b3JlS2V5XSAhPT0gbmV4dFByb3BzLnN0b3JlKSB7XG4gICAgICAgIHdhcm5BYm91dFJlY2VpdmluZ1N0b3JlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIFByb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgICBzdG9yZTogc3RvcmVTaGFwZS5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkXG4gIH07XG4gIFByb3ZpZGVyLmNoaWxkQ29udGV4dFR5cGVzID0gKF9Qcm92aWRlciRjaGlsZENvbnRleCA9IHt9LCBfUHJvdmlkZXIkY2hpbGRDb250ZXhbc3RvcmVLZXldID0gc3RvcmVTaGFwZS5pc1JlcXVpcmVkLCBfUHJvdmlkZXIkY2hpbGRDb250ZXhbc3Vic2NyaXB0aW9uS2V5XSA9IHN1YnNjcmlwdGlvblNoYXBlLCBfUHJvdmlkZXIkY2hpbGRDb250ZXgpO1xuXG4gIHJldHVybiBQcm92aWRlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvdmlkZXIoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb21wb25lbnRzL1Byb3ZpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA3OTZcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgY3JlYXRlRmllbGRQcm9wcyBmcm9tICcuL2NyZWF0ZUZpZWxkUHJvcHMnO1xuaW1wb3J0IHBsYWluIGZyb20gJy4vc3RydWN0dXJlL3BsYWluJztcbmltcG9ydCBvbkNoYW5nZVZhbHVlIGZyb20gJy4vZXZlbnRzL29uQ2hhbmdlVmFsdWUnO1xuXG5cbnZhciBwcm9wc1RvTm90VXBkYXRlRm9yID0gWydfcmVkdXhGb3JtJ107XG5cbnZhciBjcmVhdGVDb25uZWN0ZWRGaWVsZHMgPSBmdW5jdGlvbiBjcmVhdGVDb25uZWN0ZWRGaWVsZHMoc3RydWN0dXJlKSB7XG4gIHZhciBkZWVwRXF1YWwgPSBzdHJ1Y3R1cmUuZGVlcEVxdWFsLFxuICAgICAgZ2V0SW4gPSBzdHJ1Y3R1cmUuZ2V0SW4sXG4gICAgICBzaXplID0gc3RydWN0dXJlLnNpemU7XG5cblxuICB2YXIgZ2V0U3luY0Vycm9yID0gZnVuY3Rpb24gZ2V0U3luY0Vycm9yKHN5bmNFcnJvcnMsIG5hbWUpIHtcbiAgICAvLyBCZWNhdXNlIHRoZSBlcnJvciBmb3IgdGhpcyBmaWVsZCBtaWdodCBub3QgYmUgYXQgYSBsZXZlbCBpbiB0aGUgZXJyb3Igc3RydWN0dXJlIHdoZXJlXG4gICAgLy8gaXQgY2FuIGJlIHNldCBkaXJlY3RseSwgaXQgbWlnaHQgbmVlZCB0byBiZSB1bndyYXBwZWQgZnJvbSB0aGUgX2Vycm9yIHByb3BlcnR5XG4gICAgcmV0dXJuIHBsYWluLmdldEluKHN5bmNFcnJvcnMsIG5hbWUgKyAnLl9lcnJvcicpIHx8IHBsYWluLmdldEluKHN5bmNFcnJvcnMsIG5hbWUpO1xuICB9O1xuXG4gIHZhciBnZXRTeW5jV2FybmluZyA9IGZ1bmN0aW9uIGdldFN5bmNXYXJuaW5nKHN5bmNXYXJuaW5ncywgbmFtZSkge1xuICAgIHZhciB3YXJuaW5nID0gZ2V0SW4oc3luY1dhcm5pbmdzLCBuYW1lKTtcbiAgICAvLyBCZWNhdXNlIHRoZSB3YXJuaW5nIGZvciB0aGlzIGZpZWxkIG1pZ2h0IG5vdCBiZSBhdCBhIGxldmVsIGluIHRoZSB3YXJuaW5nIHN0cnVjdHVyZSB3aGVyZVxuICAgIC8vIGl0IGNhbiBiZSBzZXQgZGlyZWN0bHksIGl0IG1pZ2h0IG5lZWQgdG8gYmUgdW53cmFwcGVkIGZyb20gdGhlIF93YXJuaW5nIHByb3BlcnR5XG4gICAgcmV0dXJuIHdhcm5pbmcgJiYgd2FybmluZy5fd2FybmluZyA/IHdhcm5pbmcuX3dhcm5pbmcgOiB3YXJuaW5nO1xuICB9O1xuXG4gIHZhciBDb25uZWN0ZWRGaWVsZHMgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhDb25uZWN0ZWRGaWVsZHMsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQ29ubmVjdGVkRmllbGRzKHByb3BzKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29ubmVjdGVkRmllbGRzKTtcblxuICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENvbm5lY3RlZEZpZWxkcy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbm5lY3RlZEZpZWxkcykpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgX3RoaXMub25DaGFuZ2VGbnMgPSB7fTtcbiAgICAgIF90aGlzLm9uRm9jdXNGbnMgPSB7fTtcbiAgICAgIF90aGlzLm9uQmx1ckZucyA9IHt9O1xuXG4gICAgICBfdGhpcy5wcmVwYXJlRXZlbnRIYW5kbGVycyA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBuYW1lcyA9IF9yZWYubmFtZXM7XG4gICAgICAgIHJldHVybiBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgX3RoaXMub25DaGFuZ2VGbnNbbmFtZV0gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVDaGFuZ2UobmFtZSwgZXZlbnQpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgX3RoaXMub25Gb2N1c0Zuc1tuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVGb2N1cyhuYW1lKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIF90aGlzLm9uQmx1ckZuc1tuYW1lXSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUJsdXIobmFtZSwgZXZlbnQpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKG5hbWUsIGV2ZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgZGlzcGF0Y2ggPSBfdGhpcyRwcm9wcy5kaXNwYXRjaCxcbiAgICAgICAgICAgIHBhcnNlID0gX3RoaXMkcHJvcHMucGFyc2UsXG4gICAgICAgICAgICBfcmVkdXhGb3JtID0gX3RoaXMkcHJvcHMuX3JlZHV4Rm9ybTtcblxuICAgICAgICB2YXIgdmFsdWUgPSBvbkNoYW5nZVZhbHVlKGV2ZW50LCB7IG5hbWU6IG5hbWUsIHBhcnNlOiBwYXJzZSB9KTtcblxuICAgICAgICBkaXNwYXRjaChfcmVkdXhGb3JtLmNoYW5nZShuYW1lLCB2YWx1ZSkpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuaGFuZGxlRm9jdXMgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBkaXNwYXRjaCA9IF90aGlzJHByb3BzMi5kaXNwYXRjaCxcbiAgICAgICAgICAgIF9yZWR1eEZvcm0gPSBfdGhpcyRwcm9wczIuX3JlZHV4Rm9ybTtcblxuICAgICAgICBkaXNwYXRjaChfcmVkdXhGb3JtLmZvY3VzKG5hbWUpKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmhhbmRsZUJsdXIgPSBmdW5jdGlvbiAobmFtZSwgZXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgZGlzcGF0Y2ggPSBfdGhpcyRwcm9wczMuZGlzcGF0Y2gsXG4gICAgICAgICAgICBwYXJzZSA9IF90aGlzJHByb3BzMy5wYXJzZSxcbiAgICAgICAgICAgIF9yZWR1eEZvcm0gPSBfdGhpcyRwcm9wczMuX3JlZHV4Rm9ybTtcblxuICAgICAgICB2YXIgdmFsdWUgPSBvbkNoYW5nZVZhbHVlKGV2ZW50LCB7IG5hbWU6IG5hbWUsIHBhcnNlOiBwYXJzZSB9KTtcblxuICAgICAgICAvLyBkaXNwYXRjaCBibHVyIGFjdGlvblxuICAgICAgICBkaXNwYXRjaChfcmVkdXhGb3JtLmJsdXIobmFtZSwgdmFsdWUpKTtcblxuICAgICAgICAvLyBjYWxsIHBvc3QtYmx1ciBjYWxsYmFja1xuICAgICAgICBpZiAoX3JlZHV4Rm9ybS5hc3luY1ZhbGlkYXRlKSB7XG4gICAgICAgICAgX3JlZHV4Rm9ybS5hc3luY1ZhbGlkYXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMucHJlcGFyZUV2ZW50SGFuZGxlcnMocHJvcHMpO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDb25uZWN0ZWRGaWVsZHMsIFt7XG4gICAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5uYW1lcyAhPT0gbmV4dFByb3BzLm5hbWVzICYmIChzaXplKHRoaXMucHJvcHMubmFtZXMpICE9PSBzaXplKG5leHRQcm9wcy5uYW1lcykgfHwgbmV4dFByb3BzLm5hbWVzLnNvbWUoZnVuY3Rpb24gKG5leHROYW1lKSB7XG4gICAgICAgICAgcmV0dXJuICFfdGhpczIucHJvcHMuX2ZpZWxkc1tuZXh0TmFtZV07XG4gICAgICAgIH0pKSkge1xuICAgICAgICAgIC8vIG5hbWVzIGhhcyBjaGFuZ2VkLiBUaGUgY2FjaGVkIGV2ZW50IGhhbmRsZXJzIG5lZWQgdG8gYmUgdXBkYXRlZFxuICAgICAgICAgIHRoaXMucHJlcGFyZUV2ZW50SGFuZGxlcnMobmV4dFByb3BzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICB2YXIgbmV4dFByb3BzS2V5cyA9IE9iamVjdC5rZXlzKG5leHRQcm9wcyk7XG4gICAgICAgIHZhciB0aGlzUHJvcHNLZXlzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcyk7XG4gICAgICAgIHJldHVybiBuZXh0UHJvcHNLZXlzLmxlbmd0aCAhPT0gdGhpc1Byb3BzS2V5cy5sZW5ndGggfHwgbmV4dFByb3BzS2V5cy5zb21lKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgcmV0dXJuICF+cHJvcHNUb05vdFVwZGF0ZUZvci5pbmRleE9mKHByb3ApICYmICFkZWVwRXF1YWwoX3RoaXMzLnByb3BzW3Byb3BdLCBuZXh0UHJvcHNbcHJvcF0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdpc0RpcnR5JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0RpcnR5KCkge1xuICAgICAgICB2YXIgX2ZpZWxkcyA9IHRoaXMucHJvcHMuX2ZpZWxkcztcblxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoX2ZpZWxkcykuc29tZShmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgIHJldHVybiBfZmllbGRzW25hbWVdLmRpcnR5O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXRWYWx1ZXMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlcygpIHtcbiAgICAgICAgdmFyIF9maWVsZHMgPSB0aGlzLnByb3BzLl9maWVsZHM7XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKF9maWVsZHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gcGxhaW4uc2V0SW4oYWNjdW11bGF0b3IsIG5hbWUsIF9maWVsZHNbbmFtZV0udmFsdWUpO1xuICAgICAgICB9LCB7fSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0UmVuZGVyZWRDb21wb25lbnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJlbmRlcmVkQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZzLnJlbmRlcmVkQ29tcG9uZW50O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IF9wcm9wcy5jb21wb25lbnQsXG4gICAgICAgICAgICB3aXRoUmVmID0gX3Byb3BzLndpdGhSZWYsXG4gICAgICAgICAgICBfZmllbGRzID0gX3Byb3BzLl9maWVsZHMsXG4gICAgICAgICAgICBfcmVkdXhGb3JtID0gX3Byb3BzLl9yZWR1eEZvcm0sXG4gICAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydjb21wb25lbnQnLCAnd2l0aFJlZicsICdfZmllbGRzJywgJ19yZWR1eEZvcm0nXSk7XG5cbiAgICAgICAgdmFyIHNlY3Rpb25QcmVmaXggPSBfcmVkdXhGb3JtLnNlY3Rpb25QcmVmaXgsXG4gICAgICAgICAgICBmb3JtID0gX3JlZHV4Rm9ybS5mb3JtO1xuXG4gICAgICAgIHZhciBfT2JqZWN0JGtleXMkcmVkdWNlID0gT2JqZWN0LmtleXMoX2ZpZWxkcykucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgbmFtZSkge1xuICAgICAgICAgIHZhciBjb25uZWN0ZWRQcm9wcyA9IF9maWVsZHNbbmFtZV07XG5cbiAgICAgICAgICB2YXIgX2NyZWF0ZUZpZWxkUHJvcHMgPSBjcmVhdGVGaWVsZFByb3BzKHN0cnVjdHVyZSwgbmFtZSwgX2V4dGVuZHMoe30sIGNvbm5lY3RlZFByb3BzLCByZXN0LCB7XG4gICAgICAgICAgICBmb3JtOiBmb3JtLFxuICAgICAgICAgICAgb25CbHVyOiBfdGhpczQub25CbHVyRm5zW25hbWVdLFxuICAgICAgICAgICAgb25DaGFuZ2U6IF90aGlzNC5vbkNoYW5nZUZuc1tuYW1lXSxcbiAgICAgICAgICAgIG9uRm9jdXM6IF90aGlzNC5vbkZvY3VzRm5zW25hbWVdXG4gICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICBjdXN0b20gPSBfY3JlYXRlRmllbGRQcm9wcy5jdXN0b20sXG4gICAgICAgICAgICAgIGZpZWxkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX2NyZWF0ZUZpZWxkUHJvcHMsIFsnY3VzdG9tJ10pO1xuXG4gICAgICAgICAgYWNjdW11bGF0b3IuY3VzdG9tID0gY3VzdG9tO1xuICAgICAgICAgIHZhciBmaWVsZE5hbWUgPSBzZWN0aW9uUHJlZml4ID8gbmFtZS5yZXBsYWNlKHNlY3Rpb25QcmVmaXggKyAnLicsICcnKSA6IG5hbWU7XG4gICAgICAgICAgcmV0dXJuIHBsYWluLnNldEluKGFjY3VtdWxhdG9yLCBmaWVsZE5hbWUsIGZpZWxkUHJvcHMpO1xuICAgICAgICB9LCB7fSksXG4gICAgICAgICAgICBjdXN0b20gPSBfT2JqZWN0JGtleXMkcmVkdWNlLmN1c3RvbSxcbiAgICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9PYmplY3Qka2V5cyRyZWR1Y2UsIFsnY3VzdG9tJ10pO1xuXG4gICAgICAgIGlmICh3aXRoUmVmKSB7XG4gICAgICAgICAgcHJvcHMucmVmID0gJ3JlbmRlcmVkQ29tcG9uZW50JztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgX2V4dGVuZHMoe30sIHByb3BzLCBjdXN0b20pKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ29ubmVjdGVkRmllbGRzO1xuICB9KENvbXBvbmVudCk7XG5cbiAgQ29ubmVjdGVkRmllbGRzLnByb3BUeXBlcyA9IHtcbiAgICBjb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuc3RyaW5nXSkuaXNSZXF1aXJlZCxcbiAgICBfZmllbGRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgcHJvcHM6IFByb3BUeXBlcy5vYmplY3RcbiAgfTtcblxuICB2YXIgY29ubmVjdG9yID0gY29ubmVjdChmdW5jdGlvbiAoc3RhdGUsIG93blByb3BzKSB7XG4gICAgdmFyIG5hbWVzID0gb3duUHJvcHMubmFtZXMsXG4gICAgICAgIF9vd25Qcm9wcyRfcmVkdXhGb3JtID0gb3duUHJvcHMuX3JlZHV4Rm9ybSxcbiAgICAgICAgaW5pdGlhbFZhbHVlcyA9IF9vd25Qcm9wcyRfcmVkdXhGb3JtLmluaXRpYWxWYWx1ZXMsXG4gICAgICAgIGdldEZvcm1TdGF0ZSA9IF9vd25Qcm9wcyRfcmVkdXhGb3JtLmdldEZvcm1TdGF0ZTtcblxuICAgIHZhciBmb3JtU3RhdGUgPSBnZXRGb3JtU3RhdGUoc3RhdGUpO1xuICAgIHJldHVybiB7XG4gICAgICBfZmllbGRzOiBuYW1lcy5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBuYW1lKSB7XG4gICAgICAgIHZhciBpbml0aWFsU3RhdGUgPSBnZXRJbihmb3JtU3RhdGUsICdpbml0aWFsLicgKyBuYW1lKTtcbiAgICAgICAgdmFyIGluaXRpYWwgPSBpbml0aWFsU3RhdGUgIT09IHVuZGVmaW5lZCA/IGluaXRpYWxTdGF0ZSA6IGluaXRpYWxWYWx1ZXMgJiYgZ2V0SW4oaW5pdGlhbFZhbHVlcywgbmFtZSk7XG4gICAgICAgIHZhciB2YWx1ZSA9IGdldEluKGZvcm1TdGF0ZSwgJ3ZhbHVlcy4nICsgbmFtZSk7XG4gICAgICAgIHZhciBzeW5jRXJyb3IgPSBnZXRTeW5jRXJyb3IoZ2V0SW4oZm9ybVN0YXRlLCAnc3luY0Vycm9ycycpLCBuYW1lKTtcbiAgICAgICAgdmFyIHN5bmNXYXJuaW5nID0gZ2V0U3luY1dhcm5pbmcoZ2V0SW4oZm9ybVN0YXRlLCAnc3luY1dhcm5pbmdzJyksIG5hbWUpO1xuICAgICAgICB2YXIgc3VibWl0dGluZyA9IGdldEluKGZvcm1TdGF0ZSwgJ3N1Ym1pdHRpbmcnKTtcbiAgICAgICAgdmFyIHByaXN0aW5lID0gdmFsdWUgPT09IGluaXRpYWw7XG4gICAgICAgIGFjY3VtdWxhdG9yW25hbWVdID0ge1xuICAgICAgICAgIGFzeW5jRXJyb3I6IGdldEluKGZvcm1TdGF0ZSwgJ2FzeW5jRXJyb3JzLicgKyBuYW1lKSxcbiAgICAgICAgICBhc3luY1ZhbGlkYXRpbmc6IGdldEluKGZvcm1TdGF0ZSwgJ2FzeW5jVmFsaWRhdGluZycpID09PSBuYW1lLFxuICAgICAgICAgIGRpcnR5OiAhcHJpc3RpbmUsXG4gICAgICAgICAgaW5pdGlhbDogaW5pdGlhbCxcbiAgICAgICAgICBwcmlzdGluZTogcHJpc3RpbmUsXG4gICAgICAgICAgc3RhdGU6IGdldEluKGZvcm1TdGF0ZSwgJ2ZpZWxkcy4nICsgbmFtZSksXG4gICAgICAgICAgc3VibWl0RXJyb3I6IGdldEluKGZvcm1TdGF0ZSwgJ3N1Ym1pdEVycm9ycy4nICsgbmFtZSksXG4gICAgICAgICAgc3VibWl0RmFpbGVkOiBnZXRJbihmb3JtU3RhdGUsICdzdWJtaXRGYWlsZWQnKSxcbiAgICAgICAgICBzdWJtaXR0aW5nOiBzdWJtaXR0aW5nLFxuICAgICAgICAgIHN5bmNFcnJvcjogc3luY0Vycm9yLFxuICAgICAgICAgIHN5bmNXYXJuaW5nOiBzeW5jV2FybmluZyxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgX3ZhbHVlOiBvd25Qcm9wcy52YWx1ZSAvLyBzYXZlIHZhbHVlIHBhc3NlZCBpbiAoZm9yIGNoZWNrYm94ZXMpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgIH0sIHt9KVxuICAgIH07XG4gIH0sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB7IHdpdGhSZWY6IHRydWUgfSk7XG4gIHJldHVybiBjb25uZWN0b3IoQ29ubmVjdGVkRmllbGRzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbm5lY3RlZEZpZWxkcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC1mb3JtL2VzL0Nvbm5lY3RlZEZpZWxkcy5qc1xuLy8gbW9kdWxlIGlkID0gODc0XG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IiwiaW1wb3J0IF9tYXBWYWx1ZXMgZnJvbSAnbG9kYXNoLWVzL21hcFZhbHVlcyc7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBjcmVhdGVGaWVsZEFycmF5UHJvcHMgZnJvbSAnLi9jcmVhdGVGaWVsZEFycmF5UHJvcHMnO1xuXG5pbXBvcnQgcGxhaW4gZnJvbSAnLi9zdHJ1Y3R1cmUvcGxhaW4nO1xuXG5cbnZhciBwcm9wc1RvTm90VXBkYXRlRm9yID0gWydfcmVkdXhGb3JtJywgJ3ZhbHVlJ107XG5cbnZhciBjcmVhdGVDb25uZWN0ZWRGaWVsZEFycmF5ID0gZnVuY3Rpb24gY3JlYXRlQ29ubmVjdGVkRmllbGRBcnJheShzdHJ1Y3R1cmUpIHtcbiAgdmFyIGRlZXBFcXVhbCA9IHN0cnVjdHVyZS5kZWVwRXF1YWwsXG4gICAgICBnZXRJbiA9IHN0cnVjdHVyZS5nZXRJbixcbiAgICAgIHNpemUgPSBzdHJ1Y3R1cmUuc2l6ZTtcblxuICB2YXIgZ2V0U3luY0Vycm9yID0gZnVuY3Rpb24gZ2V0U3luY0Vycm9yKHN5bmNFcnJvcnMsIG5hbWUpIHtcbiAgICAvLyBGb3IgYW4gYXJyYXksIHRoZSBlcnJvciBjYW4gX09OTFlfIGJlIHVuZGVyIF9lcnJvci5cbiAgICAvLyBUaGlzIGlzIHdoeSB0aGlzIGdldFN5bmNFcnJvciBpcyBub3QgdGhlIHNhbWUgYXMgdGhlXG4gICAgLy8gb25lIGluIEZpZWxkLlxuICAgIHJldHVybiBwbGFpbi5nZXRJbihzeW5jRXJyb3JzLCBuYW1lICsgJy5fZXJyb3InKTtcbiAgfTtcblxuICB2YXIgZ2V0U3luY1dhcm5pbmcgPSBmdW5jdGlvbiBnZXRTeW5jV2FybmluZyhzeW5jV2FybmluZ3MsIG5hbWUpIHtcbiAgICAvLyBGb3IgYW4gYXJyYXksIHRoZSB3YXJuaW5nIGNhbiBfT05MWV8gYmUgdW5kZXIgX3dhcm5pbmcuXG4gICAgLy8gVGhpcyBpcyB3aHkgdGhpcyBnZXRTeW5jRXJyb3IgaXMgbm90IHRoZSBzYW1lIGFzIHRoZVxuICAgIC8vIG9uZSBpbiBGaWVsZC5cbiAgICByZXR1cm4gZ2V0SW4oc3luY1dhcm5pbmdzLCBuYW1lICsgJy5fd2FybmluZycpO1xuICB9O1xuXG4gIHZhciBDb25uZWN0ZWRGaWVsZEFycmF5ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQ29ubmVjdGVkRmllbGRBcnJheSwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBDb25uZWN0ZWRGaWVsZEFycmF5KCkge1xuICAgICAgdmFyIF9yZWY7XG5cbiAgICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb25uZWN0ZWRGaWVsZEFycmF5KTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IENvbm5lY3RlZEZpZWxkQXJyYXkuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb25uZWN0ZWRGaWVsZEFycmF5KSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc2F2ZVJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlZiA9IHJlZjtcbiAgICAgIH0sIF90aGlzLmdldFZhbHVlID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wcm9wcy52YWx1ZSAmJiBnZXRJbihfdGhpcy5wcm9wcy52YWx1ZSwgU3RyaW5nKGluZGV4KSk7XG4gICAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ29ubmVjdGVkRmllbGRBcnJheSwgW3tcbiAgICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAvLyBVcGRhdGUgaWYgdGhlIGVsZW1lbnRzIG9mIHRoZSB2YWx1ZSBhcnJheSB3YXMgdXBkYXRlZC5cbiAgICAgICAgdmFyIHRoaXNWYWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG4gICAgICAgIHZhciBuZXh0VmFsdWUgPSBuZXh0UHJvcHMudmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXNWYWx1ZSAmJiBuZXh0VmFsdWUpIHtcbiAgICAgICAgICBpZiAodGhpc1ZhbHVlLmxlbmd0aCAhPT0gbmV4dFZhbHVlLmxlbmd0aCB8fCBuZXh0UHJvcHMucmVyZW5kZXJPbkV2ZXJ5Q2hhbmdlICYmIHRoaXNWYWx1ZS5zb21lKGZ1bmN0aW9uICh2YWwsIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gIWRlZXBFcXVhbCh2YWwsIG5leHRWYWx1ZVtpbmRleF0pO1xuICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV4dFByb3BzS2V5cyA9IE9iamVjdC5rZXlzKG5leHRQcm9wcyk7XG4gICAgICAgIHZhciB0aGlzUHJvcHNLZXlzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcyk7XG4gICAgICAgIHJldHVybiBuZXh0UHJvcHNLZXlzLmxlbmd0aCAhPT0gdGhpc1Byb3BzS2V5cy5sZW5ndGggfHwgbmV4dFByb3BzS2V5cy5zb21lKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgLy8gdXNlZnVsIHRvIGRlYnVnIHJlcmVuZGVyc1xuICAgICAgICAgIC8vIGlmICghcGxhaW4uZGVlcEVxdWFsKHRoaXMucHJvcHNbIHByb3AgXSwgbmV4dFByb3BzWyBwcm9wIF0pKSB7XG4gICAgICAgICAgLy8gICBjb25zb2xlLmluZm8ocHJvcCwgJ2NoYW5nZWQnLCB0aGlzLnByb3BzWyBwcm9wIF0sICc9PT4nLCBuZXh0UHJvcHNbIHByb3AgXSlcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgcmV0dXJuICF+cHJvcHNUb05vdFVwZGF0ZUZvci5pbmRleE9mKHByb3ApICYmICFkZWVwRXF1YWwoX3RoaXMyLnByb3BzW3Byb3BdLCBuZXh0UHJvcHNbcHJvcF0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXRSZW5kZXJlZENvbXBvbmVudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UmVuZGVyZWRDb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjb21wb25lbnQgPSBfcHJvcHMuY29tcG9uZW50LFxuICAgICAgICAgICAgd2l0aFJlZiA9IF9wcm9wcy53aXRoUmVmLFxuICAgICAgICAgICAgbmFtZSA9IF9wcm9wcy5uYW1lLFxuICAgICAgICAgICAgX3JlZHV4Rm9ybSA9IF9wcm9wcy5fcmVkdXhGb3JtLFxuICAgICAgICAgICAgdmFsaWRhdGUgPSBfcHJvcHMudmFsaWRhdGUsXG4gICAgICAgICAgICB3YXJuID0gX3Byb3BzLndhcm4sXG4gICAgICAgICAgICByZXJlbmRlck9uRXZlcnlDaGFuZ2UgPSBfcHJvcHMucmVyZW5kZXJPbkV2ZXJ5Q2hhbmdlLFxuICAgICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY29tcG9uZW50JywgJ3dpdGhSZWYnLCAnbmFtZScsICdfcmVkdXhGb3JtJywgJ3ZhbGlkYXRlJywgJ3dhcm4nLCAncmVyZW5kZXJPbkV2ZXJ5Q2hhbmdlJ10pO1xuXG4gICAgICAgIHZhciBwcm9wcyA9IGNyZWF0ZUZpZWxkQXJyYXlQcm9wcyhzdHJ1Y3R1cmUsIG5hbWUsIF9yZWR1eEZvcm0uZm9ybSwgX3JlZHV4Rm9ybS5zZWN0aW9uUHJlZml4LCB0aGlzLmdldFZhbHVlLCByZXN0KTtcbiAgICAgICAgaWYgKHdpdGhSZWYpIHtcbiAgICAgICAgICBwcm9wcy5yZWYgPSB0aGlzLnNhdmVSZWY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZGlydHknLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmRpcnR5O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3ByaXN0aW5lJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5wcmlzdGluZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICd2YWx1ZScsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudmFsdWU7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENvbm5lY3RlZEZpZWxkQXJyYXk7XG4gIH0oQ29tcG9uZW50KTtcblxuICBDb25uZWN0ZWRGaWVsZEFycmF5LnByb3BUeXBlcyA9IHtcbiAgICBjb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuc3RyaW5nXSkuaXNSZXF1aXJlZCxcbiAgICBwcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICByZXJlbmRlck9uRXZlcnlDaGFuZ2U6IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgQ29ubmVjdGVkRmllbGRBcnJheS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcmVyZW5kZXJPbkV2ZXJ5Q2hhbmdlOiBmYWxzZVxuICB9O1xuXG4gIENvbm5lY3RlZEZpZWxkQXJyYXkuY29udGV4dFR5cGVzID0ge1xuICAgIF9yZWR1eEZvcm06IFByb3BUeXBlcy5vYmplY3RcbiAgfTtcblxuICB2YXIgY29ubmVjdG9yID0gY29ubmVjdChmdW5jdGlvbiAoc3RhdGUsIG93blByb3BzKSB7XG4gICAgdmFyIG5hbWUgPSBvd25Qcm9wcy5uYW1lLFxuICAgICAgICBfb3duUHJvcHMkX3JlZHV4Rm9ybSA9IG93blByb3BzLl9yZWR1eEZvcm0sXG4gICAgICAgIGluaXRpYWxWYWx1ZXMgPSBfb3duUHJvcHMkX3JlZHV4Rm9ybS5pbml0aWFsVmFsdWVzLFxuICAgICAgICBnZXRGb3JtU3RhdGUgPSBfb3duUHJvcHMkX3JlZHV4Rm9ybS5nZXRGb3JtU3RhdGU7XG5cbiAgICB2YXIgZm9ybVN0YXRlID0gZ2V0Rm9ybVN0YXRlKHN0YXRlKTtcbiAgICB2YXIgaW5pdGlhbCA9IGdldEluKGZvcm1TdGF0ZSwgJ2luaXRpYWwuJyArIG5hbWUpIHx8IGluaXRpYWxWYWx1ZXMgJiYgZ2V0SW4oaW5pdGlhbFZhbHVlcywgbmFtZSk7XG4gICAgdmFyIHZhbHVlID0gZ2V0SW4oZm9ybVN0YXRlLCAndmFsdWVzLicgKyBuYW1lKTtcbiAgICB2YXIgc3VibWl0dGluZyA9IGdldEluKGZvcm1TdGF0ZSwgJ3N1Ym1pdHRpbmcnKTtcbiAgICB2YXIgc3luY0Vycm9yID0gZ2V0U3luY0Vycm9yKGdldEluKGZvcm1TdGF0ZSwgJ3N5bmNFcnJvcnMnKSwgbmFtZSk7XG4gICAgdmFyIHN5bmNXYXJuaW5nID0gZ2V0U3luY1dhcm5pbmcoZ2V0SW4oZm9ybVN0YXRlLCAnc3luY1dhcm5pbmdzJyksIG5hbWUpO1xuICAgIHZhciBwcmlzdGluZSA9IGRlZXBFcXVhbCh2YWx1ZSwgaW5pdGlhbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFzeW5jRXJyb3I6IGdldEluKGZvcm1TdGF0ZSwgJ2FzeW5jRXJyb3JzLicgKyBuYW1lICsgJy5fZXJyb3InKSxcbiAgICAgIGRpcnR5OiAhcHJpc3RpbmUsXG4gICAgICBwcmlzdGluZTogcHJpc3RpbmUsXG4gICAgICBzdGF0ZTogZ2V0SW4oZm9ybVN0YXRlLCAnZmllbGRzLicgKyBuYW1lKSxcbiAgICAgIHN1Ym1pdEVycm9yOiBnZXRJbihmb3JtU3RhdGUsICdzdWJtaXRFcnJvcnMuJyArIG5hbWUgKyAnLl9lcnJvcicpLFxuICAgICAgc3VibWl0RmFpbGVkOiBnZXRJbihmb3JtU3RhdGUsICdzdWJtaXRGYWlsZWQnKSxcbiAgICAgIHN1Ym1pdHRpbmc6IHN1Ym1pdHRpbmcsXG4gICAgICBzeW5jRXJyb3I6IHN5bmNFcnJvcixcbiAgICAgIHN5bmNXYXJuaW5nOiBzeW5jV2FybmluZyxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGxlbmd0aDogc2l6ZSh2YWx1ZSlcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAoZGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgdmFyIG5hbWUgPSBvd25Qcm9wcy5uYW1lLFxuICAgICAgICBfcmVkdXhGb3JtID0gb3duUHJvcHMuX3JlZHV4Rm9ybTtcbiAgICB2YXIgYXJyYXlJbnNlcnQgPSBfcmVkdXhGb3JtLmFycmF5SW5zZXJ0LFxuICAgICAgICBhcnJheU1vdmUgPSBfcmVkdXhGb3JtLmFycmF5TW92ZSxcbiAgICAgICAgYXJyYXlQb3AgPSBfcmVkdXhGb3JtLmFycmF5UG9wLFxuICAgICAgICBhcnJheVB1c2ggPSBfcmVkdXhGb3JtLmFycmF5UHVzaCxcbiAgICAgICAgYXJyYXlSZW1vdmUgPSBfcmVkdXhGb3JtLmFycmF5UmVtb3ZlLFxuICAgICAgICBhcnJheVJlbW92ZUFsbCA9IF9yZWR1eEZvcm0uYXJyYXlSZW1vdmVBbGwsXG4gICAgICAgIGFycmF5U2hpZnQgPSBfcmVkdXhGb3JtLmFycmF5U2hpZnQsXG4gICAgICAgIGFycmF5U3BsaWNlID0gX3JlZHV4Rm9ybS5hcnJheVNwbGljZSxcbiAgICAgICAgYXJyYXlTd2FwID0gX3JlZHV4Rm9ybS5hcnJheVN3YXAsXG4gICAgICAgIGFycmF5VW5zaGlmdCA9IF9yZWR1eEZvcm0uYXJyYXlVbnNoaWZ0O1xuXG4gICAgcmV0dXJuIF9tYXBWYWx1ZXMoe1xuICAgICAgYXJyYXlJbnNlcnQ6IGFycmF5SW5zZXJ0LFxuICAgICAgYXJyYXlNb3ZlOiBhcnJheU1vdmUsXG4gICAgICBhcnJheVBvcDogYXJyYXlQb3AsXG4gICAgICBhcnJheVB1c2g6IGFycmF5UHVzaCxcbiAgICAgIGFycmF5UmVtb3ZlOiBhcnJheVJlbW92ZSxcbiAgICAgIGFycmF5UmVtb3ZlQWxsOiBhcnJheVJlbW92ZUFsbCxcbiAgICAgIGFycmF5U2hpZnQ6IGFycmF5U2hpZnQsXG4gICAgICBhcnJheVNwbGljZTogYXJyYXlTcGxpY2UsXG4gICAgICBhcnJheVN3YXA6IGFycmF5U3dhcCxcbiAgICAgIGFycmF5VW5zaGlmdDogYXJyYXlVbnNoaWZ0XG4gICAgfSwgZnVuY3Rpb24gKGFjdGlvbkNyZWF0b3IpIHtcbiAgICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvci5iaW5kKG51bGwsIG5hbWUpLCBkaXNwYXRjaCk7XG4gICAgfSk7XG4gIH0sIHVuZGVmaW5lZCwgeyB3aXRoUmVmOiB0cnVlIH0pO1xuICByZXR1cm4gY29ubmVjdG9yKENvbm5lY3RlZEZpZWxkQXJyYXkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29ubmVjdGVkRmllbGRBcnJheTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC1mb3JtL2VzL0Nvbm5lY3RlZEZpZWxkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDg3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDUgNiIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHByZWZpeE5hbWUgZnJvbSAnLi91dGlsL3ByZWZpeE5hbWUnO1xuXG5cbnZhciBjcmVhdGVWYWx1ZXMgPSBmdW5jdGlvbiBjcmVhdGVWYWx1ZXMoX3JlZikge1xuICB2YXIgZ2V0SW4gPSBfcmVmLmdldEluO1xuICByZXR1cm4gZnVuY3Rpb24gKGZpcnN0QXJnKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICByZXN0W19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWVzTWFwID0gdm9pZCAwO1xuXG4gICAgaWYgKHR5cGVvZiBmaXJzdEFyZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlc01hcCA9IFtmaXJzdEFyZ10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShyZXN0KSkubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJvcDogayxcbiAgICAgICAgICBwYXRoOiBrXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNvbmZpZyA9IGZpcnN0QXJnO1xuICAgICAgdmFsdWVzTWFwID0gT2JqZWN0LmtleXMoY29uZmlnKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwcm9wOiBrLFxuICAgICAgICAgIHBhdGg6IGNvbmZpZ1trXVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghdmFsdWVzTWFwLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdmb3JtVmFsdWVzKCk6IFlvdSBtdXN0IHNwZWNpZnkgdmFsdWVzIHRvIGdldCBhcyBmb3JtVmFsdWVzKG5hbWUxLCBuYW1lMiwgLi4uKSBvciBmb3JtVmFsdWVzKHtwcm9wTmFtZTE6IHByb3BQYXRoMSwgLi4ufSknKTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgYSBjbGFzcyB0aGF0IHJlYWRzIGN1cnJlbnQgZm9ybSBuYW1lIGFuZCBjcmVhdGVzIGEgc2VsZWN0b3JcbiAgICAvLyByZXR1cm5cbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbXBvbmVudCkge1xuICAgICAgdmFyIEZvcm1WYWx1ZXMgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgICAgICBfaW5oZXJpdHMoRm9ybVZhbHVlcywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICAgICAgZnVuY3Rpb24gRm9ybVZhbHVlcyhwcm9wcywgY29udGV4dCkge1xuICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGb3JtVmFsdWVzKTtcblxuICAgICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChGb3JtVmFsdWVzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRm9ybVZhbHVlcykpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgICAgICAgIGlmICghY29udGV4dC5fcmVkdXhGb3JtKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Zvcm1WYWx1ZXMoKSBtdXN0IGJlIHVzZWQgaW5zaWRlIGEgUmVhY3QgdHJlZSBkZWNvcmF0ZWQgd2l0aCByZWR1eEZvcm0oKScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZm9ybVZhbHVlc1NlbGVjdG9yID0gZnVuY3Rpb24gZm9ybVZhbHVlc1NlbGVjdG9yKF8sIF9yZWYyKSB7XG4gICAgICAgICAgICB2YXIgc2VjdGlvblByZWZpeCA9IF9yZWYyLnNlY3Rpb25QcmVmaXg7XG5cbiAgICAgICAgICAgIC8vIFllcywgd2UncmUgb25seSB1c2luZyBjb25uZWN0KCkgZm9yIGxpc3RlbmluZyB0byB1cGRhdGVzLlxuICAgICAgICAgICAgLy8gVGhlIHNlY29uZCBhcmd1bWVudCBuZWVkcyB0byBiZSB0aGVyZSBzbyB0aGF0IGNvbm5lY3QgY2FsbHNcbiAgICAgICAgICAgIC8vIHRoZSBzZWxlY3RvciB3aGVuIHByb3BzIGNoYW5nZVxuICAgICAgICAgICAgdmFyIGdldFZhbHVlcyA9IF90aGlzLmNvbnRleHQuX3JlZHV4Rm9ybS5nZXRWYWx1ZXM7XG5cbiAgICAgICAgICAgIHZhciBwcm9wcyA9IHt9O1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IGdldFZhbHVlcygpO1xuICAgICAgICAgICAgdmFsdWVzTWFwLmZvckVhY2goZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgICAgICAgIHZhciBwcm9wID0gX3JlZjMucHJvcCxcbiAgICAgICAgICAgICAgICAgIHBhdGggPSBfcmVmMy5wYXRoO1xuICAgICAgICAgICAgICByZXR1cm4gcHJvcHNbcHJvcF0gPSBnZXRJbih2YWx1ZXMsIHByZWZpeE5hbWUoX3RoaXMuY29udGV4dCwgcGF0aCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBfdGhpcy5Db21wb25lbnQgPSBjb25uZWN0KGZvcm1WYWx1ZXNTZWxlY3RvciwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgIH0gLy8gaWdub3JlIGRpc3BhdGNoXG4gICAgICAgICAgKShmdW5jdGlvbiAoX3JlZjQpIHtcbiAgICAgICAgICAgIHZhciBzZWN0aW9uUHJlZml4ID0gX3JlZjQuc2VjdGlvblByZWZpeCxcbiAgICAgICAgICAgICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWY0LCBbJ3NlY3Rpb25QcmVmaXgnXSk7XG5cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgb3RoZXJQcm9wcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgX2NyZWF0ZUNsYXNzKEZvcm1WYWx1ZXMsIFt7XG4gICAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGhpcy5Db21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgICAgICAgICAgLy8gc28gdGhhdCB0aGUgY29ubmVjdGVkIGNvbXBvbmVudCB1cGRhdGVzIHByb3BzIHdoZW4gc2VjdGlvblByZWZpeCBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgICBzZWN0aW9uUHJlZml4OiB0aGlzLmNvbnRleHQuX3JlZHV4Rm9ybS5zZWN0aW9uUHJlZml4XG4gICAgICAgICAgICB9LCB0aGlzLnByb3BzKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIEZvcm1WYWx1ZXM7XG4gICAgICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgICAgIEZvcm1WYWx1ZXMuY29udGV4dFR5cGVzID0ge1xuICAgICAgICBfcmVkdXhGb3JtOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgICB9O1xuICAgICAgcmV0dXJuIEZvcm1WYWx1ZXM7XG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVZhbHVlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC1mb3JtL2VzL2NyZWF0ZUZvcm1WYWx1ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDg5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDUgNiIsImltcG9ydCBfbWVyZ2UgZnJvbSAnbG9kYXNoLWVzL21lcmdlJztcbmltcG9ydCBfbWFwVmFsdWVzIGZyb20gJ2xvZGFzaC1lcy9tYXBWYWx1ZXMnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IGhvaXN0U3RhdGljcyBmcm9tICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5pbXBvcnQgaXNQcm9taXNlIGZyb20gJ2lzLXByb21pc2UnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBpbXBvcnRlZEFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCBhc3luY1ZhbGlkYXRpb24gZnJvbSAnLi9hc3luY1ZhbGlkYXRpb24nO1xuaW1wb3J0IGRlZmF1bHRTaG91bGRBc3luY1ZhbGlkYXRlIGZyb20gJy4vZGVmYXVsdFNob3VsZEFzeW5jVmFsaWRhdGUnO1xuaW1wb3J0IGRlZmF1bHRTaG91bGRWYWxpZGF0ZSBmcm9tICcuL2RlZmF1bHRTaG91bGRWYWxpZGF0ZSc7XG5pbXBvcnQgc2lsZW5jZUV2ZW50IGZyb20gJy4vZXZlbnRzL3NpbGVuY2VFdmVudCc7XG5pbXBvcnQgc2lsZW5jZUV2ZW50cyBmcm9tICcuL2V2ZW50cy9zaWxlbmNlRXZlbnRzJztcbmltcG9ydCBnZW5lcmF0ZVZhbGlkYXRvciBmcm9tICcuL2dlbmVyYXRlVmFsaWRhdG9yJztcbmltcG9ydCBoYW5kbGVTdWJtaXQgZnJvbSAnLi9oYW5kbGVTdWJtaXQnO1xuaW1wb3J0IGNyZWF0ZUlzVmFsaWQgZnJvbSAnLi9zZWxlY3RvcnMvaXNWYWxpZCc7XG5pbXBvcnQgcGxhaW4gZnJvbSAnLi9zdHJ1Y3R1cmUvcGxhaW4nO1xuaW1wb3J0IGdldERpc3BsYXlOYW1lIGZyb20gJy4vdXRpbC9nZXREaXNwbGF5TmFtZSc7XG5cblxudmFyIGlzQ2xhc3NDb21wb25lbnQgPSBmdW5jdGlvbiBpc0NsYXNzQ29tcG9uZW50KENvbXBvbmVudCkge1xuICByZXR1cm4gQm9vbGVhbihDb21wb25lbnQgJiYgQ29tcG9uZW50LnByb3RvdHlwZSAmJiBfdHlwZW9mKENvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkgPT09ICdvYmplY3QnKTtcbn07XG5cbi8vIGV4dHJhY3QgZmllbGQtc3BlY2lmaWMgYWN0aW9uc1xuXG52YXIgYXJyYXlJbnNlcnQgPSBpbXBvcnRlZEFjdGlvbnMuYXJyYXlJbnNlcnQsXG4gICAgYXJyYXlNb3ZlID0gaW1wb3J0ZWRBY3Rpb25zLmFycmF5TW92ZSxcbiAgICBhcnJheVBvcCA9IGltcG9ydGVkQWN0aW9ucy5hcnJheVBvcCxcbiAgICBhcnJheVB1c2ggPSBpbXBvcnRlZEFjdGlvbnMuYXJyYXlQdXNoLFxuICAgIGFycmF5UmVtb3ZlID0gaW1wb3J0ZWRBY3Rpb25zLmFycmF5UmVtb3ZlLFxuICAgIGFycmF5UmVtb3ZlQWxsID0gaW1wb3J0ZWRBY3Rpb25zLmFycmF5UmVtb3ZlQWxsLFxuICAgIGFycmF5U2hpZnQgPSBpbXBvcnRlZEFjdGlvbnMuYXJyYXlTaGlmdCxcbiAgICBhcnJheVNwbGljZSA9IGltcG9ydGVkQWN0aW9ucy5hcnJheVNwbGljZSxcbiAgICBhcnJheVN3YXAgPSBpbXBvcnRlZEFjdGlvbnMuYXJyYXlTd2FwLFxuICAgIGFycmF5VW5zaGlmdCA9IGltcG9ydGVkQWN0aW9ucy5hcnJheVVuc2hpZnQsXG4gICAgYmx1ciA9IGltcG9ydGVkQWN0aW9ucy5ibHVyLFxuICAgIGNoYW5nZSA9IGltcG9ydGVkQWN0aW9ucy5jaGFuZ2UsXG4gICAgZm9jdXMgPSBpbXBvcnRlZEFjdGlvbnMuZm9jdXMsXG4gICAgZm9ybUFjdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoaW1wb3J0ZWRBY3Rpb25zLCBbJ2FycmF5SW5zZXJ0JywgJ2FycmF5TW92ZScsICdhcnJheVBvcCcsICdhcnJheVB1c2gnLCAnYXJyYXlSZW1vdmUnLCAnYXJyYXlSZW1vdmVBbGwnLCAnYXJyYXlTaGlmdCcsICdhcnJheVNwbGljZScsICdhcnJheVN3YXAnLCAnYXJyYXlVbnNoaWZ0JywgJ2JsdXInLCAnY2hhbmdlJywgJ2ZvY3VzJ10pO1xuXG52YXIgYXJyYXlBY3Rpb25zID0ge1xuICBhcnJheUluc2VydDogYXJyYXlJbnNlcnQsXG4gIGFycmF5TW92ZTogYXJyYXlNb3ZlLFxuICBhcnJheVBvcDogYXJyYXlQb3AsXG4gIGFycmF5UHVzaDogYXJyYXlQdXNoLFxuICBhcnJheVJlbW92ZTogYXJyYXlSZW1vdmUsXG4gIGFycmF5UmVtb3ZlQWxsOiBhcnJheVJlbW92ZUFsbCxcbiAgYXJyYXlTaGlmdDogYXJyYXlTaGlmdCxcbiAgYXJyYXlTcGxpY2U6IGFycmF5U3BsaWNlLFxuICBhcnJheVN3YXA6IGFycmF5U3dhcCxcbiAgYXJyYXlVbnNoaWZ0OiBhcnJheVVuc2hpZnRcbn07XG5cbnZhciBwcm9wc1RvTm90VXBkYXRlRm9yID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShPYmplY3Qua2V5cyhpbXBvcnRlZEFjdGlvbnMpKSwgWydhcnJheScsICdhc3luY0Vycm9ycycsICdpbml0aWFsVmFsdWVzJywgJ3N5bmNFcnJvcnMnLCAnc3luY1dhcm5pbmdzJywgJ3ZhbHVlcycsICdyZWdpc3RlcmVkRmllbGRzJ10pO1xuXG52YXIgY2hlY2tTdWJtaXQgPSBmdW5jdGlvbiBjaGVja1N1Ym1pdChzdWJtaXQpIHtcbiAgaWYgKCFzdWJtaXQgfHwgdHlwZW9mIHN1Ym1pdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3QgZWl0aGVyIHBhc3MgaGFuZGxlU3VibWl0KCkgYW4gb25TdWJtaXQgZnVuY3Rpb24gb3IgcGFzcyBvblN1Ym1pdCBhcyBhIHByb3AnKTtcbiAgfVxuICByZXR1cm4gc3VibWl0O1xufTtcblxuLyoqXG4gKiBUaGUgZGVjb3JhdG9yIHRoYXQgaXMgdGhlIG1haW4gQVBJIHRvIHJlZHV4LWZvcm1cbiAqL1xudmFyIGNyZWF0ZVJlZHV4Rm9ybSA9IGZ1bmN0aW9uIGNyZWF0ZVJlZHV4Rm9ybShzdHJ1Y3R1cmUpIHtcbiAgdmFyIGRlZXBFcXVhbCA9IHN0cnVjdHVyZS5kZWVwRXF1YWwsXG4gICAgICBlbXB0eSA9IHN0cnVjdHVyZS5lbXB0eSxcbiAgICAgIGdldEluID0gc3RydWN0dXJlLmdldEluLFxuICAgICAgc2V0SW4gPSBzdHJ1Y3R1cmUuc2V0SW4sXG4gICAgICBrZXlzID0gc3RydWN0dXJlLmtleXMsXG4gICAgICBmcm9tSlMgPSBzdHJ1Y3R1cmUuZnJvbUpTO1xuXG4gIHZhciBpc1ZhbGlkID0gY3JlYXRlSXNWYWxpZChzdHJ1Y3R1cmUpO1xuICByZXR1cm4gZnVuY3Rpb24gKGluaXRpYWxDb25maWcpIHtcbiAgICB2YXIgY29uZmlnID0gX2V4dGVuZHMoe1xuICAgICAgdG91Y2hPbkJsdXI6IHRydWUsXG4gICAgICB0b3VjaE9uQ2hhbmdlOiBmYWxzZSxcbiAgICAgIHBlcnNpc3RlbnRTdWJtaXRFcnJvcnM6IGZhbHNlLFxuICAgICAgZGVzdHJveU9uVW5tb3VudDogdHJ1ZSxcbiAgICAgIHNob3VsZEFzeW5jVmFsaWRhdGU6IGRlZmF1bHRTaG91bGRBc3luY1ZhbGlkYXRlLFxuICAgICAgc2hvdWxkVmFsaWRhdGU6IGRlZmF1bHRTaG91bGRWYWxpZGF0ZSxcbiAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZTogZmFsc2UsXG4gICAgICBrZWVwRGlydHlPblJlaW5pdGlhbGl6ZTogZmFsc2UsXG4gICAgICBnZXRGb3JtU3RhdGU6IGZ1bmN0aW9uIGdldEZvcm1TdGF0ZShzdGF0ZSkge1xuICAgICAgICByZXR1cm4gZ2V0SW4oc3RhdGUsICdmb3JtJyk7XG4gICAgICB9LFxuICAgICAgcHVyZTogdHJ1ZSxcbiAgICAgIGZvcmNlVW5yZWdpc3Rlck9uVW5tb3VudDogZmFsc2VcbiAgICB9LCBpbml0aWFsQ29uZmlnKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoV3JhcHBlZENvbXBvbmVudCkge1xuICAgICAgdmFyIEZvcm0gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgICBfaW5oZXJpdHMoRm9ybSwgX0NvbXBvbmVudCk7XG5cbiAgICAgICAgZnVuY3Rpb24gRm9ybSgpIHtcbiAgICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9ybSk7XG5cbiAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gRm9ybS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEZvcm0pKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5kZXN0cm95ZWQgPSBmYWxzZSwgX3RoaXMuZmllbGRWYWxpZGF0b3JzID0ge30sIF90aGlzLmxhc3RGaWVsZFZhbGlkYXRvcktleXMgPSBbXSwgX3RoaXMuZmllbGRXYXJuZXJzID0ge30sIF90aGlzLmxhc3RGaWVsZFdhcm5lcktleXMgPSBbXSwgX3RoaXMuaW5uZXJPblN1Ym1pdCA9IHVuZGVmaW5lZCwgX3RoaXMuc3VibWl0UHJvbWlzZSA9IHVuZGVmaW5lZCwgX3RoaXMuZ2V0VmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLnZhbHVlcztcbiAgICAgICAgICB9LCBfdGhpcy5pc1ZhbGlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLnZhbGlkO1xuICAgICAgICAgIH0sIF90aGlzLmlzUHJpc3RpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMucHJvcHMucHJpc3RpbmU7XG4gICAgICAgICAgfSwgX3RoaXMucmVnaXN0ZXIgPSBmdW5jdGlvbiAobmFtZSwgdHlwZSwgZ2V0VmFsaWRhdG9yLCBnZXRXYXJuZXIpIHtcbiAgICAgICAgICAgIF90aGlzLnByb3BzLnJlZ2lzdGVyRmllbGQobmFtZSwgdHlwZSk7XG4gICAgICAgICAgICBpZiAoZ2V0VmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgIF90aGlzLmZpZWxkVmFsaWRhdG9yc1tuYW1lXSA9IGdldFZhbGlkYXRvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChnZXRXYXJuZXIpIHtcbiAgICAgICAgICAgICAgX3RoaXMuZmllbGRXYXJuZXJzW25hbWVdID0gZ2V0V2FybmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIF90aGlzLnVucmVnaXN0ZXIgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgaWYgKCFfdGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLmRlc3Ryb3lPblVubW91bnQgfHwgX3RoaXMucHJvcHMuZm9yY2VVbnJlZ2lzdGVyT25Vbm1vdW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucHJvcHMudW5yZWdpc3RlckZpZWxkKG5hbWUpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpcy5maWVsZFZhbGlkYXRvcnNbbmFtZV07XG4gICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzLmZpZWxkV2FybmVyc1tuYW1lXTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5wcm9wcy51bnJlZ2lzdGVyRmllbGQobmFtZSwgZmFsc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgX3RoaXMuZ2V0RmllbGRMaXN0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciByZWdpc3RlcmVkRmllbGRzID0gX3RoaXMucHJvcHMucmVnaXN0ZXJlZEZpZWxkcztcbiAgICAgICAgICAgIHZhciBsaXN0ID0gW107XG4gICAgICAgICAgICBpZiAoIXJlZ2lzdGVyZWRGaWVsZHMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIga2V5U2VxID0ga2V5cyhyZWdpc3RlcmVkRmllbGRzKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZXhjbHVkZUZpZWxkQXJyYXkpIHtcbiAgICAgICAgICAgICAga2V5U2VxID0ga2V5U2VxLmZpbHRlcihmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRJbihyZWdpc3RlcmVkRmllbGRzLCAnW1xcJycgKyBuYW1lICsgJ1xcJ10udHlwZScpICE9PSAnRmllbGRBcnJheSc7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZyb21KUyhrZXlTZXEucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICAgICAgICBhY2MucHVzaChrZXkpO1xuICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwgbGlzdCkpO1xuICAgICAgICAgIH0sIF90aGlzLmdldFZhbGlkYXRvcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdmFsaWRhdG9ycyA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoX3RoaXMuZmllbGRWYWxpZGF0b3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgIHZhciB2YWxpZGF0b3IgPSBfdGhpcy5maWVsZFZhbGlkYXRvcnNbbmFtZV0oKTtcbiAgICAgICAgICAgICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvcnNbbmFtZV0gPSB2YWxpZGF0b3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRvcnM7XG4gICAgICAgICAgfSwgX3RoaXMuZ2VuZXJhdGVWYWxpZGF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdmFsaWRhdG9ycyA9IF90aGlzLmdldFZhbGlkYXRvcnMoKTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWxpZGF0b3JzKS5sZW5ndGggPyBnZW5lcmF0ZVZhbGlkYXRvcih2YWxpZGF0b3JzLCBzdHJ1Y3R1cmUpIDogdW5kZWZpbmVkO1xuICAgICAgICAgIH0sIF90aGlzLmdldFdhcm5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd2FybmVycyA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoX3RoaXMuZmllbGRXYXJuZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgIHZhciB3YXJuZXIgPSBfdGhpcy5maWVsZFdhcm5lcnNbbmFtZV0oKTtcbiAgICAgICAgICAgICAgaWYgKHdhcm5lcikge1xuICAgICAgICAgICAgICAgIHdhcm5lcnNbbmFtZV0gPSB3YXJuZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHdhcm5lcnM7XG4gICAgICAgICAgfSwgX3RoaXMuZ2VuZXJhdGVXYXJuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd2FybmVycyA9IF90aGlzLmdldFdhcm5lcnMoKTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh3YXJuZXJzKS5sZW5ndGggPyBnZW5lcmF0ZVZhbGlkYXRvcih3YXJuZXJzLCBzdHJ1Y3R1cmUpIDogdW5kZWZpbmVkO1xuICAgICAgICAgIH0sIF90aGlzLmFzeW5jVmFsaWRhdGUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGFzeW5jQmx1ckZpZWxkcyA9IF90aGlzJHByb3BzLmFzeW5jQmx1ckZpZWxkcyxcbiAgICAgICAgICAgICAgICBhc3luY0Vycm9ycyA9IF90aGlzJHByb3BzLmFzeW5jRXJyb3JzLFxuICAgICAgICAgICAgICAgIGFzeW5jVmFsaWRhdGUgPSBfdGhpcyRwcm9wcy5hc3luY1ZhbGlkYXRlLFxuICAgICAgICAgICAgICAgIGRpc3BhdGNoID0gX3RoaXMkcHJvcHMuZGlzcGF0Y2gsXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWQgPSBfdGhpcyRwcm9wcy5pbml0aWFsaXplZCxcbiAgICAgICAgICAgICAgICBwcmlzdGluZSA9IF90aGlzJHByb3BzLnByaXN0aW5lLFxuICAgICAgICAgICAgICAgIHNob3VsZEFzeW5jVmFsaWRhdGUgPSBfdGhpcyRwcm9wcy5zaG91bGRBc3luY1ZhbGlkYXRlLFxuICAgICAgICAgICAgICAgIHN0YXJ0QXN5bmNWYWxpZGF0aW9uID0gX3RoaXMkcHJvcHMuc3RhcnRBc3luY1ZhbGlkYXRpb24sXG4gICAgICAgICAgICAgICAgc3RvcEFzeW5jVmFsaWRhdGlvbiA9IF90aGlzJHByb3BzLnN0b3BBc3luY1ZhbGlkYXRpb24sXG4gICAgICAgICAgICAgICAgc3luY0Vycm9ycyA9IF90aGlzJHByb3BzLnN5bmNFcnJvcnMsXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gX3RoaXMkcHJvcHMudmFsdWVzO1xuXG4gICAgICAgICAgICB2YXIgc3VibWl0dGluZyA9ICFuYW1lO1xuICAgICAgICAgICAgaWYgKGFzeW5jVmFsaWRhdGUpIHtcbiAgICAgICAgICAgICAgdmFyIHZhbHVlc1RvVmFsaWRhdGUgPSBzdWJtaXR0aW5nID8gdmFsdWVzIDogc2V0SW4odmFsdWVzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgIHZhciBzeW5jVmFsaWRhdGlvblBhc3NlcyA9IHN1Ym1pdHRpbmcgfHwgIWdldEluKHN5bmNFcnJvcnMsIG5hbWUpO1xuICAgICAgICAgICAgICB2YXIgaXNCbHVycmVkRmllbGQgPSAhc3VibWl0dGluZyAmJiAoIWFzeW5jQmx1ckZpZWxkcyB8fCB+YXN5bmNCbHVyRmllbGRzLmluZGV4T2YobmFtZS5yZXBsYWNlKC9cXFtbMC05XStcXF0vZywgJ1tdJykpKTtcbiAgICAgICAgICAgICAgaWYgKChpc0JsdXJyZWRGaWVsZCB8fCBzdWJtaXR0aW5nKSAmJiBzaG91bGRBc3luY1ZhbGlkYXRlKHtcbiAgICAgICAgICAgICAgICBhc3luY0Vycm9yczogYXN5bmNFcnJvcnMsXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGluaXRpYWxpemVkLFxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IHN1Ym1pdHRpbmcgPyAnc3VibWl0JyA6ICdibHVyJyxcbiAgICAgICAgICAgICAgICBibHVycmVkRmllbGQ6IG5hbWUsXG4gICAgICAgICAgICAgICAgcHJpc3RpbmU6IHByaXN0aW5lLFxuICAgICAgICAgICAgICAgIHN5bmNWYWxpZGF0aW9uUGFzc2VzOiBzeW5jVmFsaWRhdGlvblBhc3Nlc1xuICAgICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhc3luY1ZhbGlkYXRpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzeW5jVmFsaWRhdGUodmFsdWVzVG9WYWxpZGF0ZSwgZGlzcGF0Y2gsIF90aGlzLnByb3BzLCBuYW1lKTtcbiAgICAgICAgICAgICAgICB9LCBzdGFydEFzeW5jVmFsaWRhdGlvbiwgc3RvcEFzeW5jVmFsaWRhdGlvbiwgbmFtZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBfdGhpcy5zdWJtaXRDb21wbGV0ZWQgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBkZWxldGUgX3RoaXMuc3VibWl0UHJvbWlzZTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfSwgX3RoaXMuc3VibWl0RmFpbGVkID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBkZWxldGUgX3RoaXMuc3VibWl0UHJvbWlzZTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9LCBfdGhpcy5saXN0ZW5Ub1N1Ym1pdCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgICAgICBpZiAoIWlzUHJvbWlzZShwcm9taXNlKSkge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLnN1Ym1pdFByb21pc2UgPSBwcm9taXNlO1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihfdGhpcy5zdWJtaXRDb21wbGV0ZWQsIF90aGlzLnN1Ym1pdEZhaWxlZCk7XG4gICAgICAgICAgfSwgX3RoaXMuc3VibWl0ID0gZnVuY3Rpb24gKHN1Ym1pdE9yRXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBvblN1Ym1pdCA9IF90aGlzJHByb3BzMi5vblN1Ym1pdCxcbiAgICAgICAgICAgICAgICBibHVyID0gX3RoaXMkcHJvcHMyLmJsdXIsXG4gICAgICAgICAgICAgICAgY2hhbmdlID0gX3RoaXMkcHJvcHMyLmNoYW5nZSxcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCA9IF90aGlzJHByb3BzMi5kaXNwYXRjaDtcblxuXG4gICAgICAgICAgICBpZiAoIXN1Ym1pdE9yRXZlbnQgfHwgc2lsZW5jZUV2ZW50KHN1Ym1pdE9yRXZlbnQpKSB7XG4gICAgICAgICAgICAgIC8vIHN1Ym1pdE9yRXZlbnQgaXMgYW4gZXZlbnQ6IGZpcmUgc3VibWl0IGlmIG5vdCBhbHJlYWR5IHN1Ym1pdHRpbmdcbiAgICAgICAgICAgICAgaWYgKCFfdGhpcy5zdWJtaXRQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgLy8gYXZvaWQgcmVjdXJzaXZlIHN0YWNrIHRyYWNlIGlmIHVzZSBGb3JtIHdpdGggb25TdWJtaXQgYXMgaGFuZGxlU3VibWl0XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmlubmVyT25TdWJtaXQgJiYgX3RoaXMuaW5uZXJPblN1Ym1pdCAhPT0gX3RoaXMuc3VibWl0KSB7XG4gICAgICAgICAgICAgICAgICAvLyB3aWxsIGNhbGwgXCJzdWJtaXRPckV2ZW50IGlzIHRoZSBzdWJtaXQgZnVuY3Rpb25cIiBibG9jayBiZWxvd1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmlubmVyT25TdWJtaXQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmxpc3RlblRvU3VibWl0KGhhbmRsZVN1Ym1pdChjaGVja1N1Ym1pdChvblN1Ym1pdCksIF9leHRlbmRzKHt9LCBfdGhpcy5wcm9wcywgYmluZEFjdGlvbkNyZWF0b3JzKHsgYmx1cjogYmx1ciwgY2hhbmdlOiBjaGFuZ2UgfSwgZGlzcGF0Y2gpKSwgX3RoaXMucHJvcHMudmFsaWRFeGNlcHRTdWJtaXQsIF90aGlzLmFzeW5jVmFsaWRhdGUsIF90aGlzLmdldEZpZWxkTGlzdCh7IGV4Y2x1ZGVGaWVsZEFycmF5OiB0cnVlIH0pKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBzdWJtaXRPckV2ZW50IGlzIHRoZSBzdWJtaXQgZnVuY3Rpb246IHJldHVybiBkZWZlcnJlZCBzdWJtaXQgdGh1bmtcbiAgICAgICAgICAgICAgcmV0dXJuIHNpbGVuY2VFdmVudHMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhX3RoaXMuc3VibWl0UHJvbWlzZSAmJiBfdGhpcy5saXN0ZW5Ub1N1Ym1pdChoYW5kbGVTdWJtaXQoY2hlY2tTdWJtaXQoc3VibWl0T3JFdmVudCksIF9leHRlbmRzKHt9LCBfdGhpcy5wcm9wcywgYmluZEFjdGlvbkNyZWF0b3JzKHsgYmx1cjogYmx1ciwgY2hhbmdlOiBjaGFuZ2UgfSwgZGlzcGF0Y2gpKSwgX3RoaXMucHJvcHMudmFsaWRFeGNlcHRTdWJtaXQsIF90aGlzLmFzeW5jVmFsaWRhdGUsIF90aGlzLmdldEZpZWxkTGlzdCh7IGV4Y2x1ZGVGaWVsZEFycmF5OiB0cnVlIH0pKSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIF90aGlzLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLnJlc2V0KCk7XG4gICAgICAgICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gICAgICAgIH1cblxuICAgICAgICBfY3JlYXRlQ2xhc3MoRm9ybSwgW3tcbiAgICAgICAgICBrZXk6ICdnZXRDaGlsZENvbnRleHQnLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgX3JlZHV4Rm9ybTogX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgICAgICAgICBnZXRGb3JtU3RhdGU6IGZ1bmN0aW9uIGdldEZvcm1TdGF0ZShzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEluKF90aGlzMi5wcm9wcy5nZXRGb3JtU3RhdGUoc3RhdGUpLCBfdGhpczIucHJvcHMuZm9ybSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhc3luY1ZhbGlkYXRlOiB0aGlzLmFzeW5jVmFsaWRhdGUsXG4gICAgICAgICAgICAgICAgZ2V0VmFsdWVzOiB0aGlzLmdldFZhbHVlcyxcbiAgICAgICAgICAgICAgICBzZWN0aW9uUHJlZml4OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXI6IHRoaXMucmVnaXN0ZXIsXG4gICAgICAgICAgICAgICAgdW5yZWdpc3RlcjogdGhpcy51bnJlZ2lzdGVyLFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVySW5uZXJPblN1Ym1pdDogZnVuY3Rpb24gcmVnaXN0ZXJJbm5lck9uU3VibWl0KGlubmVyT25TdWJtaXQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIuaW5uZXJPblN1Ym1pdCA9IGlubmVyT25TdWJtaXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdpbml0SWZOZWVkZWQnLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0SWZOZWVkZWQobmV4dFByb3BzKSB7XG4gICAgICAgICAgICB2YXIgZW5hYmxlUmVpbml0aWFsaXplID0gdGhpcy5wcm9wcy5lbmFibGVSZWluaXRpYWxpemU7XG5cbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgICAgaWYgKChlbmFibGVSZWluaXRpYWxpemUgfHwgIW5leHRQcm9wcy5pbml0aWFsaXplZCkgJiYgIWRlZXBFcXVhbCh0aGlzLnByb3BzLmluaXRpYWxWYWx1ZXMsIG5leHRQcm9wcy5pbml0aWFsVmFsdWVzKSkge1xuICAgICAgICAgICAgICAgIHZhciBfa2VlcERpcnR5ID0gbmV4dFByb3BzLmluaXRpYWxpemVkICYmIHRoaXMucHJvcHMua2VlcERpcnR5T25SZWluaXRpYWxpemU7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pbml0aWFsaXplKG5leHRQcm9wcy5pbml0aWFsVmFsdWVzLCBfa2VlcERpcnR5LCB7XG4gICAgICAgICAgICAgICAgICBsYXN0SW5pdGlhbFZhbHVlczogdGhpcy5wcm9wcy5pbml0aWFsVmFsdWVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5pbml0aWFsVmFsdWVzICYmICghdGhpcy5wcm9wcy5pbml0aWFsaXplZCB8fCBlbmFibGVSZWluaXRpYWxpemUpKSB7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuaW5pdGlhbGl6ZSh0aGlzLnByb3BzLmluaXRpYWxWYWx1ZXMsIHRoaXMucHJvcHMua2VlcERpcnR5T25SZWluaXRpYWxpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ3VwZGF0ZVN5bmNFcnJvcnNJZk5lZWRlZCcsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVN5bmNFcnJvcnNJZk5lZWRlZChuZXh0U3luY0Vycm9ycywgbmV4dEVycm9yLCBsYXN0U3luY0Vycm9ycykge1xuICAgICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyb3IgPSBfcHJvcHMuZXJyb3IsXG4gICAgICAgICAgICAgICAgdXBkYXRlU3luY0Vycm9ycyA9IF9wcm9wcy51cGRhdGVTeW5jRXJyb3JzO1xuXG4gICAgICAgICAgICB2YXIgbm9FcnJvcnMgPSAoIWxhc3RTeW5jRXJyb3JzIHx8ICFPYmplY3Qua2V5cyhsYXN0U3luY0Vycm9ycykubGVuZ3RoKSAmJiAhZXJyb3I7XG4gICAgICAgICAgICB2YXIgbmV4dE5vRXJyb3JzID0gKCFuZXh0U3luY0Vycm9ycyB8fCAhT2JqZWN0LmtleXMobmV4dFN5bmNFcnJvcnMpLmxlbmd0aCkgJiYgIW5leHRFcnJvcjtcbiAgICAgICAgICAgIGlmICghKG5vRXJyb3JzICYmIG5leHROb0Vycm9ycykgJiYgKCFwbGFpbi5kZWVwRXF1YWwobGFzdFN5bmNFcnJvcnMsIG5leHRTeW5jRXJyb3JzKSB8fCAhcGxhaW4uZGVlcEVxdWFsKGVycm9yLCBuZXh0RXJyb3IpKSkge1xuICAgICAgICAgICAgICB1cGRhdGVTeW5jRXJyb3JzKG5leHRTeW5jRXJyb3JzLCBuZXh0RXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ2NsZWFyU3VibWl0UHJvbWlzZUlmTmVlZGVkJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXJTdWJtaXRQcm9taXNlSWZOZWVkZWQobmV4dFByb3BzKSB7XG4gICAgICAgICAgICB2YXIgc3VibWl0dGluZyA9IHRoaXMucHJvcHMuc3VibWl0dGluZztcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3VibWl0UHJvbWlzZSAmJiBzdWJtaXR0aW5nICYmICFuZXh0UHJvcHMuc3VibWl0dGluZykge1xuICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zdWJtaXRQcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ3N1Ym1pdElmTmVlZGVkJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3VibWl0SWZOZWVkZWQobmV4dFByb3BzKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgY2xlYXJTdWJtaXQgPSBfcHJvcHMyLmNsZWFyU3VibWl0LFxuICAgICAgICAgICAgICAgIHRyaWdnZXJTdWJtaXQgPSBfcHJvcHMyLnRyaWdnZXJTdWJtaXQ7XG5cbiAgICAgICAgICAgIGlmICghdHJpZ2dlclN1Ym1pdCAmJiBuZXh0UHJvcHMudHJpZ2dlclN1Ym1pdCkge1xuICAgICAgICAgICAgICBjbGVhclN1Ym1pdCgpO1xuICAgICAgICAgICAgICB0aGlzLnN1Ym1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ3ZhbGlkYXRlSWZOZWVkZWQnLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZUlmTmVlZGVkKG5leHRQcm9wcykge1xuICAgICAgICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHNob3VsZFZhbGlkYXRlID0gX3Byb3BzMy5zaG91bGRWYWxpZGF0ZSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZSA9IF9wcm9wczMudmFsaWRhdGUsXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gX3Byb3BzMy52YWx1ZXM7XG5cbiAgICAgICAgICAgIHZhciBmaWVsZExldmVsVmFsaWRhdGUgPSB0aGlzLmdlbmVyYXRlVmFsaWRhdG9yKCk7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGUgfHwgZmllbGRMZXZlbFZhbGlkYXRlKSB7XG4gICAgICAgICAgICAgIHZhciBpbml0aWFsUmVuZGVyID0gbmV4dFByb3BzID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgIHZhciBmaWVsZFZhbGlkYXRvcktleXMgPSBPYmplY3Qua2V5cyh0aGlzLmdldFZhbGlkYXRvcnMoKSk7XG4gICAgICAgICAgICAgIHZhciBzaG91bGRWYWxpZGF0ZVJlc3VsdCA9IHNob3VsZFZhbGlkYXRlKHtcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHM6IG5leHRQcm9wcyxcbiAgICAgICAgICAgICAgICBwcm9wczogdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBpbml0aWFsUmVuZGVyOiBpbml0aWFsUmVuZGVyLFxuICAgICAgICAgICAgICAgIGxhc3RGaWVsZFZhbGlkYXRvcktleXM6IHRoaXMubGFzdEZpZWxkVmFsaWRhdG9yS2V5cyxcbiAgICAgICAgICAgICAgICBmaWVsZFZhbGlkYXRvcktleXM6IGZpZWxkVmFsaWRhdG9yS2V5cyxcbiAgICAgICAgICAgICAgICBzdHJ1Y3R1cmU6IHN0cnVjdHVyZVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBpZiAoc2hvdWxkVmFsaWRhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHNUb1ZhbGlkYXRlID0gaW5pdGlhbFJlbmRlciB8fCAhbmV4dFByb3BzID8gdGhpcy5wcm9wcyA6IG5leHRQcm9wcztcblxuICAgICAgICAgICAgICAgIHZhciBfbWVyZ2UyID0gX21lcmdlKHZhbGlkYXRlID8gdmFsaWRhdGUocHJvcHNUb1ZhbGlkYXRlLnZhbHVlcywgcHJvcHNUb1ZhbGlkYXRlKSB8fCB7fSA6IHt9LCBmaWVsZExldmVsVmFsaWRhdGUgPyBmaWVsZExldmVsVmFsaWRhdGUocHJvcHNUb1ZhbGlkYXRlLnZhbHVlcywgcHJvcHNUb1ZhbGlkYXRlKSB8fCB7fSA6IHt9KSxcbiAgICAgICAgICAgICAgICAgICAgX2Vycm9yID0gX21lcmdlMi5fZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIG5leHRTeW5jRXJyb3JzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9tZXJnZTIsIFsnX2Vycm9yJ10pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0RmllbGRWYWxpZGF0b3JLZXlzID0gZmllbGRWYWxpZGF0b3JLZXlzO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3luY0Vycm9yc0lmTmVlZGVkKG5leHRTeW5jRXJyb3JzLCBfZXJyb3IsIHByb3BzVG9WYWxpZGF0ZS5zeW5jRXJyb3JzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ3VwZGF0ZVN5bmNXYXJuaW5nc0lmTmVlZGVkJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlU3luY1dhcm5pbmdzSWZOZWVkZWQobmV4dFN5bmNXYXJuaW5ncywgbmV4dFdhcm5pbmcsIGxhc3RTeW5jV2FybmluZ3MpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nID0gX3Byb3BzNC53YXJuaW5nLFxuICAgICAgICAgICAgICAgIHN5bmNXYXJuaW5ncyA9IF9wcm9wczQuc3luY1dhcm5pbmdzLFxuICAgICAgICAgICAgICAgIHVwZGF0ZVN5bmNXYXJuaW5ncyA9IF9wcm9wczQudXBkYXRlU3luY1dhcm5pbmdzO1xuXG4gICAgICAgICAgICB2YXIgbm9XYXJuaW5ncyA9ICghc3luY1dhcm5pbmdzIHx8ICFPYmplY3Qua2V5cyhzeW5jV2FybmluZ3MpLmxlbmd0aCkgJiYgIXdhcm5pbmc7XG4gICAgICAgICAgICB2YXIgbmV4dE5vV2FybmluZ3MgPSAoIW5leHRTeW5jV2FybmluZ3MgfHwgIU9iamVjdC5rZXlzKG5leHRTeW5jV2FybmluZ3MpLmxlbmd0aCkgJiYgIW5leHRXYXJuaW5nO1xuICAgICAgICAgICAgaWYgKCEobm9XYXJuaW5ncyAmJiBuZXh0Tm9XYXJuaW5ncykgJiYgKCFwbGFpbi5kZWVwRXF1YWwobGFzdFN5bmNXYXJuaW5ncywgbmV4dFN5bmNXYXJuaW5ncykgfHwgIXBsYWluLmRlZXBFcXVhbCh3YXJuaW5nLCBuZXh0V2FybmluZykpKSB7XG4gICAgICAgICAgICAgIHVwZGF0ZVN5bmNXYXJuaW5ncyhuZXh0U3luY1dhcm5pbmdzLCBuZXh0V2FybmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnd2FybklmTmVlZGVkJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gd2FybklmTmVlZGVkKG5leHRQcm9wcykge1xuICAgICAgICAgICAgdmFyIF9wcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHNob3VsZFZhbGlkYXRlID0gX3Byb3BzNS5zaG91bGRWYWxpZGF0ZSxcbiAgICAgICAgICAgICAgICB3YXJuID0gX3Byb3BzNS53YXJuLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IF9wcm9wczUudmFsdWVzO1xuXG4gICAgICAgICAgICB2YXIgZmllbGRMZXZlbFdhcm4gPSB0aGlzLmdlbmVyYXRlV2FybmVyKCk7XG4gICAgICAgICAgICBpZiAod2FybiB8fCBmaWVsZExldmVsV2Fybikge1xuICAgICAgICAgICAgICB2YXIgaW5pdGlhbFJlbmRlciA9IG5leHRQcm9wcyA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICB2YXIgZmllbGRXYXJuZXJLZXlzID0gT2JqZWN0LmtleXModGhpcy5nZXRXYXJuZXJzKCkpO1xuICAgICAgICAgICAgICB2YXIgc2hvdWxkV2FyblJlc3VsdCA9IHNob3VsZFZhbGlkYXRlKHtcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHM6IG5leHRQcm9wcyxcbiAgICAgICAgICAgICAgICBwcm9wczogdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBpbml0aWFsUmVuZGVyOiBpbml0aWFsUmVuZGVyLFxuICAgICAgICAgICAgICAgIGxhc3RGaWVsZFZhbGlkYXRvcktleXM6IHRoaXMubGFzdEZpZWxkV2FybmVyS2V5cyxcbiAgICAgICAgICAgICAgICBmaWVsZFZhbGlkYXRvcktleXM6IGZpZWxkV2FybmVyS2V5cyxcbiAgICAgICAgICAgICAgICBzdHJ1Y3R1cmU6IHN0cnVjdHVyZVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBpZiAoc2hvdWxkV2FyblJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wc1RvV2FybiA9IGluaXRpYWxSZW5kZXIgfHwgIW5leHRQcm9wcyA/IHRoaXMucHJvcHMgOiBuZXh0UHJvcHM7XG5cbiAgICAgICAgICAgICAgICB2YXIgX21lcmdlMyA9IF9tZXJnZSh3YXJuID8gd2Fybihwcm9wc1RvV2Fybi52YWx1ZXMsIHByb3BzVG9XYXJuKSA6IHt9LCBmaWVsZExldmVsV2FybiA/IGZpZWxkTGV2ZWxXYXJuKHByb3BzVG9XYXJuLnZhbHVlcywgcHJvcHNUb1dhcm4pIDoge30pLFxuICAgICAgICAgICAgICAgICAgICBfd2FybmluZyA9IF9tZXJnZTMuX3dhcm5pbmcsXG4gICAgICAgICAgICAgICAgICAgIG5leHRTeW5jV2FybmluZ3MgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX21lcmdlMywgWydfd2FybmluZyddKTtcblxuICAgICAgICAgICAgICAgIHRoaXMubGFzdEZpZWxkV2FybmVyS2V5cyA9IGZpZWxkV2FybmVyS2V5cztcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN5bmNXYXJuaW5nc0lmTmVlZGVkKG5leHRTeW5jV2FybmluZ3MsIF93YXJuaW5nLCBwcm9wc1RvV2Fybi5zeW5jV2FybmluZ3MpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICAgICAgdGhpcy5pbml0SWZOZWVkZWQoKTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVJZk5lZWRlZCgpO1xuICAgICAgICAgICAgdGhpcy53YXJuSWZOZWVkZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdElmTmVlZGVkKG5leHRQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlSWZOZWVkZWQobmV4dFByb3BzKTtcbiAgICAgICAgICAgIHRoaXMud2FybklmTmVlZGVkKG5leHRQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNsZWFyU3VibWl0UHJvbWlzZUlmTmVlZGVkKG5leHRQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdElmTmVlZGVkKG5leHRQcm9wcyk7XG4gICAgICAgICAgICB2YXIgb25DaGFuZ2UgPSBuZXh0UHJvcHMub25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gbmV4dFByb3BzLnZhbHVlcyxcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCA9IG5leHRQcm9wcy5kaXNwYXRjaDtcblxuICAgICAgICAgICAgaWYgKG9uQ2hhbmdlICYmICFkZWVwRXF1YWwodmFsdWVzLCB0aGlzLnByb3BzLnZhbHVlcykpIHtcbiAgICAgICAgICAgICAgb25DaGFuZ2UodmFsdWVzLCBkaXNwYXRjaCwgbmV4dFByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLnB1cmUpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgdmFyIF9jb25maWckaW1tdXRhYmxlUHJvcCA9IGNvbmZpZy5pbW11dGFibGVQcm9wcyxcbiAgICAgICAgICAgICAgICBpbW11dGFibGVQcm9wcyA9IF9jb25maWckaW1tdXRhYmxlUHJvcCA9PT0gdW5kZWZpbmVkID8gW10gOiBfY29uZmlnJGltbXV0YWJsZVByb3A7XG5cbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhuZXh0UHJvcHMpLnNvbWUoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgICAgLy8gdXNlZnVsIHRvIGRlYnVnIHJlcmVuZGVyc1xuICAgICAgICAgICAgICAvLyBpZiAoIXBsYWluLmRlZXBFcXVhbCh0aGlzLnByb3BzWyBwcm9wIF0sIG5leHRQcm9wc1sgcHJvcCBdKSkge1xuICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUuaW5mbyhwcm9wLCAnY2hhbmdlZCcsIHRoaXMucHJvcHNbIHByb3AgXSwgJz09PicsIG5leHRQcm9wc1sgcHJvcCBdKVxuICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgIGlmICh+aW1tdXRhYmxlUHJvcHMuaW5kZXhPZihwcm9wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMucHJvcHNbcHJvcF0gIT09IG5leHRQcm9wc1twcm9wXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gIX5wcm9wc1RvTm90VXBkYXRlRm9yLmluZGV4T2YocHJvcCkgJiYgIWRlZXBFcXVhbChfdGhpczMucHJvcHNbcHJvcF0sIG5leHRQcm9wc1twcm9wXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgdmFyIF9wcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGRlc3Ryb3lPblVubW91bnQgPSBfcHJvcHM2LmRlc3Ryb3lPblVubW91bnQsXG4gICAgICAgICAgICAgICAgZGVzdHJveSA9IF9wcm9wczYuZGVzdHJveTtcblxuICAgICAgICAgICAgaWYgKGRlc3Ryb3lPblVubW91bnQpIHtcbiAgICAgICAgICAgICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBkZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHNvbWUgcmVkdXgtZm9ybSBjb25maWctb25seSBwcm9wc1xuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICAgICAgICAgIHZhciBfcHJvcHM3ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBhbnlUb3VjaGVkID0gX3Byb3BzNy5hbnlUb3VjaGVkLFxuICAgICAgICAgICAgICAgIGFycmF5SW5zZXJ0ID0gX3Byb3BzNy5hcnJheUluc2VydCxcbiAgICAgICAgICAgICAgICBhcnJheU1vdmUgPSBfcHJvcHM3LmFycmF5TW92ZSxcbiAgICAgICAgICAgICAgICBhcnJheVBvcCA9IF9wcm9wczcuYXJyYXlQb3AsXG4gICAgICAgICAgICAgICAgYXJyYXlQdXNoID0gX3Byb3BzNy5hcnJheVB1c2gsXG4gICAgICAgICAgICAgICAgYXJyYXlSZW1vdmUgPSBfcHJvcHM3LmFycmF5UmVtb3ZlLFxuICAgICAgICAgICAgICAgIGFycmF5UmVtb3ZlQWxsID0gX3Byb3BzNy5hcnJheVJlbW92ZUFsbCxcbiAgICAgICAgICAgICAgICBhcnJheVNoaWZ0ID0gX3Byb3BzNy5hcnJheVNoaWZ0LFxuICAgICAgICAgICAgICAgIGFycmF5U3BsaWNlID0gX3Byb3BzNy5hcnJheVNwbGljZSxcbiAgICAgICAgICAgICAgICBhcnJheVN3YXAgPSBfcHJvcHM3LmFycmF5U3dhcCxcbiAgICAgICAgICAgICAgICBhcnJheVVuc2hpZnQgPSBfcHJvcHM3LmFycmF5VW5zaGlmdCxcbiAgICAgICAgICAgICAgICBhc3luY0Vycm9ycyA9IF9wcm9wczcuYXN5bmNFcnJvcnMsXG4gICAgICAgICAgICAgICAgYXN5bmNWYWxpZGF0ZSA9IF9wcm9wczcuYXN5bmNWYWxpZGF0ZSxcbiAgICAgICAgICAgICAgICBhc3luY1ZhbGlkYXRpbmcgPSBfcHJvcHM3LmFzeW5jVmFsaWRhdGluZyxcbiAgICAgICAgICAgICAgICBibHVyID0gX3Byb3BzNy5ibHVyLFxuICAgICAgICAgICAgICAgIGNoYW5nZSA9IF9wcm9wczcuY2hhbmdlLFxuICAgICAgICAgICAgICAgIGNsZWFyU3VibWl0ID0gX3Byb3BzNy5jbGVhclN1Ym1pdCxcbiAgICAgICAgICAgICAgICBkZXN0cm95ID0gX3Byb3BzNy5kZXN0cm95LFxuICAgICAgICAgICAgICAgIGRlc3Ryb3lPblVubW91bnQgPSBfcHJvcHM3LmRlc3Ryb3lPblVubW91bnQsXG4gICAgICAgICAgICAgICAgZm9yY2VVbnJlZ2lzdGVyT25Vbm1vdW50ID0gX3Byb3BzNy5mb3JjZVVucmVnaXN0ZXJPblVubW91bnQsXG4gICAgICAgICAgICAgICAgZGlydHkgPSBfcHJvcHM3LmRpcnR5LFxuICAgICAgICAgICAgICAgIGRpc3BhdGNoID0gX3Byb3BzNy5kaXNwYXRjaCxcbiAgICAgICAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemUgPSBfcHJvcHM3LmVuYWJsZVJlaW5pdGlhbGl6ZSxcbiAgICAgICAgICAgICAgICBlcnJvciA9IF9wcm9wczcuZXJyb3IsXG4gICAgICAgICAgICAgICAgZm9jdXMgPSBfcHJvcHM3LmZvY3VzLFxuICAgICAgICAgICAgICAgIGZvcm0gPSBfcHJvcHM3LmZvcm0sXG4gICAgICAgICAgICAgICAgZ2V0Rm9ybVN0YXRlID0gX3Byb3BzNy5nZXRGb3JtU3RhdGUsXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZSA9IF9wcm9wczcuaW5pdGlhbGl6ZSxcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplZCA9IF9wcm9wczcuaW5pdGlhbGl6ZWQsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcyA9IF9wcm9wczcuaW5pdGlhbFZhbHVlcyxcbiAgICAgICAgICAgICAgICBpbnZhbGlkID0gX3Byb3BzNy5pbnZhbGlkLFxuICAgICAgICAgICAgICAgIGtlZXBEaXJ0eU9uUmVpbml0aWFsaXplID0gX3Byb3BzNy5rZWVwRGlydHlPblJlaW5pdGlhbGl6ZSxcbiAgICAgICAgICAgICAgICBwcmlzdGluZSA9IF9wcm9wczcucHJpc3RpbmUsXG4gICAgICAgICAgICAgICAgcHJvcE5hbWVzcGFjZSA9IF9wcm9wczcucHJvcE5hbWVzcGFjZSxcbiAgICAgICAgICAgICAgICByZWdpc3RlcmVkRmllbGRzID0gX3Byb3BzNy5yZWdpc3RlcmVkRmllbGRzLFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyRmllbGQgPSBfcHJvcHM3LnJlZ2lzdGVyRmllbGQsXG4gICAgICAgICAgICAgICAgcmVzZXQgPSBfcHJvcHM3LnJlc2V0LFxuICAgICAgICAgICAgICAgIHNldFN1Ym1pdEZhaWxlZCA9IF9wcm9wczcuc2V0U3VibWl0RmFpbGVkLFxuICAgICAgICAgICAgICAgIHNldFN1Ym1pdFN1Y2NlZWRlZCA9IF9wcm9wczcuc2V0U3VibWl0U3VjY2VlZGVkLFxuICAgICAgICAgICAgICAgIHNob3VsZEFzeW5jVmFsaWRhdGUgPSBfcHJvcHM3LnNob3VsZEFzeW5jVmFsaWRhdGUsXG4gICAgICAgICAgICAgICAgc2hvdWxkVmFsaWRhdGUgPSBfcHJvcHM3LnNob3VsZFZhbGlkYXRlLFxuICAgICAgICAgICAgICAgIHN0YXJ0QXN5bmNWYWxpZGF0aW9uID0gX3Byb3BzNy5zdGFydEFzeW5jVmFsaWRhdGlvbixcbiAgICAgICAgICAgICAgICBzdGFydFN1Ym1pdCA9IF9wcm9wczcuc3RhcnRTdWJtaXQsXG4gICAgICAgICAgICAgICAgc3RvcEFzeW5jVmFsaWRhdGlvbiA9IF9wcm9wczcuc3RvcEFzeW5jVmFsaWRhdGlvbixcbiAgICAgICAgICAgICAgICBzdG9wU3VibWl0ID0gX3Byb3BzNy5zdG9wU3VibWl0LFxuICAgICAgICAgICAgICAgIHN1Ym1pdHRpbmcgPSBfcHJvcHM3LnN1Ym1pdHRpbmcsXG4gICAgICAgICAgICAgICAgc3VibWl0RmFpbGVkID0gX3Byb3BzNy5zdWJtaXRGYWlsZWQsXG4gICAgICAgICAgICAgICAgc3VibWl0U3VjY2VlZGVkID0gX3Byb3BzNy5zdWJtaXRTdWNjZWVkZWQsXG4gICAgICAgICAgICAgICAgdG91Y2ggPSBfcHJvcHM3LnRvdWNoLFxuICAgICAgICAgICAgICAgIHRvdWNoT25CbHVyID0gX3Byb3BzNy50b3VjaE9uQmx1cixcbiAgICAgICAgICAgICAgICB0b3VjaE9uQ2hhbmdlID0gX3Byb3BzNy50b3VjaE9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgIHBlcnNpc3RlbnRTdWJtaXRFcnJvcnMgPSBfcHJvcHM3LnBlcnNpc3RlbnRTdWJtaXRFcnJvcnMsXG4gICAgICAgICAgICAgICAgc3luY0Vycm9ycyA9IF9wcm9wczcuc3luY0Vycm9ycyxcbiAgICAgICAgICAgICAgICBzeW5jV2FybmluZ3MgPSBfcHJvcHM3LnN5bmNXYXJuaW5ncyxcbiAgICAgICAgICAgICAgICB1bnJlZ2lzdGVyRmllbGQgPSBfcHJvcHM3LnVucmVnaXN0ZXJGaWVsZCxcbiAgICAgICAgICAgICAgICB1bnRvdWNoID0gX3Byb3BzNy51bnRvdWNoLFxuICAgICAgICAgICAgICAgIHVwZGF0ZVN5bmNFcnJvcnMgPSBfcHJvcHM3LnVwZGF0ZVN5bmNFcnJvcnMsXG4gICAgICAgICAgICAgICAgdXBkYXRlU3luY1dhcm5pbmdzID0gX3Byb3BzNy51cGRhdGVTeW5jV2FybmluZ3MsXG4gICAgICAgICAgICAgICAgdmFsaWQgPSBfcHJvcHM3LnZhbGlkLFxuICAgICAgICAgICAgICAgIHZhbGlkRXhjZXB0U3VibWl0ID0gX3Byb3BzNy52YWxpZEV4Y2VwdFN1Ym1pdCxcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBfcHJvcHM3LnZhbHVlcyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nID0gX3Byb3BzNy53YXJuaW5nLFxuICAgICAgICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzNywgWydhbnlUb3VjaGVkJywgJ2FycmF5SW5zZXJ0JywgJ2FycmF5TW92ZScsICdhcnJheVBvcCcsICdhcnJheVB1c2gnLCAnYXJyYXlSZW1vdmUnLCAnYXJyYXlSZW1vdmVBbGwnLCAnYXJyYXlTaGlmdCcsICdhcnJheVNwbGljZScsICdhcnJheVN3YXAnLCAnYXJyYXlVbnNoaWZ0JywgJ2FzeW5jRXJyb3JzJywgJ2FzeW5jVmFsaWRhdGUnLCAnYXN5bmNWYWxpZGF0aW5nJywgJ2JsdXInLCAnY2hhbmdlJywgJ2NsZWFyU3VibWl0JywgJ2Rlc3Ryb3knLCAnZGVzdHJveU9uVW5tb3VudCcsICdmb3JjZVVucmVnaXN0ZXJPblVubW91bnQnLCAnZGlydHknLCAnZGlzcGF0Y2gnLCAnZW5hYmxlUmVpbml0aWFsaXplJywgJ2Vycm9yJywgJ2ZvY3VzJywgJ2Zvcm0nLCAnZ2V0Rm9ybVN0YXRlJywgJ2luaXRpYWxpemUnLCAnaW5pdGlhbGl6ZWQnLCAnaW5pdGlhbFZhbHVlcycsICdpbnZhbGlkJywgJ2tlZXBEaXJ0eU9uUmVpbml0aWFsaXplJywgJ3ByaXN0aW5lJywgJ3Byb3BOYW1lc3BhY2UnLCAncmVnaXN0ZXJlZEZpZWxkcycsICdyZWdpc3RlckZpZWxkJywgJ3Jlc2V0JywgJ3NldFN1Ym1pdEZhaWxlZCcsICdzZXRTdWJtaXRTdWNjZWVkZWQnLCAnc2hvdWxkQXN5bmNWYWxpZGF0ZScsICdzaG91bGRWYWxpZGF0ZScsICdzdGFydEFzeW5jVmFsaWRhdGlvbicsICdzdGFydFN1Ym1pdCcsICdzdG9wQXN5bmNWYWxpZGF0aW9uJywgJ3N0b3BTdWJtaXQnLCAnc3VibWl0dGluZycsICdzdWJtaXRGYWlsZWQnLCAnc3VibWl0U3VjY2VlZGVkJywgJ3RvdWNoJywgJ3RvdWNoT25CbHVyJywgJ3RvdWNoT25DaGFuZ2UnLCAncGVyc2lzdGVudFN1Ym1pdEVycm9ycycsICdzeW5jRXJyb3JzJywgJ3N5bmNXYXJuaW5ncycsICd1bnJlZ2lzdGVyRmllbGQnLCAndW50b3VjaCcsICd1cGRhdGVTeW5jRXJyb3JzJywgJ3VwZGF0ZVN5bmNXYXJuaW5ncycsICd2YWxpZCcsICd2YWxpZEV4Y2VwdFN1Ym1pdCcsICd2YWx1ZXMnLCAnd2FybmluZyddKTtcbiAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuXG4gICAgICAgICAgICB2YXIgcmVkdXhGb3JtUHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgIGFueVRvdWNoZWQ6IGFueVRvdWNoZWQsXG4gICAgICAgICAgICAgIGFzeW5jVmFsaWRhdGU6IHRoaXMuYXN5bmNWYWxpZGF0ZSxcbiAgICAgICAgICAgICAgYXN5bmNWYWxpZGF0aW5nOiBhc3luY1ZhbGlkYXRpbmdcbiAgICAgICAgICAgIH0sIGJpbmRBY3Rpb25DcmVhdG9ycyh7IGJsdXI6IGJsdXIsIGNoYW5nZTogY2hhbmdlIH0sIGRpc3BhdGNoKSwge1xuICAgICAgICAgICAgICBjbGVhclN1Ym1pdDogY2xlYXJTdWJtaXQsXG4gICAgICAgICAgICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgICAgICAgICAgIGRpcnR5OiBkaXJ0eSxcbiAgICAgICAgICAgICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgIGZvcm06IGZvcm0sXG4gICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdDogdGhpcy5zdWJtaXQsXG4gICAgICAgICAgICAgIGluaXRpYWxpemU6IGluaXRpYWxpemUsXG4gICAgICAgICAgICAgIGluaXRpYWxpemVkOiBpbml0aWFsaXplZCxcbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlczogaW5pdGlhbFZhbHVlcyxcbiAgICAgICAgICAgICAgaW52YWxpZDogaW52YWxpZCxcbiAgICAgICAgICAgICAgcHJpc3RpbmU6IHByaXN0aW5lLFxuICAgICAgICAgICAgICByZXNldDogcmVzZXQsXG4gICAgICAgICAgICAgIHN1Ym1pdHRpbmc6IHN1Ym1pdHRpbmcsXG4gICAgICAgICAgICAgIHN1Ym1pdEZhaWxlZDogc3VibWl0RmFpbGVkLFxuICAgICAgICAgICAgICBzdWJtaXRTdWNjZWVkZWQ6IHN1Ym1pdFN1Y2NlZWRlZCxcbiAgICAgICAgICAgICAgdG91Y2g6IHRvdWNoLFxuICAgICAgICAgICAgICB1bnRvdWNoOiB1bnRvdWNoLFxuICAgICAgICAgICAgICB2YWxpZDogdmFsaWQsXG4gICAgICAgICAgICAgIHdhcm5pbmc6IHdhcm5pbmdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHByb3BzVG9QYXNzID0gX2V4dGVuZHMoe30sIHByb3BOYW1lc3BhY2UgPyBfZGVmaW5lUHJvcGVydHkoe30sIHByb3BOYW1lc3BhY2UsIHJlZHV4Rm9ybVByb3BzKSA6IHJlZHV4Rm9ybVByb3BzLCByZXN0KTtcbiAgICAgICAgICAgIGlmIChpc0NsYXNzQ29tcG9uZW50KFdyYXBwZWRDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgIHByb3BzVG9QYXNzLnJlZiA9ICd3cmFwcGVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIHByb3BzVG9QYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gRm9ybTtcbiAgICAgIH0oQ29tcG9uZW50KTtcblxuICAgICAgRm9ybS5kaXNwbGF5TmFtZSA9ICdGb3JtKCcgKyBnZXREaXNwbGF5TmFtZShXcmFwcGVkQ29tcG9uZW50KSArICcpJztcbiAgICAgIEZvcm0uV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgICBGb3JtLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgICBfcmVkdXhGb3JtOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICAgIH07XG4gICAgICBGb3JtLnByb3BUeXBlcyA9IHtcbiAgICAgICAgZGVzdHJveU9uVW5tb3VudDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGZvcmNlVW5yZWdpc3Rlck9uVW5tb3VudDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGZvcm06IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgaW5pdGlhbFZhbHVlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5LCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgICAgIGdldEZvcm1TdGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG9uU3VibWl0RmFpbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG9uU3VibWl0U3VjY2VzczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHByb3BOYW1lc3BhY2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHZhbGlkYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgd2FybjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHRvdWNoT25CbHVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgdG91Y2hPbkNoYW5nZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHRyaWdnZXJTdWJtaXQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBwZXJzaXN0ZW50U3VibWl0RXJyb3JzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgcmVnaXN0ZXJlZEZpZWxkczogUHJvcFR5cGVzLmFueVxuICAgICAgfTtcblxuICAgICAgdmFyIGNvbm5lY3RvciA9IGNvbm5lY3QoZnVuY3Rpb24gKHN0YXRlLCBwcm9wcykge1xuICAgICAgICB2YXIgZm9ybSA9IHByb3BzLmZvcm0sXG4gICAgICAgICAgICBnZXRGb3JtU3RhdGUgPSBwcm9wcy5nZXRGb3JtU3RhdGUsXG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzID0gcHJvcHMuaW5pdGlhbFZhbHVlcyxcbiAgICAgICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZSA9IHByb3BzLmVuYWJsZVJlaW5pdGlhbGl6ZSxcbiAgICAgICAgICAgIGtlZXBEaXJ0eU9uUmVpbml0aWFsaXplID0gcHJvcHMua2VlcERpcnR5T25SZWluaXRpYWxpemU7XG5cbiAgICAgICAgdmFyIGZvcm1TdGF0ZSA9IGdldEluKGdldEZvcm1TdGF0ZShzdGF0ZSkgfHwgZW1wdHksIGZvcm0pIHx8IGVtcHR5O1xuICAgICAgICB2YXIgc3RhdGVJbml0aWFsID0gZ2V0SW4oZm9ybVN0YXRlLCAnaW5pdGlhbCcpO1xuICAgICAgICB2YXIgaW5pdGlhbGl6ZWQgPSAhIXN0YXRlSW5pdGlhbDtcblxuICAgICAgICB2YXIgc2hvdWxkVXBkYXRlSW5pdGlhbFZhbHVlcyA9IGVuYWJsZVJlaW5pdGlhbGl6ZSAmJiBpbml0aWFsaXplZCAmJiAhZGVlcEVxdWFsKGluaXRpYWxWYWx1ZXMsIHN0YXRlSW5pdGlhbCk7XG4gICAgICAgIHZhciBzaG91bGRSZXNldFZhbHVlcyA9IHNob3VsZFVwZGF0ZUluaXRpYWxWYWx1ZXMgJiYgIWtlZXBEaXJ0eU9uUmVpbml0aWFsaXplO1xuXG4gICAgICAgIHZhciBpbml0aWFsID0gaW5pdGlhbFZhbHVlcyB8fCBzdGF0ZUluaXRpYWwgfHwgZW1wdHk7XG5cbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZUluaXRpYWxWYWx1ZXMpIHtcbiAgICAgICAgICBpbml0aWFsID0gc3RhdGVJbml0aWFsIHx8IGVtcHR5O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHZhbHVlcyA9IGdldEluKGZvcm1TdGF0ZSwgJ3ZhbHVlcycpIHx8IGluaXRpYWw7XG5cbiAgICAgICAgaWYgKHNob3VsZFJlc2V0VmFsdWVzKSB7XG4gICAgICAgICAgdmFsdWVzID0gaW5pdGlhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcmlzdGluZSA9IHNob3VsZFJlc2V0VmFsdWVzIHx8IGRlZXBFcXVhbChpbml0aWFsLCB2YWx1ZXMpO1xuICAgICAgICB2YXIgYXN5bmNFcnJvcnMgPSBnZXRJbihmb3JtU3RhdGUsICdhc3luY0Vycm9ycycpO1xuICAgICAgICB2YXIgc3luY0Vycm9ycyA9IGdldEluKGZvcm1TdGF0ZSwgJ3N5bmNFcnJvcnMnKSB8fCB7fTtcbiAgICAgICAgdmFyIHN5bmNXYXJuaW5ncyA9IGdldEluKGZvcm1TdGF0ZSwgJ3N5bmNXYXJuaW5ncycpIHx8IHt9O1xuICAgICAgICB2YXIgcmVnaXN0ZXJlZEZpZWxkcyA9IGdldEluKGZvcm1TdGF0ZSwgJ3JlZ2lzdGVyZWRGaWVsZHMnKTtcbiAgICAgICAgdmFyIHZhbGlkID0gaXNWYWxpZChmb3JtLCBnZXRGb3JtU3RhdGUsIGZhbHNlKShzdGF0ZSk7XG4gICAgICAgIHZhciB2YWxpZEV4Y2VwdFN1Ym1pdCA9IGlzVmFsaWQoZm9ybSwgZ2V0Rm9ybVN0YXRlLCB0cnVlKShzdGF0ZSk7XG4gICAgICAgIHZhciBhbnlUb3VjaGVkID0gISFnZXRJbihmb3JtU3RhdGUsICdhbnlUb3VjaGVkJyk7XG4gICAgICAgIHZhciBzdWJtaXR0aW5nID0gISFnZXRJbihmb3JtU3RhdGUsICdzdWJtaXR0aW5nJyk7XG4gICAgICAgIHZhciBzdWJtaXRGYWlsZWQgPSAhIWdldEluKGZvcm1TdGF0ZSwgJ3N1Ym1pdEZhaWxlZCcpO1xuICAgICAgICB2YXIgc3VibWl0U3VjY2VlZGVkID0gISFnZXRJbihmb3JtU3RhdGUsICdzdWJtaXRTdWNjZWVkZWQnKTtcbiAgICAgICAgdmFyIGVycm9yID0gZ2V0SW4oZm9ybVN0YXRlLCAnZXJyb3InKTtcbiAgICAgICAgdmFyIHdhcm5pbmcgPSBnZXRJbihmb3JtU3RhdGUsICd3YXJuaW5nJyk7XG4gICAgICAgIHZhciB0cmlnZ2VyU3VibWl0ID0gZ2V0SW4oZm9ybVN0YXRlLCAndHJpZ2dlclN1Ym1pdCcpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGFueVRvdWNoZWQ6IGFueVRvdWNoZWQsXG4gICAgICAgICAgYXN5bmNFcnJvcnM6IGFzeW5jRXJyb3JzLFxuICAgICAgICAgIGFzeW5jVmFsaWRhdGluZzogZ2V0SW4oZm9ybVN0YXRlLCAnYXN5bmNWYWxpZGF0aW5nJykgfHwgZmFsc2UsXG4gICAgICAgICAgZGlydHk6ICFwcmlzdGluZSxcbiAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgaW5pdGlhbGl6ZWQ6IGluaXRpYWxpemVkLFxuICAgICAgICAgIGludmFsaWQ6ICF2YWxpZCxcbiAgICAgICAgICBwcmlzdGluZTogcHJpc3RpbmUsXG4gICAgICAgICAgcmVnaXN0ZXJlZEZpZWxkczogcmVnaXN0ZXJlZEZpZWxkcyxcbiAgICAgICAgICBzdWJtaXR0aW5nOiBzdWJtaXR0aW5nLFxuICAgICAgICAgIHN1Ym1pdEZhaWxlZDogc3VibWl0RmFpbGVkLFxuICAgICAgICAgIHN1Ym1pdFN1Y2NlZWRlZDogc3VibWl0U3VjY2VlZGVkLFxuICAgICAgICAgIHN5bmNFcnJvcnM6IHN5bmNFcnJvcnMsXG4gICAgICAgICAgc3luY1dhcm5pbmdzOiBzeW5jV2FybmluZ3MsXG4gICAgICAgICAgdHJpZ2dlclN1Ym1pdDogdHJpZ2dlclN1Ym1pdCxcbiAgICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgICB2YWxpZDogdmFsaWQsXG4gICAgICAgICAgdmFsaWRFeGNlcHRTdWJtaXQ6IHZhbGlkRXhjZXB0U3VibWl0LFxuICAgICAgICAgIHdhcm5pbmc6IHdhcm5pbmdcbiAgICAgICAgfTtcbiAgICAgIH0sIGZ1bmN0aW9uIChkaXNwYXRjaCwgaW5pdGlhbFByb3BzKSB7XG4gICAgICAgIHZhciBiaW5kRm9ybSA9IGZ1bmN0aW9uIGJpbmRGb3JtKGFjdGlvbkNyZWF0b3IpIHtcbiAgICAgICAgICByZXR1cm4gYWN0aW9uQ3JlYXRvci5iaW5kKG51bGwsIGluaXRpYWxQcm9wcy5mb3JtKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBCaW5kIHRoZSBmaXJzdCBwYXJhbWV0ZXIgb24gYHByb3BzLmZvcm1gXG4gICAgICAgIHZhciBib3VuZEZvcm1BQ3MgPSBfbWFwVmFsdWVzKGZvcm1BY3Rpb25zLCBiaW5kRm9ybSk7XG4gICAgICAgIHZhciBib3VuZEFycmF5QUNzID0gX21hcFZhbHVlcyhhcnJheUFjdGlvbnMsIGJpbmRGb3JtKTtcbiAgICAgICAgdmFyIGJvdW5kQmx1ciA9IGZ1bmN0aW9uIGJvdW5kQmx1cihmaWVsZCwgdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gYmx1cihpbml0aWFsUHJvcHMuZm9ybSwgZmllbGQsIHZhbHVlLCAhIWluaXRpYWxQcm9wcy50b3VjaE9uQmx1cik7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBib3VuZENoYW5nZSA9IGZ1bmN0aW9uIGJvdW5kQ2hhbmdlKGZpZWxkLCB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBjaGFuZ2UoaW5pdGlhbFByb3BzLmZvcm0sIGZpZWxkLCB2YWx1ZSwgISFpbml0aWFsUHJvcHMudG91Y2hPbkNoYW5nZSwgISFpbml0aWFsUHJvcHMucGVyc2lzdGVudFN1Ym1pdEVycm9ycyk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBib3VuZEZvY3VzID0gYmluZEZvcm0oZm9jdXMpO1xuXG4gICAgICAgIC8vIFdyYXAgYWN0aW9uIGNyZWF0b3JzIHdpdGggYGRpc3BhdGNoYFxuICAgICAgICB2YXIgY29ubmVjdGVkRm9ybUFDcyA9IGJpbmRBY3Rpb25DcmVhdG9ycyhib3VuZEZvcm1BQ3MsIGRpc3BhdGNoKTtcbiAgICAgICAgdmFyIGNvbm5lY3RlZEFycmF5QUNzID0ge1xuICAgICAgICAgIGluc2VydDogYmluZEFjdGlvbkNyZWF0b3JzKGJvdW5kQXJyYXlBQ3MuYXJyYXlJbnNlcnQsIGRpc3BhdGNoKSxcbiAgICAgICAgICBtb3ZlOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYm91bmRBcnJheUFDcy5hcnJheU1vdmUsIGRpc3BhdGNoKSxcbiAgICAgICAgICBwb3A6IGJpbmRBY3Rpb25DcmVhdG9ycyhib3VuZEFycmF5QUNzLmFycmF5UG9wLCBkaXNwYXRjaCksXG4gICAgICAgICAgcHVzaDogYmluZEFjdGlvbkNyZWF0b3JzKGJvdW5kQXJyYXlBQ3MuYXJyYXlQdXNoLCBkaXNwYXRjaCksXG4gICAgICAgICAgcmVtb3ZlOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYm91bmRBcnJheUFDcy5hcnJheVJlbW92ZSwgZGlzcGF0Y2gpLFxuICAgICAgICAgIHJlbW92ZUFsbDogYmluZEFjdGlvbkNyZWF0b3JzKGJvdW5kQXJyYXlBQ3MuYXJyYXlSZW1vdmVBbGwsIGRpc3BhdGNoKSxcbiAgICAgICAgICBzaGlmdDogYmluZEFjdGlvbkNyZWF0b3JzKGJvdW5kQXJyYXlBQ3MuYXJyYXlTaGlmdCwgZGlzcGF0Y2gpLFxuICAgICAgICAgIHNwbGljZTogYmluZEFjdGlvbkNyZWF0b3JzKGJvdW5kQXJyYXlBQ3MuYXJyYXlTcGxpY2UsIGRpc3BhdGNoKSxcbiAgICAgICAgICBzd2FwOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYm91bmRBcnJheUFDcy5hcnJheVN3YXAsIGRpc3BhdGNoKSxcbiAgICAgICAgICB1bnNoaWZ0OiBiaW5kQWN0aW9uQ3JlYXRvcnMoYm91bmRBcnJheUFDcy5hcnJheVVuc2hpZnQsIGRpc3BhdGNoKVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjb21wdXRlZEFjdGlvbnMgPSBfZXh0ZW5kcyh7fSwgY29ubmVjdGVkRm9ybUFDcywgYm91bmRBcnJheUFDcywge1xuICAgICAgICAgIGJsdXI6IGJvdW5kQmx1cixcbiAgICAgICAgICBjaGFuZ2U6IGJvdW5kQ2hhbmdlLFxuICAgICAgICAgIGFycmF5OiBjb25uZWN0ZWRBcnJheUFDcyxcbiAgICAgICAgICBmb2N1czogYm91bmRGb2N1cyxcbiAgICAgICAgICBkaXNwYXRjaDogZGlzcGF0Y2hcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29tcHV0ZWRBY3Rpb25zO1xuICAgICAgICB9O1xuICAgICAgfSwgdW5kZWZpbmVkLCB7IHdpdGhSZWY6IHRydWUgfSk7XG4gICAgICB2YXIgQ29ubmVjdGVkRm9ybSA9IGhvaXN0U3RhdGljcyhjb25uZWN0b3IoRm9ybSksIFdyYXBwZWRDb21wb25lbnQpO1xuICAgICAgQ29ubmVjdGVkRm9ybS5kZWZhdWx0UHJvcHMgPSBjb25maWc7XG5cbiAgICAgIC8vIGJ1aWxkIG91dGVyIGNvbXBvbmVudCB0byBleHBvc2UgaW5zdGFuY2UgYXBpXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gICAgICAgIF9pbmhlcml0cyhSZWR1eEZvcm0sIF9Db21wb25lbnQyKTtcblxuICAgICAgICBmdW5jdGlvbiBSZWR1eEZvcm0oKSB7XG4gICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlZHV4Rm9ybSk7XG5cbiAgICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJlZHV4Rm9ybS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlZHV4Rm9ybSkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgICB9XG5cbiAgICAgICAgX2NyZWF0ZUNsYXNzKFJlZHV4Rm9ybSwgW3tcbiAgICAgICAgICBrZXk6ICdzdWJtaXQnLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJtaXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZzLndyYXBwZWQuZ2V0V3JhcHBlZEluc3RhbmNlKCkuc3VibWl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAncmVzZXQnLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZnMud3JhcHBlZC5nZXRXcmFwcGVkSW5zdGFuY2UoKS5yZXNldCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHM4ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzID0gX3Byb3BzOC5pbml0aWFsVmFsdWVzLFxuICAgICAgICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzOCwgWydpbml0aWFsVmFsdWVzJ10pO1xuXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChDb25uZWN0ZWRGb3JtLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgICAgICAgICByZWY6ICd3cmFwcGVkJyxcbiAgICAgICAgICAgICAgLy8gY29udmVydCBpbml0aWFsVmFsdWVzIGlmIG5lZWQgdG9cbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlczogZnJvbUpTKGluaXRpYWxWYWx1ZXMpXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAndmFsaWQnLFxuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmcy53cmFwcGVkLmdldFdyYXBwZWRJbnN0YW5jZSgpLmlzVmFsaWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdpbnZhbGlkJyxcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy52YWxpZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdwcmlzdGluZScsXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZzLndyYXBwZWQuZ2V0V3JhcHBlZEluc3RhbmNlKCkuaXNQcmlzdGluZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ2RpcnR5JyxcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5wcmlzdGluZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICd2YWx1ZXMnLFxuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmcy53cmFwcGVkLmdldFdyYXBwZWRJbnN0YW5jZSgpLmdldFZhbHVlcygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ2ZpZWxkTGlzdCcsXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAvLyBtYWlubHkgcHJvdmlkZWQgZm9yIHRlc3RpbmdcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZnMud3JhcHBlZC5nZXRXcmFwcGVkSW5zdGFuY2UoKS5nZXRGaWVsZExpc3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICd3cmFwcGVkSW5zdGFuY2UnLFxuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgLy8gZm9yIHRlc3RpbmdcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZnMud3JhcHBlZC5nZXRXcmFwcGVkSW5zdGFuY2UoKS5yZWZzLndyYXBwZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIFJlZHV4Rm9ybTtcbiAgICAgIH0oQ29tcG9uZW50KTtcbiAgICB9O1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdXhGb3JtO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4LWZvcm0vZXMvY3JlYXRlUmVkdXhGb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSA5Mjdcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5cbnZhciBjcmVhdGVWYWx1ZXMgPSBmdW5jdGlvbiBjcmVhdGVWYWx1ZXMoX3JlZikge1xuICB2YXIgZ2V0SW4gPSBfcmVmLmdldEluO1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHZhciBfcHJvcCRnZXRGb3JtU3RhdGUkY28gPSBfZXh0ZW5kcyh7XG4gICAgICBwcm9wOiAndmFsdWVzJyxcbiAgICAgIGdldEZvcm1TdGF0ZTogZnVuY3Rpb24gZ2V0Rm9ybVN0YXRlKHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBnZXRJbihzdGF0ZSwgJ2Zvcm0nKTtcbiAgICAgIH1cbiAgICB9LCBjb25maWcpLFxuICAgICAgICBmb3JtID0gX3Byb3AkZ2V0Rm9ybVN0YXRlJGNvLmZvcm0sXG4gICAgICAgIHByb3AgPSBfcHJvcCRnZXRGb3JtU3RhdGUkY28ucHJvcCxcbiAgICAgICAgZ2V0Rm9ybVN0YXRlID0gX3Byb3AkZ2V0Rm9ybVN0YXRlJGNvLmdldEZvcm1TdGF0ZTtcblxuICAgIHJldHVybiBjb25uZWN0KGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcCwgZ2V0SW4oZ2V0Rm9ybVN0YXRlKHN0YXRlKSwgZm9ybSArICcudmFsdWVzJykpO1xuICAgIH1cbiAgICAvLyBpZ25vcmUgZGlzcGF0Y2hcbiAgICApO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVmFsdWVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4LWZvcm0vZXMvY3JlYXRlVmFsdWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5NjBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0VEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdkVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzlNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdnhCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==