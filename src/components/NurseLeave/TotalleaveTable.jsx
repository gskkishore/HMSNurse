import React from "react";
import Tablecomponent from "../../helpers/TableComponent/TableComp";
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import "./TotalleaveTable.css";
class TotalleaveTable extends React.Component {
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
    }
  };

  closemodal = () => {
    this.setState({ openview: false, editopen: false });
  };

  render() {
    return (
      <div>
        <Tablecomponent
          heading={[
            { id: "", label: "S.No" },
            { id: "nursename", label: "Nurse Name" },
            { id: "gender", label: "Gender" },
            { id: "experience", label: "Experience" },
            { id: "Nationality", label: "Nationality" },

            { id: "fromdate", label: "From Date" },
            { id: "todate", label: "To Date" },
            { id: "noofdays", label: "No of days" }

            // { id: "", label: "Action" }
          ]}
          rowdata={[
            this.createData({
              nursename: "test",
              gender: "Female",
              experience: "25",
              nationality: "Saudi",
              fromdate: "3 Dec 2019",

              todate: "11 Dec 2019",
              noofdays: "8"
            }),
            this.createData({
              nursename: "test",
              gender: "Female",
              experience: "25",
              nationality: "Saudi",
              fromdate: "3 Dec 2019",

              todate: "11 Dec 2019",
              noofdays: "8"
            }),
            this.createData({
              nursename: "test",
              gender: "Female",
              experience: "25",
              nationality: "Saudi",
              fromdate: "3 Dec 2019",

              todate: "11 Dec 2019",
              noofdays: "8"
            }),
            this.createData({
              nursename: "test",
              gender: "Female",
              experience: "25",
              nationality: "Saudi",
              fromdate: "3 Dec 2019",

              todate: "11 Dec 2019",
              noofdays: "8"
            }),
            this.createData({
              nursename: "test",
              gender: "Female",
              experience: "25",
              nationality: "Saudi",
              fromdate: "3 Dec 2019",

              todate: "11 Dec 2019",
              noofdays: "8"
            }),
            this.createData({
              nursename: "test",
              gender: "Female",
              experience: "25",
              nationality: "Saudi",
              fromdate: "3 Dec 2019",

              todate: "11 Dec 2019",
              noofdays: "8"
            }),
            this.createData({
              nursename: "test",
              gender: "Female",
              experience: "25",
              nationality: "Saudi",
              fromdate: "3 Dec 2019",

              todate: "11 Dec 2019",
              noofdays: "8"
            })
          ]}
          //   tableicon_align={"cell_eye"}
          modelopen={e => this.modelopen(e)}
          EditIcon="close"
          DeleteIcon="close"
          VisibilityIcon="close"
          HistoryIcon="close"
          LocationOnIcon="close"
          GrandTotal="close"
        />
        <Modalcomp
          visible={this.state.openview}
          title={"View details"}
          closemodal={e => this.closemodal(e)}
          xswidth={"xs"}
        ></Modalcomp>
        <Modalcomp
          visible={this.state.editopen}
          title={"Edit details"}
          closemodal={e => this.closemodal(e)}
          xswidth={"xs"}
        ></Modalcomp>
      </div>
    );
  }
}

export default TotalleaveTable;
