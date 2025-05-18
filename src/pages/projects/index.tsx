import { Outlet, Route } from 'react-router';

import ProjectsList from './list';
import ProjectDetails from './details';


function Component()
{
    return (
        <>
            <Outlet/>
        </>
    );
}


const Segment = 'projects';
const DetailsSegment = 'details/';

const Routes = [
    <Route
        index
        element = { <ProjectsList segment = { DetailsSegment }/> }
    />,

    <Route
        path = { DetailsSegment + ':id' }
        element = { <ProjectDetails/> }
    />,
];

export default {
    Component,
    Routes,
    Segment,
};