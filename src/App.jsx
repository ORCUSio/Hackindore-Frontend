import { useEffect, useState } from "react";
import useStore from "./store";
import { Form, useFormik } from "formik";
import { createTheme, MantineProvider } from "@mantine/core";
import isAuth, { logout } from "./auths/authUtils";
import "@mantine/core/styles.css";
import HeaderMegaMenu from "./components/layout/Header";
import { DEFAULT_THEME } from "@mantine/core";
import ActionsGrid from "./components/layout/ActionsGrid";
import BadgeCard from "./components/layout/BadgeCard";
import TableReviews from "./components/layout/TableReviews";
import NavbarSimpleColored from "./components/layout/NavbarSimpleColored";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import StatsCard from "./components/mantine/StatsCard";
import StatsSegments from "./components/mantine/StatsSegments";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <TaskManagementAdmin />,
        // loader: teamLoader,
      },
    ],
  },
]);

function App() {
  // if (isAuth()) {
  //   const user = isAuth();
  //   return <>{user.email}</>;
  // }

  return (
    <MantineProvider theme={DEFAULT_THEME} withNormalizeCSS withGlobalStyles>
      <HeaderMegaMenu />
      <div className="flex h-[100vh] overflow-hidden">
        <NavbarSimpleColored />
        <div className="overflow-y-auto w-full">
          <Outlet />
        </div>
      </div>
    </MantineProvider>
  );
}

function TaskManagementAdmin() {
  return (
    <div className="flex flex-wrap w-full p-2">
      <div className="p-2 max-w-[1200px] flex flex-col gap-20 overflow-x-hidden mx-auto">
        <AdminForms />
        <TableReviews />
        <iframe
          src="https://v2-embednotion.com/f44f4c90528846d79d31dba4b6298deb"
          style={{
            width: "100%",
            height: "500px",
            border: "2px solid #ccc",
            borderRadius: "10px",
            padding: "none", // Note: 'padding' should be a valid CSS value like '0px' or '0'
          }}
        ></iframe>
      </div>
      <div className="w-[350px] flex flex-col gap-2 p-4 rounded-lg bg-gray-50">
        <StatsCard />
        <StatsSegments />
      </div>
    </div>
  );
}

export default router;

function AdminForms() {
  const store = useStore();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      remember: false,
    },

    onSubmit: (values) => {
      localStorage.setItem("user", JSON.stringify(values));
    },
  });
  return (
    <>
      <div className="mx-auto max-w-xl">
        <form action="" className="space-y-5" onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-6">
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.email}
                type="email"
                id="email"
                name="email"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                placeholder="you@email.com"
              />
            </div>
            <div className="col-span-6">
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.password}
                name="password"
                type="password"
                id="password"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                placeholder="you@email.com"
              />
            </div>
            <div className="col-span-12">
              <label
                htmlFor="address"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.address}
                name="address"
                type="text"
                id="address"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                placeholder="1864 Main Street"
              />
            </div>
            <div className="col-span-6">
              <label
                htmlFor="city"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.city}
                name="city"
                type="text"
                id="city"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                placeholder=""
              />
            </div>
            <div className="col-span-4">
              <label
                htmlFor="state"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <select
                onChange={formik.handleChange}
                value={formik.values.state}
                name="state"
                id="state"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
              >
                <option value="">Choose</option>
                <option value="">State01</option>
                <option value="">State02</option>
                <option value="">State03</option>
              </select>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="zip"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Zip
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.zip}
                name="zip"
                type="text"
                id="zip"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                placeholder=""
              />
            </div>
            <div className="col-span-12 flex items-center space-x-2">
              <input
                onChange={formik.handleChange}
                value={formik.values.remember}
                name="remember"
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
              />
              <label
                htmlFor="remember"
                className="text-sm font-medium text-gray-700"
              >
                Remember me
              </label>
            </div>
            <div className="col-span-12">
              <button
                type="submit"
                className="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
