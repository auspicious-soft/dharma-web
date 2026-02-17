import { Outlet } from "react-router-dom";
import LoginBanner from "@/assets/login-banner.jpg";

const AuthLayout = () => {
  return (
    <div className="auth-layout flex flex-col gap-3 md:gap-5 justify-between">
      <div
        className="flex-grow background-cover items-center justify-center bg-center px-4 py-12 md:p-12"
        style={{ backgroundImage: `url(${LoginBanner})` }}
      >
        <div className="flex flex-col items-center  gap-[90px] lg:mt-20">
          <div className="p-7 rounded-[12px] md:rounded-[20px] bg-light-blue max-w-[535px] w-full ml-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
