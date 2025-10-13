import "./technologiesList.css";

import TechnologiesCart from "../technologie cart/TechnologiesCart.tsx";

import htmlLogo from './imgs/htmlLogo.jpg';
import cssLogo from '../imgs/technologies/cssLogo.png';
import scssLogo from '../imgs/technologies/scssLogo.png';
import jsLogo from '../imgs/technologies/jsLogo.png';
import tsLogo from '../imgs/technologies/tsLogo.png';
import reactLogo from '../imgs/technologies/reactLogo.png';
import reduxLogo from '../imgs/technologies/reduxLogo.png';
import zustandLogo from '../imgs/technologies/zustandLogo.png';
import viteLogo from '../imgs/technologies/viteLogo.png';
import gitLogo from '../imgs/technologies/gitLogo.png';
import githubLogo from '../imgs/technologies/githubLogo.png';
import cicdLogo from '../imgs/technologies/cicdLogo.png';


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