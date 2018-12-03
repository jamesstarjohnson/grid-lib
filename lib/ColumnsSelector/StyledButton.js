"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button_1 = require("@material-ui/core/Button");
var styled_1 = require("../styled");
var StyledButton = styled_1.default(Button_1.default)(function (theme) { return ({
    paddingTop: 0,
    paddingBottom: 0,
    color: theme.palette.grey[700],
    textTransform: 'initial',
}); }, { name: 'StyledTableCell' });
exports.default = StyledButton;
//# sourceMappingURL=StyledButton.js.map