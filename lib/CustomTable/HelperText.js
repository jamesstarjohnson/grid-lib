"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Typography_1 = require("@material-ui/core/Typography");
var core_1 = require("@material-ui/core");
var styles = function (theme) {
    return core_1.createStyles({
        subtitle2: {
            fontSize: '13px',
            fontWeight: 300,
            color: theme.palette.grey[500],
        },
    });
};
var HelperText = function (props) { return (React.createElement(Typography_1.default, { classes: props.classes, variant: "subtitle2", component: "p" }, props.helperText)); };
exports.default = core_1.withStyles(styles)(HelperText);
//# sourceMappingURL=HelperText.js.map