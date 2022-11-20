import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserProvider from "./components/UserProvider";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import CreateNotePage from "./pages/CreateNotePage";
import NotesPage from "./pages/NotesPage";
import DynamicNotePage, { noteLoader } from "./pages/DynamicNotePage";
import EditNotePage from "./pages/EditNotePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        index: true,
        element: <AboutPage />,
      },
      {
        path: "/notes/new",
        element: <CreateNotePage />,
      },
      {
        path: "/notes/:id/edit",
        element: <EditNotePage />,
        loader: noteLoader,
      },
      {
        path: "/notes/:id",
        element: <DynamicNotePage />,
        loader: noteLoader,
      },
      {
        path: "/notes",
        element: <NotesPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
