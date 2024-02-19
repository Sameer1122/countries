import React, { Dispatch, SetStateAction } from "react";
import styles from "./Tabs.module.css";
interface TabsProps {
  tabValue: string;
  setTabValue: Dispatch<SetStateAction<string>>;
}
const Tabs: React.FC<TabsProps> = ({ tabValue, setTabValue }) => {
  
  return (
    <div className={styles.container}>
      <div onClick={() => setTabValue("southren-africa")} className={tabValue === "southren-africa" ? styles.divActive : ""}>
        <p>Southern & Central Africa</p>
      </div>
      <div onClick={() => setTabValue("western-africa")} className={tabValue === "western-africa" ? styles.divActive : ""}>
        <p>Western Africa</p>
      </div>
      <div onClick={() => setTabValue("eastern-africa")} className={tabValue === "eastern-africa" ? styles.divActive : ""}>
        <p>Eastern Africa</p>
      </div>
      <div onClick={() => setTabValue("international")} className={tabValue === "international" ? styles.divActive : ""}>
        <p>International</p>
      </div>
    </div>
  );
};

export default Tabs;
