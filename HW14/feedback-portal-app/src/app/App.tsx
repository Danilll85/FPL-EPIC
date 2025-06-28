import { RouterProvider } from "react-router-dom";
import { routes } from "./providers/router";
import { Provider } from "react-redux";
import { store } from "./providers/store/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;
