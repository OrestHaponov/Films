import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./Compononts/About/About";
import Favorite from "./Compononts/Favorite/Favorite";
import ChooseListFilm from "./Compononts/ChooseListFilm/ChooseListFilm";

export default () => (
    <Switch>
        <Route path="/" exact />
        <Route path="/about" component={About} />
        <Route path="/favorite" component={Favorite} />
        <Route path="/:name" children={<ChooseListFilm />} />
    </Switch>
);