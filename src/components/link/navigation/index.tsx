import { CSSProperties } from 'react';
import { NavLink } from 'react-router';

import { get_gradient_hue } from '@utils/gradient';

import { Properties } from '../types.ts';

import '@styles/gradient/index.css';
import '../index.css';
import './index.css';


function LinkNavigation(
    properties: Pick<typeof Properties.type, 'to' | 'hue' | 'children'> = Properties.default,
)
{
    const hue: CSSProperties =
        get_gradient_hue( properties.hue );

    return (
        <>
            <NavLink
                to = { properties.to }

                style = { hue }

                className = {
                    ( { isActive } ) => (
                        isActive
                        ? `link link--navigation--active base-gradient link--accent`
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