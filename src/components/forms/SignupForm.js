import React, {Component} from 'react';
import {Form, Button } from 'semantic-ui-react';

class SignupForm extends Component {
    state = {
        data : {
            username : '',
            email : '',
            password : '',
            cnfpassword : ''
        }
    }

    onChange = e => this.setState({
        data : {...this.state.data, [e.target.name]: e.target.value}
        });

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state.data);
    }


    render(){
        const { data} = this.state;
        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field >
                    <label htmlFor='username' > username </label>
                    <input type='text' name='username' id='username'
                        placeholder='username'
                        value={data.username}
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Form.Field >
                    <label htmlFor='email' > Email </label>
                    <input type='email' name='email' id='email'
                        placeholder='example@example.com'
                        value={data.email}
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Form.Field >
                    <label htmlFor='password' > password </label>
                    <input type='password' name='password' id='password'
                        placeholder='Password'
                        value={data.password}
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Form.Field >
                    <label htmlFor='cnfpassword' > confirm password </label>
                    <input type='password' name='cnfpassword' id='cnfpassword'
                        placeholder='Password'
                        value={data.cnfpassword}
                        onChange={this.onChange}
                    />
                </Form.Field>
            <Button primary> Login </Button>
            </Form>
        );
    }
}

export default SignupForm;
