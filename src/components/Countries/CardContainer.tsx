import React from "react";
import styles from "./CardContainer.module.css";
import Card from "./Card";
import List from "./List";
interface TabsProps {
  tabValue: string;
}
const CardContainer: React.FC<TabsProps> = ({ tabValue }) => {
  const southernAfrica = [
    { id: 0,image:"/botswana.svg", name: "Botswana", capital: "Gaborone", currency: "Botswana Pula" },
    { id: 1,image:"/eswatini.svg", name: "Eswatini", capital: "Mbabane", currency: "Botswana Pula" },
    { id: 2,image:"/lesotho.svg", name: "Lesotho", capital: "Maseru", currency: "Botswana Pula" },
    { id: 3,image:"/malawi.svg", name: "Malawi", capital: "Lilongwe", currency: "Botswana Pula" },
    { id: 4,image:"/mozambique.svg", name: "Mozambique", capital: "Maputo", currency: "Botswana Pula" },
    { id: 5,image:"/namibia.svg", name: "Namibia", capital: "Windhoek", currency: "Botswana Pula" },
    {
      id: 6,image:"/south-africa.svg",
      name: "South Africa",
      capital: "Capital city: Pretoria, Cape Town, and Bloemfontein",
      currency: "Botswana Pula",
    },
    { id: 7,image:"/zambia.svg", name: "Zambia", capital: "Lusaka", currency: "Botswana Pula" },
    { id: 8,image:"/zimbabwe.svg", name: "Zimbabwe", capital: "Harare", currency: "Botswana Pula" },
  ];
  return (
    <div className={styles.container}>
      <div>
        <Card />
      </div>
      <div className={styles.listGrid}>
        {southernAfrica.map((val) => (
          <List val={val} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
