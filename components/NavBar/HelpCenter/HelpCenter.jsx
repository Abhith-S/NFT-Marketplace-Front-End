import React from "react";
import Link from "next/link";

//internal import
import Style from "./HelpCenter.module.css";

const HelpCenter = () => {
  //helpcenter navigation menu
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

  return (
    <div className={Style.box}>
      {/* loop over the entire discover menu using map */}
      {/* the map has a function with two params current value - element and index */}
      {helpCenter.map((element, index) => (
        <div key={index + 1} className={Style.helpCenter}>
          <Link href={{ pathname: `${element.link}` }}> {element.name} </Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
