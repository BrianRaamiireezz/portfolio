import { Outlet, Route } from 'react-router';

import Header from './components/header';
import Navigation from './components/navigation';

import { Properties } from './components/navigation/types.ts';

import './App.css';


function Component()
{
    const pages: ( typeof Properties.type.items ) =
        [
            {
                to: '/',
                hue: '89',
                children: 'About',
            },
        ];

    return (
        <>
            <Header/>

            <Navigation items = { pages }/>

            <Outlet/>
        </>
    );
}


const Routes = [
    <Route
        index
        element = { <></> }
    />,
];

export default {
    Component,
    Routes,
};