import Browser from "webextension-polyfill";

export const sendMessage = async <T = any>(message: any) => {
  const response = await Browser.runtime.sendMessage(message);
  return response as T;
};
