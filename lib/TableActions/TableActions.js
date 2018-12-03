"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var styles = function (theme) {
    return core_1.createStyles({
        container: {
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            paddingTop: 10,
            paddingBottom: 10,
        },
    });
};
var TableActions = function (props) {
    var classes = props.classes, children = props.children;
    return React.createElement("div", { className: classes.container }, children);
};
exports.default = core_1.withStyles(styles)(TableActions);
//# sourceMappingURL=TableActions.js.map