import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonial/Testimonial";
import Recomends from "../Remonds/Recomends";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Restaurent | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Recomends></Recomends>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
