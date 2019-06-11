import React from "react";
import { Route } from "react-router-dom";
import Main from "../Pages/Main";
import Login from "../Pages/Login";
import Properties from "../Pages/Properties";
import AddProperties from "../Pages/AddProperties";
import SingleProperty from "../Pages/SingleProperty";
import EditProperties from "../Pages/EditProperties";
import PropertiesRent from "../Pages/PropertiesRent";
import PropertiesSale from "../Pages/PropertiesSale";

const ARoute = () => {
  return (
    <div>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/properties" component={Properties} />
      <Route exact path="/addproperties" component={AddProperties} />
      <Route exact path="/property/:id" component={SingleProperty} />
      <Route exact path="/edit/:id" component={EditProperties} />
      <Route exact path="/rentproperties" component={PropertiesRent} />
      <Route exact path="/saleproperties" component={PropertiesSale} />
    </div>
  );
};

export default ARoute;
