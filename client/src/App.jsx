import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import Schedule from "./pages/Schedule";
import Customer from "./pages/Customer";
import Carrier from "./pages/Carrier";
import Air from "./pages/Air";
import Container from "./pages/Container";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
      {
        path: "/customer",
        element: <Customer />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/container",
        element: <Container />,
      },
      {
        path: "/carrier",
        element: <Carrier />,
      },
      {
        path: "/air",
        element: <Air />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
