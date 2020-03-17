import React, { Component } from "react";
import BookingDetails from "./BookingDetails";

export default class DealsMaster extends Component {
  render() {
    return (
      <div>
        <div className="title_dashboard">
          <div className="title_header">DEALS</div>
        </div>
        <BookingDetails />
      </div>
    );
  }
}
