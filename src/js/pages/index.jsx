import React from "react";
import AppBar from "~/components/organisms/AppBar";
import RoomDrawer from "~/components/organisms/RoomDrawer";
import CreateRoomDialog from "~/components/organisms/CreateRoomDialog";
import BottomNav from "~/components/organisms/BottmNav";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "~/store/actions";
import * as API from "~/util/api";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});
const mapStateToProps = state => ({ store: state });

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class Index extends React.Component {
  componentWillMount() {
    API.initialGetRooms();
  }

  render() {
    const { name } = this.props.store;
    return <div>{name}</div>;
  }
}

export default Index;
