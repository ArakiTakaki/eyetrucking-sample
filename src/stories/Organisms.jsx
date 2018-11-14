import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import AppBar from "../js/components/organisms/AppBar";
import CreateRoomDialog from "../js/components/organisms/CreateRoomDialog";
import RoomDrawer from "~/components/organisms/RoomDrawer";
import DummyRoom from "./MockDatas";

// 必須
import { MemoryRouter as Router } from "react-router-dom";
// 必須

const stories = storiesOf("Organisms", module);
stories.addDecorator(withKnobs);
stories.add("AppBar", () => {
  const headName = text("headerName", "HEADER");
  return (
    <Router>
      <AppBar
        head={headName}
        onClickRoomList={action("ルームリストを表示")}
        onClickCreateRoom={action("ルーム作成ダイアログの表示")}
      />
    </Router>
  );
});

stories.add("CreateRoom", () => {
  return (
    <CreateRoomDialog
      onClose={action("ダイアログをcloseするイベント")}
      onSubmit={action("ルームを作成するイベント")}
      open={boolean("Open", true)}
    />
  );
});

stories.add("Room", () => {
  return (
    <Router>
      <RoomDrawer open={boolean("Open", true)} rooms={DummyRoom} />
    </Router>
  );
});
