import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Reservation from "./page/Reservation.jsx";
import Menu from "./page/Menu.jsx";
import Contact from "./page/Contact.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  // { path: "/home", element: <App /> },
  { path: "/menu", element: <Menu /> },
  { path: "/reservation", element: <Reservation /> },
  { path: "/contact", element: <Contact /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
);
