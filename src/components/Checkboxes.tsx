import PropTypes from "prop-types";
import styles from "./Checkboxes.module.css";

const Checkboxes = ({
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

Checkboxes.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  state: PropTypes.number,
  type: PropTypes.number,
};

export default Checkboxes;
