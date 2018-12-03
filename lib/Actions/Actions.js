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
var Delete_1 = require("@material-ui/icons/Delete");
var Edit_1 = require("@material-ui/icons/Edit");
var IconButton_1 = require("@material-ui/core/IconButton");
var Grid_1 = require("@material-ui/core/Grid");
var styled_1 = require("../styled");
var IconStyled = styled_1.default(IconButton_1.default)(function (theme) { return ({
    color: '#2a5fed',
    transform: 'scale(0.9)',
}); });
var Actions = /** @class */ (function (_super) {
    __extends(Actions, _super);
    function Actions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleEdit = function (event) {
            event.preventDefault();
            event.stopPropagation();
            _this.props.onEdit(_this.props.data);
        };
        _this.handleDelete = function () {
            _this.props.onDelete(_this.props.data);
        };
        return _this;
    }
    Actions.prototype.render = function () {
        var _a = this.props, onDelete = _a.onDelete, onEdit = _a.onEdit, selected = _a.selected;
        return (React.createElement(Grid_1.default, { container: true, alignItems: "center", style: { width: '100px' } },
            React.createElement(Grid_1.default, { item: true, xs: 4 }, onEdit &&
                selected && (React.createElement("div", { onClick: this.handleEdit },
                React.createElement(IconStyled, null,
                    React.createElement(Edit_1.default, null))))),
            React.createElement(Grid_1.default, { item: true, xs: 4 }, onDelete && (React.createElement("div", { onClick: this.handleDelete },
                React.createElement(IconStyled, null,
                    React.createElement(Delete_1.default, null)))))));
    };
    return Actions;
}(React.Component));
exports.default = Actions;
//# sourceMappingURL=Actions.js.map