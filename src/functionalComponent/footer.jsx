import React from "react"

const Footer = () => {
    return (
        <footer style={abc}>
            <ol>
                <li>© Copyrights claimed. All rights reserved 2025</li>
                <li>
                    <div style={abd}>
                        <p>Follow Our Social Handles</p>
                        <a href="https://github.com/rithish03">Github</a>
                    </div>
                </li>
            </ol>
        </footer>
    );
}

const abc = {
    backgroundColor: 'black',
    color:'white',
}
const abd = {
    backgroundColor: 'black',
    color: 'red'
}
export default Footer;