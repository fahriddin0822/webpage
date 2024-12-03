import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/users/Header";

const UserLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;
