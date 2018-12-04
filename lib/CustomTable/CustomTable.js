"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var RegularCell_1 = require("./RegularCell");
var Label_1 = require("./Label");
var KeyCell_1 = require("./KeyCell");
var SearchField_1 = require("../SearchField");
var SmartTable_1 = require("../SmartTable");
var CustomTable = /** @class */ (function (_super) {
    __extends(CustomTable, _super);
    function CustomTable(props) {
        var _this = _super.call(this, props) || this;
        _this.renderName = function (data) { return (React.createElement(RegularCell_1.default, { value: data.name, helperText: data.helperText && data.helperText.name })); };
        _this.renderKey = function (data) { return React.createElement(KeyCell_1.default, { value: data.key }); };
        _this.renderDate = function (data) { return (React.createElement(RegularCell_1.default, { value: data.created.toDateString(), helperText: data.helperText && data.helperText.created })); };
        _this.renderAcl = function (data) {
            return (React.createElement("div", null, data.acl.map(function (item, i) { return (React.createElement(Label_1.default, { key: i, kind: item })); })));
        };
        _this.renderHeaderCell = function (col) {
            return React.createElement("span", null, col.header);
        };
        _this.handleSearch = function (value) {
            _this.setState({ searchValue: value });
        };
        _this.renderTableActions = function () {
            return (React.createElement(SearchField_1.default, { searchValue: _this.state.searchValue, onChange: _this.handleSearch }));
        };
        _this.handleChange = function (sort, selectedRows, columns) {
            _this.setState({
                sort: sort,
                selectedRows: selectedRows,
                columns: columns,
            });
        };
        _this.state = {
            sort: undefined,
            searchValue: undefined,
            selectedRows: {},
            columns: [
                {
                    header: 'Name1',
                    name: 'Name',
                    render: _this.renderName,
                    sortable: true,
                    display: true,
                },
                {
                    header: 'Key',
                    name: 'Key',
                    render: _this.renderKey,
                    renderHeaderCell: _this.renderHeaderCell,
                    sortable: false,
                    display: true,
                },
                {
                    header: 'ACL',
                    name: 'ACL',
                    render: _this.renderAcl,
                    renderHeaderCell: _this.renderHeaderCell,
                    sortable: false,
                    display: true,
                },
                {
                    header: 'Last Modified',
                    name: 'Last Modified',
                    render: _this.renderDate,
                    renderHeaderCell: _this.renderHeaderCell,
                    sortable: true,
                    display: true,
                },
            ],
        };
        return _this;
    }
    CustomTable.prototype.render = function () {
        return (React.createElement(SmartTable_1.default, { sort: this.state.sort, selectedRows: this.state.selectedRows, data: this.props.data, columns: this.state.columns, multiselect: this.props.multiselect, onChange: this.handleChange, tableActionsRenderer: this.renderTableActions, actionsRenderer: this.props.actionsRenderer }));
    };
    return CustomTable;
}(React.Component));
exports.default = CustomTable;
//# sourceMappingURL=CustomTable.js.map