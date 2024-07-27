import "./App.css"

function Input() {
    return (
        <div className="inputform">
            <h2 className="h2">Registration Info</h2>
            <form>
                <div className="inputs"><input className="inp" type="text" placeholder="Name"/></div>
                <div className="inputs"><input className="inp" type="text" placeholder="Birthdate"/></div>
                <div className="inputs"><input className="inp" type="text" placeholder="Gender"/></div>
                <div className="inputs"><input className="inp" type="text" placeholder="Email"/></div>
                <div className="inputs"><input className="inp" type="text" placeholder="Phone"/></div>
                <div className="btndiv"><button className="btn">Submit</button></div>
            </form>
        </div>
    )
}

export default Input