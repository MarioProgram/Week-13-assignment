import React from 'react';


export default class Password extends React.Component {
    render() {
        return(
        <div>
            <label for='password'>Password</label>
            <br/>
            <input type='password' id='password' className=' form-change'></input>
        </div>
        )
    }
}