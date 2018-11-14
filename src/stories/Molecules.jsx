import React from "react";
import { storiesOf } from "@storybook/react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import RoomList from "~/components/molecules/RoomList";
import CreateRoomForm from "~/components/molecules/CreateRoomForm";

import { PersistGate } from "redux-persist/integration/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "~/store/configreStore";
import MOCK from "./MockDatas";

const stories = storiesOf("Molecules", module);

stories.addDecorator(story => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {story()}
    </PersistGate>
  </Provider>
));

stories.addDecorator(withKnobs);

stories.add("CreateRoomForm", () => {
  const roomName = text("ルームの名前", "sample");
  return (
    <CreateRoomForm
      onInput={action("input")}
      onClose={action("close")}
      onSubmit={action("submit")}
      roomName={roomName}
    />
  );
});

stories.add("RoomList", () => {
  return (
    <Router>
      <RoomList rooms={MOCK} />
    </Router>
  );
});
