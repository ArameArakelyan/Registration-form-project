import "../App.css"
import Button from "./button"

function Section1(props) {
    let btntext= "Read More" 
    return(
        <section className="section-about">
            <div className="inside-section1-div1">
                <h1>ABOUT US</h1>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <div className="inside-section1-div2">
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <ul className="about-list">
                        <li>
                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                        <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </span>
                        </li>
                        <li>
                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                        <span>Duis aute irure dolor in reprehenderit in voluptate velit.
                        </span>
                        </li>
                        <li>
                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                        <span>Ullamco laboris nisi ut aliquip ex ea commodo
                        </span>
                        </li>
                    </ul>
                </div>
                <div className="btndiv-insidesection">
                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Button text={btntext}></Button>
                </div>
            </div>
        </section>
    )
}

export default Section1