import { useMemo, useCallback } from "react";
import Checkboxes from "./Checkboxes";
import PropTypes from "prop-types";
import styles from "./TextCell1.module.css";

const TextCell1 = ({
  className = "",
  frameDivWidth,
  buyGroceries,
  buyGroceriesWidth,
  phstar,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const buyGroceriesStyle = useMemo(() => {
    return {
      width: buyGroceriesWidth,
    };
  }, [buyGroceriesWidth]);

  const onAccordionHeaderClick = useCallback((event) => {
    const element = event.target;

    const accItem = element.closest("[data-acc-item]") || element;
    const accContent = accItem.querySelector("[data-acc-content]");
    const isOpen = accItem.hasAttribute("data-acc-open");
    const nextOuterSibling =
      accItem?.nextElementSibling || accItem?.parentElement?.nextElementSibling;
    const prevOuterSibling =
      accItem?.previousElementSibling ||
      accItem?.parentElement?.previousElementSibling;
    const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
      ? accItem?.nextElementSibling ||
        nextOuterSibling?.querySelector("[data-acc-item]") ||
        nextOuterSibling
      : accItem?.previousElementSibling ||
        prevOuterSibling?.querySelector("[data-acc-item]") ||
        prevOuterSibling;
    const siblingAccItem =
      siblingContainerAccItem?.querySelector("[data-acc-item]") ||
      siblingContainerAccItem;

    if (!siblingAccItem) return;
    const originalDisplay = "flex";
    const siblingDisplay = "flex";

    const openStyleObject = {
      "grid-template-rows": "1fr",
    };
    const closeStyleObject = {
      "padding-top": "0px",
      "padding-bottom": "0px",
      "margin-bottom": "0px",
      "margin-top": "0px",
      "grid-template-rows": "0fr",
    };

    function applyStyles(element, styleObject) {
      Object.assign(element.style, styleObject);
    }

    function removeStyles(element, styleObject) {
      Object.keys(styleObject).forEach((key) => {
        element?.style.removeProperty(key);
      });
    }

    if (isOpen) {
      removeStyles(accContent, openStyleObject);
      applyStyles(accContent, closeStyleObject);

      setTimeout(() => {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = siblingDisplay;
        }
      }, 100);
    } else {
      if (accItem) {
        accItem.style.display = "none";
        siblingAccItem.style.display = originalDisplay;
      }
      const siblingAccContent =
        siblingAccItem?.querySelector("[data-acc-content]");
      setTimeout(() => {
        removeStyles(siblingAccContent, closeStyleObject);
        applyStyles(siblingAccContent, openStyleObject);
      }, 1);
    }
  }, []);

  return (
    <div
      className={[styles.textCell, className].join(" ")}
      data-acc-item
      data-acc-header
      data-acc-original
      onClick={onAccordionHeaderClick}
    >
      <div className={styles.checkboxesParent} style={frameDivStyle}>
        <Checkboxes state="Enabled" type="Unselected" />
        <div className={styles.buyGroceries} style={buyGroceriesStyle}>
          {buyGroceries}
        </div>
      </div>
      <img
        className={styles.phstarIcon}
        loading="lazy"
        alt=""
        src="/phstar-1.svg"
      />
    </div>
  );
};

TextCell1.propTypes = {
  className: PropTypes.string,
  buyGroceries: PropTypes.string,
  phstar: PropTypes.string,

  /** Style props */
  frameDivWidth: PropTypes.string,
  buyGroceriesWidth: PropTypes.string,
};

export default TextCell1;
