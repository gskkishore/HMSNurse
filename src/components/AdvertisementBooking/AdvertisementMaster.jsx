import React, { Component } from "react";
import "antd/dist/antd.css";
import Paper from "@material-ui/core/Paper";
import BookingDetails from "./BookingDetails";

class RevenueMaster extends Component {
  render() {
    return (
      <div>
        <Paper>
          <div className="title_dashboard">
            <div className="title_header">ADVERTISEMENT BOOKING</div>
          </div>
          <BookingDetails />
        </Paper>
      </div>
    );
  }
}

export default RevenueMaster;
