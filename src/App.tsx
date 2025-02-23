import { lazy } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { RootLayout } from "./components/layout";
import { Loadable } from "./components/loadable";
import { URL_PATH_SEGMENTS } from "./constants";
import { Error404Page } from "./pages/error-404";

const CardProfilePage = Loadable(lazy(() => import("./pages/card-profile")));
const CardProfileCreatePage = Loadable(
  lazy(() => import("./pages/card-profile/create")),
);
const CardProfileEditPage = Loadable(
  lazy(() => import("./pages/card-profile/edit")),
);
const CardRequestPage = Loadable(lazy(() => import("./pages/card-request")));
const CardRequestViewPage = Loadable(
  lazy(() => import("./pages/card-request/view")),
);
const HomePage = Loadable(lazy(() => import("./pages/home")));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <RootLayout>
              <Outlet />
            </RootLayout>
          }
        >
          <Route path={URL_PATH_SEGMENTS.HOME} element={<HomePage />} />
          <Route
            path={URL_PATH_SEGMENTS.CARD_PROFILE}
            element={<CardProfilePage />}
          />
          <Route
            path={URL_PATH_SEGMENTS.CARD_PROFILE_CREATE}
            element={<CardProfileCreatePage />}
          />
          <Route
            path={URL_PATH_SEGMENTS.CARD_PROFILE_EDIT}
            element={<CardProfileEditPage />}
          />
          <Route
            path={URL_PATH_SEGMENTS.CARD_REQUEST}
            element={<CardRequestPage />}
          />
          <Route
            path={URL_PATH_SEGMENTS.CARD_REQUEST_VIEW}
            element={<CardRequestViewPage />}
          />
          <Route path="*" element={<Error404Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
