import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";

//internal import
import Style from "./BigNFTSlider.module.css";
import images from "../../img";
import { Button } from "../Button/Button";

const BigNFTSlider = () => {
  const [idNumber, setIdNumber] = useState(1);

  //data of nft
  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Jason",
      collection: "Gym",
      price: "0.0000003 ETH",
      like: 243,
      // image of creator
      image: images.user1,
      nftImage: images.nft_image_1,
      time: {
        days: 21,
        hours: 40,
        minutes: 81,
        seconds: 15,
      },
    },
    {
      title: "Buddy NFT",
      id: 2,
      name: "Sam",
      collection: "Home",
      price: "0000004 ETH",
      like: 243,
      image: images.user2,
      nftImage: images.nft_image_2,
      time: {
        days: 77,
        hours: 11,
        minutes: 21,
        seconds: 45,
      },
    },
    {
      title: "Gym NFT",
      id: 3,
      name: "Ryan",
      collection: "GYm",
      price: "0000064 ETH",
      like: 243,
      image: images.user3,
      nftImage: images.nft_image_3,
      time: {
        days: 37,
        hours: 20,
        minutes: 11,
        seconds: 55,
      },
    },
    {
      title: "Home NFT",
      id: 4,
      name: "Jack",
      collection: "GYm",
      price: "4664 ETH",
      like: 243,
      image: images.user4,
      nftImage: images.nft_image_1,
      time: {
        days: 87,
        hours: 29,
        minutes: 10,
        seconds: 15,
      },
    },
  ];
  return (
    <div className={Style.BigNFTSlider}>
      <div className={Style.BigNFTSlider_box}>
        <div className={Style.BigNFTSlider_box_left}>
          {/* we want to display the slider data here */}
          {/* we are using idNumber here so if idNumber is 1 it will display 1st object data */}
          <h2>{sliderData[idNumber].title}</h2>

          {/* div for creator profile and data */}
          <div className={Style.BigNFTSlider_box_left_creator}>
            <div className={Style.BigNFTSlider_box_left_creator_profile}>
              {/* for cretaor image */}
              <Image
                className={Style.BigNFTSlider_box_left_creator_profile_img}
                src={sliderData[idNumber].image}
                alt="creator profile picture"
                height={50}
                width={50}
              />

              <div className={Style.BigNFTSlider_box_left_creator_profile_info}>
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}{" "}
                  <span>
                    {/* for the  verified icon */}
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>

            <div className={Style.BigNFTSlider_box_left_creator_collection}>
              <AiFillFire
                className={Style.BigNFTSlider_box_left_creator_collection_icon}
              />

              <div
                className={Style.BigNFTSlider_box_left_creator_collection_info}
              >
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>

          {/* bidding section */}
          <div className={Style.BigNFTSlider_box_left_bidding}>
            <div className={Style.BigNFTSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price} <span>$22,100</span>
              </p>
            </div>

            <p className={Style.BigNFTSlider_box_left_bidding_box_auction}>
              <MdTimer
                className={Style.BigNFTSlider_box_left_bidding_box_icon}
              />

              <span>Auction ending in</span>
            </p>

            <div className={Style.BigNFTSlider_box_left_bidding_box_timer}>
              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>mins</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.seconds}</p>
                <span>secs</span>
              </div>

            </div>
                

          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSlider;
