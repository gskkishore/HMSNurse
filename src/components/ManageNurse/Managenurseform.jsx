import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./Managenurseform.css";
import { Paper } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import one from "../../Images/11.jpg";
import Divider from "@material-ui/core/Divider";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaAngleRight } from "react-icons/fa";

export default class Uploadform extends Component {
  state = {
    details: [
      {
        id: 1,
        name: "Kishore",
        age: 29,
        phno: +96522000001,
        startdate: "20dec2019",
        enddate: "20dec2010",
        specialist: "spongebath,eveningwalk"
      },
      {
        id: 2,
        name: "Arjun",
        age: 29,
        phno: +96522000001,
        startdate: "20dec2019",
        enddate: "20dec2010",
        specialist: "spongebath,eveningwalk"
      }
    ]
  };
  render() {
    return (
      <div>
        <Grid container style={{ width: "100%" }}>
          <Grid container spacing={2} xs={12}>
            <Grid item spacing={2} xs={6} md={3}>
              <img src={one} className="card-profile" />
            </Grid>
            <Grid item spacing={2} xs={6} md={9}>
              <div>
                <h2>
                  <b>ABIDA</b>
                </h2>
                <p>29 years/ Female</p>
                <p>Jabriya...</p>
                <p>5 Years Experience </p>
                <p>+965 22000001 </p>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <div className="paper-bck" style={{ bgcolor: "grey" }}>
          {/* <Carousel showArrows={true} showThumbs={false}> */}
          <div className="Card-par">
            <Card>
              <div className="container">
                <div className="avatar">
                  <img src={one} className="card-img" alt="not avail" />
                </div>
              </div>
              <button className="btn btn-success">8 Hrs</button>

              <div className="modal-text">
                <h5>
                  <b>Mrs.Dina</b>
                </h5>
                <p>29 years/ Female</p>
                <p>Jabriya...</p>
                <p>+965 22000001 </p>
              </div>
              <div className="modal-date">
                <div>
                  <p>Start Date</p>
                  <p>20 Dec 2019</p>
                </div>

                <div>
                  <p>Start Date</p>
                  <p>20 Dec 2019</p>
                </div>
              </div>
              <Divider />
              <p className="mt-3 ml-3">Sponge Bath,Evening Walk</p>
            </Card>
          </div>
          {/* </Carousel> */}

          {/* <div className="Card-par">
            <Card>
              <div className="container">
                <div className="avatar">
                  <img src={one} className="card-img" />
                </div>
              </div>
              <button className="btn btn-success">8 Hrs</button>

              <div className="modal-text">
                <h5>
                  <b>Mrs.Dina</b>
                </h5>
                <p>29 years/ Female</p>
                <p>Jabriya...</p>
                <p>+965 22000001 </p>
              </div>
              <div className="modal-date">
                <div>
                  <p>Start Date</p>
                  <p>20 Dec 2019</p>
                </div>

                <div>
                  <p>Start Date</p>
                  <p>20 Dec 2019</p>
                </div>
              </div>
              <Divider />
              <p className="mt-3 ml-3">Sponge Bath,Evening Walk</p>
            </Card>
          </div> */}

          <div className="Card-par">
            <Card>
              <div className="container">
                <div className="avatar">
                  <img src={one} className="card-img" />
                </div>
              </div>
              <button className="btn btn-success">8 Hrs</button>

              <div className="modal-text">
                <h5>
                  <b>Mrs.Dina</b>
                </h5>
                <p>29 years/ Female</p>
                <p>Jabriya...</p>
                <p>+965 22000001 </p>
              </div>
              <div className="modal-date">
                <div>
                  <p>Start Date</p>
                  <p>20 Dec 2019</p>
                </div>

                <div>
                  <p>Start Date</p>
                  <p>20 Dec 2019</p>
                </div>
              </div>
              <Divider />
              <p className="mt-3 ml-3">Sponge Bath,Evening Walk</p>
            </Card>
          </div>

          <div className="Card-par">
            <Card>
              <div className="container">
                <div className="avatar">
                  <img src={one} className="card-img" />
                </div>
              </div>
              <button className="btn btn-success">8 Hrs</button>

              <div className="modal-text">
                <h5>
                  <b>Mrs.Dina</b>
                </h5>
                <p>29 years/ Female</p>
                <p>Jabriya...</p>
                <p>+965 22000001 </p>
              </div>
              <div className="modal-date">
                <div>
                  <p>Start Date</p>
                  <p>20 Dec 2019</p>
                </div>

                <div>
                  <p>Start Date</p>
                  <p>20 Dec 2019</p>
                </div>
              </div>
              <Divider />
              <p className="mt-3 ml-3">Sponge Bath,Evening Walk</p>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
