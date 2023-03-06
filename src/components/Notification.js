import React, { useEffect } from "react";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { connect } from "react-redux";

function Notification({ showNotification, Nmessage, Ntype }) {
  const createNotification = (type, message) => {
    switch (type) {
      case "info":
        NotificationManager.info(message);
        return;
      case "success":
        NotificationManager.success(message);
        break;
      case "warning":
        NotificationManager.warning(message, 3000);
        break;
      case "error":
        NotificationManager.error(message);

        break;
      default:
        break;
    }
  };
  useEffect(() => {
    if (showNotification) {
      createNotification(Ntype, Nmessage);
      console.log("called");
    }
  }, [Nmessage, Ntype]);
  return (
    <>
      {" "}
      <NotificationContainer />
    </>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    showNotification: state.showNotification,
    Nmessage: state.notification_message,
    Ntype: state.notification_type,
  };
}
export default connect(mapStateToProps)(Notification);
