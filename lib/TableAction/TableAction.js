"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var core_1 = require("@material-ui/core");
var styles = function (theme) {
    return core_1.createStyles({
        action: {
            borderRadius: 0,
            boxSizing: 'border-box',
            height: 40,
            border: "1px solid " + theme.palette.grey[300],
        },
    });
};
var TableAction = function (props) {
    var child = React.Children.only(props.children);
    var nextChild = React.cloneElement(child, {
        className: classnames_1.default(child.props.className, props.classes.action),
    });
    return React.createElement(React.Fragment, null, nextChild);
};
exports.default = core_1.withStyles(styles)(TableAction);
//# sourceMappingURL=TableAction.js.map