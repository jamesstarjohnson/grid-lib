"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var lodash_1 = require("lodash");
var CoreTable_1 = require("../CoreTable");
var ColumnsSelector_1 = require("../ColumnsSelector");
var TableActions_1 = require("../TableActions");
var SmartTable = /** @class */ (function (_super) {
    __extends(SmartTable, _super);
    function SmartTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleSort = function (name) {
            var _a = _this.props, selectedRows = _a.selectedRows, columns = _a.columns;
            var sortValue;
            var sort = _this.props.sort;
            if (!sort) {
                sortValue = { name: name, value: 'ASC' };
            }
            else if (sort.name === name && sort.value === 'ASC') {
                sortValue = { name: name, value: 'DESC' };
            }
            else if (sort.name === name && sort.value === 'DESC') {
                sortValue = { name: name, value: 'ASC' };
            }
            else if (sort.name !== name) {
                sortValue = { name: name, value: 'ASC' };
            }
            _this.props.onChange(sortValue, selectedRows, columns);
        };
        _this.handleColumnChange = function (columnsChecked) {
            var _a = _this.props, sort = _a.sort, selectedRows = _a.selectedRows;
            var columns = _this.props.columns.map(function (c) { return (__assign({}, c, { display: columnsChecked[c.name] })); });
            _this.props.onChange(sort, selectedRows, columns);
        };
        _this.getColumns = lodash_1.memoize(function (columns) {
            return columns.filter(function (c) { return !!c.display; });
        });
        _this.handleSelect = function (index) {
            var _a, _b;
            var _c = _this.props, multiselect = _c.multiselect, sort = _c.sort, columns = _c.columns;
            var selectedRows = multiselect
                ? __assign({}, _this.props.selectedRows, (_a = {}, _a[index] = !_this.props.selectedRows[index], _a)) : (_b = {},
                _b[index] = !_this.props.selectedRows[index],
                _b);
            _this.props.onChange(sort, selectedRows, columns);
        };
        _this.getColumnsChecked = lodash_1.memoize(function (columns) {
            return columns.reduce(function (acc, next) {
                acc[next.name] = !!next.display;
                return acc;
            }, {});
        });
        _this.getColumnIds = lodash_1.memoize(function (columns) { return columns.map(function (c) { return c.name; }); });
        return _this;
    }
    SmartTable.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(TableActions_1.default, null,
                this.props.tableActionsRenderer(),
                React.createElement(ColumnsSelector_1.default, { columnIds: this.getColumnIds(this.props.columns), columnsChecked: this.getColumnsChecked(this.props.columns), onChange: this.handleColumnChange })),
            React.createElement(CoreTable_1.default, { sort: this.props.sort, onSelect: this.handleSelect, selectedRows: this.props.selectedRows, onSort: this.handleSort, data: this.props.data, columns: this.getColumns(this.props.columns), actionsRenderer: this.props.actionsRenderer })));
    };
    return SmartTable;
}(React.Component));
exports.default = SmartTable;
//# sourceMappingURL=SmartTable.js.map