import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navabar from "../Shared/Navbar/Navabar";

const MainLayOut = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      {/* {noHeaderFooter || <Navabar></Navabar>} */}
       <Navabar></Navabar>
      <div className="min-h-[64vh]">
        <Outlet></Outlet>
      </div>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayOut;
