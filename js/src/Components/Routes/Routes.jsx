import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import firebase from '../Firebase/Firebase';
import NotFound from '../NotFound/NotFound';
import Notebook from '../Notebook/Notebook';
import Landing from '../Landing/Landing';

class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({currentUser: user});
        });
    }

    renderComponent(component, router) {
        const { currentUser } = this.state;
        if (component === 'Landing') {
            return <Landing router={router} currentUser={currentUser}/>
        } else if (component === 'Notebook') {
            return <Notebook router={router} currentUser={currentUser}/>
        }
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={(router) => this.renderComponent('Landing', router)} />
                    <Route path="/notebook" component={(router) => this.renderComponent('Notebook', router)} />
                    <Route path="/">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Routes;