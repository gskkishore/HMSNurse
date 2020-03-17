import React, { Component } from "react";
import { Select } from "antd";
import "antd/dist/antd.css";

import TotalnurseTable from "./TotalnurseTable";
import Paper from "@material-ui/core/Paper";
import Plus from "../../Images/plus.png";
import Nurse_form from "./Nurse_form";
import { Input } from "antd";

import Modalcomp from "../../helpers/ModalComp/Modalcomp";
class TotalnurseDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  openmodal = () => {
    this.setState({ open: true });
  };
  onclosemodal = () => {
    this.setState({ open: false });
  };

  render() {
    const { Option } = Select;
    const { Search } = Input;

    return (
      <div>
        <div className="title_dashboard">
          <div className="title_header">Manage Nurses</div>
          <div>
            <Search
              className="mr-5"
              placeholder="search"
              onSearch={value => console.log(value)}
              style={{ width: 150 }}
            />
            <img src={Plus} onClick={this.openmodal} />
          </div>
        </div>
        <TotalnurseTable />

        <Modalcomp
          visible={this.state.open}
          closemodal={this.onclosemodal}
          title="Add Nurse"
        >
          <Nurse_form />
        </Modalcomp>
      </div>
    );
  }
}
export default TotalnurseDashboard;
