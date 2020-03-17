import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./Drawerpage.css";
import { Dropdown } from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../../Images/avatar.jpg";
import Badge from "@material-ui/core/Badge";
import bell from "../../Images/bell.png";
import Logo from "../../Images/Logo.png";
import dashboard from "../../Images/dashboard.svg";
import Button from "@material-ui/core/Button";
import nursehired from "../../Images/nursehired.svg";
import idlenurse from "../../Images/idlenurse.svg";
import nurseonleave from "../../Images/nurseonleave.svg";
import cancelledappointments from "../../Images/cancelledappointments.svg";
import deals from "../../Images/deals.svg";
import availability from "../../Images/availability.svg";
import advertisebooking from "../../Images/advertisebooking.svg";
import managenurse from "../../Images/managenurse.svg";
import revenue from "../../Images/revenue.svg";
import profile from "../../Images/profile.svg";
import report from "../../Images/report.svg";

import { BrowserRouter as Router, Route,NavLink} from "react-router-dom";

import Dashboard from "../Nurse_dashboard/Nurse_dash_master"
import NursebookedHeader from "../NurseHired/NursebookedHeader";
import IdlenurseHeader from "../IdleNurse/IdlenurseHeader";
import AvailabilityMaster from "../Availability/AvailabilityMaster";
import TotalleaveHeader from "../NurseLeave/TotalleaveHeader";
import NurseserviceCancellation from "../CancelledAppointments/NurseServiceCancellationHeader";
import AdvertisementMaster from "../AdvertisementBooking/AdvertisementMaster";
import DealsMaster from "../Deals/DealsMaster";
import Revenue from "../Revenue/RevenueMaster";
import TotalnurseDashboard from "../ManageNurse/TotalnurseDashboard";
import CancelPayment from "../CancelPayment/CancelPayment";
import PaymentReceived from "../PaymentReceived/PaymentReceived";
import ProfileComp from "../Profilepage/Profilepage"





import {
  Menulist,
  MenuItem,
  ListItemText,
  ListItemIcon,
  MenuList
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";


const drawerWidth = 260;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});
class MiniDrawer extends React.Component {
  state = {
    open: false,
    viewmodal: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  viewmodalOpen = () => {
    this.setState({ viewmodal: true });
  };
  viewmodalClose = () => {
    this.setState({ viewmodal: false });
  };
  render() {
    const { classes, theme, children } = this.props;

    return (
      <div className="drawerpage_container">
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
              [classes.appBarShift]: this.state.open
            })}
          >
            <Toolbar disableGutters={!this.state.open}>
              <div className="drawer-logo-container">
                <img className="logo" src={Logo} alt="logo" />
              </div>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, {
                  [classes.hide]: this.state.open
                })}
              >
                <MenuIcon />
              </IconButton>
              <div
                className={`${
                  this.state.open
                    ? "dropdown-container"
                    : "dropdown-container_close"
                }`}
              >
                <Dropdown>
                  <Badge
                    color="secondary"
                    variant="dot"
                    className={classes.margin}
                  >
                    <div className="notification-icon">
                      {" "}
                      <img className="notification" src={bell} />
                    </div>
                  </Badge>
                  <Dropdown.Toggle variant="my_style" id="dropdown-basic">
                    My Profile
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu">
                    <div className="dropdown-img">
                      <img
                        className="Avatar"
                        alt="avatar-missing"
                        src={avatar}
                      />
                    </div>
                    {/* <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Log out</Dropdown.Item> */}

                    {/* <Dropdown.Item>
                      <p>hui</p>
                    </Dropdown.Item> */}
                    {/* <Dropdown.Item> */}
                    <Divider />
                    <div className="profile_logout_butt">
                      <p>Profile</p>
                      <Button
                        className="logout_butt"
                        onClick={this.props.onClose}
                      >
                        Logout
                      </Button>
                    </div>
                    <Divider />
                    <div className="profile_logout_privacy ">
                      <p>Privacy Policy Terms of Service</p>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>

                <div className="date-wrapper1">
                  <div className="date-wrapper2">
                    <large className="date">04-09-2019 10.00am</large>
                  </div>
                </div>
              </div>

              <Avatar
                className="Avatar-image"
                alt="avatar-missing"
                src={avatar}
                // onClick={this.viewmodalOpen}
                className={classes.avatar}
              />
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={classNames(classes.drawer, {
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open
            })}
            classes={{
              paper: classNames({
                [classes.drawerOpen]: this.state.open,
                [classes.drawerClose]: !this.state.open
              })
            }}
            open={this.state.open}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div> 

            <MenuList className="appbar_sideicons">
              <MenuItem component={Link} to="/Home/dashboard">
                <ListItemIcon>
                  <div className="icon-container">
                    <ReactSVG src={dashboard} />
                  </div>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </MenuItem>

              <MenuItem component={Link} to="/Home/nursehired">
                <ListItemIcon>
                  <div className="icon-container">
                    <ReactSVG src={nursehired} />
                  </div>
                </ListItemIcon>
                <ListItemText primary="Nurse Hired" />
              </MenuItem>

              <MenuItem component={Link} to="/Home/idlenurse">
                <ListItemIcon>
                  <div className="icon-container">
                    <ReactSVG src={idlenurse} />
                  </div>
                </ListItemIcon>
                <ListItemText primary="Idle Nurse" />
              </MenuItem>

              <MenuItem component={Link} to="/Home/availability">
                <ListItemIcon>
                  <div className="icon-container">
                    <ReactSVG src={availability} />
                  </div>
                </ListItemIcon>
                <ListItemText primary="Availibility" />
              </MenuItem>

              <MenuItem component={Link} to="/Home/nurseleave">
                <ListItemIcon>
                  <div className="icon-container">
                    <ReactSVG src={nurseonleave} />
                  </div>
                </ListItemIcon>
                <ListItemText primary="Nurse On Leave" />
              </MenuItem>

              <MenuItem component={Link} to="/Home/cancelledappointments">
                <ListItemIcon>
                  <div className="icon-container">
                    <ReactSVG src={cancelledappointments} />
                  </div>
                </ListItemIcon>
                <ListItemText primary="Cancelled Appointments" />
              </MenuItem>

              <MenuItem component={Link} to="/Home/advertisement">
                <ListItemIcon>
                  <div className="icon-container">
                    <div>
                      <ReactSVG src={advertisebooking} />
                    </div>
                  </div>
                </ListItemIcon>
                <ListItemText primary="Advertisement Booking" />
              </MenuItem>

              <MenuItem component={Link} to="/Home/deals">
                <ListItemIcon>
                  <div className="icon-container">
                    <div>
                      <ReactSVG src={deals} />
                    </div>
                  </div>
                </ListItemIcon>
                <ListItemText primary="Deals" />
              </MenuItem>

              <MenuItem component={Link} to="/Home/revenue">
                <ListItemIcon>
                  <div className="icon-container">
                    <div>
                      <ReactSVG src={revenue} />
                    </div>
                  </div>
                </ListItemIcon>
                <ListItemText primary="Revenue" />
              </MenuItem>

              <MenuItem component={Link} to="/Home/managenurse">
                <ListItemIcon>
                  <div className="icon-container">
                    <div>
                      <ReactSVG src={managenurse} />
                    </div>
                  </div>
                </ListItemIcon>
                <ListItemText primary="Manage Nurse" />
              </MenuItem>
              <MenuItem component={Link} to="/Home/profilepage" onClick={this.viewmodalOpen}>
                <ListItemIcon>
                  <div className="icon-container">
                    <div>
                      <ReactSVG src={profile} />
                    </div>
                  </div>
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </MenuItem>
              <MenuItem >
                <ListItemIcon>
                  <div className="icon-container">
                    <div>
                      <ReactSVG src={report} />
                    </div>
                  </div>
                </ListItemIcon>
                <ListItemText primary="Customer History" />
              </MenuItem>
            </MenuList>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Route path={`${this.props.match.path}/dashboard`} component={Dashboard} exact />  
            <Route path={`${this.props.match.path}/nursehired`} component={NursebookedHeader} exact />  
            <Route path={`${this.props.match.path}/idlenurse`} component={IdlenurseHeader} exact />  
            <Route path={`${this.props.match.path}/availability`} component={AvailabilityMaster} exact />  
            <Route path={`${this.props.match.path}/nurseleave`} component={TotalleaveHeader} exact />  
            <Route path={`${this.props.match.path}/cancelledappointments`} component={NurseserviceCancellation} exact />  
            <Route path={`${this.props.match.path}/advertisement`} component={AdvertisementMaster} exact />  
            <Route path={`${this.props.match.path}/deals`} component={DealsMaster} exact />  
            <Route path={`${this.props.match.path}/revenue`} component={Revenue} exact />  
            <Route path={`${this.props.match.path}/managenurse`} component={TotalnurseDashboard} exact />  
            <Route path={`${this.props.match.path}/cancelpayment`} component={CancelPayment} exact />
            <Route path={`${this.props.match.path}/paymentreceived`} component={PaymentReceived} exact />  
            <Route path={`${this.props.match.path}/profilepage`} component={ProfileComp} exact />  


            







            <div>
              {children}
              {/* <Profilepage
                open={this.state.viewmodal}
                onClose={this.viewmodalClose}
              /> */}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
