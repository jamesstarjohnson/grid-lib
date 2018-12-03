"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var IconButton_1 = require("@material-ui/core/IconButton");
var CopyToClipboardIcon_1 = require("./CopyToClipboardIcon");
var copyToClipboard = function (key) { return function (event) {
    event.stopPropagation();
    if (!navigator.clipboard) {
        console.error('clipboard api is not suported in this browser');
        return;
    }
    navigator.clipboard.writeText(key).then(function () { return undefined; }, function () {
        console.error('saving to clipboard failed');
    });
}; };
var KeyCell = function (_a) {
    var value = _a.value;
    return (React.createElement(React.Fragment, null,
        Array.from(Array(32)).map(function (_, i) { return (React.createElement("span", { key: i }, "\u25CF")); }),
        React.createElement(IconButton_1.default, { onClick: copyToClipboard(value) },
            React.createElement(CopyToClipboardIcon_1.default, null))));
};
exports.default = KeyCell;
//# sourceMappingURL=KeyCell.js.map