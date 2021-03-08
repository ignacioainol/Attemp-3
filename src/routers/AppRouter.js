import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { HomeScreen } from '../components/home/HomeScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { Header } from '../components/ui/Header';

export const AppRouter = ({ history }) => {
    console.log(history);
    return (
        <Router>
            <Header />
            <div>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/login" component={LoginScreen} />
                </Switch>
            </div>
        </Router>
    )
}
