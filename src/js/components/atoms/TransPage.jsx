import React from "react";
import styles from "./scss/TransPage.scss";

export default () => {
  const list = [];
  for (let i = 1; i <= 20; i++) {
    list.push(<div className={styles[`cover_${i}`]} />);
  }
  return (
    <div>
      <div className={styles.hidden} />
      {list}
    </div>
  );
};
