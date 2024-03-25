import React from "react";
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
        title: "Add Product Category",
        path: "/dashboard/category",
        icon: <MdWork />,
      },
      {
        title: "Add Product",
        path: "/dashboard/products",
        icon: <MdWork />,
        submenu: [
          {
            title: "Product List",
            path: "/dashboard/products/productList",
            icon: <MdWork />,
            // submenu: [
            //   // Nested submenu
            //   {
            //     title: "Submenu Item 1",
            //     path: "/dashboard/submenu1",
            //     icon: <MdDashboard />,
            //   },
            //   {
            //     title: "Submenu Item 2",
            //     path: "/dashboard/submenu2",
            //     icon: <MdDashboard />,
            //   },
            // ],
          },
        ],
      },
      {
        title: "Order Details",
        path: "/dashboard/orderlist",
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
    title: "Repair",
    list: [
      {
        title: "Add Repair",
        path: "",
        icon: <MdWork />,
      },
      {
        title: "Repair Lists",
        path: "",
        icon: <MdAnalytics />,
      },
      {
        title: "Repair Inquery",
        path: "",
        icon: <MdPeople />,
      },
      {
        title: "Repair Customer Details",
        path: "",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "Compare",
    list: [
      {
        title: "Compare Model",
        path: "",
        icon: <MdWork />,
      },
      {
        title: "Compare Model Lists",
        path: "",
        icon: <MdAnalytics />,
      },
    ],
  },
  {
    title: "Customer",
    list: [
      {
        title: "Registered Customer",
        path: "/dashboard/userdetails",
        icon: <MdSupervisedUserCircle />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Users Profile",
        path: "/dashboard/userprofile",
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
              <React.Fragment key={item.title}>
                <MenuLink item={item} />
                {item.submenu && (
                  <ul className={styles.submenu}>
                    {item.submenu.map((subItem) => (
                      <li key={subItem.title}>
                        <MenuLink item={subItem} />
                        {subItem.submenu && (
                          <ul className={styles.submenu}>
                            {subItem.submenu.map((nestedSubItem) => (
                              <li key={nestedSubItem.title}>
                                <MenuLink item={nestedSubItem} />
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </React.Fragment>
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
