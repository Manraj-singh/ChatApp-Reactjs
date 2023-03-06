import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
function Notifications() {
  const { addToast } = useToasts();

  //   useEffect(() => {
  //     console.log("rendered");
  //     addToast("test", {
  //       appearance: "success",
  //     });
  //   }, []);

  return null;
}
export default connect()(Notifications);
