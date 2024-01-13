import browser from "webextension-polyfill";
import { on, off, fire } from "delegated-events";
import * as cheerio from "cheerio";

let isClickListening = false;

// // browser.runtime.
// data-seat-name
on(
  "click",
  ".seatstyles__Seat-sc-1efhiok-0",
  (event: MouseEvent) => {
    const $ = cheerio.load(`${event.target}`);
    console.log("element: ", $(".seatstyles__Seat-sc-1efhiok-0").html());
    // $("")
  },
  {
    capture: true,
  }
);
