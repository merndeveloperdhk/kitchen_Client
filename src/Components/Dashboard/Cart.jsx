import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import useCart from "../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const totalPrice = cart.reduce((total, item) => total + item.price,0);
  const totalPriceP = parseFloat(totalPrice).toFixed(2);
  const axiosSecure = useAxiosSecure();
  

  const handleDelete = id => {
console.log(id);
Swal.fire({
    title: "Are you sure?",
    text: `You want to delete  ?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
   
      axiosSecure.delete(`/carts/${id}`)
      .then(res => {
        if(res.data.deletedCount > 0){
            refetch();
               Swal.fire({
        title: "Deleted!",
        text: `item has been deleted`,
        icon: "success"
      }); 
    }
})

    }
  });
  }
  
  return (
    <div>
      <SectionTitle
        subHeading={".... My Cart ...."}
        heading={"WANNA ADD MORE?"}
      ></SectionTitle>
      <div className="flex justify-between w-2/3 bg-slate-100 mx-auto p-2">
        <h1 className="text-xl">Total Orders : {cart.length}</h1>
        <h1 className="text-xl">Total Price : {totalPriceP}</h1>
        <button className="btn btn-sm bg-green-400">Pay</button>
      </div>
      <div className="w-2/3 mx-auto ">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-bold text-black">
              <th>
               #
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                cart.map((item, idx) => <tr key={idx}>
                    <th>
                      {idx + 1}
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.image ? item.image : `<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />`} />
                          </div>
                        </div>
                        
                      </div>
                    </td>
                    <td>
                      {item.name}
                      
                    </td>
                    <td>{item.price}</td>
                    <th>
                      <button onClick={()=> handleDelete(item._id)} className="btn btn-ghost btn-xs text-red-600"><FaTrashAlt></FaTrashAlt></button>
                    </th>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default Cart;
