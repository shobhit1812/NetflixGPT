import { createBrowserRouter } from "react-router-dom";
import Body from "./components/Body/Body";
import Browse from "./components/Pages/Browse";
import WatchPage from "./components/Pages/WatchPage";
import Error from "./components/Body/Error";

const App = () => <Body />;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/watchpage",
    element: <WatchPage />,
  },
]);

export default appRouter;
