import {useEffect} from "react";
import { createBrowserRouter, redirect, useNavigate } from "react-router-dom";
import OutLayout from "./components/OutLayout";
import InLayout from "./components/InLayout";
import Welcome from "./views/Welcome";
import Login from "./views/Login";
import { useRecoilValue } from "recoil";
import { tokenState } from "./stores/DoctorStore";
import { isOk } from "./models/Result";
import Visits from "./views/Visits";

export default createBrowserRouter([
  {
    path: "/",
    element: <RouteSelector />
  },
  {
    path: "/out",
    element: <OutLayout />,
    children: [{
      path: "login",
      element: <Login />
    }]
  },
  {
    path: "/in",
    element: <InLayout />,
    children: [{
      path: "home",
      element: <Welcome />
    }, {
      path: "visits",
      element: <Visits />
    }, {
      path: "chat",
      element: <Welcome />
    }]
  },
  {
    path: "/healthcheck",
    element: <div>Router works!</div>
  }
]);

function RouteSelector() {
  const token = useRecoilValue(tokenState);
  const navigate = useNavigate();


  useEffect(() => {
    if(token) {
      navigate("/in/home");
    }
    else {
      navigate("/out/login");
    }
  }, [token])

  return <div>Application loading...</div>
}