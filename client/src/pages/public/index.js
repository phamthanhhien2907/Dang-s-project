import React, { useCallback, useEffect } from "react";
import { Link, Outlet, Route, useLocation } from "react-router-dom";
import { MdDiscount, MdOutlineApartment } from "react-icons/md";
import { Footer, Header } from "../../components/organisms";
import { FaBagShopping, FaHeadphonesSimple, FaLaptop } from "react-icons/fa6";
import { GiAutoRepair } from "react-icons/gi";
import HeaderMenu from "../../components/organisms/HeaderMenu";
import path from "../../utils/path";
const Public = () => {
  const location = useLocation();
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full">
        <img
          src="https://lh3.googleusercontent.com/MoVDPUBuE1iDkb54CO0K-g-o7cHQqvhlgLnFvCUBHW-_tfc95068JMViVXbk9OPT8kDCYbdZCq9rbDl-qRZRY9lmgvAUzZbE=w1920-rw"
          alt=""
        />
      </div>
      <div className="w-full h-[55px] bg-blue-700 flex gap-4 items-center justify-center">
        <div className="text-white cursor-pointer text-sm flex items-center justify-center gap-2">
          <MdDiscount />
          <span>Khuyến mãi</span>
        </div>
        <div className="text-white cursor-pointer text-sm flex items-center justify-center gap-2">
          <MdOutlineApartment />
          <span>Hệ thống Showroom</span>
        </div>
        <div className="text-white cursor-pointer text-sm flex items-center justify-center gap-2">
          <FaBagShopping />
          <span>Tư vấn doanh nghiệp</span>
        </div>
        <div className="text-white cursor-pointer text-sm flex items-center justify-center gap-2">
          <FaHeadphonesSimple />
          <span>Liện hệ</span>
        </div>
        <div className="text-white cursor-pointer text-sm flex items-center justify-center gap-2">
          <FaLaptop />
          <span>Tin công nghệ</span>
        </div>
        <div className="text-white cursor-pointer text-sm flex items-center justify-center gap-2">
          <GiAutoRepair />
          <span>Xây dựng cấu hình</span>
        </div>
      </div>
      {location.pathname === `/${path.CHECKOUT}${path.PAYMENT}` ? (
        ""
      ) : (
        <div className="flex w-full bg-opacity-90 bg-white">
          <Header />
          <HeaderMenu />
        </div>
      )}

      <div className="w-full flex items-center flex-col h-full">
        <Outlet />
        <div className="">
          {location.pathname.slice(1) === path.HOME ||
          location.pathname === `/${path.CHECKOUT}${path.PAYMENT}` ? (
            ""
          ) : (
            <Footer />
          )}
        </div>
      </div>
    </div>
  );
};

export default Public;
