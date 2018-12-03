"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Table_1 = require("@material-ui/core/Table");
var styled_1 = require("../styled");
var StyledTable = styled_1.default(Table_1.default)(function (theme) { return ({
    backgroundColor: 'white',
    minWidth: 700,
    border: "1px solid " + theme.palette.grey['300'],
}); }, { name: 'StyledTable' });
exports.default = StyledTable;
//# sourceMappingURL=StyledTable.js.map