"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TableCell_1 = require("@material-ui/core/TableCell");
var styled_1 = require("../styled");
var StyledTableCell = styled_1.default(TableCell_1.default)(function (theme) { return ({
    borderBottom: "1px solid " + theme.palette.grey[300],
}); }, { name: 'StyledTableCell' });
exports.default = StyledTableCell;
//# sourceMappingURL=StyledTableCell.js.map