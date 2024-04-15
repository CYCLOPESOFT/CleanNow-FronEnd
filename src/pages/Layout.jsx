import NavbarHeader from "../components/App/Header/navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="app">
      <NavbarHeader />
      <Outlet />
    </div>
  );
};
export default Layout;
