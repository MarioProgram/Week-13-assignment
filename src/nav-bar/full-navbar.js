import React from 'react';
import Home from './nav-home';
import Search from './nav-search';
import Settings from './nav-settings';
import Contacts from './nav-contacts';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className='nav-bar'>
                <Home/>
                <Contacts/>
                <Search/>
                <Settings/>
            </div>
        )
    }
}