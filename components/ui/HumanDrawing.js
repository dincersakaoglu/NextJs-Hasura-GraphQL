import React, { useState } from "react";
import styles from "./HumanDrawing.module.css";

const HumanDrawing = () => {
  const [armPosition, setArmPosition] = useState(0);

  const handleMouseMovement = (e) => {
    const mouseY = e.clientY;
    const armPosition = (mouseY - window.innerHeight / 2) / 10;
    setArmPosition(armPosition);
  };

  return (
    <div className={styles["human-drawing"]} onMouseMove={handleMouseMovement}>
      <div className={styles.head}></div>
      <div className={styles.body}></div>
      <div
        className={styles["arm-left"]}
        style={{ height: `calc(100px + ${armPosition}px)` }}
      ></div>
      <div
        className={styles["arm-right"]}
        style={{ height: `calc(100px - ${armPosition}px)` }}
      ></div>
    </div>
  );
};

export default HumanDrawing;
