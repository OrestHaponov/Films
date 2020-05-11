import React from "react";
import {connect} from "react-redux";
import {getListFilm} from "../../Store/Action/ListFilm";
import FilmCards from "./FilmCards";

class ListFilm extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getListFilm()
    }

    render() {
        return (
            <div>
               <FilmCards 
                    listFilm={this.props.listFilm}
               />
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        listFilm: state.ListFilm.listFilm,
    }
}

function mapDispatchToProps(dispatch){
    return{
        getListFilm: ()=>dispatch(getListFilm()),
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (ListFilm);
