import BeastDescPage from "pages/BeastDescPage";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BeastInfoPage from "pages/BeastInfoPage";
import CollabPage from "pages/CollabPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BeastDescPage />,
    },
    {
      path: "/charts",
      element: <BeastInfoPage />,
    },
    {
      path: "/collab",
      element: <CollabPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
