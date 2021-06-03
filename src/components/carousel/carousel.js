import './carousel.css'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

//images
import yeezy1 from '../../assets/yeezy-1.png'
import yeezy2 from '../../assets/yeezy-2.png'
import yeezy3 from '../../assets/yeezy-3.png'
import yeezy4 from '../../assets/yeezy-4.png'
import aj1Purple1 from '../../assets/aj1-purple-1.png'
import aj1Purple2 from '../../assets/aj1-purple-2.png'
import aj1Purple3 from '../../assets/aj1-purple-3.png'
import aj1Purple4 from '../../assets/aj1-purple-4.png'
import aj1Crimson1 from '../../assets/aj1-crimson-1.png'
import aj1Crimson2 from '../../assets/aj1-crimson-2.png'
import aj1Crimson3 from '../../assets/aj1-crimson-3.png'
import aj1Crimson4 from '../../assets/aj1-crimson-4.png'


function Slideshow() {
    const shoes = [
        {
            mainImage: yeezy1,
            images: [yeezy2, yeezy3, yeezy4],
            name: "Yeezy 350 V2 \"Yecheil\"",
            size: "US 10.5",
            price: "PHP 16,000"
        },
        {
            mainImage: aj1Purple1,
            images: [aj1Purple2, aj1Purple3, aj1Purple4],
            name: "Air Jordan 1 \"Court Purple\"",
            size: "US 10",
            price: "PHP 14,000"
        },
        {
            mainImage: aj1Crimson1,
            images: [aj1Crimson2, aj1Crimson3, aj1Crimson4],
            name: "Air Jordan 1 \"Crimson Tint\"",
            size: "US 10",
            price: "PHP 13,000"
        },
        {
            mainImage: yeezy4,
            images: [yeezy2, yeezy3, yeezy4],
            name: "Yeezy 350 V2 \"Yecheil\"",
            size: "US 10.5",
            price: "PHP 16,000"
        }
    ]

    return (
        <div className="carousel-holder">
            <div className="headerHolder">
                <h1 className="header">NEW ARRIVALS</h1>
            </div>
            <div>
                <Carousel interval={3000} keyboard={false}>
                    <Carousel.Item >
                        <div className="itemHolder">
                            <img src={shoes[0].mainImage} alt={shoes[0].name} />
                            <div className="itemHolder-caption">
                                <p className="shoe-name">{shoes[0].name}</p>
                                <br></br>
                                <p className="shoe-info">AVAILABLE SIZES: {shoes[0].size}</p>
                                <p className="shoe-info">PRICE: {shoes[0].price}</p>
                                <Button bsPrefix="order-btn" size="lg"><p className="order-txt">ORDER NOW</p></Button>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="itemHolder">
                            <img src={shoes[1].mainImage} alt={shoes[1].name} />
                            <div className="itemHolder-caption">
                                <p className="shoe-name">{shoes[1].name}</p>
                                <br></br>
                                <p className="shoe-info">AVAILABLE SIZES: {shoes[1].size}</p>
                                <p className="shoe-info">PRICE: {shoes[1].price}</p>
                                <Button bsPrefix="order-btn" size="lg"><p className="order-txt">ORDER NOW</p></Button>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="itemHolder">
                            <img src={shoes[2].mainImage} alt={shoes[2].name} />
                            <div className="itemHolder-caption">
                                <p className="shoe-name">{shoes[2].name}</p>
                                <br></br>
                                <p className="shoe-info">AVAILABLE SIZES: {shoes[2].size}</p>
                                <p className="shoe-info">PRICE: {shoes[2].price}</p>
                                <Button bsPrefix="order-btn" size="lg"><p className="order-txt">ORDER NOW</p></Button>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div >
    );
}

export default Slideshow;