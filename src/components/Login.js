/**
 * Created by mobiloitte on 11/07/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form,FormControl, FormGroup,Col ,Checkbox, Button} from 'react-bootstrap';
import  * as action  from '../actions/user';

class Login extends Component {

    constructor(props){
        super(props)
        this.state ={
            email:'',
            password:'',
            username:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangePasword = this.handleChangePasword.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.submit = this.submit.bind(this)
    }


    handleChange(evt){
        this.setState({email:evt.target.value});
        evt.preventDefault()

    }

    handleChangePasword(evt){
        this.setState({password:evt.target.value})
        evt.preventDefault()

    }

    handleChangeUserName(evt){
        this.setState({username:evt.target.value})
        evt.preventDefault()
    }



    submit(evt){
        this.props.save(this.state)
        this.props.history.push('/home');
        evt.preventDefault()

    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="loginContainer">
                    <h3>Login</h3>
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalusername">
                                <Col  sm={2}>
                                    Username
                                </Col>
                                <Col sm={10}>
                                    <FormControl
                                        value={this.state.username}
                                        onChange={this.handleChangeUserName}
                                        type="text"
                                        placeholder="username"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col  sm={2}>
                                    Email
                                </Col>
                                <Col sm={10}>
                                    <FormControl
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        placeholder="Email"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalPassword">
                                <Col  sm={2}>
                                    Password
                                </Col>
                                <Col sm={10}>
                                    <FormControl
                                        value={this.state.password}
                                        onChange={this.handleChangePasword}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Checkbox>Remember me</Checkbox>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button type="submit" onClick={this.submit}>
                                        Sign in
                                    </Button>
                                </Col>
                            </FormGroup>
                    </Form>
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
const mapDispatchToProps = dispatch => {
    return {
        save:(data)=> {
            dispatch(action.saveUserData(data))
        }
    }

}


export default connect(mapStateToProps,mapDispatchToProps)(Login);


