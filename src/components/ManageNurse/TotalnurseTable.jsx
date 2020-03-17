import React from "react";
import Tablecomponent from "../../helpers/TableComponent/TableComp";
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import "./TotalnurseTable.css";
import Managenursemodal from "./Managenursemodal";
import Managenurseform from "./Managenurseform";
import CloseIcon from "@material-ui/icons/Close";

class DashboardTable extends React.Component {
  state = {
    openview: false
  };

  createData = parameter => {
    var keys = Object.keys(parameter);
    var values = Object.values(parameter);

    var returnobj = {};

    for (var i = 0; i < keys.length; i++) {
      returnobj[keys[i]] = values[i];
    }
    return returnobj;
  };

  modelopen = data => {
    if (data === "view") {
      this.setState({ openview: true });
    } else if (data === "edit") {
      this.setState({ editopen: true });
    } else if (data === "history") {
      this.setState({ historyopen: true });
    }
  };

  closemodal = () => {
    this.setState({ openview: false, editopen: false, historyopen: false });
  };

  render() {
    return (
      <div>
        <Tablecomponent
          heading={[
            { id: "", label: "S.No" },
            { id: "nursename", label: "Nurse Name" },

            { id: "gender", label: "Gender" },
            { id: "age", label: "Age" },
            { id: "experience", label: "Experience" },
            { id: "nationality", label: "Nationality" },
            { id: "", label: "Action" }
          ]}
          rowdata={[
            this.createData({
              nursename: "AAMINA",
              gender: "Male",
              age: "35",
              experience: "10.00 AM",
              nationality: "Consulting"
            }),
            this.createData({
              nursename: "AAMINA",
              gender: "Male",
              age: "35",
              experience: "10.00 AM",
              nationality: "Consulting"
            }),
            this.createData({
              nursename: "AAMINA",
              gender: "Male",
              age: "35",
              experience: "10.00 AM",
              nationality: "Consulting"
            }),
            this.createData({
              nursename: "AAMINA",
              gender: "Male",
              age: "35",
              experience: "10.00 AM",
              nationality: "Consulting"
            }),
            this.createData({
              nursename: "AAMINA",
              gender: "Male",
              age: "35",
              experience: "10.00 AM",
              nationality: "Consulting"
            }),
            this.createData({
              nursename: "AAMINA",
              gender: "Male",
              age: "35",
              experience: "10.00 AM",
              nationality: "Consulting"
            }),
            this.createData({
              nursename: "AAMINA",
              gender: "Male",
              age: "35",
              experience: "10.00 AM",
              nationality: "Consulting"
            })
          ]}
          tableicon_align={"cell_eye"}
          LocationOnIcon="close"
          GrandTotal="close"
          modelopen={e => this.modelopen(e)}
        />
        <Modalcomp
          visible={this.state.openview}
          closemodal={e => this.closemodal(e)}
        >
          {/* <CloseIcon /> */}

          <Managenursemodal />
        </Modalcomp>

        <Modalcomp
          visible={this.state.historyopen}
          title={"Nurse History"}
          closemodal={e => this.closemodal(e)}
          // xswidth={"xs"}
        >
          <Managenurseform />
        </Modalcomp>
      </div>
    );
  }
}

export default DashboardTable;
