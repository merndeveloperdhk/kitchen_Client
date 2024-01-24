import { IoCartOutline } from "react-icons/io5";
import { MdContactless } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBook, FaBookOpen, FaCalendar, FaHome, FaListAlt, FaUserAlt, FaUtensils } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
    const [cart] = useCart();
    const isAdmin = true;
    const axiosSecure = useAxiosSecure();
    const {data: users = [], } = useQuery({
        queryKey:['users',  ],
        queryFn: async () => {
            const res = await axiosSecure.get('/users' )
            return res.data;
        }
    });
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
        {/* left menu */}
      <div className="md:col-span-2 bg-violet-400 p-3 min-h-screen ">
        <h1 className="text-xl font-bold mb-4">Misam's Kitchen</h1>
        <ul className="space-y-3 ">
         {
          isAdmin ? <> 
           <li>
            <NavLink to="/dashboard/adminHome" className="flex items-center gap-2">
            <FaHome /> Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addItems" className="flex items-center gap-2">
                <FaUtensils></FaUtensils> Add Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageItems" className="flex items-center gap-2">
              <FaListAlt></FaListAlt> Manage Items 
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageBooking" className="flex items-center gap-2">
                <FaBookOpen></FaBookOpen> Manage Booking
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myBooking" className="flex items-center gap-2">
              <FaUserAlt></FaUserAlt> My Booking
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/allUsers" className="flex items-center gap-2">
              <FaBook></FaBook> All Users ({users.length})
            </NavLink>
          </li>
          </>
          : 
          <>
             <li>
            <NavLink to="/dashboard/userHome" className="flex items-center gap-2">
            <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation" className="flex items-center gap-2">
                <FaCalendar></FaCalendar> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/dCart" className="flex items-center gap-2">
              <IoCartOutline className="text-xl"></IoCartOutline> My Cart <span className="text-red-600">({cart.length})</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review" className="flex items-center gap-2">
                <FaAd></FaAd> Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myBooking" className="flex items-center gap-2">
              <FaBook></FaBook> My Booking
            </NavLink>
          </li>
          </>
         }
          {/* Shared menu */}
        <div className="divider"></div>
        <li>
            <NavLink to="/" className="flex items-center gap-2">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
        <li>
            <NavLink to="/order/salad" className="flex items-center gap-2">
            <IoMdMenu /> Menu
            </NavLink>
          </li>
        <li>
            <NavLink to="/dashboard/contact" className="flex items-center gap-2">
            <MdContactless /> Contact
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
