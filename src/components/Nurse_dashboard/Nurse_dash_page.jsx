import React, { Component } from "react";
import { Paper, Card, Divider } from "@material-ui/core";
import "./Nurse_dash_page.css";
import { NavLink } from "react-router-dom";
import Nursedetails from "./Nurse_dash_details";

class Nurse_dash_page extends Component {
  render() {
    return (
      <div className="VendorDetailsDiv">
        <Paper className="paper">
          <div className="nurse_dashboard_buttons_wrap">
            <Card
              component={NavLink}
              to="/Home/nursehired"
              className="nurse_button1 nurse_button_common_styles"
            >
              <p className="nurse_button_text"> Total Hired</p>
              <div className="divider_container">
                <div className="divider_1px"></div>
              </div>
              <div className="nurse_dash_numeric_wrap">
                <p className="nurse_dash_numeric_value">7</p>
              </div>
            </Card>
            <Card
              component={NavLink}
              to="/Home/idlenurse"
              className="nurse_button2 nurse_button_common_styles"
            >
              <p className="nurse_button_text">Total Idle</p>
              <div className="divider_container">
                <div className="divider_1px"></div>
              </div>
              <div className="nurse_dash_numeric_wrap">
                <p className="nurse_dash_numeric_value">3</p>
              </div>
            </Card>
            <Card
              component={NavLink}
              to="/Home/nurseleave"
              className="nurse_button5 nurse_button_common_styles"
            >
              <p className="nurse_button_text">Total On Leave</p>
              <div className="divider_container">
                <div className="divider_1px"></div>
              </div>
              <div className="nurse_dash_numeric_wrap">
                <p className="nurse_dash_numeric_value">5</p>
              </div>
            </Card>
            <Card
              component={NavLink}
              to="/Home/cancelledappointments"
              className="nurse_button6 nurse_button_common_styles"
            >
              <p className="nurse_button_text">Total Cancelled</p>
              <div className="divider_container">
                <div className="divider_1px"></div>
              </div>
              <div className="nurse_dash_numeric_wrap">
                <p className="nurse_dash_numeric_value">5</p>
              </div>
            </Card>

            <Card
              component={NavLink}
              to="/Home/managenurse"
              className="nurse_button4 nurse_button_common_styles"
            >
              <p className="nurse_button_text">Manage Nurses</p>
              <div className="divider_container">
                <div className="divider_1px"></div>
              </div>
              <div className="nurse_dash_numeric_wrap">
                <p className="nurse_dash_numeric_value">15</p>
              </div>
            </Card>
            <Card
              component={NavLink}
              to="/Home/revenue"
              className="nurse_button3 nurse_button_common_styles"
            >
              <p className="nurse_button_text">Revenue (KWD)</p>
              <div className="divider_container">
                <div className="divider_1px"></div>
              </div>
              <div className="nurse_dash_numeric_wrap">
                <p className="nurse_dash_numeric_value">1264</p>
              </div>
            </Card>
          </div>
          <Nursedetails />
        </Paper>
      </div>
    );
  }
}

export default Nurse_dash_page;
