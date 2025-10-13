import "./technologies.css";

import {motion} from "framer-motion";

import TechnologiesList from "../technologies list/TechnologieList.tsx";
import TechnologiesTitle from "../technologies title/TechnologiesTitle.tsx";

export default function Technologies() {
    return (
        <>
            <div className="technologies">
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.8 }}
                >
                    <TechnologiesTitle/>
                    <TechnologiesList/>
                </motion.div>
            </div>
        </>
    )
}