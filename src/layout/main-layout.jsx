import React from "react";
import { Outlet, Link, Navigate } from "react-router-dom";
import { Logo } from "../components/icons/Logo";
import { Setting } from "../components/icons/Setting";
import { User } from "../components/icons/User";
import { Payments } from "../components/icons/Payments";
import { Cart } from "../components/icons/Cart";
import { MainButton } from "../components/buttons/MainButton";
import { loadState } from "../config/storage";

export const MainLayout = () => {
  const user = loadState("user");
  if (!user) {
    return <Navigate replace to={"/login"} />;
  }
  return (
    <div className="flex bg-bgColor">
      <div className="h-screen bg-primary w-[97px] p-8">
        <Logo />
        <div className="flex">
          <div className="mt-9 ml-[-12px] flex flex-col">
            <MainButton>
              <Link to="/settings">
                <Setting />
              </Link>
            </MainButton>
            <MainButton>
              <Link to="/users">
                <User />
              </Link>
            </MainButton>
            <MainButton>
              <Link to="/cart">
                <Cart />
              </Link>
            </MainButton>
            <MainButton>
              <Link to="/payments">
                <Payments />
              </Link>
            </MainButton>
          </div>
          <div className="p-7 ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
