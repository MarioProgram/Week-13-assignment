import React from 'react';
import '../App.css'

export default class Username extends React.Component {
    render() {
        return(
        <div>
            <label for='username'>Username</label>
            <br/>
            <input type='' id='username' className=' form-change'></input>
        </div>
        )
    }
}