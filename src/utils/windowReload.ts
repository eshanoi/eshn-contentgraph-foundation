export const windowReload = () => {
  if (typeof window !== 'undefined') {
    window.location.reload();
  }
};
