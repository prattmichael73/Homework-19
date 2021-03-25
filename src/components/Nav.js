import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import Logo from "../../src/Logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const Nav = ({ handleSearchChange }) => {
  const classes = useStyles();
  return (
    <nav>
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "#282828" }}>
          <Toolbar>
            <Typography className={classes.title} variant="h6" style={{fontSize: "60px"}} noWrap>
            <img src={Logo} alt="site logo" style={{marginBottom: "10px"}}/>
              Employee Directory
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}></div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </nav>
  );
};
export default Nav;
