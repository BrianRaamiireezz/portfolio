import './App.css';
import { Outlet, Route } from 'react-router';


function Component()
{
    return (
        <>
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