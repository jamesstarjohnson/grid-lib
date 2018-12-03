"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var Typography_1 = require("@material-ui/core/Typography");
var core_1 = require("@material-ui/core");
var ArrowDownward_1 = require("@material-ui/icons/ArrowDownward");
var ArrowUpward_1 = require("@material-ui/icons/ArrowUpward");
var styles = function (theme) {
    return core_1.createStyles({
        container: {
            display: 'inline-flex',
            alignItems: 'center',
        },
        sortable: {
            cursor: 'pointer',
        },
        text: {
            color: 'black',
            fontSize: 14,
            fontWeight: 'bold',
        },
        arrow: {
            transform: 'scale(0.8)',
            fill: 'black',
        },
    });
};
var HeaderCell = function (props) {
    var _a;
    return (React.createElement("div", { onClick: props.sortable ? props.onClick : function () { return undefined; }, className: classnames_1.default(props.classes.container, (_a = {},
            _a[props.classes.sortable] = props.sortable,
            _a)) },
        React.createElement(Typography_1.default, { className: props.classes.text, component: "p" }, props.header ? props.header : props.name),
        props.sort &&
            props.sort === 'ASC' && React.createElement(ArrowDownward_1.default, { className: props.classes.arrow }),
        props.sort &&
            props.sort === 'DESC' && React.createElement(ArrowUpward_1.default, { className: props.classes.arrow })));
};
exports.default = core_1.withStyles(styles)(HeaderCell);
//# sourceMappingURL=HeaderCell.js.map