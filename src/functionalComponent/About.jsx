import { useState } from "react";
import "./css files/About.css";

const About = () => {
    const [college, updateCollege] = useState("KEC")
    const updatingClg = () => {
        updateCollege("KONGU ENGINEERING COLLEGE")
    }
    return (
        <div>
            <h1>Welcome to {college}</h1>
            <button onDoubleClick={updatingClg}>Update College Name</button>
        </div>
    )
}
export default About;