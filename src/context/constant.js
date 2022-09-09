export const apiUrl =
  process.env.NODE_ENV !== "production"
    //change your local host port number here
    ? "http://localhost:3010/api"
    //don't change this
    : "https://blueocean-web-service.onrender.com";
