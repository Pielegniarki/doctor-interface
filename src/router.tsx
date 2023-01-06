import Welcome from "./views/Welcome";
import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
  {
    path: "/",
    element: <Welcome />
  },
  {
    path: "/healthcheck",
    element: <div>Router works!</div>
  }
]);