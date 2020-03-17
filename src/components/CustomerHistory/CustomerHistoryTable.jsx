import React from "react";
import Tablecomponent from "../../helpers/TableComponent/TableComp";
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import "./CustomerHistoryTable.css";
import HistoryForm from "./HistoryForm";
class CustomerHistoryTable extends React.Component {
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
            { id: "customer", label: "Customer" },
            { id: "nursename", label: "Nurse Name" },
            { id: "gender", label: "Gender" },
            { id: "age", label: "Age" },

            { id: "", label: "Action" }
          ]}
          rowdata={[
            this.createData({
              customer: "Dina",
              nursename: "AAMINA",
              gender: "Male",
              age: "35"
            }),
            this.createData({
              customer: "Dina",
              nursename: "AAMINA",
              gender: "Male",
              age: "35"
            }),
            this.createData({
              customer: "Dina",
              nursename: "AAMINA",
              gender: "Male",
              age: "35"
            }),
            this.createData({
              customer: "Dina",
              nursename: "AAMINA",
              gender: "Male",
              age: "35"
            }),
            this.createData({
              customer: "Dina",
              nursename: "AAMINA",
              gender: "Male",
              age: "35"
            }),
            this.createData({
              customer: "Dina",
              nursename: "AAMINA",
              gender: "Male",
              age: "35"
            }),
            this.createData({
              customer: "Dina",
              nursename: "AAMINA",
              gender: "Male",
              age: "35"
            })
          ]}
          // tableicon_align={"cell_eye"}
          DeleteIcon="close"
          EditIcon="close"
          GrandTotal="close"
          LocationOnIcon="close"
          HistoryIcon="close"
          modelopen={e => this.modelopen(e)}
        />

        <Modalcomp
          visible={this.state.openview}
          title={"CUSTOMER HISTORY"}
          closemodal={e => this.closemodal(e)}
          // xswidth={"xs"}
        >
          {" "}
          <HistoryForm />
        </Modalcomp>
        <Modalcomp
          visible={this.state.editopen}
          title={"Edit details"}
          closemodal={e => this.closemodal(e)}
          // xswidth={"xs"}
        ></Modalcomp>
      </div>
    );
  }
}

export default CustomerHistoryTable;
