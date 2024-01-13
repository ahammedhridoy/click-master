import browser from "webextension-polyfill";
const ticketmaster = "https://www.ticketmaster.co.uk";

browser.runtime.onInstalled.addListener((details) => {
  console.log(details);
  browser.action.setBadgeText({
    text: "OFF",
  });
});
