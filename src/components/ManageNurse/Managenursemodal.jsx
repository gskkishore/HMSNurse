import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Trainee from "../../Images/11.jpg";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import "./Managenursemodal.css";
import { TiLocation, MdLocationOn, MdLocalPhone } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import EditIcon from "@material-ui/icons/Edit";
const styles = {};
export default class Profilepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cancel: null };
  }
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };
  render() {
    const styles = "";
    const { classes, onClose, cancel, selectedValue, ...other } = this.props;

    return (
      <div className="manage_nurse_popup_details">
        {/* <Dialog
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
          {...other}
        > */}
        <Grid container className="total">
          <Grid item xs={12} md={6}>
            <div className="manage_nurse_image_container">
              <div className="manage_nurse_image_div">
                <img className="manage_nurse_image" src={Trainee} />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className="addmanage_nurse_gridcontainer">
            <div>
              {/* <div className="icon_edit">
                  <EditIcon className="icon" />
                </div> */}
              <div>
                <h1 className="manage_nurse_detail">
                  Abdul Khaafid <h7>Exp</h7>
                </h1>
                <div className="age_details">
                  <h5>
                    <MdLocationOn className="location_icon" />
                  </h5>
                  <p className="manage_nurse_text">
                    PO Box 2, safari 13001, Kuwait City, Kuwait -54541
                  </p>
                </div>
                <div className="age_details">
                  <h5>
                    <MdLocalPhone className="call_icon" />
                  </h5>
                  <p className="manage_nurse_text">+965 220000001</p>
                </div>
                <div className="age_details">
                  <h5>
                    <IoIosGlobe className="globe_icon" />
                  </h5>
                  <p className="manage_nurse_text">+965 220000001</p>
                </div>
                <div>
                  <h4 className="working_hour">
                    <b>Personal Details</b>
                  </h4>
                </div>
                <div className="nurse_working_detail">
                  <h4 className="nurse_working_hour_detail">Gender</h4>

                  <p className="working_time_detail">09.30 AM-12.30 PM</p>
                </div>
                <div>
                  <div className="nurse_working_detail">
                    <h4 className="nurse_working_hour_detail">Date Of Birth</h4>
                    <p className="working_time_detail">09.30 AM-04.30 PM</p>
                  </div>
                </div>
                <div>
                  <div className="nurse_working_detail">
                    <h4 className="nurse_working_hour_detail">Nationality</h4>

                    <p className="working_time_detail">10.30 AM-05.30 PM</p>
                  </div>
                </div>
                <div>
                  <div className="nurse_working_detail">
                    <h4 className="nurse_working_hour_detail">Skills</h4>

                    <p className="working_time_detail">
                      Cultural Awareness,Professionalism
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <div className="nurse_modal_button">
                <div>
                  <button type="button" class="btn-nurse btn-success">
                    8 Hrs
                  </button>
                  <p>Cost/Month (KWD)</p>
                  <p className="btn-text">3099</p>
                </div>
                <div>
                  <button type="button" class="btn-nurse btn-success">
                    12 Hrs
                  </button>
                  <p>Cost/Month (KWD)</p>
                  <p className="btn-text">4056</p>
                </div>
              </div>
            </div>

            {/* <div className="package_container">
                <div className="package_details_container">
                  <div className="package_details">
                    <div className="package_details_list">
                      <p>Contacct Person Mobile Number</p>
                    </div>
                  </div>
                  <div>
                    <p>+956 22001110</p>
                  </div>
                </div>
              </div> */}

            {/* <div className="package_cancel_details">
                <Button
                  className="package-cancel_button"
                  onClick={this.props.onClose}
                >
                  Cancel
                </Button>
              </div> */}
          </Grid>
        </Grid>
        {/* </Dialog> */}
      </div>
    );
  }
}
const Trainer_viewWrapped = withStyles(styles)(Profilepage);

// export default function SimpleDialogDemo(props) {
//   const [open, setOpen] = React.useState(props);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = value => {
//     setOpen(false);

//   };

//   return (
//     <div>

//       <SimpleDialog  open={open} onClose={handleClose}>

//       </SimpleDialog>
//     </div>
//   );
// }
