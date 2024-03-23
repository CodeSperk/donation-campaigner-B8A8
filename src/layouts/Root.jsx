import { Outlet } from "react-router-dom";

const root = () => {
  return (
    <div>
      root
      <Outlet></Outlet>
    </div>
  );
};

export default root;