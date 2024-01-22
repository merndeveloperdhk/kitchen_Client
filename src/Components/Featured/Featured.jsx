import SectionTitle from "../SectionTitle/SectionTitle";
import featuredImage from '../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured_item bg-fixed py-8">
            <SectionTitle
            subHeading={"Check it Out"}
            heading={"From Our menu"}
            ></SectionTitle>
            <div className="md:flex gap-3 md:gap-8 justify-center items-center py-4 px-4 md:py-12 md:px-28">
               <div>
               <img className="rounded" src={featuredImage} alt="" />
               </div>
                <div className="space-y-4 mt-4 md:mt-0 text-white">
                    <p>Aug 20, 2025</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque culpa nostrum aperiam tempore nulla odio iste dicta suscipit deserunt atque optio in, dolorem ipsa quae dolores, quam nobis illo delectus perspiciatis nam? Numquam id neque amet quo repellat, impedit recusandae!</p>
                    <button className="btn btn-outline text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;