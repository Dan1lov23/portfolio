import "./defaultHeaderInterfaceLogo.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";

export default function DefaultHeaderInterfaceLogo() {
    return (
        <>
            <div className="defaultHeaderInterfaceLogo">
                <p>
                    <FontAwesomeIcon icon={faCode} className="codeSymbolDark"/>
                </p>
            </div>
        </>
    )
}