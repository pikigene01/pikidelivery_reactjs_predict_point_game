import React, { useEffect } from "react";
import "./Game.css";

export default function Game() {
  useEffect(() => {
    let panelTop = 0,
      points = 0,
      isGoingDown = true,
      isPause = true,
      panelLeft = 40,
      ballTop = 0;

    const game_wrapper = document.querySelector(".game_wrapper"),
      ball = document.querySelector(".ball"),
      pointsWrapper = document.querySelector(".points"),
      panel = document.querySelector(".panel"),
      computer = document.querySelector(".computer");

    document.addEventListener("keypress", (e) => {
      if (e.keyCode === 32) {
        //this is a spacebar and we change the isPause to false
        isPause = !isPause;
      }
      panelMovement(e);
    });

    const panelMovement = (e) => {
      switch (e.key) {
        case "a":
          //panel should move to left
          panelLeft -= 10;
          panel.style.left = panelLeft + "%";
          break;

        case "d":
          //we move panel to the right
          panelLeft += 10;
          panel.style.left = panelLeft + "%";
          break;

        default:
          break;
      }
    };

    const interval = setInterval(() => {
      let numbers = ["10", "20", "30", "40", "90", "60", "70", "80"];

      const random = Math.floor(Math.random() * numbers.length);

      if (!isPause) {
        if (panel.offsetLeft === ball.offsetLeft) {
          //user predicted correct ball value
          points += 10; //increment points with 10 points
          pointsWrapper.innerHTML = points;
        }
        computer.style.left = numbers[random] + "%";
        if (isGoingDown) {
          ballTop += 10;
          ball.style.left = numbers[random] + "%";
          ball.style.top = ballTop + "%";
          console.log(ball.offsetTop);
          console.log(panel.offsetTop);
          if (ball.offsetTop >= panel.offsetTop) {
            isGoingDown = false;
          }
        } else {
          ballTop -= 10;
          ball.style.top = ballTop + "%";
          ball.style.left = numbers[random] + "%";
          if (ball.offsetTop <= 0) {
            isGoingDown = true;
          }
        }
      }
    }, 1200);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keypress", panelMovement);
    };
  }, []);
  return (
    <div className="game_wrapper">
      <div className="wall_top"></div>
      <div className="ball"></div>
      <div className="points">0</div>
      <div className="computer">computer</div>
      <div className="panel">PikiDelivery</div>
      <div className="wall_bottom"></div>
    </div>
  );
}
