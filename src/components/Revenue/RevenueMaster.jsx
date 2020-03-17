import React, { Component } from "react";
import { Select } from "antd";
import "antd/dist/antd.css";
import print from "../../Images/print.svg";
import pdf from "../../Images/pdf.svg";
import excel from "../../Images/excel.svg";
import  ReactSVG  from 'react-svg';
import Moment from "react-moment";
import Revenuedetails from "./Revenuedetails";

import { Input } from "antd";

import dateFormat from "dateformat";
import Labelbox from "../../helpers/labelbox/labelbox";
const current_date = dateFormat(new Date(), "dd mmm yyyy");
class RevenueMaster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "rrr"
    };
  }

  render() {
    const { Option } = Select;
    const { Search } = Input;
    console.log(dateFormat(new Date(), "dd mmm yyyy"));
    return (
      <div>
        <div className="title_dashboard">
          <div className="title_header">REVENUE</div>

          <div style={{ width: "250px" }}>
            <Labelbox
              type="select"
              value="Walk-In"
              labelname="Duty Hours"
              // style={{ width: "100px",display:"flex" }}
            />
          </div>

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
                className="btn btn-info this_year btn-lg mr-2"
              >
                This Year
              </button>
            </div>
            <Moment format="DD-MMM-YYYY" className="mr-2 ml-2"></Moment>
            <Search
              placeholder="Search"
              onSearch={value => console.log(value)}
              style={{ width: 150 }}
              className="mr-2 ml-2"
            />
              <div className="icon_head">
            <ReactSVG src={pdf} style={{marginRight:"15px",marginLeft:"15px"}}/>
            <ReactSVG src={excel} style={{marginRight:"15px"}}/>
            <ReactSVG src={print}  />
          </div>
          </div>
        </div>
        <Revenuedetails />
      </div>
    );
  }
}

export default RevenueMaster;
