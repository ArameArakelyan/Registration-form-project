import "../App.css"
import Button from "./button"
import Box from "./box"

function Main() {
    let list = [
        {
            icon: "finger-print",
            title: "Lorem ipsum",
            text: "dolor sit amet, consectetur adipisicing elit. Quidem voluptates reiciendis"
        },
        {
            icon: "git-branch",
            title: "sit amet consectetur",
            text: "adipisicing elit. Eaque ullam mollitia excepturi eum itaque minima enim."
        },
        {
            icon: "globe",
            title: "obcaecati molestiae ",
            text: "quaerat delectus officiis commodi ipsam illum laboriosam quo hic!"
        },
        {
            icon: "help",
            title: "laborum asperiores",
            text: "quam cumque alias obcaecati, tenetur vero corporis voluptatum "
        }

    ]
    return (
        <main className="main">
            <div className="cont">
                <div className="first-cont">
                    <h1>One Page Bootstrap</h1>
                    <h1>Website Template</h1>
                    <p>We are team of talanted designers</p>
                    <Button></Button>
                </div>
                <div className="box-cont">
                    {
                        list.map((el) => {
                            return (<Box 
                                icon={el.icon}
                                title={el.title}
                                text={el.text} />)
                        })
                    }
                </div>
            </div>
        </main>
    )
}

export default Main