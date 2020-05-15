import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./Compononts/About/About";
import ListFilm from "./Compononts/Popular/ListFilm";
import Favorite from "./Compononts/Favorite/Favorite";

export default () => (
    <Switch>
        <Route path="/" exact />
        <Route path="/popular" exact component={ListFilm} />
        <Route path="/about" component={About} />
        <Route path="/favorite" component={Favorite} />
    </Switch>
);