import Image from "next/image";
import MenuLink from "./menulink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
//import { auth, signOut } from "@/app/auth";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Home Page Image",
        path: "/dashboard/carouselimage",
        icon: <MdDashboard />,
      },
    ],
  },
  {
    title: "Product",
    list: [
      {
        title: "Add Category",
        path: "/dashboard/addCategory",
        icon: <MdDashboard />,
      },
      {
        title: "Product Lists",
        path: "/dashboard/products",
        icon: <MdSupervisedUserCircle />,
      },
    ],
  },
  {
    title: "Product",
    list: [
      {
        title: "Add Product Category",
        path: "/dashboard/category",
        icon: <MdWork />,
      },
      {
        title: "Product Lists",
        path: "/dashboard/product",
        icon: <MdAnalytics />,
      },
      {
        title: "Order",
        path: "/dashboard/order",
        icon: <MdPeople />,
      },
      {
        title: "Customer Details",
        path: "/dashboard/customerdetails",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Users",
        path: "/dashboard/userdetails",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  //const { user } = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={"/noavatar.png"} //user.img ||
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Sachin</span>
          {/* {user.username} */}
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          //await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
