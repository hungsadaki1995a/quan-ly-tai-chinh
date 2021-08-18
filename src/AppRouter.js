import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

export default function AppRouter() {
        return (
                <Router>
                        <Switch>
                                <Route path="/home">
                                        <Home />
                                </Route>
                                <Route path="/login">
                                        <Login />
                                </Route>
                                <Route path="/">
                                        <Redirect to="/home" />
                                </Route>
                        </Switch>
                </Router>
        )
}