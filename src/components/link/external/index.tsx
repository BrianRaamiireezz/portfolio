import { Properties } from '../types.ts';

import '../index.css';
import './index.css';


function LinkExternal(
    properties: Pick<typeof Properties.type, 'to' | 'children'> = Properties.default,
)
{
    return (
        <>
            <a
                href = { properties.to }
                target = { '_blank' }
                rel = { 'noopener noreferrer' }
                className = { 'link link--external link--accent' }
            >
                { properties.children }
                <span aria-hidden = { true }> [↗]</span>
            </a>
        </>
    );
}


export default LinkExternal;