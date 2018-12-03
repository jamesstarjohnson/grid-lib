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
var classnames_1 = require("classnames");
var Search_1 = require("@material-ui/icons/Search");
var InputAdornment_1 = require("@material-ui/core/InputAdornment");
var TextField_1 = require("@material-ui/core/TextField");
var TableAction_1 = require("../TableAction");
var styles = function (theme) {
    return core_1.createStyles({
        inputContainer: {
            flexDirection: 'initial',
            backgroundColor: 'white',
        },
        input: {
            paddingLeft: 10,
        },
        searchIcon: {
            color: "" + theme.palette.grey[300],
        },
    });
};
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (event) {
            _this.props.onChange(event.target.value);
        };
        return _this;
    }
    Search.prototype.render = function () {
        var _a = this.props, classes = _a.classes, searchValue = _a.searchValue, className = _a.className;
        return (React.createElement(TableAction_1.default, null,
            React.createElement(TextField_1.default, { defaultValue: searchValue, label: false, inputProps: { className: classes.input }, InputProps: {
                    disableUnderline: true,
                    endAdornment: (React.createElement(InputAdornment_1.default, { position: "start" },
                        React.createElement(Search_1.default, { color: "disabled", className: classes.searchIcon }))),
                }, className: classnames_1.default(classes.inputContainer, className), onChange: this.handleChange })));
    };
    return Search;
}(React.Component));
exports.default = core_1.withStyles(styles)(Search);
//# sourceMappingURL=SearchField.js.map