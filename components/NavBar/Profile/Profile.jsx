import React from "react";
import Image from "next/image";
//import icons from react icons font awesome (fa)
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";

//internal imports
import Style from "./Profile.module.css";
import images from "../../../img";
import Link from "next/link";

const Profile = () => {
  return (
    <div className={Style.profile_account}>
      <Image
        src={images.user1}
        alt="user profile"
        width={50}
        height={50}
        className={Style.profile_account_img}
      />

      <div className={Style.profile_account_info}>
        <p>John McLane</p>
        <small>0x27613hjeads78342f..</small>
      </div>

      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            {/* display icon here */}
            <FaUserAlt />
            <p>
              {/* the link will redirect to myprofile page */}
              <Link href={{ pathname: "/myprofile" }}>My Profile</Link>
            </p>
          </div>

          <div className={Style.profile_menu_one_item}>
            {/* display icon here */}
            <FaRegImage />
            <p>
              {/* the link will redirect to my-items page */}
              <Link href={{ pathname: "./my-items" }}>My Item</Link>
            </p>
          </div>

          <div className={Style.profile_menu_one_item}>
            {/* display icon here */}
            <FaUserEdit />
            <p>
              {/* the link will redirect to edit-profile page */}
              <Link href={{ pathname: "/edit-profile" }}>Edit Profile</Link>
            </p>
          </div>
        </div>

        {/* we are adding a border between the first 3 menu and the last 2 menu */}
        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            {/* display icon here */}
            <MdHelpCenter />

            <p>
              <Link href={{ pathname: "/help" }}>Help</Link>
            </p>
          </div>

          <div className={Style.profile_menu_one_item}>
            {/* display icon here */}
            <TbDownload />

            <p>
              <Link href={{ pathname: "/disconnect" }}>Disconnect</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
