import PropTypes from "prop-types";
import styles from "./TextCell.module.css";

const TextCell = ({ className = "" }) => {
  return (
    <div className={[styles.textCell, className].join(" ")}>
      <div className={styles.addATask}>Add A Task</div>
      <div className={styles.frameParent}>
        <div className={styles.iconContainerWrapper}>
          <div className={styles.iconContainer}>
            <img
              className={styles.claritynotificationLineIcon}
              loading="lazy"
              alt=""
              src="/claritynotificationline.svg"
            />
            <img
              className={styles.claritynotificationLineIcon}
              loading="lazy"
              alt=""
              src="/birepeat.svg"
            />
            <img
              className={styles.claritynotificationLineIcon}
              loading="lazy"
              alt=""
              src="/iconoircalendar.svg"
            />
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.label}>ADD TASK</div>
        </div>
      </div>
    </div>
  );
};

TextCell.propTypes = {
  className: PropTypes.string,
};

export default TextCell;
