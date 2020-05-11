import React from "react";
import Slider from "react-slick";
import "./_slick.scss";
import "./_slickTheme.scss";


class SimilarCarousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
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
                return( 
                    <div className="about__similar__film" key={index}>
                      <img src={filmPoster} alt=""/>
                      <h3>{value.title}</h3>
                      <span>{value.vote_average}</span>
                    </div> 
                )
            })}
            </Slider>
        );
    }
}


export default SimilarCarousel;

