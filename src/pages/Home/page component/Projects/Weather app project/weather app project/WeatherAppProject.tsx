import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";

import WeatherAppProjectButtons from "../weather app project buttons/WeatherAppProjectButtons.tsx";
import WeatherAppProjectDescription from "../weather app description/WeatherAppProjectDescription.tsx";
import WeatherAppProjectTitle from "../weather app project title/WeatherAppProjectTitle.tsx";
import ProjectsTitle from "../../projects title/ProjectsTItle.tsx";
import ProjectSlider from "../../../../../../UI components/for projects cart/project slider/ProjectSlider.tsx";

import {motion} from "framer-motion";

export default function WeatherAppProject() {

    const imgArray = [
        img1, img2, img3
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