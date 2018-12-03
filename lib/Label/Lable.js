"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Typography_1 = require("@material-ui/core/Typography");
var classnames_1 = require("classnames");
var core_1 = require("@material-ui/core");
var Paper_1 = require("@material-ui/core/Paper");
var styles = function (theme) {
    return core_1.createStyles({
        paper: {
            borderRadius: 0,
            color: 'white',
            display: 'inline-flex',
            padding: 5,
            margin: 2,
        },
        personalization: {
            backgroundColor: '#563eb2',
        },
        feed: {
            backgroundColor: '#538886',
        },
        userData: {
            backgroundColor: '#e45a74',
        },
        title: {
            fontSize: '11px',
            fontWeight: 200,
            color: 'white',
        },
    });
};
var Lable = function (props) {
    var _a;
    var classes = props.classes, kind = props.kind;
    var className = classnames_1.default(classes.paper, (_a = {},
        _a[classes.personalization] = kind === 'Personalization',
        _a[classes.feed] = kind === 'Feed',
        _a[classes.userData] = kind === 'User Data',
        _a));
    return (React.createElement(Paper_1.default, { elevation: 0, className: className },
        React.createElement(Typography_1.default, { classes: { title: props.classes.title }, variant: "title", component: "p" }, kind)));
};
exports.default = core_1.withStyles(styles)(Lable);
//# sourceMappingURL=Lable.js.map