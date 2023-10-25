import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpened, setIsMenuOpended] = useState(false);
  const [isSearchOpenedForMobile, setIsSearchOpenedForMobile] = useState(false);
  const [isSearchOpenedForPc, setIsSearchOpenedForPc] = useState(false);
  const [query, setQuery] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerType, setHeaderType] = useState("top");
  const navigator = useNavigate();

  const locator = useLocation();
  const handleSearchOpenForMobile = () => {
    setIsSearchOpenedForMobile(true);
    setIsMenuOpended(false);
  };
  const handleSearchCloseForMobile = () => {
    setIsSearchOpenedForMobile(false);
  };
  const handleSearchOpenForPc = () => {
    setIsSearchOpenedForPc(true);
  };
  const handleSearchCloseForPc = () => {
    setIsSearchOpenedForPc(false);
  };
  const handleQuery = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      search(query);
    }
  };
  const handleSearch = () => {
    if (query.length > 0) {
      search(query);
    }
  };
  const search = (value) => {
    navigator(`/search/${value}`);
  };
  const triggerScrollY = () => {
    if (window.scrollY > 100) {
      if (
        window.scrollY > lastScrollY &&
        !isMenuOpened &&
        !isSearchOpenedForMobile
      ) {
        setHeaderType("hidden");
      } else {
        setHeaderType("solid");
      }
    } else {
      setHeaderType("top");
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locator]);
  useEffect(() => {
    window.addEventListener("scroll", triggerScrollY);
    return () => {
      window.removeEventListener("scroll", triggerScrollY);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed z-20 flex w-full justify-center transition duration-500 ease-in-out ${
        headerType === "top"
          ? "backdrop-blur-sm backdrop-brightness-90"
          : headerType === "solid"
          ? "bg-slate-950"
          : headerType === "hidden"
          ? "hidden"
          : ""
      } `}
    >
      <div className="flex w-full max-w-5xl justify-between px-4">
        <div
          className="cursor-pointer py-2 text-3xl font-bold capitalize text-zinc-100"
          onClick={() => {
            if (locator.pathname !== "/") {
              navigator("/");
            }
          }}
        >
          removie
        </div>
        {/* mobile menu */}
        <div className="flex md:hidden">
          <div className="flex items-center">
            {isSearchOpenedForMobile ? (
              <IoCloseOutline
                color="white"
                size={35}
                className="mt-1 cursor-pointer"
                onClick={handleSearchCloseForMobile}
              />
            ) : (
              <BsSearch
                color="white"
                size={22}
                className="mt-1 cursor-pointer"
                onClick={handleSearchOpenForMobile}
              />
            )}
          </div>
        </div>
        {/* pc menu */}
        <div className="hidden items-center md:flex">
          <div>
            <div className="flex items-center">
              {isSearchOpenedForPc ? (
                <IoCloseOutline
                  color="white"
                  size={35}
                  className="mt-1 cursor-pointer hover:stroke-pink-500"
                  onClick={handleSearchCloseForPc}
                />
              ) : (
                <BsSearch
                  color="white"
                  size={22}
                  className="cursor-pointer hover:fill-pink-500"
                  onClick={handleSearchOpenForPc}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {isSearchOpenedForMobile ? (
        <div className="absolute top-16 z-10 w-full ">
          <div className="w-ful mx-4 max-w-2xl rounded-full border-2 bg-slate-900 py-2 md:hidden">
            <div className="flex w-full items-center justify-center pl-2 pr-4">
              <input
                type="text"
                value={query}
                onChange={(value) => {
                  setQuery(value.target.value);
                }}
                onKeyUp={handleQuery}
                placeholder="Search for movies and tv shows"
                className="h-10 w-full max-w-2xl rounded-full px-5 focus:outline-none "
              />
              <BsSearch
                onClick={handleSearch}
                color="white"
                size={30}
                className="ml-3 cursor-pointer pb-1"
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {isSearchOpenedForPc ? (
        <div className="absolute top-16 z-10 mx-4 w-full max-w-2xl rounded-full border-2 bg-slate-900 py-2">
          <div className="flex w-full items-center justify-center pl-2 pr-4">
            <input
              type="text"
              value={query}
              onChange={(value) => {
                setQuery(value.target.value);
              }}
              onKeyUp={handleQuery}
              placeholder="Search for movies and tv shows"
              className="h-10 w-full max-w-2xl rounded-full px-5 focus:outline-none "
            />
            <BsSearch
              onClick={handleSearch}
              color="white"
              size={30}
              className="ml-3 cursor-pointer pb-1"
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
