import React from 'react'
import { Switch, Route } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";


const App = () => (
    <div>
        <Header/>
        <main>
            <Switch>
                <Route path="/" component={Main} />
            </Switch>
        </main>
        <Footer/>
    </div>
)

export default App