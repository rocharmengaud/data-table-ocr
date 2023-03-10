"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _materialReactTable = _interopRequireDefault(require("material-react-table"));
require("./data-table-ocr.css");
var DataTableOCR = function DataTableOCR(props) {
  var columns = (0, _react.useMemo)(function () {
    return [{
      accessorKey: 'firstName',
      header: 'First Name',
      size: 50
    }, {
      accessorKey: 'lastName',
      header: 'Last Name',
      size: 50
    }, {
      accessorKey: 'dateOfBirth',
      header: 'Date of birth',
      size: 50
    }, {
      accessorKey: 'startDate',
      header: 'Start date',
      size: 50
    }, {
      accessorKey: 'street',
      header: 'Street',
      size: 50
    }, {
      accessorKey: 'city',
      header: 'City',
      size: 50
    }, {
      accessorKey: 'state',
      header: 'State',
      size: 50
    }, {
      accessorKey: 'zipcode',
      header: 'Zip code',
      size: 50
    }, {
      accessorKey: 'department',
      header: 'Department',
      size: 50
    }];
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "table",
    style: {
      width: '90%',
      margin: '0 auto'
    }
  }, /*#__PURE__*/_react.default.createElement(_materialReactTable.default, {
    columns: columns,
    data: props.data
  }));
};
var _default = DataTableOCR;
exports.default = _default;