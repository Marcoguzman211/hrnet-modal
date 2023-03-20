"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = _ref => {
  let {
    onClose,
    employeeName,
    headerText,
    bodyText,
    buttonText,
    buttonClass,
    sizeClass,
    bgColorClass
  } = _ref;
  // Define default classes
  const defaultButtonClass = "bg-indigo-600";
  const defaultSizeClass = "sm:max-w-lg";
  const defaultBgColorClass = "bg-gray-500";

  // Combine default classes with any custom classes provided
  const buttonClasses = "".concat(defaultButtonClass, " ").concat(buttonClass);
  const sizeClasses = "".concat(defaultSizeClass, " ").concat(sizeClass);
  const bgColorClasses = "".concat(defaultBgColorClass, " ").concat(bgColorClass);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "fixed z-50 inset-0 overflow-y-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center justify-center min-h-screen px-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fixed inset-0 opacity-75 ".concat(bgColorClasses)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "rounded-lg overflow-hidden shadow-xl transform transition-all bg-white ".concat(sizeClasses)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "px-4 py-5 sm:p-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sm:flex sm:items-start"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "h-6 w-6 text-indigo-600",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 13l4 4L19 7"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "text-lg leading-6 font-medium text-indigo-900"
  }, headerText), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text-sm text-indigo-500"
  }, bodyText, " ", employeeName))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClose,
    type: "button",
    className: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 ".concat(buttonClasses, " text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm")
  }, buttonText)))));
};
var _default = Modal;
exports.default = _default;
Modal.propTypes = {
  onClose: _propTypes.default.func.isRequired,
  employeeName: _propTypes.default.string.isRequired,
  headerText: _propTypes.default.string,
  bodyText: _propTypes.default.string,
  buttonText: _propTypes.default.string,
  buttonClass: _propTypes.default.string,
  sizeClass: _propTypes.default.string,
  bgColorClass: _propTypes.default.string
};
Modal.defaultProps = {
  headerText: "Employee Created",
  bodyText: "New user created:",
  buttonText: "OK",
  buttonClass: "",
  sizeClass: "sm:max-w-lg",
  bgColorClass: "bg-gray-500"
};