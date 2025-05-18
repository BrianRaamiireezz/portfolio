import { Outlet, Route } from 'react-router';

import Header from './components/header';
import Navigation from './components/navigation';

import About from './pages/about';
import Projects from './pages/projects';

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
            {
                to: Projects.Segment,
                children: 'Projects',
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

    <Route
        path = { Projects.Segment }
        element = { <Projects.Component/> }
    >
        { ...Projects.Routes }
    </Route>,
];

export default {
    Component,
    Routes,
};