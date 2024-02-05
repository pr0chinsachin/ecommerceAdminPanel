import React from 'react'
import Navbar from '../ui-component/dashboard/navbar/navbar'
import Sidebar from '../ui-component/dashboard/sidebar/sidebar'
import Styles from '../ui-component/dashboard/dashboard.module.css'
import Footer from "../ui-component/dashboard/footer/footer"
const Layout = ({children}) => {
  return (
    <div className={Styles.container}>
        <div className={Styles.menu}>
        <Sidebar />
        </div>
        <div className={Styles.content}>
        <Navbar />
            {children}
        <Footer/>   
        </div>
    </div>
  )
}

export default Layout