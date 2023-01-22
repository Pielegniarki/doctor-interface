import {useEffect} from "react";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import OutLayout from "./components/OutLayout";
import { useRecoilValue } from "recoil";
import { tokenState } from "./stores/DoctorStore";
import { Login } from "./views/Login";
import { Home } from "./views/Home";
import { Visits } from "./views/Visits";
import { HomePage } from "./components/HomePage";
import { Chat } from "./views/Chat";

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
    element: <HomePage />,
    children: [{
      path: "home",
      element: <Home />
    }, {
      path: "visits",
      element: <Visits />
    },
    {
      path: "call/:chatId",
      element: <Chat />
    }, 
    {
      path: "chat",
      element: <Home />
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
  }, [token, navigate])

  return <div>Application loading...</div>
}