import React from "react";

function Pre(props) {
  const preloaderStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 999999,
    backgroundColor: "#030325",
    backgroundImage: `url(${require('../images/infinite-spinner.svg')})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "80px 80px",
  };

  return (
    <div
      id={props.load ? "preloader" : "preloader-none"}
      style={props.load ? preloaderStyle : {}}
    ></div>
  );
}

export default Pre;
