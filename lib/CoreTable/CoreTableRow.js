"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var TableRow_1 = require("@material-ui/core/TableRow");
var core_1 = require("@material-ui/core");
var styles = function (theme) {
    return core_1.createStyles({
        root: {
            '&$selected': {
                backgroundColor: '#e5f2fe',
            },
            '&$hover:hover': {
                backgroundColor: theme.palette.grey[100],
            },
        },
        hover: {},
        selected: {},
        footer: {},
        head: {},
    });
};
var CoreTableRow = function (_a) {
    var selected = _a.selected, index = _a.index, classes = _a.classes, hover = _a.hover, className = _a.className, onSelect = _a.onSelect, children = _a.children;
    var handleSelect = function () {
        onSelect(index);
    };
    return (React.createElement(TableRow_1.default, { hover: hover, selected: selected, classes: classes, className: className, onClick: handleSelect }, children));
};
exports.default = core_1.withStyles(styles)(CoreTableRow);
//# sourceMappingURL=CoreTableRow.js.map