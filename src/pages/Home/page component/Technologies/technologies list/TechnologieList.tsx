import "./technologiesList.css";
import TechnologiesCart from "../technologie cart/TechnologiesCart.tsx";

export default function TechnologiesList() {

    const technologiesArray = [
        {imgSrc: "/src/pages/Home/page component/Technologies/imgs/htmlLogo.jpg", name: "HTML"},
        {imgSrc: "/src/pages/Home/page component/Technologies/imgs/cssLogo.png", name: "CSS"},
        {imgSrc: "/src/pages/Home/page component/Technologies/imgs/scssLogo.png", name: "SCSS"},
        {imgSrc: "/src/pages/Home/page component/Technologies/imgs/jsLogo.png", name: "JS"},
        {imgSrc: "/src/pages/Home/page component/Technologies/imgs/tsLogo.png", name: "TS"},
        {imgSrc: "/src/pages/Home/page component/Technologies/imgs/reactLogo.png", name: "React"},
        {imgSrc: "/src/pages/Home/page component/Technologies/imgs/reduxLogo.png", name: "Redux"},
        {imgSrc: "/src/pages/Home/page component/Technologies/imgs/zustandLogo.png", name: "Zustand"},
        {imgSrc: "/src/pages/Home/page component/Technologies/imgs/viteLogo.png", name: "Vite"},
        {imgSrc: "/src/pages/Home/page component/Technologies/imgs/gitLogo.png", name: "Git"},
        {imgSrc: "/src/pages/Home/page component/Technologies/imgs/githubLogo.png", name: "Github"},
        {imgSrc: "/src/pages/Home/page component/Technologies/imgs/cicdLogo.png", name: "CI / CD"},
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
