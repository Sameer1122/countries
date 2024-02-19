import React from "react";
import styles from "./List.module.css";
const List = ({ val }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleRow}>
        <img src={val.image} alt="" />
        <div>
          <h4>{val.name}</h4>
          <p>Capital city: {val.capital}</p>
        </div>
      </div>
      <div className={styles.infoRow}>
        <div>
          <img src="/weather.svg" alt="" />
          <p>18°C</p>
        </div>
        <div>
          <img src="/clock.svg" alt="" />
          <p>13h45</p>
        </div>
        <div>
          <p>1 {val.currency} = R0.32</p>
        </div>
      </div>
    </div>
  );
};

export default List;
