"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var SvgIcon_1 = require("@material-ui/core/SvgIcon");
var styles = function (theme) {
    return core_1.createStyles({
        root: {
            width: 20,
            height: 20,
        },
        color: {
            fill: theme.palette.grey[500],
        },
    });
};
var CopyToClipboardIcon = function (props) {
    var classes = props.classes, other = __rest(props, ["classes"]);
    return (React.createElement(SvgIcon_1.default, __assign({ classes: { root: classes.root } }, other),
        React.createElement("path", { className: classes.color, d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" })));
};
exports.default = core_1.withStyles(styles)(CopyToClipboardIcon);
//# sourceMappingURL=CopyToClipboardIcon.js.map