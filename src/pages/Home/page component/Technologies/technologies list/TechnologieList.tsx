import "./technologiesList.css";
import TechnologiesCart from "../technologie cart/TechnologiesCart.tsx";

export default function TechnologiesList() {

    const technologiesArray = [
        {imgSrc: "http://109.194.51.67/~sv/porfolio/tech%20img/htmlLogo.jpg", name: "HTML"},
        {imgSrc: "http://109.194.51.67/~sv/porfolio/tech%20img/htmlLogo.jpg", name: "CSS"},
        {imgSrc: "http://109.194.51.67/~sv/porfolio/tech%20img/scssLogo.png", name: "SCSS"},
        {imgSrc: "http://109.194.51.67/~sv/porfolio/tech%20img/jsLogo.png", name: "JS"},
        {imgSrc: "http://109.194.51.67/~sv/porfolio/tech%20img/tsLogo.png", name: "TS"},
        {imgSrc: "http://109.194.51.67/~sv/porfolio/tech%20img/reactLogo.png", name: "React"},
        {imgSrc: "http://109.194.51.67/~sv/porfolio/tech%20img/reduxLogo.png", name: "Redux"},
        {imgSrc: "http://109.194.51.67/~sv/porfolio/tech%20img/zustandLogo.png", name: "Zustand"},
        {imgSrc: "http://109.194.51.67/~sv/porfolio/tech%20img/viteLogo.png", name: "Vite"},
        {imgSrc: "http://109.194.51.67/~sv/porfolio/tech%20img/gitLogo.png", name: "Git"},
        {imgSrc: "http://109.194.51.67/~sv/porfolio/tech%20img/githubLogo.png", name: "Github"},
        {imgSrc: "http://109.194.51.67/~sv/porfolio/tech%20img/cicdLogo.png", name: "CI / CD"},
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
