import browser from "webextension-polyfill";
import { fire, off, on } from "delegated-events";
import { isMatched } from "../services";
import { observe } from "selector-observer";
import * as cheerio from "cheerio";
import floatingContainer from "../libs";

observe("div#map-container", {
  constructor: HTMLDivElement,
  initialize: () => ({
    add: () => observeContainerDiv(),
  }),
});
const observeContainerDiv = () => {
  const container = document.getElementById("map-container");
  if (container) {
    container.appendChild(floatingContainer);
    const $ = cheerio.load(`${container}`);
    console.log("result", $("strong.sc-uysce3-8 .gkvGTU").text());

    /** listen event */
    on("click", "#map-container", (event) => {
      console.log("event: ", event.target);
    });
  }
};

if (isMatched()) {
  browser.runtime.sendMessage({ status: "ON" });
} else {
  browser.runtime.sendMessage({ status: "OFF" });
  console.log("No match found for:");
}
