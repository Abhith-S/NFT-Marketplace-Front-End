import React from "react";
import Link from "next/link";

//internal import
import Style from "./Discover.module.css";

const Discover = () => {
  //discover navigation menu
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

  return (
    <div>
      {/* loop over the entire discover menu using map */}
      {/* the map has a function with two params current value - element and index - i */}
      {discover.map((element, index) => (
        <div key={index + 1} className={Style.discover}>
          {/* the link is from next, we can also use anchor tag */}
          <Link href={{ pathname: `${element.link}` }}> {element.name} </Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
