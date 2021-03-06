import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { Button } from "@material-ui/core";
import { Welcome } from "@storybook/react/demo";
import { linkTo } from "@storybook/addon-links";

storiesOf("StoryBookの説明", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Sample", module)
  .addDecorator(withKnobs)
  .add("ContainedButton", () => (
    <Button
      variant="contained"
      color="primary"
      disabled={boolean("Disable", false)}
    >
      KnobTest
    </Button>
  ))
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        sample
      </span>
    </Button>
  ));
