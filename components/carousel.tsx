import Props from "./index";
import React from "react";
import styles from "../styles/components/Carousel.module.css";

export class Carousel extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <div className={"relative flex w-full items-center"}>
        <button
          className={"absolute left-0 flex items-center justify-center"}
          onClick={() => {
            document
              .querySelector(".carousel-content > div.hidden")
              .classList.toggle("hidden");
            document
              .querySelector(".carousel-content > div:not(hidden)")
              .classList.toggle("hidden");
          }}
        >
          <span className={"carousel-prev-btn"}></span>
        </button>
        <div className={"carousel-content flex w-full items-center"}>
          <div
            className={
              "bg-gradient gradient-info hidden h-80 w-full rounded-lg"
            }
          ></div>
          <div
            className={"bg-gradient gradient-primary h-80 w-full rounded-lg"}
          ></div>
          <div
            className={
              "bg-gradient gradient-success hidden h-80 w-full rounded-lg"
            }
          ></div>
        </div>
        <button className={"absolute right-0 flex items-center justify-center"}>
          <span className={"carousel-next-btn"}></span>
        </button>
      </div>
    );
  }
}
