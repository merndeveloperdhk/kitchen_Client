import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../assets/banner/01.jpg';
import img2 from '../../assets/banner/02.jpg'
import img3 from '../../assets/banner/03.png'
import img4 from '../../assets/banner/04.jpg'
import img5 from '../../assets/banner/05.png'
import img6 from '../../assets/banner/06.png'

const Banner = () => {
    return (
        <Carousel className="text-center mb-44 md:mb-0 ">
                <div>
                    <img src={img1} />
                    <p className="legend">Super Delicious Menu</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img4} />
                    <p className="legend">This week only</p>
                </div>
                <div>
                    <img src={img5} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img6} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    );
};

export default Banner;