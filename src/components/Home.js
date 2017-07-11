import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron,Button} from 'react-bootstrap';

class Home extends Component {
    
    render() {
        return (
            <div className="App">
                <div className="container">
                 
                    <div className="card">
                        <Jumbotron>
                            <h1>Hello,{this.props.username}!</h1>
                            <p>your email <strong>{this.props.email}</strong></p>
                            <p><Button bsStyle="primary">Learn more</Button></p>
                        </Jumbotron>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        username: state.user.username,
        email: state.user.email
        
    }
}


export default connect(mapStateToProps)(Home);


