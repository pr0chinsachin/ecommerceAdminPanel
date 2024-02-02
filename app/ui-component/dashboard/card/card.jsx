import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Product Onoard</span>
        {/* {item.title} */}
        <span className={styles.number}>100</span>
        {/* {item.number} */}
        <span className={styles.detail}>
          {/* <span className={item.change > 0 ? styles.positive : styles.negative}>
            {item.change}%
          </span>{" "}
          {item.change > 0 ? "more" : "less"} than previous week */}
          50% up
        </span>
      </div>
    </div>
  );
};

export default Card;
