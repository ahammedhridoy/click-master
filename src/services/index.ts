import { urlPattern } from "../utils";

export const getUrl = (): string => window.location.href;

export const isMatched = (): boolean => {
  if (urlPattern.test(getUrl())) return true;
  return false;
};
