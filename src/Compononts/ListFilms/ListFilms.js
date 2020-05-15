import React from "react";
import {connect} from "react-redux";
import {getListFilms} from "../../Store/Action/ListFilm";
import FilmCards from "../FilmCards/FilmCards";
import Pagination from "react-js-pagination";

class ListFilms extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }


    componentDidMount(){
        let filmApi =`https://api.themoviedb.org/3/movie/${this.props.filmType}?api_key=6f7c9fe2b5229b4b0b6dbe66fed3ef18&language=en-US&page=${this.props.activePage}`;
        this.props.getListFilms(filmApi,this.props.activePage);
    }

    componentDidUpdate(prevProps){
        if (this.props.filmType !== prevProps.filmType) {
            let filmApi =`https://api.themoviedb.org/3/movie/${this.props.filmType}?api_key=6f7c9fe2b5229b4b0b6dbe66fed3ef18&language=en-US&page=${this.props.activePage}`;
            this.props.getListFilms(filmApi);
        }
    }

    handlePageChange=(pageNumber)=>{
        let filmApi = `https://api.themoviedb.org/3/movie/${this.props.filmType}?api_key=6f7c9fe2b5229b4b0b6dbe66fed3ef18&language=en-US&page=${pageNumber}`;
        this.props.getListFilms(filmApi,pageNumber);
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
        activePage: state.ListFilm.activePage,
        listFilm: state.ListFilm.listFilm,
    }
}

function mapDispatchToProps(dispatch){
    return{
        getListFilms: (filmApi,activePage)=>dispatch(getListFilms(filmApi,activePage)),
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (ListFilms);
