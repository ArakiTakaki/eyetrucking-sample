import React from "react";
import MouseEvent from "~/components/atoms/MouseEvent";

import MOCK from "./event1.json";

class MoveMouseEvent extends React.Component {
  componentDidMount() {
    const el = document
      .getElementById(MOCK[0].name)
      .animate(MOCK[0].eventTime, {
        duration: MOCK[0].endTime,
        iterations: 1,
        easing: "ease-out"
      });
    setTimeout(() => {
      el.pause();
    }, 1000);
    setTimeout(() => {
      el.play();
    }, 5000);
  }

  render() {
    console.log(MOCK);
    return (
      <div>
        <div id={MOCK[0].name}>
          <MouseEvent
            onFunction={() => {
              console.log("test");
              alert("みたな！！！！！");
            }}
            timer={500}
          />
        </div>
      </div>
    );
  }
}

export default MoveMouseEvent;
