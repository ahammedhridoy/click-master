import browser from "webextension-polyfill";

browser.runtime.onMessage.addListener((mess, sender, sendRes) => {
  console.log("mess", mess);
  console.log("sender", sender);
  sendRes();
});
