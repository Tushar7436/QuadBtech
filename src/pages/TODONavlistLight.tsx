import DONUTCHART from "../components/DONUTCHART";
import TextCell from "../components/TextCell";
import TaskCells from "../components/TaskCells";
import PropTypes from "prop-types";
import styles from "./TODONavlistLight.module.css";

const TODONavlistLight = ({ onClose }) => {
  return (
    <div className={styles.toDoNavlistLight}>
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
            src="/appgrid1.svg"
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
                    <div className={styles.label1}>All Tasks</div>
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
                    <div className={styles.label1}>Add list</div>
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
              <div className={styles.label7}>To Do</div>
            </div>
            <img
              className={styles.menuIcon}
              loading="lazy"
              alt=""
              src="/caretdown.svg"
            />
          </div>
          <TextCell />
          <TaskCells />
        </section>
      </main>
    </div>
  );
};

TODONavlistLight.propTypes = {
  onClose: PropTypes.func,
};

export default TODONavlistLight;
