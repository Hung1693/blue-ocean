export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3010/api"
    : "https://blueocean-web-service.onrender.com";
