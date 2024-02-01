//import { cards } from "../lib/data";
import Card from "../ui-component/dashboard/card/card";
//import Chart from "../ui-component/dashboard/chart/chart";
import styles from "../ui-component/dashboard/dashboard.module.css";
import Rightbar from "../ui-component/dashboard/rightbar/rightbar";
//import Transactions from "../ui-component/dashboard/transactions/transactions";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {/* {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))} */}
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        {/* <Transactions />
        <Chart /> */}
      </div>
      {/* <div className={styles.side}>
        <Rightbar />
      </div> */}
    </div>
  );
};

export default Dashboard;