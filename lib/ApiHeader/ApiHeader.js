"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Typography_1 = require("@material-ui/core/Typography");
var core_1 = require("@material-ui/core");
var Grid_1 = require("@material-ui/core/Grid");
var Button_1 = require("@material-ui/core/Button");
var styles = function (theme) {
    return core_1.createStyles({
        container: {
            paddingTop: 15,
            paddingBottom: 15,
        },
        apiKeys: {
            fontWeight: 'bold',
            color: theme.palette.grey[900],
        },
        addNew: {
            borderRadius: 0,
            textTransform: 'initial',
            boxShadow: 'initial',
            color: 'white',
            backgroundColor: '#2a5fed',
            padding: 10,
            fontSize: 14,
        },
    });
};
var ApiHeader = function (props) { return (React.createElement(Grid_1.default, { classes: { container: props.classes.container }, container: true, alignItems: "center" },
    React.createElement(Grid_1.default, { item: true, xs: 1 },
        React.createElement(Typography_1.default, { classes: { h5: props.classes.apiKeys }, variant: "h5" }, "API Keys")),
    React.createElement(Grid_1.default, { item: true, xs: 1 },
        React.createElement(Button_1.default, { onClick: props.onClick, classes: { root: props.classes.addNew }, variant: "contained" }, "New Key")))); };
exports.default = core_1.withStyles(styles)(ApiHeader);
//# sourceMappingURL=ApiHeader.js.map