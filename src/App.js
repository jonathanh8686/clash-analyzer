import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom"

import MainPage from "./pages/Index";
import AboutPage from './pages/About';


function App() {
  return (
    <div style={{textAlign:"center"}}>
        <Router>
            <Switch>
                <Route exact path="/"><MainPage/></Route>
                <Route path="/about"><AboutPage/></Route>
            </Switch>

        </Router>
    </div>
  );
}

export default App;
