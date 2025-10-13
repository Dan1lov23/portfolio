import WeatherAppProjectTitle from "../weather app project title/WeatherAppProjectTitle.tsx";
import ProjectsTitle     from "../../projects title/ProjectsTItle.tsx";
import ProjectSlider from "../../../../../../UI components/for projects cart/project slider/ProjectSlider.tsx";

import {motion} from "framer-motion";
import WeatherAppProjectButtons from "../weather app project buttons/WeatherAppProjectButtons.tsx";
import WeatherAppProjectDescription from "../weather app description/WeatherAppProjectDescription.tsx";

export default function WeatherAppProject() {

    const imgArray = [
        "/src/pages/Home/page component/Projects/Weather app project/img/img1.png",
        "/src/pages/Home/page component/Projects/Weather app project/img/img2.png",
        "/src/pages/Home/page component/Projects/Weather app project/img/img3.png"
    ];

    return (
        <>
            <div className="weatherAppProject">
                <motion.div
                    initial={{opacity: 0, y: 0}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 1.8}}
                >
                    <ProjectsTitle/>
                    <WeatherAppProjectTitle/>
                    <ProjectSlider imgArray={imgArray}/>
                    <WeatherAppProjectDescription/>
                    <WeatherAppProjectButtons/>
                </motion.div>
            </div>
        </>
)
}