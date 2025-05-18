import ProjectCard from './components/card';

import { Projects } from '@assets/data/projects';

import '@styles/paragraph/index.css';
import './index.css';


function ProjectsList(
    { segment }: { segment: string },
)
{

    return (
        <>
            <h1 className = { 'not-visible' }>
                Projects
            </h1>

            <ul className = { 'projects-list' }>
                {
                    Projects.map(
                        (
                            item,
                            index,
                        ) =>
                            <li key = { 'projects-item-' + index }>
                                <ProjectCard
                                    to = { segment + item.to }
                                    name = { item.name }
                                    tags = { item.tags }
                                    hue = { item.hue ?? undefined }
                                />
                            </li>,
                    )
                }
            </ul>

        </>
    );
}


export default ProjectsList;