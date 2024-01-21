export const getUrl = (): string => window.location.href;
export const urlPattern =
  /^https:\/\/www\.ticketmaster\.[a-zA-Z]+\.[a-zA-Z]+\/[a-zA-Z0-9-]+\/event\/[a-zA-Z0-9]+$/;

export const isMatched = (): boolean => {
  if (urlPattern.test(getUrl())) return true;
  return false;
};
