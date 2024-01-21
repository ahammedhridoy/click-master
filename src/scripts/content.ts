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
  const polygons = document.querySelector(".polygons");
  console.log("poly: ", polygons);

  on("click", "path[data-section-name]", (event: any) => {
    console.log("in", event);
  });

  if (container) {
    container.appendChild(floatingContainer);
  }
};

if (isMatched()) {
  browser.runtime.sendMessage({ status: "ON" });
} else {
  browser.runtime.sendMessage({ status: "OFF" });
  console.log("No match found for:");
}
