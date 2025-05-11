import { Outlet, Route } from 'react-router';

import Header from './components/header';

import './App.css';


function Component()
{
    return (
        <>
            <Header/>
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