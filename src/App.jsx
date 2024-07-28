import { createBrowserRouter } from "react-router-dom";
import Body from "./components/Body/Body";
import Browse from "./components/Pages/Browse";

const App = () => <Body />;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

export default appRouter;
