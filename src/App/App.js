import React from "react";
import "./app.scss";
import "../fonts/fonts.scss";
import Header from "../Compononts/Header/Header";
import Routes from "../Routes";

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Routes />
            </div>
        );
    }
}

export default App;
