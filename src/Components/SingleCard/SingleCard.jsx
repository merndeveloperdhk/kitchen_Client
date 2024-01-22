const SingleCard = ({ card }) => {
  const {image,name, recipe, price } = card;
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
            <button className="px-3 py-2 border-b-2 border-yellow-600 text-yellow-600 hover:bg-black hover:rounded duration-500">Order Now</button>
          </div>
        </div>
      </div>
    
  );
};

export default SingleCard;
