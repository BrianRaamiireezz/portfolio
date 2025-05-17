import { Properties } from './types.ts';

import './index.css';


function Tag(
    properties: typeof Properties.type = Properties.default,
)
{
    return (
        <>
            <span className = { 'tag' }>
                { properties.content }
            </span>
        </>
    );
}


export default Tag;