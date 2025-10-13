import "./technologiesList.css";

import TechnologiesCart from "../technologie cart/TechnologiesCart.tsx";

import htmlLogo from '../imgs/htmlLogo.jpg';
import cssLogo from '../imgs/cssLogo.png';
import scssLogo from '../imgs/cssLogo.png';
import jsLogo from '../imgs/jsLogo.png';
import tsLogo from '../imgs/tsLogo.png';
import reactLogo from '../imgs/reactLogo.png';
import reduxLogo from '../imgs/reduxLogo.png';
import zustandLogo from '../imgs/zustandLogo.png';
import viteLogo from '../imgs/viteLogo.png';
import gitLogo from '../imgs/gitLogo.png';
import githubLogo from '../imgs/githubLogo.png';
import cicdLogo from '../imgs/cicdLogo.png';


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
