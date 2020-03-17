import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Labelbox from "../../helpers/labelbox/labelbox";
import Button from "@material-ui/core/Button";
import "./Nurse_form.css";
import { Upload, Icon, message } from "antd";
import { DatePicker } from "antd";
import Divider from "@material-ui/core/Divider";
import "antd/dist/antd.css";
import Profilepage from "../LabProfile/Profilepage";
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

export default class Nurse_form extends Component {
  state = {
    loading: false,
    modal: false
  };

  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };
  data = (date, dateString) => {
    console.log(date, dateString);
  };
  onclose = () => {
    this.setState({ modalclose: false });
  };
  openmodal = () => {
    this.setState({ modal: true });
  };
  render() {
    const uploadButton = (
      <div>
        <div className="upload-icon">
          <i class="fa fa-user-plus"></i>
        </div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <div className="users-form">
        <Grid
          container
          className="Users-gridcontainer"
          // xs={12}
          // md={12}
          spacing={2}
          style={{ marginTop: "0px", width: "100%" }}
        >
          <Grid items xs={4} md={4} className="items_container">
            <div className="User-inputs">
              <Labelbox type="text" value="ABIDA" labelname="Name"></Labelbox>
            </div>
            <div className="nurse_details_nation">
              <div style={{ width: "47%" }}>
                <Labelbox
                  type="select"
                  labelname="Gender"
                  value="Female"
                ></Labelbox>
              </div>
              <div style={{ width: "47%" }}>
                <Labelbox
                  type="select"
                  labelname="Nationality"
                  value="Saudi"
                  defaultValue="Saudi"
                ></Labelbox>
              </div>
            </div>
          </Grid>
          <Grid items xs={4} md={4} className="items_container">
            <div className="nurse_details_nation">
              <div style={{ width: "47%" }}>
                <Labelbox
                  type="datepicker"
                  className="user_datepicker"
                  labelname="Date Of Birth"
                ></Labelbox>
              </div>
              <div style={{ width: "47%" }}>
                <Labelbox
                  type="text"
                  value="5"
                  labelname="Experience"
                  defaultValue="Saudi"
                ></Labelbox>
              </div>
            </div>
            <div>
              <Labelbox
                type="text"
                labelname="Mobile Number"
                value="+9967895490"
                defaultValue="5"
              />
            </div>
          </Grid>
          <Grid items xs={4} md={4} className="items_container">
            <div className="User-upload-container">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader user-avatar-upload"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    className="upload-img-circle"
                    alt="avatar"
                    style={{ width: "100%" }}
                  />
                ) : (
                  uploadButton
                )}
              </Upload>
            </div>
          </Grid>
         

          <Grid items xs={8} md={8} className="items_container">
            <div className="duty_hourmain_container">
              <div className="duty_hour_container">
                <h6 className="duty_header">Duty Hours(8 Hours)</h6>
                {/* <div className="duty_hoursdiv"> */}
                  {/* <div style={{ width: "32%" }}>
                    <Labelbox
                      type="text"
                      value="144"
                      labelname="Cost (Per Day)"
                    />
                  </div> */}
                  <div style={{ width: "50%" }}>
                    <Labelbox
                      type="text"
                      value="3099"
                      labelname="Cost (Per Month)"
                    />
                  </div>
                {/* </div> */}
              </div>
              <div className="divider_border"></div>
              <div className="duty_hour_container">
                <h6 className="duty_header">Duty Hours(12 Hours)</h6>
                {/* <div className="duty_hoursdiv">
                  <div style={{ width: "32%" }}>
                    <Labelbox
                      type="text"
                      value="**"
                      labelname="Cost (Per Day)"
                    />
                  </div> */}
                  <div style={{ width: "50%" }}>
                    <Labelbox
                      type="text"
                      value="****"
                      labelname="Cost (Per Month)"
                    />
                  </div>
                {/* </div> */}
              </div>
            </div>
          </Grid>
          <Grid items xs={8} md={8} className="items_container">
            <div className="skills">
              <Labelbox
                value="Cultural Awareness,Professionalism"
                type="text"
                labelname="Skills"
              />
            </div>
          </Grid>
          {/* <Grid items xs={12} md={2}> */}
        </Grid>

        <Grid item xs={8} md={8} className="buttons_container">
          <div className="cancel-create-button1">
            <div className="cancel-create-button2">
              <Button className="Usergrp-Cancel" onClose={this.onclose}>
                Cancel
              </Button>
              <Button className="Usergrp-Create" onClick={this.openmodal}>
                Create{" "}
              </Button>
            </div>
          </div>
        </Grid>
        {/* <Grid item xs={12} md={10}>
            </Grid> */}
        {/* </Grid> */}
        <Profilepage open={this.state.modal} onClose={this.onclose} />
      </div>
    );
  }
}
