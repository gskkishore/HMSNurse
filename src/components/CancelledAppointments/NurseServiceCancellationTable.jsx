import React from "react";
import Tablecomponent from "../../helpers/TableComponent/TableComp";
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import "./NurseServiceCancellationTable.css";

class NurseServiceCancellationTable extends React.Component {
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
            { id: "noofmonths", label: "No Of Months" },
            { id: "cancellleddate", label: "Cancelled Date" },
            { id: "time", label: "Time" }
          ]}
          rowdata={[
            this.createData({
              customer: "test",
              nursename: "1",
              noofmonths: "35",
              cancelleddate: "10.00 AM",
              time: "10.00 PM"
            }),
            this.createData({
              customer: "test",
              nursename: "1",
              noofmonths: "35",
              cancelleddate: "10.00 AM",
              time: "10.00 PM"
            }),
            this.createData({
              customer: "test",
              nursename: "1",
              noofmonths: "35",
              cancelleddate: "10.00 AM",
              time: "10.00 PM"
            }),
            this.createData({
              customer: "test",
              nursename: "1",
              noofmonths: "35",
              cancelleddate: "10.00 AM",
              time: "10.00 PM"
            }),
            this.createData({
              customer: "test",
              nursename: "1",
              noofmonths: "35",
              cancelleddate: "10.00 AM",
              time: "10.00 PM"
            }),
            this.createData({
              customer: "test",
              nursename: "1",
              noofmonths: "35",
              cancelleddate: "10.00 AM",
              time: "10.00 PM"
            }),
            this.createData({
              customer: "test",
              nursename: "1",
              noofmonths: "35",
              cancelleddate: "10.00 AM",
              time: "10.00 PM"
            })
          ]}
          // tableicon_align={"cell_eye"}
          DeleteIcon="close"
          EditIcon="close"
          VisibilityIcon="close"
          HistoryIcon="close"
          LocationOnIcon="close"
          GrandTotal="close"
          modelopen={e => this.modelopen(e)}
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

export default NurseServiceCancellationTable;
