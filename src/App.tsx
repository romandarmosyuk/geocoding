import { RouterProvider } from "react-router/dom";
import { withProviders } from "./providers/WithProviders";
import { router } from "./routes/router";

// eslint-disable-next-line react-refresh/only-export-components
const AppComponent = () => <RouterProvider router={router} />;

export const App = withProviders(AppComponent);
