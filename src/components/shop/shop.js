import "./shop.css"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import ShoeCard from '../shoeCards'



// images
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
import aj11Concord from '../../assets/aj11-concord-1.png'
import aj1NewBeg from '../../assets/aj1-newBeginnings-1.png'
import aj1UniBlue from '../../assets/aj1-univBlue-1.png'


function shop() {
    const shoes = [
        {
            mainImage: yeezy1,
            images: [yeezy2, yeezy3, yeezy4],
            name: "Yeezy 350 V2 \"Yecheil\"",
            size: "US 10.5",
            price: "PHP 16,000",
            sex: "UNISEX"
        },
        {
            mainImage: aj1Purple1,
            images: [aj1Purple2, aj1Purple3, aj1Purple4],
            name: "Air Jordan 1 \"Court Purple\"",
            size: "US 10",
            price: "PHP 14,000",
            sex: "UNISEX"
        },
        {
            mainImage: aj1Crimson1,
            images: [aj1Crimson2, aj1Crimson3, aj1Crimson4],
            name: "Air Jordan 1 \"Crimson Tint\"",
            size: "US 10",
            price: "PHP 13,000",
            sex: "UNISEX"
        },
        {
            mainImage: aj11Concord,
            images: [],
            name: "Air Jordan 11 \"Concord\"",
            size: "US 10",
            price: "PHP 15,000",
            sex: "MEN"
        },
        {
            mainImage: aj1NewBeg,
            images: [],
            name: "Air Jordan 1 \"New Beginnings\"",
            size: "US 10",
            price: "PHP 6,500",
            sex: "MEN"
        },
        {
            mainImage: aj1UniBlue,
            images: [],
            name: "Air Jordan 1 \"University Blue\"",
            size: "US 10, 5Y/6.5W",
            price: "PHP 6,500",
            sex: "WOMEN/KIDS"
        },
        {
            mainImage: yeezy1,
            images: [yeezy2, yeezy3, yeezy4],
            name: "Yeezy 350 V2 \"Yecheil\"",
            size: "US 10.5",
            price: "PHP 16,000",
            sex: "UNISEX"
        },
        {
            mainImage: aj1Purple1,
            images: [aj1Purple2, aj1Purple3, aj1Purple4],
            name: "Air Jordan 1 \"Court Purple\"",
            size: "US 10",
            price: "PHP 14,000",
            sex: "UNISEX"
        },
        {
            mainImage: aj1Crimson1,
            images: [aj1Crimson2, aj1Crimson3, aj1Crimson4],
            name: "Air Jordan 1 \"Crimson Tint\"",
            size: "US 10",
            price: "PHP 13,000",
            sex: "UNISEX"
        },
        {
            mainImage: aj11Concord,
            images: [],
            name: "Air Jordan 11 \"Concord\"",
            size: "US 10",
            price: "PHP 15,000",
            sex: "MEN"
        },
        {
            mainImage: aj1NewBeg,
            images: [],
            name: "Air Jordan 1 \"New Beginnings\"",
            size: "US 10",
            price: "PHP 6,500",
            sex: "MEN"
        },
        {
            mainImage: aj1UniBlue,
            images: [],
            name: "Air Jordan 1 \"University Blue\"",
            size: "US 10, 5Y/6.5W",
            price: "PHP 6,500",
            sex: "WOMEN/KIDS"
        }
    ]

    return (
        <div className="main-container">
            <div className="header-holder">
                <h1 className="shop-text">SHOP</h1>
                <DropdownButton id="dropdown-basic-button" title="Sort by" menuAlign="left">
                    <Dropdown.Item href="#/action-1">Latest</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">On Sale</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Hot Items</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className="shoes">
                {shoes.map(shoe => (
                    <ShoeCard shoe={shoe} />
                ))}
            </div>
        </div>
    );
}

export default shop