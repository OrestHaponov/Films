import React from "react";
import {connect} from "react-redux";
import {getListFilm} from "../../Store/Action/ListFilm";
import FilmCards from "./FilmCards";
import Pagination from "react-js-pagination";

class ListFilm extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }

    componentDidMount(){
        this.props.getListFilm(this.props.filmApi,this.props.activePage)
    }

    handlePageChange=(pageNumber)=>{
        let filmsApiTemplate = `https://api.themoviedb.org/3/movie/popular?api_key=6f7c9fe2b5229b4b0b6dbe66fed3ef18&language=en-US&page=${pageNumber}`;
        this.props.getListFilm(filmsApiTemplate,pageNumber);
        window.scrollTo(pageXOffset, 0);
      }

    render() {
        return (
            <div>
               <FilmCards 
                    listFilm={this.props.listFilm}
               />
               <Pagination
                    activePage={this.props.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    hideNavigation={true}
                    hideFirstLastPages={true}
                    activeLinkClass={"activelink"}
                    onChange={this.handlePageChange}
              />
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        listFilm: state.ListFilm.listFilm,
        activePage: state.ListFilm.activePage,
        filmApi: state.ListFilm.filmApi,
    }
}

function mapDispatchToProps(dispatch){
    return{
        getListFilm: (filmApi,pageNumber)=>dispatch(getListFilm(filmApi,pageNumber)),
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (ListFilm);
