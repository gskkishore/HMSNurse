import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import doctor from "../../Images/nurse.jpg";
import "./Nurse_view.css";
import CloseIcon from '@material-ui/icons/Close';

import Divider from "@material-ui/core/Divider";
const styles = {};

export default class Nurse_view extends Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };
  onclose=()=>
  {
    this.setState({view:false})
  }

  // handleListItemClick = value => {
  //   this.props.onClose(value);
  // };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;
 
    return (
      <Dialog className="dialog_nurse_eyeview" onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
                <div className="close_icon">
                <CloseIcon  onClick={this.props.onClose}/>
                </div>
      <div>
        <Grid container className="nurse_view_grid_container">
          <Grid item className="nurse_view_image_grid" xs={12} md={3}>
            <div className="nurse_view_image_wrap">
              <div className="nurse_view_image_childdiv">
                <img
                  className="nurse_view_image"
                  src={doctor}
                  alt="jklj"
                  style={{ height: "100" }}
                />{" "}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={9}>
            <div className="nurse_view_wrap_container">
              <div className="nurse_view_name_timecontainer">
                <div className="nurse_view_name_wrap">
                  <text className="nurse_view_name">Mortal</text>
                </div>
                <div className="nurse_view_name_wrap">
                  <text className="nurse_view_age">29years/Female</text>
                </div>
                <div className="nurse_view_name_wrap">
                  <text className="nurse_view_country">Saudi</text>
                </div>
                <div className="nurse_view_name_wrap">
                  <text className="nurse_view_experience">
                    3 Years experience
                  </text>
                </div>
              </div>
              <div className="dutytime_container">
                <p className="time-inhours">8 Hrs</p>
              </div>
            </div>
            <div className="nurse_divider_container">
              <div className="nurse_divider_1px"></div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="nurse_view_name_wrap">
              <text className="nurse_view_name">Abdul Rahman</text>
            </div>
            <div className="nurse_view_name_wrap">
              <text className="nurse_view_address">
                6623 Western Ring Rd,<label className="road_dot">...</label>
              </text>
            </div>
            <div className="nurse_view_subheader">
              {" "}
              <label className="nurse_view_qualitiy">Skills</label>
              <label className="nurse_view_colon">:</label>
              <label className="nurse_view_values">
                Elderly care,Child care
              </label>{" "}
            </div>
            <div className="nurse_view_subheader">
              {" "}
              <label className="nurse_view_qualitiy">Start Date</label>
              <label className="nurse_view_colon">:</label>
              <label className="nurse_view_values">20 Dec 2019</label>{" "}
            </div>
            <div className="nurse_view_subheader">
              {" "}
              <label className="nurse_view_qualitiy">End Date</label>
              <label className="nurse_view_colon">:</label>
              <label className="nurse_view_values">20 Feb 2020</label>{" "}
            </div>
            <div className="nurse_view_subheader">
              {" "}
              <label className="nurse_view_qualitiy">Total Cost</label>
              <label className="nurse_view_colon">:</label>
              <label className="nurse_view_values">400 KWD</label>{" "}
            </div>
          </Grid>

          <Grid item xs={12} md={6} className="generalduties_details_container">
            <div className="generalduties_details">
              <h4 className="general_head">General Duties</h4>
              <text className="genaeral_details">
                Caring,Baby sitting
                <br />
                In-Home Care,Coordinate
                <br />
                with Physician
              </text>
              <h4 className="general_head">Designed Duties</h4>
              <text className="genaeral_details">
                Sponge bath,Evening Walking
              </text>
              <div className="nurse_view_cancelbutton">
                <Button
                  variant="outlined"
                  className="nurse_modelcancel"
                  color="secondary"
                  onClick={this.props.onClose}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      </Dialog>
    );
  }
}

const Nurse_viewWrapped = withStyles(styles)(Nurse_view);
