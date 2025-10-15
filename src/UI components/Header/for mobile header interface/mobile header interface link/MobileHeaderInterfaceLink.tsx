import "./mobileHeaderInterfaceLink.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";

interface Props {
    link: string;
    position: number;
    onClose: () => void;
}

export default function MobileHeaderInterfaceLink({link, position, onClose}: Props) {

    const handleClick = () => {
        onClose();
        setTimeout(() => {
            window.scrollTo({ top: position, behavior: 'smooth' });
        }, 300);
    }

    return (
        <div className="mobileHeaderInterfaceLink" onClick={handleClick}>
            <p><FontAwesomeIcon fontSize="20px" icon={faCircle}/> {link}</p>
        </div>
    );
}
