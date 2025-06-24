import { RouterProvider } from "react-router-dom";
import { routes } from "./providers/router/index";
import { ContextProvider } from "./providers/context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={routes}></RouterProvider>
    </ContextProvider>
  );
}

export default App;
