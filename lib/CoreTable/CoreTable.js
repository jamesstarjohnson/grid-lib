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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var TableBody_1 = require("@material-ui/core/TableBody");
var TableHead_1 = require("@material-ui/core/TableHead");
var TableRow_1 = require("@material-ui/core/TableRow");
var StyledTable_1 = require("./StyledTable");
var StyledTableCell_1 = require("./StyledTableCell");
var HeaderCell_1 = require("./HeaderCell");
var CoreTableRow_1 = require("./CoreTableRow");
var CoreTable = /** @class */ (function (_super) {
    __extends(CoreTable, _super);
    function CoreTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleHeaderCellClick = function (name) { return function () {
            if (_this.props.onSort) {
                _this.props.onSort(name);
            }
        }; };
        _this.getHeaderSort = function (name) {
            if (_this.props.sort && _this.props.sort.name === name) {
                return _this.props.sort.value;
            }
            return undefined;
        };
        _this.renderDefaultHeaderCell = function (col) { return (React.createElement(HeaderCell_1.default, { sortable: col.sortable, sort: _this.getHeaderSort(col.name), onClick: _this.handleHeaderCellClick(col.name), name: col.name, header: col.header })); };
        return _this;
    }
    Object.defineProperty(CoreTable.prototype, "columns", {
        get: function () {
            return this.props.actionsRenderer
                ? this.props.columns.concat([
                    {
                        name: '',
                        render: this.props.actionsRenderer,
                        sortable: false,
                    },
                ]) : this.props.columns;
        },
        enumerable: true,
        configurable: true
    });
    CoreTable.prototype.render = function () {
        var _this = this;
        var data = this.props.data;
        return (React.createElement(StyledTable_1.default, null,
            React.createElement(TableHead_1.default, null,
                React.createElement(TableRow_1.default, null, this.columns.map(function (col, i) { return (React.createElement(StyledTableCell_1.default, { key: i }, col.renderHeaderCell
                    ? col.renderHeaderCell(col)
                    : _this.renderDefaultHeaderCell(col))); }))),
            React.createElement(TableBody_1.default, null, data.map(function (row, i) { return (React.createElement(CoreTableRow_1.default, { hover: true, key: i, index: i, selected: _this.props.selectedRows[i], onSelect: _this.props.onSelect }, _this.columns.map(function (col, colIndex) { return (React.createElement(StyledTableCell_1.default, { key: colIndex }, col.render(row, _this.props.selectedRows[i]))); }))); }))));
    };
    return CoreTable;
}(React.Component));
exports.default = CoreTable;
//# sourceMappingURL=CoreTable.js.map