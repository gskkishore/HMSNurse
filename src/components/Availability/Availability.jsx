import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Labelbox from "../../helpers/labelbox/labelbox";

import "./Availability.css";

import Calender from "../Calendar/Calendar";
export default class Availability extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item sm={12} md={6}>
            <Calender />
          </Grid>
          <Grid item sm={12} md={6}>
            <div>
              <Labelbox type="select" labelname="Name" />
              <div
                className="avail_date_picker"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Labelbox type="datepicker" labelname="From Date" />
                <Labelbox type="datepicker" labelname="To Date" />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
