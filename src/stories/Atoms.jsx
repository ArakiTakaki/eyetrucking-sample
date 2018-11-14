import React from "react";
import { storiesOf } from "@storybook/react";

import { text, withKnobs } from "@storybook/addon-knobs";
import RoomLink from "~/components/atoms/RoomLink";
import { MemoryRouter as Router } from "react-router-dom";

const stories = storiesOf("Atoms", module);
stories.addDecorator(withKnobs);
stories.add("RoomLink", () => {
  const roomName = text("ルームの名前", "サンプルルーム");
  return (
    <Router>
      <RoomLink name={roomName} href={roomName} />
    </Router>
  );
});
