export const getRelativeUrl = (url?: string | null) => {
  if (!url) {
    return '';
  }

  if (url.startsWith('http')) {
    return new URL(url).pathname;
  }

  return url;
};
