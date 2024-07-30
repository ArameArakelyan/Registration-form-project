import "../App.css"

function Box(items) {
    
    return(
        <div className="box">
        <ion-icon name={items.icon}></ion-icon>
        <h3>{items.title}</h3>
        <p>{items.text}</p>
    </div>
    )
}

export default Box