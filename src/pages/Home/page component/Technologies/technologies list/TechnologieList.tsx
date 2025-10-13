import "./technologiesList.css";

import TechnologiesCart from "../technologie cart/TechnologiesCart.tsx";

import htmlLogo from '../assets/technologies/htmlLogo.jpg';
import cssLogo from '../assets/technologies/cssLogo.png';
import scssLogo from '../assets/technologies/scssLogo.png';
import jsLogo from '../assets/technologies/jsLogo.png';
import tsLogo from '../assets/technologies/tsLogo.png';
import reactLogo from '../assets/technologies/reactLogo.png';
import reduxLogo from '../assets/technologies/reduxLogo.png';
import zustandLogo from '../assets/technologies/zustandLogo.png';
import viteLogo from '../assets/technologies/viteLogo.png';
import gitLogo from '../assets/technologies/gitLogo.png';
import githubLogo from '../assets/technologies/githubLogo.png';
import cicdLogo from '../assets/technologies/cicdLogo.png';

export default function TechnologiesList() {
    const technologiesArray = [
        { imgSrc: htmlLogo, name: "HTML" },
        { imgSrc: cssLogo, name: "CSS" },
        { imgSrc: scssLogo, name: "SCSS" },
        { imgSrc: jsLogo, name: "JS" },
        { imgSrc: tsLogo, name: "TS" },
        { imgSrc: reactLogo, name: "React" },
        { imgSrc: reduxLogo, name: "Redux" },
        { imgSrc: zustandLogo, name: "Zustand" },
        { imgSrc: viteLogo, name: "Vite" },
        { imgSrc: gitLogo, name: "Git" },
        { imgSrc: githubLogo, name: "Github" },
        { imgSrc: cicdLogo, name: "CI / CD" },
    ];

    return (
        <div className="technologiesList">
            {technologiesArray.map((technology:any, index:number) => (
                <div key={index}>
                    <TechnologiesCart imgSrc={technology.imgSrc} name={technology.name} />
                </div>
            ))}
        </div>
    );
}