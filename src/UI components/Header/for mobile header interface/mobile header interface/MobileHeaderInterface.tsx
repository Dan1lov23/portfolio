import "./mobileHeaderInterface.css";

import MobileHeaderInterfaceLogo from "../mobile header interaface logo/MobileHeaderInterfaceLogo.tsx";
import MobileInterfaceHeaderButton from "../mobile interface header button/MobileInterfaceHeaderButton.tsx";

export default function MobileHeaderInterface() {
    return (
        <>
            <div className="mobileHeaderInterface">
                <MobileHeaderInterfaceLogo/>
                <MobileInterfaceHeaderButton/>
            </div>
        </>
    )
}