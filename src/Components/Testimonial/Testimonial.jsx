import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import './Testimonial.css'
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'


// Import Swiper styles
import "swiper/css";
import { useState } from "react";
import { useEffect } from "react";
import { Rating } from "@smastrom/react-rating";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="my-12">
      <SectionTitle
        subHeading={"What's Our Client say"}
        heading={"Testimonials"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center gap-y-4 px-16 -mt-10">
                <div className="flex text-3xl">
                <BiSolidQuoteSingleLeft></BiSolidQuoteSingleLeft>
                <BiSolidQuoteSingleLeft></BiSolidQuoteSingleLeft>
                
                </div>
              <Rating  style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p>{review.details}</p>
              <h1 className="text-2xl text-orange-500">{review.name}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
