import React from "react";
import "./assets/css/style.css";
import "./assets/scss/style.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Game from "./components/game/Game";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { useEffect, useLayoutEffect } from "react";

const App = () => {
  const theme = useSelector((state) => state.theme);

  const containerRef = useRef();
  useLayoutEffect(() => {
    let themeColor = localStorage.getItem("theme");

    if (themeColor) {
      themeColor = JSON.parse(themeColor);
      if (themeColor === "white") {
        containerRef.current.style.background = themeColor;
        containerRef.current.style.color = "black";
      }
      if (themeColor === "black") {
        containerRef.current.style.background = themeColor;
        containerRef.current.style.color = "white";
        console.log("hello");
      }
      return;
    }
    //
    if (theme.theme === "white") {
      containerRef.current.style.background = theme.theme;
      containerRef.current.style.color = "black";
    }
    if (theme.theme === "black") {
      containerRef.current.style.background = theme.theme;
      containerRef.current.style.color = "white";
    }
  }, [theme]);

  toast.info("Chào mừng bạn đến trò chơi đoán số!");
  return (
    <div className="container-fluid" ref={containerRef}>
      <Game />
      <ToastContainer />
    </div>
  );
};

export default App;
