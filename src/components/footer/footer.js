import './footer.css'
import fbIcon from '../../assets/fb.png'
import igIcon from '../../assets/ig.png'

function footer() {
    return (
        <div className="footerBar">
            <div className="mainContent">
                <div className="links-list">
                    <a href="/">ABOUT SNEAKERLAWN</a>
                    <a href="/">JOIN US</a>
                    <a href="/">CONTACT</a>
                    <a href="/">SEND US A FEEDBACK</a>
                    <a href="/">PRIVACY POLICY</a>
                    <a href="/">TERMS & CONDITIONS</a>
                </div>
                <div className="quote-socials">
                    <p>Keep going, keep growing 🌱</p>
                    <div className="socials">
                        <a href="https://www.facebook.com/sneakerlawn">
                            <img src={fbIcon} alt="fb-icon" width="32px" height="32px" />
                        </a>
                        <a href="https://www.instagram.com/sneakerlawn/">
                            <img src={igIcon} alt="ig-icon" width="29px" height="29px" />
                        </a>
                    </div>
                </div>
                <div className="back-to-top">
                    <a href="/">Back to top</a>
                </div>
            </div >
            <div className="copyrights">
                <p>Copyright 2020-2021 All rights reserved</p>
            </div>
        </div >
    );
}

export default footer