export const getCounterConfig = () => {
  const params = new URLSearchParams(window.location.search);

  const target = +(params.get("target") || 0);
  const interval = +(params.get("interval") || 3000);

  return {
    target,
    interval,
  };
};
