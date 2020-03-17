import React, { Component } from "react";
import "antd/dist/antd.css";
import Moment from "react-moment";
import print from "../../Images/print.svg";
import pdf from "../../Images/pdf.svg";
import excel from "../../Images/excel.svg";
import  ReactSVG  from 'react-svg';
import CustomerHistoryTable from "./CustomerHistoryTable";
import Paper from "@material-ui/core/Paper";

import { Input } from "antd";

class TotalnurseDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  openmodal = () => {
    this.setState({ open: true });
  };
  onclosemodal = () => {
    this.setState({ open: false });
  };

  render() {
    const { Search } = Input;

    return (
      <div>
        <Paper>
        <div className="title_dashboard">
          <p className="title_header">IDLE NURSES </p>
          <div style={{ fontSize: "16px" ,display:"flex",alignItems:"center"}}>
            <div className="btn-group btn-group-toogle ">
              <button type="button" className="btn btn-primary this_day btn-lg">
                This Week
              </button>
              <button type="button" className="btn btn-info this_month btn-lg">
                This Month
              </button>
              <button
                type="button"
                className="btn btn-info this_year btn-lg mr-5"
              >
                This Year
              </button>
            </div>
            <Moment format="DD-MMM-YYYY" className="mr-2"></Moment>
            <Search
              placeholder="search"
              onSearch={value => console.log(value)}
              style={{ width: 150 }}
            />
              <div className="icon_head">
            <ReactSVG src={pdf} style={{marginRight:"15px",marginLeft:"15px"}}/>
            <ReactSVG src={excel} style={{marginRight:"15px"}}/>
            <ReactSVG src={print}  />
          </div>
          </div>
        </div>
          <CustomerHistoryTable />
        </Paper>
      </div>
    );
  }
}
export default TotalnurseDashboard;
