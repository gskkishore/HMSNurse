import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import DeleteMedia from "../TableComponent/DeleteMedia";
import { Icon, message, Popconfirm } from "antd";

// standard icons
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HistoryIcon from "@material-ui/icons/History";
import "./TableComp.css";

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  console.log("sort", array);
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    console.log("order", order);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };
  const headRows = [
    { id: "sno", label: "S.No" },
    { id: "patient", label: "Customer" },
    { id: "gender", label: "Gender" },
    { id: "age", label: "Age" },
    { id: "time", label: "Time" },
    { id: "service", label: "Service" },
    { id: "action", label: "Action" }
  ];
  console.log(props.heading, "heading");

  return (
    <TableHead>
      <TableRow>
        {props.heading.map(row => (
          <TableCell
            key={row.id}
            align={row.numeric ? "right" : "left"}
            padding={row.disablePadding ? "none" : "default"}
            sortDirection={orderBy === row.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === row.id}
              direction={order}
              onClick={createSortHandler(row.id)}
            >
              {row.label}
            </TableSortLabel>

          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5
  }
});

class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, {
  withTheme: true
})(TablePaginationActions);

export default class Tablecomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: "",
      open: false,
      orderBy: "media_title",
      selected: [],
      page: 0,
      dense: false,
      rowsPerPage: 5,
      viewmodal: false,
      rows: this.props.rowdata,
      viewdata: null,
      type: "",
      title: ""
    };
  }

  handleRequestSort = (event, property) => {
    const isDesc =
      this.state.orderBy === property && this.state.order === "desc";
    this.setState({ order: isDesc ? "asc" : "desc" });
    this.setState({ orderBy: property });
  };

  closemodal = () => {
    this.setState({ view: false, DeleteView: false });
  };
  handleClickOpen = (t, title) => {
    console.log("type", t, title);
    this.setState({
      type: t,
      title
    });
    this.setState({ view: true, DeleteView: false });
  };

  handleClick = (event, name) => {
    const selectedIndex = this.state.selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected.push(this.state.selected, name);
    } else if (selectedIndex === 0) {
      // newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === this.state.selected.length - 1) {
      // newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      // newSelected = newSelected.concat(
      //   selected.slice(0, selectedIndex),
      //   selected.slice(selectedIndex + 1),
      // );
    }
    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: +event.target.value });
    this.setState({ page: 0 });
  };

  handleChangeDense(event) {
    this.setState({ dense: event.target.checked });
  }

  receiveapprovaldata = (data, data1) => {
    console.log("receiveapproval", data);
    console.log("data1", data1);
    if (data1 == 1) {
      this.setState({ viewmodal: false });
      message.success("Your Leave Approved");
      this.loadVendorDetails();
    } else if (data1 == 2) {
      this.setState({ viewmodal: false });
      message.success("Your Leave Rejected");
      this.loadVendorDetails();
    }
  };
  receivedocdelete = data => {
    console.log("receivedocdelete", data);
    if (data.status == 0) {
      this.setState({ viewmodal: false });
      message.success(data.msg);
      this.loadDoctorDetails();
    }
  };
  sendapprovadata = data => {
    if (data.status == 0) {
      this.setState({ viewmodal: false });
      message.success(data.msg);
      this.loadDoctorDetails();
    }
  };

  render() {
    const isSelected = name => this.state.selected.indexOf(name) !== -1;
    const { rows, rowsPerPage, page } = this.state;
    console.log(this.props.tableicon_align, "this.props.tableicon_align");

    return (
      <div className="VendorDetailsDiv">
        {/* <Paper className="paper"> */}
        <div className="tableWrapper">
          <Table
            className="table"
            aria-labelledby="tableTitle"
            size={this.state.dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={this.state.selected.length}
              order={this.state.order}
              orderBy={this.state.orderBy}
              // onSelectAllClick={this.handleSelectAllClick}
              heading={this.props.heading}
              onRequestSort={this.handleRequestSort}
              rowCount={this.state.rows && this.state.rows.length}
            />
            <TableBody>
              {stableSort(
                this.state.rows,
                getSorting(this.state.order, this.state.orderBy)
              )
                .slice(
                  this.state.page * this.state.rowsPerPage,
                  this.state.page * this.state.rowsPerPage +
                    this.state.rowsPerPage
                )
                .map((row, index, item) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  console.log("rendering", row);
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, row.name)}
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {this.state.rowsPerPage * this.state.page -
                          1 +
                          index +
                          2}
                      </TableCell>

                      {[row].map(data => {
                        var keys = Object.keys(data);
                        var tablearr = [];
                        for (var m = 0; m < keys.length; m++) {
                          tablearr.push(
                            <TableCell align="right">{data[keys[m]]}</TableCell>
                          );
                        }
                        return tablearr;
                      })}

                      {this.props.actionclose === "close" ? null : (
                        <TableCell className={`${this.props.tableicon_align}`}>
                          {this.props.VisibilityIcon === "close" ? null : (
                            <VisibilityIcon
                              className="tableeye_icon"
                              onClick={() => this.props.modelopen("view")}
                            />
                          )}
                          {this.props.EditIcon === "close" ? null : (
                            <EditIcon
                              className="tableedit_icon"
                              onClick={() => this.props.modelopen("edit")}
                            />
                          )}
                          {this.props.HistoryIcon === "close" ? null : (
                            <HistoryIcon
                              className="tablehistory_icon"
                              onClick={() => this.props.modelopen("history")}
                            />
                          )}
                          {this.props.LocationOnIcon === "close" ? null : (
                            <LocationOnIcon
                              className="tablelocation_icon"
                              onClick={() => this.props.modelopen("location")}
                            />
                          )}
                          {this.props.DeleteIcon === "close" ? null : (
                            <DeleteIcon
                              className="tabledelete_icon"
                              onClick={() =>
                                this.handleClickOpen(
                                  "delete_profile",
                                  "Delete Media"
                                )
                              }
                            />
                          )}
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
          {/* {this.props.actionclose === "close" ? null : (
            <div>
              {this.props.GrandTotal === "close" ? null : (
                <div className="docrevenue_total">
                  <div className="totalkwd">
                    <p className="grand_total">Grand Total</p>
                    <span className="grand_total">:</span>
                    <p className="revtotal_amt">4800 KWD</p>
                  </div>
                </div>
              )}
            </div>
          )} */}
           {this.props.actionclose==="close"?null :(
              <div>
                {this.props.GrandTotal==="close"?null:
                <div className="group_grandtotal">
                <span>Grand Total : 110 KWD</span>
                </div> }
              </div>
              )}
        </div>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          colSpan={3}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            native: true
          }}
          component="div"
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActionsWrapped}
        />
        {/* </Paper> */}
        <Modalcomp
          visible={this.state.view}
          title={this.state.title}
          closemodal={this.closemodal}
          xswidth={"xs"}
        >
          {this.state.type === "delete_profile" && <DeleteMedia />}
        </Modalcomp>
      </div>
    );
  }
}
