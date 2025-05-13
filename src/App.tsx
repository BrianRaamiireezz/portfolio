import { Outlet, Route } from 'react-router';

import Header from './components/header';
import Navigation from './components/navigation';

import About from './pages/about';

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
        element = { <About/> }
    />,
];

export default {
    Component,
    Routes,
};