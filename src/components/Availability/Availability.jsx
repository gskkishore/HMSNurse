import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Labelbox from "../../helpers/labelbox/labelbox";

import "./Availability.css";

import Calender from "./Calendar";
export default class Availability extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item sm={12} md={6}>
            <Calender />
          </Grid>
          <Grid item sm={12} md={6}>
            <div style={{padding:"20px"}}>
              <Labelbox type="select" labelname="Name" />
              <div
                className="avail_date_picker"
                style={{ display: "flex", justifyContent: "space-between",paddingTop:"10px" }}
              >
                <Labelbox type="datepicker" labelname="From Date" />
                <Labelbox type="datepicker" labelname="To Date" />
              </div>
              <div className="avail_button">
                <div>
                <button type="button" class="btn btn-primary btn-lg leave_btn">Leave</button>
                </div>
                <div>
                <button type="button" class="btn btn-primary btn-lg block_btn">Block</button> 
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
