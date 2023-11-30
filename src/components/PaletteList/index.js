import React, { Component } from "react";
import {
  Dialog,
  DialogTitle,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { blue, red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MiniPalette from "../MiniPalette";
import { PaletteListStyled } from "../../styles/PaletteListStyled";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
      deletingId: "",
    };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleDeletePalette = this.handleDeletePalette.bind(this);
    this.goToPalette = this.goToPalette.bind(this);
  }

  openDialog(id) {
    this.setState({ openDeleteDialog: true, deletingId: id });
  }

  closeDialog() {
    this.setState({ openDeleteDialog: false, deletingId: "" });
  }

  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  handleDeletePalette() {
    this.props.deletePalette(this.state.deletingId);
    this.closeDialog();
  }

  render() {
    const { palettes } = this.props;
    const { openDeleteDialog } = this.state;
    return (
      <PaletteListStyled>
        <div className='container'>
          <nav className='nav'>
            <h1>React Colors</h1>
            <Link to='/palette/new'>Create New Palette</Link>
          </nav>
          <TransitionGroup className='palettes'>
            {palettes.map((palette) => (
              <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                <MiniPalette
                  {...palette}
                  goToPalette={this.goToPalette}
                  openDialog={this.openDialog}
                  key={palette.id}
                  id={palette.id}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={openDeleteDialog}
          aria-labelledby='delete-dialog-title'
          onClose={this.closeDialog}>
          <DialogTitle id='delete-dialog-title'>
            Delete this Palette?
          </DialogTitle>
          <List>
            <ListItemButton onClick={this.handleDeletePalette}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}>
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Delete' />
            </ListItemButton>
            <ListItemButton onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Cancel' />
            </ListItemButton>
          </List>
        </Dialog>
      </PaletteListStyled>
    );
  }
}

export default PaletteList;
