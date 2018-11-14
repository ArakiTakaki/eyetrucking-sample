import React from "react";
import RoomList from "~/components/molecules/RoomList";
import PropTypes from "prop-types";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer
} from "@material-ui/core";

class RoomDrawer extends React.Component {
  render() {
    const { rooms, open, onOpen, onClose } = this.props;
    return (
      <SwipeableDrawer open={open} onClose={onClose} onOpen={onOpen}>
        <List>
          <ListItem>
            <ListItemText>RoomList</ListItemText>
          </ListItem>
        </List>
        <Divider />
        <RoomList rooms={rooms} onClick={this.props.onJumpToLink} />
      </SwipeableDrawer>
    );
  }
}

RoomDrawer.propTypes = {
  rooms: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  onJumpToLink: PropTypes.func.isRequired
};

export default RoomDrawer;
