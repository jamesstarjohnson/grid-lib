"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var Typography_1 = require("@material-ui/core/Typography");
var core_1 = require("@material-ui/core");
var Paper_1 = require("@material-ui/core/Paper");
var HelperText_1 = require("./HelperText");
var styles = function (theme) {
    return core_1.createStyles({
        paper: {
            backgroundColor: 'inherit',
        },
        title: {
            fontSize: '14px',
            fontWeight: 'normal',
            color: theme.palette.grey[700],
        },
    });
};
var RegularCell = function (props) { return (React.createElement(Paper_1.default, { elevation: 0, className: classnames_1.default(props.classes.paper, props.className) },
    React.createElement(Typography_1.default, { className: props.classes.title, variant: "title", component: "p" }, props.value),
    props.helperText && React.createElement(HelperText_1.default, { helperText: props.helperText }))); };
exports.default = core_1.withStyles(styles)(RegularCell);
//# sourceMappingURL=RegularCell.js.map