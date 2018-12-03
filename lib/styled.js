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
var classnames_1 = require("classnames");
var core_1 = require("@material-ui/core");
var styled = function (ComponentToStyle) { return function (style, options) {
    var StyledComponent = function (props) {
        var classes = props.classes, className = props.className, other = __rest(props, ["classes", "className"]);
        return (React.createElement(ComponentToStyle, __assign({ className: classnames_1.default(classes.root, className) }, other)));
    };
    var styles = typeof style === 'function'
        ? function (theme) { return ({ root: style(theme) }); }
        : { root: style };
    return core_1.withStyles(styles, options)(StyledComponent);
}; };
exports.default = styled;
//# sourceMappingURL=styled.js.map