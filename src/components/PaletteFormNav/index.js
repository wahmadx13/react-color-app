import React, { Component } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { withStyles } from "@material-ui/styles";
import {
  Button,
  CssBaseline,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PaletteMetaForm from "../PaletteMetaForm";

const drawerWidth = 400;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  flexDirection: "row",
  justifyContent: "space-between",
  height: "64px",
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const styles = {
  root: {
    display: "flex",
  },
  navButtons: {},
};

class PaletteFormNav extends Component {
  render() {
    const { open, handleSubmit, handleDrawerOpen, classes, palettes } =
      this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position='fixed' open={open} color='default'>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              sx={{ mr: 2, ...(open && { display: "none" }) }}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' noWrap component='div'>
              Create A Palette
            </Typography>
          </Toolbar>
          <div className={classes.navButtons}>
            <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} />
            <Link to='/'>
              <Button variant='contained' color='secondary'>
                Go Back
              </Button>
            </Link>
          </div>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteFormNav);
