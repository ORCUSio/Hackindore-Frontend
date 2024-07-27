import { useEffect, useState } from "react";
import useStore from "./store";
import { Form, useFormik } from "formik";
import { createTheme, MantineProvider } from "@mantine/core";
//import '@tremor/react/dist/index.css';

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
import { DndList } from "./components/DndList";
import { StatsRingCard } from "./components/mantine/StatsRingCard";
import { TaskCard } from "./components/mantine/TaskCard";
import Donut_chart from "./components/admin/Donut_chart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <TaskManagementAdmin />,
      },
      {
        path: "/manager",
        element: <TaskManagementManager />,
      },
    ],
  },
]);

function App() {
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
        <div className="flex flex-wrap justify-between">
          <AdminForms />
          <StatsSegments />
        </div>
        <TableReviews />
        <div className="w-full h-[80vh]">
          <DndList />
        </div>
      </div>
      <div className="w-[350px] flex flex-col gap-2 p-4 rounded-lg bg-gray-50">
        <Donut_chart/>

      </div>
    </div>
  );
}

function TaskManagementManager() {
  return (
    <div className="">
      <div className="gap-2 ">
        <StatsRingCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
}

export default router;

function AdminForms() {
  const store = useStore();
  const formik = useFormik({
    initialValues: {
      emp_id: "",
      emp_name: "",
      role: "",
      total_workedhours: 0,
      joining_date: "",
    },

    onSubmit: (values) => {
      localStorage.setItem("employee", JSON.stringify(values));
    },
  });

  return (
    <>
      <div className="mx-auto max-w-xl">
        <form action="" className="space-y-5" onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-6">
              <label
                htmlFor="emp_id"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Employee ID
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.emp_id}
                type="text"
                id="emp_id"
                name="emp_id"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                placeholder="Enter employee ID"
              />
            </div>
            <div className="col-span-6">
              <label
                htmlFor="emp_name"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Employee Name
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.emp_name}
                name="emp_name"
                type="text"
                id="emp_name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                placeholder="Enter employee name"
              />
            </div>
            <div className="col-span-6">
              <label
                htmlFor="role"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.role}
                name="role"
                type="text"
                id="role"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                placeholder="Enter role"
              />
            </div>
            <div className="col-span-6">
              <label
                htmlFor="total_workedhours"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Total Worked Hours
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.total_workedhours}
                name="total_workedhours"
                type="number"
                id="total_workedhours"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                placeholder="Enter total worked hours"
              />
            </div>
            <div className="col-span-6">
              <label
                htmlFor="joining_date"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Workshop Date
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.joining_date}
                name="joining_date"
                type="date"
                id="joining_date"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>
            <div className="col-span-12">
              <button
                type="submit"
                className="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium bg-blue-400 text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
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
