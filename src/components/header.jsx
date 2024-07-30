import "../App.css"
import Button from "./button"
function Header() {
    let menu = [
        {title:"Home", url:"#"},
        {title:"About", url:"#"},
        {title:"Services", url:"#"},
        {title:"Portfolio", url:"#"},
        {title:"Team", url:"#"},
        {title:"Pricing", url:"#"},
        {title:"Drop Down", url:"#"},
        {title:"Contact", url:"#"},
        ]
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
                                {menu.map((el,i)=>{
                                    return (<li key={i}><a href={el.url}>{el.title}</a></li>)
                                })}
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