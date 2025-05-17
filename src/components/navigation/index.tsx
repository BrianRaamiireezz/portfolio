import Link from '../link';

import { E_Link_Type } from '../link/types.ts';
import { Properties } from './types.ts';

import './index.css';


function Navigation(
    properties: typeof Properties.type = Properties.default,
)
{
    return (
        <>
            <nav className = { 'navigation' }>
                <ul>
                    {
                        properties.items.map(
                            (
                                item,
                                index,
                            ) =>
                                (
                                    <li key = { 'navigation-item-' + index }>
                                        <Link
                                            to = { item.to }
                                            type = { E_Link_Type.Navigation }
                                            hue = { item.hue }
                                        >
                                            { item.children }
                                        </Link>
                                    </li>
                                ),
                        )
                    }
                </ul>
            </nav>
        </>
    );
}


export default Navigation;