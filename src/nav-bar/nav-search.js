import React from 'react';

export default class Search extends React.Component {
    render() {
        return (
            <React.Fragment className='search'>
                <form className='form-nav'>
                <input type='search' className='search-style'></input>
                <button className='btn-nav-style'>Search</button>
                </form>
            </React.Fragment>
        )
    }
}