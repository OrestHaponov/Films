import React from "react"
import "./Header.scss";
import {Link} from "react-router-dom";
import Logo from "./logo.png";

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){ 
        return(
            <div className="header">
                <div className="wrapper">
                    <ul>
                        <li>
                            <Link to="/"><img src={Logo} alt=""/></Link>   
                        </li>
                        <li>
                            <Link to="/popular">Popular</Link>
                        </li>
                        <li>
                            <Link to="/favorite">Favorite</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;