import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  CssBaseline,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import PaletteMetaForm from "../PaletteMetaForm";
import {
  AppBar,
  PaletteFormNavStyled,
} from "../../styles/PaletteFormNavStyled";

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = { formShowing: false };
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  showForm() {
    this.setState({ formShowing: true });
  }

  hideForm() {
    this.setState({ formShowing: false });
  }

  render() {
    const { open, handleSubmit, handleDrawerOpen, palettes } = this.props;
    const { formShowing } = this.state;
    return (
      <PaletteFormNavStyled>
        <CssBaseline />
        <AppBar position='fixed' open={open} color='default'>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              sx={{ mr: 2, ...(open && { display: "none" }) }}>
              <AddToPhotosIcon />
            </IconButton>
            <Typography variant='h6' noWrap component='div'>
              Create A Palette
            </Typography>
          </Toolbar>
          <div className='nav-buttons'>
            <Link to='/'>
              <Button variant='contained' color='secondary' className='button'>
                Go Back
              </Button>
            </Link>
            <Button
              variant='contained'
              onClick={this.showForm}
              className='button'>
              Save Palette
            </Button>
            {formShowing && (
              <PaletteMetaForm
                palettes={palettes}
                handleSubmit={handleSubmit}
                hideForm={this.hideForm}
              />
            )}
          </div>
        </AppBar>
      </PaletteFormNavStyled>
    );
  }
}

export default PaletteFormNav;
