import React from "react";
import AboutTrailer from "./AboutTrailer/AboutTrailer";

class AboutInfo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="about__info">
                <div className="about__info__header">
                    <h1>
                        {this.props.title}
                        <span>({this.props.releaseDate.substr(0, 4)})</span>
                    </h1>
                </div>
                <div className="about__info__overview">
                    {this.props.overview != '' ?
                        <h3>Overview:<p>{this.props.overview}</p></h3>
                    :null}
                </div>
                <div className="about__info__budget">
                    {this.props.budget != '' ?
                        <h3>Budget:<span>{this.props.budget} $</span></h3>
                    :null}
                </div>
                <div className="about__info__rate">
                    {this.props.rate != '' ?
                        <h3>Rate:<span>{this.props.rate}</span></h3>
                    :null}
                </div>
                <div className="about__info__runtime">
                    {this.props.runtime != '' ?
                        <h3>Runtime:<span>{this.props.runtime} min</span></h3>
                    :null}
                </div>
                <div className="about__info__genres">
                    <h3>Genres:
                        <ul>
                            {this.props.genres.map((value,index)=>{
                                return(
                                    <li key={index}>{value.name}</li>
                                ) 
                            })}
                        </ul>
                    </h3>
                </div>
                <AboutTrailer 
                    filmId={this.props.filmId}
                />
            </div>
        )
    }
}

export default AboutInfo;