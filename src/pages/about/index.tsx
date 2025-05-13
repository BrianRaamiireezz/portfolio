import Link from '../../components/link';

import { E_Link_Type } from '../../components/link/types.ts';

import './index.css';


function About()
{
    return (
        <>
            <main className = { 'about' }>
                <h1>
                    About me
                </h1>

                <p>
                    Hi. My name is Brian Eduardo Ibarra Ramírez.
                </p>

                <p className = { 'about__section' }>
                    <span className = { 'about__section__question' }>
                        What am I doing as of 2025?
                    </span>

                    <span>
                        I'm currently getting a degree in computer
                        engineering at the Universidad Autónoma del
                        Estado de México.
                    </span>
                </p>

                <p className = { 'about__section' }>
                    <span className = { 'about__section__question' }>
                        What am I looking for?
                    </span>

                    <span>
                        I'm looking to start my career in the software
                        industry
                    </span>
                </p>

                <p className = { 'about__section' }>
                    <span className = { 'about__section__question' }>
                        What am I interested in?
                    </span>

                    <span>
                        - Learning
                    </span>
                    <span>
                        - Design
                    </span>
                    <span>
                        - Videogames
                    </span>
                </p>

                <div>
                    <Link
                        to = { 'https://github.com/BrianRaamiireezz/portfolio' }
                        type = { E_Link_Type.External }
                    >
                        Github
                    </Link>
                </div>
            </main>
        </>
    );
}


export default About;