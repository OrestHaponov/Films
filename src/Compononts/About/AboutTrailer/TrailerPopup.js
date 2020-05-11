import React from "react";
import Popup from "reactjs-popup";
import Play from "./play.png";

class TrailerPopup extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Popup
                trigger={<h3 className="about__info__showTrailer"><img src={Play} alt=""/> Show Trailer </h3>}
                modal
                closeOnDocumentClick
            >
            <iframe width="500" height="355" frameborder="0" allowfullscreen src={this.props.trailer}></iframe>
        </Popup>
        )
    }
}

export default TrailerPopup;