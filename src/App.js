import React from "react";
import { Switch } from "react-router";
import {BrowserRouter, Route} from 'react-router-dom'
import routes from './components/pages/index'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {
          routes.map((data,idx) => (
            <Route exact path={data.path} component={data.component} key={idx}></Route>
          ))
        }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
