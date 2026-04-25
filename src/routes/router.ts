import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { appRoutes } from "../consts/appRoutes";
import { SearchPage } from "../pages/SearchPage/SearchPage";
import { CityPage } from "../pages/CityPage/CityPage";
import { SettingsPage } from "../pages/SettingsPage/SettingsPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";

export const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: SearchPage,
      },
      {
        path: appRoutes.CITY,
        Component: CityPage,
      },
      {
        path: appRoutes.SETTINGS,
        Component: SettingsPage,
      },
      {
        path: appRoutes.NOT_FOUND,
        Component: NotFoundPage,
      },
    ],
  },
]);
