import React from "react";
class StateComponent extends React.Component{
    constructor(){
        super()
        this.state= {
            name: "Kongu",
            course: "MERN"
        }
    }
    changeState = () => {
        console.log("KONGU ENGINEERING COLLEGE")
    }

    render(){
        return(
            <div>
                <h1>Hello {this.state.name}, this is {this.state.course} class</h1>
                <h2>I am changing the state of {this.state.name} as {this.changeState}</h2>
                <button onMouseOver={this.changeState}>Click me</button>
            </div>
        )
    }
}
export default StateComponent;
