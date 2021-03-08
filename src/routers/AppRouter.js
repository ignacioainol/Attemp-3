import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { Header } from '../components/ui/Header';

export const AppRouter = () => {
    return (
        <Router>
            <Header />
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                </Switch>
            </div>
        </Router>
    )
}
