import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/home",
      element: <Home />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

