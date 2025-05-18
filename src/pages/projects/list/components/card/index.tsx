import { CSSProperties } from 'react';
import { Link } from 'react-router';

import Tag from '@components/tag';

import { get_gradient_hue } from '@utils/gradient';

import { Properties } from './types.ts';

import '@styles/shadows/index.css';
import '@styles/gradient/index.css';
import './index.css';


function ProjectCard(
    properties: typeof Properties.type = Properties.default,
)
{
    const hue: CSSProperties =
        get_gradient_hue( properties.hue );

    return (
        <>
            <Link
                to = { properties.to }

                className = { 'card' }
            >
                <span className = { 'not-visible' }>
                    Project name,
                </span>

                <span
                    style = { hue }

                    className = {
                        `card__title base-gradient card__title--accent shadow_title`
                    }
                >
                    { properties.name }
                </span>

                <span className = { 'not-visible' }>
                    . Project tags,
                </span>

                <span className = { 'card__tags' }>
                    {
                        properties.tags.map(
                            ( content ) =>
                                <Tag content = { content }/>,
                        )
                    }
                </span>
            </Link>
        </>
    );
}


export default ProjectCard;