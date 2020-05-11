import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./Compononts/About/About";
import ListFilm from "./Compononts/Popular/ListFilm";

export default () => (
    <Switch>
        <Route path="/" exact />
        <Route path="/popular" exact component={ListFilm} />
        <Route path="/about" exact component={About} />
    </Switch>
);