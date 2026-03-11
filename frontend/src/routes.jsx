import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Split from "./pages/Split";
import Sign from "./pages/Sign"

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/split", element: <Split/> },
  { path: "/sign", element: <Sign /> },
  
]);

export default router;

