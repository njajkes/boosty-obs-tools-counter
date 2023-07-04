type RouteApi = `/${string}`;

export const getApiRoute = (route: RouteApi): string =>
  (import.meta.env.VITE_BACKEND_URL || "") + route;
