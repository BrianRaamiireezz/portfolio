import { useParams } from 'react-router';

import Tag from '@components/tag';
import Link from '@components/link';
import Redirect from '@components/redirect';

import { Projects } from '@assets/data/projects';
import { E_Link_Type } from '@components/link/types.ts';

import '@styles/shadows/index.css';
import '@styles/paragraph/index.css';
import './index.css';


function ProjectDetails()
{

    const { id } = useParams();

    const project =
        Projects.filter(
            ( item ) =>
                item.to === id,
        )[ 0 ];

    if ( !project )
    {
        return (
            <>
                <Redirect/>
            </>
        );
    }
    else
    {
        return (
            <>
                <main className = { 'details' }>

                    <div className = { 'details__header' }>
                        <h1 className = { 'details__name shadow_title' }>
                            { project.name }
                        </h1>

                        <h2 className = { 'not-visible' }>
                            Project tags
                        </h2>
                        <ul
                            className = { 'details__tags' }
                        >

                            {
                                project.tags.map(
                                    (
                                        tag,
                                        index,
                                    ) =>
                                        <li key = { 'details-tag-' + index }>
                                            <Tag
                                                content = { tag }
                                            />
                                        </li>,
                                )
                            }
                        </ul>
                    </div>

                    <img
                        className = { 'details__image' }
                        aria-hidden = { true }
                        src = { '/images/' + project.image.source }
                        alt = { project.image.alt }
                    />

                    <h2 className = { 'not-visible' }>
                        Project description
                    </h2>
                    <p>
                        { project.description }
                    </p>

                    <h2 className = { 'not-visible' }>
                        Project links
                    </h2>
                    <ul
                        className = { 'details__links' }
                    >
                        {
                            project.links.map(
                                (
                                    item,
                                    index,
                                ) =>
                                    <li key = { 'details-link-' + index }>
                                        <Link
                                            to = { item.to }
                                            type = { E_Link_Type.External }
                                        >
                                            { item.name }
                                        </Link>
                                    </li>,
                            )
                        }
                    </ul>
                </main>
            </>
        );
    }
}


export default ProjectDetails;