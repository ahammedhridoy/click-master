import { storage } from "../utils";

export const getInitDatabase = async <T = any>(): Promise<
  Awaited<T | null>
> => {
  return await storage.get([
    "nextAutoClick",
    "realistic",
    "sameSeat",
    "maxTicket",
  ]);
};
