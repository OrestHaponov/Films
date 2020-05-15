import React from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import {useHistory} from 'react-router';
import "./_slick.scss";
import "./_slickTheme.scss";


class SimilarCarousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    refresh=()=>{
        history.go();
    }
    
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return (
            <Slider {...settings}>
            {this.props.similarFilms.map((value, index)=>{
                let filmPoster = `https://image.tmdb.org/t/p/w500${value.poster_path}`;
                let moreAboutFilm = `https://api.themoviedb.org/3/movie/${value.id}?api_key=6f7c9fe2b5229b4b0b6dbe66fed3ef18&language=en-US`;
                return( 
                    <Link key={index} onClick={this.refresh} to={{
                        pathname: '/about',
                            state: {
                                moreAboutFilm,
                                filmPoster,
                                filmId: value.id,
                            }
                        }}>
                    <div className="about__similar__film" key={index}>
                      <img src={filmPoster} alt=""/>
                      <h3>{value.title}</h3>
                      <span>{value.vote_average}</span>
                    </div> 
                </Link>
                )
            })}
            </Slider>
        );
    }
}


export default SimilarCarousel;

