import "./css files/NavBar.css"
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <ol style={abc}>
            <li><Link to ="/home">Home</Link></li>
            <li><Link to = "/About">About</Link></li>
            <li><Link to = "/experience">Experience</Link></li>
            <li><Link to = "/ref">Reference</Link></li>
        </ol>
    )
}

const abc = {
    backgroundColor: 'black'
}
export default NavBar;