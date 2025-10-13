import "./technologiesList.css";

import TechnologiesCart from "../technologie cart/TechnologiesCart.tsx";

export default function TechnologiesList() {

    const technologiesArray = [
        {imgSrc: "//109.194.51.67/~sv/porfolio/tech%20img/htmlLogo.jpg", name: "HTML"},
        {imgSrc: "//109.194.51.67/~sv/porfolio/tech%20img/htmlLogo.jpg", name: "CSS"},
        {imgSrc: "//109.194.51.67/~sv/porfolio/tech%20img/scssLogo.png", name: "SCSS"},
        {imgSrc: "//109.194.51.67/~sv/porfolio/tech%20img/jsLogo.png", name: "JS"},
        {imgSrc: "//109.194.51.67/~sv/porfolio/tech%20img/tsLogo.png", name: "TS"},
        {imgSrc: "//109.194.51.67/~sv/porfolio/tech%20img/reactLogo.png", name: "React"},
        {imgSrc: "//109.194.51.67/~sv/porfolio/tech%20img/reduxLogo.png", name: "Redux"},
        {imgSrc: "//109.194.51.67/~sv/porfolio/tech%20img/zustandLogo.png", name: "Zustand"},
        {imgSrc: "//109.194.51.67/~sv/porfolio/tech%20img/viteLogo.png", name: "Vite"},
        {imgSrc: "://109.194.51.67/~sv/porfolio/tech%20img/gitLogo.png", name: "Git"},
        {imgSrc: "//109.194.51.67/~sv/porfolio/tech%20img/githubLogo.png", name: "Github"},
        {imgSrc: "//109.194.51.67/~sv/porfolio/tech%20img/cicdLogo.png", name: "CI / CD"},
    ];

    return (
        <>
            <div className="technologiesList">
                {technologiesArray.map((technology:any, index:number) => (
                    <div key={index}>
                        <TechnologiesCart imgSrc={technology.imgSrc} name={technology.name} />
                    </div>
                ))}
            </div>
        </>
    )
}
