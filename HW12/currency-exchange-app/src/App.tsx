import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { ContextProvider } from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={routes} />
    </ContextProvider>
  );
}

export default App;
