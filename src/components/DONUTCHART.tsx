import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./DONUTCHART.module.css";

const DONUTCHART = ({
  className = "",
  percentage = false,
  products = 2,
  theme = "Light",
  value = false,
  groupDivTop,
  groupDivRight,
  groupDivBottom,
  group2017,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: groupDivTop,
      right: groupDivRight,
      bottom: groupDivBottom,
    };
  }, [groupDivTop, groupDivRight, groupDivBottom]);

  return (
    <div
      className={[styles.donutChart, className].join(" ")}
      data-percentage={percentage}
      data-products={products}
      data-theme={theme}
      data-value={value}
    >
      <div className={styles.donutChartChild} />
      <div className={styles.secondaryText}>Secondary text</div>
      <div className={styles.chartContainer}>
        <div className={styles.chartContainerInner}>
          <div className={styles.frameParent}>
            <div className={styles.primaryTextParent}>
              <div className={styles.primaryText}>Today Tasks</div>
              <div className={styles.div}>11</div>
            </div>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <div className={styles.rectangleParent} style={groupDivStyle}>
                <div className={styles.frameItem} />
                <div className={styles.frameInner} />
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.chartContainerChild}
          loading="lazy"
          alt=""
          src={group2017}
        />
        <div className={styles.frameDiv}>
          <div className={styles.ellipseDiv} />
        </div>
      </div>
      <div className={styles.donutChartInner}>
        <div className={styles.frameParent1}>
          <div className={styles.frameGroup}>
            <div className={styles.ellipseWrapper}>
              <div className={styles.frameChild1} />
            </div>
            <div className={styles.product1}>Pending</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.ellipseContainer}>
              <div className={styles.frameChild2} />
            </div>
            <div className={styles.product2}>Done</div>
          </div>
        </div>
      </div>
      <div className={styles.donutChartItem} />
    </div>
  );
};

DONUTCHART.propTypes = {
  className: PropTypes.string,
  group2017: PropTypes.string,

  /** Variant props */
  percentage: PropTypes.bool,
  products: PropTypes.number,
  theme: PropTypes.number,
  value: PropTypes.bool,

  /** Style props */
  groupDivTop: PropTypes.string,
  groupDivRight: PropTypes.string,
  groupDivBottom: PropTypes.string,
};

export default DONUTCHART;
