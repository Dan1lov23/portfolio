import {motion} from "framer-motion";

import PasswordManagerProjectTitle from "../password manager project title/PasswordManagerProjectTitle.tsx";
import ProjectSlider from "../../../../../../UI components/for projects cart/project slider/ProjectSlider.tsx";
import PasswordManagerDescription from "../password manager description/PasswordManagerDescription.tsx";
import PasswordManagerProjectButtons from "../password manager project buttons/PasswordManagerProjectButtons.tsx";

export default function PasswordManagerProject() {

    const imgArray = [
        "./src/pages/Home/page component/Projects/Password manager project/img/img1.png",
        "./src/pages/Home/page component/Projects/Password manager project/img/img2.png",
        "./src/pages/Home/page component/Projects/Password manager project/img/img3.png",
        "./src/pages/Home/page component/Projects/Password manager project/img/img4.png"
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