import ContactsList from "../contcts list/ContactsList.tsx";

import {motion} from "framer-motion";

export default function Contacts() {
    return (
        <>
            <div className="contacts">
                <motion.div
                    initial={{opacity: 0, y: 0}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 1.8}}
                >
                    <ContactsList/>
                </motion.div>
            </div>
        </>
)
}