import React, { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "../RestrictedRoute/RestrictedRoute";
import { refreshUser } from "../../redux/auth/operations";
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { Loader } from "../Loader/Loader";

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
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      {isRefreshing ? (
        <b>
          <Loader />
        </b>
      ) : (
        <Suspense fallback={null}>
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
        </Suspense>
      )}
    </Layout>
  );
};

export default App;
