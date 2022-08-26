import React from 'react';
import Username from './username-insert';
import Password from './password-input';
import SubmitBtn from './button';


export default class LoginForm extends React.Component {
    render() {
        return (
            <div className='login-box'>
                <h3 className='log-in'>Log In</h3>
                <br/>
                <Username/>
                <br/>
                <Password/> 
                <br/>
                <SubmitBtn/>      
            </div>

        )
    }
}