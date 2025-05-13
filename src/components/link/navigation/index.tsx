import { CSSProperties } from 'react';
import { NavLink } from 'react-router';

import '../index.css';
import './index.css';

import { Properties } from '../types.ts';


function LinkNavigation(
    properties: Pick<typeof Properties.type, 'to' | 'hue' | 'children'> = Properties.default,
)
{
    const hue: CSSProperties =
        properties.hue
        ?
        {
            '--color-gradient-accent-hue': properties.hue ?? '0',
            '--color-gradient-accent-saturation': '89%',
        } as CSSProperties
        : {};

    return (
        <>
            <NavLink
                to = { properties.to }

                style = { hue }

                className = {
                    ( { isActive } ) => (
                        isActive
                        ? 'link link--navigation--active link--accent'
                        : 'link link--navigation--inactive'
                    )
                }
            >
                { properties.children }
            </NavLink>
        </>
    );
}


export default LinkNavigation;