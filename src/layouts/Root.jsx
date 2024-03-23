import { Outlet } from "react-router-dom";
import { NavbarSimple } from "../components/shared/Navbar";

const root = () => {
  return (
    <div>
      <NavbarSimple></NavbarSimple>
      <Outlet></Outlet>
    </div>
  );
};

export default root;