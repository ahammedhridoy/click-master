import browser from "webextension-polyfill";
import { storage } from "../utils";

/** set init storage data */
browser.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === "install") {
    await storage.set("maxTicket", 6);
    await storage.set("nextAutoClick", true);
    await storage.set("realistic", false);
    await storage.set("sameSeat", false);
  }
});

browser.runtime.onMessage.addListener((message) => {
  if (message.status === "ON") {
    browser.action.setBadgeText({
      text: "ON",
    });
  } else {
    browser.action.setBadgeText({
      text: "OFF",
    });
  }
});
