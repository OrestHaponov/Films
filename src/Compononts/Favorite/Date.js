import React from "react";

class Date extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let date = this.props.date.split("-");
        if(date[1] == "01"){
            date[1] = " January ";
        }else if (date[1] == "02"){
            date[1] = " February ";
        }else if (date[1] == "03"){
            date[1] = " March ";
        }else if (date[1] == "04"){
            date[1] = " April ";
        }else if (date[1] == "05"){
            date[1] = " May ";
        }else if (date[1] == "06"){
            date[1] = " June ";
        }else if (date[1] == "07"){
            date[1] = " July ";
        }else if (date[1] == "08"){
            date[1] = " August ";
        }else if (date[1] == "09"){
            date[1] = " September ";
        }else if (date[1] == "10"){
            date[1] = " October ";
        }else if (date[1] == "11"){
            date[1] = " November ";
        }else if (date[1] == "12"){
            date[1] = " December ";
        }
        [date[0],date[2]] = [date[2],date[0]]
        return(
            <span>{date}</span>
        )
    }
}

export default Date;