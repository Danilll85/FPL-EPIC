import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { ContextProvider } from "./context/ContextProvider";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ContextProvider>
        <RouterProvider router={routes} />
      </ContextProvider>
    </Provider>
  );
}

export default App;
