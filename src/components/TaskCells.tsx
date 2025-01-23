import { useCallback } from "react";
import TextCell1 from "./TextCell1";
import Checkboxes from "./Checkboxes";
import PropTypes from "prop-types";
import styles from "./TaskCells.module.css";

const TaskCells = ({ className = "" }) => {
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
    <div className={[styles.taskCells, className].join(" ")} data-acc-group>
      <TextCell1 buyGroceries="Buy groceries" phstar="/phstar-1.svg" />
      <div
        className={styles.frame9Open}
        data-acc-item
        data-acc-open
        data-acc-header
        onClick={onAccordionHeaderClick}
      >
        <div className={styles.textCell}>
          <div className={styles.checkboxesParent}>
            <div className={styles.checkboxes}>
              <div className={styles.stateLayer}>
                <input className={styles.container} type="checkbox" />
                <img
                  className={styles.checkSmallIcon}
                  loading="lazy"
                  alt=""
                  src="/check-small.svg"
                />
              </div>
            </div>
            <div className={styles.readABookWrapper}>
              <div className={styles.readABook}>Buy groceries</div>
            </div>
          </div>
          <div className={styles.phstarWrapper}>
            <img
              className={styles.phstarIcon}
              loading="lazy"
              alt=""
              src="/phstar-1.svg"
            />
          </div>
        </div>
        <div className={styles.accordionContent} data-acc-content>
          <div className={styles.container1}>
            <div className={styles.textCell1}>
              <div className={styles.checkboxesGroup}>
                <div className={styles.checkboxes}>
                  <div className={styles.stateLayer}>
                    <input className={styles.container} type="checkbox" />
                    <img
                      className={styles.checkSmallIcon}
                      loading="lazy"
                      alt=""
                      src="/check-small.svg"
                    />
                  </div>
                </div>
                <div className={styles.cleanTheHouseWrapper}>
                  <div className={styles.cleanTheHouse}>Clean the house</div>
                </div>
              </div>
              <div className={styles.phstarWrapper}>
                <img
                  className={styles.phstarIcon}
                  loading="lazy"
                  alt=""
                  src="/phstar-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.textCell2}>
          <div className={styles.checkboxesContainer}>
            <div className={styles.checkboxes}>
              <div className={styles.stateLayer}>
                <input className={styles.container} type="checkbox" />
                <img
                  className={styles.checkSmallIcon}
                  loading="lazy"
                  alt=""
                  src="/check-small.svg"
                />
              </div>
            </div>
            <div className={styles.preparePresentationWrapper}>
              <div className={styles.preparePresentation}>
                Prepare presentation
              </div>
            </div>
          </div>
          <div className={styles.phstarWrapper}>
            <img
              className={styles.phstarIcon}
              loading="lazy"
              alt=""
              src="/phstar-1.svg"
            />
          </div>
        </div>
        <div className={styles.textCell}>
          <div className={styles.checkboxesParent}>
            <div className={styles.checkboxes}>
              <div className={styles.stateLayer}>
                <input className={styles.container} type="checkbox" />
                <img
                  className={styles.checkSmallIcon}
                  loading="lazy"
                  alt=""
                  src="/check-small.svg"
                />
              </div>
            </div>
            <div className={styles.readABookWrapper}>
              <div className={styles.updateBlog}>Update blog</div>
            </div>
          </div>
          <div className={styles.phstarWrapper}>
            <img
              className={styles.phstarIcon}
              loading="lazy"
              alt=""
              src="/phstar-1.svg"
            />
          </div>
        </div>
        <div className={styles.accordionContent1} />
        <div className={styles.div} />
      </div>
      <TextCell1
        frameDivWidth="388px"
        buyGroceries="Finish project report"
        buyGroceriesWidth="136px"
        phstar="/phstar-11.svg"
      />
      <div
        className={styles.frame9Open}
        data-acc-item
        data-acc-open
        data-acc-header
        onClick={onAccordionHeaderClick}
      >
        <div className={styles.textCell}>
          <div className={styles.checkboxesParent}>
            <div className={styles.checkboxes}>
              <div className={styles.stateLayer}>
                <input className={styles.container} type="checkbox" />
                <img
                  className={styles.checkSmallIcon}
                  loading="lazy"
                  alt=""
                  src="/check-small.svg"
                />
              </div>
            </div>
            <div className={styles.readABookWrapper}>
              <div className={styles.readABook1}>Finish project report</div>
            </div>
          </div>
          <div className={styles.phstarWrapper}>
            <img
              className={styles.phstarIcon}
              loading="lazy"
              alt=""
              src="/phstar-1.svg"
            />
          </div>
        </div>
        <div className={styles.accordionContent} data-acc-content>
          <div className={styles.container1}>
            <div className={styles.textCell1}>
              <div className={styles.checkboxesGroup}>
                <div className={styles.checkboxes}>
                  <div className={styles.stateLayer}>
                    <input className={styles.container} type="checkbox" />
                    <img
                      className={styles.checkSmallIcon}
                      loading="lazy"
                      alt=""
                      src="/check-small.svg"
                    />
                  </div>
                </div>
                <div className={styles.cleanTheHouseWrapper}>
                  <div className={styles.cleanTheHouse}>Clean the house</div>
                </div>
              </div>
              <div className={styles.phstarWrapper}>
                <img
                  className={styles.phstarIcon}
                  loading="lazy"
                  alt=""
                  src="/phstar-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.textCell2}>
          <div className={styles.checkboxesContainer}>
            <div className={styles.checkboxes}>
              <div className={styles.stateLayer}>
                <input className={styles.container} type="checkbox" />
                <img
                  className={styles.checkSmallIcon}
                  loading="lazy"
                  alt=""
                  src="/check-small.svg"
                />
              </div>
            </div>
            <div className={styles.preparePresentationWrapper}>
              <div className={styles.preparePresentation}>
                Prepare presentation
              </div>
            </div>
          </div>
          <div className={styles.phstarWrapper}>
            <img
              className={styles.phstarIcon}
              loading="lazy"
              alt=""
              src="/phstar-1.svg"
            />
          </div>
        </div>
        <div className={styles.textCell}>
          <div className={styles.checkboxesParent}>
            <div className={styles.checkboxes}>
              <div className={styles.stateLayer}>
                <input className={styles.container} type="checkbox" />
                <img
                  className={styles.checkSmallIcon}
                  loading="lazy"
                  alt=""
                  src="/check-small.svg"
                />
              </div>
            </div>
            <div className={styles.readABookWrapper}>
              <div className={styles.updateBlog}>Update blog</div>
            </div>
          </div>
          <div className={styles.phstarWrapper}>
            <img
              className={styles.phstarIcon}
              loading="lazy"
              alt=""
              src="/phstar-1.svg"
            />
          </div>
        </div>
        <div className={styles.accordionContent1} />
        <div className={styles.div} />
      </div>
      <TextCell1
        frameDivWidth="364px"
        buyGroceries="Call the bank"
        buyGroceriesWidth="88px"
        phstar="/phstar-1.svg"
      />
      <div
        className={styles.frame9Open}
        data-acc-item
        data-acc-open
        data-acc-header
        onClick={onAccordionHeaderClick}
      >
        <div className={styles.textCell}>
          <div className={styles.checkboxesParent}>
            <div className={styles.checkboxes}>
              <div className={styles.stateLayer}>
                <input className={styles.container} type="checkbox" />
                <img
                  className={styles.checkSmallIcon}
                  loading="lazy"
                  alt=""
                  src="/check-small.svg"
                />
              </div>
            </div>
            <div className={styles.readABookWrapper}>
              <div className={styles.readABook2}>Call the bank</div>
            </div>
          </div>
          <div className={styles.phstarWrapper}>
            <img
              className={styles.phstarIcon}
              loading="lazy"
              alt=""
              src="/phstar-1.svg"
            />
          </div>
        </div>
        <div className={styles.accordionContent} data-acc-content>
          <div className={styles.container1}>
            <div className={styles.textCell1}>
              <div className={styles.checkboxesGroup}>
                <div className={styles.checkboxes}>
                  <div className={styles.stateLayer}>
                    <input className={styles.container} type="checkbox" />
                    <img
                      className={styles.checkSmallIcon}
                      loading="lazy"
                      alt=""
                      src="/check-small.svg"
                    />
                  </div>
                </div>
                <div className={styles.cleanTheHouseWrapper}>
                  <div className={styles.cleanTheHouse}>Clean the house</div>
                </div>
              </div>
              <div className={styles.phstarWrapper}>
                <img
                  className={styles.phstarIcon}
                  loading="lazy"
                  alt=""
                  src="/phstar-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.textCell2}>
          <div className={styles.checkboxesContainer}>
            <div className={styles.checkboxes}>
              <div className={styles.stateLayer}>
                <input className={styles.container} type="checkbox" />
                <img
                  className={styles.checkSmallIcon}
                  loading="lazy"
                  alt=""
                  src="/check-small.svg"
                />
              </div>
            </div>
            <div className={styles.preparePresentationWrapper}>
              <div className={styles.preparePresentation}>
                Prepare presentation
              </div>
            </div>
          </div>
          <div className={styles.phstarWrapper}>
            <img
              className={styles.phstarIcon}
              loading="lazy"
              alt=""
              src="/phstar-1.svg"
            />
          </div>
        </div>
        <div className={styles.textCell}>
          <div className={styles.checkboxesParent}>
            <div className={styles.checkboxes}>
              <div className={styles.stateLayer}>
                <input className={styles.container} type="checkbox" />
                <img
                  className={styles.checkSmallIcon}
                  loading="lazy"
                  alt=""
                  src="/check-small.svg"
                />
              </div>
            </div>
            <div className={styles.readABookWrapper}>
              <div className={styles.updateBlog}>Update blog</div>
            </div>
          </div>
          <div className={styles.phstarWrapper}>
            <img
              className={styles.phstarIcon}
              loading="lazy"
              alt=""
              src="/phstar-1.svg"
            />
          </div>
        </div>
        <div className={styles.accordionContent1} />
        <div className={styles.div} />
      </div>
      <TextCell1
        frameDivWidth="419.5px"
        buyGroceries="Schedule dentist appointment"
        buyGroceriesWidth="199px"
        phstar="/phstar-1.svg"
      />
      <div
        className={styles.frame9Open}
        data-acc-item
        data-acc-open
        data-acc-header
        onClick={onAccordionHeaderClick}
      >
        <div className={styles.textCell}>
          <div className={styles.checkboxesParent}>
            <div className={styles.checkboxes}>
              <div className={styles.stateLayer}>
                <input className={styles.container} type="checkbox" />
                <img
                  className={styles.checkSmallIcon}
                  loading="lazy"
                  alt=""
                  src="/check-small.svg"
                />
              </div>
            </div>
            <div className={styles.readABookWrapper}>
              <div className={styles.readABook3}>
                Schedule dentist appointment
              </div>
            </div>
          </div>
          <div className={styles.phstarWrapper}>
            <img
              className={styles.phstarIcon}
              loading="lazy"
              alt=""
              src="/phstar-1.svg"
            />
          </div>
        </div>
        <div className={styles.accordionContent} data-acc-content>
          <div className={styles.container1}>
            <div className={styles.textCell1}>
              <div className={styles.checkboxesGroup}>
                <div className={styles.checkboxes}>
                  <div className={styles.stateLayer}>
                    <input className={styles.container} type="checkbox" />
                    <img
                      className={styles.checkSmallIcon}
                      loading="lazy"
                      alt=""
                      src="/check-small.svg"
                    />
                  </div>
                </div>
                <div className={styles.cleanTheHouseWrapper}>
                  <div className={styles.cleanTheHouse}>Clean the house</div>
                </div>
              </div>
              <div className={styles.phstarWrapper}>
                <img
                  className={styles.phstarIcon}
                  loading="lazy"
                  alt=""
                  src="/phstar-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.textCell2}>
          <div className={styles.checkboxesContainer}>
            <div className={styles.checkboxes}>
              <div className={styles.stateLayer}>
                <input className={styles.container} type="checkbox" />
                <img
                  className={styles.checkSmallIcon}
                  loading="lazy"
                  alt=""
                  src="/check-small.svg"
                />
              </div>
            </div>
            <div className={styles.preparePresentationWrapper}>
              <div className={styles.preparePresentation}>
                Prepare presentation
              </div>
            </div>
          </div>
          <div className={styles.phstarWrapper}>
            <img
              className={styles.phstarIcon}
              loading="lazy"
              alt=""
              src="/phstar-1.svg"
            />
          </div>
        </div>
        <div className={styles.textCell}>
          <div className={styles.checkboxesParent}>
            <div className={styles.checkboxes}>
              <div className={styles.stateLayer}>
                <input className={styles.container} type="checkbox" />
                <img
                  className={styles.checkSmallIcon}
                  loading="lazy"
                  alt=""
                  src="/check-small.svg"
                />
              </div>
            </div>
            <div className={styles.readABookWrapper}>
              <div className={styles.updateBlog}>Update blog</div>
            </div>
          </div>
          <div className={styles.phstarWrapper}>
            <img
              className={styles.phstarIcon}
              loading="lazy"
              alt=""
              src="/phstar-1.svg"
            />
          </div>
        </div>
        <div className={styles.accordionContent1} />
        <div className={styles.div} />
      </div>
      <TextCell1
        frameDivWidth="380px"
        buyGroceries="Plan weekend trip"
        buyGroceriesWidth="120px"
        phstar="/phstar-1.svg"
      />
      <div
        className={styles.frame9Open}
        data-acc-item
        data-acc-open
        data-acc-header
        onClick={onAccordionHeaderClick}
      >
        <div className={styles.textCell}>
          <div className={styles.checkboxesParent}>
            <div className={styles.checkboxes}>
              <div className={styles.stateLayer}>
                <input className={styles.container} type="checkbox" />
                <img
                  className={styles.checkSmallIcon}
                  loading="lazy"
                  alt=""
                  src="/check-small.svg"
                />
              </div>
            </div>
            <div className={styles.readABookWrapper}>
              <div className={styles.readABook4}>Plan weekend trip</div>
            </div>
          </div>
          <div className={styles.phstarWrapper}>
            <img
              className={styles.phstarIcon}
              loading="lazy"
              alt=""
              src="/phstar-1.svg"
            />
          </div>
        </div>
        <div className={styles.accordionContent} data-acc-content>
          <div className={styles.container1}>
            <div className={styles.textCell1}>
              <div className={styles.checkboxesGroup}>
                <div className={styles.checkboxes}>
                  <div className={styles.stateLayer}>
                    <input className={styles.container} type="checkbox" />
                    <img
                      className={styles.checkSmallIcon}
                      loading="lazy"
                      alt=""
                      src="/check-small.svg"
                    />
                  </div>
                </div>
                <div className={styles.cleanTheHouseWrapper}>
                  <div className={styles.cleanTheHouse}>Clean the house</div>
                </div>
              </div>
              <div className={styles.phstarWrapper}>
                <img
                  className={styles.phstarIcon}
                  loading="lazy"
                  alt=""
                  src="/phstar-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.textCell2}>
          <div className={styles.checkboxesContainer}>
            <div className={styles.checkboxes}>
              <div className={styles.stateLayer}>
                <input className={styles.container} type="checkbox" />
                <img
                  className={styles.checkSmallIcon}
                  loading="lazy"
                  alt=""
                  src="/check-small.svg"
                />
              </div>
            </div>
            <div className={styles.preparePresentationWrapper}>
              <div className={styles.preparePresentation}>
                Prepare presentation
              </div>
            </div>
          </div>
          <div className={styles.phstarWrapper}>
            <img
              className={styles.phstarIcon}
              loading="lazy"
              alt=""
              src="/phstar-1.svg"
            />
          </div>
        </div>
        <div className={styles.textCell}>
          <div className={styles.checkboxesParent}>
            <div className={styles.checkboxes}>
              <div className={styles.stateLayer}>
                <input className={styles.container} type="checkbox" />
                <img
                  className={styles.checkSmallIcon}
                  loading="lazy"
                  alt=""
                  src="/check-small.svg"
                />
              </div>
            </div>
            <div className={styles.readABookWrapper}>
              <div className={styles.updateBlog}>Update blog</div>
            </div>
          </div>
          <div className={styles.phstarWrapper}>
            <img
              className={styles.phstarIcon}
              loading="lazy"
              alt=""
              src="/phstar-1.svg"
            />
          </div>
        </div>
        <div className={styles.accordionContent1} />
        <div className={styles.div} />
      </div>
      <div className={styles.completed}>Completed</div>
      <div
        className={styles.completedTasks}
        data-acc-item
        data-acc-open
        data-acc-header
        data-acc-original
        data-acc-default-open
        onClick={onAccordionHeaderClick}
      >
        <div className={styles.textCell}>
          <div className={styles.checkboxesParent}>
            <div className={styles.checkboxes}>
              <div className={styles.stateLayer}>
                <input className={styles.container} type="checkbox" />
                <img
                  className={styles.checkSmallIcon}
                  loading="lazy"
                  alt=""
                  src="/check-small.svg"
                />
              </div>
            </div>
            <div className={styles.readABookWrapper}>
              <div className={styles.updateBlog}>Read a book</div>
            </div>
          </div>
          <div className={styles.phstarWrapper}>
            <img
              className={styles.phstarIcon}
              loading="lazy"
              alt=""
              src="/phstar-1.svg"
            />
          </div>
        </div>
        <div className={styles.accordionContentaccordionDef} data-acc-content>
          <div className={styles.container1}>
            <div className={styles.textCell1}>
              <div className={styles.checkboxesGroup}>
                <div className={styles.checkboxes}>
                  <div className={styles.stateLayer}>
                    <input className={styles.container} type="checkbox" />
                    <img
                      className={styles.checkSmallIcon}
                      loading="lazy"
                      alt=""
                      src="/check-small.svg"
                    />
                  </div>
                </div>
                <div className={styles.cleanTheHouseWrapper}>
                  <div className={styles.cleanTheHouse}>Clean the house</div>
                </div>
              </div>
              <div className={styles.phstarWrapper}>
                <img
                  className={styles.phstarIcon}
                  loading="lazy"
                  alt=""
                  src="/phstar-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.textCell2}>
          <div className={styles.checkboxesContainer}>
            <div className={styles.checkboxes}>
              <div className={styles.stateLayer}>
                <input className={styles.container} type="checkbox" />
                <img
                  className={styles.checkSmallIcon}
                  loading="lazy"
                  alt=""
                  src="/check-small.svg"
                />
              </div>
            </div>
            <div className={styles.preparePresentationWrapper}>
              <div className={styles.preparePresentation}>
                Prepare presentation
              </div>
            </div>
          </div>
          <div className={styles.phstarWrapper}>
            <img
              className={styles.phstarIcon}
              loading="lazy"
              alt=""
              src="/phstar-1.svg"
            />
          </div>
        </div>
        <div className={styles.textCell}>
          <div className={styles.checkboxesParent}>
            <div className={styles.checkboxes}>
              <div className={styles.stateLayer}>
                <input className={styles.container} type="checkbox" />
                <img
                  className={styles.checkSmallIcon}
                  loading="lazy"
                  alt=""
                  src="/check-small.svg"
                />
              </div>
            </div>
            <div className={styles.readABookWrapper}>
              <div className={styles.updateBlog}>Update blog</div>
            </div>
          </div>
          <div className={styles.phstarWrapper}>
            <img
              className={styles.phstarIcon}
              loading="lazy"
              alt=""
              src="/phstar-1.svg"
            />
          </div>
        </div>
      </div>
      <div
        className={styles.textCellClose}
        data-acc-item
        data-acc-header
        onClick={onAccordionHeaderClick}
      >
        <div className={styles.checkboxesParent21}>
          <Checkboxes state="Enabled" type="Unselected" />
          <div className={styles.buyGroceries}>Read a book</div>
        </div>
        <img
          className={styles.phstarIcon24}
          loading="lazy"
          alt=""
          src="/phstar-1.svg"
        />
        <div className={styles.accordionContent1} />
        <div className={styles.div} />
      </div>
    </div>
  );
};

TaskCells.propTypes = {
  className: PropTypes.string,
};

export default TaskCells;
