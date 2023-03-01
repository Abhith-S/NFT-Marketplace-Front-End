import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

//import icons
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

//internal import
import Style from "./NavBar.module.css";
import { Discover, HelpCenter, Profile, Notification, SideBar } from "./index";
import { Button } from "../componentsindex";
import images from "../../img";

const NavBar = () => {
  //useState for each components, so we can open and close them as we like
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [profile, setProfile] = useState(false);
  const [notification, setNotification] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  //write the function for openning a component
  const openMenu = (e) => {
    //we are accessing the inner text from the button click
    const btnText = e.target.innerText;

    if (btnText == "Discover") {
      //we set dicover to true to display it
      setDiscover(true);

      //set everything else to false as we don't want to display them
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Help Center") {
      //we set help center to true to display it
      setHelp(true);

      //set everything else to false as we don't want to display them
      setDiscover(false);
      setNotification(false);
      setProfile(false);
    } else {
      setHelp(false);
      setDiscover(false);
      setNotification(false);
      setProfile(false);
    }
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            {/* images.logo is getting the logo from index.js file where all images are imported */}
            <Image
              src={images.logo}
              alt="NFT MARKET PLACE"
              width={100}
              height={100}
            />
          </div>

          {/* for search div */}
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />

              {/* search icon */}
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>

        {/* END of left section */}

        {/* right section begins here */}
        <div className={Style.navbar_container_right}>
          {/* DISCOVER COMPONENT */}
          <div className={Style.navbar_container_right_discover}>
            {/* open discover component on click, here onclick the text "Discover" will be passed to e */}
            <p onClick={(e) => openMenu(e)}>Discover</p>

            {/* the discover state is initially false then this compoenet won't display
            if it turns to true it will display */}
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                {/* here we display the discover component */}
                <Discover />
              </div>
            )}
          </div>

          {/* HELP CENTER COMPONENT */}
          <div className={Style.navbar_container_right_help}>
            {/* open help center component on click, here onclick the text "Help Center" will be passed to e */}
            <p onClick={(e) => openMenu(e)}>Help Center</p>

            {/* the help state is initially false then this compoenet won't display
            if it turns to true it will display */}
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                {/* here we display the HelpCenter component */}
                <HelpCenter />
              </div>
            )}
          </div>

          {/* NOTIFICATION COMPONENT */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
