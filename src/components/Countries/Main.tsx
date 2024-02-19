import React, { useState } from "react";
import Tabs from "./Tabs";
import CardContainer from "./CardContainer";

const Main = () => {
  const [currentTab, setcurrentTab] = useState<string>("southren-africa");
  return (
    <>
      <Tabs tabValue={currentTab} setTabValue={setcurrentTab} />
      <CardContainer tabValue={currentTab} />
    </>
  );
};

export default Main;
