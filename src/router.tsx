import { Navigate, createBrowserRouter } from "react-router-dom";
import { VideosPage } from "./modules/videos/pages/Videos.page";

export const router = createBrowserRouter([
  {
    path: "videos",
    element: <VideosPage />,
  },
  {
    path: "*",
    element: <Navigate to="/videos" replace={true} />,
  },
]);
