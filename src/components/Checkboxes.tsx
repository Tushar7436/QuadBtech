import { FunctionComponent } from "react";
import styles from "./Checkboxes.module.css";

export type CheckboxesType = {
  className?: string;

  /** Variant props */
  state?: string;
  type?: string;
};

const Checkboxes: FunctionComponent<CheckboxesType> = ({
  className = "",
  state = "Enabled",
  type = "Selected",
}) => {
  return (
    <div
      className={[styles.checkboxes, className].join(" ")}
      data-state={state}
      data-type={type}
    >
      <div className={styles.stateLayer}>
        <input className={styles.container} type="checkbox" />
      </div>
    </div>
  );
};

export default Checkboxes;
