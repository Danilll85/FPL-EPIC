import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./containers/HomePage";
import { HistoryPage } from "./containers/HistoryPage";
import { AboutPage } from "./containers/AboutPage";
import { NotFoundPage } from "./containers/NotFoundPage";
import { CurrencyInfoPage } from "./containers/CurrencyInfoPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/history",
        element: <HistoryPage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "/currency-info",
        element: <CurrencyInfoPage />
    },
    {
        path: "/*",
        element: <NotFoundPage />,
    },
]);
