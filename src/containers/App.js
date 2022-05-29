import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { ConnectedRouter as Router } from "connected-react-router";
import { history } from "../redux";
import { ToastContainer } from "react-toastify";



// import Login from '../routes/Login';

import CustomScrollbars from "../components/CustomScrollbars";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isCollapsed: false };
    }
    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }
    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <div className="main-container">
                        <span className="content-container">
                            hoang dep trai
                        </span>

                    </div>
                </Router>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
