import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import AnnouncementBar from "./AnnouncementBar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "@/assets/logo.png";
import Search from "./Search";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="flex flex-col w-full relative">
      <AnnouncementBar />
      <div className="flex  gap-4 lg:gap-6 py-4 md:py-5 px-3 md:px-4 justify-between bg-white">
        <div className="flex items-center gap-2 lg:gap-6">
          <NavLink to="/" className="flex gap-[10px] items-center">
            <img src={Logo} alt="Logo" className="max-w-[58px]" />
            <div className="text-[#0a4ba8] text-sm font-bold leading-5 max-w-24 md:max-w-max">
              vCareProject Management
            </div>
          </NavLink>
          <p className="text-paragraph text-sm font-normal hidden xl:block">
            Certifications That Move Careers Forward. Learn. Lead. Succeed.
          </p>
        </div>
        <div className="flex gap-2 lg:gap-6 items-center">
          <Search />
          <div className="flex gap-3 lg:gap-6 items-center">
            <Link to="#" className="text-paragraph text-sm hidden lg:block">
              Partner with us
            </Link>
            <Link
              to="/contact-us"
              className="text-paragraph text-sm hidden lg:block"
            >
              Talk To Us
            </Link>
            <Button
              className="!py-2 !px-5 hidden lg:block"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <button
              className="block lg:hidden p-2 z-50 relative text-Black_light"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="py-5 px-4 hidden lg:block">
        <Navigation />
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full max-w-[90%] w-[600px] sm:w-[350px] bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-3 bg-[#CEE2FF]">
          <div className="flex gap-2 items-center">
            <img src={Logo} alt="Logo" className="max-w-[40px]" />
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-Black_light hover:bg-white/10 rounded-md"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex flex-col h-[calc(100%-73px)] overflow-y-auto">
          {/* Navigation */}
          <div className="flex-1">
            <Navigation isMobile onItemClick={() => setIsMenuOpen(false)} />
          </div>

          {/* Bottom Actions */}
          <div className="bg-[#CEE2FF] py-4 px-3">
            <Link
              to="#"
              className="block text-center text-paragraph text-sm py-2 px-4 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Partner with us
            </Link>
            <Link
              to="/contact-us"
              className="block text-center text-paragraph text-sm py-2 px-4 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Talk To Us
            </Link>
            <Button
              className="!py-3 !px-5 w-full mt-3"
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/login");
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
