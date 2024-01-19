import BeastDescPage from "pages/BeastDescPage";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BeastDescPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
