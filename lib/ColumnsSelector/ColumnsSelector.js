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
var ArrowDropDown_1 = require("@material-ui/icons/ArrowDropDown");
var FormControlLabel_1 = require("@material-ui/core/FormControlLabel");
var Checkbox_1 = require("@material-ui/core/Checkbox");
var Menu_1 = require("@material-ui/core/Menu");
var MenuItem_1 = require("@material-ui/core/MenuItem");
var TableAction_1 = require("../TableAction");
var StyledButton_1 = require("./StyledButton");
var ColumnsSelector = /** @class */ (function (_super) {
    __extends(ColumnsSelector, _super);
    function ColumnsSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            anchorEl: null,
        };
        _this.handleClick = function (event) {
            _this.setState({ anchorEl: event.currentTarget });
        };
        _this.handleClose = function () {
            _this.setState({ anchorEl: null });
        };
        _this.handleChange = function (column) { return function (event) {
            var _a;
            _this.props.onChange(__assign({}, _this.props.columnsChecked, (_a = {}, _a[column] = event.target.checked, _a)));
        }; };
        return _this;
    }
    ColumnsSelector.prototype.render = function () {
        var _this = this;
        var anchorEl = this.state.anchorEl;
        var _a = this.props, columnsChecked = _a.columnsChecked, columnIds = _a.columnIds;
        return (React.createElement(React.Fragment, null,
            React.createElement(TableAction_1.default, null,
                React.createElement(StyledButton_1.default, { variant: "outlined", "aria-owns": anchorEl ? 'Columns' : undefined, "aria-haspopup": "true", onClick: this.handleClick },
                    "Columns",
                    React.createElement(ArrowDropDown_1.default, null))),
            React.createElement(Menu_1.default, { id: "columns-menu", anchorEl: anchorEl, open: Boolean(anchorEl), onClose: this.handleClose }, columnIds.map(function (column) { return (React.createElement(MenuItem_1.default, { key: column },
                React.createElement(FormControlLabel_1.default, { control: React.createElement(Checkbox_1.default, { color: "default", checked: columnsChecked[column], onChange: _this.handleChange(column), value: column }), label: column }))); }))));
    };
    return ColumnsSelector;
}(React.Component));
exports.default = ColumnsSelector;
//# sourceMappingURL=ColumnsSelector.js.map