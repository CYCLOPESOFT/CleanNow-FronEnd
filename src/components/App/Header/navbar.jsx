import React from "react";
import { Button, Navbar, Tooltip } from "flowbite-react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useTheme } from "/src/config/theme/useTheme";
import { Link } from "react-router-dom";

const BrandLogo = () => (
  <>
    <img
      src="../src/assets/images/cleanNow_white.png"
      className="mr-3 h-8 sm:h-10"
      alt="Flowbite React Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
      CleanNow
    </span>
  </>
);

const NavbarHeader = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="shadow-lg fixed w-full bg-appColor dark:bg-slate-800">
      <Navbar
        fluid
        rounded
        className="mx-auto w-full md:w-4/5 lg:w-3/4 xl:w-2/3 bg-transparent dark:bg-transparent"
      >
        <Navbar.Brand href="">
          <BrandLogo />
        </Navbar.Brand>
        <div className="flex md:order-1">
          <Button className="bg-white text-appColor hover:!bg-hoverAppColor hover:!text-white hover:shadow-lg active:outline-none dark:bg-appColor dark:text-white dark:hover:!bg-slate-700 transition ease-in-out hover:-translate-y-1 hover:scale-110">
            Registrarse
          </Button>
          <div className=" hidden md:block m-auto">
            <Tooltip className="md:hidden" content="Cambiar Tema">
              <Button
                onClick={toggleTheme}
                className="bg-appColor ml-4 active:border-x-transparent hover:!bg-appColor dark:bg-slate-800 dark:hover:text-slate-200 dark:hover:!bg-slate-500"
              >
                {theme === "light" ? <HiOutlineSun /> : <HiOutlineMoon />}
              </Button>
            </Tooltip>
          </div>
          <Tooltip className="md:hidden" content="Menu">
            <Navbar.Toggle className="ml-1" />
          </Tooltip>
        </div>
        <Navbar.Collapse>
          <Link to="/">
            <Navbar.Link
              active
              className=" sm:active:!bg-hoverAppColor !text-slate-200  bg-hoverAppColor 2xl:dark:bg-slate-700 sm:dark:active:!bg-slate-800  2xl:dark:active:!bg-slate-900"
            >
              Home
            </Navbar.Link>
          </Link>
          <Link to="/about">
            <Navbar.Link className="md:inline-block text-white hover:bg-white hover:!text-slate-300">
              Acerca de
            </Navbar.Link>
          </Link>
          <Link to="/services">
            <Navbar.Link className="md:inline-block text-white hover:bg-white hover:!text-slate-300">
              Servicios
            </Navbar.Link>
          </Link>
          <Link to="/prices">
            <Navbar.Link className="md:inline-block text-white hover:bg-white hover:!text-slate-300">
              Precios
            </Navbar.Link>
          </Link>
          <Link to="/contact">
            <Navbar.Link className="md:inline-block text-white hover:bg-white hover:!text-slate-300">
              Contacto
            </Navbar.Link>
          </Link>

          <div className="sm:hidden m-auto ">
            <Tooltip className="" content="Cambiar Tema">
              <p className="mt-3 text-gray-300 text-center  text-sm ">
                Cambiar tema
              </p>
              <Button
                active
                onClick={toggleTheme}
                className="bg-hoverAppColor px-10 mt-4  hover:!bg-appColor dark:bg-slate-700  dark:hover:text-slate-200 dark:hover:!bg-slate-500 active:!bg-appColor focus:!bg-appColor transition ease-in-out hover:-translate-y-1 hover:scale-110"
              >
                {theme === "light" ? <HiOutlineSun /> : <HiOutlineMoon />}
              </Button>
            </Tooltip>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarHeader;
