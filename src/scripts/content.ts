console.clear();
import browser from "webextension-polyfill";
import { isMatched } from "../services";
import { observe } from "selector-observer";
import floatingContainer from "../libs";
import { storage } from "../utils";

observe("div#map-container", {
  constructor: HTMLDivElement,
  initialize: () => ({
    add: () => observeContainerDiv(),
  }),
});

const observeContainerDiv = async () => {
  const container = document.getElementById("map-container");
  const { maxTicket, nextAutoClick, realistic, sameSeat } = await storage.get([
    "maxTicket",
    "nextAutoClick",
    "realistic",
    "sameSeat",
  ]);
  ///////////////////////////////////////////////////////////////

  if (container) {
    container.appendChild(floatingContainer);
  }

  /** update floating box details */
  const floatingBox = document.querySelector(".clickmaster__floatingContainer");
  const totalSeatNumber = document.getElementById(
    "clickmaster__totalSeatsNumber"
  );
  const mainHeadingReady = document.querySelector(".clickmaster__main");

  if (floatingBox) {
    const realClick = document.getElementById("clickmaster__realClick");
    const autoNext = document.getElementById("clickmaster__AutoNext");
    const sameTime = document.getElementById("clickmaster__sameTime");

    mainHeadingReady!.innerHTML = `
    <h3 class="clickmaster__mainHeading">Ready</h3>
    `;
    realClick!.innerText = `${realistic}`.toUpperCase();
    autoNext!.innerText = `${nextAutoClick}`.toUpperCase();
    sameTime!.innerText = `${sameSeat}`.toUpperCase();
  }

  /** get focus */
  window.addEventListener(
    "click",
    (e: any) => {
      if (e.target.matches("path[data-section-name]")) {
        const targets = e.target;
        if (targets) {
          console.log(targets.attributes);
          mainHeadingReady!.innerHTML = `
        <h3 class="clickmaster__mainHeading">Main Focus</h3>
        <p id="clickmaster__mainText">${targets.attributes[2]?.value}</p>`;
          totalSeatNumber!.innerText = `20`;
        }
      }
    },
    true
  );
  /** seats listener */
  window.addEventListener(
    "click",
    (e: any) => {
      if (e.target.matches("circle[data-seat-name]")) {
        const listOfArributes = e.target.attributes;
        console.log("selected element: ", e.target);
        if (listOfArributes.length !== 7) {
          // TODO: click next seat
          let seatnumber = Number(listOfArributes[3]?.value);
          let i = seatnumber + 1;
          console.log("index number", i);
          const maxSeatsForClick = seatnumber + 4; // TODO: should be dynamic
          console.log("max seat: ", maxSeatsForClick);

          while (i <= maxSeatsForClick) {
            const addBtn: HTMLButtonElement = document.getElementsByClassName(
              "indexstyles__StyledButton-sc-83qv1q-0 AtFEU"
            )[0] as HTMLButtonElement;

            if (addBtn) {
              addBtn?.click();
            }

            const circleElement = document.querySelector(
              `circle[data-seat-name="${i}"]`
            ) as any;
            console.log("element: ", circleElement);
            circleElement.click();
            i++;
          }
        }
      }
    },
    true
  );
};

if (isMatched()) {
  browser.runtime.sendMessage({ status: "ON" });
} else {
  browser.runtime.sendMessage({ status: "OFF" });
  console.log("No match found for:");
}
