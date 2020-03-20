import React, { Component } from "react";
import { Select } from "antd";
import "antd/dist/antd.css";
import './Profilepage.css'
import Paper from "@material-ui/core/Paper";
// import Calendar from './Calendar';
import Grid from "@material-ui/core/Grid";
import { TiLocation } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import EditIcon from "@material-ui/icons/Edit";
import Trainee from "../../Images/11.jpg";
import BasicDetails from "./BasicDetails"
import Divider from "@material-ui/core/Divider";

import {  MdLocationOn, MdLocalPhone,MdEmail } from "react-icons/md";
import Modalcomp from "../../helpers/ModalComp/Modalcomp";

class ProfileComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "rrr",open:false
    };
  }
  handleopen=()=>
  {
    this.setState({open:true})
  }
  handleClose=()=>
  {
    this.setState({open:false})
  }
  open = ()=> {
      this.setState({open:true})
  }
    //   handleClose = (value) => {
    //     this.props.closemodal(false);
    //     this.setState({ open: false });
    //     console.log(this.state.open)
    //   };
  handleClickClose=()=>
  {
    this.setState({open:false})
  }
  Cancel=()=>
  {
    this.setState({open:false})   
    console.log(this.state.open)  
  }
  render() {
  
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <div className="deal_listcreatead">
         <Paper className="profile_background">
       <div className="profileback_first">PROFILE</div>
         
           
             <div className="profilepaper_container">
              <Paper className="profilebackground">
              <Grid container className="total">
            <Grid item xs={12} md={5}>
              <div className="profile_imageuser_container">
                <div className="profile_imageuser_div">
                  <img className="profile_imageuser" src={Trainee} />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={7} className="addprofile_gridcontainer">
              <div className="profile_nursecontainer">
                <div className="icon_edit">
                  <EditIcon className="icon" onClick={this.handleopen} onClose={this.props.handleClose}/>
                </div>
                <div style={{ padding: "20px" }}>
                  <h1 className="profile_detail">Abdul Khaafid</h1>
                  <div className="age_details">
                    <h5>
                      <MdLocationOn className="icon_groups" />
                    </h5>
                    <p className="profile_text">Jabriya...</p>
                  </div>
                  <div className="age_details">
                    <h5>
                      <MdLocalPhone className="icon_groups" />
                    </h5>
                    <p className="profile_text">+965 220000001</p>
                  </div>
                  <div className="age_details">
                    <h5>
                      <MdEmail className="icon_groups" />
                    </h5>
                    <p className="profile_text">+965 220000001</p>
                  </div>
                  <div className="age_details">
                    <h5>
                      <IoIosGlobe className="icon_groups" />
                    </h5>
                    <p className="profile_text">
                      Airdox Medical service.com.kw
                    </p>
                  </div>
                  <Divider />
                </div>
              </div>
            </Grid>
          </Grid>
              </Paper>
              </div>
          </Paper>
          <Modalcomp visible={this.state.open}           closemodal={ this.handleClose}
 title="BASIC DETAILS">
          <BasicDetails  />
          </Modalcomp>
          </div> 
    );
  }
}

export default ProfileComp;
