import React from "react";
import Tablecomponent from "../../helpers/TableComponent/TableComp";
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import "./IdlenurseTable.css";
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
            { id: "age", label: "Age" },
            { id: "experience", label: "Experience" },
            { id: "Nationality", label: "Nationality" },
            { id: "idlesince", label: "Idle Since" },
            { id: "noofdays", label: "No of days" }

            // { id: "", label: "Action" }
          ]}
          rowdata={[
            this.createData({
              name: "test",
              number: "Female",
              age: "35",
              experience: "25",
              nationality: "Saudi",
              idlesince: "11 Dec 2019",
              noofdays: "8"
            }),
            this.createData({
              name: "ashwin",
              gender: "Male",
              age: "35",
              experience: "25",
              nationality: "Saudi",
              idlesince: "11 Dec 2019",
              noofdays: "8"
            }),
            this.createData({
              name: "syed",
              gender: "Male",
              age: "35",
              experience: "25",
              nationality: "Saudi",
              idlesince: "11 Dec 2019",
              noofdays: "8"
            }),
            this.createData({
              name: "edwin",
              gender: "Male",
              age: "35",
              experience: "25",
              nationality: "Saudi",
              idlesince: "11 Dec 2019",
              noofdays: "8"
            }),
            this.createData({
              name: "arjun",
              gender: "Male",
              age: "35",
              experience: "25",
              nationality: "Saudi",
              idlesince: "11 Dec 2019",
              noofdays: "8"
            }),
            this.createData({
              name: "raja",
              gender: "Male",
              age: "32",
              experience: "25",
              nationality: "Saudi",
              idlesince: "11 Dec 2019",
              noofdays: "8"
            }),
            this.createData({
              name: "rani",
              gender: "Female",
              age: "35",
              experience: "25",
              nationality: "Saudi",
              idlesince: "11 Dec 2019",
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

export default DashboardTable;
