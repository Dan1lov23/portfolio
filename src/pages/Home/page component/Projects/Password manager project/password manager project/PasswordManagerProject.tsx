import {motion} from "framer-motion";

import PasswordManagerProjectTitle from "../password manager project title/PasswordManagerProjectTitle.tsx";
import ProjectSlider from "../../../../../../UI components/for projects cart/project slider/ProjectSlider.tsx";
import PasswordManagerDescription from "../password manager description/PasswordManagerDescription.tsx";
import PasswordManagerProjectButtons from "../password manager project buttons/PasswordManagerProjectButtons.tsx";

export default function PasswordManagerProject() {

    const imgArray = [
        "//109.194.51.67/~sv/porfolio/password manager img/img1.png",
        "//109.194.51.67/~sv/porfolio/password manager img/img2.png",
        "//109.194.51.67/~sv/porfolio/password manager img/img3.png",
        "//109.194.51.67/~sv/porfolio/password manager img/img4.png",
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