import React from "react";
import {connect} from "react-redux";
import Slider from "react-slick";
import {getReviews} from "../../../Store/Action/ListFilm";
import "./_slick.scss";
import "./_slickTheme.scss";

class AboutReviews extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getReviews(this.props.filmId)
    }

    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return(
            <Slider {...settings}>
                {this.props.filmReviews.map((value,index)=>{
                    return(
                        <div className="comment" key={index}>
                            <h3>{value.author}</h3>
                            <p>{value.content}</p>
                        </div>
                    )
                })}
            </Slider>
        )
    }
}


function mapStateToProps(state){
    return{
        filmReviews: state.ListFilm.filmReviews,
    }
}

function mapDispatchToProps(dispatch){
    return{
        getReviews: (filmId)=>dispatch(getReviews(filmId)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AboutReviews);