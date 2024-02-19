import React from "react";
import styles from './Card.module.css'
const Card = () => {
  return (
    <div className={styles.container}>
      <img src="/southern-map.svg" alt="" />
      <div>
        <h1>Southern & Central Africa</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ex
          excepturi possimus obcaecati odit ipsam perferendis in iusto ducimus
          sit esse enim nam expedita aut, nesciunt laboriosam aliquam cumque
          unde!
        </p>
      </div>
    </div>
  );
};

export default Card;
