import browser from "webextension-polyfill";

browser.runtime.onMessage.addListener((message) => {
  console.log(message);
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
