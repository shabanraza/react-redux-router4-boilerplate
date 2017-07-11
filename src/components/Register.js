/**
 * Created by mobiloitte on 11/07/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Register extends Component {

    render() {
        return (
            <div className="App">
                <div className="container">
                    <h3>Register</h3>

                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        name: state.user.name
    }
}


export default connect(mapStateToProps)(Register);