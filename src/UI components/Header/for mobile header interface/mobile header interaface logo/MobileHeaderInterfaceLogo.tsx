import "./mobileHeaderInterfaceLogo.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";

export default function MobileHeaderInterfaceLogo() {

    return (
        <>
            <div className="mobileHeaderInterfaceLogo">
                <p>
                    <FontAwesomeIcon icon={faCode}/>
                </p>
            </div>
        </>
    )
}
