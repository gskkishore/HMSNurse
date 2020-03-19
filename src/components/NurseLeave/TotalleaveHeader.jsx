import React, { Component } from "react";
import { Select } from "antd";
import print from "../../Images/print.svg";
import pdf from "../../Images/pdf.svg";
import excel from "../../Images/excel.svg";
import  ReactSVG  from 'react-svg';
import Moment from "react-moment";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import "antd/dist/antd.css";
import Totalleavetable from "./TotalleaveTable";
import Paper from "@material-ui/core/Paper";
import { Input } from "antd";

class TotalleaveHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "rrr"
    };
  }

  render() {
    const { Option } = Select;
    const { Search } = Input;

    return (
      <div>
        <Paper>
        <div className="title_dashboard">
          <p className="title_header">NURSES ON LEAVE </p>
          <div style={{ fontSize: "16px" ,display:"flex",alignItems:"center"}}>
          <ButtonGroup className="clinic_group_details" size="small" aria-label="small outlined button group">
              <Button className="clinic_details">This Day</Button>
              <Button className="clinic_details">This Month</Button>
              <Button className="clinic_details">This Year</Button>
            </ButtonGroup>
            <Moment format="DD-MMM-YYYY" className="mr-2"></Moment>
            <Search
              placeholder="search"
              onSearch={value => console.log(value)}
              style={{ width: 150 }}
            />
              <div className="icon_head">
            <ReactSVG src={pdf} style={{marginRight:"15px",marginLeft:"15px"}}/>
            <ReactSVG src={excel} style={{marginRight:"15px"}}/>
            <ReactSVG src={print}  />
          </div>
          </div>
        </div>

          <Totalleavetable />
        </Paper>
      </div>
    );
  }
}
export default TotalleaveHeader;
