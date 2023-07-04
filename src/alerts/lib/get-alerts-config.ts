export const getAlertsConfig = () => {
  const params = new URLSearchParams(window.location.search);

  const interval = +(params.get("interval") || 3000);
  const animationTime = +(params.get("animation-time") || 5000);

  return {
    interval,
    animationTime,
  };
};
