import {motion} from "framer-motion";

import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";

import PasswordManagerProjectTitle from "../password manager project title/PasswordManagerProjectTitle.tsx";
import ProjectSlider from "../../../../../../UI components/for projects cart/project slider/ProjectSlider.tsx";
import PasswordManagerDescription from "../password manager description/PasswordManagerDescription.tsx";
import PasswordManagerProjectButtons from "../password manager project buttons/PasswordManagerProjectButtons.tsx";

export default function PasswordManagerProject() {

    const imgArray = [
        img1, img2, img3, img4
    ]

    return (
        <>
            <div className="passwordManagerProject">
                <motion.div
                    initial={{opacity: 0, y: 0}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 1.8}}
                >
                    <PasswordManagerProjectTitle/>
                    <ProjectSlider imgArray={imgArray}/>
                    <PasswordManagerDescription/>
                    <PasswordManagerProjectButtons/>
                </motion.div>
            </div>
        </>
)
}