import { ReactNode } from 'react';

import { E_Link_Type, Properties } from './types.ts';

import LinkNavigation from './navigation';


function Link(
    properties: typeof Properties.type = Properties.default,
)
{
    let component: ReactNode;

    switch ( properties.type )
    {
        case E_Link_Type.Navigation:
        {

            component =
                <LinkNavigation
                    to = { properties.to }
                    hue = { properties.hue }
                >
                    { properties.children }
                </LinkNavigation>;

            break;
        }
    }

    return ( component );
}


export default Link;