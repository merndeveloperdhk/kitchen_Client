import { IoCartOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBook, FaCalendar, FaHome } from "react-icons/fa";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
        {/* left menu */}
      <div className="md:col-span-2 bg-violet-400 p-3 min-h-screen ">
        <h1 className="text-xl font-bold mb-4">Misam's Kitchen</h1>
        <ul className="space-y-3 ">
          <li>
            <NavLink to="/dashboard/userHome" className="flex items-center gap-1">
            <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation" className="flex items-center gap-1">
                <FaCalendar></FaCalendar> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/dCart" className="flex items-center gap-1">
              <IoCartOutline className="text-xl"></IoCartOutline> My Cart <span className="text-red-600">({cart.length})</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review" className="flex items-center gap-1">
                <FaAd></FaAd> Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myBooking" className="flex items-center gap-1">
              <FaBook></FaBook> My Booking
            </NavLink>
          </li>
        <div className="divider"></div>
        <li>
            <NavLink to="/" className="flex items-center gap-1">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
        <li>
            <NavLink to="/order/salad" className="flex items-center gap-1">
            <IoMdMenu /> Menu
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Right */}
      <div className="md:col-span-10  p-3">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
