export const apiUrl = () => {
  // Check if the window location starts with localhost
  if (
    typeof window !== "undefined" &&
    window.location.hostname === "localhost"
  ) {
    return "http://localhost:3001/api"; // Local backend URL
  }
  return "https://wkda-backend-main-28a636c08246.herokuapp.com/api"; // Heroku backend URL
};
