import React from "react";
import { Outlet, Link, Navigate } from "react-router-dom";
import { Logo } from "../components/icons/logo";
import { Setting } from "../components/icons/setting";
import { User } from "../components/icons/user";
import { Payments } from "../components/icons/payments";
import { Cart } from "../components/icons/cart";
import { MainButton } from "../components/buttons/mainButton";
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
