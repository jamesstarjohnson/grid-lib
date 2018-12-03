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
var core_1 = require("@material-ui/core");
var InputBase_1 = require("@material-ui/core/InputBase");
var Search_1 = require("@material-ui/icons/Search");
var styles = function (theme) {
    return core_1.createStyles({
        icon: {
            padding: '0 18px 0 24px',
            fill: theme.palette.grey[500],
        },
        container: {
            display: 'flex',
            alignItems: 'center',
            padding: '10px 0',
            borderTop: '1px solid' + theme.palette.grey[300],
            borderBottom: '1px solid' + theme.palette.grey[300],
            backgroundColor: '#f5f5f5',
        },
        input: {
            '&::placeholder': {
                color: theme.palette.grey[500],
                fontSize: 14,
            },
            fontSize: 14,
        },
    });
};
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: '',
        };
        _this.handleKeyPress = function (event) {
            if (event.key === 'Enter') {
                _this.props.onSearch(_this.state.value);
            }
        };
        _this.handleChange = function (event) {
            _this.setState({ value: event.target.value });
        };
        return _this;
    }
    Search.prototype.render = function () {
        var classes = this.props.classes;
        return (React.createElement("div", { className: classes.container },
            React.createElement(Search_1.default, { className: this.props.classes.icon }),
            React.createElement(InputBase_1.default, { type: "text", classes: { input: this.props.classes.input }, placeholder: "Search", fullWidth: true, value: this.state.value, onChange: this.handleChange, onKeyPress: this.handleKeyPress })));
    };
    return Search;
}(React.Component));
exports.default = core_1.withStyles(styles)(Search);
//# sourceMappingURL=Search.js.map