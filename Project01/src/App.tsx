import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/login",
      element: <Home />
    },
    {
      path: "/signup",
      element: <Home />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

