import React, {useState} from "react";
import Image from "next/image";
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";

//internal imports
import Style from "./SideBar.module.css";
import images from "../../../img";
import Button from "../../Button/Button";
import Link from "next/link";

//we have send props in navbar.jsx sidebar component
//we are going to recieve them here
const SideBar = ({ setOpenSideMenu }) => {
  //we will have all our components here
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  //dicover navigation menu
  //we are creating an array of objects with the name and link to pages in discover
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Setting",
      link: "account-setting",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];

  //dicover navigation menu
  //we are creating an array of objects with the name and link to pages in helpcenter
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };

  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };

  //we have a click function on icon which will close the sidebar
  const closeSideBar = () => {
    //here we are using the recieved props to change state and close sidebar
    setOpenSideMenu(false);
  };

  return (
    <div className={Style.sideBar}>
      {/*close icon */}
      <GrClose
        className={Style.sideBar_closeBtn}
        onClick={() => closeSideBar()}
      />

      <div className={Style.sideBar_box}>
        <Image src={images.logo} alt="logo" width={150} height={150} />
        <p>discover the most outsanding articles of all nft stories</p>

        {/* show all social media icons */}
        <div className={Style.sideBar_social}>
          {/* links to social media, presently no redirexts */}
          <a href="#">
            {" "}
            <TiSocialFacebook />{" "}
          </a>
          <a href="#">
            {" "}
            <TiSocialInstagram />{" "}
          </a>
          <a href="#">
            {" "}
            <TiSocialLinkedin />{" "}
          </a>
          <a href="#">
            {" "}
            <TiSocialTwitter />{" "}
          </a>
          <a href="#">
            {" "}
            <TiSocialYoutube />{" "}
          </a>
        </div>
      </div>

      <div className={Style.sideBar_menu}>
        <div>
          <div
            className={Style.sideBar_menu_box}
            onClick={() => openDiscoverMenu()}
          >
            {/* if some clicks on it display the discover component */}
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>

          {openDiscover && (
            <div className={Style.sideBar_discover}>
              {discover.map((element, index) => (
                <p key={index + 1}>
                  <Link href={{ pathname: `${element.link}` }}>
                    {element.name}
                  </Link>
                </p>
              ))}
            </div>
          )}
        </div>

        <div>
          <div
            className={Style.sideBar_menu_box}
            onClick={() => openHelpMenu()}
          >
            {/* if some clicks on it display the help component */}
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>

          {openHelp && (
            //same styling as same type of compoenet
            <div className={Style.sideBar_discover}>
              {helpCenter.map((element, index) => (
                <p key={index + 1}>
                  <Link href={{ pathname: `${element.link}` }}>
                    {element.name}
                  </Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* we create 2 buttons , one for connecting wallet and the other for creating NFT */}

      <div className={Style.sideBar_button}>
        {/* creatting buttons using Button component and giving their names as props */}

        <Button btnName="Create" />
        <Button btnName="Connect Wallet" />
      </div>
    </div>
  );
};

export default SideBar;
