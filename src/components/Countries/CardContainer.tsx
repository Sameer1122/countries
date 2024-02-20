import React from "react";
import styles from "./CardContainer.module.css";
import Card from "./Card";
import List from "./List";
import SouthernMap from "../../utils/SouthernMap";
import EasternMap from "../../utils/EasternMap";
import Western from "../../utils/Western";
import InternationalMap from "../../utils/International";
import {
  easternAfrica,
  international,
  southernAfrica,
  westernAfrica,
} from "../../utils/DummyData";
interface TabsProps {
  tabValue: string;
}
const CardContainer: React.FC<TabsProps> = ({ tabValue }) => {
  return (
    <div className={styles.upperContainer}>
      <div className={styles.container}>
        <div>
          {tabValue === "southren-africa" && (
            <Card
              title={"Southern & Central Africa"}
              image={<SouthernMap />}
              Description={""}
            />
          )}
          {tabValue === "western-africa" && (
            <Card
              title={"Western Africa"}
              image={<Western />}
              Description={""}
            />
          )}
          {tabValue === "eastern-africa" && (
            <Card
              title={"Eastern Africa"}
              image={<EasternMap />}
              Description={""}
            />
          )}
          {tabValue === "international" && (
            <Card
              title={"International"}
              image={<InternationalMap />}
              Description={""}
            />
          )}
        </div>
        <div className={styles.listGrid}>
          {tabValue === "southren-africa" &&
            southernAfrica.map((val) => <List val={val} />)}
          {tabValue === "western-africa" &&
            westernAfrica.map((val) => <List val={val} />)}
          {tabValue === "eastern-africa" &&
            easternAfrica.map((val) => <List val={val} />)}
          {tabValue === "international" &&
            international.map((val) => (
              <List val={val} isInternational={true} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
