import Browser from "webextension-polyfill";

export const sendMessage = async <T = any>(message: any) => {
  const response = await Browser.runtime.sendMessage(message);
  return response as T;
};

export const storage = {
  get: async <T = any>(keys: string[]): Promise<T | null> => {
    let localStorage = await Browser.storage.local.get(keys);
    const items = localStorage as T;
    return items ?? null;
  },
  set: async <T = any>(key: string, value: T): Promise<void> => {
    await Browser.storage.local.set({ [key]: value });
    return;
  },
};
