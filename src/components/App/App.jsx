import React, { useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { PrivateRoute } from "../PrivareRoute/PrivareRoute";
import { RestrictedRoute } from "../RestrictedRoute/RestrictedRoute";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";

import { useDispatch, useSelector } from "react-redux";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegisterPage = lazy(() =>
  import("../../pages/RegisterPage/RegisterPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    if (!isRefreshing) {
      dispatch(refreshUser());
    }
  }, [dispatch, isRefreshing]);

  return (
    <>
      {isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Routes>
        </Layout>
      )}
    </>
  );
};

export default App;
