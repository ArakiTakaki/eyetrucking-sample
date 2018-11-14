export const API_ROOT =
  process.env.NODE_ENV === "development"
    ? `//${location.hostname}:3000/api`
    : "/api";

export const SOCKET_ROOT =
  process.env.NODE_ENV === "development" ? `//${location.hostname}:3000` : "/";
