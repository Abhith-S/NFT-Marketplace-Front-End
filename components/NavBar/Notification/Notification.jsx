import React from "react";
import Image from "next/image";

//internal imports
import Style from "./Notification.module.css";
import images from "../../../img";

const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image
            src={images.user1}
            alt="profile image"
            width={50}
            height={50}
            className={Style.notification_box_img}
          />
        </div>
        {/* div for displaying user info */}
        <div className={Style.notification_box_info}>
          <h4>John Rambo</h4>
          <p>Measure action of your user..</p>
          {/* time of when they got their notifications */}
          <small>3 minutes</small>
        </div>
        {/* this is just for styling and just showing that this is a new notification */}

        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  );
};

export default Notification;
