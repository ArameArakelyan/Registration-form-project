import "../App.css"
import Button from "./button"
function Header() {
    let menu = [
        <li className="selected">Home</li>,
        <li>About</li>,
        <li>Services</li>,
        <li>Portfolio</li>,
        <li>Team</li>,
        <li>Pricing</li>,
        <li>Drop Down</li>,
        <li>Contact</li>]
    return (
        <header className="header">
            <div className="header-cont">
                <div>
                    <div className="logo-area">
                        <p className="logo">OnePage</p>
                    </div>
                </div>
                <div className="menu-area">
                    <nav>
                        <div className="menu-cont">
                            <ul>
                                {menu}
                            </ul>
                        </div>
                    </nav>
                    <div className="btndiv">
                        <Button></Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header