import React from 'react';
import {
    BrowserRouter as Router,
    HashRouter,
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
            <HashRouter basename="/">
                <Switch>
                    <Route exact path="/"><MainPage/></Route>
                    <Route path="/about"><AboutPage/></Route>
                </Switch>

            </HashRouter>
        </div>
    );
}

export default App;
