import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";


const SingleCard = ({ card }) => {
  const{user} = useAuth();
  const {image,name, recipe, price, _id } = card;
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [ ,refetch]= useCart();

  const handleAddToCart = () => {
    if(user && user.email){
      console.log(card, user.email);
      // todo: Sent cart items to the database
      const cartItem = {
        menuId : _id,
        email: user.email,
        name, image, price
      }
      axiosSecure.post('/carts', cartItem)
      .then(res => {
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: ` ${name} has been added`,
            showConfirmButton: false,
            timer: 1000
          });
          refetch();
        }
      })      
    }else{
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add this cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please Login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state:{from:location}})
        }
      });
    }

  }
  return (
    
      <div className="card bg-slate-200 shadow-xl px-2 md:px-0 mb-4">
        
          <img className="rounded-t-md"
            src={image}
            alt=""
          />
          <p className="bg-slate-800 text-white absolute right-2 px-3 py-1 top-2 rounded-tr-md">${price}</p>
        
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">{name}</h2>
          <p className="h-10 overflow-hidden ">{recipe}</p>
          <div className="card-actions justify-center">
            <button onClick={ handleAddToCart} className="px-3 py-2 border-b-2 border-yellow-600 text-yellow-600 hover:bg-black hover:rounded duration-500">Add to Cart</button>
          </div>
        </div>
      </div>
    
  );
};

export default SingleCard;
