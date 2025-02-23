import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { RootLayout } from "./components/ layout";
import { URL_PATH_SEGMENTS } from "./constants";
import { CardProfilePage } from "./pages/card-profile";
import { CardProfileCreatePage } from "./pages/card-profile/create";
import { CardProfileEditPage } from "./pages/card-profile/edit";
import { CardRequestPage } from "./pages/card-request";
import { CardRequestViewPage } from "./pages/card-request/view";
import { Error404Page } from "./pages/error-404";
import { HomePage } from "./pages/home";

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
