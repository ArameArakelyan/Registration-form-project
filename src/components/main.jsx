import "../App.css"
import Button from "./button"
import Box from "./box"

function Main() {
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
                    <Box 
                    icon= "finger-print"
                    title= "Lorem ipsum" 
                    text="dolor sit amet, consectetur adipisicing elit. Quidem voluptates reiciendis"/>
                    <Box
                    icon="git-branch"
                    title= "sit amet consectetur"
                    text ="adipisicing elit. Eaque ullam mollitia excepturi eum itaque minima enim."
                    />
                    <Box
                    icon= "globe"
                    title= "obcaecati molestiae distinctio"
                    text ="voluptatem, quasi, quaerat delectus officiis commodi ipsam illum laboriosam quo hic!"
                    />
                    <Box
                    icon = "help"
                    title = "Magnam, laborum asperiores"
                    text = "quam cumque alias obcaecati, magni illo, tenetur vero corporis voluptatum "
                    />
                </div>
            </div>
        </main>
    )
}

export default Main