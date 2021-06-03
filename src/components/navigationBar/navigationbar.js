import './navigationbar.css'
import logo from '../../assets/sneakerlawn_logo.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import { IconButton } from '@material-ui/core'

function navigationbar() {
    return (
        <div className="navBar">
            <a href="/">
                <img className="logo" src={logo} alt="sneakerlawn-logo" />
            </a>
            <div className="pages">
                <ul>
                    <li><a className="mainNav" href="/">Home</a></li>
                    <li><a className="mainNav" href="/">About</a></li>
                    <li><a className="mainNav" href="/">Browse</a></li>
                    <li><a className="mainNav" href="/">On Sale!</a></li>
                </ul>
            </div>
            <div className="utils">
                <div className="links">
                    <a className="link" href="/">Join Us</a>
                    <a className="link" href="/">Login</a>
                </div>
                <div className="search">
                    <form>
                        <input type="text" placeholder="   Search" />
                    </form>
                    <IconButton>
                        <ShoppingCartIcon />
                    </IconButton>
                    <IconButton>
                        <LiveHelpIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );


}

export default navigationbar