import "./aboutMeLogo.css";

import {motion} from "framer-motion";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";

export default function AboutMeLogo() {
    return (
        <>
            <div className="aboutMeLogo">
                <motion.div
                    animate={{opacity: 1, y: 110}}
                    transition={{duration: 1}}
                    className="des"
                >
                   <h2>a Frontend Engineer. I help startups launch and grow their products.</h2>
                    <p>I am a software engineer who creates adaptive and cross-browser interfaces using various technologies.</p>
                </motion.div>
                <motion.div
                    animate={{opacity: 1, y: 110}}
                    transition={{duration: 1}}
                    className="logo"
                >
                    <p>
                        <FontAwesomeIcon icon={faCode} size="lg" />
                    </p>
                </motion.div>
            </div>
        </>
    )
}
