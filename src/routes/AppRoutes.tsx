import { appRoutes } from "@consts/appRoutes";
import { MainLayout } from "@layouts/MainLayout";
import { CityPage } from "@pages/CityPage";
import { NotFoundPage } from "@pages/NotFoundPage/NotFoundPage";
import { SearchPage } from "@pages/SearchPage";
import { SettingsPage } from "@pages/SettingsPage";
import { Route, Routes } from "react-router";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<SearchPage />} />
        <Route path={appRoutes.CITY} element={<CityPage />} />
        <Route path={appRoutes.SETTINGS} element={<SettingsPage />} />
        <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
