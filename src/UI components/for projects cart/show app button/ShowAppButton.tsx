import "./showAppButton.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";

import {Link} from "react-router-dom";

export default function ShowAppButton({link}:{link:string}) {
    return (
        <>
            <div className="showAppButton">
                <Link to={link}>
                    <button>
                        <FontAwesomeIcon icon={faEye}/>
                    </button>
                </Link>
            </div>
        </>
    )
}
