import Browser from "webextension-polyfill";

export const sendMessage = async <T = any>(message: any) => {
  const response = await Browser.runtime.sendMessage(message);
  return response as T;
};

export const storage = {
  get: async <T = StorageResponse>(keys: StorageKeys[]): Promise<T> => {
    let localStorage = await Browser.storage.local.get(keys);
    const items = localStorage as T;
    return items;
  },
  set: async <T = any>(key: StorageKeys, value: T): Promise<void> => {
    await Browser.storage.local.set({ [key]: value });
    return;
  },
};

export const filterItem = <T = any>(arr: T[], query: string) => {
  const finds: T | undefined = arr && arr.find((item: T) => item === query);
  console.log("find result: ", finds);
};
