import React from "react";
import Tablecomponent from "../../helpers/TableComponent/TableComp";
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import "./NursebookedTable.css";
import Nurseview from "./Nurse_view";
import NurseLocationModal from "./NurseLocationModal";

class NursebookedTable extends React.Component {
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
    } else if (data === "location") {
      this.setState({ locationopen: true });
    }
  };

  closemodal = () => {
    this.setState({ openview: false, editopen: false, locationopen: false });
  };

  render() {
    return (
      <div>
        <Tablecomponent
          heading={[
            { id: "", label: "S.No" },
            { id: "nursename", label: "Nurse Name" },
            { id: "customer", label: "Customer" },

            { id: "experience", label: "Experience" },
            { id: "fromdate", label: "From Date" },
            { id: "todate", label: "To Date" },
            { id: "totalcost", label: "Total Cost(KWD)" },
            { id: "", label: "Action" }
          ]}
          rowdata={[
            this.createData({
              nursename: "1",
              customer: "test",
              experience: "35",
              fromdate: "10.00 AM",
              todate: "Consulting",
              totalcost: "1000"
            }),
            this.createData({
              nursename: "1",
              customer: "test",

              experience: "35",
              fromdate: "10.00 AM",
              todate: "Consulting",
              totalcost: "1000"
            }),
            this.createData({
              nursename: "1",
              customer: "test",

              experience: "35",
              fromdate: "10.00 AM",
              todate: "Consulting",
              totalcost: "1000"
            }),
            this.createData({
              nursename: "1",
              customer: "test",

              experience: "35",
              fromdate: "10.00 AM",
              todate: "Consulting",
              totalcost: "1000"
            }),
            this.createData({
              nursename: "1",
              customer: "test",

              experience: "35",
              fromdate: "10.00 AM",
              todate: "Consulting",
              totalcost: "1000"
            }),
            this.createData({
              nursename: "1",
              customer: "test",

              experience: "35",
              fromdate: "10.00 AM",
              todate: "Consulting",
              totalcost: "1000"
            }),
            this.createData({
              nursename: "1",
              customer: "test",

              experience: "35",
              fromdate: "10.00 AM",
              todate: "Consulting",
              totalcost: "1000"
            })
          ]}
          // tableicon_align={"cell_eye"}
          DeleteIcon="close"
          EditIcon="close"
          HistoryIcon="close"
          GrandTotal="close"
          modelopen={e => this.modelopen(e)}
        />

        {/* <Modalcomp
          visible={this.state.openview}
          title={"View details"}
          closemodal={e => this.closemodal(e)}
        > 
                </Modalcomp> */}

          <Nurseview open={this.state.openview} onClose={this.closemodal} />

        <Modalcomp
          visible={this.state.locationopen}
          title={"Nurse Tracking"}
          closemodal={e => this.closemodal(e)}
          // xswidth={"xs"}
        >
          <NurseLocationModal />
        </Modalcomp>
      </div>
    );
  }
}

export default NursebookedTable;
