import browser from "webextension-polyfill";
import { fire, off, on } from "delegated-events";
import { isMatched } from "../services";
import { observe } from "selector-observer";
import * as cheerio from "cheerio";
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
  const polygons = document.querySelector(".polygons");
  console.log("poly: ", polygons);

  on("click", "path[data-section-name]", (event: any) => {
    console.log("get click event: ", event);
  });

  if (container) {
    container.appendChild(floatingContainer);
  }

  /** update floating box details */
  const realClick = document.getElementById("clickmaster__realClick");
  const autoNext = document.getElementById("clickmaster__AutoNext");
  const sameTime = document.getElementById("clickmaster__sameTime");
  const totalSeat = document.getElementById("clickmaster__totalSeats");
  if (realClick && autoNext && sameTime && totalSeat) {
    const { maxTicket, nextAutoClick, realistic, sameSeat } = await storage.get(
      ["maxTicket", "nextAutoClick", "realistic", "sameSeat"]
    );
    realClick.innerText = `${realistic}`;
    autoNext.innerText = `${nextAutoClick}`;
    sameTime.innerText = `${sameSeat}`;
    totalSeat.innerText = `${maxTicket}`;
  }
};

if (isMatched()) {
  browser.runtime.sendMessage({ status: "ON" });
} else {
  browser.runtime.sendMessage({ status: "OFF" });
  console.log("No match found for:");
}
