import React from "react";
import styles from "./Card.module.css";
import SouthernMap from "../../utils/SouthernMap";
interface CardProps {
  title: string;
  image: any;
  Description: string;
}
const Card = ({ title, image }: CardProps) => {
  return (
    <div className={styles.container}>
      {image}
      <div>
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ex
          excepturi possimus obcaecati odit ipsam perferendis in iusto ducimus
          sit esse enim nam expedita aut, nesciunt laboriosam aliquam cumque
          unde!
        </p>
        <br />
        <p>
          Nulla aliquam porttitor augue. In venenatis suscipit elementum.
          Pellentesque et dictum ex, a interdum odio.
        </p>
      </div>
    </div>
  );
};

export default Card;
