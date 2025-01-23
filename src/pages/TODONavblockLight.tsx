import { FunctionComponent, useCallback } from "react";
import DONUTCHART from "../components/DONUTCHART";
import TextCell from "../components/TextCell";
import Checkboxes from "../components/Checkboxes";
import styles from "./TODONavblockLight.module.css";

const TODONavblockLight: FunctionComponent = () => {
  const onAccordionHeaderClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const element = event.target as HTMLElement;

      const accItem: HTMLElement =
        element.closest("[data-acc-item]") || element;
      const accContent = accItem.querySelector(
        "[data-acc-content]"
      ) as HTMLElement;
      const isOpen = accItem.hasAttribute("data-acc-open");
      const nextOuterSibling =
        accItem?.nextElementSibling ||
        (accItem?.parentElement?.nextElementSibling as HTMLElement);
      const prevOuterSibling =
        accItem?.previousElementSibling ||
        (accItem?.parentElement?.previousElementSibling as HTMLElement);
      const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
        ? accItem?.nextElementSibling ||
          nextOuterSibling?.querySelector("[data-acc-item]") ||
          nextOuterSibling
        : accItem?.previousElementSibling ||
          prevOuterSibling?.querySelector("[data-acc-item]") ||
          prevOuterSibling;
      const siblingAccItem =
        (siblingContainerAccItem?.querySelector(
          "[data-acc-item]"
        ) as HTMLElement) || siblingContainerAccItem;

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

      function applyStyles(
        element: HTMLElement,
        styleObject: Record<string, string>
      ) {
        Object.assign(element.style, styleObject);
      }

      function removeStyles(
        element: HTMLElement,
        styleObject: Record<string, string>
      ) {
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
        const siblingAccContent = siblingAccItem?.querySelector(
          "[data-acc-content]"
        ) as HTMLElement;
        setTimeout(() => {
          removeStyles(siblingAccContent, closeStyleObject);
          applyStyles(siblingAccContent, openStyleObject);
        }, 1);
      }
    },
    []
  );

  return (
    <div className={styles.toDoNavblockLight}>
      <header className={styles.webAppNavBar}>
        <div className={styles.container}>
          <img
            className={styles.menuIcon}
            loading="lazy"
            alt=""
            src="/menu.svg"
          />
          <div className={styles.logo}>
            <img
              className={styles.logomarkIcon}
              loading="lazy"
              alt=""
              src="/logomark@2x.png"
            />
            <h2 className={styles.doit}>DoIt</h2>
          </div>
        </div>
        <div className={styles.header}>
          <img
            className={styles.menuIcon}
            loading="lazy"
            alt=""
            src="/search.svg"
          />
          <img
            className={styles.menuIcon}
            loading="lazy"
            alt=""
            src="/appgrid.svg"
          />
          <img
            className={styles.menuIcon}
            loading="lazy"
            alt=""
            src="/rimoonclearline.svg"
          />
        </div>
        <img className={styles.dividerIcon} alt="" />
      </header>
      <main className={styles.container1}>
        <div className={styles.containerInner}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.labelWrapper}>
                <div className={styles.label}>Hey, ABCD</div>
              </div>
              <div className={styles.sidebar}>
                <div className={styles.sidePanelMenu}>
                  <div className={styles.menuItem}>
                    <img
                      className={styles.menuIcon}
                      loading="lazy"
                      alt=""
                      src="/menu-1.svg"
                    />
                    <a className={styles.label1}>All Tasks</a>
                  </div>
                  <div className={styles.menuItem1}>
                    <img
                      className={styles.menuIcon}
                      loading="lazy"
                      alt=""
                      src="/calendar.svg"
                    />
                    <div className={styles.label2}>Today</div>
                  </div>
                  <div className={styles.menuItem2}>
                    <img
                      className={styles.menuIcon}
                      loading="lazy"
                      alt=""
                      src="/clock.svg"
                    />
                    <div className={styles.label3}>Important</div>
                  </div>
                  <div className={styles.menuItem3}>
                    <img
                      className={styles.menuIcon}
                      loading="lazy"
                      alt=""
                      src="/clock-1.svg"
                    />
                    <div className={styles.label4}>Planned</div>
                  </div>
                  <div className={styles.menuItem4}>
                    <img
                      className={styles.menuIcon}
                      loading="lazy"
                      alt=""
                      src="/clock-2.svg"
                    />
                    <div className={styles.label5}>{`Assigned to me `}</div>
                  </div>
                </div>
              </div>
              <div className={styles.sidebar}>
                <div className={styles.sidePanelMenu}>
                  <div className={styles.menuItem5}>
                    <img
                      className={styles.menuIcon}
                      loading="lazy"
                      alt=""
                      src="/menu-2.svg"
                    />
                    <div className={styles.label6}>Add list</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.donutChartWrapper}>
              <DONUTCHART
                percentage={false}
                products={2}
                theme="Light"
                value
                groupDivTop="16.87%"
                groupDivRight="41.87%"
                groupDivBottom="16.88%"
                group2017="/group-2017.svg"
              />
            </div>
            <img
              className={styles.profileIcon}
              loading="lazy"
              alt=""
              src="/profile@2x.png"
            />
          </div>
        </div>
        <section className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.labelContainer}>
              <a className={styles.label7}>To Do</a>
            </div>
            <img
              className={styles.menuIcon}
              loading="lazy"
              alt=""
              src="/caretdown.svg"
            />
          </div>
          <TextCell />
          <div className={styles.frameParent1}>
            <div className={styles.taskItemParent}>
              <div className={styles.taskItem}>
                <div className={styles.textCell}>
                  <div className={styles.taskCheckboxes}>
                    <Checkboxes state="Enabled" type="Unselected" />
                    <div className={styles.buyGroceries}>Buy groceries</div>
                  </div>
                  <img
                    className={styles.phstarIcon}
                    loading="lazy"
                    alt=""
                    src="/phstar.svg"
                  />
                </div>
                <div className={styles.textCell1}>
                  <div className={styles.checkboxesParent}>
                    <Checkboxes state="Enabled" type="Unselected" />
                    <div className={styles.buyGroceries}>
                      Schedule dentist appointment
                    </div>
                  </div>
                  <img
                    className={styles.phstarIcon}
                    loading="lazy"
                    alt=""
                    src="/phstar-1.svg"
                  />
                </div>
              </div>
              <div className={styles.secondTaskItem}>
                <div className={styles.secondTaskItemContent}>
                  <div className={styles.textCell2}>
                    <div className={styles.secondTaskCheckboxes}>
                      <Checkboxes state="Enabled" type="Unselected" />
                      <div className={styles.buyGroceries}>
                        Finish project report
                      </div>
                    </div>
                    <img
                      className={styles.phstarIcon}
                      loading="lazy"
                      alt=""
                      src="/phstar-2.svg"
                    />
                  </div>
                  <div className={styles.textCell3}>
                    <div className={styles.checkboxesGroup}>
                      <Checkboxes state="Enabled" type="Unselected" />
                      <div className={styles.planWeekendTrip}>
                        Plan weekend trip
                      </div>
                    </div>
                    <img
                      className={styles.phstarIcon}
                      loading="lazy"
                      alt=""
                      src="/phstar.svg"
                    />
                  </div>
                </div>
                <div className={styles.textCell4}>
                  <div className={styles.thirdTaskContent}>
                    <Checkboxes state="Enabled" type="Unselected" />
                    <a className={styles.callTheBank}>Call the bank</a>
                  </div>
                  <img
                    className={styles.phstarIcon}
                    loading="lazy"
                    alt=""
                    src="/phstar.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.completedTaskItem} data-acc-group>
              <div className={styles.completed}>Completed</div>
              <div
                className={styles.textCell5}
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className={styles.completedTaskCheckboxes}>
                  <div className={styles.checkboxes}>
                    <div className={styles.stateLayer}>
                      <input className={styles.container2} type="checkbox" />
                      <img
                        className={styles.checkSmallIcon}
                        loading="lazy"
                        alt=""
                        src="/check-small.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.completedTaskNames}>
                    <div className={styles.readABook}>Read a book</div>
                  </div>
                </div>
                <div className={styles.completedTaskStars}>
                  <img
                    className={styles.phstarIcon5}
                    loading="lazy"
                    alt=""
                    src="/phstar-1.svg"
                  />
                </div>
              </div>
              <div
                className={styles.accordionItemMock}
                data-acc-item
                data-acc-open
              >
                <div
                  className={styles.textCellOpen}
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className={styles.completedTaskCheckboxes}>
                    <div className={styles.checkboxes}>
                      <div className={styles.stateLayer}>
                        <input className={styles.container2} type="checkbox" />
                        <img
                          className={styles.checkSmallIcon}
                          loading="lazy"
                          alt=""
                          src="/check-small.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.completedTaskNames}>
                      <div className={styles.readABook}>Read a book</div>
                    </div>
                  </div>
                  <div className={styles.completedTaskStars}>
                    <img
                      className={styles.phstarIcon5}
                      loading="lazy"
                      alt=""
                      src="/phstar-1.svg"
                    />
                  </div>
                  <div className={styles.accordionContent} />
                </div>
                <div className={styles.accordionContent1} data-acc-content>
                  <div className={styles.accordionContentWrap}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <div
                className={styles.textCell6}
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className={styles.checkboxesParent1}>
                  <div className={styles.checkboxes}>
                    <div className={styles.stateLayer}>
                      <input className={styles.container2} type="checkbox" />
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
                <div className={styles.completedTaskStars}>
                  <img
                    className={styles.phstarIcon5}
                    loading="lazy"
                    alt=""
                    src="/phstar-1.svg"
                  />
                </div>
              </div>
              <div
                className={styles.accordionItemMock}
                data-acc-item
                data-acc-open
              >
                <div
                  className={styles.textCellOpen}
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className={styles.completedTaskCheckboxes}>
                    <div className={styles.checkboxes}>
                      <div className={styles.stateLayer}>
                        <input className={styles.container2} type="checkbox" />
                        <img
                          className={styles.checkSmallIcon}
                          loading="lazy"
                          alt=""
                          src="/check-small.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.completedTaskNames}>
                      <div className={styles.cleanTheHouse}>
                        Clean the house
                      </div>
                    </div>
                  </div>
                  <div className={styles.completedTaskStars}>
                    <img
                      className={styles.phstarIcon5}
                      loading="lazy"
                      alt=""
                      src="/phstar-1.svg"
                    />
                  </div>
                  <div className={styles.accordionContent} />
                </div>
                <div className={styles.accordionContent1} data-acc-content>
                  <div className={styles.accordionContentWrap}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <div
                className={styles.textCell7}
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className={styles.checkboxesParent3}>
                  <div className={styles.checkboxes}>
                    <div className={styles.stateLayer}>
                      <input className={styles.container2} type="checkbox" />
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
                <div className={styles.completedTaskStars}>
                  <img
                    className={styles.phstarIcon5}
                    loading="lazy"
                    alt=""
                    src="/phstar-1.svg"
                  />
                </div>
              </div>
              <div
                className={styles.accordionItemMock}
                data-acc-item
                data-acc-open
              >
                <div
                  className={styles.textCellOpen}
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className={styles.completedTaskCheckboxes}>
                    <div className={styles.checkboxes}>
                      <div className={styles.stateLayer}>
                        <input className={styles.container2} type="checkbox" />
                        <img
                          className={styles.checkSmallIcon}
                          loading="lazy"
                          alt=""
                          src="/check-small.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.completedTaskNames}>
                      <div className={styles.preparePresentation}>
                        Prepare presentation
                      </div>
                    </div>
                  </div>
                  <div className={styles.completedTaskStars}>
                    <img
                      className={styles.phstarIcon5}
                      loading="lazy"
                      alt=""
                      src="/phstar-1.svg"
                    />
                  </div>
                  <div className={styles.accordionContent} />
                </div>
                <div className={styles.accordionContent1} data-acc-content>
                  <div className={styles.accordionContentWrap}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <div
                className={styles.textCell5}
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className={styles.completedTaskCheckboxes}>
                  <div className={styles.checkboxes}>
                    <div className={styles.stateLayer}>
                      <input className={styles.container2} type="checkbox" />
                      <img
                        className={styles.checkSmallIcon}
                        loading="lazy"
                        alt=""
                        src="/check-small.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.completedTaskNames}>
                    <div className={styles.readABook}>Update blog</div>
                  </div>
                </div>
                <div className={styles.completedTaskStars}>
                  <img
                    className={styles.phstarIcon5}
                    loading="lazy"
                    alt=""
                    src="/phstar-1.svg"
                  />
                </div>
              </div>
              <div
                className={styles.accordionItemMock}
                data-acc-item
                data-acc-open
              >
                <div
                  className={styles.textCellOpen}
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className={styles.completedTaskCheckboxes}>
                    <div className={styles.checkboxes}>
                      <div className={styles.stateLayer}>
                        <input className={styles.container2} type="checkbox" />
                        <img
                          className={styles.checkSmallIcon}
                          loading="lazy"
                          alt=""
                          src="/check-small.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.completedTaskNames}>
                      <div className={styles.readABook}>Update blog</div>
                    </div>
                  </div>
                  <div className={styles.completedTaskStars}>
                    <img
                      className={styles.phstarIcon5}
                      loading="lazy"
                      alt=""
                      src="/phstar-1.svg"
                    />
                  </div>
                  <div className={styles.accordionContent} />
                </div>
                <div className={styles.accordionContent1} data-acc-content>
                  <div className={styles.accordionContentWrap}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TODONavblockLight;
