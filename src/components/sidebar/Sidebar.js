import React from "react";
import Link from "next/link";
import styles from "../styles/pagesCSS/Sidebar.module.css";
import Dashboard from "@/app/dashboard/page";

import { FaUser } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { BiSolidExit } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className={`flex flex-col h-screen w-56 bg-gray-900 justify-start gap-6`}>
      <div className="flex flex-col items-center justify-center">
        <img className="flex items-center mt-4 h-10 w-auto" src="/logorgb.png" alt="logo" />
      </div>

      <Link href="/dashboard">
        <div className={`flex items-center justify-center cursor-pointer shadow-lg mt-4 ${styles["sidebar-link"]}`}>
          <FaUser size={30} />
          <span className="ml-2 ">kullanıcı adı</span>
        </div>
      </Link>

      <Link href="/classes">
        <div className={`flex items-center justify-center cursor-pointer mt-4 ${styles["sidebar-link"]}`}>
          <FaBookOpen size={30} />
          <span className="ml-2">Dersler</span>
        </div>
      </Link>

      <Link href="/groups">
        <div className={`flex items-center justify-center cursor-pointer ${styles["sidebar-link"]}`}>
          <FaUserGroup size={30} />
          <span className="ml-2">Gruplar</span>
        </div>
      </Link>

      <Link href="/exams">
        <div className={`flex items-center justify-center cursor-pointer ${styles["sidebar-link"]}`}>
          <FaPen size={30} />
          <span className="ml-2">Sınavlar</span>
        </div>
      </Link>

      <Link href="/notifications">
        <div className={`flex items-center justify-center cursor-pointer ${styles["sidebar-link"]}`}>
          <FaRegBell size={30} />
          <span className="ml-2">Bildirimler</span>
        </div>
      </Link>

      <Link href="/login">
        <div className={`flex items-center justify-center cursor-pointer mt-40 ${styles["sidebar-link"]}`}>
          <BiSolidExit size={30} />
          <span className="ml-2">Çıkış</span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;