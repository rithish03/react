import "../functionalComponent/PropsComponent.css"
function PropsComponent(props) {
    // const styleAttrs = {
    //     backgroundColor:"grey",
    //     color:"lightblue"
    // }
    return (
        <div /*style={styleAttrs}*/>
            Hello {props.name}<br></br> This is {props.course} class
        </div>
    )
}
export default PropsComponent;