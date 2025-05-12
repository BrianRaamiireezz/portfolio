import { ReactNode } from 'react';

import { E_Link_Type, Properties } from './types.ts';

import LinkNavigation from './navigation';
import LinkExternal from './external';


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
        case E_Link_Type.External:
        {
            component =
                <LinkExternal
                    to = { properties.to }
                >
                    { properties.children }
                </LinkExternal>;

            break;
        }
    }

    return ( component );
}


export default Link;