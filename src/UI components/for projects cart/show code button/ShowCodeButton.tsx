import "./showCodeButton.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";

import {Link} from "react-router-dom";

export default function ShowCodeButton({link}:{link:string}) {


    return (
        <>
            <div className="showCodeButton">
                <Link to={link}>
                    <button>
                        <FontAwesomeIcon icon={faCode}/>
                    </button>
                </Link>
            </div>
        </>
    )
}
