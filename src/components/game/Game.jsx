import React from "react";
import "./scss/style.scss";
import History from "./History";
import { useSelector, useDispatch } from "react-redux";
import { useState, useRef, useLayoutEffect } from "react";
const Game = () => {
  const [inputRange, setInputRange] = useState("");
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    let RANGE_NUMBER = localStorage.getItem("RANGE_NUMBER");
    let themeColor = localStorage.getItem("theme");
    if (themeColor) {
      theme.theme = JSON.parse(themeColor);
    }
    if (RANGE_NUMBER) {
      RANGE_NUMBER = JSON.parse(RANGE_NUMBER);
      setInputRange(+RANGE_NUMBER);
      return;
    }
    setInputRange(100);
  }, []);

  const handleInputRange = (e) => {
    setInputRange(e.target.value);
    localStorage.setItem("RANGE_NUMBER", JSON.stringify(e.target.value));
  };

  const handleTheme = () => {
    if (theme.theme === "white") {
      dispatch({
        type: "theme/drak",
        payload: "black",
      });
    }
    if (theme.theme === "black") {
      dispatch({
        type: "theme/light",
        payload: "white",
      });
    }
  };

  return (
    <div className="row">
      <div>
        <button onClick={handleTheme}>
          {theme.theme === "black" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-lightbulb"
              viewBox="0 0 16 16"
            >
              <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-moon-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278" />
            </svg>
          )}
        </button>
      </div>
      <div>
        <h3>Chào mừng bạn đến với trò chơi đoán số</h3>
        <h3>Còn 8/8 lần </h3>
        <h3>bạn cần tìm kiếm số từ 1 đến {inputRange} </h3>
        <div className="wrapper_random">
          <label htmlFor="value_random">
            Hãy nhập khoảng số bạn muốn Max 2000, Min 7:
          </label>
          <input
            type="number"
            className="number"
            id="value_random"
            defaultValue={inputRange}
            onChange={handleInputRange}
            min={10}
          />
        </div>

        <div className="wrapper_random">
          <label htmlFor="input_random">nhập số bạn định đoán:</label>
          <input
            type="text"
            placeholder="Hãy đoán thử 1 số"
            id="input_random"
          />
        </div>
      </div>
      <History />
    </div>
  );
};

export default Game;
